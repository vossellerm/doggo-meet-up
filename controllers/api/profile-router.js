const { Dog, Setting } = require("../../models");
const router = require("express").Router();
const withAuth = require("../../util/withAuth");

// POST route to create new dog profile
router.post("/", withAuth, async (req, res) => {
  const { dog_name, size, breed, gender, img, zipcode, park, day, time } =
    req.body;
  try {
    // if (!req.session.isLoggedIn) {
    //     res.redirect("login")
    //     return;
    // }

    const owner_id = req.session.userId;
    const dog = await Dog.create({
      dog_name,
      size,
      breed,
      gender,
      img,
      owner_id,
    });
    const dog_id = dog.id;

    const setting = await Setting.create({ zipcode, park, day, time, dog_id });

    res.status(200).json({ message: "New profile has been created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// PUT route to update dog profile by dog's id
// router.put("/:ownerId", withAuth, async (req, res) => {
router.put("/", withAuth, async (req, res) => {
  console.log(req.body);
  const { dog_name, size, breed, gender, img, zipcode, park, day, time } =
    req.body;
  try {
    await Dog.update(
      { dog_name, size, breed, gender, img },
      {
        where: {
          owner_id: req.session.userId,
        },
      }
    );
    const dog = await Dog.findOne({
      where: {
        owner_id: req.session.userId,
      },
    });

    await Setting.update(
      { zipcode, park, day, time },
      {
        where: {
          dog_id: dog.id,
        },
      }
    );
    // console.log(dog, setting);
    res.status(200).json({ message: "The profile has been updated" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// ------ not using it, might have to delete later
// GET all dogs profile route to check if owner has a dog
router.get("/owner", withAuth, async (req, res) => {
  // find all dogs' profile
  try {
    const dog = await Dog.findAll({
      where: { owner_id: req.session.userId },
      include: [{ model: Setting }],
    });

    res.status(200).json(dog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------- for testing only ----------------------
// Testing - GET one dog profile route to test if PUT route is working correctly
router.get("/:id", withAuth, async (req, res) => {
  // find a single dog by dog `id`
  try {
    const dog = await Dog.findByPk(req.params.id, {
      include: [{ model: Setting }],
    });

    if (!dog) {
      res.status(404).json({ message: "No dog found with that id!" });
      return;
    }

    res.status(200).json(dog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Testing ---- GET all dogs profile route to test for PUT route
router.get("/", withAuth, async (req, res) => {
  // find all dogs' profile
  try {
    const dog = await Dog.findAll({
      include: [{ model: Setting }],
    });

    res.status(200).json(dog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
