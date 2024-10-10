import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import '../../Events/event.css';

const events = [
  { title: "Event 1", date: "2024-10-01" },
  { title: "Event 2", date: "2024-10-05" },
  { title: "Event 3", date: "2024-10-10" },
  // Add more events as needed
];

const UpcomingEventsCarousel = () => {
  return (
    <Carousel className="carousel-container"> {/* Use the defined container class */}
      <CarouselContent className="carousel-content"> {/* Ensure content is flexed horizontally */}
        {events.map((event, index) => (
          <CarouselItem key={index} className="carousel-item"> {/* Apply carousel-item class */}
            <Card className="card"> {/* Apply card class */}
              <CardContent className="card-content"> {/* Apply card-content class */}
                <h3 className="card-title">{event.title}</h3> {/* Apply title class */}
                <p className="card-date">Date: {event.date}</p> {/* Apply date class */}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-arrow left carousel-button" /> {/* Add left arrow class */}
      <CarouselNext className="carousel-arrow right carousel-button" /> {/* Add right arrow class */}
    </Carousel>
  );
};

export default UpcomingEventsCarousel;
