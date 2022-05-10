const router = require("express").Router();
// const profileRouter = require("./profile-router");
// const loginRouter = require("./login-router");
const signupRouter = require("./signup-router");
// const searchRouter = require("./search-router");

// router.use("/profile", profileRouter);
// router.use("/login", loginRouter);
router.use("/signup", signupRouter);
// router.use("/search", searchRouter);

module.exports = router;
