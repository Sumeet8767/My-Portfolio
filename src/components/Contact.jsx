import { useRef, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { fadeIn, slideIn } from '../utils/motion'
import SectionWrapper from './SectionWrapper'

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError('')

    try {
      await emailjs.sendForm(
        'service_ftpgdb4',
        'template_eblyzqo',
        formRef.current,
        'ojBmzqa_krgHgwzfR'
      )
      setSuccess(true)
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError(err?.text || err?.message || JSON.stringify(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <Motion.div variants={fadeIn('up', 0)}>
        <p className="text-primary font-semibold text-lg tracking-widest uppercase">
          Get In Touch
        </p>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2">Contact.</h2>
      </Motion.div>

      <div className="mt-10 flex flex-col lg:flex-row gap-12">
        <Motion.div className="flex-1 max-w-xl" variants={slideIn('left', 0.2)}>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                  text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Your Email</label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                  text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Hi, I'd like to work with you..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                  text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            {success && (
              <p className="text-green-400 text-sm font-medium">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {error && (
              <p className="text-red-400 text-sm font-medium">
                ✗ Error: {error}
              </p>
            )}

            <Motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.03 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              className="bg-primary hover:bg-primary/80 disabled:opacity-60
                text-white font-semibold py-3 px-8 rounded-xl w-fit shadow-lg shadow-primary/20"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Motion.button>
          </form>
        </Motion.div>

        <Motion.div
          className="flex flex-col gap-6 justify-start pt-2"
          variants={fadeIn('left', 0.3)}
        >
        </Motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')