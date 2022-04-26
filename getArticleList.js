const SuccessMessage = require('./SuccessOutputHandle');
const ArticleList = require('./models/ArticleList');
/**
 * 取得貼文列表
 */
 async function getArticleList(res){
    try {
        const data = await ArticleList.find();
        SuccessMessage(res,data)

    } catch (error) {
        console.log(error);      
    } 
 }
    

module.exports = getArticleList;