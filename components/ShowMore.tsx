"use client"

export function ShowMore() {
    function showMore() {
        console.log("Show More Clicked");
    }
    return (
        <button className="my-8 bg-blue-500 text-white py-2.5 px-7 hover:bg-blue-700 rounded-sm" onClick={()=>{
            showMore()
        }}>Show More</button>
    )
}