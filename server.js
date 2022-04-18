const http = require('http');
const mongoose = require('mongoose');

const ArticleListModel = require('./models/ArticleList');
const PORT =3005; 
mongoose
    .connect('mongodb://localhost:27017/article')
    .then(() => console.log('mongodb is connected...'))
    .catch((err) => console.log(err));

async function requestListener(req, res) {

    if ( req.url === '/' && req.method === 'GET' ) {
        
    } else if ( req.url === '/ArticleList' && req.method === 'GET' ) {

    } else if ( req.url === '/ArticleList' && req.method === 'POST' ) {

    } else if ( req.method === 'OPTIONS' ) {


    } else {

    }

}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || PORT, () => {
    if ( process.env.PORT ) {
        console.log('Deploy Heroku Successfully');
        return;
    }
    console.log(`Server running at http://localhost:${PORT}/`);
});