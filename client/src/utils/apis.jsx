const getApi = `/api/get`
const postApi = `/api/post`
const authApi='api/auth'



const AUTH = {
    REGISTER:`${authApi}/register`
}
const GET = {
    GETITEMS:`${getApi}/getitems`
}

const POST = {
    ADDITEMS:`${postApi}/additems`,
    UPLOADIMAGE:`${postApi}/uploadimage`,
    UPDATEITEM:`${postApi}/update-item`


}

export {
    GET,
    POST,
    AUTH
}