const express = require("express");
const router = express.Router();

const middleware = require("../middleware");
const authController = require("../controllers/auth_prof.controller");

router.post("/register", authController.registerProf);
router.post("/login", authController.loginProf);
router.post(
  "/refresh-token",
  middleware.checkToken,
  authController.refreshTokenProf
);
router.post("/logout", middleware.checkToken, authController.logoutProf);

module.exports = router;
