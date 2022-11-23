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
    const userid = useSelector((state) => state.itemReducer.LOGINUSER)

    const responseGoogle = (response) => {
        // errorMessage('Some thing went wrong')
        console.log('response', response)
    }

    const handleLogin = (response) => {
        let userdata = {
            google_id: response.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email
        }

        axios.post(AUTH?.REGISTER, userdata)
            .then((res) => {
                const { data } = res
                if (data.success) {
                    dispatch(isLoggedin(true))
                    dispatch(loginUserData(data.logininfo))
                    successMessage(data.message)
                    getallData(dispatch, userid)
                }
                else {
                    successMessage(data.message)
                    dispatch(isLoggedin(true))
                    dispatch(loginUserData(data.logininfo))
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