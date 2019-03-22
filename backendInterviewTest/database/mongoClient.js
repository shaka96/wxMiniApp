var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("wxapp");
    dbase.createCollection('site', function(err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});

//插入多条数据
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("wxapp");
    var myobj = [
        {name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
    ];
    dbo.collection('site').insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为： " + res.insertedCount);
        db.close();
    });
});

//查询数据
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("wxapp");
     var whereStr = {"name":'菜鸟教程'};  // 查询条件
    dbo.collection("site").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//更新数据
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("wxapp");
    var whereStr = {"type": 'en'};
    var updateStr = { $set: {"url": "https://www.runoob.com"}};
    dbo.collection("site").updateMany(whereStr, updateStr, function(err, result) {
        if (err) throw err;
        console.log(res.result.nModified + " 条文档被更新");
        db.close();
    });
});

//删除数据
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("wxapp");
    var whereStr = { type: "en" };  // 查询条件
    dbo.collection("site").deleteMany(whereStr, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " 条文档被删除");
        db.close();
    });
});

//排序
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("wxapp");
    var mysort = { type: 1 };
    dbo.collection("site").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
//查询分页
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("wxapp");
    dbo.collection("site").find().limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
  });
});