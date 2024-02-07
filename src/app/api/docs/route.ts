"use server";

import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
 
export async function POST(request: NextRequest) {

    const data = await request.formData();
    const file: File | null = data.get("doc") as unknown as File;

    if (!file) {
        return NextResponse.json({ response:'DANGER_UPLOAD_FILE', ok: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}.${ext}`;
    const filePath = path.join(process.cwd(), "src/app/storage", fileName);
    await writeFile(filePath, buffer);

    return NextResponse.json({ response:'SUCCESS_UPLOAD_FILE', ok: true, body: { filename:fileName } });
}
