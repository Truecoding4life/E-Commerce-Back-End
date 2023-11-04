const router = require('express').Router();
const { Category, Product } = require('../../models');

//      /api/categories END POINT - - - - - ->

router.get('/', async (req, res) => {
 try{
  const foundCategory = await Category.findAll({
    include: {
      model: "Product",
    }
  })
  if(!foundCategory){
    res.status(404).json({message: "No Found"})
  }
  else{
    res.status(200).json(foundCategory);
  }
 } catch(err){
  res.status(500).json({ message: `Request Error, please try again`})
 }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const foundCategory = await Category.findByPk(req.params.id)
  if(!foundCategory){
    res.status(404).json({message: "No Found"})
  } else{
    res.status(200).json(foundCategory)
  }
  } catch(err){
    res.status(500).json({message: "Request Error, please try again"})
  }
});

router.post('/', async (req, res) => {
  try{
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  } 
  catch(err){
    res.status(500).json({message: "Request Error, please try again"})
  }
});

router.put('/:id', async (req, res) => {
try{}catch(err){
  res.status(500).json({message: "Request Error, please try again"})
}
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  try{}catch(err){
    res.status(500).json({message: "Request Error, please try again"})
  }
});

module.exports = router;
