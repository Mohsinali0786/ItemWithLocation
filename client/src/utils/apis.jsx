const getApi = `/api/get`
const postApi = `/api/post`
const authApi='/api/auth'


const AUTH = {
    REGISTER:`https://item-with-map-location.herokuapp.com${authApi}/register`
}
const GET = {
    GETITEMS:`https://item-with-map-location.herokuapp.com${getApi}/getitems`
}

const POST = {
    ADDITEMS:`https://item-with-map-location.herokuapp.com${postApi}/additems`,
    UPLOADIMAGE:`https://item-with-map-location.herokuapp.com${postApi}/uploadimage`,
    UPDATEITEM:`https://item-with-map-location.herokuapp.com${postApi}/update-item`


}

export {
    GET,
    POST,
    AUTH
}