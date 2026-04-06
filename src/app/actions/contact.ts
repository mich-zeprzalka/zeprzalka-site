"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

export interface ContactFormState {
  success: boolean
  message: string
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Imię musi mieć minimum 2 znaki."),
  email: z.string().trim().email("Podaj poprawny adres e-mail."),
  projectType: z.string().trim().optional(),
  message: z.string().trim().min(5, "Wiadomość musi mieć minimum 5 znaków.")
})

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("project-type"),
    message: formData.get("message")
  })

  if (!result.success) {
    return { success: false, message: result.error.issues[0].message }
  }

  const { name, email, projectType, message } = result.data

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp-sh188996.super-host.pl",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: "m@zeprzalka.com",
    replyTo: email,
    subject: `Wiadomość z formularza: ${projectType || "Brak tematu"}`,
    text: `Imię: ${name}\nEmail: ${email}\nRodzaj projektu: ${projectType || "-"}\n\n${message}`,
    html: `
      <p><strong>Imię:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Rodzaj projektu:</strong> ${projectType || "-"}</p>
      <hr/>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  })

  return { success: true, message: "Wiadomość wysłana. Odezwę się wkrótce!" }
}
