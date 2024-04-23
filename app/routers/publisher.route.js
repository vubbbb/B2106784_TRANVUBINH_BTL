const express = require('express');
const router = express.Router();
const publisherController = require("../controllers/publisher.controller");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.route("/")
    .get(verifyTokenAndAdmin, publisherController.getAllPublishers)
    .post(verifyTokenAndAdmin, publisherController.createPublisher)
    
router.route("/search")
    .get(verifyTokenAndAdmin, publisherController.getPublisherByName)

router.route("/:id")
    .get(verifyTokenAndAdmin, publisherController.getPublisherById)
    .delete(verifyTokenAndAdmin, publisherController.deletePublisher)
    .put(verifyTokenAndAdmin, publisherController.updatePublisher)

module.exports = router;
