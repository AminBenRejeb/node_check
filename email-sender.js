const nodemailer = require('nodemailer');

// create var
const EMAIL_ADDRESS = 'benrejebamine@gmail.com';
const EMAIL_PASSWORD = '********';

// Create a transporter using Gmail  
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_ADDRESS,
    pass: EMAIL_PASSWORD
  }
});

// Email content
const mailOptions = {
  from: EMAIL_ADDRESS,
  to: EMAIL_ADDRESS, // Sending to myself for testing
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from Node.js!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent:', info.response);
  }
});
