import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { teamEmails } from "@/config/team";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const file = formData.get("file") as File | null;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    if (file && typeof file === "object" && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "File exceeds the 10MB limit." },
          { status: 400 }
        );
      }
      const bytes = await file.arrayBuffer();
      attachments.push({
        filename: file.name || "attachment",
        content: Buffer.from(bytes),
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "your_key_here") {
      // Log and fail clearly so the client sees a helpful message but the
      // absence of an API key is never silent.
      console.warn(
        "RESEND_API_KEY not configured. Submission received but email not sent."
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please call 801-830-5884 or try again later.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const from =
      process.env.RESEND_FROM_EMAIL ||
      "Elevation 100 <onboarding@resend.dev>";

    const html = `
      <div style="font-family: Inter, Arial, sans-serif; color:#0A0A0A; max-width:600px; margin:auto;">
        <div style="background:#0A0A0A; color:#fff; padding:24px; text-align:center;">
          <h1 style="margin:0; font-family: 'Bebas Neue', Arial; letter-spacing:4px; color:#C9A84C;">ELEVATION 100</h1>
          <p style="margin:4px 0 0; letter-spacing:2px; font-size:12px;">NEW PROJECT INQUIRY</p>
        </div>
        <div style="padding:24px; background:#fff; border:1px solid #eee;">
          <p><strong>Name:</strong> ${escape(name)}</p>
          <p><strong>Phone:</strong> ${escape(phone)}</p>
          <p><strong>Email:</strong> ${escape(email)}</p>
          <p><strong>Project Type:</strong> ${escape(projectType || "Not specified")}</p>
          <p><strong>Description:</strong></p>
          <p style="white-space:pre-wrap; background:#F5F5F5; padding:12px; border-left:3px solid #C9A84C;">${escape(description || "No description provided.")}</p>
          ${
            attachments.length
              ? `<p style="margin-top:16px;"><strong>Attached file:</strong> ${escape(attachments[0].filename)}</p>`
              : ""
          }
        </div>
        <p style="text-align:center; font-size:12px; color:#666; margin-top:16px;">Sent from elevation100.com</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to: teamEmails,
      replyTo: email,
      subject: `New Project Inquiry — ${name}`,
      html,
      attachments: attachments.map((a) => ({
        filename: a.filename,
        content: a.content,
      })),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
