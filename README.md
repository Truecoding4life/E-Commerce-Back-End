# Recreate E-Commerce Model Using ORM

## 

#### Task 
Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

#### Submission

You’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.




### Acceptance Requirement
1. Use Dotenv to Sanitize database name, MySQL username, and MySQL password with .env DONE
2. Schema and Seed Command will create development database is seeded with test data. DONE
3. When Start the Application server is started and Sequelize synced to MySQL DB.
4. I Can use Insomnia API GET routes to get categories, products, or tags in JSON.
5. I Can use Insomnia API: POST, PUT, DELETE to create, update, and delete data in my database.


Association


* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

Hint: Make sure you set up foreign key relationships that match the column we created in the respective models.


Fil Out API ending Route

Fill Out the API Routes to Perform RESTful CRUD Operations
Fill out the unfinished routes in product-routes.js, tag-routes.js, and category-routes.js to perform create, read, update, and delete operations using your Sequelize models.

Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

Hint: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what req.body will be for POST and PUT routes!

Seed the Database
After creating the models and routes, run npm run seed to seed data to your database so that you can test your routes.

Sync Sequelize to the Database on Server Start
Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.