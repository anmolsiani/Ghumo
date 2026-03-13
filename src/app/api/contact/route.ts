import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, travelDates, travelers } = body;

    if (!name || !email || !phone || !message) {
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
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nTravel Dates: ${travelDates || 'N/A'}\nTravelers: ${travelers || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 30px; border-radius: 20px;">
          <h2 style="color: #8B7355; margin-bottom: 30px;">New Trip Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;">${email}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Phone:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;">${phone}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Travel Dates:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;">${travelDates || 'Not specified'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Group Size:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;">${travelers || 'Not specified'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Subject:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;">${subject || 'General Inquiry'}</td></tr>
          </table>
          <div style="margin-top: 30px; padding: 20px; background: #fcfcfc; border-radius: 10px;">
            <strong>Message:</strong><br/>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
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
