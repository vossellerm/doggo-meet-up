const router = require("express").Router();
const { Owner } = require("../../models");
// const withAuth = require("../../util/withAuth");

// This route isn't used by the boilerplate. It has been included to provide an
// example of an api route which requires the user to be authenticated by using
// the withAuth middleware.
// router.get("/", withAuth, (req, res) => {
//   res.json({ message: "hello user!", userId: req.session.userId });
// });

//Get ONE owner
router.get('/:id', async (req, res) => {
  try {
    const userData = await Owner.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new owner
router.post('/', async (req, res) => {
  try {
    const userData = await Owner.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
