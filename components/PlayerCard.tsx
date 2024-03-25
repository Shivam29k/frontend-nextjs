interface PlayerInfo  {
    key: number;
    name: string;
    events: number;
    sport: string;
    imgId: string
}

export function PlayerCard({name, events, sport, imgId} : PlayerInfo) {
    return (
        <div className="p-2.5 h-[512px] my-6 border w-64 shadow-lg dark:bg-[#3B3E47]">
            <div className="h-96 w-full bg-cover" style={{backgroundImage: `url('/${imgId}.png')`}}></div>
            <div className="text-[17px] pt-3 pb-3 font-medium">{name}</div>
            <div className="grid grid-cols-2 bg-[#F7F7F8] dark:bg-[#292B32] pt-2.5 pr-2.5 pl-2.5 pb-2">
                <div className="flex flex-col">
                    <div className="fornt-normal text-xs/[15px] start-0 justify-start pb-0.5">Toptal Events</div>
                    <div className="font-medium text-xm/6 end-0 justify-end">{events} events</div>
                </div> 
                <div className="flex flex-col">
                    <div className="fornt-normal text-xs/[15px] justify-start pb-0.5">Sport</div>
                    <div className="font-medium text-xm/6 justify-end">{sport}</div>
                </div>
            </div>
        </div>
    )
}