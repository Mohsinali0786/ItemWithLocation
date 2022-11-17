import React from 'react'
import { hot } from 'react-hot-loader/root'
import AOS from 'aos'
import { Routes } from './Config/routes'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import 'antd/dist/antd.min.css'
import Home from './Screens/Home/Home'

AOS.init()

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
      secondMain: '#1890ff'
    }
  }
})

const App = () => {

  return (
    <div>
      <Home/>
      {/* <ThemeProvider theme={theme}> */}
        {/* <Routes />
        HELLO USER.... */}
      {/* </ThemeProvider> */}
    </div>
  )
}

export default hot(App)