import { NextResponse } from "next/server";
import path from 'path'
import fs from 'fs'

export async function GET() {
    const dir = fs.readdirSync('./public/assets/files')
    return new NextResponse(dir.toString())
}