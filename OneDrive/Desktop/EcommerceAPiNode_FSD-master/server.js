// // const express = require('express');
// // const configs = require('./config/serverconfig');
// // const categoryRoutes = require('./routes/category.routes');
// // const app = express();

// // categoryRoutes(app);

// // app.get('/home', function (req, res) {
// //     res.send("welcome to home");
// // })

// // app.listen(configs.PORT, () => {
// //     console.log('Server started on PORT', configs.PORT);
// // });
// const express = require('express');
// const bodyParser = require('body-parser');//npm i body-parser
// const configs = require('./config/serverconfig');
// const categoryRoutes = require('./routes/category.routes');
// const productRoutes = require('./routes/product.routes');


// const Product = require('./models/index').Product;
// const Categories = require('./models/index').Categories;
// const app = express();

// /*
//     We need to add a middleware that will help
//     express to read all query and body params
//     The below code is more or less like a configuration
// */
// app.use(bodyParser.urlencoded({ extended: true}));//it will start reading the body
// app.use(bodyParser.json());

// categoryRoutes(app);
// productRoutes(app);

// app.get('/home', async function (req, res) {
//     const getCategories = await Categories.findAll({ include: Product });
//     res.json(getCategories);
//     res.send("welcome to home");
// })

// app.listen(configs.PORT,async () => {
//     console.log('Server started on PORT', configs.PORT);
//     //  const newProduct = await Product.create({
//     //     name: 'Ipad',
//     //     cost: 100000,
//     //     description: 'apple ipad',
//     //     categoryId: 1
//     // });
//     // console.log("product created successfully");
//     // const getproducts= await Product.findAll();
//     // console.log(getproducts);
// });
const express = require('express');
const bodyParser = require('body-parser'); // npm i body-parser
const configs = require('./config/serverconfig');
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');

const app = express();

const Product = require('./models/index').Product;
const Categories = require('./models/index').Categories;
const db=require('./models/index')
// const User = require('./models/index').User;
// const Role = require('./models/index').Role;
//const db = require('./models/index');
/*
    We need to add a middleware that will help
    express to read all query and body params
    The below code is more or less like a configuration
*/
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

categoryRoutes(app);
productRoutes(app);
authRoutes(app);
cartRoutes(app);

app.get('/home', async function (req, res) {
    const getCategories = await Categories.findAll({ include: Product });
    res.json(getCategories);
})

app.listen(configs.PORT, async () => {
    console.log('Server started on PORT', configs.PORT);
    // const newProduct = await Product.create({
    //     name: 'Ipad',
    //     cost: 100000,
    //     description: 'apple ipad',
    //     categoryId: 1
    // });
    // console.log("product created successfully");
    
    // console.log(getproducts);
    //await db.sequelize.sync({force:true});
    if(process.env.SYNC) {
        await db.sequelize.sync({ force: true });
    }
});

