const nodemailer = require("nodemailer");

const password = process.env.EMAIL_PASSWORD;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alerts.prannerakshak@gmail.com",
    pass: password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const output = `
    <div class="card">
    <img src="img_avatar.png" alt="Avatar" style="width:100%">
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
    </div>
`;

let mailOptions = {
  from: '"Praann-E-Rakshak" alerts.prannerakshak@gmail.com',
  to: "karthikkashyap98@gmail.com",
  subject: "Hi there soovar!",
  text: "IT works",
  html: output,
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error Occurs", err);
  } else {
    console.log("Email Sent!");
  }
});
