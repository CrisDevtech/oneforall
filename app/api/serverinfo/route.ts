import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const user = await currentUser();
        const {
            itOnDuty,
            serverOnTime,
            serverOfftime,
            remarks,
            nasTimeOn,
            dateofserver,
            nasTimeOff,
        } = body;

        if (!user || !user.id || !user.firstName) {
            return new NextResponse('Unauthorized', { status: 401 })
        }
        if (!itOnDuty || !serverOnTime || !serverOfftime || !remarks || !nasTimeOn || !dateofserver || !dateofserver || !nasTimeOff) {
            return new NextResponse('Missing required fields', { status: 400 })
        }


        const serverinformation = await prismadb.server.create({
            data: {
                itOnDuty,
                serverOnTime,
                serverOfftime,
                remarks,
                nasTimeOn,
                dateofserver,
                nasTimeOff,
            }
        })

        return NextResponse.json(serverinformation)


    } catch (error) {
        console.log('[SERVERINFORMATION_POST', error);
        return new NextResponse('Internal Error', { status: 500 })
    }


}