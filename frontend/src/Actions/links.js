const host = 'https://towny-services.herokuapp.com';


export const worker_links = [
    { register : `${host}/worker/register` },
    { login : `${host}/worker/login` },
    { upload:`${host}/worker/upload?jwt=` },
    { tokenAuth : `${host}/worker/auth?jwt=`},
    { render : `${host}/services/render?category=`},
    { getServices : `${host}/services/register?jwt=`},
    { create : `${host}/worker/ticket/`},
    { retrieve : `${host}/worker/retrieve/`},
    { update : `${host}/worker/update/`}
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

