'use client'
import {
  closeCatalogMenu,
  closeMenu,
  openCatalogMenu,
  openMenu,
} from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { addOverflowHiddenFromBody } from '@/lib/utils/common'
import Link from 'next/link'
import React from 'react'
import { CatalogMenu } from '../Header/CatalogMenu'

export const MobileNavbar = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenFromBody()
    openMenu()
    closeCatalogMenu()
  }

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenFromBody('0')
    openCatalogMenu()
    closeMenu()
  }
  return (
    <>
      <CatalogMenu />
      <div className='mobile-navbar'>
        <Link href='/' className='mobile-navbar__btn'>
          {translations[lang].breadcrumbs.main}
        </Link>
        <button onClick={handleOpenCatalogMenu} className='mobile-navbar__btn'>
          {translations[lang].breadcrumbs.catalog}
        </button>
        <Link className='btn-reset mobile-navbar__btn' href='/favorites'>
          {translations[lang].breadcrumbs.favorites}
        </Link>
        <Link className='btn-reset mobile-navbar__btn' href='/cart'>
          <span className='not-empty not-empty-mobile' />
          {translations[lang].breadcrumbs.cart}
        </Link>
        <button
          onClick={handleOpenMenu}
          className='btn-reset mobile-navbar__btn'
        >
          {translations[lang].common.more}
        </button>
      </div>
    </>
  )
}
