import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Github, ExternalLink, Code, Zap, Database, Globe } from 'lucide-react'

const projectsData = [
  {
    title: "AI-Enhanced Medical Web Application",
    shortDescription: "AI-powered healthcare platform with disease prediction and medication recommendations",
    fullDescription: "A comprehensive healthcare platform that leverages artificial intelligence to provide disease prediction, appointment booking, and personalized medication suggestions. The system includes allergy checks and integrates with multiple AI models for accurate health assessments.",
    tech: ["Flask", "LangChain", "HuggingFace", "OpenRouter LLM", "Pinecone", "Python", "JavaScript"],
    features: [
      "AI chatbot for disease prediction",
      "Appointment booking system",
      "Personalized medication suggestions",
      "Allergy compatibility checks",
      "Vector database for medical knowledge",
      "Multi-modal AI integration"
    ],
    githubUrl: "https://gitlab.com/g18-2115109-2115108-2115114/Disease-Prediction-and-Medication-Recommendation-System.git",
    liveUrl: null,
    image: "/api/placeholder/600/400",
    category: "AI/ML",
    icon: Zap,
    color: "blue"
  },
  {
    title: "Student Progress Management System",
    shortDescription: "Comprehensive platform for tracking student coding progress and performance",
    fullDescription: "A full-stack application designed to monitor and analyze student progress in competitive programming. Features include Codeforces API integration, automated email reminders, performance analytics, and visual reporting dashboards.",
    tech: ["Django", "Django REST", "React.js", "PostgreSQL", "Tailwind CSS", "Python", "JavaScript"],
    features: [
      "Codeforces activity tracking",
      "Automated email reminders",
      "Performance analytics dashboard",
      "Visual progress reports",
      "RESTful API architecture",
      "Responsive web design"
    ],
    githubUrl: "https://github.com/rahulkrjv/student-progress-management.git",
    liveUrl: null,
    image: "/api/placeholder/600/400",
    category: "Full Stack",
    icon: Database,
    color: "teal"
  },
  {
    title: "FitTrack",
    shortDescription: "Comprehensive fitness and nutrition tracking platform",
    fullDescription: "A complete fitness management application that helps users track their workouts, monitor nutrition, set fitness goals, and share progress with the community. Built with modern web technologies for optimal performance.",
    tech: ["Python", "Flask", "MongoDB", "HTML", "Tailwind CSS", "JavaScript"],
    features: [
      "Workout tracking and planning",
      "Nutrition monitoring",
      "Goal setting and progress tracking",
      "Social sharing capabilities",
      "Data visualization",
      "Mobile-responsive design"
    ],
    githubUrl: null,
    liveUrl: "https://fittrack-7mc8.onrender.com",
    image: "/api/placeholder/600/400",
    category: "Web App",
    icon: Globe,
    color: "green"
  },
  {
    title: "LiveChat",
    shortDescription: "Real-time chat application with multiple room support",
    fullDescription: "A dynamic real-time chat application that supports multiple chat rooms, user authentication, and instant messaging. Built with vanilla JavaScript and modern web technologies for seamless communication.",
    tech: ["JavaScript", "HTML", "CSS", "WebSocket", "Node.js"],
    features: [
      "Real-time messaging",
      "Multiple chat rooms",
      "User authentication",
      "Message history",
      "Responsive design",
      "Clean user interface"
    ],
    githubUrl: "https://github.com/rahulkrjv/LiveChat.git",
    liveUrl: null,
    image: "/api/placeholder/600/400",
    category: "Web App",
    icon: Code,
    color: "purple"
  }
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'AI/ML', 'Full Stack', 'Web App']

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, AI integration, and modern web technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="hover:scale-105 transition-transform"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-background/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full bg-${project.color}-100 dark:bg-${project.color}-950 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 text-${project.color}-600`} />
                    </div>
                    <Badge variant="secondary">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {project.fullDescription}
                          </p>

                          <div>
                            <h4 className="font-semibold mb-3">Key Features</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4">
                            {project.githubUrl && (
                              <Button asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="mr-2 h-4 w-4" />
                                  View Code
                                </a>
                              </Button>
                            )}
                            {project.liveUrl && (
                              <Button variant="outline" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {project.githubUrl && (
                      <Button 
                        size="icon"
                        variant="outline"
                        className="hover:scale-105 transition-transform"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    
                    {project.liveUrl && (
                      <Button 
                        size="icon"
                        variant="outline"
                        className="hover:scale-105 transition-transform"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}