"use client"
import React from 'react'
import { useState } from 'react';

// style
import style from "./DropDown.module.css"

// type
import { DropdownType } from '@/types/dropdown';

const DropDown = ({Data}:DropdownType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [haveText, setHaveText] = useState<string>("")

  const handleClick = () => {
    setIsOpen((v) => !v);
  }

  const handleText = (ev:any) => {
    setHaveText(ev.currentTarget.textContent)
  }

  return (
    <div
      className={
        isOpen ? `${style.dropdown} ${style.active}` : `${style.dropdown}`
      }
      onClick={() => handleClick()}
    >
      <div
        className={`${style.dropdown__text} text-custom-black-450 text-2xl font-medium`}
      >
        {!haveText ? Data[0].title : haveText}
      </div>
      <div className={`${style.dropdown__items}`}>
        {Data.map(({ title }, i) => {
          return (
            <div
              onClick={(e) => handleText(e)}
              className={`${style.dropdown__item}`}
              key={i}
            >
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DropDown
