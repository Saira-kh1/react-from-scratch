 import React from "react"
 
 function Card({name}){
    console.log("props" , name)
    return(
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img
        className="h-48 w-full object-cover md:h-full md:w-48"
        src="https://images.pexels.com/videos/30618925/band-light-metal-music-30618925.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy"
        alt="Modern building architecture"
      />
    </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{name}</div>
      <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p className="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
    </div>
  </div>
</div>


//  <div className="w-60 h-60 rounded-xl flex-center">
//       <img
//         src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
//         alt="Giphy"
//         className="rounded-t-xl"
//       />
//       <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
//         <h1 className="font-bold  font-mono  text-xl">{name}</h1>
//       </div>
//     </div>
    )
 }


 export default Card