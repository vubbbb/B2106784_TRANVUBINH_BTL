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
};
