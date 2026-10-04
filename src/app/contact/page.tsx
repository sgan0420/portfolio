"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowRight,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          to_email: "shijiegan.gs@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setError(
        "Failed to send message. Please try again or contact me directly."
      );
    } finally {
      setIsLoading(false);
    }
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
      value: "Kuala Lumpur, Malaysia",
      href: "https://maps.google.com/?q=Kuala+Lumpur,+Malaysia",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/sgan0420",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shijie-gan/",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/gan_shijie",
    },
  ];

  return (
    <div className="page-shell">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-heading"
        >
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-lead">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="contact-form space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="section-label text-muted">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-field"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="section-label text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="section-label text-muted">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-field"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="section-label text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {isSuccess && (
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm rounded-lg"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg"
                >
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="button-primary group disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
                {!isLoading && (
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-details lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="section-label text-muted mb-6">Contact Details</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={
                        info.href?.startsWith("https://wa.me") ||
                        info.href?.startsWith("https://maps.google.com")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        info.href?.startsWith("https://wa.me") ||
                        info.href?.startsWith("https://maps.google.com")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-4 group"
                    >
                      <div className="mt-1">
                        <Icon className="w-5 h-5 text-subtle group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-sm text-muted mb-1">{info.label}</p>
                        <p className="text-lg font-normal group-hover:underline underline-offset-4">
                          {info.value}
                        </p>
                        {info.isWhatsApp && (
                          <div className="flex items-center gap-1 mt-1 text-green-600 dark:text-green-400 text-xs">
                            <FaWhatsapp className="w-3 h-3" />
                            <span>WhatsApp me directly</span>
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="section-label text-muted mb-6">Socials</h3>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-surface rounded-lg border border-line">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full "></div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Available for new opportunities
                </span>
              </div>
              <p className="text-sm text-muted font-normal">
                I&apos;m currently open to new freelance projects and full-time
                opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
