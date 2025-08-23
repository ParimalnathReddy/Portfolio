import { ExternalLink, Github, Brain, Network, Shield, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Digital Twin Infrastructure Monitoring",
      description: "Specializing in Digital Twin systems and infrastructure health monitoring, with expertise in predictive machine learning, point cloud processing (Open3D, Vedo), and deep learning frameworks (Detectron2, Mask R-CNN). Skilled in multi-epoch change detection (M3C2), advanced instance and multi-class segmentation, and interactive data visualization with Power BI. Experienced in image enhancement and OCR pipelines (Real-ESRGAN, LaMa, EasyOCR) for high-fidelity data processing. Strong focus on scalable, AI-driven solutions that improve decision-making, predictive accuracy, and system resilience.",
      tech: ["Python", "YOLO", "Computer Vision", "CUDA", "Deep Learning", "Point Cloud Processing"],
      icon: Network,
      color: "primary",
      github: "https://github.com/ParimalnathReddy/",
      demo: "https://github.com/ParimalnathReddy/",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Supply Chain Optimization with Advanced Analytics",
      description: "Engineered an automated Power BI dashboard as a Graduate Research Assistant II at Michigan State University, boosting on-time deliveries by 12% through stakeholder-driven workflow analysis and SQL-based ETL integration, cutting report generation time by 35%. Conducted statistical analysis with R and Python to pinpoint supply chain bottlenecks, optimizing procurement outcomes across a five-year dataset (2018–2023) for 100 companies with regulatory insights. Coded variables from World Bank and ILO data, creating a linking table for a robust master dataset, showcasing advanced analytics",
      tech: ["Power BI", "SQL", "Python", "R", "Data Analysis", "ETL"],
      icon: BarChart3,
      color: "secondary",
      github: "https://github.com/ParimalnathReddy/",
      demo: "https://github.com/ParimalnathReddy/",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Crime Detection CNN System",
      description: "Led the development of a real-time crime detection system using Convolutional Neural Networks (CNNs) with TensorFlow and Keras, achieving 90% accuracy through data augmentation and feature extraction. Processed video datasets with OpenCV, creating an end-to-end pipeline for surveillance applications. Collaborated with peers to scale the solution, showcasing innovation in AI-driven security.",
      tech: ["PyTorch", "Computer Vision", "CNN", "Real-time Processing", "Deep Learning"],
      icon: Shield,
      color: "primary",
      github: "https://github.com/ParimalnathReddy/CRIMINAL-IMAGE-DETECTION",
      demo: "https://github.com/ParimalnathReddy/CRIMINAL-IMAGE-DETECTION",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Backorder Prediction & Optimization System",
      description: "Developed machine learning models (Random Forest, regression) to predict backorder risk and next order dates with ~94% accuracy and 90% recall, enabling proactive procurement decisions. Engineered features such as order history, lead times, and seasonal trends to capture supply chain dynamics, reducing uncertainty in high-priority parts forecasting. Built automated backorder prediction and next-order date tables integrated with procurement workflows, providing early alerts up to 90 days in advance. This system transformed a reactive process into a predictive, data-driven solution, minimizing operational delays and improving inventory resilience.",
      tech: ["Predictive Modeling (Random Forest, Regression)", "Feature Engineering & Supply Chain Data Analytics" , "Backorder Risk Forecasting & Optimization", "Automated Reporting & Workflow Integration", ],
      icon: Brain,
      color: "secondary",
      github: "https://github.com/ParimalnathReddy/",
      demo: "https://github.com/ParimalnathReddy/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="primary-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of my key projects that demonstrate expertise in machine learning, 
            data analysis, and innovative problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="project-card glass-effect border-primary/20 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-4 right-4 ${project.color === 'primary' ? 'primary-gradient' : 'secondary-gradient'} p-2 rounded-lg`}>
                  <project.icon size={20} className="text-white" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-badge px-3 py-1 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 border-primary/20 hover:border-primary/40"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    className={`flex items-center space-x-2 ${
                      project.color === 'primary' ? 'primary-gradient' : 'secondary-gradient'
                    } text-white`}
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 text-foreground hover:bg-primary/10 px-8"
            asChild
          >
            <a href="https://github.com/ParimalnathReddy" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;