import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import professionalHeadshot from '@/assets/professional-headshot.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="fade-in-up">
                <p className="text-primary font-medium text-lg">
                  Hello, I'm
                </p>
              </div>
              
              <div className="fade-in-up stagger-1">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="primary-gradient bg-clip-text text-transparent">
                    Parimal 
                  </span>
                  <br />
                  <span className="text-foreground">Kodumuru</span>
                </h1>
              </div>

              <div className="fade-in-up stagger-2">
                <h2 className="text-xl md:text-2xl text-secondary font-semibold">
                  Data Scientist | Innovator | Problem Solver
                </h2>
              </div>

              <div className="fade-in-up stagger-3">
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  Passionate about turning data into actionable insights with over 2 years of experience 
                  in AI and engineering solutions. Specialized in machine learning, data analysis, and 
                  project optimization with proven results in defect detection and system optimization.
                </p>
              </div>

              <div className="fade-in-up stagger-4 flex items-center space-x-2 text-muted-foreground">
                <MapPin size={16} />
                <span>East Lansing, Michigan</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="fade-in-up stagger-5 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="primary-gradient text-primary-foreground font-semibold px-8 hover:scale-105 transition-transform"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 text-foreground hover:bg-primary/10 px-8"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="fade-in-up stagger-5 flex space-x-6">
              <a 
                href="mailto:kodumuru@msu.edu" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/your-username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="fade-in-up stagger-2 floating-animation">
              <div className="relative">
                <div className="absolute inset-0 primary-gradient rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src={professionalHeadshot}
                  alt="Parimal Kodumuru - Professional Headshot"
                  className="relative z-10 w-80 h-80 object-cover rounded-2xl card-shadow border border-primary/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-5">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;