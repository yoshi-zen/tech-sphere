import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PageLayout: FC<Props> = ({ children }: Props) => {
  return <main className="w-[92vw] max-w-[1280px] mx-auto">{children}</main>
}
