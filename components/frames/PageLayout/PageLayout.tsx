import { FC, ReactNode } from 'react'
import { Header } from 'frames/Header/Header'
import { Footer } from '../Footer/Footer'

type Props = {
  children: ReactNode
}

export const PageLayout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="grid grid-rows-[var(--header-height)_1fr_var(--footer-height)] w-screen h-screen">
      <Header />
      <main className="w-4/5 mx-auto">{children}</main>
      <Footer />
    </div>
  )
}
