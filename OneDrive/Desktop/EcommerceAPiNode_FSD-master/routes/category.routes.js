// const CategoryController = require('../controllers/category.controller');
// const routes = (app) => { // the app parameter is the express app only
//     // route -> controller function
//     app.get('/ecomm/api/v1/categories', CategoryController.getCategory);
//     app.post('/ecomm/api/v1/categories',CategoryController.getCategory)
// }

// module.exports = routes; 
// before
// const CategoryController = require('../controllers/category.controller');
// //for validation
// const validator = require('../middlewares/requestValidator');
// console.log(CategoryController);
// const routes = (app) => { // the app parameter is the express app only
//     // route -> controller function
//     app.get('/ecomm/api/v1/categories', CategoryController.getAllCategories);
    
//    // app.post('/ecom/api/v1/categories', CategoryController.createCategory);
//    //for middleware
//    app.post('/ecom/api/v1/categories', validator.validateCategoryCreationRequest, CategoryController.createCategory);
//     app.delete('/ecom/api/v1/categories/:id',CategoryController.deleteCategory);
//     app.get('/ecom/api/v1/categories/:id',CategoryController.getCategory);
//     app.get('/ecom/api/v1/categoriesByName',CategoryController.getCategoryByName);
//     //app.get('/ecom/api/v1/categoriesByName', CategoryController.getCategoryByName);
//    app.put('/ecom/api/v1/categories/:id', CategoryController.updateCategory);
//     // app.put('/ecom/api/v1/categories/:id', function(req, res){
//     //     CategoryController.updateCategory 
//     //   });
// }

// module.exports = routes; 
//before

const CategoryController = require('../controllers/category.controller');
const validator = require('../middlewares/requestValidator');
const routes = (app) => { // the app parameter is the express app only
    // route -> controller function
    app.get('/ecomm/api/v1/categories', CategoryController.getAllCategories);
    app.post('/ecom/api/v1/categories', validator.validateCategoryCreationRequest, CategoryController.createCategory);
    app.delete('/ecom/api/v1/categories/:id', CategoryController.deleteCategory);
    app.get('/ecom/api/v1/categories/:id', CategoryController.getCategory);
    app.get('/ecom/api/v1/categoriesByName', CategoryController.getCategoryByName);
    app.put('/ecom/api/v1/categories/:id', CategoryController.updateCategory);
}

module.exports = routes; 