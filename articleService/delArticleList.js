const ArticleList = require('../models/ArticleList');

const delArticleList =  async function delArticle(){
    const deldata= await ArticleList.deleteMany();
}

module.exports= delArticleList;

