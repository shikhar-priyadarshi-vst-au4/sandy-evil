var mongoose=require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
var Userschema= new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    passwordConfirmation:{
        type:String,
        required:true
    }
},{collection:'Users'});
Userschema.plugin(uniqueValidator);
var User=mongoose.model('User',Userschema); 
module.exports=User;
