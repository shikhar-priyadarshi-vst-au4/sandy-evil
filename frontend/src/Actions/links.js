const host = 'https://towny-services.herokuapp.com';


export const worker_links = [
    { register : `${host}/worker/register` },
    { login : `${host}/worker/login` },
    { upload:`${host}/worker/upload?jwt=` },
    { tokenAuth : `${host}/worker/auth?jwt=`},
    { render : `${host}/services/render?category=`},
    { register : `${host}/services/register?jwt=`},
    { acceptTicket : `${host}/ticket/action/:profile_id/
    :customer_id/:booking_id/:action`}
]

export const client_links = [
    { Register : `${host}/user/register`},
    { Login : `${host}/user/login`},
    { Upload : `${host}/user/upload?jwt=`},
    { tokenAuth : `${host}/user/auth?jwt=`},
    { createBooking : `${host}/user/create/`},
    { getBookings : `${host}/user/retrieve/`},
    { cancelBooking : `${host}/user/cancel/:bookingId` },
    { workerAssigned : `${host}/user/assign/` },
    { submitFeedback : `${host}/user/submit/feedback/:profile_id` },
]

