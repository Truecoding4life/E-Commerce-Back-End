const router = require("express").Router();
const { Category, Product } = require("../../models");

//    CATEGORY END POINT - - - - - ->


// GET ALL CATEGORY
router.get("/", async (req, res) => {
  try {
    const foundCategory = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    if (!foundCategory) {
      res.status(404).json({ message: "No Found" });
    } else {
      res.status(200).json(foundCategory);
    }
  } catch (err) {
    res.status(500).json({ message: `Request Error, please try again` });
  }
});

// GET A CATEGORY
router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const foundCategory = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    if (!foundCategory) {
      res.status(404).json({ message: "No Found" });
    } else {
      res.status(200).json(foundCategory);
    }
  } catch (err) {
    res.status(500).json({ message: "Request Error, please try again" });
  }
});

// CREATE A CATEGORY
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: "Request Error, please try again" });
  }
});

// UPDATE CATEGORY
router.put("/:id", async (req, res) => {
  try {
    const newUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(newUpdate)
  } catch (err) {
    res.status(500).json({ message: "Request Error, please try again" });
  }
  // update a category by its `id` value
});

// DELETE CATEGORY
router.delete("/:id", async (req, res) => {
  try {
    const foundCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(foundCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error please email development" });
  }
});

module.exports = router;
