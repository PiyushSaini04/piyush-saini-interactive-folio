import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Loader2,
  Contact
} from "lucide-react";

/**
 * Professional Contact Page Component
 * Features: Responsive Design, Framer Motion Animations, REST API Email Integration, 
 * Glassmorphism UI, and Form Validation States.
 */

const Contacts = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Fetch API to avoid external dependency issues
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: "service_o7rujg9",
          template_id: "template_ki3wyi9",
          user_id: "eA_rUJJdfpUYYJwP_", // Public Key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`,
            to_email: "piyushsaini0404@gmail.com"
          }
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Email Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "piyushsaini0404@gmail.com",
      link: "mailto:piyushsaini0404@gmail.com",
      accent: "bg-blue-500/10 text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9667169762",
      link: "tel:+919667169762",
      accent: "bg-emerald-500/10 text-emerald-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jalandhar, Punjab, India",
      link: "https://maps.google.com/?q=Jalandhar+Punjab+India",
      accent: "bg-purple-500/10 text-purple-400"
    }
  ];

  const socials = [
    { icon: Github, url: "https://github.com/piyush-saini", name: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/piyush-saini", name: "LinkedIn" },
  ];

  return (
    <div className="min-h-content text-slate-200 font-sans selection:bg-indigo-500/30  relative">
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[0%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <section 
        id="contact" 
        ref={sectionRef}
        className="relative z-10 py-20 px-4 md:px-8 max-w-7xl mx-auto h-auto"
      >
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Let's build <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">something great</span>.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to start a new project or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, idx) => (
                  <a 
                    key={idx}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group gap-4 p-4 rounded-2xl hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl ${method.accent} group-hover:scale-110 transition-transform`}>
                      <method.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{method.label}</p>
                      <p className="text-lg font-medium group-hover:text-white transition-colors">{method.value}</p>
                    </div>
                    <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-40 transition-opacity" />
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-sm text-slate-500 mb-6">Connect with me on social media</p>
                <div className="flex gap-4">
                  {socials.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-slate-800/50 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                      aria-label={social.name}
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-400">Available for new projects</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <MessageSquare className="text-indigo-400" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Your Message</label>
                  <textarea 
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your vision..."
                    required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-700 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 disabled:opacity-70 overflow-hidden shadow-lg shadow-indigo-500/20"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div 
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="animate-spin" size={20} />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* Status Toasts */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-emerald-400"
                    >
                      <CheckCircle size={20} />
                      <p className="text-sm font-medium">Thank you! Your message has been received.</p>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-3 text-rose-400"
                    >
                      <AlertCircle size={20} />
                      <p className="text-sm font-medium">Oops! Failed to send. Please try again or email me directly.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Branding */}
      
    </div>
  );
};

export default Contacts;