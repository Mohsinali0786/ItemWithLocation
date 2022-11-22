import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { googleClientId } from '../utils/constants'
import { AUTH } from '../utils/apis'
import axios from 'axios';
import { isLoggedin } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserData } from '../Redux/actions'
import { getallData } from '../utils/helpers'
import { successMessage } from '../utils/helpers'
import { errorMessage } from '../utils/helpers';
export default function MyGoogleLogin() {
    const dispatch = useDispatch()
    const userid = useSelector((state) => state.itemReducer.LOGINUSER?._id)
    const responseGoogle = (response) => {
        errorMessage('Some thing went wrong')
    }
    const handleLogin = (response) => {
        let userdata = {
            google_id: response.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email
        }
        axios.post(AUTH?.REGISTER, userdata)
            .then((res) => {
                if (res.data.success === true) {
                    successMessage(res.data.message)
                    dispatch(isLoggedin(true))
                    dispatch(loginUserData(res.data.logininfo))

                }
                else {
                    successMessage(res.data.message)
                    dispatch(isLoggedin(true))
                    dispatch(loginUserData(res.data.logininfo))
                    getallData(dispatch, userid)
                }
            })
            .catch((err) => {
                console.log('err===>', err)
            })

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