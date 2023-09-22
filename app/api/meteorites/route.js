import { NextResponse } from "next/server";
import config from "@/config";
import ApiResponse from "@/libs/Api/ApiResponse";

export async function GET() {
    try {
        const response = await fetch(config.MeteoritesApiRoute);
        const data = await response.json();
        
        return NextResponse.json({
            ...ApiResponse.Success, 
            data,
        });
    } catch (error) {
        return NextResponse.json({
            ...ApiResponse.ServerError, 
            error: {
                message: error.message, 
            }, 
        });
    }
}
