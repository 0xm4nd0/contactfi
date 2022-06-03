const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/contacts/new', (req, res) => {
    res.render('./contacts/new');
});

router.get('/contacts/list', async (req, res) => {
    try {
        const contacts = await pool.query('SELECT * from contacts WHERE username = "mando"');
        res.render('./contacts/list', {contacts});
      } catch(err) {
        console.log(err);
      }
    
});

router.post('/contacts/add', async (req, res) => {
    try {
        const contact = req.body;
        contact.username = 'mando';
        console.log(contact);
        await pool.query('INSERT INTO contacts SET ?', [contact]);
        console.log('Contact saved successfully!')
        res.redirect('/contacts/list');
      } catch(err) {
        console.log(err);
      }
    
});

//Edit contacts
router.get('/contacts/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const contact = await pool.query('SELECT * FROM contacts WHERE id = ?', [id]);
        console.log(contact[0]);
        res.render('./contacts/edit', {contact : contact[0]});

      } catch(err) {
        console.log(err);
      }
});

router.post('/contacts/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const new_info = req.body;
        console.log([id, new_info]);
        await pool.query('UPDATE contacts SET ? WHERE id = ?', [new_info, id]);
        console.log('Contact updated successfully!');
        res.redirect('/contacts/list');

      } catch(err) {
        console.log(err);
      }
    
});

//Delete contacts
router.get('/contacts/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await pool.query('DELETE FROM contacts WHERE id = ?', [id]);
        console.log('Contact deleted successfully!');
        res.redirect('/contacts/list');

      } catch(err) {
        console.log(err);
      }
});

module.exports = router;