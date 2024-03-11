'use client'
import { Logo } from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
import React from 'react'
import { Menu } from './Menu'
import { openMenu } from '@/context/modals'
import { addOverflowHiddenFromBody } from '@/lib/utils/common'

export const Header = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenFromBody()
    openMenu()
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
            <button className='header__links__item__btn header__links__item__btn--search'>
              123
            </button>
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
            <Link
              href='/cart'
              className='header__links__item__btn header__links__item__btn--cart'
            />
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
