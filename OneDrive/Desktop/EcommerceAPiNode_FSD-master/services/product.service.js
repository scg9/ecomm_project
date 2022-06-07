// const Product = require('../models/index').Product;
// const Categories = require('../models/index').Categories;


// const getproducts = async () => {
//     const products = await Product.findAll({include: Categories});
//     return products
// }

// const createProduct = async (data) => {
//     const product = await Product.create({
//         name: data.name,
//         description: data.description,
//         cost: data.cost,
//         categoryId: data.categoryId,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     });
//     return product
// }



// // const  filterProducts=
// // module.exports = {
// //     getproducts,
// //     createProduct
// // }
// // const Product = require('../models/index').Product;
// // const Categories = require('../models/index').Categories;
// // // const { Op } = require("sequelize");

// // // const createFilter = (data) => {
// // //     let filter = {};
// // //     if(data.minPrice && data.maxPrice) {
// // //         Object.assign(filter, {[Op.lte]: data.maxPrice});
// // //         Object.assign(filter, {[Op.gte]: data.minPrice});
// // //         console.log(filter);
// // //     } else if (data.maxPrice) {
// // //         Object.assign(filter, {[Op.lte]: data.maxPrice});
// // //     } else if(data.minPrice) {
// // //         Object.assign(filter, {[Op.gte]: data.minPrice});
// // //     }
// // //     return filter
// // // }

// // const getproducts = async (data) => {
// //     let products;
// //     if(!data.categoryId && !data.minPrice && !data.maxPrice) {
// //         products = await Product.findAll({include: Categories});
// //         return products;
// //     } 
// //     if(!data.categoryId) {
// //         let filter = createFilter(data);
// //         products = await Product.findAll({where: {
// //             cost: filter
// //         }});
// //         return products;
// //     } 
// //     let filter = createFilter(data);
// //     products = await Product.findAll({where: {
// //         cost: filter,
// //         categoryId: data.categoryId
// //     }});
// //     return products;
// // }
// // select * from products where cost < 2000 AND cost > 500;

// // const createProduct = async (data) => {
// //     const product = await Product.create({
// //         name: data.name,
// //         description: data.description,
// //         cost: data.cost,
// //         categoryId: data.categoryId,
// //         createdAt: new Date(),
// //         updatedAt: new Date()
// //     });
// //     return product
// // }

// module.exports = {
//     getproducts
//    // createProduct
// }


// //for may 16 th
// const Product = require('../models/index').Product;
// const Categories = require('../models/index').Categories;
// const { Op } = require("sequelize");

// const createFilter = (data) => {
//     let filter = {};
//     if(data.minPrice && data.maxPrice) {
//         Object.assign(filter, {[Op.lte]: data.maxPrice});
//         Object.assign(filter, {[Op.gte]: data.minPrice});
//         console.log(filter);
//     } else if (data.maxPrice) {
//         Object.assign(filter, {[Op.lte]: data.maxPrice});
//     } else if(data.minPrice) {
//         Object.assign(filter, {[Op.gte]: data.minPrice});
//     }
//     return filter
// }

// const getproducts = async (data) => {
//     let products;
//     if(!data.categoryId && !data.minPrice && !data.maxPrice) {
//         products = await Product.findAll({include: Categories});
//         return products;
//     } 
//     if(!data.categoryId) {
//         let filter = createFilter(data);
//         products = await Product.findAll({where: {
//             cost: filter
//         }});
//         return products;
//     } 
//     let filter = createFilter(data);
//     products = await Product.findAll({where: {
//         cost: filter,
//         categoryId: data.categoryId
//     }});
//     return products;
// }
// // select * from products where cost < 2000 AND cost > 500;

// const createProduct = async (data) => {
//     const product = await Product.create({
//         name: data.name,
//         description: data.description,
//         cost: data.cost,
//         categoryId: data.categoryId,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     });
//     return product
// }

// module.exports = {
//     getproducts,
//     createProduct
// }
// for 23rd may
const Product = require('../models/index').Product;
const Categories = require('../models/index').Categories;
const { Op } = require("sequelize");

const createFilter = (data) => {
    let filter = {};
    if(data.minPrice && data.maxPrice) {
        Object.assign(filter, {[Op.lte]: data.maxPrice});
        Object.assign(filter, {[Op.gte]: data.minPrice});
        console.log(filter);
    } else if (data.maxPrice) {
        Object.assign(filter, {[Op.lte]: data.maxPrice});
    } else if(data.minPrice) {
        Object.assign(filter, {[Op.gte]: data.minPrice});
    }
    return filter
}

const getproducts = async (data) => {
    let products;
    if(!data.categoryId && !data.minPrice && !data.maxPrice) {
        products = await Product.findAll({include: Categories});
        return products;
    } 
    if(!data.categoryId) {
        let filter = createFilter(data);
        products = await Product.findAll({where: {
            cost: filter
        }});
        return products;
    } 
    let filter = createFilter(data);
    products = await Product.findAll({where: {
        cost: filter,
        categoryId: data.categoryId
    }});
    return products;
}
// select * from products where cost < 2000 AND cost > 500;

const createProduct = async (data) => {
    const product = await Product.create({
        name: data.name,
        description: data.description,
        cost: data.cost,
        categoryId: data.categoryId,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return product
}

module.exports = {
    getproducts,
    createProduct
}

