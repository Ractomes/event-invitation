import React from 'react'
import Image from 'next/image';
import classNames from 'classnames';

const Download = ({className, ...props}:React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={classNames('bg-primary-500 inline-flex gap-4 py-[6px] px-4 rounded-lg',className)}>
      <p className='font-medium text-xs leading-5 text-custom-white-500'>Unduh File</p>
      <Image src="/svgs/Download.svg" alt='' width={20} height={20} />
    </div>
  )
}

export default Download