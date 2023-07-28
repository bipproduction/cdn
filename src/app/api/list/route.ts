import fs from 'fs'
import { NextResponse } from 'next/server'
export function GET() {
    const ls = fs.readdirSync('./public/assets/files')
    return NextResponse.json({
        files: ls,
    })
}