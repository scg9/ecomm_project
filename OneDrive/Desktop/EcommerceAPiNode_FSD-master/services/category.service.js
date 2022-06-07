// const Category=require('../models/index').Categories;
// const getAllCategories=async()=>{
//   const categories=await Category.findAll();
//   return categories;
// }
// const createCategory=async (data)=>{
//   const newCategory = await Category.create({
//     name:data.name,
//     description:data.description,
//     createAt:new Date(),
//     updateAt:new Date()
//   })
// }

// module.exports={
//   getAllCategories
// }


//before
// const Category = require('../models/index').Categories;
// const getAllCategories = async () => {
//     const categories = await Category.findAll();
//     return categories;
// }

// const createCategory = async (data) => {
//     const newCategory = await Category.create({
//         name: data.name,
//         description: data.description,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     });
//     return newCategory;
// }

// const deleteCategory=async(categoryId)=>{
//     await Category.destroy({
//         where:{
//             id:categoryId
//         }
//     })
// }
// const getCategory=async(categoryId)=>{
//     const response=await Category.findOne({
//         where:{
//             id:categoryId
//         }
//     });
//     return response;
// }
// const getCategoryByName=async(categoryName)=>{
//     const response=await Category.findOne({
//         where:{
//             name:categoryName
//         }
//     });
//     return response;
// }

// // const getCategoryByName = async (categoryName) => {
// //     const response = await Category.findOne({
// //         where: {
// //             name: categoryName
// //         }
// //     });
// //     return response;
// // }

// const updateCategory = async (categoryId, data) => {
//     const updatedCategory = await Category.update(data, {where: {id: categoryId}});
//     return updatedCategory;
// }

// module.exports = {
//     getAllCategories,
//     createCategory,
//     deleteCategory,
//     //updateCategoryByName
//     getCategory,
//     getCategoryByName,
//     updateCategory
// }

//on 23rd may
const Category = require('../models/index').Categories;
const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
}

const createCategory = async (data) => {
    const newCategory = await Category.create({
        name: data.name,
        description: data.description,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return newCategory;
}

const deleteCategory = async (categoryId) => {
    await Category.destroy({
        where: {
            id: categoryId
        }
    });
}

const getCategory = async (categoryId) => {
    const response = await Category.findOne({
        where: {
            id: categoryId
        }
    });
    return response;
}

const getCategoryByName = async (categoryName) => {
    const response = await Category.findOne({
        where: {
            name: categoryName
        }
    });
    return response;
}

const updateCategory = async (categoryId, data) => {
    const updatedCategory = await Category.update(data, {where: {id: categoryId}});
    return updatedCategory;
}

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    getCategory,
    getCategoryByName,
    updateCategory
}
