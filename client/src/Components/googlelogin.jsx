import { useState } from 'react';
import GoogleLogin from 'react-google-login';
export default function MyGoogleLogin() {
    const [logindata,setLogindata]=useState(false)
    const responseGoogle = (response) => {
        console.log('failure',response);
    }
    const handleLogin=(response)=>{
        console.log('response',response);

    }
    const handleLogout=(response)=>{
        console.log(response);
    }
    return (
        <div>
            {
                logindata?(
                    <div>
                        <h4>You Logged in as </h4>
                        <button onClick={()=>{handleLogout()}}>Logout</button>
                    </div>
    
                )
                :
                ""


            }
            <GoogleLogin
                clientId="948935625327-e5qssmnkteoacfjru7rq0av4sgg77sb3.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={handleLogin}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}