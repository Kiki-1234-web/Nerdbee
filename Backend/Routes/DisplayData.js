const express = require('express');
const router = express.Router()

router.post('/bookData', (req,res)=>{
   try {
    res.send([ global.book_data, global.bookCategory]);
   } catch (error) {
    res.send("Server Error")
   }
})

module.exports = router;