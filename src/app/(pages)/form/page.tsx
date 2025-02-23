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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { CreateDataSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

function FormData() {

  const onSubmitForm = async (values: z.infer<typeof CreateDataSchema>) => {
    try {
      const response = await fetch("/api/dataSiswa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("masalah bro");
      }
      Swal.fire({ icon: "success", titleText: "Berhasil ditambah" });
    } catch (error) {
      console.log(error);
      Swal.fire({ icon: "warning", titleText: "Email sudah ada" });
    }finally{
      redirect("/");
    }
    
  };

  const form = useForm<z.infer<typeof CreateDataSchema>>({
    resolver: zodResolver(CreateDataSchema),
    defaultValues: {
      name: "",
      email: "",
      nik: "",
      placeOfBirth: "",
      dateOfBirth: "",
      major: "",
      tahunLulus: "",
      gender: "",
      address: "",
      noTelphone: "",
      status: "",
      startStatus: "",
      whatStatus: "",
      whereStatus: "",
      relevance: "",
      bossName: "",
      bossPosition: "",
      salary: "",
    },
  });

  return (
    <main className="w-full h-max ">
      <section className="w-full h-max flex py-4 pb-10">
        <Form {...form}>
          <div className="w-full h-max flex justify-center">
            <form
              onSubmit={form.handleSubmit(onSubmitForm)}
              className="space-y-5 w-3/4 flex flex-col items-center "
            >
              {/* NAMA LENGKAP */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Nama Lengkap" {...field} />
                      </FormControl>
                      <FormDescription>Isi Nama lengkap Anda.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* NIK */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="nik"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NIK</FormLabel>
                      <FormControl>
                        <Input placeholder="NIK" {...field} />
                      </FormControl>
                      <FormDescription>
                        Isi NIK anda dnegan benar.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* TEMPAT LAHIR */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="placeOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tempat Lahir anda</FormLabel>
                      <FormControl>
                        <Input placeholder="Bojonegoro" {...field} />
                      </FormControl>
                      <FormDescription>Isi Tempat lahir anda.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* TANGGAL LAHIR */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel>Tanggal Lahir</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(new Date(field.value), "PPP") // Pastikan field.value dikonversi ke Date sebelum diformat
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={(date) => {
                              field.onChange(
                                date ? format(date, "yyyy-MM-dd") : ""
                              ); // Simpan sebagai string
                            }}
                            disabled={(date) => date > new Date("2010-12-31")}
                            defaultMonth={new Date("2010-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        isi tanggal lahir kamu, tanpa spasi dan hanya angka.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* JENIS KELAMIN */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Pilih Jenis Kelamin</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
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

              {/* LULUS TAHUN */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="tahunLulus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tahun Lulus</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Jurusan Anda"></SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="2024" >2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Isi Tahun Lulus Anda</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* JURUSAN */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="major"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Pilih Jurusan Anda</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
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

              {/* ALAMAT */}
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* TELEPHON */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="noTelphone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telphone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder=""
                          type="number"
                          inputMode="numeric"
                          step={1}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Isi Dengan 12 Angka</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* EMAIL */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. example@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Masukkan Email Aktif Anda.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* STATUS BEKERJA/KULIAH/WIRAUSAHA */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Pilih Status anda</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Status anda"></SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="kuliah">Kuliah</SelectItem>
                          <SelectItem value="bekerja">Bekerja</SelectItem>
                          <SelectItem value="wirausaha">Wirausaha</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* MULAI STATUS */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="startStatus"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Mulai (Bekerja/Kuliah/Wirausaha)</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(new Date(field.value), "PPP") // Pastikan field.value dikonversi ke Date sebelum diformat
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={(date) => {
                              field.onChange(
                                date ? format(date, "yyyy-MM-dd") : ""
                              ); // Simpan sebagai string
                            }}
                            disabled={(date) =>
                                 date > new Date("2025-12-31")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Pilih tanggal mulai kalian bekerja/kuliah/wirausaha.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* APA JABATAN/JURUSAN/JASA */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="whatStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apa (Jabatan/Jurusan/Usaha)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Karyawan/IT/Jualan Online"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Isi sesuai contoh.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* DIMANA STATUS */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="whereStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Dimana Alamat (Bekerja/Kuliah/Usaha)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Jln. Kurek Sari no.8" {...field} />
                      </FormControl>
                      <FormDescription>
                        Masukkan Alamat Lengkap.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* SALARY */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="salary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Penghasilan Perbulan</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="10000000"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Masukkan Penghasilan Anda Perbulan.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* RELEVANCE */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="relevance"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Pilih Relevansi anda</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Relevansi anda"></SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tidak relevan">
                            Tidak Relevan
                          </SelectItem>
                          <SelectItem value="relevan">Relevan</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* NAMA ATASAN */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="bossName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Atasan (Jika Bekerja)</FormLabel>
                      <FormControl>
                        <Input placeholder="Mulyono" {...field} />
                      </FormControl>
                      <FormDescription>
                        Masukkan Nama Atasan Anda.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* JABATAN ATASAN */}
              <div className="w-full bg-white p-5 rounded-xl shadow-md">
                <FormField
                  control={form.control}
                  name="bossPosition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Posisi Atasan Sebagai (Jika Bekerja)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Pemilik Perusahaan" {...field} />
                      </FormControl>
                      <FormDescription>
                        Masukkan Jabatan Atasan Anda.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="btn">
                submit bro
              </Button>
            </form>
          </div>
        </Form>
      </section>
    </main>
  );
}

export default FormData;
