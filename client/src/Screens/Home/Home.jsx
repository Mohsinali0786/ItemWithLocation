import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { requiredMessage, inputPlace } from '../../utils/helpers'

const Home = (props) => {
    const user = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()
    const [state, updateState] = useState({
    })
    
    const onFinish = (value) => {

    }

    return (
        <div className='home-main'>
            Hello
        </div>
    )
}

export default Home