const { headers } = require('./libs');

/**
 * 錯誤處理
 * @param {*} res  回應內容 
 * @param {*} httpCode  Http狀態碼
 * @param {*} message   異常訊息
 */
function errorHandle(res,httpCode,message) {
  res.writeHead(httpCode, headers);
  res.write(JSON.stringify(
    {
      "status": "false",
      "message": message
    }
  ));
  res.end();
}

module.exports = errorHandle;