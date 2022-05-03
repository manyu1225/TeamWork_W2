const http = require('http');
const mongoose = require('mongoose');
const postArticleContent =require('./articleService/postArticleContent');
const getArticleList=require('./articleService/getArticleList');
const delArticleList=require('./articleService/delArticleList');
const ArticleList = require('./models/ArticleList');
const errorHandle=require('./utils/errorHandle');
const SuccessMessage = require('./utils/SuccessOutputHandle');
const { headers } = require('./utils/libs');

const dotenv = require('dotenv');

dotenv.config({
    path:'./config.env'
});

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );
   
mongoose.connect(DB).then(()=>{
    console.log('DB Conntection SUCCESS!');
});

const reqListener = async(req,res)=>{
    let body ="";
    req.on('data', (chunk)=>{
        body+= chunk;
    })

    if ( req.url === '/' && req.method === 'GET' ) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>首頁</h1>');
        res.end();
    } else if ( req.url === '/ArticleList' && req.method === 'GET' ) {
        let data = await getArticleList(res);
        SuccessMessage(res,data) ;
        res.end();
    } else if ( req.url === '/ArticleList' && req.method === 'POST' ) {
        req.on('end', async()=>{       
            try {
                let data = JSON.parse(body);
                
                if(!data.articleContent || data.articleContent.trim().length==0 ){
                    throw '貼文內容為必填'
                }
                if(!data.userName || data.userName.trim().length==0 ){
                    throw '發文者為必填'
                }
                if(!data.userPhoto || data.userPhoto.trim().length==0 ){
                    throw '發文者照片為必填'
                }
                let updata = await postArticleContent(res,data) ;
                SuccessMessage(res,updata) ;
                res.end();
            } catch (error) {
                errorHandle(res,415,error+"，儲存錯誤");
            }
        });
    }else if(req.url ==='/ArticleList' && req.method ==='DELETE'){
        try {
            const deldata= await delArticleList();
            SuccessMessage(res,"已經成功DELETE") ;
            res.end();
        } catch (error) {
            errorHandle(res,500,error+"DELETE錯誤");
        }
    }  else if ( req.method === 'OPTIONS' ) {
        res.writeHead(200);
        res.end();
    } else {
        errorHandle(res,405,"請確認傳輸方式");
    }
};


const server = http.createServer(reqListener);
server.listen(process.env.PORT || 3005, ()  => {
    if ( process.env.PORT ) {
        console.log('Deploy Heroku Successfully');
        return;
    }
    console.log(`Server running at http://localhost:${PORT}/`);
});