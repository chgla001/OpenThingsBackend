const express = require('express');
const database = require('../database/Database');

const router = express.Router();

router.get('/', function (req, res) {
    res.send('hello from server');
});

router.get('/', function (req, res) {
    database.getFolderlost().then(function (data) {
        res.json(data);
    });
});

router.post('/', function (req, res) {
    const data = req.body;
    // database.getUserByName(data.name).then(function (data) {
    //     res.json(data)
    // }).catch(function (err) {
    //     console.log(err);
    // })
    console.log(data);
});

// router.post('/userdata', function (req, res) {
//     const data = req.body;
//     database.createUser(data).then(function () {
//         database.getUserByName(data.name).then(function(data){
//             res.json(data)
//         }).catch(function(err){
//             console.log(err);
//         })
//     }).catch(function (err) {
//         console.log(err);
//     })
// });

// router.get('/allusers', function (req, res) {
//     database.getAllUsers().then(function (data) {
//         res.json(data);
//     });
// });

// router.get('/user', function (req, res) {
//     database.getUser().then(function (data) {
//         res.json(data);
//     });
// });

// router.get('/userById', function (req, res) {
//     var userId = req.param('id');
//     database.getUserById(userId).then(function (data) {
//         res.json(data);
//     });
// });

module.exports = router;