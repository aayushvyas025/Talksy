const router = require('express').Router(); 

router.get('/', (request, response) => {
    response.json({success: true, message: 'Working successfully'}); 
})


module.exports = router; 