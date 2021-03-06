
// function checkSignature(){

// }

// check.js
// http://www.wxapp-union.com/article-2051-1.html
'use strict';
const Port = '8088';
const Host = '127.0.0.1';
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const crypto = require('crypto');
const TOKEN = 'qingyunzhi';   // token可以是任何字符串，前提是必须和上图基础配置的一致
http.createServer((req, res) => {
  console.log('req:', req.url);
  if (/\*\/\*/img.test(req.headers.accept)) {
    const _query = url.parse(req.url).query;
    const query = querystring.parse(_query);
    const signature = query.signature;
    const echostr = query.echostr;
    const timestamp = query.timestamp;
    const nonce = query.nonce;
    // 拼成数组，字典排序，再拼接
    const tmpStr = [TOKEN, timestamp, nonce].sort().reduce((prev, cur) => prev + cur);
    // sha1加密
    const sha1 = crypto.createHash('sha1');
    const sha1_result = sha1.update(tmpStr).digest('hex');
    // 如果是来自微信的请求就返回echostr
    if (sha1_result === signature) {
      res.end(echostr);
    }
    console.log('res:', res);
  }
}).listen(Port, () => {
  console.log(`server start at http://${Host}:${Port}`);   // 一定要是80端口
});
// console.log(__dirname);
// console.log(process.cwd());
// console.log(process.execPath);

 