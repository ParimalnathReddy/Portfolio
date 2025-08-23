import { GraduationCap, Briefcase, Award, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "Master's in Business Data Science & Analytics",
      school: "Michigan State University",
      year: "2024-2025",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor's in Electronics and Communication Engineering",
      school: "Sathyabama University",
      year: "2018-2022",
      icon: GraduationCap,
    },
  ];

  const achievements = [
    {
      title: "Revolutionized Infrastructure Monitoring",
      description: "Engineered a cutting-edge digital twin with AI, slashing structural failures using deep learning models like Detectron2 and YOLOv5",
      icon: Award,
    },
    {
      title: "Transformed Supply Chain Efficiency",
      description: "Optimized supply chain operations with RAG pipelines, boosting on-time deliveries by 12% through advanced data analytics",
      icon: TrendingUp,
    },
    {
      title: "Pioneered Real-Time Crime Detection",
      description: "Led a CNN-based system with 90% accuracy, redefining security through innovative AI and data processing techniques",
      icon: Target,
    },
  ];

  const skills = [
    "Python", "TensorFlow", "PyTorch", "SQL", "Power BI", "Machine Learning",
    "Data Analysis", "Deep Learning", "Computer Vision", "Natural Language Processing",
    "Statistical Analysis", "Data Visualization", "Project Management", "Research"
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="primary-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate data scientist with a strong engineering background, dedicated to leveraging 
            data-driven insights for solving complex real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 text-primary" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="glass-effect border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="primary-gradient p-2 rounded-lg">
                        <edu.icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.school}</p>
                        <p className="text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-3 text-secondary" size={28} />
              Key Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass-effect border-secondary/20 hover:border-secondary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="secondary-gradient p-2 rounded-lg">
                        <achievement.icon size={20} className="text-secondary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="tech-badge px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Personal Statement */}
        <div className="mt-16 text-center">
          <Card className="glass-effect border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                "My journey from electronics engineering to data science has equipped me with a unique perspective 
                on problem-solving. I believe in the power of data to drive meaningful change and am committed to 
                continuous learning and innovation in the rapidly evolving field of artificial intelligence and 
                machine learning."
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2">
                <div className="w-8 h-1 primary-gradient rounded-full"></div>
                <span className="text-primary font-semibold">Parimal Kodumuru</span>
                <div className="w-8 h-1 primary-gradient rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;