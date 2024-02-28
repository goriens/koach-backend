const express = require("express");
const { getAllUsers } = require("../Controllers/userController");
const router = express.Router();

router.route("/admin/users").get(getAllUsers);

module.exports = router;
