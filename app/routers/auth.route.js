const express = require('express');
const router = express.Router();

// goi file controller
const authController = require("../controllers/auth.controller");


router.route("/login")
    .post(authController.login)

<<<<<<< HEAD
=======
//router.route("/logout")
//    .post(authController.logout)
>>>>>>> 3fcda5d6c577a59712b3ef4544ac5a03e1ad2610

router.route("/register")
    .post(authController.register)
    
module.exports = router;