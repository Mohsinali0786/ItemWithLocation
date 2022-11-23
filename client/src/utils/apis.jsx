const API_PATH='https://item-with-map-location.herokuapp.com'
// const API_PATH='http://localhost:4000'
const getApi = `/api/get`
const postApi = `/api/post`
const authApi='/api/auth'


const AUTH = {
    REGISTER:`${API_PATH}${authApi}/register`
}
const GET = {
    GETITEMS:`${API_PATH}${getApi}/getitems`
}

const POST = {
    ADDITEMS:`${API_PATH}${postApi}/additems`,
    UPLOADIMAGE:`${API_PATH}${postApi}/uploadimage`,
    UPDATEITEM:`${API_PATH}${postApi}/update-item`
}

export {
    GET,
    POST,
    AUTH
}