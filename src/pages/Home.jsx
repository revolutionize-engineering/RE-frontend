import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGraduationCap, 
  faUsers, 
  faCalendarAlt, 
  faClock
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src="./image.png" alt="Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">REVOLUTIONIZE ENGINEERING</h1>
          <p className="text-xl">A top talent acquisition pipeline</p>
          <div className="flex justify-center space-x-2">
            <Input placeholder="Enter your email" className="max-w-xs text-black " />
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            Get Started
          </Button>
          </div>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="container mx-auto py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Empowering the Next Generation of Engineers</h2>
          <p className="text-gray-400">
            At Revolutionize Engineering, we connect students with opportunities to learn, grow, and make an impact in the world of engineering.
            Whether you.re a student seeking mentorship or a startup looking for fresh
            talent, we.re here to bridge the gap between education and industry.
          </p>
        </div>
        <div className="bg-gray-800 h-64 rounded-lg" /> {/* Placeholder for image */}
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why choose Revolutionize Engineering?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: faGraduationCap, title: "Upskill", description: "Access our extensive library of courses and workshops" },
              { icon: faUsers, title: "Find work opportunities", description: "Discover exciting job openings and internships" },
              { icon: faCalendarAlt, title: "Find mentorship and guidance", description: "Connect with industry experts" },
              { icon: faClock, title: "Find and attend events", description: "Participate in hackathons, webinars, and more" },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-gray-200 text-black">
                <CardHeader>
                  <FontAwesomeIcon icon={item.icon} className="w-10 h-10 mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Explore more of the courses we offer at Revolutionize Engineering</h2>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black"
              onClick={() => navigate('/courses')}>
            View more courses
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} className="bg-white border-gray-200 text-black">
              <CardHeader>
                <div className="bg-gray-700 h-48 rounded-lg mb-4" /> {/* Placeholder for course image */}
                <CardTitle>Course Name</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-1" />
                  <span>2 hours</span>
                </div>
                <Button variant="outline" className="bg-black text-white" size="sm">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Explore upcoming events</h2>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black"
                        onClick={() => navigate('/courses')}>
           View more events
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} className="bg-white border-gray-200 text-black">
              <CardHeader>
                <div className="bg-gray-700 h-48 rounded-lg mb-4" /> {/* Placeholder for event image */}
                <CardTitle>Event Name</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex items-center mt-2 text-gray-600">
                  <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 mr-1" />
                  <span>Date</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="bg-black text-white" size="sm">
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials from students and employers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Card key={index} className="bg-white border-gray-200 text-black">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full" /> {/* Placeholder for avatar */}
                  <div>
                    <CardTitle>Name</CardTitle>
                    <p className="text-sm text-gray-600">Position</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
  )
}