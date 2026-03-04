import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Shield, 
  Wrench, 
  Terminal,
  Database,
  Globe,
  Server,
  Lock,
  Bug,
  FileCode,
  GitBranch,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level:  65},
      { name: 'JavaScript/TypeScript', level: 40 },
      { name: 'C/C++', level: 50 },
      { name: 'Java', level: 33 },
      { name: 'Bash/Shell', level: 60 },
      { name: 'SQL', level: 40 },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: [
      { name: 'Penetration Testing', level: 33 },
      { name: 'Network Security', level: 40 },
      { name: 'Web Application Security', level: 25 },
      { name: 'Vulnerability Assessment', level: 55 },
      { name: 'Cryptography', level: 10 },
      { name: 'Incident Response', level: 60 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Kali Linux', level: 45 },
      { name: 'Burp Suite', level: 60 },
      { name: 'Metasploit', level: 27 },
      { name: 'Wireshark', level: 30 },
      { name: 'Nmap', level: 60 },
      { name: 'Docker', level: 24 },
    ],
  },
];

const techStack = [
  { icon: Terminal, name: 'Linux' },
  { icon: Globe, name: 'Web Dev' },
  { icon: Database, name: 'Databases' },
  { icon: Server, name: 'Backend' },
  { icon: Lock, name: 'Security' },
  { icon: Bug, name: 'Testing' },
  { icon: FileCode, name: 'Scripting' },
  { icon: GitBranch, name: 'Git' },
  { icon: Cpu, name: 'Systems' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

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

  useEffect(() => {
    if (isVisible) {
      // Animate skills progressively
      skillCategories.forEach((category, catIndex) => {
        category.skills.forEach((_, skillIndex) => {
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, `${catIndex}-${skillIndex}`]));
          }, (catIndex * 200) + (skillIndex * 100) + 500);
        });
      });
    }
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-gradient-to-r from-secondary/10 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">My expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-foreground/20 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`p-6 md:p-8 rounded-2xl bg-card border border-border/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-foreground/80" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground/80 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animatedSkills.has(`${catIndex}-${skillIndex}`) ? `${skill.level}%` : '0%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-center text-xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group flex items-center gap-3 px-5 py-3 rounded-full bg-secondary/30 border border-border/30 hover:border-foreground/20 hover:bg-secondary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <tech.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
