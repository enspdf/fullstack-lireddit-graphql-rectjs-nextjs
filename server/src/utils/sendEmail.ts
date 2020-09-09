import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  // let testAccount = await nodemailer.createTestAccount();
  // console.log(testAccount);

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "y3kfzqcaksugjevn@ethereal.email",
      pass: "H7VRmmep3yK36Cbng1",
    },
  });

  let info = await transporter.sendMail({
    from: "",
    to,
    subject: "Change password",
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
