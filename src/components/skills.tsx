import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Code, Database, Wrench, BookOpen } from 'lucide-react'

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    color: "blue",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 70 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: BookOpen,
    color: "teal",
    skills: [
      { name: "Flask", level: 85 },
      { name: "Django", level: 80 },
      { name: "React.js", level: 75 },
      { name: "LangChain", level: 70 },
      { name: "Django REST", level: 75 }
    ]
  },
  {
    category: "Databases",
    icon: Database,
    color: "purple",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "SQLite", level: 85 },
      { name: "Pinecone", level: 65 }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    color: "green",
    skills: [
      { name: "Git", level: 85 },
      { name: "HuggingFace", level: 70 },
      { name: "CI/CD", level: 65 },
      { name: "OpenRouter", level: 70 },
      { name: "Tailwind CSS", level: 80 }
    ]
  }
]

const libraries = [
  "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", 
  "TensorFlow", "OpenAI", "Requests", "Beautiful Soup", "FastAPI"
]

export function Skills() {
  const [animatedLevels, setAnimatedLevels] = useState<{[key: string]: number}>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      const levels: {[key: string]: number} = {}
      skillsData.forEach(category => {
        category.skills.forEach(skill => {
          levels[skill.name] = skill.level
        })
      })
      setAnimatedLevels(levels)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillsData.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <Card 
                key={categoryIndex}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-background/80 backdrop-blur-sm border-0 shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-${category.color}-100 dark:bg-${category.color}-950 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 text-${category.color}-600`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {animatedLevels[skill.name] || 0}%
                        </span>
                      </div>
                      <Progress 
                        value={animatedLevels[skill.name] || 0} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Libraries & Additional Skills */}
        <Card className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              Libraries & Additional Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {libraries.map((library, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="hover:scale-105 transition-transform cursor-default text-sm py-2 px-4"
                >
                  {library}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Frameworks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Databases</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Tools</div>
          </div>
        </div>
      </div>
    </section>
  )
}