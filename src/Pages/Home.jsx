import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Banner from '../Components/Banner'
import ChooseUs from '../Components/ChooseUs'

const Home = () => {
  return (
    <>
      <Banner />

      <h4 className='text-center  d-xs-flex flex-column '>
        <Link
          to='breakfast '
          className='link-hover text-decoration-none px-1   '
        >
          Breakfast
        </Link>
        <Link to='launch' className='link-hover text-decoration-none px-2 '>
          Launch
        </Link>
        <Link to='dinner' className='link-hover text-decoration-none px-1 '>
          Dinner
        </Link>
      </h4>
      {/* showFood outlet  */}
      <Outlet />

      <ChooseUs />
    </>
  )
}

export default Home
