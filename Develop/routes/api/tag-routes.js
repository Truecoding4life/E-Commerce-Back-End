const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// API END POINTS
router.get("/", async (req, res) => {
  // find all tags
  try {
    const foundTag = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    if (!foundTag) {
      res.status(404).json({ message: "No Found" });
    } else {
      res.status(200).json(foundTag);
    }
  } catch (err) {
    res.status(500).json({ message: " System Error, please try again" });
  }
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: "tagged_products",
        },
      ],
    });
    if (!tagData) {
      res
        .status(404)
        .json({ message: `No tag found with for:  ${req.params.id} !` });
      return;
    }
  } catch (err) {
    res.status(500).json({ message: "System error, please try again" });
  }
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body);
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: { id: req.params.id } });
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try{
    const foundTag = await Tag.findOne(req.params.id)
    if(!foundTag){
     return res.status(404).json({message: "Can't Find Tag"})
    } else{
        Tag.destroy({ where: { id: req.params.id } });
      return res.status(200).json("Tag Deleted from Database")
    }
  } catch(err){
    return res.status(500).json({message: "System Error, please try again"})
  }

});

module.exports = router;
