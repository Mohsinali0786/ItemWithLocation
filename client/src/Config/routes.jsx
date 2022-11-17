import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {  } from '../Screens'

import { Result, Button } from 'antd'

const Page404 = (props) => {
    const { history } = props
    return (
        <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={<Button
                type='primary'
                className='form-button'
                onClick={() => history.push('/')}
            >Back Home</Button>}
        />
    )
}

const Routes = () => {

    return (
        <Router>
            <Switch>
               
                <Route path='/:page404' exact component={Page404} />
            </Switch >
        </Router >
    )
}

export {
    Routes,
    Page404
}