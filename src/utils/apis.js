import { $get } from './https.js'
let api = './checkWork'

export function getCheckWork(data) {
    console.log(api);
    console.log(data);
    return $get(api, data);
}