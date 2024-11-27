import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { SignInSchema } from "@/lib/zod"
import { compareSync } from "bcrypt-ts"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {strategy:"jwt"},
  pages: {signIn: "/login"},
  providers: [
    Credentials ({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const validateFields = SignInSchema.safeParse(credentials);

        if(!validateFields.success){
          return null;
        }

        const {email,password} = validateFields.data;

        const user = await prisma.user.findUnique({
          where: {email}
        })

        if(!user || !user.password){
          throw new Error("Invalid email or password");
        }

        const passwordMatch = compareSync(password, user.password);

        if(!passwordMatch) return null;

        return user;
      }
    })
  ],
})