// controllers/contactController.js
const Contact = require('../models/Contact');

exports.submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create new contact message
    const contact = await Contact.create({
      name,
      email,
      message
    });

    // You could add email notification logic here
    // await sendEmail(contact);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: contact
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};