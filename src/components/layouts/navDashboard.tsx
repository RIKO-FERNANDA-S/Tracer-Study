import React from "react";
import Date from "../fragments/date";

async function navDashboard() {


  return (
    <div>
      <div className="w-full h-max flex gap-5 justify-between border-b-2 p-5">
        <div className="h-full flex items-center w-max pl-7 gap-3">
          <h1 className="text-xl font-semibold capitalize text-wrap font-Poppins leading-10 text-[#374151]">
            Selamat Datang 
          </h1>
          <div className="flex items-center  text-slate-400">
            <i className="bx bxs-chevrons-right bx-sm"></i><Date/>
          </div>
            
        </div>

        <div className="flex items-center w-max h-full gap-8">
          <i className="bx bx-bell bx-sm"></i>
          <i className='bx bxs-inbox bx-sm'></i>
          <i className='bx bx-cog bx-sm' ></i>
        </div>
      </div>
    </div>
  );
}

export default navDashboard;
