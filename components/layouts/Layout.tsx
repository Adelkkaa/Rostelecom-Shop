'use client'
import React, { FC, PropsWithChildren } from 'react'
import { Header } from '../modules/Header/Header'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { MobileNavbar } from '../modules/MobileNavbar/MobileNavbar'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const isMedia800 = useMediaQuery(800)
  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <div className='' />
    </>
  )
}
