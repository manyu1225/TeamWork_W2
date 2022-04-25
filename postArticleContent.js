const SuccessMessage = require('./SuccessOutputHandle');
const errorHandle=require('./errorHandle')
const ArticleList = require('./models/ArticleList');

const save = async()=>{
    console.log("開始新增貼文") //紀錄用
    const AllPost =await ArticleList.create(userdata);
    SuccessMessage(res,"已經成功新增");
}

/**
 * 新增貼文
 * @param {*} userdata 新增資料內容
 */
 async function postArticleContent(res,userdata){
    if(! userdata){
        errorHandle(res,415,'請傳入新增內容')
        return;
    }
      
    save();
}

module.exports= postArticleContent;