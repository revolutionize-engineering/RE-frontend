import '../Events/event.css';
import logo from '../assets/logo.png';
import footerlogo from '../assets/footer_logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from '../components/ui/button';

import UpcomingEvents from './cards/UpcomingEvents';
import FeaturedEvents from './cards/FeaturedEvents';
import PreviousEvents from './cards/PreviousEvents';

const Events = () => {
    const scrollToNextComponent = () => {
        const nextComponent = document.getElementById('next-component');
        if (nextComponent) {
            nextComponent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="events-container">
            <header className="events-header">
                <img src={logo} alt="Logo" className="events-logo" />
                <h1 className="events-title">Events</h1>
            </header>
            <div className="events-body">

                {/* Timer with description section */}
                <section className="innovators-section">
                    <h1 className="innovators-title">Revolutionizing Innovation and Creativity</h1>
                    <p className="innovators-description">
                        Join the revolution of innovation and creativity. Discover groundbreaking ideas, connect with visionaries, and be part of a community shaping the future. With interactive sessions, cutting-edge technologies, and inspiring speakers, this event promises to fuel your passion for innovation and empower your next big idea.
                    </p>
                    <div className="countdown">
                        <div className="countdown-item">
                            <span className="countdown-number">45</span>
                            <span className="countdown-label">Days</span>
                        </div>
                        <span className="colon">:</span>
                        <div className="countdown-item">
                            <span className="countdown-number">03</span>
                            <span className="countdown-label">Hours</span>
                        </div>
                        <span className="colon">:</span>
                        <div className="countdown-item">
                            <span className="countdown-number">45</span>
                            <span className="countdown-label">Minutes</span>
                        </div>
                        <span className="colon">:</span>
                        <div className="countdown-item">
                            <span className="countdown-number">13</span>
                            <span className="countdown-label">Seconds</span>
                        </div>
                    </div>
                    <Button className="register-button">Register Now</Button>
                </section>

                {/* Arrow Down Icon */}
                <div className="scroll-down" onClick={scrollToNextComponent}>
                    <i className="fa fa-angle-double-down"></i>
                </div>

                <div id="next-component">
                    <UpcomingEvents />
                </div>
                <FeaturedEvents />
                <PreviousEvents />
            </div>

            <div className="upskill-section">
                <h2 className="upskill-title">Ready to upskill with us?</h2>
                <div className="upskill-buttons">
                    <Button className="get-started-button">Get started</Button>
                    <Button className="learn-more-button" variant="transparent">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i> Learn more
                    </Button>
                </div>
            </div>
            <footer className="events-footer">
                <div className="footer-top">
                    <div className="footer-logo-section">
                        <img src={footerlogo} alt="Revolutionize Engineering Logo" className="footer-logo" />
                    </div>
                    <div className="footer-links">
                        <div className="footer-column-Featured">
                            <h3>Featured Products</h3>
                            <ul>
                                <li>SokoBeauty</li>
                                <li>MamaPesa</li>
                                <li>ShopOkoa</li>
                                <li>Kleaner AIR</li>
                                <li>Soma App</li>
                                <li>Kletos Crafts</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Contact us</h3>
                            <p>Phone: +254 0000000</p>
                            <p>Email: info@revolutionize.com</p>
                        </div>
                        <div className="footer-column">
                            <h3>Resources</h3>
                            <ul>
                                <li>Home</li>
                                <li>Events</li>
                                <li>About Us</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>About Us</h3>
                            <ul>
                                <li>Our Company</li>
                                <li>Contact Us</li>
                                <li>Blog</li>
                                <li>Investor Relations</li>
                                <li>Careers</li>
                                <li>Help Center</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-social">
                        <h3>Social media:</h3>
                        <div className="social-icons">
                            <i className="fa-brands fa-tiktok"></i>
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 Revolutionize Engineering, All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Disclaimer</a>
                    </div>
                    <div className="footer-language">
                        <i className="fa fa-globe"></i> English (US)
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Events;
