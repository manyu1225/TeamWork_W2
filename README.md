# TeamWork_W2


## ��� 

 http://localhost:3005/  /   

### ��ݳW���
:::    success
1. URL : ```http://127.0.0.1:3005/``` ( �������| PORT : 3005 )
2. CollectionName : ```ArticleList```
3. GET : ���o�峹�C�� API
    ::: spoiler �ԲӸ�T
    �������� GET => ```http://127.0.0.1:3005/ArticleList```
    �����ǤJ�ѼơA�����z�L GET ���^�Ҧ����
    ���o��ƽd�� :
        ![](https://i.imgur.com/4bKW7Eo.png)
    :::
4. POST : �s�W�K�� API
    ::: spoiler �ԲӸ�T
    �������� POST => ```http://127.0.0.1:3005/ArticleList```
    �ǤJ�Ѽ�
    
        {
            // �m�W
            userName : string,
            // �s�W�ɶ� (�i�H�b model ���w�])
            createdAt : Date,
            // �ϥΪ̹Ϥ�
            userPhoto : string,
            // �W�ǹϤ�
            imgUrl : string
        }
    :::
:::

### �}�o��� API
:::success
1. fork [��� GitHub repo �s��](https://github.com/larrylinr5/week2TeamWork)
2. �b server.js ������ݼ��g
3. Model �i�H�}�@�ӷs����Ƨ��A�Ыؤ@�� ArticleList.js �� model
4. �s�u�r��i�H���Υ��a�� mongoDB : ```mongoose.connect('mongodb://localhost:27017/ArticleList')```
:::
