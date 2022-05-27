import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Login/Login'
import Register from './Login/Register'
import Breakfast from './Components/Breakfast'
import Launch from './Components/Launch'
import Dinner from './Components/Dinner'
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='home/*' element={<Home />}>
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='launch' element={<Launch />} />
          <Route path='dinner' element={<Dinner />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='breakfast' element={<Breakfast />} />
      </Routes>
    </>
  )
}

export default App
