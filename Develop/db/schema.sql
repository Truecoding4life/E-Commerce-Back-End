-- DROP DATABASE
DROP DATABASE IF EXISTS Ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE Ecommerce_db;

SELECT `tag`.`id`, `tag`.`tag_name`, `products`.`id` AS `products.id`, 
`products`.`product_name` AS `products.product_name`, `products`.`price` AS 
`products.price`, `products`.`stock` AS `products.stock`, `products`.`category_id` AS 
`products.category_id`, `products->product_tag`.`id` AS `products.product_tag.id`, `products->product_tag`.
`product_id` AS `products.product_tag.product_id`, `products->product_tag`.`tag_id` AS `products.product_tag.tag_id`
 FROM `tag` AS `tag` LEFT OUTER JOIN ( `product_tag` AS `products->product_tag` INNER JOIN `product` AS `products` ON 
 `products`.`id` = `products->product_tag`.`product_id`) ON `tag`.`id` = `products->product_tag`.`tag_id`;