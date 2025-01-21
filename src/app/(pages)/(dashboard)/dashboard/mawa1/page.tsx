"use client";
import React from "react";
import NavbarDashTable from "@/components/layouts/navbarDashTable";
import { useState, useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DataTable, {columns} from "@/components/layouts/dataTable"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";


export type User = {
  id: string;
  email: string;
  name: string;
};

// export const columns: ColumnDef<User>[] = [
//   {
//     accessorKey: "name",
//     header: "Name",
//     cell: ({ row }) => <span>{row.getValue("name")}</span>,
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//     cell: ({ row }) => <span className="lowercase">{row.getValue("email")}</span>,
//   },
//   {
//     accessorKey: "alamat",
//     header: "Alamat",
//     cell: ({row}) => <span>{row.getValue("alamat")}</span>,
//   },
//   {
//     id: "actions",
//     header: "Actions",
//     cell: ({ row }) => {
//       const user = row.original;
//       return (
//         <Button variant="ghost" onClick={() => console.log(`Edit user ${user.id}`)}>
//           Edit
//         </Button>
//       );
//     },
//   },
// ];

export default function Mawa1() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/data/user");
        const data = await res.json();
        
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main className="p-7 h-max">
      <NavbarDashTable />
      <section>
      <div className="w-full">
      <DataTable/>
    </div>
      </section>
    </main>
  );
}






