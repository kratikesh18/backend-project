import React from "react";


// Replace with your construction image file path

function ConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-500">
      <img
        src="\public\Construction..png"
        alt="Under Construction"
        className="mb-8 w-[25vw]"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h1 className="text-4xl font-bold mb-4"> Project Under Construction </h1>
      <p className="text-lg text-gray-300 mb-8"> developer 
        <span className="font-extrabold"> Kartikesh</span> is working hard to bring you an awesome project. Check back soon!
      </p>
      <div className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300">
        <a href="https://github.com/kratikesh18/Javascript-Backend.git" className=" text-white hover:text-white transform-none">
        Source Code 
        </a>
        
      </div>
      <p className="mt-4">I'm happy to recive contributions</p>
    </div>
  );
}

export default ConstructionPage;
