const { Dog, Setting } = require("../../models");
const router = require("express").Router();

// POST route to create new dog profile
router.post("/", async (req, res) => {
    const { dog_name, size, breed, gender, zipcode, park, day, time } = req.body;
    try {
        if (!req.session.isLoggedIn) {
            res.redirect("login")
            return;
        }
      const owner_id = req.session.userId;
      const dog = await Dog.create( { dog_name, size, breed, gender, owner_id });
      const dog_id = dog.id;
      const setting = await Setting.create( { zipcode, park, day, time, dog_id });
      res.status(200).json({ message: "ok" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  });

module.exports = router;