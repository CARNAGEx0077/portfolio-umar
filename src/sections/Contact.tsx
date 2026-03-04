import { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageSquare,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from "@emailjs/browser";
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mail2mdumar@gmail.com',
    href: 'mailto:mail2mdumar@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Uthamapalayam,Tamil Nadu, India',
    href: null,
  },
  {
    icon: MessageSquare,
    label: 'Response Time',
    value: 'Usually within 6 hours',
    href: null,
  },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/CARNAGEx0077' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mdumar0077' },
  /*{ icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },*/
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_vx3bwue",
      "template_1jj3syy",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "_dr9ZmpeTzikXmyCd"
    );

    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);

  } catch (error) {
    console.error("Email failed:", error);
  }

  setIsSubmitting(false);
};

  try {
    await emailjs.send(
      "service_vx3bwue",   // from EmailJS
      "template_1jj3syy",  // from EmailJS
      {
        name: formData.name,
        email: formData.email,  
        subject: formData.subject,
        message: formData.message,
      },
      "_dr9ZmpeTzikXmyCd" // from EmailJS
    );

    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

  } catch (error) {
    console.error("Email failed:", error);
  }

  setIsSubmitting(false);
};
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-t from-secondary/15 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Get in touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Let's Connect</h2>
          <div className="w-20 h-1 bg-foreground/20 mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss cybersecurity? 
            I'd love to hear from you. Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-foreground/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-foreground/70" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-xl bg-secondary/20 border border-border/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium">Open to Opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently looking for internships and entry-level positions in cybersecurity 
                and software development.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary/30 border-border/50 focus:border-foreground/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary/30 border-border/50 focus:border-foreground/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-border/50 focus:border-foreground/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-secondary/30 border-border/50 focus:border-foreground/30 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
