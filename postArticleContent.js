const SuccessMessage = require('./SuccessOutputHandle');
const errorHandle=require('./errorHandle')

/**
 * 新增貼文
 * @param {*} model    mongooseModel
 * @param {*} userdata 新增資料內容
 */
 async function postArticleContent(res,model,userdata){
    if(! userdata){
        errorHandle(res,415,'請傳入新增內容')
        return;
    }
    
    
    console.log("開始新增貼文") //紀錄用
    const init = async()=>{
        const AllPost =await model.create(userdata);
        SuccessMessage(res,"已經成功新增");
    }
}

module.exports= postArticleContent;