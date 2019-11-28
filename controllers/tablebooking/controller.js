const controller={};
const data=require('./../../models/TableDetails');
const Cart=require('./../../models/cart');
var user;

controller.switchindices=(req,res)=>{
    console.log(req.body);
    var {Table_indices}=req.body;
    data.switchindices(Table_indices,(error,response)=>{
        console.log(response);
        res.redirect('/Admin_dashboard');
    })
}
controller.tableMatrix=(req,res)=>{
   var {Matrix_unit,indices_value}=req.body;
   data.tableMatrix(Matrix_unit,indices_value,(error,response)=>{
       if(!error)
       {
           console.log(response);
       }
   })
}

controller.homepage=(req, res)=>{
    res.render('homepage', {
        title: "HOMEPAGE",
        CSSlink: "./../../public/stylesheet/style.css",
        JSlink:'./../../public/JS-Frontend/Homepage.js'
    });
}

controller.aboutus=(req,res)=>{
    res.render('about', {
        title: "ABOUTPAGE",
        CSSlink: "./../../public/stylesheet/style.css"
    });
}

controller.menupage=(req,res)=>{
            data.product((error,response)=>{
                
                //console.log("Response==>"+response);
                if(!error){
                    res.render('menupage', { title: 'Flavor',
                    products:response,
                CSSlink:'./../../public/stylesheet/menupage.css',
                
            });
                }
            })    
        }
controller.feedback=(req,res)=>{
    res.render('feedback',{
        title:"FLAVOR",
        CSSlink:"./../../public/stylesheet/style.css",
        CSSlink1:"./../../public/stylesheet/feedback.css"
    })
}
controller.retrieve=(req,res)=>{
    
    console.log("Username>>Booking_page"+req.session.user);
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
                username:req.session.user
            });
        }
        
    });
    
}
controller.retrieveDashboard=(req,res)=>{
     data.bookingdetails((error,response)=>{
         if(error){
             res.send(error);
         }
         else{ 
             console.log(response);
                res.render('dashboard',{
                CSSlink:"./../../public/stylesheet/dashboard.css",
                JSlink:"./../../public/JS-Frontend/dashboard.js",
                data:response.message,
                matrix:response.matrix,
                number:response.counter,
                vacant:response.vacant
            })
        }
     }); 
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
/*controller.retrieveUserPage=(req,res)=>{
       
    res.render('Login',{
        CSSlink:'./../../public/stylesheet/Login.css',
            JSlink:'./../../public/JS-Frontend/booking.js'
            
    
    })

}*/
controller.adminlogin=(req,res)=>{
    console.log(req.body);
    var{Username,Password}=req.body;
    if(Username==='Shikhar' & Password==='admin123')
    {
        res.redirect('/');
    }
    else{
        res.send('<h1>Admin not recognised</h1>');
    }
}

controller.adminbookingticket=(req,res)=>{
    var {Table_number,Customer_name,Contact_no}=req.body;
    data.adminbookingticket(Customer_name,Table_number,Contact_no,(error,response)=>{
      if(error){
          res.send({error});
      }else{
        res.redirect('/Admin_dashboard');
      }
      
    });
};

/*controller.createAccount=(req,res)=>{
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
   
}*/
/*controller.userLogin=(req,res)=>{
    
    var{username, email, password}=req.body;
    data.login(username, email, password,(error,response)=>{
        if(response){
            req.session.user=response.response[0]._id;
            console.log(response, req.session.user, req.session);
            user=response.response[0].username;
            console.log("Username>>Login_page"+user);
            setTimeout(()=>{
                res.redirect('/');       
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
}*/
/*controller.logout=(req,res)=>{
    
    req.session.destroy();
    res.send("logout");
}*/
controller.anuthorisedaccess=(req,res)=>{
 res.render('unauthorised');
}
/*controller.authentication=(req,res,next)=>{
    console.log(req.session);
     console.log(req.originalUrl);
    if(req.session.user==undefined)
    {   if((req.originalUrl=="/booking/details"||req.originalUrl=="/logout"||req.originalUrl==("/add-to-cart/"+req.params.id))) 
        {console.log("Inside Authentication");
         //return res.send("<h1>You're not logged in.</h1>");
         res.redirect('/unauthorised');}
     }
     else{
        return next();
     }
     if(req.originalUrl==("/add-to-cart/"+req.params.id))
     {  
        session=req.session.cart;
    console.log(session);
    next();
    }
}*/
controller.addcart=(req,res)=>{
console.log("productId=>"+req.params.id);
var productId=req.params.id;//working till here
var cart = new Cart(req.session.cart ? req.session.cart : {});
data.addCart(productId,(error,response)=>{
    if(!error){
        console.log(response);
        cart.add(response, productId);
        req.session.cart = cart;
        console.log(req.session.cart)
        res.redirect('/menu'); 
        //session=req.session.cart.totalQty;
    }
    else{
        res.redirect('/menu');
    }
    
})
}
controller.shoppingcart=(req,res)=>{
     console.log("Shopping-cart-->",req.session.cart);
    if (!req.session.cart){
       
       res.render('shopping-cart', {products: null});
    
      }
      var cart = new Cart(req.session.cart);
      //console.log(cart.generateArray());
      Promise.resolve( value=cart.generateArray()).then(
          ()=>{
            res.render('shopping-cart', {products: value,totalPrice: cart.totalPrice})
          }
      )
      
}
module.exports=controller;