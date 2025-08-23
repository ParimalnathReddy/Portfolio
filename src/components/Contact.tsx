import { useState } from 'react';
import { Mail, Phone, MapPin, Download, Send, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const FORMSPREE_URL = "https://formspree.io/f/mkgzdyne"; // your live endpoint

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        toast({
          title: "✅ Message sent!",
          description: "Thanks — I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const error = await res.json();
        throw new Error(error?.message || "Failed to send message");
      }
    } catch (err: any) {
      toast({
        title: "❌ Failed to send",
        description: err?.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kodumuru@msu.edu",
      href: "mailto:kodumuru@msu.edu"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(517) 708-9348",
      href: "tel:+15177089348"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "East Lansing, Michigan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/parimalnath-reddy-03b02a186/",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ParimalnathReddy",
      color: "secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="primary-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            or just having a conversation about data science and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a data scientist to join your team, interested in 
                collaboration on a project, or just want to discuss the latest trends in AI and 
                machine learning, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="primary-gradient p-3 rounded-lg flex-shrink-0">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href === "#" ? (
                      <p className="text-foreground font-medium">{item.value}</p>
                    ) : (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className={`border-${social.color}/20 hover:border-${social.color}/40`}
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <social.icon size={20} />
                    <span>{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            {/* Resume Download */}
            <Card className="glass-effect border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Download Resume</h4>
                    <p className="text-muted-foreground text-sm">
                      Get a detailed overview of my experience and qualifications
                    </p>
                  </div>
                  <Button className="secondary-gradient text-white">
                    <Download size={16} className="mr-2" />
                    Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Mail className="mr-3 text-primary" size={24} />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-muted focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-muted focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background/50 border-muted focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-muted focus:border-primary resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full primary-gradient text-white font-semibold py-3"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;