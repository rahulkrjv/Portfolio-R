import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Guru Nanak Dev Engineering College, Ludhiana",
    duration: "2021 – 2025",
    grade: "CGPA: 6.84",
    status: "Currently Pursuing",
    icon: GraduationCap,
    color: "blue"
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Allama Iqbal College, Bihar Sharif",
    duration: "2020 – 2021",
    grade: "65%",
    status: "Completed",
    icon: Award,
    color: "teal"
  },
  {
    degree: "Secondary (X)",
    institution: "JNV Sheikhpura",
    duration: "2018 – 2019",
    grade: "84.2%",
    status: "Completed",
    icon: Award,
    color: "purple"
  }
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => {
            const Icon = edu.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-background/50 backdrop-blur-sm border-l-4 border-l-blue-500"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full bg-${edu.color}-100 dark:bg-${edu.color}-950 group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-6 w-6 text-${edu.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={edu.status === "Currently Pursuing" ? "default" : "secondary"}
                        className="mb-2"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-lg text-blue-600">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Timeline line */}
        <div className="relative mt-12">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 opacity-20" />
        </div>
      </div>
    </section>
  )
}