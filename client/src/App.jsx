import React from 'react'
// import { hot } from 'react-hot-loader/root'
// import AOS from 'aos'
import { Routes } from './Config/routes'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import 'antd/dist/antd.min.css'
import UploadImageComponent from './Components/uploadimage/uploadimg'
import Home from './Screens/Home/Home'
// AOS.init()

const App = () => {

  return (
    <div>
      <Home />
    </div>
  )
}

export default App