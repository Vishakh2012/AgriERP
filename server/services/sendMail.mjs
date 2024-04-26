import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendMail = async (email, subject, text) => {
  try {
    //create a email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.PORT),
      secure: process.env.SECURE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    //send email to the user
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email send successfully");
  } catch (err) {
    console.error("cannot send mail" + err.message);
  }
};

export default sendMail;
