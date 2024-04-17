<<<<<<< HEAD
const User = require("../models/User.model");

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const inptPassword = req.body.password;
    const user = await User.findOne({ email: email, password: inptPassword });
    if (user) {
      res.status(200).json("Login successful!");
    } else {
      return res.status(404).json("Incorrect email or password!");
    }
    const { password, ...others } = user._doc;  

      const accessToken = jwt.sign(
      {
          id: user._id,
          isAdmin: user.isAdmin,
      }, 
      process.env.JWT_SEC,
          {expiresIn:"3d"}
      );

     res.status(200).json({...others, accessToken});

  } catch (err) {
    res.status(500).json(err);
  }
};


exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.massage });
  }
=======
const User = require('../models/User.model');
const passport = require('passport');
const mongoose = require('mongoose');

exports.login = function(req, res) {

    passport.authenticate('local', function(err, user, info){
      var token;
  
      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err);
        return;
      }
  
      // If a user is found
      if(user){
        token = user.generateJwt();
        res.status(200);
        res.json({
          "token" : token
        });
      } else {
        // If user is not found
        res.status(401).json(info);
      }
    })(req, res);
  
  };

exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        user.setPassword(req.body.password);
        user.save(function (err) {
            var token;
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        });
    } catch (error) {
        res.status(500).json({ message: error.massage });
    }
>>>>>>> 3fcda5d6c577a59712b3ef4544ac5a03e1ad2610
};
