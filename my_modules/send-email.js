const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "aidar.kz@gmail.com",
    pass: process.env.MAIL_PASS,
  },
});

const message = {
  from: '"Aidar 🤗" <aidar.kz@gmail.com>',
  to: "aydeke2@gmail.com, thegunner125@gmail.com, yolkinmansur@gmail.com, olzhasjambulov7@gmail.com, alpysaruzan4@gmail.com",
  subject: "Привет! 👻",
  text: "Привет от nodemailer!!!",
  html: `
    <h1>Привет от <b>nodemailer!</b></h1>
    <img height="200" src="cid:123" />
  `,
  attachments: [
    {
      filename: "image.png",
      path: path.join(__dirname, "../files/image.png"),
      cid: "123",
    },
  ],
};

transporter.sendMail(message, (err, info) => {
  if (err) throw err;
  console.log("Email отправлен:", info.response);
});
