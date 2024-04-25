const User = require("../models/DocGia.model");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const bcrypt = require("bcrypt");


exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const inputPassword = req.body.password;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json("Incorrect email");
    }
    const validPassword = await bcrypt.compare(inputPassword, user.password);
    if (!validPassword) {
      return res.status(400).json("Incorrect password");
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        name: user.firstName + " " + user.lastName,
        address: user.address,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "2h" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDay: req.body.birthDay,
      gender: req.body.gender,
      address: req.body.address,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.logout = async (req, res) => {

}