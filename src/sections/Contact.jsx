import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState({ show: false, type: '', message: '' })
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [characterCount, setCharacterCount] = useState(0)
  const MAX_MESSAGE_LENGTH = 500

  // Close notification after 5 seconds
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    // Name validation
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      valid = false;
    }
    
    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    // Message validation
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'message') {
      if (value.length <= MAX_MESSAGE_LENGTH) {
        setCharacterCount(value.length);
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear error when typing
    if (errors[name]) {
      setErrors({...errors, [name]: ''});
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          form_name: formData.name,
          from_email: formData.email,
          to_name: "Ramatjyot Singh",
          message: formData.message,
          to_email: "ramatjyot13.ca@gmail.com"
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setNotification({
        show: true,
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      setFormData({ name: '', email: '', message: '' });
      setCharacterCount(0);
    } catch (error) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  }
  
  // Refs for scroll animations
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  
  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 })
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

 

  return (
    <section 
      id="contact" 
      className="c-space my-20 relative"
      ref={sectionRef}
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-5 right-5 z-50 p-4 rounded-lg shadow-lg ${
              notification.type === 'success' ? 'bg-green-700' : 'bg-red-700'
            } text-white max-w-xs`}
          >
            <div className="flex items-center">
              <span className="mr-2">
                {notification.type === 'success' ? '✓' : '✗'}
              </span>
              <p>{notification.message}</p>
              <button 
                onClick={() => setNotification({ ...notification, show: false })}
                className="ml-auto text-white"
                aria-label="Close notification"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        
      <div className="relative md:min-h-screen flex items-center justify-center flex-col lg:bg-[url('/assets/terminal.png')] bg-contain bg-center bg-no-repeat">
        <motion.div 
          ref={formRef}
          variants={containerVariants}
          initial="hidden"
          animate={isFormInView ? "visible" : "hidden"}
          className="contact-container relative z-10 
            p-8 sm:p-10
            max-w-xl w-full
            rounded-2xl
            bg-gradient-to-b from-gray-900/95 to-black/95
            backdrop-blur-md
            border border-gray-800
            shadow-xl shadow-black/50
            lg:bg-transparent lg:bg-none lg:from-transparent lg:to-transparent lg:shadow-none lg:border-none lg:backdrop-blur-none"
        >
          <motion.div ref={headingRef}>
            <motion.h3 
              variants={itemVariants}
              className="head-text"
            >
              Let's Talk
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-white-600 mt-3"
            >
              I'm always open to new opportunities and collaborations.
            </motion.p>
          </motion.div>
          
          <motion.form 
            variants={containerVariants}
            className="mt-12 flex flex-col space-y-7"
            onSubmit={handleSubmit}
          >
            <motion.div variants={itemVariants} className='space-y-3'>
              <label htmlFor="name" className="field-label">Full Name</label>
              <input 
                id="name"
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className={`field-input ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Your name" 
                aria-describedby={errors.name ? "name-error" : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </motion.div>
            
            <motion.div variants={itemVariants} className='space-y-3'>
              <label htmlFor="email" className="field-label">Email</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className={`field-input ${errors.email ? 'border-red-500' : ''}`}
                placeholder="your.email@example.com" 
                aria-describedby={errors.email ? "email-error" : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>
            
            <motion.div variants={itemVariants} className='space-y-3'>
              <label htmlFor="message" className="field-label">Message</label>
              <textarea 
                id="message"
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className={`field-input ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Your message here..." 
                rows="5"
                aria-describedby={errors.message ? "message-error" : "char-count"}
                required
              />
              <div className="flex justify-between">
                {errors.message ? (
                  <p id="message-error" className="text-red-500 text-sm">{errors.message}</p>
                ) : (
                  <span></span>
                )}
                <p id="char-count" className={`text-sm ${characterCount > MAX_MESSAGE_LENGTH * 0.8 ? 'text-yellow-500' : 'text-gray-400'}`}>
                  {characterCount}/{MAX_MESSAGE_LENGTH}
                </p>
              </div>
            </motion.div>
            
            <motion.button 
              variants={itemVariants}
              type="submit" 
              className="field-btn cursor-pointer mt-4" 
              disabled={loading}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Submit <img src="/assets/arrow-up.png" alt="" className='field-btn_arrow ml-2'/>
                </span>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
        
        {/* Optional background animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isSectionInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -z-10 w-full h-full pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-radial from-[#1a1a1a] to-transparent opacity-60"></div>
        </motion.div>
      </div>     
    </section>
  )
}

export default Contact