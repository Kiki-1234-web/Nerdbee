const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://koushikinagar123:Bhopal123@cluster0.kunkixg.mongodb.net/orderapp?retryWrites=true&w=majority";


const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("book_desc");
    await fetched_data.find({}).toArray(async function (err, data) {
      //console.log(data);
      //  global.book_data = data; // making a global variable
      const bookCategory = mongoose.connection.db.collection("book_cate"); // to fetch data on the local system from atlas we use this
      await bookCategory.find({}).toArray(function(err, catData){
        if(err) console.log(err); // <-- Fix "error" to "err" here
        else{
         // console.log(catData);
          global.book_data = data;
          global.bookCategory = catData;
        }
      })
    })
  } catch (error) {
    console.log('err: ', error);
  }
};


module.exports = mongoDB();

// 5.13.19


