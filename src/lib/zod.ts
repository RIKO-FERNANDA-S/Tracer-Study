import { object, string } from "zod";

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
