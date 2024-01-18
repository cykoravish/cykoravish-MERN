const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    console.log("all users are", users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No User Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log("all contacts are", contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contact Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllUsers, getAllContacts };