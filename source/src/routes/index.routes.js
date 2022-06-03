const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { index : true });
});

router.get('/profile', async (req, res) => {
    try {
        const user = await pool.query('SELECT * from users WHERE username = "mando"');
        console.log(user);
        res.render('profile', {user: user[0]});
      } catch(err) {
        console.log(err);
      }
});

module.exports = router;