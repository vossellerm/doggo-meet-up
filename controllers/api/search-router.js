const { Dog, Setting } = require("../../models");
const router = require("express").Router();

router.get("/:zipcode", async (req, res) => {
  //   const { zipcode } = req.body;
  try {
    // const doggo = await Dog.findOne({ where: { zipcode: req.params.zipcode } });
    const zipper = await Setting.findAll({
      where: { zipcode: req.params.zipcode },
    });
    // const zip = res.json(zipper);
    console.log(res.json(zipper));
    // console.log(req.params.zipcode);
    // console.log(res.json(zipper).zipcode);
    // for (i = 0; i < zip.length; i++) {
    //   zip[i].zipcode;
    //   console.log(zip[i]);
    // }

    if (zipper.zipcode != req.params.zipcode) {
      throw new Error("No match zipcode!");
    }
    res.status(200).json({ message: "maybe work" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid zipcode." });
  }
});

module.exports = router;
