"use server";
import { RegisterSchema, SignInSchema, CreateDataSchema, CreateAlumniKuliahSchema } from "./zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import { signIn, signOut } from "../../auth";
import { AuthError } from "next-auth";
import { z } from "zod";

export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validateFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (err) {
    if (err) {
      return { message: "Gagal daftar, user sudah ada" };
    }
  }
  redirect("/login");
};

// sign in credentials
export const signInCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = SignInSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials" };
        default:
          return { message: "Something when wrong" };
      }
    }
    throw error;
  }
};

export const signOutCredentials = async () => {
  await signOut();
};


//  export const onSubmitForm = async (values: z.infer<typeof CreateDataSchema>) => {
//     console.log(values)
//     try {
//       const response = await fetch(`${process.env.BASE_URL}/api/data/dataSiswa`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });
      
//       if (response.ok) {
//         return response
//       }
      
//     } catch (error) {
//       console.log(error)
//     }
//     redirect("/dashboardUser")
//   };


export const CreateAlumniKuliah = async (formatData: FormData) => {
  const validateFields = CreateAlumniKuliahSchema.safeParse(Object.fromEntries(formatData.entries()))
  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    }
  }

  const {kuliah, alamat} = validateFields.data

    try {
      await prisma.alumniKuliah.create({
        data: {
          kuliah,
          alamat,
          userId: validateFields.data.user,
        }
      })
    } catch (error) {
      if(error){
        return {message: "Gagal menambahkan jurusan sudah ada"}
      }
    }
  
}