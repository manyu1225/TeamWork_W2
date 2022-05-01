
const ArticleList = require('../models/ArticleList');
/**
 * 取得貼文列表
 */
 async function getArticleList(res){
    try {
        return await ArticleList.find();
    } catch (error) {
        console.log(error);      
    } 
 }
module.exports = getArticleList;