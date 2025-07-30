import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
} from 'lucide-react';
import AnimatedText from './AnimatedText';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_ldd916m', 
        'template_itdmwuq', 
        formData,
        'pnsABVUpdC57sDGBv' 
      );
      
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 w-full relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? '' : 'text-gray-800'}`}>
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Contact</span> Me
            </h2>
            <div className={`h-1 w-20 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mx-auto rounded-full`}></div>
          </motion.div>
        </div>
        
        <div className="mb-8 text-center">
          <AnimatedText
            text="Have a project in mind or want to discuss potential opportunities? Feel free to reach out!"
            className={darkMode ? 'text-gray-300' : 'text-gray-700'}
            once={true}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? '' : 'text-gray-800'}`}>
              Get In Touch
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
              I'm currently looking for new opportunities to apply my skills and
              knowledge in the IT and software development field. Whether you
              have a question or just want to say hi, I'll try my best to get
              back to you!
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 ${darkMode ? 'bg-[#111827]' : 'bg-white/70 shadow-md'} rounded-full`}>
                  <PhoneIcon
                    size={20}
                    className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                  />
                </div>
                <div>
                  <h4 className={`text-lg font-medium ${darkMode ? '' : 'text-gray-800'}`}>
                    Phone
                  </h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    +94 (77) 528 8804
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`p-3 ${darkMode ? 'bg-[#111827]' : 'bg-white/70 shadow-md'} rounded-full`}>
                  <MailIcon
                    size={20}
                    className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                  />
                </div>
                <div>
                  <h4 className={`text-lg font-medium ${darkMode ? '' : 'text-gray-800'}`}>
                    Email
                  </h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    vibodhakasun01@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`p-3 ${darkMode ? 'bg-[#111827]' : 'bg-white/70 shadow-md'} rounded-full`}>
                  <MapPinIcon
                    size={20}
                    className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                  />
                </div>
                <div>
                  <h4 className={`text-lg font-medium ${darkMode ? '' : 'text-gray-800'}`}>
                    Location
                  </h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className={`text-lg font-medium mb-4 ${darkMode ? '' : 'text-gray-800'}`}>
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 ${darkMode ? 'bg-[#111827] hover:bg-[#1a2234]' : 'bg-white/70 hover:bg-white/90 shadow-md'} rounded-md transition-colors`}
                >
                  <LinkedinIcon
                    size={20}
                    className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                  />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 ${darkMode ? 'bg-[#111827] hover:bg-[#1a2234]' : 'bg-white/70 hover:bg-white/90 shadow-md'} rounded-md transition-colors`}
                >
                  <GithubIcon
                    size={20}
                    className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                  />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 ${darkMode ? 'bg-[#111827] hover:bg-[#1a2234]' : 'bg-white/70 hover:bg-white/90 shadow-md'} rounded-md transition-colors`}
                >
                  <TwitterIcon
                    size={20}
                    className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? '' : 'text-gray-800'}`}>
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-3 ${darkMode ? 'bg-[#111827]/70 border border-gray-700 focus:border-blue-400' : 'bg-white/70 border border-gray-300 focus:border-blue-600'} rounded-md focus:outline-none transition-colors ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full p-3 ${darkMode ? 'bg-[#111827]/70 border border-gray-700 focus:border-blue-400' : 'bg-white/70 border border-gray-300 focus:border-blue-600'} rounded-md focus:outline-none transition-colors ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full p-3 ${darkMode ? 'bg-[#111827]/70 border border-gray-700 focus:border-blue-400' : 'bg-white/70 border border-gray-300 focus:border-blue-600'} rounded-md focus:outline-none transition-colors ${errors.subject ? 'border-red-500' : ''}`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className={`w-full p-3 ${darkMode ? 'bg-[#111827]/70 border border-gray-700 focus:border-blue-400' : 'bg-white/70 border border-gray-300 focus:border-blue-600'} rounded-md focus:outline-none transition-colors ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              {submitStatus && (
                <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full p-3 ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;