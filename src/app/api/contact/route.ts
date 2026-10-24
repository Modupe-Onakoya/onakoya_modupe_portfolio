import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, type, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: "onakoyamodupe0@gmail.com",
        replyTo: email,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nType: ${type}\n\n${message}`,
    });

    if (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ message: "Sent" }, { status: 200 });
}