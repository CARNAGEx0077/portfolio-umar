import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      imageRef.current.style.transform = `translate(${xPercent * 10}px, ${yPercent * 10}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-24 lg:py-0">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 animate-fade-in-up">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hey! I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Muhammed Umar A</span>
              </h1>
            </div>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90">
              Computer Science & Engineering Student
              <span className="text-muted-foreground"> | </span>
              <span className="text-primary">Cybersecurity Enthusiast</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              I am a CSE student passionate about cybersecurity, software development, 
              and secure systems. I focus on ethical hacking, programming, and building 
              reliable digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="btn-glow bg-foreground text-background hover:bg-foreground/90 font-medium px-8"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/CARNAGEx0077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mdumar0077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:your.mail2mdumar@"
                  className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div 
              ref={imageRef}
              className="relative transition-transform duration-300 ease-out"
            >
              {/* Image container with glow effect */}
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 rounded-3xl blur-2xl" />
                
                {/* Main image */}
                <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[430px] md:w-[380px] md:h-[510px] lg:w-[420px] lg:h-[560px] rounded-2xl overflow-hidden hero-image-container">
                  <img
                    src="/hero-portrait.jpg"
                    alt="Portfolio Portrait"
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border border-foreground/10" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-foreground/10 rounded-lg -z-10" />
                <div className="absolute -top-6 -right-6 w-16 h-16 border border-foreground/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
