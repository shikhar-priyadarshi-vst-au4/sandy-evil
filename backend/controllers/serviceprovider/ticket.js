const Ticket = require('../../models/Ticket');
const Booking = require('../../models/Booking');

function controller( ){
  this.action = async(req, res) => {
        let { profile_id, customer_id,
            booking_id, action } = req.params;
        let { services } = req.body;
        if(!!profile_id && !! customer_id && 
            !!booking_id && action && services){
             try{
               let data = await Ticket.findOrCreate({
                   where : {
                    profile_id, customer_id,
                    booking_id, services, action 
                   }
               })
               if(data){
                   let updateStatus = await Booking.update({
                       worker_id : profile_id,
                       status : action
                   },{ where : { id : booking_id }, 
                   returning : true });
                   if(updateStatus){
                       res.json({
                           status : true,
                           data,
                           updateStatus,
                           msg : `Ticket created and booking status
                           updated successfully. Action was ${action}`
                       })
                   }
               }
             }catch(error){
                 res.json({
                     status : false,
                     error
                 })
             }
        }         
  }
} 

module.exports = new controller();