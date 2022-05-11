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

      res.status(200).json({ message: "New profile has been created" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  });

// PUT route to update dog profile by dog's id
router.put('/:id', async (req, res) => {
const { dog_name, size, breed, gender, zipcode, park, day, time } = req.body;
    try {
        const dog = await Dog.update({dog_name, size, breed, gender }, { where: {
            id: req.params.id,
        },
        });

        const setting = await Setting.update({zipcode, park, day, time}, { where: {
            dog_id: req.params.id,
        }, 
        });

        res.status(200).json({ message: "The profile has been updated" });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// GET one dog profile route to test if PUT route is working correctly 
router.get('/:id', async (req, res) => {
    // find a single dog by dog `id`
    try {
        const dog = await Dog.findByPk(req.params.id, {
            include: [{ model: Setting }],
          });

        if (!dog) {
        res.status(404).json({ message: 'No dog found with that id!' });
        return;
        }

        res.status(200).json(dog);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET all dogs profile route to test for PUT route
router.get('/', async (req, res) => {
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