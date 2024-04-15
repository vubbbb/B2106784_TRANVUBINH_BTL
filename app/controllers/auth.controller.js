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
};
