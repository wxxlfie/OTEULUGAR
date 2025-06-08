const express = require("express");
const router = express.Router();


const middleware = require("../middleware");
const authController = require("../controllers/auth.controller");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post(
  "/refresh-token",
  middleware.checkToken,
  authController.refreshTokenUser
);
router.post("/logout", middleware.checkToken, authController.logoutUser);

module.exports = router;
