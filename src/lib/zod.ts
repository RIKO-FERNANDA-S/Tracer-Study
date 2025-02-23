import { object, string} from "zod";

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

export const CreateDataSchema = object({
  name: string().min(4, "Berikan nama lebih panjang lagi"),
  nik: string(),
  placeOfBirth: string().min(4, "Berikan lebih lengkap lagi"),
  dateOfBirth: string(),
  gender: string().min(4, { message: "Pilih jenis kelamin anda" }),
  tahunLulus: string(),
  email: string().email("Email salah"),
  noTelphone: string()
    .min(11, { message: "Nomor telpon kurang lengkap" })
    .max(13, { message: "Terlalu banyak nomor telepon" }),
  major: string().min(2, { message: "Pilih salah satu jurusan" }),
  address: string().min(10, "Berikan alamat sesuai dengan contoh"),
  salary: string().min(5),
  status: string(),
  startStatus: string().min(4, "kurang lengkap"),
  whatStatus: string().min(4, "Berikan jabatan yang lebih jelas lagi"),
  whereStatus: string().min(5, "kurang lengkap"),
  relevance: string(),
  bossName: string().min(2, "berikan nama lebih lengkap"),
  bossPosition: string(),
});

// export const CreateAlumniKuliahSchema = object({
//   namaKuliah: string().min(2, "Berikan lebih jelas lagi"),
//   alamat: string().min(7, "Berikan alamat yang lebih lengkap lagi"),
// });

// export const CreatealumniBekerjaSchema = object({
//   tempatKerja: string().min(5 , "Berikan tempat kerja yang lebih lengkap"),
//   alamat: string().min(7, "Berikan alamat yang lebih lengkap lagi"),
//   jabatan: string().min(4, "Berikan jabatan yang lebih jelas lagi"),
//   statusPekerjaan: boolean(),

// })

// export const CreateAlumniWirausahaSchema = object({
//   namaUsaha: string().min(3, "berikan lebih jelas lagi"),
//   penghasilan: string()
//   .min(3, { message: "Angka tahun yang anda beri kurang" })
//   .max(4, { message: "Terlalu banyak angka" })
//   .refine((val) => !isNaN(val as unknown as number))
//   .transform((val, ctx) => {
//     const parsed = parseInt(val);
//     if (isNaN(parsed)) {
//       ctx.addIssue({
//         code: ZodIssueCode.custom,
//         message: "Bukan angka",
//       });
//       return NEVER;
//     }
//     return parsed;
//   })
// })
