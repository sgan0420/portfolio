"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiPaperAirplane,
  HiUser,
  HiChat
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // EmailJS configuration using environment variables
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'shijiegan.gs@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email sent successfully:', result);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setError("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "shijiegan.gs@gmail.com",
      href: "mailto:shijiegan.gs@gmail.com",
    },
    {
      icon: HiPhone,
      label: "Phone / WhatsApp",
      value: "+60 12-638 3016",
      href: "https://wa.me/60126383016",
      isWhatsApp: true,
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "Bukit Jalil, Kuala Lumpur",
      href: "https://maps.google.com/?q=Bukit+Jalil,+Kuala+Lumpur",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/sgan0420",
      color: "hover:text-gray-400",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shijie-gan-968926197/",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/gan_shijie",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white">
      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <HiChat className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <HiUser className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <HiMail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                  </div>

                  {/* Status Messages */}
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                    >
                      ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                    >
                      ❌ {error}
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={{ scale: isLoading ? 1 : 1.05 }}
                    whileTap={{ scale: isLoading ? 1 : 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        target={info.href?.startsWith("https://wa.me") || info.href?.startsWith("https://maps.google.com") ? "_blank" : undefined}
                        rel={info.href?.startsWith("https://wa.me") || info.href?.startsWith("https://maps.google.com") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                          {info.isWhatsApp && (
                            <div className="flex items-center gap-1 mt-1">
                              <FaWhatsapp className="w-4 h-4 text-green-400" />
                              <span className="text-xs text-green-400">WhatsApp me directly</span>
                            </div>
                          )}
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group ${social.color}`}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium">{social.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Availability</h2>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for new opportunities</span>
                </div>
                <p className="text-gray-300 text-sm">
                  I'm currently open to new freelance projects and full-time opportunities. 
                  Feel free to reach out if you have an exciting project or role in mind!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
