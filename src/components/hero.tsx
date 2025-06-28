import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const typingTexts = [
  "Full Stack Developer",
  "AI Innovator", 
  "Python Enthusiast",
  "Problem Solver"
]

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = typingTexts[currentTextIndex]
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-blue-950 dark:to-teal-950">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse dark:opacity-10" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000 dark:opacity-10" />
        <div className="absolute top-40 left-40 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000 dark:opacity-10" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-teal-600 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-blue-600">
                RK
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
              Rahul Kumar
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="text-xl sm:text-2xl text-muted-foreground mb-8 h-8">
            <span className="border-r-2 border-blue-600 animate-pulse pr-1">
              {currentText}
            </span>
          </div>

          {/* Description */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
              Python Developer & Full-Stack Engineer
            </h1>

            <h2 className="text-lg sm:text-xl text-muted-foreground font-medium">
              I design and build scalable web apps, intelligent AI agents, and clean data-driven solutions.
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Passionate about transforming ideas into impactful software, I specialize in full-stack development 
              with Django + React, and building intelligent AI-powered systems using Python, LangChain, and HuggingFace. 
              Let’s build something meaningful together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a 
              href="https://drive.google.com/file/d/1lUZtdxdP5k_V4lc4UE6Gkqz-ncSZVS44/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://github.com/rahulkrjv" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://www.linkedin.com/in/rahul-kumar-pydev" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all"
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}