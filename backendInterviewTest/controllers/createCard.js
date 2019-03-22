// createCard.js

// POSTURL:
//https://api.weixin.qq.com/card/create?access_token=ACCESS_TOKEN

var config = require("../config/config");
var request = require('../utils/request');
var error = require("../utils/errors");

/**
 * create a wechat card (创建卡券)
 * @param  {object}   card     [card info 卡券信息]
 * @param  {Function} callback(error, cardid)
 */

 