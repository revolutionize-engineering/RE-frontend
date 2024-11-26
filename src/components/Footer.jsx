import { Button } from "../components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTiktok,
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to upskill with us?</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="default" className="bg-black text-white border-black hover:bg-white hover:text-black" >Get started</Button>
            <Button variant="outline" className="bg-white text-black border-white hover:bg-black hover:text-white">
              Learn more
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-8 border-t border-gray-700">
        <div className="flex items-center">
          <img src="/Frame 264.png" alt="Logo" className="h-12 mr-4" />
          
        </div>

          <div>
            <h3 className="font-bold mb-4">Featured Products</h3>
            <ul className="space-y-2">
              {['Workshops', 'MamaPesa', 'ShopOkoa', 'Kleaner AIR', 'Soma App', 'Kietos Crafts'].map((product) => (
                <li key={product}><a href="#" className="hover:underline">{product}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact us</h3>
            <p>Phone: +254 0000000</p>
            <p>Email: info@revolutionize.com</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Home', 'Events', 'About us', 'FAQs'].map((resource) => (
                <li key={resource}><a href="#" className="hover:underline">{resource}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              {['Our Company', 'Contact Us', 'Blog', 'Investor Relations', 'Careers', 'Help Center'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-5">
            <h3 className="font-bold mb-4">Social media</h3>
            <div className="flex space-x-4">
              {[
                { icon: faTiktok, name: 'TikTok' },
                { icon: faFacebookF, name: 'Facebook' },
                { icon: faTwitter, name: 'Twitter' },
                { icon: faLinkedinIn, name: 'LinkedIn' },
                { icon: faInstagram, name: 'Instagram' }
              ].map((social) => (
                <a key={social.name} href="#" className="text-black">
                  <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Revolutionize Engineering. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Disclaimer</a>
          </div>
          <div className="mt-2 md:mt-0">
            <select className="bg-transparent border-none text-gray-400 focus:outline-none">
              <option value="en">English (US)</option>
              {/* Add more language options as needed */}
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}