import { Players } from "@/components/Players";
import { ShowMore } from "@/components/ShowMore";
import { Tickets } from "@/components/Tickets";

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
    <div className="pt-16 pb-16 dark:text-white flex flex-col items-center">
      <Players players={players} />
      <ShowMore/>
      <Tickets/>
    </div>
  );
}



