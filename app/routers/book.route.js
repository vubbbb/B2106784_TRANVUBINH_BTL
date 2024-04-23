const express = require('express');
const router = express.Router();
const bookController = require("../controllers/book.controller");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.route("/")
    .get(verifyToken, bookController.getAllBooks)
    .post(verifyTokenAndAdmin, bookController.createBook)
    
router.route("/search")
    .get(verifyToken, bookController.getBookByName)

// router.route("/search")
//     .get( bookController.getBookByName)

// thêm các điều kiện kiểm tra, chỉ có admin mới được phép xóa sách
router.route("/:id")
    .get(verifyToken, bookController.getBookById)
    .delete(verifyTokenAndAdmin, bookController.deleteBook)
    .put(verifyTokenAndAdmin, bookController.updateBook)





module.exports = router;