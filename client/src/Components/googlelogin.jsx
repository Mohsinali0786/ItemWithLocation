import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { googleClientId } from '../utils/constants'

export default function MyGoogleLogin() {
    const [logindata, setLogindata] = useState(false)
    const responseGoogle = (response) => {
        console.log('failure', response);
    }
    const handleLogin = (response) => {
        console.log('response', response);

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
                buttonText="Google"
                onSuccess={handleLogin}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}