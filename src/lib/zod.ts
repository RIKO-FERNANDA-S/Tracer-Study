import {
  object,
  string,
  number,
  boolean,
  array,
  ZodIssueCode,
  NEVER,
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
  placeOfBirth: string().min(3, "Berikan lebih lengkap lagi"),
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
  gender: string(),
  tahunLulus: string()
  .min(4, { message: "nmor kurang bro" })
  .max(12, { message: "jangan banyak banyak" })
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
  noTelphone: string().min(2, {message: "kurang nomor"}).refine((val) => !isNaN(val as unknown as number)).transform((val, ctx) => {
    const parsed = parseInt(val);
    if(isNaN(parsed)){
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "bukan ak=ngka"
      });
      return NEVER;
    }
    return parsed;
  }),
  major: string(),
  address: string().min(7, "Berikan alamat yang lebih lengkap lagi"),
});

export const CreateAlumniKuliahSchema = object({
  kuliah: string().min(2, "Berikan lebih jelas lagi"),
  alamat: string().min(7, "Berikan alamat yang lebih lengkap lagi"),
  user: string(),
});
