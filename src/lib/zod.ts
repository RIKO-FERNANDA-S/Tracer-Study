import {
  object,
  string,
  number,
  boolean,
  array,
  ZodIssueCode,
  NEVER,
  coerce,
} from "zod";

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
  placeOfBirth: string().min(4, "Berikan lebih lengkap lagi"),
  dateOfBirth: string()
    .refine((val) => !isNaN(val as unknown as number))
    .transform((val, ctx) => {
      const parsed = parseInt(val);
      if (isNaN(parsed)) {
        ctx.addIssue({
          code: ZodIssueCode.custom,
          message: "Bukan angka",
        });
        return NEVER;
      }
      return parsed;
    }),
  gender: string().min(4, {message: "Pilih jenis kelamin anda"}),
  tahunLulus: string()
  .min(3, { message: "Angka tahun yang anda beri kurang" })
  .max(4, { message: "Terlalu banyak angka" })
  .refine((val) => !isNaN(val as unknown as number))
  .transform((val, ctx) => {
    const parsed = parseInt(val);
    if (isNaN(parsed)) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "Bukan angka",
      });
      return NEVER;
    }
    return parsed;
  }),
  noTelphone: string().min(11, {message: "Nomor telpon kurang lengkap"}).max(13, {message: "Terlalu banyak nomor telepon"}),
  major: string().min(2, {message: "Pilih salah satu jurusan"}),
  address: string().min(10, "Berikan alamat sesuai dengan contoh"),
});

export const CreateAlumniKuliahSchema = object({
  kuliah: string().min(2, "Berikan lebih jelas lagi"),
  alamat: string().min(7, "Berikan alamat yang lebih lengkap lagi"),
  user: string(),
});
