import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import './../App.css'

const Banner = () => {
  return (
    <div className='banner'>
      <h1>Best food waiting for your belly</h1>

      <div className='col-lg-3 col-md-6 col-sm-6'>
        <InputGroup className='my-2 rounded-pill '>
          <FormControl
            placeholder='search food names'
            aria-label='search food names'
            aria-describedby='basic-addon2'
          ></FormControl>
          <Button variant='danger' size='lg' className='ext-white'>
            Search
          </Button>
          {/* <InputGroup.Text
            id='basic-addon2'
            className='bg-danger text-white rounded-pill'
            size='lg'
          >
            Search
          </InputGroup.Text> */}
        </InputGroup>
      </div>
    </div>
  )
}

export default Banner
