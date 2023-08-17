const express = require('express');
const router = express.Router()
// models
const User = require('../models/User')
const Order = require('../models/Orders')
// Express validator for imposing conditions on input data
const { body, validationResult } = require('express-validator');
// Web token
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtsecret = "MynameisKoushikiNagar#?"

router.post("/createuser", [body('email').isEmail(), body('name').isLength({ min: 5 }),
body('password', 'Incorrect Password').isLength({ min: 5 })], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  let secPassword = await bcrypt.hash(req.body.password, salt)

  try {
    await User.create({
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      password: secPassword
    })
    res.json({ success: true });
  }
  catch (error) {
    console.log(error)
    res.json({ success: false });
  }
})

router.post("/loginuser", [body('email').isEmail(), body('password', 'Incorrect Password').isLength({ min: 5 })], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email; 

  try {
   // let userData = await User.findOne({ email});
    let userData = await User.findOne({ email: email }); 
    if (!userData) {
      return res.status(400).json({ errors: "Try logging in with correct credentials" })
    }
    const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
    if (!pwdCompare) {
      return res.status(400).json({ errors: "Try logging in with correct credentials" })
    }
    const data = {
      user:{
        id:userData.id
      }
    }
    const authToken = jwt.sign(data, jwtsecret)

    return res.json({ success: true,authToken:authToken })
  }
  catch (error) {
    console.log(error)
    res.json({ success: false })
  }
})

// router.post("/addorder", async(req,res)=>{
//   // console.log(req)
//   if(localStorage(authToken)){
//     try {
//       await Order.create({
//         email: req.body.email,
//         rating: req.body.rating,
//         moviename: req.body.moviename,
//         review: req.body.review
//       })
//       res.json({ success: true });
//     }
//     catch (error) {
//       console.log(error)
//       res.json({ success: false });
//     }
//   }
  
// })
// router.post("/getbyid", async(req,res)=>{
//   let mov = await Order.findOne({email:email})
//   if(mov){
    
//   }
//   else{

//   }
// })

// router.post('/fetchbyid', async(req,res)=>{
//   let userData = await User.findOne({ email: email });
//   if(userData){
//       try{
       
//       }
//   }
// })

module.exports = router;
// export default router
