'use client'
import { Logo } from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
import React from 'react'
import { Menu } from './Menu'
import { openMenu, openSearchModal } from '@/context/modals'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import CartPopup from '../CartPopup/CartPopup'

export const Header = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
  }

  const handleOpenSearchModal = () => {
    addOverflowHiddenToBody()
    openSearchModal()
  }
  return (
    <header className='header'>
      <div className='container header__container'>
        <button onClick={handleOpenMenu} className='header__burger'>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links'>
          <li className='header__links__item'>
            <button
              onClick={handleOpenSearchModal}
              className='header__links__item__btn header__links__item__btn--search'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/compare'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            <CartPopup />
          </li>
          <li className='header__links__item'>
            <Link
              href='/profile'
              className='header__links__item__btn header__links__item__btn--profile'
            />
          </li>
        </ul>
      </div>
    </header>
  )
}
