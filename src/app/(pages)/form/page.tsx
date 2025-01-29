"use client"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form, } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { CreateDataSchema} from "@/lib/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import Image from "next/image";
import Logo from "../../../../public/imgLogo/icon.png";
import { Button } from "@/components/ui/button";


type FormValues = {
tempatLahir: string,
tanggalLahir: number,
alamat: string,
tamatTahun: number,
tlp: number,
kelamin: string,
jurusan: string
}



function FormData() {

  const onSubmit = async (values: z.infer<typeof CreateDataSchema>) => {
    console.log(values)
    try {
      const response = await fetch("/api/data/dataSiswa", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });


      const data = await response.json();
      console.log(data)
      return data
      
      
    } catch (error) {
      console.log(error)
    }
  };


  const form = useForm<z.infer<typeof CreateDataSchema>>({
    resolver: zodResolver(CreateDataSchema),
    defaultValues: {
      placeOfBirth:"",
      dateOfBirth: 0,
      major: "",
      gender: "",
      address: "",
      noTelphone: 0,
      tahunLulus: 0
    },
  });


  return (
    <main className="w-full h-max ">
      <section className="w-full h-max flex py-4 pb-10">
        <Form {...form}>
          <div className="w-full h-max flex justify-center">
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
                  name="placeOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tempat Lahir anda</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>Isi Tempat lahir anda.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="dateOfBirth"
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
                  name="address"
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
                  name="noTelphone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telphone</FormLabel>
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
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Pilih Jenis Kelamin</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Jenis Kelamin"></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Laki-Laki">Laki Laki</SelectItem>
                        <SelectItem value="Perempuan">Perempuan</SelectItem>
                      </SelectContent>
                        </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="tahunLulus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>tamatTahun</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>Isi nama tamatTahun anda</FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="major"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                    <FormLabel>Pilih Jurusan Anda</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Jurusan Anda"></SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tkjt">TKJT</SelectItem>
                      <SelectItem value="tbsm">TBSM</SelectItem>
                      <SelectItem value="tp">TP</SelectItem>
                      <SelectItem value="tkr">TKR</SelectItem>
                      <SelectItem value="akl">AKL</SelectItem>
                      <SelectItem value="fkk">FKK</SelectItem>
                      <SelectItem value="otkp">OTKP</SelectItem>
                      <SelectItem value="dkv">DKV</SelectItem>
                      <SelectItem value="sma">SMA</SelectItem>
                    </SelectContent>
                      </Select>
                    <FormMessage />
                  </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="btn">submit bro</Button>
            </form>
          </div>
        </Form>
      </section>
    </main>
  );
}

export default FormData;
