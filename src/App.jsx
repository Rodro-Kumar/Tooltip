import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] flex-col">
        <h1 className="absolute top-[30%] left-1/2 -translate-x-[50%] -translate-y-[30%] text-3xl uppercase tracking-widest font-medium">
          Tooltip
        </h1>
        <div className="group relative hover:scale-95 transition-all ">
          <a
            href="#"
            className="py-2 px-16 bg-black text-white text-lg font-medium uppercase tracking-widest group-hover:bg-[#2b2b2b] transition-all group-hover:tracking-normal"
          >
            button
          </a>
          <Tooltip TooltipTitle={"This is button"} />
        </div>
      </div>
    </>
  );
}

export default App;
