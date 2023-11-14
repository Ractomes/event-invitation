import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

const Notification = ({className, ...props}:React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={classNames('active:rotate-12 duration-100 ease-in-out',className)}>
        <Image src="/svgs/Notification.svg" alt='' width={20} height={20}/>
    </div>
  )
}

export default Notification