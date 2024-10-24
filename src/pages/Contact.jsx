import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white text-black">
      
      {/* Contact Info and Form Section */}
      <div className="container mx-auto px-8 py-16 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact us</h2>
          <p className="mb-4">
            Want to reach out? Email, call, or fill out the form on the side
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +254 123456789
          </p>
          <p className="mb-8">
            <strong>Email:</strong> info@revolutionizeengineering.com
          </p>
          
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold">Work with us</h3>
              <p className="text-sm">
                Interested in partnering with us? Reach out and explore collaboration opportunities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Support</h3>
              <p className="text-sm">
                Need help with an issue? Our team is ready to assist you as soon as possible.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Feedback and suggestions</h3>
              <p className="text-sm">
                Your feedback helps us improve! Share your thoughts and suggestions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Get in touch</h2>
          <p className="mb-4">
            Let us know how we can help you and we’ll get in touch as soon as possible.
          </p>
          
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 p-2 bg-black border border-gray-600 rounded" />
              <input type="text" placeholder="Last Name" className="w-1/2 p-2 bg-black border border-gray-600 rounded" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-2 bg-black border border-gray-600 rounded" />
            <div className="flex gap-4">
              <select className="w-1/4 p-2 bg-black border border-gray-600 rounded">
                <option value="+254">+254</option>
              </select>
              <input type="tel" placeholder="712 345678" className="w-3/4 p-2 bg-black border border-gray-600 rounded" />
            </div>
            <textarea placeholder="Message" rows="4" className="w-full p-2 bg-black border border-gray-600 rounded"></textarea>
            <button type="submit" className="w-full bg-gray-800 py-2 rounded text-white hover:bg-blue-700">Send message</button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
          </p>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-lg">
              Headquarters <br />
              Chandaria Business Incubation and Innovation Center <br />
              Kenyatta University Main Campus, Nairobi.
            </p>
          </div>
          <div className="map-container">
            <iframe
              src=""
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to upskill with us?</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200">Get started</button>
            <button className="border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-black">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
