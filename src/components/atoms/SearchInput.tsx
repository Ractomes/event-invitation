import React from 'react'
import style from "./SearchInput.module.css"
import Image from 'next/image'
import classNames from 'classnames'

// type
import {SearchType} from "@/types/searchtypes"

const SearchInput = ({ className, onClick, ...props}:SearchType) => {
  return (
    <div className={classNames('flex items-center',className)}>
      <span onClick={onClick} className={`${style["form-control-feedback"]} cursor-pointer hover:rotate-90 duration-150 ease-in-out`}>
        <Image src="/svgs/Search.svg" width={20} height={20} alt=''/>
      </span>
      <input type="text" {...props} className={`${style["form-control"]} bg-primary-150 font-normal text-sm text-accent-300`} placeholder="Search or type a command"/>
    </div>
  )
}

export default SearchInput