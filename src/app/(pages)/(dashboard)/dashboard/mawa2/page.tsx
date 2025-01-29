"use client";
import React from "react";
import NavbarDashTable from "@/components/layouts/navbar/navbarDashTable";
import DataTable, { columns } from "@/components/layouts/dataTable";
export type User = {
  id: string;
  email: string;
  name: string;
};


export default function Mawa1() {

  return (
    <main className="">

      <section>
        <div className="w-full">
          <DataTable />
        </div>
      </section>
    </main>
  );
}
