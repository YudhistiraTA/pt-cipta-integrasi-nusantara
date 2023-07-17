const express = require("express");
const authentication = require("../middlewares/authentication");
const UserController = require("../controllers");
const router = express.Router();

router.post("/api/register", UserController.register);
router.post("/api/login", UserController.login);
router.get("/api/me", authentication, UserController.detail);

module.exports = router;
