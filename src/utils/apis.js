import { $get } from './https.js'
// let api = './checkWork'
// 判断开发环境
let nowEnviroment = process.env.NODE_ENV;
let api;
api = nowEnviroment == "development" ? "/checkWork" : "http://tm.lilanz.com/oa/api/checkOutCore.ashx"

export function getCheckWork(data) {
    return $get(api, data);
}