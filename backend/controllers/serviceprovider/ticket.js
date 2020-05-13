const Ticket = require('../../models/Ticket');
const Booking = require('../../models/Booking');
const Available = require('../../models/Available');
Ticket.belongsTo(Booking, {foreignKey : 'booking_id'});
// Booking.hasOne()
function controller( ){

  this.create = async(req,res) => {
      let {worker_id} = req.params;
      try{
        let bookings = await Booking.findAll({
            where : { worker_id, status : 'Accept'}
        })
        if(!!bookings.length){
            let ticket = await Ticket.findOrCreate({where : {
                booking_id : bookings[0].id,
                worker_id
            }})
            res.json({
                status : true,
                ticket,
                message : `${ticket[1]?`Ticket 
                created successfully`:`Ticket already exist`}`
            });
        }
        else{
            res.json({
                status : true,
                message : 'No booking found with such details'
            })
        }          
      }
      catch(error){
            res.json({
                status : false,
                message : error.message
            })
      }
  }
  //to retrieve all tickets of a worker
  this.getTickets = async(req,res) => {
      let {worker_id} = req.params;
      try{
         let tickets = await Ticket.findAll({where : {worker_id}, include : [
             {
                 model : Booking
             }
         ]})
         res.json({tickets});
      }
      catch(error){
            res.json({
                status : false,
                message : error.message
            })
      }
  }
  //to mark the ticket complete
  this.updateTicket = async(req,res, next) => {
      let {booking_id} = req.params;
      try{
        let updateTicket = await Booking.update({status : 'Completed'},{where : {
            id : booking_id, status : 'Accept'}, returning : true});
        if(updateTicket){
            next();
        }

      }catch(error){
        res.json({
            status : false,
            message : error.message
        })
      }
  }
  this.reset = async(req,res) => {
     let {worker_id} = req.params;
     try{
        let reset = await Available.update({status : 'FREE'},{where : {worker_id,
                                             status : 'BUSY'}, returning : true});
            if(reset){
                res.json({
                    status : true,
                    data : reset
                })
            }                                 
     }
     catch(error){
         res.json({
             status : false,
             message : error.message
         })
     }
  }
} 

module.exports = new controller();


//   this.action = async(req, res) => {
//         let { profile_id, customer_id,
//             booking_id, action } = req.params;
//         let { services } = req.body;
//         if(!!profile_id && !! customer_id && 
//             !!booking_id && action && services){
//              try{
//                let data = await Ticket.findOrCreate({
//                    where : {
//                     profile_id, customer_id,
//                     booking_id, services, action 
//                    }
//                })
//                if(data){
//                    let updateStatus = await Booking.update({
//                        worker_id : profile_id,
//                        status : action
//                    },{ where : { id : booking_id }, 
//                    returning : true });
//                    if(updateStatus){
//                        res.json({
//                            status : true,
//                            data,
//                            updateStatus,
//                            msg : `Ticket created and booking status
//                            updated successfully. Action was ${action}`
//                        })
//                    }
//                }
//              }catch(error){
//                  res.json({
//                      status : false,
//                      error
//                  })
//              }
//         }         
  
//   }