/**
 * Created by wangqiang on 2017/9/12.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* GET users listing. */
var db=mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'tests'});


router.get('/51job', function(req, res, next) {
    db.query(`SELECT * FROM jobs_dev WHERE type='51job'`, (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).send('database error').end();
        }else{
            res.render('show', {title: 'Express', data:data, author: 'wangqiang'});
        }
    });


});
router.get('/ntw', function(req, res, next) {
    db.query(`SELECT * FROM jobs_dev WHERE type='ntw'`, (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).send('database error').end();
        }else{
            res.render('show', {title: 'Express', data:data, author: 'wangqiang'});
        }
    });
});
router.get('/zlzp', function(req, res, next) {
    db.query(`SELECT * FROM jobs_dev WHERE type='zlzp'`, (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).send('database error').end();
        }else{
            res.render('show', {title: 'Express', data:data, author: 'wangqiang'});
        }
    });
});
router.get('/liepin', function(req, res, next) {
    db.query(`SELECT * FROM jobs_dev WHERE type='liepin'`, (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).send('database error').end();
        }else{
            res.render('show', {title: 'Express', data:data, author: 'wangqiang'});
        }
    });
});
module.exports = router;