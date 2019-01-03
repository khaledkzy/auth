const express = require('express');

//This is just a mini express route it will look like /auth/ something because we required it in the server/index.js
const router = express.Router();

router.get('/', (req,res) => {
    res.json(
        {
            message: 'LOCKED'
        }
    );
});

module.exports = router;