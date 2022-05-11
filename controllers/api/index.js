const router = require("express").Router();
const userRouter = require("./users-router");
const profileRouter = require("./profile-router");
const searchRouter = require("./search-router");

router.use("/user", userRouter);
router.use("/profile", profileRouter);
router.use("/search", searchRouter);

module.exports = router;
