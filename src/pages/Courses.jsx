import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Badge } from "../components/ui/badge"
import { Clock, BookOpen } from 'lucide-react'

export default function CoursesPage() {
  const courses = Array(9).fill({
    name: 'Course Name',
    level: 'Beginner',
    duration: '5 Hours',
    lessons: '4 Lessons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat neque tortor, vi...'
  })

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center bg-[url('/space-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Learn, Build, and Excel in Tech
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            From coding basics to advanced AI systems, we've got the courses to power your tech career
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray  py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium">Browse our courses</span>
            <Select>
              <SelectTrigger className="w-[180px] bg-transparent border-white/20">
                <SelectValue placeholder="Course Level" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black" >
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] bg-transparent border-white/20">
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black" >
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="ai">AI & Machine Learning</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-black border-gray-800">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt={course.name}
                      className="w-full h-[200px] object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons}</span>
                    </div>
                  </div>
                  <p className="text-gray-400">{course.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button className="flex-1 bg-white text-black ">Register Now</Button>
                  <Button variant="outline" className="flex-1 text-white">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}