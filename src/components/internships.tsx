import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
import { Building, Calendar, Code } from 'lucide-react'

const internshipData = [
  {
    title: "Python for Data Science",
    organization: "IIT Kanpur (IFACET)",
    duration: "Certification Program",
    type: "Certification",
    description: "Comprehensive training in Python programming for data science applications, including data analysis, visualization, and machine learning fundamentals.",
    projects: [
      { name: "Tic-Tac-Toe Game", tech: "Python, Tkinter" },
      { name: "Bug Tracker System", tech: "Python, SQLite" },
      { name: "Age Calculator App", tech: "Python, GUI" }
    ],
    skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
    status: "Completed",
    color: "blue"
  },
  {
    title: "Object-Oriented Programming using C++",
    organization: "IIT Kanpur (E&ICT)",
    duration: "Certification Program", 
    type: "Certification",
    description: "Advanced training in C++ programming with focus on object-oriented design principles, data structures, and software development best practices.",
    projects: [
      { name: "E-Shop Management", tech: "C++, OOP" },
      { name: "Employee Management System", tech: "C++, File Handling" }
    ],
    skills: ["C++", "OOP", "Data Structures", "Algorithms", "System Design"],
    status: "Completed",
    color: "teal"
  }
]

export function Internships() {
  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Internships & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional training and certification programs that shaped my technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {internshipData.map((internship, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-background/80 backdrop-blur-sm border-0 shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-full bg-${internship.color}-100 dark:bg-${internship.color}-950 group-hover:scale-110 transition-transform`}>
                    <Building className={`h-6 w-6 text-${internship.color}-600`} />
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {internship.type}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors mb-2">
                  {internship.title}
                </CardTitle>
                
                <div className="space-y-2">
                  <p className="text-muted-foreground font-medium">
                    {internship.organization}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{internship.duration}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {internship.description}
                </p>

                {/* Projects */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Key Projects
                  </h4>
                  <div className="space-y-2">
                    {internship.projects.map((project, projectIndex) => (
                      <div 
                        key={projectIndex}
                        className="p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                      >
                        <div className="font-medium text-sm">{project.name}</div>
                        <div className="text-xs text-muted-foreground">{project.tech}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold mb-3">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}