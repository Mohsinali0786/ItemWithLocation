import { useSelector, useDispatch } from "react-redux"
import LogoutIcon from '@mui/icons-material/Logout';
import { isLoggedin } from '../../Redux/actions'
import Swal from 'sweetalert2'
import { LogoutMessage } from '../../utils/helpers'
import MyGoogleLogin from '../googlelogin'
import {successMessage} from '../../utils/helpers'


function Header() {
    const ISLOGGEDIN = useSelector((state) => state.itemReducer?.ISLOGGEDIN)
    const logginEmail = useSelector((state) => state.itemReducer?.LOGINUSER?.email)
    console.log(logginEmail,'LogininEmail')

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(isLoggedin(false))
        successMessage('Logout Successfully')
        
    }
    return (
        <div className="header">
            {
                ISLOGGEDIN ?
                    <div>
                        <p>{logginEmail}</p>
                        <LogoutIcon onClick={() => { logout() }} />
                    </div>
                    :
                    <MyGoogleLogin/>
            }

        </div>
    )
}
export default Header