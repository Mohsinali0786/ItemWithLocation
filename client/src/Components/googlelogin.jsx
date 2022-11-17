import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { googleClientId } from '../utils/constants'
import { AUTH } from '../utils/apis'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function MyGoogleLogin() {
    const [logindata, setLogindata] = useState(false)
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
                if (res.data.success === true) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulation...',
                        text: res.data.message,
                    })
                }
                else {

                  console.log(res.data.logininfo)
                }
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
            {
                logindata ? (
                    <div>
                        <h4>You Logged in as </h4>
                        <button onClick={() => { handleLogout() }}>Logout</button>
                    </div>

                )
                    :
                    null

            }
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