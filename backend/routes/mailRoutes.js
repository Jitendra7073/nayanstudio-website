const express = require("express");
const Inquiry = require("../Model/Inquiry");
const sendMail = require("../Controller/sendMail");

const router = express.Router();

// POST /api/inquiry/mail
router.post("/mail", async (req, res) => {
  const { firstName, lastName, email, subject, eventDetails } = req.body;

  try {
    const inquiry = new Inquiry({
      firstName,
      lastName,
      email,
      subject,
      eventDetails,
    });

    await inquiry.save();
    await sendMail(firstName, lastName, email, subject, eventDetails);

    res.status(200).json({
      message: "Your Inquiry Recorded 😊",
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit the inquiry." });
  }
});

module.exports = router;
