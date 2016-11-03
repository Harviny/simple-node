var express = require('express');
var router = express.Router();
var connect=require('../database/DBHelper');

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'bitmain'});
    res.render('result', { title: '搜索结果'});
    var querySql='select p_id,p_name,p_price,p_type,p_comment,p_company,p_area,p_code from product;';

    connect.getdata(querySql,function(result){

        res.render('index', { title: '食分,健康的标准',items: result});

    })

});

router.get('/result', function(req, res, next) {

    res.render('result', { title: 'result'});

});


module.exports = router;
