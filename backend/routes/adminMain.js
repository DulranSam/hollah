const express = require("express");
const router = express.Router();
const adminOne = require("../controllers/adminOne");
const adminId = require("../controllers/adminID");

router.route("/").get(adminOne.getRequest).post(adminOne.postRequest);
router.route("/:id").put(adminId.updateAdmin).delete(adminId.deleteAdmin);

module.exports = router;
