import { headers } from "next/headers";

export async function GET(request: Request) {
    const res = "Hello Next Js API!";

    return Response.json({res});
}