import { FC, ReactNode } from 'react'
import { Header } from 'frames/Header/Header'
import { Footer } from '../Footer/Footer'

type Props = {
  children: ReactNode
}

export const PageLayout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="grid grid-rows-[50px_1fr_100px] w-[92vw] h-screen max-w-[1280px] mx-auto">
      <Header />
      <main className="w-4/5 mx-auto">{children}</main>
      <Footer />
    </div>
  )
}
