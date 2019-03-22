var mysql = require('mysql');
var connection = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password : '123456',
    port:   '3306',
    database:   'test'
});
connection.connect();

var sql = 'SELECT * FROM websites';
//查询
connection.query(sql, function(err, result) {
    if(err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

//插入
var addSql = 'INSERT INTO websites(Id, name, url, alexa, country) VALUES(0, ?, ?, ?, ?)';
var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];

//增
connection.query(addSql, addSqlParams, function(err, result) {
    if(err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:',result);        
    console.log('-----------------------------------------------------------------\n\n');  
});

//更新数据
var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//改
connection.query(modSql,modSqlParams,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});

//删除数据
var delSql = 'DELETE FROM websites where id=6';
connection.query(delSql, function(err, result) {
    if(err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n'); 
});





connection.end();