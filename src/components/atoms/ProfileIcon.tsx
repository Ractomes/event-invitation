import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

// type
import { Profile } from '@/types/profiletypes'

const ProfileIcon = ({alt,src,className, ...props}:Profile) => {
  return (
    <div {...props} className={classNames('rounded-[50%]',className)}>
        <Image src={src} className='object-cover' alt={alt} width={60} height={60}/>
    </div>
  )
}

export default ProfileIcon