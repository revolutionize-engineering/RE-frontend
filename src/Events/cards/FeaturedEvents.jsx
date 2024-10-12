import { Card, CardContent } from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Badge } from "@/components/ui/badge";
import Slider from "react-slick";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Events/event.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
    {
        title: "GDSC September Meetup",
        date: "Sep 4, 2024",
        location: "Zoom",
        attending: 343,
        avatars: [
            "https://github.com/shadcn.png",
            "https://github.com/github.png",
            "https://github.com/vercel.png",
            "https://github.com/shadcn.png",
        ],
        type: "IN-PERSON",
        category1: "Club",
        category2: "AI",
        category3: "ML",
        image: "src/assets/banner.png",
    },
    {
        title: "UNI:NNOVATORS 2024",
        date: "Nov 9, 2024",
        location: "Kenyatta...",
        attending: 343,
        avatars: [
            "https://github.com/shadcn.png",
            "https://github.com/github.png",
            "https://github.com/vercel.png",
            "https://github.com/shadcn.png",
        ],
        type: "WEBINAR",
        category1: "Data",
        category2: "AI",
        category3: "ML",
        image: null,
    },
    {
        title: "UNI:NNOVATORS 2024",
        date: "Nov 9, 2024",
        location: "Kenyatta...",
        attending: 343,
        avatars: [
            "https://github.com/shadcn.png",
            "https://github.com/github.png",
            "https://github.com/vercel.png",
            "https://github.com/shadcn.png",
        ],
        type: "WEBINAR",
        category1: "Data",
        category2: "AI",
        category3: "ML",
        image: "src/assets/banner.png",
    },
    {
        title: "UNI:NNOVATORS 2024",
        date: "Nov 9, 2024",
        location: "Kenyatta...",
        attending: 343,
        avatars: [
            "https://github.com/shadcn.png",
            "https://github.com/github.png",
            "https://github.com/vercel.png",
            "https://github.com/shadcn.png",
        ],
        type: "WEBINAR",
        category1: "Data",
        category2: "AI",
        category3: "ML",
        image: null,
    },
    {
        title: "UNI:NNOVATORS 2024",
        date: "Nov 9, 2024",
        location: "Kenyatta...",
        attending: 343,
        avatars: [
            "https://github.com/shadcn.png",
            "https://github.com/github.png",
            "https://github.com/vercel.png",
            "https://github.com/shadcn.png",
        ],
        type: "WEBINAR",
        category1: "Data",
        category2: "AI",
        category3: "ML",
        image: null,
    },
    {
        title: "UNI:NNOVATORS 2024",
        date: "Nov 9, 2024",
        location: "Kenyatta...",
        attending: 343,
        avatars: [
            "https://github.com/shadcn.png",
            "https://github.com/github.png",
            "https://github.com/vercel.png",
            "https://github.com/shadcn.png",
        ],
        type: "WEBINAR",
        category1: "Data",
        category2: "AI",
        category3: "ML",
        image: "src/assets/banner.png",
    },
    {
        title: "UNI:NNOVATORS 2024",
        date: "Nov 9, 2024",
        location: "Kenyatta...",
        attending: 343,
        avatars: [
            "https://github.com/shadcn.png",
            "https://github.com/github.png",
            "https://github.com/vercel.png",
            "https://github.com/shadcn.png",
        ],
        type: "WEBINAR",
        category1: "Data",
        category2: "AI",
        category3: "ML",
        image: null,
    },
    {
        title: "UNI:NNOVATORS 2024",
        date: "Nov 9, 2024",
        location: "Kenyatta...",
        attending: 343,
        avatars: [
            "https://github.com/shadcn.png",
            "https://github.com/github.png",
            "https://github.com/vercel.png",
            "https://github.com/shadcn.png",
        ],
        type: "WEBINAR",
        category1: "Data",
        category2: "AI",
        category3: "ML",
        image: null,
    },
];

// For the slider settings
var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
};

const FeaturedEvents = () => {
    return (
        <div className="the-events-section">
            {/* Title Section */}
            <h2 className="the-events-title">Featured Events</h2>
            <Slider {...settings}>
                {events.map((event, index) => (
                    <div key={index} className="event-card-wrapper">
                        <Card className="event-card">
                            <CardContent className="cardcontent">
                                <div className="img-container">
                                    <img
                                        src={event.image || "src/assets/default-image.png"}
                                        alt={event.title}
                                        className="image-card"
                                    />
                                    <div className="gradient-overlay"></div>
                                </div>

                                <div className="contents-of-card">
                                    {/* Badge*/}
                                    <Badge className="event-type">
                                        {event.type}
                                    </Badge>

                                    {/* Event Title */}
                                    <h3 className="event-title">{event.title}</h3>

                                    {/* Event Date, Location, avatar and attending */}
                                    <div className="event-details">
                                        <div className="avatar-date">
                                            {/* Calendar */}
                                            <div className="event-date-icon">
                                                <i className="fa-regular fa-calendar"></i>
                                                <div className="event-date">{event.date}</div>
                                            </div>

                                            <div className="event-location-icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <div className="event-location">{event.location}</div>
                                            </div>
                                        </div>

                                        <div className="location-attending">
                                            {/* Avatar Group */}
                                            <div className="avatar-group">
                                                {event.avatars.map((avatar, i) => (
                                                    <Avatar key={i} className="avatar">
                                                        <AvatarImage src={avatar} alt={`Attendee ${i + 1}`} />
                                                        <AvatarFallback>{`A${i + 1}`}</AvatarFallback>
                                                    </Avatar>
                                                ))}
                                                <div className="plus-avatar">
                                                    <span className="">+</span>
                                                </div>
                                            </div>

                                            {/* Attendee Count */}
                                            <div className="Attendee-count">{event.attending - event.avatars.length} Attending</div>
                                        </div>
                                    </div>

                                    {/* Category Tags */}
                                    <div className="category-tags">
                                        <Badge className="category1">{event.category1}</Badge>
                                        <Badge className="category2">{event.category2}</Badge>
                                        <Badge className="category3">{event.category3}</Badge>
                                    </div>

                                    {/* Register and Learn More Buttons */}
                                    <div className="buttons-container">
                                        <Button variant="default" className="Register-btn">
                                            Register Now
                                        </Button>
                                        <Button variant="outline" className="learn-more-btn">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeaturedEvents;