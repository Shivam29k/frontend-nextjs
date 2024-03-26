import { get } from "http";
import { Ticket } from "./Ticket";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export function TicketContainer() {
  const tickets = getTicketDetails();
  return (
    <div className="w-4/5 lg:w-[790px] xl:w-[1050px] 2xl:w-[1330px]  bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] mt-7 py-16 px-8 md:p-16 mb-6 pb-12">
      <div className="h-full w-full flex flex-col gap-6 items-center ">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Collection Spotlight</h1>
        <p className="text-center text-sm w-full md:w-5/6 text-black dark:text-white felx-end pb-6">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <Carousel className="w-[300px] md:w-[560px] xl:w-[830px]">
          <CarouselContent>
          {tickets.map((ticket, index) => 
            <CarouselItem key={index} className="basis-1/1 lg:basis-1/2 xl:basis-1/3 hover:cursor-pointer">
              <Ticket
                teamName={ticket.teamName}
                date={ticket.date}
                day={ticket.day}
                time={ticket.time}
                location={ticket.location}
                collection={ticket.collection}
                imgId={ticket.imgId}
              />
            </CarouselItem>
          )}
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>


      </div>
    </div>
  );
}


function getTicketDetails() {
  return [
    {
      teamName: "Las Vegas Aviators",
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Take Flight Collection",
      imgId: "ticket1.jpg",
    },
    {
      teamName: "Sacramento River Cats",
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
      location: "Sutter Health Park, Sacramento, California",
      collection: "Orange Collection",
      imgId: "ticket2.jpg",
    },
    {
      teamName: "Las Vegas Aviators",
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Take Flight Collection",
      imgId: "ticket1.jpg",
    },
    {
      teamName: "Sacramento River Cats",
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
      location: "Sutter Health Park, Sacramento, California",
      collection: "Orange Collection",
      imgId: "ticket2.jpg",
    },
    {
      teamName: "Las Vegas Aviators",
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Take Flight Collection",
      imgId: "ticket1.jpg",
    },
    {
      teamName: "Sacramento River Cats",
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
      location: "Sutter Health Park, Sacramento, California",
      collection: "Orange Collection",
      imgId: "ticket2.jpg",
    },
  ]
}