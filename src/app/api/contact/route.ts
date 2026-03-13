import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_SERVER_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || `"Ghumo Holidays Contact" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.ADMIN_EMAIL || 'hello@ghumoholidays.com',
      subject: `New Inquiry: ${subject || 'General Inquiry'}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <h3>New Inquiry from Ghumo Holidays</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Only attempt to send if credentials exist
    if (process.env.EMAIL_SERVER_PASSWORD && process.env.EMAIL_SERVER_PASSWORD !== 'your_app_password') {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Mock Inquiry received:", { name, email, phone, subject, message });
    }

    return NextResponse.json({ success: true, message: "Inquiry sent successfully" });
  } catch (error: any) {
    console.error("Inquiry API Error:", error.message);
    return NextResponse.json({ success: false, error: "Failed to send inquiry" }, { status: 500 });
  }
}
