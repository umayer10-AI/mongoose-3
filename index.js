const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect("mongodb://127.0.0.1:27017/testdb");

const run = async() => {
  try {
    // const user = await User.findById('6a3f2920b2a690729270783f')
    // const user = await User.find({name: 'Umayer'})
    // const user = await User.exists({name: 'Umayer'})
    // const user = await User.deleteOne({name: 'Umayer'})
    // const user = await User.where('name').equals('Umayer')
    // const user = await User.where('age').gt(22).lt(35).where('name').equals('ahmad')
    const user = await User.where('age').gt(21).lt(35).where('name').equals('Umayer').limit(2).select('age')
    console.log(user)
    // console.log(user.length)

  } 
  catch (err) {
    console.log(err.message);
  }
}
run();