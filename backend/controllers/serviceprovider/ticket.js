const Ticket = require('../../models/Ticket');
const Booking = require('../../models/Booking');
Ticket.belongsTo(Booking, {foreignKey : 'booking_id'});
// Booking.hasOne()
function controller( ){

  this.create = async(req,res) => {
      let {worker_id} = req.params;
      try{
        let bookings = await Booking.findAll({
            where : { worker_id, status : 'Accept'}
        })
        if(bookings.length>0){
            let ticket = await Ticket.findOrCreate({where : {
                booking_id : bookings[0].id,
                worker_id
            }})
            res.json(ticket);
        }
          
                  
      }
      catch(error){

      }
  }
  this.getTickets = async(req,res) => {
      let {worker_id} = req.params;
      try{
         let tickets = await Ticket.findAll({where : {worker_id}, include : [
             {
                 model : Booking
             }
         ]})
         res.json(tickets);
      }
      catch(error){

      }
  }
  //to mark the ticket complete
  this.update = async(req,res) => {
      let {worker_id} = req.params;
      try{

      }catch(error){

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