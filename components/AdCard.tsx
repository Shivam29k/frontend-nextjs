interface AdInfo  {
    adTitle: string;
    adDescription: string;
}

export function AdCard({adTitle, adDescription}: AdInfo) {
    return (
        <div className="p-2.5 shadow-lg h-[512px] my-6 w-64  border dark:bg-[#3B3E47]">
            <div className="border-[0.2px] border-green-800 h-full">
                <div className="relative">
                    <div className="absolute top-0 right-0 pl-3.5 pr-3.5 pt-1 pb-1 text-xs bg-black text-white ">AD</div>
                    <div className="h-56 w-full bg-cover" style={{backgroundImage: `url('/ad.png')`}}></div>
                </div>
                <div className="text-[20px] pt-3 pb-3 font-bold text-center">{adTitle}</div>
                <div className="flex w-full items-center justify-center">
                    <div className="w-48 font-normal text-sm">{adDescription}</div>
                </div>
            </div>
        </div>
    )
}