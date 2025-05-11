import { useRef,useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        "service_wdmlvbg",
        "template_aqialum",
        {
          form_name: formData.name,
          from_email: formData.email,
          to_name: "Ramatjyot Singh",
          message: formData.message,
          to_email: "ramatjyot13.ca@gmail.com"
        },
        "7BSsW776fQYwnapN6"
      )
      alert('Email sent successfully!')
      setFormData({ name: '', email: '', message: '' }) // Reset form data
    
      setLoading(false)
    } catch (error) {
      alert('Error sending email: ' + error.message)
      console.error('Error sending email:', error)
      setLoading(false)
    }

    console.log('Form submitted:', formData)
  }
  return (
    <section className="c-space my-20">
        <div className="relative md:min-h-screen flex items-center justify-center flex-col lg:bg-[url('/assets/terminal.png')] bg-contain bg-center bg-no-repeat ">
          <div className="contact-container relative z-10 
   p-8 sm:p-10
   max-w-xl w-full
   rounded-2xl
   bg-gradient-to-b from-gray-900/95 to-black/95
   backdrop-blur-md
   border border-gray-800
   shadow-xl shadow-black/50
   lg:bg-transparent lg:bg-none lg:from-transparent lg:to-transparent lg:shadow-none lg:border-none">
            <h3 className="head-text">Let's Talk</h3>
            <p className="text-lg text-white-600 mt-3">Whatever you are doing I am here to lend a hand.</p>
            <form ref ={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7 ">
              <label className='space-y-3'>
                <span className="field-label">Full Name</span>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="field-input" 
                  placeholder="Mario" 
                  required
                />
              </label>
              <label className='space-y-3'>
                <span className="field-label">Email</span>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="field-input" 
                  placeholder="mario@mario.jp" 
                  required
                />
              </label>
              <label className='space-y-3'>
                <span className="field-label">Message</span>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="field-input" 
                  placeholder="Hi! Itsa me Mario!" 
                  required
                />
              </label>
            <button type="submit" className="field-btn cursor-pointer" disabled={loading}>{loading?'Sending...':'Submit'} <img src="/assets/arrow-up.png" alt="field btn" className='field-btn_arrow'/></button>
            </form>
          </div>
          </div>     
    </section>
  )
}

export default Contact