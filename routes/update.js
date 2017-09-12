/**
 * Created by wangqiang on 2017/9/11.
 */
var express = require('express');
var router = express.Router();
/* GET users listing. */
var platform = '';
router.get('/', function(req, res, next) {
    platform = req.query.platform;
    res.render('reptile', {title: 'Express', author: 'wangqiang'});
});
module.exports = router;