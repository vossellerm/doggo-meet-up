const { Dog, Setting } = require("../../models");
const router = require("express").Router();
const withAuth = require("../../util/withAuth");

router.get("/:zipcode", withAuth, async (req, res) => {
  try {
    const zipper = await Setting.findAll({
      where: { zipcode: req.params.zipcode },
      include: [{ model: Dog }],
    });

    if (zipper.length === 0) {
      throw new Error("No match zipcode!");
    }

    // Serialize data so the template can read it
    const dogs = zipper.map((dog) => dog.get({ plain: true }));

    // res.status(200).json(zipper);
    res.render("search", {
      dogs,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid zipcode." });
  }
});

// for query
router.get("/", withAuth, async (req, res) => {
  try {
    const zipper = await Setting.findAll({
      where: { zipcode: req.query.zipcode },
      include: [{ model: Dog }],
    });
    
    if (zipper.length === 0) {
      throw new Error("No match zipcode!");
    }
    res.status(200).json(zipper);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid zipcode." });
  }
});

module.exports = router;
