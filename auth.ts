import NextAuth from "next-auth"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { SignInSchema } from "@/lib/zod"
import { compareSync } from "bcrypt-ts"

const {PrismaAdapter} = require("@auth/prisma-adapter")
const {prisma} = require('@/lib/prisma')

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
  callbacks: {
    authorized({auth, request: {nextUrl}}){
      const isLoggedIn  = !!auth?.user;
      const role = auth?.user.role
      const ProtectedRoutes = ["/dashboard", "/user", "/form" ];

      
      if(!isLoggedIn && ProtectedRoutes.includes(nextUrl.pathname)){
        return Response.redirect(new URL("/login", nextUrl));
      }

      if(isLoggedIn && nextUrl.pathname.startsWith("/login")){
        if(role === "admin"){
          return Response.redirect(new URL("/dashboard", nextUrl));
        }
        
        if(role === "user"){
          return Response.redirect(new URL("/", nextUrl));
        }
      }
      return true
    },

    jwt({token, user}){
      if(user) token.role = user.role;
      return token;
    },
    session({session, token}){
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    }
  },
  trustHost: true,
})