import Image from 'next/image'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="relative w-1/2">
        <Image
          src="/images/TechSphereBanner.png"
          alt="TechSphere Logo"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="flex items-center justify-center md:hidden">
        <ul className="flex gap-8 items-center">
          <li>ブログ</li>
          <li>About us</li>
          <li className="px-3 py-1 bg-black text-white rounded-md">ログイン</li>
        </ul>
      </div>
    </div>
  )
}
