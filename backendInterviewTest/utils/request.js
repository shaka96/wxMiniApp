var request = require("request");
var config = require("../config/config");
var error = require("./errors");
// request.post('http://service.com/upload', {form:{key:'value'}})
// request.post('http://service.com/upload').form({key:'value'})
// request.post({url:'http://service.com/upload', form: {key:'value'}}, 
//function(err,httpResponse,body){ /* ... */ })


exports.post = function(api, options, callback) {
  config.getUrl(api, function(err, url) {

    // get access token error
    if(err) {
      return callback(err);
    }
    request.post(url, options, function(err, res, body) {

      // request error
      if(err) {
        return callback(error.REQUEST_ERROR(err));
      }
      var result = JSON.parse(body);

      // wechat interface error
      if(result.errcode != 0) {
        return callback(error.INTERFACE_ERROR(result));
      }
      callback(null, result);
    });
  });
};

exports.get = function(api, callback) {
  config.getUrl(api, function(err, url) {

    // get access token error
    if(err) {
      return callback(err);
    }
    request.get(url, function(err, res, body) {

      // request error
      if(err) {
        return callback(error.REQUEST_ERROR(err));
      }
      var result = JSON.parse(body);

      // wechat interface error
      if(result.errcode != 0) {
        return callback(error.INTERFACE_ERROR(result));
      }
      callback(null, result);
    });
  });
};