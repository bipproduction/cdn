// pages/api/upload.ts
import fs from 'fs';
import { NextResponse } from 'next/server';

export async function POST(req: any, res: any) {
    const form = await req.formData()
    const file = form.get("file")

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(`./public/assets/files/${file.name}`, fileBuffer)

    console.log(`upload file ${file.name}`)
    return new NextResponse("success")
};

