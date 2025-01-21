"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWR from "swr";
import { z } from "zod";

import { CreateDataSchema, CreateAlumniKuliahSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { prisma } from "@/lib/prisma";
import { useState } from "react";

import Image from "next/image";
import Logo from "../../../../public/imgLogo/icon.png";
import Bg from "../../../../public/img/T5.jpeg"

function FormData() {
  const [name, setName] = useState("");

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault()
  //   const reponse = await fetch('/api/data', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name: name })
  //   });
  //   const result = await reponse.json()
  //   console.log(result)
  // }

  const formSchema = z.object({
    namaKuliah: z.string().min(2).max(50),
    alamat: z.string().min(5).max(10),
    nomor: z
      .string()
      .refine((val) => !isNaN(val as unknown as number))
      .transform((val, ctx) => {
        const parsed = parseInt(val);
        if (isNaN(parsed)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Not a number",
          });

          // This is a special symbol you can use to
          // return early from the transform function.
          // It has type `never` so it does not affect the
          // inferred return type.
          return z.NEVER;
        }
        return parsed;
      }),
  });

  const form = useForm<z.infer<typeof CreateDataSchema>>({
    resolver: zodResolver(CreateDataSchema),
    defaultValues: {
      name: "",
      tempatLahir: "",
      tanggalLahir: 0,
      alamat: "",
      tlp: 0,
      email: "",
      kelamin: false,
      user: "",
      jurusan: "",
      tamatTahun: 0,
    },
  });

  function onSubmit(values: z.infer<typeof CreateDataSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    console.log("submit bro");
  }

  return (
    <main className="w-full h-max bg-slate-200">
      <section className="w-full h-max flex py-4 pb-10">
        <Form {...form}>
          <div className="w-full flex justify-center">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 w-3/4 flex flex-col items-center"
            >
              <nav className="flex w-full rounded-[.5rem] px-10 justify-start gap-7 bg-blue-400 items-center h-max py-8">
                <div className="w-full bg-bgAbout1 bg-cover bg-no-repeat">
                <Image src={Logo} className="w-24" alt="logo"></Image>
                <span>
                  <h1 className="block text-gray-700 text-3xl font-semibold mb-2">
                    Formulir Survey Data Pribadi
                  </h1>
                </span>
                </div>
              </nav>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl className="focus-visible:ring-transparent border-none">
                        <Input placeholder="shadcn" className="" {...field} />
                      </FormControl>
                      <FormDescription>Isi nama kamu di atas.</FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="tempatLahir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tempat Lahir anda</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>Isi Tempat lahir anda.</FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="tanggalLahir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tanggal Lahir</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        isi tanggal lahir kamu contoh= (tgl/bln/thn).
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="alamat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat Rumah</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        Alamat tempat tinggal mu.
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="tlp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telphone</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="number" {...field} />
                      </FormControl>
                      <FormDescription>isi dengan 12 angka</FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>isi dengan 12 angka</FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="user"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="jurusan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jurusan</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>Isi nama jurusan anda</FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="tamatTahun"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tempat Lahir</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </div>
        </Form>
      </section>
    </main>
  );
}

export default FormData;
