const History = require('../../models/history');
const Booking = require('../../models/Booking');
function controller () {
   this.history = async(req, res) => {
       let {worker_id} = req.params;
       try{
          let tickets = await Booking.findAll({where : { status : 'Completed', worker_id }});
          if(tickets.length>0){
              let history = await History.findOrCreate({worker_id, data : tickets});
              res.json({
                  status : true,
                  data : history
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