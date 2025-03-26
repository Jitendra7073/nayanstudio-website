const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

const sendMessage = async (
  firstName,
  lastName,
  email,
  subject,
  eventDetails
) => {
  try {
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "legendjitesh428@gmail.com", // Your email address
        pass: "uueymfgwkdulosoe", // App-specific password
      },
    });

    // Path to the EJS template
    const templatePath = path.join(__dirname, "../Views/EmailTemplate.ejs");

    // Render the EJS template with dynamic data
    const emailContent = await ejs.renderFile(templatePath, {
      firstName,
      lastName,
      email,
      subject,
      eventDetails,
    });

    // Email options
    const mailOptions = {
      from: "vesunayanstudio@gmail.com", // Sender's email address
      to: "legendjitesh428@gmail.com", // Recipient's email address (from input)
      subject: subject, // Subject of the email
      html: emailContent, // HTML content from the EJS template
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error; // Re-throw the error to handle it in higher-level code
  }
};

module.exports = sendMessage;
