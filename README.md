# TeamWork_W2


## 後端 

 http://localhost:3005/  /   

### 後端規格表
:::    success
1. URL : ```http://127.0.0.1:3005/``` ( 本機路徑 PORT : 3005 )
2. CollectionName : ```ArticleList```
3. GET : 取得文章列表 API
    ::: spoiler 詳細資訊
    本機測試 GET => ```http://127.0.0.1:3005/ArticleList```
    不須傳入參數，直接透過 GET 取回所有資料
    取得資料範例 :
        ![](https://i.imgur.com/4bKW7Eo.png)
    :::
4. POST : 新增貼文 API
    ::: spoiler 詳細資訊
    本機測試 POST => ```http://127.0.0.1:3005/ArticleList```
    傳入參數
    
        {
            // 姓名
            userName : string,
            // 新增時間 (可以在 model 做預設)
            createdAt : Date,
            // 使用者圖片
            userPhoto : string,
            // 上傳圖片
            imgUrl : string
        }
    :::
:::

### 開發後端 API
:::success
1. fork [後端 GitHub repo 連結](https://github.com/larrylinr5/week2TeamWork)
2. 在 server.js 完成後端撰寫
3. Model 可以開一個新的資料夾，創建一個 ArticleList.js 的 model
4. 連線字串可以先用本地的 mongoDB : ```mongoose.connect('mongodb://localhost:27017/ArticleList')```
:::
