import React from 'react';
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center bg-[url('/star-trails.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo mi, lobortis et sagittis sed, scelerisque ac magna. Phasellus congue massa eu diam blandit,
          </h1>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
              Mission
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
              Vision
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story & Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4">
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo mi, lobortis et sagittis sed, scelerisque ac magna. Phasellus congue massa eu diam blandit, Pellentesque finibus augue diam.
              </p>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo mi, lobortis et sagittis sed, scelerisque ac magna. Phasellus congue massa eu diam blandit, Pellentesque finibus augue diam.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo mi, lobortis et sagittis sed, scelerisque ac magna. Phasellus congue massa eu diam blandit, Pellentesque finibus augue diam.
            </p>
            <div className="flex -space-x-4">
              <img src="/placeholder.svg?height=40&width=40" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="/placeholder.svg?height=40&width=40" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="/placeholder.svg?height=40&width=40" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">OUR VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((value) => (
              <Card key={value} className="text-center p-8">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-black mx-auto mb-4" />
                  <CardTitle>VALUE {value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et sapien ut lacus varius ac semper pretium. Dui cursus volutpat morbi. Nam et sapien ut lacus varius ac morbi. Volutpat volutpat nam.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">MEET OUR TEAM</h2>
            <p className="text-xl">BEHIND EVERY SUCCESSFUL PROJECT</p>
            <p className="text-xl">IS A TEAM OF EXPERTS</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <img 
                  src="/placeholder.svg?height=300&width=225" 
                  alt={`Team member ${member}`}
                  className="w-full h-[300px] object-cover mb-4"
                />
                <h3 className="font-bold">First Name Last Name</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante orci, semper commodo eros ut, blandit elementum eros. Morbi eu nunc magna. Nam et sapien ut lacus varius ac semper pretium.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[1, 2, 3, 4, 5].map((partner) => (
              <div key={partner} className="flex items-center justify-center">
                <img 
                  src="/placeholder.svg?height=60&width=120" 
                  alt={`Partner ${partner}`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-8">Frequently asked questions</h2>
            <Accordion type="single" collapsible>
              {[1, 2, 3, 4, 5].map((item) => (
                <AccordionItem key={item} value={`item-${item}`}>
                  <AccordionTrigger>Question {item} How will this help me?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    varius enim in eros elementum tristique.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/placeholder.svg?height=400&width=400" 
              alt="FAQ illustration"
              className="max-w-sm w-full"
            />
          </div>
        </div>
      </section>

    </div>
  )
}