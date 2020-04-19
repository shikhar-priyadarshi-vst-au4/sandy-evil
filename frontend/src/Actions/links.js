export const HOST = process.env.REACT_APP_HOST_NAME;
export const PORT = process.env.REACT_APP_API_PORT;
export const links = [
    { register : "/worker/register" },
    { login : "/worker/login" },
    { upload:"/worker/upload/?jwt=" },
    { tokenAuth : "/worker/auth/?jwt="}
]
