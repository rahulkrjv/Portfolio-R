import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Linkedin, Globe } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-950 dark:to-teal-950 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                    RK
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Currently at</div>
                    <div className="font-semibold">GNDEC, Ludhiana</div>
                    <div className="text-sm text-muted-foreground">Graduating June 2025</div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-float">
                AI
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-float animation-delay-1000">
                FS
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a passionate python developer with a knack for solving real-world problems 
                  through full-stack development and AI. With hands-on experience in Django, 
                  Flask, and advanced Python, I aim to build systems that are both 
                  intelligent and impactful.
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center p-4 hover:scale-105 transition-transform">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 hover:scale-105 transition-transform">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-teal-600">2+</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 hover:scale-105 transition-transform">
                <CardContent className="p-2">
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect with me</h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  className="hover:scale-105 transition-transform"
                  asChild
                >
                  <a 
                    href="https://rahulkumar26.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    Portfolio
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="hover:scale-105 transition-transform"
                  asChild
                >
                  <a 
                    href="https://github.com/rahulkrjv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="hover:scale-105 transition-transform"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/rahul-kumar-pydev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}