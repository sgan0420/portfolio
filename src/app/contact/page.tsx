"use client";

import { useState } from "react";
import PageHeading from "@/components/PageHeading";
import { HiMail, HiLocationMarker } from "react-icons/hi";
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
      const { default: emailjs } = await import("@emailjs/browser");
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
      icon: FaWhatsapp,
      label: "Phone / WhatsApp",
      value: "+60 12-638 3016",
      href: "https://wa.me/60126383016",
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
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/gan_shijie",
    },
  ];

  return (
    <div className="page-shell contact-page">
      <div className="site-container">
        <PageHeading title="Get in Touch">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you.
        </PageHeading>

        <div className="contact-layout" data-reveal>
          <section
            className="contact-direct"
            aria-labelledby="contact-direct-title"
          >
            <h2 id="contact-direct-title">Connect directly</h2>
            <a
              href="https://www.linkedin.com/in/shijie-gan/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary contact-linkedin"
            >
              <FaLinkedin aria-hidden="true" />
              Connect on LinkedIn
            </a>

            <nav className="contact-profiles" aria-label="Other profiles">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary"
                  >
                    <Icon aria-hidden="true" />
                    {social.label}
                  </a>
                );
              })}
            </nav>

            <ul className="contact-methods">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const external = info.href.startsWith("https://");
                return (
                  <li key={info.label}>
                    <a
                      href={info.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="contact-method"
                    >
                      <Icon aria-hidden="true" />
                      <span className="contact-method-copy">
                        <span className="contact-method-label">
                          {info.label}
                        </span>
                        <span className="contact-method-value">
                          {info.value}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="contact-availability">
              <span aria-hidden="true" />
              Open to freelance projects and full-time opportunities.
            </p>
          </section>

          <form
            onSubmit={handleSubmit}
            className="contact-form space-y-6"
            aria-labelledby="contact-form-title"
          >
            <div className="form-heading">
              <h2 id="contact-form-title">Send a message</h2>
            </div>
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
                rows={5}
                className="form-field resize-y"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Status Messages */}
            {isSuccess && (
              <div
                role="status"
                className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm rounded-lg"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              aria-busy={isLoading}
              className="button-secondary"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
