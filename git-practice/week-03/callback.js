function doJob(job, time, cb) {
    // `() =>` 和 `function(){}` 是一樣用法（匿名函數），惟前者是ES6新增的__縮寫__用法
    setTimeout(() => {
        let now = new Date();
        // 使用"模版字符串"能提高可讀性和靈活性
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

// 以下為輸出
// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
// 其中的function(data)為回呼函數，而在doJob函式中，cb則是用來呼叫回呼函數並傳入參數
doJob('刷牙', 1000, function (data) {
    console.log(data);
    doJob('吃早餐', 3000, function (data) {
        console.log(data);
        doJob('寫功課', 1000, function (data) {
            console.log(data);
            doJob('吃午餐', 2000, function (data) {
                console.log(data);
            })
        })
    })
});
