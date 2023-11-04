const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// API END POINTS
router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
        model: Product,
        through: ProductTag,
        as: 'tagged_products'
      }
    
  })
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findByPk(req.params.id, { 
      include:[
        {
          model: Product,
          through: ProductTag,
          as: 'tagged_products'
        }
      ]
    }
    )
  if(!tagData){
      res.status(404).json({ message: `No tag found with for:  ${req.params.id} !`})
      return;
    }  
  } catch(err){
    res.status(500).json({ message: 'System error, please try again'})
  }
}); 




router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: { id: req.params.id }})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id }})
});

module.exports = router;
