const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log("getting users from admin", users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// get All Contacts for admin....................................

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// delete form admin....................................
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "user Deleted Successfully." });
  } catch (error) {
    next(error);
  }
};
// single user logic form admin....................................
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
// update user logic form admin....................................
const updateUserbyId = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserdata = req.body;
    const updateData = await User.updateOne(
      { _id: id },
      {
        $set: updateUserdata,
      }
    );

    return res.status(200).json(updateData);
  } catch (error) {
    next(error);
  }
};

// contacts delete form admin....................................
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "contact Deleted Successfully." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserbyId,
  deleteContactById,
};
