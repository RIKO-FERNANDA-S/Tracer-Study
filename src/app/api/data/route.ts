import { NextRequest, NextResponse } from 'next/server';
import {prisma }from '@/lib/prisma'; // Prisma Client
import { json } from 'stream/consumers';


export async function GET(req: Request, res: NextResponse) {
    try {
        const users = await prisma.user.findMany({
            where: {
                role: "user"
            }
        });
        return NextResponse.json(users);
        
    } catch (error) {
        console.log(error)
    }

}




