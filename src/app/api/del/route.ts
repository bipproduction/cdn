import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const { name } = await req.json()

    if (!name) return new NextResponse("400", {
        status: 400
    })

    if (!fs.existsSync(`./public/assets/files/${name}`)) return new NextResponse("file not exist", {
        status: 400
    })

    fs.unlinkSync(`./public/assets/files/${name}`)

    return new NextResponse("ok")
}