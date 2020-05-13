//whether ticket is accepted or declined. Updating the status of ticket.
//ticket -> accepted -> gather params -> (customerId, Service )
const router = require('express').Router();

const { create, getTickets, 
       updateTicket, reset} = require('../../controllers/serviceprovider/ticket')


//end-point to create an action on a ticket
// router.post(`/ticket/action/:profile_id/
//             :customer_id/:booking_id/:action`, action);
router.post('/ticket/:worker_id', create);
router.get('/retrieve/:worker_id', getTickets);  
router.put('/update/:worker_id/:booking_id', updateTicket, reset)          
module.exports = router;