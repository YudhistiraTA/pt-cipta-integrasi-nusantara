const express = require("express");
const authentication = require("../middlewares/authentication");
const UserController = require("../controllers");
const router = express.Router();

router.get("/api/register", UserController.register);
router.get("/api/login", UserController.login);
router.get("/api/me", authentication, UserController.detail);

module.exports = router;
