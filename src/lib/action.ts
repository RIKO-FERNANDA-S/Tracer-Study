"use server";
import { RegisterSchema, SignInSchema, CreateDataSchema, CreateAlumniKuliahSchema } from "./zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import { signIn, signOut } from "../../auth";
import { AuthError } from "next-auth";

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

// export const CreateData = async ( formData: FormData) => {
//   // const data = Object.fromEntries(formData.entries())
//   // console.log(data)
//   const validateFields = CreateDataSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (!validateFields.success) {
//     return {
//       error: validateFields.error.flatten().fieldErrors,
//     };
//   }

//   // const {name,} = validateFields.data

//   try {
//     await prisma.dataUser.create({
//       data: {
//         name: validateFields.data.name,
//         tempatLahir: validateFields.data.tempatlahir,
        
//       }
//     });
//   } catch (err) {
//     if (err) {
//       return { message: "Gagal daftar, user sudah ada" };
//     }
//   }
//   // redirect("/dashboard");
// };


export const createData = async (prevState: any,formData: FormData) => {
  const validateFields = CreateDataSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }


  const { tamatTahun, tempatLahir, tanggalLahir, kelamin, alamat, jurusan, tlp} = validateFields.data
  try {
    await prisma.user.create({
      data: {
        tamatTahun,
        tempatLahir,
        tanggalLahir,
        alamat,
        kelamin,
        jurusan,
        tlp
      }
    })
  } catch (err) {
    if (err) {
      return { message: "Gagal daftar, user sudah ada" };
    }
  }
}

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