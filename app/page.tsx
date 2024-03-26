import { Players } from "@/components/Players";
import { ShowMore } from "@/components/ShowMore";
import { Ticket } from "@/components/Ticket";
import { TicketContainer } from "@/components/TicketContainer";

export default function Home() {
  const players = [
    {
      name: "Sacramento River Cats",
      events: 48,
      sport: "Baseball",
      imgId: "player1",
    },
    {
      name: "Las Vegas Aviators",
      events: 28,
      sport: "Baseball",
      imgId: "player2",
    },
    {
      name: "new jersey devils",
      events: 15,
      sport: "Ice Hockey",
      imgId: "player3",
    },
    {
      name: "Las Vegas Aviators",
      events: 28,
      sport: "Baseball",
      imgId: "player4",
    },
  ];

  return (
    <div className="pt-16 pb-12 dark:text-white flex flex-col items-center">
      <Players players={players} />
      <ShowMore/>
      <TicketContainer/>
      <a className="pt-6 hover:text-blue-500" href="https://twitter.com/ShivamKrandom" >Made by Shivam</a>
    </div>
  );
}



