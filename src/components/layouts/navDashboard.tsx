import React from "react";
import { auth } from "../../../auth";

async function navDashboard() {
  const session = await auth();

  return (
    <div>
      <div className="w-full h-max flex gap-5 justify-between border-b-2 p-5">
        <div className="h-full flex items-center w-max pl-7 gap-3">
          <h1 className="text-xl font-semibold capitalize text-wrap font-Poppins leading-10 text-[#374151]">
            Selamat Datang {session?.user.name}
          </h1>
          <p className="flex items-center  text-slate-300">
            <i className="bx bxs-chevrons-right bx-sm"></i>Januari 13 2024
          </p>
        </div>

        <div className="flex items-center w-max h-full gap-8">
          <i className="bx bx-bell bx-sm"></i>
          <div className="bg-white w-max h-max rounded-lg flex items-center shadow-md px-3 py-2">
            <input
              type="text"
              placeholder="Searce"
              className="outline-none bg-white"
            />
            <i className="bx bx-search bx-sm"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navDashboard;
