
# 卡券HelloWorld
## 步骤一 获取access_token

接口调用请求说明
```
    https请求方式: GET
    https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
```
### 基础支持: 
[获取access_token接口 /token](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140183)
请求地址：
```
    https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxcb5ad666cd016e5b&secret=a02a45936b4edc230ddf19cf1bc6196e
```
返回结果:
200	OK
Connection: close
Date: Sat, 16 Mar 2019 12:08:11 GMT
Content-Type: application/json; encoding=utf-8
Content-Length: 194
{
    "access_token": "19_acyVMcUUCy7k_efj5tIwhB_ufhVQJbFE8qgOyn5g-3WjWKCQb_C3lmTTOuFNKheV7roMbxPFCFoON-jKDJprOiAqYiuxobI1omfVuMeI9v0OVSS8DmjixjOLveSNiNxx1WkS9NctitRjbR8JGKYcADAQUI",
    "expires_in": 7200
}
提示:
Request successful

## 步骤二 上传卡券logo
接口地址：[上传图片接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025056)
开发者需调用该接口上传商户图标至微信服务器，获取相应logo_url/icon_list/image_url，用于卡券创建。
PS: 大小限制1MB，仅支持JPG、PNG格式。

HTTP请求方式:
    POST/FROMURL:https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token=ACCESS_TOKEN

## 步骤三 创建卡券

接口地址：[创建卡券接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025056)

HTTP请求方式:
    POST/FROMURL:https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token=ACCESS_TOKEN

HTTP请求方式:
    POSTURL: https://api.weixin.qq.com/card/create?access_token=ACCESS_TOKEN

## 步骤四 创建二维码投放
HTTP请求方式:
    POSTURL:https://api.weixin.qq.com/card/qrcode/create?access_token=TOKEN
### 创建货架接口
>调用该接口创建货架链接，用于卡券投放。创建货架时需填写投放路径的场景字段。
HTTP请求方式:
    POST URL:https://api.weixin.qq.com/card/landingpage/create?access_token=$TOKEN
### 群发卡券
>目前群发卡券接口仅支持投放非自定义Code码的卡券。
* 导入code接口:
    POSTURL:http://api.weixin.qq.com/card/code/deposit?access_token=ACCESS_TOKEN
* 查询导入code数目接口:
    POSTURL:http://api.weixin.qq.com/card/code/getdepositcount?access_token=ACCESS_TOKEN
* 核查code接口:
    POSTURL:http://api.weixin.qq.com/card/code/checkcode?access_token=ACCESS_TOKEN
* 图文消息群发卡券:
    POSTURL:https://api.weixin.qq.com/card/mpnews/gethtml?access_token=TOKEN

* 获取二维码ticket后，可用通过ticket换取二维码接口换取二维码图片详情。
    POSTURL:https://api.weixin.qq.com/card/qrcode/create?access_token=TOKEN

### 创建二维码ticket
    每次创建二维码ticket需要提供一个开发者自行设定的参数（scene_id）
* 临时二维码请求
http请求方式: POST
    URL: https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=TOKEN
POST数据格式：json
POST数据例子：{"expire_seconds": 604800, "action_name": "QR_SCENE", "action_info": {"scene": {"scene_id": 123}}}

或者也可以使用以下POST数据创建字符串形式的二维码参数：
{"expire_seconds": 604800, "action_name": "QR_STR_SCENE", "action_info": {"scene": {"scene_str": "test"}}}

* 永久二维码请求
http请求方式: POST
    URL: https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=TOKEN
POST数据格式：json
POST数据例子：{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": 123}}}

或者也可以使用以下POST数据创建字符串形式的二维码参数：
{"action_name": "QR_LIMIT_STR_SCENE", "action_info": {"scene": {"scene_str": "test"}}}

* 通过ticket换取二维码
HTTP GET请求（请使用https协议）https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=TICKET
提醒：TICKET记得进行UrlEncode

## 步骤五 显示二维码
    在上一步的返回中点击字段show_qrcode_url字段中的链接，即可显示卡券领取二维码。
示例：https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQEr8ToAAAAAAAAAASxodHRwOi8vd2V********NjRjVuAAIE3kqwVQMEgDPhAQ==

## 步骤六 设置测试白名单
注意事项:
    1.同时支持“openid”、“username”两种字段设置白名单，总数上限为10个。
    2.设置测试白名单接口为全量设置，即测试名单发生变化时需调用该接口重新传入所有测试人员的ID.
    3.白名单用户领取该卡券时将无视卡券失效状态.
HTTP请求方式: 
    POSTURL:https://api.weixin.qq.com/card/testwhitelist/set?access_token=TOKEN


