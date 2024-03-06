'use client'

import { FC } from 'react'
import { BsDisplay, BsMoon, BsSun } from 'react-icons/bs'

export const ColorThemeButton: FC = () => {
  return (
    <div className="flex items-center gap-2 p-1 rounded-full border border-solid border-gray-400">
      <div className="p-2 rounded-full bg-white text-black">
        <BsSun />
      </div>
      <div className="p-2 rounded-full">
        <BsDisplay />
      </div>
      <div className="p-2 rounded-full">
        <BsMoon />
      </div>
    </div>
  )
}
