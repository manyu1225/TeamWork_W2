const SuccessMessage = require('../utils/SuccessOutputHandle');
const errorHandle=require('../utils/errorHandle')
const ArticleList = require('../models/ArticleList');


/**
 * 新增貼文
 * @param {*} userdata 新增資料內容
 */
 async function postArticleContent(res,userdata){
    if(! userdata){
        errorHandle(res,415,'請傳入新增內容')
        return;
    }
    console.log("開始新增貼文") //紀錄用
    const AllPost =await ArticleList.create(userdata);
    SuccessMessage(res,"已經成功新增");
  //  save(userdata);
}

module.exports= postArticleContent;