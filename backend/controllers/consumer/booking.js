const Booking = require('../../models/Booking');

function controller(){
  //create a booking
  this.create = async ( req, res) => {
    let { customer_id } = req.params;  
    let { service_id, services,
        status = 'Pending', balance = 0.0 } = req.body;
        console.log(customer_id, service_id, services, balance);
      if(!!customer_id && !!services.length ){
          try{
           let data = await Booking.findOrCreate(
               {where : {customer_id, service_id, services, 
                status, balance}});
             if(data){
                res.json({
                    status : true,
                    data,
                    message : "booking created successfully"
                })
             }   
          }
          catch(error){
                res.json({error, status : false})
          }
      }
      else{
        res.json({
            status : false,
            message : "No data"
        })
    }
  }
  //to get customer all booking records
  this.getInfo = async( req, res ) => {
      let { customer_id } = req.params;
      if(!!customer_id){
          try{
          let data = await Booking.findAll({where : { customer_id}});
             if(data){
                 res.json({
                     status : true,
                     data
                 })
             }    
          }
          catch(error){
              res.json({error, status : false});
          }
      }
      else{
          res.json({
              status : false,
              message : "No data"
          })
      }
  }
  //get the response of booking
  this.getBooking = async( req, res) => {
      let { bookingId : id } = req.body;
      let data = await Booking.findByPk(id);
      if(!!data){
        res.json({
            status : true, data 
        })
      }
  }
  this.assign = async( req, res ) => {
      let { bookingId : id , worker_id } = req.params;
      if( !!id && !!worker_id){
            try{
            let data = Booking.update({worker_id,
            status : 'Accept' },{where : {id}, 
            returning: true});
            if(!!data){
                res.json({
                    status : true,
                    data
                })
            }
        }
        catch(error){
            res.json({status : false, error})
        }
      } 
  }
  // to cancel the booking
  this.cancel = async( req, res ) => {
      let { bookingId : id } = req.params;
      if(id){
         let data = await Booking.destroy({where : { id }});
         if(data){
             res.json({
                status : true, 
                data,
                message : "Booking cancelled"
             })
         }
      }
      else{
        res.json({
            status : false,
            message : "No data"
        })
    }
  }

}

module.exports = new controller();

