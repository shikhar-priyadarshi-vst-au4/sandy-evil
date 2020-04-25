//whether ticket is accepted or declined. Updating the status of ticket.
//ticket -> accepted -> gather params -> (customerId, Service )
const router = require('express').Router();

const {action} = require('../../controllers/serviceprovider/ticket')


//end-point to create an action on a ticket
router.post(`/ticket/action/:profile_id/
            :customer_id/:booking_id/:action`, action);

module.exports = router;