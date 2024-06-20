import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend("re_HYs1kSjK_Q4PSv1YyMrfoPaWF83511ZV4");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "nidhin.sundar@seqato.com",
        subject: "Invitation",
        html: `http://localhost:3000`,
      });

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Failed to send email:", error);
      return res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
