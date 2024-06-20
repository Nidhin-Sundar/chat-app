import { Resend } from "resend";

const resend = new Resend("re_HYs1kSjK_Q4PSv1YyMrfoPaWF83511ZV4");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "nidhin.sundar@seqato.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});

// const apiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { email } = req.body;
//   const { method } = req;

//   if (method === "POST") {
//     if (!email) {
//       return res.status(400).json({ message: "Missing fields" });
//     }

//     try {
//       await resend.emails.send({
//         from: "onboarding@resend.dev",
//         to: "nidhin.sundar@seqato.com",
//         subject: "Test Mail",
//         html: "Test mail <strong>content</strong>",
//       });
//       res.status(200).json({ success: true });
//     } catch (error) {
//       res.status(400).json({ success: false });
//     }
//   } else {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
// };
