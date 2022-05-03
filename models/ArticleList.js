const mongoose = require("mongoose");
const articleListSchema = new mongoose.Schema(
    { 
        articleContent: String,
        articlePhoto: String,
        userName: String,
        userPhoto: String,
        createAt: {
            type: Date,
            default:Date.now
        }
    },
    {
        versionKey: false,          // 關閉預設欄位 _v
        collection: "articlelist"   // 指定 Schema 名稱(不加s)

    }
);

const ArticleList = mongoose.model('articlelist', articleListSchema);

module.exports = ArticleList;

