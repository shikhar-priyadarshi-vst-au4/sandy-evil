const Table={};
const booking=require('./CreateBooking');
const user=require('./User');
 data=[{
    "tableId":1,
    "reserved":false,
},{"tableId":2,
"reserved":false
},{
    "tableId":3,
    "reserved":false,
    },{
        "tableId":4,
        "reserved":false,
        },{
            "tableId":5,
            "reserved":false,
            },{
                "tableId":6,
                "reserved":false,
                },{"tableId":7,
            "reserved":false,
            },{
                "tableId":8,
                "reserved":false,
                },{
                    "tableId":9,
                    "reserved":false,
                    },{
                        "tableId":10,
                        "reserved":false,
                        },{
                            "tableId":11,
                            "reserved":false,
                        
                        },{"tableId":12,
                        "reserved":false,
                        },{
                            "tableId":13,
                            "reserved":false,
                            },{
                                "tableId":14,
                                "reserved":false,
                                },{
                                    "tableId":15,
                                    "reserved":false,
                                    },{
                                        "tableId":16,
                                        "reserved":false,
                                        
                                    },{"tableId":17,
                                    "reserved":false,
                                    },{
                                        "tableId":18,
                                        "reserved":false,
                                        },{
                                            "tableId":19,
                                            "reserved":false,
                                        },{
                                                "tableId":20,
                                                "reserved":false,
                                                }]
Table.retrieve=(callbackfn)=>{
booking.find({},(error,result)=>{
    console.error(error);
    result.map((value,index)=>{
        var pos=Number(value.tableNumber
            .substring(value.tableNumber.indexOf('-')+1));
          
            data[pos-1].reserved=true;
    })
    return callbackfn(null,data);
})

}

Table.createbooking=(username,tableNumber,bookingStatus,callbackfn)=>{
    console.log(username,tableNumber,bookingStatus);
    booking.create({username:username,
        tableNumber:tableNumber,
        bookingStatus:bookingStatus
    },function(err,result){
        if(err){
            return callbackfn({
                error:err.errors.username.path,
            })
            
        }
        else{
            return callbackfn(null,{
                status:true,
                response:result,
                message:"Booking is confirmed."
            })
        }
        
    }
             
         )
}

Table.createAccount=(username,email,password,confirmpassword,callbackfn)=>{
        if(!username||!email||!password||!confirmpassword)
        {
            return callbackfn({
                status:false,
                message:"UserCredentials are missing"
                });
        }
        else{
            if(password===confirmpassword)
            {   
               user.create({email:email,
                username:username,
                password:password,
                passwordConfirmation:confirmpassword
            },function(error,result){   
                if(error){
                        return callbackfn({
                            error:error
                        });
                    }
                    else{
                        return callbackfn(null,{
                            response:result
                        })
                    }
                })
             }
            else{
                return callbackfn({
                    status:false,
                    message:"password doesn't match"
                });
            }
        }

};

Table.login=(username,email,password,callbackfn)=>{
   console.log(username,email,password);
   if((!username)||(!email)||(!password)){
       return callbackfn({status:false,
    message:"UserCredentials are missing"});
   }
   else{
    user.find({username:username, email:email, password:password},(error,result)=>{
        if(result.length>0){
            return callbackfn(null,{
                status:true,
                message:"You're successfully Logged in",
                response:result
                })
        }
        else{
            return callbackfn({
                status:false,
                error:"Invalid username or password."
            })
        }
    })
  }
}
module.exports=Table;