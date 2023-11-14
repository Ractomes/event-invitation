"use client"

import React from 'react'
import SearchInput from '../atoms/SearchInput';
import Dropdown from '../molecules/DropDown';
import Download from '../atoms/Download';
import Notification from '../atoms/Notification';
import ProfileIcon from '../atoms/ProfileIcon';

// type

const Navbar = () => {
  const data = [
    {
      title:"Weddings",
    },
    {
      title:"Cattering",
    },
    {
      title:"Test",
    },
  ]
 
  return (
    <nav className='flex items-center justify-between pl-4 relative'>
      <div className='flex gap-8 items-center'>
          <Dropdown Data={data}/>
          <SearchInput onClick={()=> console.log("test")
          }/>
      </div>
      <div className='flex gap-4 items-center'>
          <Download/>
          <Notification/>
          <ProfileIcon src='/images/Image-60.png' alt='profile'/>
      </div>
    </nav>
  )
}

export default Navbar