const Booking = require('../../models/Booking');
const Category = require('../../models/Category');
const Worker = require('../../models/Worker');
const Available = require('../../models/Available');
Booking.belongsTo(Category,{foreignKey : 'service_id'});
Category.hasMany(Booking,{foreignKey : 'service_id'});
function controller(){
  //create a booking
  this.create = async ( req, res) => {
    let { customer_id } = req.params;  
    let { service_id, services,
        status = 'Pending', balance = 0.0 } = req.body;
      if(!!customer_id && !!services.length ){
          try{
           let data = await Booking.create(
               {customer_id, service_id, services, 
                status, balance});
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
          let data = await Booking.findAll({ where : { customer_id }, include : Category});
             if(data){
                 res.json({
                     status : true,
                     data
                 })
             }    
          }
          catch(error){
              res.json({message : error.message, status : false});
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
  //to assign a worker to booking
  this.assign = async( req, res ) => {
      let { bookingId : id  } = req.params;
      let { worker_id } = res.locals;
      console.log('bookingId', id);
      if( !!id && !!worker_id){
            try{
            let data = await Booking.update({worker_id,
            status : 'Accept' },{where : {id}, 
            returning: true});
            if(!!data){
                res.json({
                    status : true,
                    data
                })
            }
            else{
                res.json({
                    status : false,
                    message : 'Worker not available'
                })
            }
        }
        catch(error){
            res.json({status : false, message : error.message})
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
  //gather available worker for assigning
  this.gather = async( req, res, next ) => {
    let { bookingId : id, domain } = req.params;
    console.log('bookingId',id);
    try{
    //   let data = await Booking.findByPk(id);
    //   res.json({data});
       if(domain){
        let requiredWorkers = await Available.findAll({
            where : { domain, 
                      status : 'FREE'}});
            if(requiredWorkers.length>0){
            requiredWorkers.map( async({id, worker_id, status, ...value}) => {
                if(status!=='BUSY'){
                    res.locals.worker_id = worker_id;
                    try{
                        let update = await Available.update({ status : 'BUSY'}, {
                            where : {
                                id
                            },
                            returning : true
                        })
                     next()
                    }
                    catch(error){
                       res.json({
                           status : false,
                           message : error.message
                       })
                    }
                }
            })
        } 
        else{
            res.json({
                status : false,
                message : 'Worker not available'
            })
        }
       }
      
        }
        catch(error){
            res.json({
                status : false,
                message : error.message
            })
        }
    //}   
    //      
  }
  //gather all bookings irrespective of customer id
  this.gatherAll = async(req,res)=>{
      let data = await Booking.findAndCountAll();
      if(data){
          res.json({
              data
          })
      }
  }
  //checker the availability of worker
  this.check = async(req,res,next) => {
      let domain = req.body.domain;
      console.log('domain',domain);
      try{
        let check = await Available.findAll({
            where : {
                domain, 
                status : 'FREE'
            }
        })
        
        if(check.length>0){
         next();
        }
        else{
            res.json({
                status : false,
                message : 'Worker not available'
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
  this.isAssigned = async( req, res, next ) => {
      let {bookingId : id} = req.params;
      try{
          let data = await Booking.findByPk(id);
          if(data.worker_id){
              res.json({
                  status : false,
                  message : 'Worker already assigned'
              })
          }
          else{
            next();
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

