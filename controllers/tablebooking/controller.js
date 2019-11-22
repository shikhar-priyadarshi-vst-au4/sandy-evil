const controller={};
const data=require('./../../models/TableDetails');
var user;
controller.retrieve=(req,res)=>{
    
    console.log("Username>>Booking_page"+user);
    data.retrieve((error,response)=>{
        console.log(response);
        if(response)
        {
            res.render('Booking-page',{
                title:'Flavor',
                CSSlink:'./../../public/stylesheet/booking.css',
                JSlink:'./../../public/JS-Frontend/booking.js',
                data1:response.slice(0,4),
                data2:response.slice(4,8),
                data3:response.slice(8,12),
                data4:response.slice(12,16),
                data5:response.slice(16,20),
                username:user
            });
        }
        
    });
    
}
controller.retrieveDashboard=(req,res)=>{
    res.render('dashboard',{
        CSSlink:"./../../public/stylesheet/dashboard.css",
        JSlink:"./../../public/JS-Frontend/dashboard.js"
    })
}
controller.createbooking=(req,res)=>{
     var {Customer_name, Table_number, Status}=req.body;
     console.log(Customer_name, Table_number, Status);
     data.createbooking(Customer_name, Table_number, Status,(error,response)=>{
        
        console.error(typeof error);
        console.log(response);
        if(error){
              if(error.error==='username'){
            return res.render('Booking-confirmation.hbs',{
                status:false,
                message:error.error,
                CSSlink:'./../../public/stylesheet/booking.css',
            JSlink:'./../../public/JS-Frontend/booking.js'
            })}
        } 
       return res.render('Booking-confirmation.hbs',{
           status:response.status,
           message:"Success",
           data:response.response,
           CSSlink:'./../../public/stylesheet/booking.css',
            JSlink:'./../../public/JS-Frontend/booking.js'
       })




     })
     
}
controller.retrieveAdminPage=(req,res)=>{
    res.render('Admin_access',{
        CSSlink:'./../../public/stylesheet/Login.css',
            JSlink:'./../../public/JS-Frontend/booking.js'
            
    
    })
}
controller.retrieveUserPage=(req,res)=>{
    res.render('Login',{
        CSSlink:'./../../public/stylesheet/Login.css',
            JSlink:'./../../public/JS-Frontend/booking.js'
            
    
    })

}
controller.adminlogin=(req,res)=>{
    console.log(req.body);
}
controller.createAccount=(req,res)=>{
   var {username, email, password, confirmpassword}=req.body;
   data.createAccount(username, email, password, confirmpassword,(error,response)=>{   
    console.log(response);
    if(error){
           console.log(error);
       }
       else{
           res.render('Login',{
               status:true,
               response:response,
               CSSlink:'./../../public/stylesheet/Login.css',
            JSlink:'./../../public/JS-Frontend/booking.js'
         
           })
       }
   })
   
}
controller.userLogin=(req,res)=>{
    
    var{username, email, password}=req.body;
    data.login(username, email, password,(error,response)=>{
        if(response){
            req.session.user=response.response[0]._id;
            console.log(response, req.session.user, req.session);
            user=response.response[0].username;
            console.log("Username>>Login_page"+user);
            setTimeout(()=>{
                res.redirect('/booking/details');       
            },5000);
        }
        else{
            res.render('Login',{
                flag:true,
                message:error.error,
                CSSlink:'./../../public/stylesheet/Login.css',
            JSlink:'./../../public/JS-Frontend/booking.js'
               })              
            }
})
}
controller.logout=(req,res)=>{
req.session.destroy();
}
controller.authentication=(req,res,next)=>{
     
     
    if(req.session.user==undefined)
     {
         return res.send("<h1>You're not logged in.</h1>");
     }
     else{
        return next();
     }
}
module.exports=controller;