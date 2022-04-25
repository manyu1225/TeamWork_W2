const http = require('http');
const mongoose = require('mongoose');
const postArticleContent =require('./postArticleContent');
const getArticleList=require('./getArticleList');
const ArticleList = require('./models/ArticleList');
const errorHandle=require('./errorHandle');
const PORT =3005; 
mongoose
    .connect('mongodb://localhost:27017/article')
    .then(() => console.log('mongodb is connected...'))
    .catch((err) => console.log(err));

const requestListener =async (req, res) =>{
    let body ='';

    req.on('data', (chunk) => {
        body += chunk;
    });

    if ( req.url === '/' && req.method === 'GET' ) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>首頁</h1>');
        res.end();
    } else if ( req.url === '/ArticleList' && req.method === 'GET' ) {
        getArticleList(res)
    } else if ( req.url === '/ArticleList' && req.method === 'POST' ) {
        res.on('end', async()=>{       
            try {
                let data = JSON.parse(body);
                if(!data[articleContent] || data[articleContent].trim().length>0 ){
                    throw '貼文內容為必填'
                }
                if(!data[userName] || data[userName].trim().length>0 ){
                    throw '發文者為必填'
                }
                if(!data[userPhoto] || data[userPhoto].trim().length>0 ){
                    throw '發文者照片為必填'
                }
                await postArticleContent(res,mongoose,ArticleList,data)
            } catch (error) {
                errorHandle(res,415,error+"儲存錯誤");
            }
        });
    } else if ( req.method === 'OPTIONS' ) {
        res.writeHead(200);
        res.end();
    } else {
        errorHandle(res,405,"請確認傳輸方式");
        res.end();
    }
    res.end();
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || PORT, () => {
    if ( process.env.PORT ) {
        console.log('Deploy Heroku Successfully');
        return;
    }
    console.log(`Server running at http://localhost:${PORT}/`);
});