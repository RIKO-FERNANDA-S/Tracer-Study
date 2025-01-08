import { object, string, number, boolean, array } from "zod";

export const SignInSchema = object({
  email: string().email("Email salah"),
  password: string()
    .min(8, "Berikan password minimal 8")
    .max(20, "Terlalu banyak karakter max 20"),
});

export const RegisterSchema = object({
  name: string().min(1, "Berikan nama yang lebih panjang lagi"),
  email: string().email("Email salah"),
  password: string()
    .min(8, "Berikan password minimal 8")
    .max(20, "Terlalu banyak karakter max 20"),
  ConfirmPassword: string()
    .min(8, "Berikan password minimal 8")
    .max(20, "Terlalu banyak karakter max 20"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: " Password tidak sesuai",
  path: ["ConfirmPassword"],
});

export const CreateDataJurusanSchema = object({
  name: string().min(1, "Berikan nama yang lebih panjang lagi"),
  slug: string().min(1, "Berikan nama yang lebih panjang lagi"),
})

export const CreateDataSchema = object({
  name: string().min(3, "Berikan nama lengkap kamu"),
  tempatLahir : string().min(3, "Berikan lebih lengkap lagi"),
  tanggalLahir : number().int().min(3, "Berikan lebih lengkap lagi"),
  kelamin: boolean(),
  tamatTahun: number().int().min(4, "Tahun minimal 4 angka"),
  jurusan: string(),
  alamat: string().min(7, "Berikan alamat yang lebih lengkap lagi"),
  tlp: number().int().min(12, "Nomor kurang dari 12"),
  email: string().email("Email salah"),
  user : string(),
  dataUser: string().min(3,"gunakan sesuai contoih")
});


export const CreateAlumniKuliahSchema = object({
  kuliah: string().min(2, "Berikan lebih jelas lagi"),
  alamat: string().min(7, "Berikan alamat yang lebih lengkap lagi"),
  user : string(),
})

