import { AdCard } from "@/components/AdCard";
import { ModeToggle } from "@/components/ModeButton";
import { PlayerCard } from "@/components/PlayerCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


// Players Cards
type playersList = {
    players: Array<{
      name: string;
      events: number;
      sport: string;
      imgId: string;
    }>;
  };
  
export function Players({ players }: playersList) {
    return (
      <div className=" w-[256px] md:w-[520px] lg:w-[790px] xl:w-[1050px] 2xl:w-[1330px]">
        <div className="flex justify-between w-full">
          <div className="text-2xl font-bold underline underline-offset-8 decoration-purple-500">
            Sports
          </div>
          <ModeToggle />
        </div>
  
        {/* Players and Ad Cards */}
        <Carousel >
          <CarouselContent>
            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
              <AdCard
                adTitle="Advertisement Title"
                adDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum distinctio nihil ratione a deleniti qui autem, nobis quibusdam, harum expedita atque. Obcaecati distinctio soluta quae, ullam dignissimos dolorem ducimus tempore esse velit deserunt inventore!"
              />
            </CarouselItem>
            {players.map((player, index) => (
              <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                <PlayerCard
                  key={index}
                  name={player.name}
                  sport={player.sport}
                  events={player.events}
                  imgId={player.imgId}
                />
              </CarouselItem>
            ))}
          </CarouselContent >
          <CarouselPrevious className="2xl:hidden"/>
          <CarouselNext className="2xl:hidden"/>
        </Carousel>
      </div>
    );
  };
  