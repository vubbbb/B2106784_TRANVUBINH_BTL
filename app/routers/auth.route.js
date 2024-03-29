const express = require('express');
const router = express.Router();
// goi file controller
const authController = require("../controllers/auth.controller");


router.route("/")
    .get(authController.signin)



module.exports = router;