const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tuCorreo@gmail.com',
    pass: 'tuContraseña',
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'tuCorreo@gmail.com',
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
