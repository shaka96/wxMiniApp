//createCard.js

//微信卡券接口(https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141229)
const api = {
 //1.获取access_token
    'ACCESS_TOKEN':"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET",
    'CREATE_CARD ':"https://api.weixin.qq.com/card/create?access_token=ACCESS_TOKEN",
   
//投放卡券(https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025062&anchor=4.1)
    //二维码(https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1443433542)
//4.创建二维码
    'CREATE_QRCODE':"https://api.weixin.qq.com/card/qrcode/create?access_token=TOKEN",
    //临时二维码
    'CREATE_QRCODE_TMP':"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025272",
    //永久二维码
    'CREATE_QRCODE_PERP':"https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=TOKEN",
//5.显示二维码,通过ticket换取二维码
    'SHOW_QRCODE':"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=TICKET",

// 创建货架
    'CREATE_LANDINGPAGE':"https://api.weixin.qq.com/card/landingpage/create?access_token=$TOKEN",
    
// 群发卡券
    //导入code
    'DEPOSIT_CODE':"http://api.weixin.qq.com/card/code/deposit?access_token=ACCESS_TOKEN",
    //查询导入code数目
    'GET_DEPOSIT_COUNT':"http://api.weixin.qq.com/card/code/getdepositcount?access_token=ACCESS_TOKEN",
    //查询Code, POSTURL
    'GET_CODE':"https://api.weixin.qq.com/card/code/get?access_token=TOKEN",
    //核查code
    'CHECK_CODE':"http://api.weixin.qq.com/card/code/checkcode?access_token=ACCESS_TOKEN",
    //图文消息群发
    'MPNEWS':"https://api.weixin.qq.com/card/mpnews/gethtml?access_token=TOKEN",

// 创建卡券(https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025056)
//2.上传卡券图片素材
    'UPLOAD_IMG':"https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token=ACCESS_TOKEN",
    //设置卡券适用门店(https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1444378120)
    //选取卡券背景颜色
//3.创建卡券
    'CREATE_CARD':"https://api.weixin.qq.com/card/create?access_token=ACCESS_TOKEN",

//7.核销卡券(https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025239)
    //线下核销
    'CODE_CONSUME':"https://api.weixin.qq.com/card/code/consume?access_token=TOKEN",
    //线上核销(https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)
    //Code解码
    'CODE_DECRYPT':"https://api.weixin.qq.com/card/code/decrypt?access_token=TOKEN",

//6.测试白名单
    'TEST_WHITELIST':"https://api.weixin.qq.com/card/testwhitelist/set?access_token=TOKEN",
    
//管理卡券(https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025272)
    //获取用户已领取卡劵
    'GET_CARDLIST':"https://api.weixin.qq.com/card/user/getcardlist?access_token=TOKEN",
    //查看卡券详情, POSTURL
    'GET_CARD':"https://api.weixin.qq.com/card/get?access_token=TOKEN",
    'BATCHGET_CARD':"https://api.weixin.qq.com/card/batchget?access_token=TOKEN",
    //更改卡券信息, POSTURL
    'UPDATE_CARD':"https://api.weixin.qq.com/card/update?access_token=TOKEN",
    //修改库存, POSTURL
    'MODIFY_STOCK':"https://api.weixin.qq.com/card/modifystock?access_token=TOKEN",
    //更改Code, POSTURL
    'UPDATE_CODE':"https://api.weixin.qq.com/card/code/update?access_token=TOKEN",
    //删除卡券, POSTURL
    'DELETE_CARD':"https://api.weixin.qq.com/card/delete?access_token=TOKEN",
    //设置卡券失效接口
    'UNACAILABLE':"https://api.weixin.qq.com/card/code/unavailable?access_token=TOKEN",
    //统计卡券数据
    'GET_CARD_BIZUIN_INFO':"https://api.weixin.qq.com/datacube/getcardbizuininfo?access_token=ACCESS_TOKEN",
    //获取免费券数据
    'GET_CARD_CARD_INFO':"https://api.weixin.qq.com/datacube/getcardcardinfo?access_token=ACCESS_TOKEN",
    //拉取会员卡概况数据
    'GET_CARD_MEMBERCARD_INFO':"https://api.weixin.qq.com/datacube/getcardmembercardinfo?access_token=ACCESS_TOKEN",
    //拉取单张会员卡数据
    'GET_CARD_MEMBERCARD_CARDDETAIL':"https://api.weixin.qq.com/datacube/getcardmembercarddetail?access_token=ACCESS_TOKEN",

    
}

module.exports = {
    ACCESS_TOKEN: api.access_token,
    CREATE_CARD: api.CREATE_CARD,


};
