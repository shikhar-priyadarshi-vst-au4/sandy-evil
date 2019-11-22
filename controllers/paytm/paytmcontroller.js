var checksum=require('./checksum');
module.exports={
    getRequest:(req,res)=>{
        res.render('paytm',{
            value:Math.random()+"SD",
            CSSlink:'./../../public/stylesheet/booking.css'
        });
    },
    request: (req,res)=>{
        var paramlist=req.body;
        var paramarray=new Array();
        console.log(paramlist);
        console.log(typeof paramlist);
        for(var name in paramlist){
            if(name==="PAYTM_MERCHANT_KEY")
            {    
                var PAYTM_MERCHANT_KEY=paramlist[name];
                console.log(PAYTM_MERCHANT_KEY);
            }
            else{
                paramarray[name]=paramlist[name];
               
            }
        }
        console.log(paramarray);//array treated as an object.
     paramarray['CALLBACK_URL']="http://localhost:3000/paymentgate/paytm/request";
     checksum.genchecksum(paramarray,PAYTM_MERCHANT_KEY,function(err,result){
         console.error(err);
         res.render("paytmstatus",
             result
         );
     })
    },
    response:(req,res)=>{
        res.send("Successful");
    }
}