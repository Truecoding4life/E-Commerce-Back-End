const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// API END POINTS


// GET ALL TAG
router.get("/", async (req, res) => {
  // find all tags
  try {
    const foundTag = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag
        },
      ],
    });
   
      res.status(200).json(foundTag);
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: " System Error, please try again" });
  }
  // be sure to include its associated Product data
});

//GET A TAG
router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
  
    if (!tagData) {
      res
        .status(404)
        .json({ message: `No tag found with for:  ${req.params.id} !` });
      return;
    } else {
      res.status(200).json(tagData);
      return;
    }
  } catch (err) {
    res.status(500).json({ message: "System error, please try again" });
  }
});
// CREATE A TAG
router.post("/", async (req, res) => {
  await Tag.create({
    tag_name: req.body.tag_name,
  });
  res.status(200).json("New tag have been create on Database");
});

// UPDATE A TAG
router.put("/:id", async (req, res) => {
  try {
    const foundTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    if (!foundTag) {
      res.status(404).json({ message: "Can't Find Tag" });
    } else {
      res.status(200).json(req.body);
    }
  } catch (err) {
    res.status(500).json({ message: "System Error, please try again" });
  }
  Tag.update(req.body, { where: { id: req.params.id } });
});

// DELETE A TAG
router.delete("/:id", async (req, res) => {
  try {
    const foundTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!foundTag) {
      return res.status(404).json({ message: "Can't Find Tag" });
    }
    return res.status(200).json("Tag Deleted from Database");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
