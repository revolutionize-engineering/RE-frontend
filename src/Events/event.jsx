import '../Events/event.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from './components/button';

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
        </div>
    );
};

export default Events;
