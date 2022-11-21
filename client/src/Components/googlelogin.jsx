import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { googleClientId } from '../utils/constants'
import { AUTH } from '../utils/apis'
import axios from 'axios';
import Swal from 'sweetalert2'
import { isLoggedin } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserData } from '../Redux/actions'
import { getallData } from '../utils/helpers'
import { successMessage } from '../utils/helpers'
export default function MyGoogleLogin() {
    const [logindata, setLogindata] = useState(false)
    const dispatch = useDispatch()
    const userid = useSelector((state) => state.itemReducer.LOGINUSER?._id)

    const responseGoogle = (response) => {
        console.log('failure', response);
    }
    const handleLogin = (response) => {
        console.log('response', response);
        let userdata = {
            google_id: response.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email
        }
        axios.post(AUTH?.REGISTER, userdata)
            .then((res) => {
                console.log(res.data, 'mydata')
                if (res.data.success === true) {
                    console.log(res.data,'===> 1')
                    successMessage(res.data.message)
                    // Swal.fire({
                    //     icon: 'success',
                    //     title: 'Congratulation...',
                    //     text: res.data.message,
                    // })
                    dispatch(isLoggedin(true))
                    dispatch(loginUserData(res.data.logininfo))

                }
                else {
                    console.log(res.data,'===> 2')
                    successMessage(res.data.message)

                    // Swal.fire({
                    //     icon: 'success',
                    //     title: 'Congratulation...',
                    //     text: 'You successfully loggedin',
                    // })
                    dispatch(isLoggedin(true))
                    dispatch(loginUserData(res.data.logininfo))
                    getallData(dispatch, userid)
                }
                // getallData(dispatch)
            })
            .catch((err) => {
                console.log('err===>', err)
            })

    }
    const handleLogout = (response) => {
        console.log(response);
    }
    return (
        <div>

            <GoogleLogin
                clientId={googleClientId}
                buttonText="Login With Google"
                onSuccess={handleLogin}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className='googleloginbtn'

            />
        </div>
    )
}