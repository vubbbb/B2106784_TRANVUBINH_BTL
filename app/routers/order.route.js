const express = require('express');
const router = express.Router();
// goi file controller
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("../middleware/verifyToken");
const orderController = require("../controllers/order.controller");


router.route("/")
    .get(verifyTokenAndAdmin, orderController.getAllOrder)
    .post(orderController.createOrder)




router.route("/update")
    .put(verifyToken, orderController.updateOrder)


module.exports = router;