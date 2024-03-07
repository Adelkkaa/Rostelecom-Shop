import React, { FC, PropsWithChildren } from 'react'
import { Header } from '../modules/Header/Header'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
    <div className='' />
  </>
)
