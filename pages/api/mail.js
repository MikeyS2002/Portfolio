const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: `New email about '${body.subject}'`,
    text: message,
    html: message.replace(/\r\n/g, " <br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "Ok" });
}
