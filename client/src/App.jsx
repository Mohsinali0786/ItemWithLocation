import React from 'react'
// import { hot } from 'react-hot-loader/root'
// import AOS from 'aos'
import { Routes } from './Config/routes'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import 'antd/dist/antd.min.css'
import UploadImageComponent from './Components/uploadimage/uploadimg'
import {Home} from './Screens/index'
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
      {/* <ThemeProvider theme={theme}> */}
        <Routes />
        <Home/>
        {/* <UploadImageComponent/> */}
      {/* </ThemeProvider> */}
    </div>
  )
}

export default hot(App)