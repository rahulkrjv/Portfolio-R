import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Calendar, ArrowRight } from 'lucide-react'

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Blog & Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on technology, development, and innovation
          </p>
        </div>

        {/* Coming Soon Card */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 border-0 shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Coming Soon</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm currently working on creating valuable content about full-stack development, 
              AI/ML technologies, and software engineering best practices. Stay tuned for 
              in-depth tutorials, project breakdowns, and industry insights.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="p-4 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-2">Upcoming Topics</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Flask vs Django</li>
                  <li>• AI Integration Guide</li>
                  <li>• Full-Stack Best Practices</li>
                </ul>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-2">Content Types</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Technical Tutorials</li>
                  <li>• Project Walkthroughs</li>
                  <li>• Industry Insights</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Expected launch: Q2 2025</span>
            </div>

            <Button variant="outline" className="group">
              <span>Get Notified</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        {/* Newsletter Signup Placeholder */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to be the first to know when I publish new content?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}