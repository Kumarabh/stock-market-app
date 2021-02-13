const express = require('express');
const {
    getCompany
    
} = require('../controllers/zerodha')

const router = express.Router();
console.log('Zerodha routes');
router
.route('/')
.get(getCompany)
.post(getCompany);

// router
// .route('/:id')
// .get(getBootcamp)
// .put(updateBootcamp)
// .delete(deleteBootcamp);

module.exports = router;