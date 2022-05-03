const headers  = require('./libs');
/**
 * 輸出前預處理
 * @param res 
 * @param Output 
 */
function SuccessMessage(res,Output){
   let outputData = dataProcess(Output);
   res.writeHead("200", headers);
    res.write(JSON.stringify({
        "status":'success',
        "data":outputData
    }))
}
function dataProcess(data){
    if(typeof(data) == Object){
        return JSON.stringify(data);
    }
    return data;
}
module.exports=SuccessMessage;