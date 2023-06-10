import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <section className='min-h-screen min-w-screen flex flex-col justify-center bg-[url("/assets/x-image.png")] bg-no-repeat bg-right-bottom bg-[length:auto_70%]'>
      <div className="container">
        <div className=' max-w-[609px]'>
          <h1 className='mb-5 text-60'>Make impact in Digital transformation</h1>

          <p className='text-14 max-w-[450px] mb-10 leading-relaxed'>Lorem ipsum dolor sit amet consectetur. Cursus lorem faucibus turpis semper est. Scelerisque felis pharetra laoreet dolor in erat aenean donec. Quis velit tincidunt pharetra leo et magna congue torto</p>


          <Link to={'/dashboard'}>
            <Button variant='contained'
              className='!bg-gradient-to-r from-[#00FFB9] to-[#00E6DC] !rounded-none !text-16 !text-black w-full max-w-[160px] font-semibold'
            >
              Start
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute left-0 bottom-[63px] w-full">
        <div className="container text-14 text-[#9999A9]">
          Version 1.0 <br />
          © 2023 All rights reserved
        </div>
      </div>
    </section>
  )
}

export default HomePage