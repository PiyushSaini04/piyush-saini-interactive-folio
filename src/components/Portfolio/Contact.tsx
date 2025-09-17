import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageSquare,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_o7rujg9", // your EmailJS service ID
      "template_ki3wyi9", // your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`,
        to_email: "piyushsaini0404@gmail.com"
      },
      "eA_rUJJdfpUYYJwP_" // your EmailJS public key
    );

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error(error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
  }
};

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "piyushsaini0404@gmail.com",
      link: "mailto:piyushsaini0404@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9667169762",
      link: "tel:+919667169762",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jalandhar, Punjab, India",
      link: "https://maps.google.com/?q=Jalandhar+Punjab+India",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/piyush-saini",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/piyush-saini",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:piyushsaini0404@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 md:py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">Let's Work Together</h2>
          <p className="section-subtitle text-base sm:text-lg">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 md:space-y-8"
          >
            <div className="card-glass p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">Get in Touch</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, 
                whether that's a project, job opportunity, or just a chat about technology.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl hover:bg-glass-hover transition-all duration-300 group"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-xs sm:text-sm text-gray-400">{info.title}</p>
                      <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Follow me on</p>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className={`p-2 sm:p-3 rounded-full bg-glass border border-border hover:bg-glass-hover transition-all duration-300 hover:scale-110 text-gray-400 ${social.color}`}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="card-glass p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold gradient-text">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-glass w-full text-sm sm:text-base px-3 py-2"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-glass w-full text-sm sm:text-base px-3 py-2"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="input-glass w-full resize-none text-sm sm:text-base px-3 py-2"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 sm:py-3 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-xs sm:text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-xs sm:text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
