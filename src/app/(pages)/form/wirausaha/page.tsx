"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateAlumniWirausahaSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

function FormKuliah() {
  const onSubmitForm = async (
    value: z.infer<typeof CreateAlumniWirausahaSchema>
  ) => {
    console.log(value);
    try {
      const response = await fetch("/api/dataSiswa/alumniWirausaha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        throw new Error("masalah bro aman kan");
      }

      Swal.fire({
        icon: "success",
        titleText: "Data Wirausaha Berhasil Ditambah",
      });
    } catch (err) {
      console.log(err);
    }
    redirect("/dashboardUser");
  };

  const form = useForm<z.infer<typeof CreateAlumniWirausahaSchema>>({
    resolver: zodResolver(CreateAlumniWirausahaSchema),
    defaultValues: {
      namaUsaha: "",
      penghasilan: 0,
    },
  });

  return (
    <main>
      <section>
        <Form {...form}>
          <div className="w-full h-max flex justify-center">
            <form
              onSubmit={form.handleSubmit(onSubmitForm)}
              className="space-y-5 w-3/4 flex flex-col items-center"
            >
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField 
                control={form.control}
                name="namaUsaha"
                render={({field}) => (
                  <FormItem>
                  <FormLabel>Nama Usaha</FormLabel>
                  <FormControl>
                    <Input placeholder="Jualan Bakso" {...field}></Input>
                  </FormControl>
                  <FormMessage/>
                  </FormItem>
                )}
                />
              </div>
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField 
                control={form.control}
                name="penghasilan"
                render={({field}) => (
                  <FormItem>
                  <FormLabel>Penghasilan</FormLabel>
                  <FormControl>
                    <Input placeholder="10.000.000" type="number" {...field}></Input>
                  </FormControl>
                  <FormMessage/>
                  </FormItem>
                )}
                />
              </div>

              <Button type="submit" className="btn">Kirim data</Button>
            </form>
          </div>
        </Form>
      </section>
    </main>
  );
}

export default FormKuliah;
