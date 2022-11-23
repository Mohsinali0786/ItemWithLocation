import { useSelector, useDispatch } from "react-redux"
import LogoutIcon from '@mui/icons-material/Logout';
import { isLoggedin,loginUserData,getAllItems} from '../../Redux/actions'
import Swal from 'sweetalert2'
import { LogoutMessage } from '../../utils/helpers'
import MyGoogleLogin from '../googlelogin'
import {successMessage} from '../../utils/helpers'
function Header() {
    const ISLOGGEDIN = useSelector((state) => state.itemReducer?.ISLOGGEDIN)
    const logginEmail = useSelector((state) => state.itemReducer?.LOGINUSER?.email)

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(isLoggedin(false))
        dispatch(loginUserData(''))
        dispatch(getAllItems([]))

        successMessage('Logout Successfully')
    }
    return (
        <div className="header">
            {
                logginEmail ?
                    <div>
                        <p>{logginEmail}</p>
                        <LogoutIcon className="logiut-btn" onClick={() => { logout() }} />
                    </div>
                    :
                    <MyGoogleLogin/>
            }
        </div>
    )
}
export default Header