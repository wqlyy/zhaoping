var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* GET users listing. */
var db=mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'tests'});

/* GET home page. */
router.get('/', function (req, res, next) {
    db.query(`SELECT * FROM jobs_dev`, (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).send('database error').end();
        }else{
            res.render('show', {title: 'Express', data:data, author: 'wangqiang'});
        }
    });
});

router.get('/profile', function (req, res, next) {
  res.render('profile', { title: 'Express', author: 'wangqiang' });
});

module.exports = router;
