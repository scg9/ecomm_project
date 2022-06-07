// const productService = require('../services/product.service');

// const getProudcts = async (req, res) => {
//     const response = await productService.getproducts();
//     return res.json({
//         message: 'Successfully fetched all products',
//         success: true,
//         code: 200,
//         data: response
//     })
// }

// const createProduct = async (req, res) => {
//     const response = await productService.createProduct(req.body);
//     return res.json({
//         message: 'Successfully created a product',
//         success: true,
//         code: 200,
//         data: response
//     })
// }
// // const filterProducts=async(req,res)=>{
// //   const response=await productS
// // }
// module.exports = {
//     getProudcts,
//     createProduct
// }

// // const createProduct = async (req, res) => {
// //   const response = await productService.createProduct(req.body);
// //   return res.json({
// //       message: 'Successfully created a product',
// //       success: true,
// //       code: 200,
// //       data: response
// //   })
// // }

// // module.exports = {
// //   getProudcts,
// //   //createProduct
// // }
//for 16th may
// const productService = require('../services/product.service');

// const getProudcts = async (req, res) => {
//     const response = await productService.getproducts(req.query);
//     return res.json({
//         message: 'Successfully fetched all products',
//         success: true,
//         code: 200,
//         data: response
//     })
// }

// const createProduct = async (req, res) => {
//     const response = await productService.createProduct(req.body);
//     return res.json({
//         message: 'Successfully created a product',
//         success: true,
//         code: 200,
//         data: response
//     })
// }

// module.exports = {
//     getProudcts,
//     createProduct
// }

const productService = require('../services/product.service');

const getProudcts = async (req, res) => {
    const response = await productService.getproducts(req.query);
    return res.json({
        message: 'Successfully fetched all products',
        success: true,
        code: 200,
        data: response
    })
}

const createProduct = async (req, res) => {
    const response = await productService.createProduct(req.body);
    return res.json({
        message: 'Successfully created a product',
        success: true,
        code: 200,
        data: response
    })
}

module.exports = {
    getProudcts,
    createProduct
}