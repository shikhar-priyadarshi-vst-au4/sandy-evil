const controller={};
const data=require('./../../models/TableDetails');
const Cart=require('./../../models/cart');
const Order=require('./../../models/details');

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
    console.log("User logged in",req.session.user);
    console.log("Table number",req.session.tableNumber);
    if(req.session.tableNumber==undefined){
        data.checkuser(req.session.user,req.session.tableNumber,(err,outcome)=>{
            if(!err){
                console.log("outcome=>",outcome);
                req.session.tableNumber=outcome[0].tableNumber;
            }
            else{
                req.session.tableNumber="n/a"
                console.log(err);
            }
        })
    }
    data.product((error,response)=>{
                
                
                if(!error){
                    res.render('menupage', { title: 'Flavor',
                    products:response,
                CSSlink:'./../../public/stylesheet/menupage.css',
                JSlink:'./../../public/JS-Frontend/menu.js'
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


controller.anuthorisedaccess=(req,res)=>{
 res.render('unauthorised');
}
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
      else{
      
        var cart = new Cart(req.session.cart);
        var order=new Order(req.session.user,req.session.tableNumber,req.session.cart,null)
        console.log(order);
        Promise.resolve( 
          order.storedetails()
        ).then(
            ()=>{ value=cart.generateArray()
              res.render('shopping-cart', {products: value,totalPrice: cart.totalPrice})
            }
        )


      }
}
controller.checkuserbooking=(req,res)=>{
    console.log(req.body);
    var {customer_name,table_number}=req.body;
    require('./../../models/CreateBooking').find({username:customer_name},function(error,response){
        console.log("error",error);
        console.log("response",response);
        if(!error){
            if(response.length!=0){
                req.session.tableNumber=response[0].tableNumber;
                return res.send(response);
            }
            else{
                require('./../../models/CreateBooking').create({
                    username:customer_name,
                    tableNumber:table_number,
                    bookingStatus:"Booked"
                },(err,result)=>{
                    console.log("booking_error",err);
                    console.log("booking_result",result);
                    if(!err){
                        req.session.tableNumber=result.tableNumber;
                        return res.send(response);

                    }
                    else{
                        return res.send(err);
                    }
                })
            }
            
        }
    })
}
module.exports=controller;