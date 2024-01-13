import React from "react";


// Replace with your construction image file path

function ConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#040204]">
      <img
        src="https://media1.tenor.com/m/kbbJOE4dIJkAAAAC/working-on.gif"
        alt="Under Construction"
        className="mb-8 md:w-[25vw]"
        style={{ maxWidth: "100%", height: "auto" }}
      />

<div className="flex flex-col relative bottom-[6rem] text-center justify-center  items-center">

      <h1 className="text-4xl font-bold mb-4"> <span className="underline">MyTube</span> is Under Construction </h1>
      <p className="text-lg text-gray-200 mb-8"> Developer 
        <span className="font-extrabold"> Kartikesh</span> is working hard to bring you an awesome project. Check back soon!
      </p>
      <div className="w-fit bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-950 transition duration-20000">
        <a href="https://github.com/kratikesh18/Javascript-Backend.git" className=" text-white hover:text-white transform-none">
        Source Code 
        </a>
        
        </div>
      <p className="mt-4">I'm happy to recive contributions</p>
</div>
    </div>
  );
}

export default ConstructionPage;
