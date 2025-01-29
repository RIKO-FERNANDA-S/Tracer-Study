"use client"

import * as React from "react";
import { useState, useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



export type User = {
  id: string;
  email: string;
  name: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Nomor",
    cell: ({row}) => <span className="justify-center flex w-10">{row.index + 1}</span>
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span className="capitalize">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <span className="lowercase">{row.getValue("email")}</span>,
  },
  {
    accessorKey: "tamatTahun",
    header: "Tahun Lulus",
    cell: ({row}) => <span>{row.getValue("tamatTahun")}</span>,
  },
  {
    accessorKey: "kelamin",
    header: "Kelamin",
    cell: ({row}) => <span>{row.getValue("kelamin") ? "Laki-laki" : "Perempuan"}</span>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <Button variant="ghost" onClick={() => alert(`Edit user ${user.name}`)}>
          Edit
        </Button>
      );
    },
  },
];



export default function DataTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/data");
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
    <div className="w-full">
      <Table>
        <TableHeader>

          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {isLoading  ? (
            
              <TableRow>
                  <TableCell colSpan={table.getHeaderGroups()[0]?.headers.length || 1} className="text-center">
                    <Skeleton/>
                  </TableCell>
              </TableRow>
          ) : (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>

      </Table>
    </div>
  );
}
