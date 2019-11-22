const mongoose=require('mongoose');
const booking=require('./CreateBooking');
const user=require('./User');
function connect(){
    return mongoose.connect('mongodb://localhost:27017/restaurant_booking',{
     useNewUrlParser:true   
    ,useUnifiedTopology:true
    });
}
module.exports={
    models:{
        booking:booking,
        user:user
    },
    connect:connect
}