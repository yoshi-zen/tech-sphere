import { ColorThemeButton } from '@/components/elements/ColorThemeButton/ColorThemeButton'
import Image from 'next/image'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="sticky top-0 left-0 w-full px-12 border-b border-solid border-gray-500 bg-black after:block after:absolute after:left-0 after:bottom-0 after:translate-y-[1px] after:h-[2px] after:w-1/2 after:bg-gradient-to-r after:from-black after:via-white after:to-black after:rounded-full after:animate-loop">
      <nav className="h-[var(--header-height)] flex justify-between w-full max-w-[1280px] mx-auto">
        <div className="relative w-1/3 my-2 md:w-1/2">
          <Image
            src="/images/TechSphereBanner.png"
            alt="TechSphere Logo"
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="flex items-center gap-10 justify-center md:hidden">
          <ColorThemeButton />
          <ul className="flex gap-8 items-center">
            <li>ブログ</li>
            <li>About us</li>
            <li className="px-3 py-1 bg-black text-white rounded-md dark:bg-white dark:text-black">
              ログイン
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
