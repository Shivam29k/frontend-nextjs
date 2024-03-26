import { Button } from "./ui/button";

interface TicketProps {
    teamName: string;
    date: string;
    day: string;
    time: string;
    location: string;
    collection: string;
    imgId: string;
}

export function Ticket(ticket: TicketProps) {
    return (
      <div className="h-[624px] w-64 dark:bg-[#3B3E47] bg-[#FFFFFF] relative shadow-lg my-6 dark:hover:bg-[#53565e] hover:bg-[#00000020] duration-300">
        <div className="absolute text-center w-full bottom-48 text-[#75777a]">------------------------------</div>
        <div className="absolute  bottom-48 left-0 transform -translate-x-1/2 h-5 w-5 bg-gradient-to-l from-[#EFEFF0] to-[#F5F9FF] dark:from-[#1F1E2B] dark:to-[#1F1E2B] rounded-full"></div>
        <div className="absolute  bottom-48 right-0 transform translate-x-1/2  h-5 w-5 bg-gradient-to-r from-[#EFEFF0] to-[#F5F9FF]  dark:from-[#1F1E2B] dark:to-[#1F1E2B] rounded-full"></div>
        <div className="h-full w-full p-4">
            <div className="h-96 w-full bg-cover  shadow-xl" style={{backgroundImage: `url('/${ticket.imgId}')`}}></div>
            <div className="pt-12 flex flex-col gap-2.5 text-center">
                <h3 className="text-medium text-lg">{ticket.teamName}</h3>
                <p className="text-normal text-sm">{ticket.date} | {ticket.day} | {ticket.time}</p>
                <p className="text-normal text-sm">{ticket.location}</p>
                <Button className="bg-black rounded-none w-full text-white hover:bg-[#000000e7]">{ticket.collection}</Button>
            </div>
        </div>
      </div>
  );
}
