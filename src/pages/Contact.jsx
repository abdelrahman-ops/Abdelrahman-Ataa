import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual form submission logic
      // This is a mock API call - replace with your backend endpoint
      const response = await fetch('https://formspree.io/f/mkgrgelp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 font-mono mb-4">
          <span className="text-purple-400">$</span> CONTACT_ME
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Let's connect and discuss potential collaborations or opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl text-cyan-400 font-mono mb-6">SEND_MESSAGE</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className={`w-full bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-cyan-400`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                className={`w-full bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-cyan-400`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows="5"
                className={`w-full bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-cyan-400`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded font-mono hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'SENDING...'
              ) : (
                <>
                  <FaPaperPlane /> SEND
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm mt-2">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm mt-2">
                Failed to send message. Please try again later.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl text-cyan-400 font-mono mb-6">CONNECT_WITH_ME</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-purple-400 text-xl" />
              <a href="mailto:abdelrahmanataa17@gmail.com" className="text-gray-300 hover:text-cyan-400">
                abdelrahmanataa17@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-purple-400 text-xl" />
              <a href="tel:+201015372301" className="text-gray-300 hover:text-cyan-400">
                +20 101 537 2301
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub className="text-purple-400 text-xl" />
              <a 
                href="https://github.com/abdelrahman-ops" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-cyan-400"
              >
                github.com/abdelrahman-ops
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-purple-400 text-xl" />
              <a 
                href="https://www.linkedin.com/in/abdelrahman-ataa-b557b8219/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-cyan-400"
              >
                linkedin.com/in/abdelrahman-ataa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;