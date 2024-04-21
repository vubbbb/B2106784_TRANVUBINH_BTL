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

router.route("/user")
    .get(orderController.getUserOrder)


router.route("/update")
    .put(verifyTokenAndAdmin, orderController.updateOrder)


module.exports = router;