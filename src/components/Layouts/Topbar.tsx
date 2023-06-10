import React from 'react'
import { AppIcon, LogoutIcon } from '../Icons'
import { IconButton } from '@mui/material'

const Topbar = () => {
  return (
    <div className="w-full flex items-center px-[8px] py-[5px] bg-[#23233C]">
      <IconButton className='!rounded-sm'>
        <AppIcon />
      </IconButton>
      <div className="ml-[65px] flex justify-between items-center w-full">
        Application Process
        <IconButton className='!rounded-sm'>
          <LogoutIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Topbar