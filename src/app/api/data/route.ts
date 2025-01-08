import { NextRequest, NextResponse } from 'next/server';
import {prisma }from '@/lib/prisma'; // Prisma Client
import { auth } from '../../../../auth';
import { CreateDataSchema } from '@/lib/zod';

// export async function GET(req: Request, res: NextResponse) {
//     const session = await auth()
//     const user = await prisma.user.findUnique({where: {email: session?.user.email}});

//     // const data = {
//     //     ...req.body,
//     //     userId: user.id
//     // }


//     return NextResponse.json({message: user}, { status: 200 });

// }

type Tdata = {
    name: string,
    tempatLahir:string
}

export async function POST(req: Request, res: NextResponse) {
    
    try{
        const formData = await req.formData()
        const name = formData.get('name')
        return Response.json({message: "oke", name: name})
        
    }catch(err){
        console.log(err)
    }
}
