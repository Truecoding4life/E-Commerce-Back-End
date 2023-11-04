// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
 Product.belongsTo(Category,{
  foreignKey:"category_id",
 })
// Categories have many Products
Category.hasMany(Product,{
   onDelete: 'CASCADE' ,
  foreignKey:"category_id",
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag', // The name of the junction table
  foreignKey: 'product_id', // The foreign key in the junction table that references the product
  otherKey: 'tag_id', // The foreign key in the junction table that references the tag
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  onDelete: 'CASCADE',
  through: 'ProductTag', // The name of the junction table
  foreignKey: 'tag_id', // The foreign key in the junction table that references the tag
  otherKey: 'product_id', // The foreign key in the junction table that references the product
  otherKey: 'product_id', // The foreign key in the junction table that references the product
}); 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
