import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Login/Login'
import Register from './Login/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
