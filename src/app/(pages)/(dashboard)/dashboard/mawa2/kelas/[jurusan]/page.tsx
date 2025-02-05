"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DetailUser from '@/components/fragments/detailUser';
import Swal from 'sweetalert2';


export type User = {
  id: string;
  email: string;
  name: string;
  tahunLulus: number;
  gender: string;
};

const deleteUser = async (id: string) => {
  const res = await fetch("/api/dataSiswa",{
    method: "DELETE",
    headers: {"COntent-Type": "application/json"},
    body: JSON.stringify({id}),
  });
  if(res.ok){
    Swal.fire("Delete", "Data berhasil dihapus", "success");
    window.location.reload();
  }else {
    Swal.fire("Error", "Data gagal dihapus", "error");
  }
}

const handleDelete = (id: string) => {
Swal.fire({
  title: "Yakin kah bro?",
  text: "Dtat akan dihapus secara permanen",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "",
  cancelButtonColor: "",
  confirmButtonText: "Hapus",
  cancelButtonText: "Ga jadi"
}).then((result) => {
  if(result.isConfirmed){
    deleteUser(id)
  }
})
}


const columns: ColumnDef<User>[] = [
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
    accessorKey: "tahunLulus",
    header: "Tahun Lulus",
    cell: ({row}) => <span>{row.getValue("tahunLulus")}</span>,
  },
  {
    accessorKey: "gender",
    header: "Kelamin",
    cell: ({row}) => <span>{row.getValue("gender")}</span>,
  },
  {
    accessorKey: "major",
    header: "Jurusan",
    cell: ({row}) => <span>{row.getValue("major")}</span>,
  },
  {
    id: "actions", 
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className='flex gap-4 w-full justify-center'>

          <button className='bx bxs-trash bx-sm' onClick={() => handleDelete(user.id)}></button>
          <DetailUser/>
          <i className='bx bxs-edit bx-sm'></i>
        </div>
      );
    },
  },
];




export default function DataSiswa({params}: {params: Promise<{jurusan: string}>}) {

  const {jurusan} = React.use(params)
  const [users, setUsers] = useState<User[]>([]);
    
      useEffect(() => {
        const fetchUsers = async () => {
          try {
              const res = await fetch(`/api/data/${jurusan}`);
              if (!res.ok) {
                console.error();
                setUsers([]);
                return
              }   
              const data = await res.json();
              setUsers(data);
          } catch (error) {
            console.error("Failed to fetch users:", error);
            setUsers([])
          }
        };
    
        fetchUsers();
      }, [jurusan]);
    
      const table = useReactTable({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
      });
  return (
    <main className='p-7 h-max'>
      
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
          {table.getRowModel().rows.length === 0 ? (
            
              <TableRow>
                  <TableCell colSpan={table.getHeaderGroups()[0]?.headers.length || 1} className="text-center">
                    <p>tabel belum ada data siswa</p>
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
    </main>
  )
}
