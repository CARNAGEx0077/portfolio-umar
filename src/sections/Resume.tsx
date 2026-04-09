import { useEffect, useRef, useState } from 'react';
import { 
  Download, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Calendar,
  ExternalLink,
  Shield,
  Lock,
  Terminal,
  FileCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2024',
    icon: Shield,
    credential: 'SEC-XXX-XXXXX',
    link: '#',
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2024',
    icon: Lock,
    credential: 'ECC-XXX-XXXXX',
    link: '#',
  },
  {
    name: 'eJPT - Junior Penetration Tester',
    issuer: 'INE Security',
    date: '2023',
    icon: Terminal,
    credential: 'eJPT-XXX-XXXXX',
    link: '#',
  },
  {
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    date: '2023',
    icon: FileCheck,
    credential: 'COUR-XXX-XXXXX',
    link: '#',
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Theni Kammavar Sangam College of Technology',
    period: '2024 - 2028',
    description: 'Focusing on cybersecurity, software engineering, and network security.',
  },
];

const experience = [
  {
    role: 'Cybersecurity Intern',
    company: 'Security Firm Name',
    period: 'Jun 2024 - Aug 2024',
    description: 'Performed vulnerability assessments, conducted penetration testing on web applications, and assisted in incident response activities.',
  },
  {
    role: 'Open Source Contributor',
    company: 'Security Tools Projects',
    period: '2023 - Present',
    description: 'Contributing to open-source security tools and frameworks. Fixed bugs and implemented new features for vulnerability scanners.',
  },
];

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-secondary/10 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">My journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Resume & Certifications</h2>
          <div className="w-20 h-1 bg-foreground/20 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Education & Experience */}
          <div className={`space-y-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-foreground/80" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 rounded-xl bg-card border border-border/50 hover:border-foreground/20 transition-colors"
                  >
                    <h4 className="text-lg font-medium mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-foreground/80" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp) => (
                  <div
                    key={exp.role}
                    className="p-6 rounded-xl bg-card border border-border/50 hover:border-foreground/20 transition-colors"
                  >
                    <h4 className="text-lg font-medium mb-1">{exp.role}</h4>
                    <p className="text-muted-foreground mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <Button
              size="lg"
              className="w-full btn-glow"
              asChild
            >
              <a href="public/assets/resume.pdf" download>
                <Download className="h-5 w-5 mr-2" />
                Download Full Resume
              </a>
            </Button>
          </div>

          {/* Right Column - Certifications */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                <Award className="h-5 w-5 text-foreground/80" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="group p-5 rounded-xl bg-card border border-border/50 hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/10 transition-colors">
                      <cert.icon className="h-6 w-6 text-foreground/70" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium mb-1 truncate">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {cert.date}
                        </Badge>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                        >
                          Verify
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-xl bg-secondary/20 border border-border/30">
              <h4 className="font-medium mb-3">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm constantly expanding my knowledge through platforms like TryHackMe, 
                Hack The Box, and various cybersecurity courses. Currently preparing for 
                OSCP certification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
