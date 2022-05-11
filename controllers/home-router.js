const router = require("express").Router();
const { Owner } = require("../models");

router.get("/", async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await Owner.findByPk(req.session.userId, {
        exclude: ["password"],
        raw: true,
      });
    }
    res.render("profile", {
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign-Up Page" });
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/search", (req, res) => {
  res.render("search");
});

module.exports = router;
