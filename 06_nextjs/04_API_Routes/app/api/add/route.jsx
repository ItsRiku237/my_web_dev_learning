import { NextResponse } from "next/server";


export async function POST(request) {
    let data = await request.json()
    console.log(data)
    // return NextResponse.json({success:true ,data:"yes"})
    return NextResponse.json({success:true ,data})
}

// export async function GET(request: Request) {}
 
// export async function HEAD(request: Request) {}

// export async function PUT(request: Request) {}
 
// export async function DELETE(request: Request) {}
 
// export async function PATCH(request: Request) {}
 
