const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");
const auth = require("../middleware/auth");

router.post("/", async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Name, email and message are required"
    });
  }

  try {
    const contact = await Contact.create({
      name,
      email,
      company,
      phone,
      message
    });

    return res.status(201).json({
      message: "Contact saved successfully",
      contact
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message
    });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.json(contacts);
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;
