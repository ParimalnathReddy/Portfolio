import { useState, useEffect } from 'react';
import { Code, Database, Brain, Presentation, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "R", level: 80 },
        { name: "JavaScript", level: 75 },
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "secondary",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 95 },
        { name: "Computer Vision", level: 88 },
      ]
    },
    {
      title: "Data Tools & Platforms",
      icon: Database,
      color: "primary",
      skills: [
        { name: "Power BI", level: 92 },
        { name: "Tableau", level: 85 },
        { name: "Apache Spark", level: 80 },
        { name: "AWS/Azure", level: 78 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "secondary",
      skills: [
        { name: "Leadership", level: 88 },
        { name: "Communication", level: 92 },
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      year: "2024",
      icon: Award,
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2023",
      icon: Award,
    },
    {
      name: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      year: "2023",
      icon: Award,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="primary-gradient bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and professional competencies 
            developed through academic study and hands-on experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <div className={`${category.color === 'primary' ? 'primary-gradient' : 'secondary-gradient'} p-2 rounded-lg`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 skill-bar">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          category.color === 'primary' ? 'primary-gradient' : 'secondary-gradient'
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-8">Professional Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="glass-effect border-secondary/20 text-center">
              <CardContent className="p-6">
                <div className="secondary-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">{cert.name}</h4>
                <p className="text-secondary font-medium mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">{cert.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiencies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Technical Proficiencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Machine Learning", "Deep Learning", "Natural Language Processing", 
              "Computer Vision", "Data Mining", "Statistical Analysis", 
              "Big Data Processing", "Cloud Computing", "DevOps", 
              "Agile Methodology", "Research & Development", "Technical Writing"
            ].map((proficiency, index) => (
              <span
                key={index}
                className="tech-badge px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {proficiency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;