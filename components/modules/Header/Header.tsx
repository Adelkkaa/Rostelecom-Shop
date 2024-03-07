'use client'
import { Logo } from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import React from 'react'

export const Header = () => {
  const { lang, translations } = useLang()
  return (
    <header className='header'>
      <div className='container header_container'>
        <button className='btn-reset header_burger'>
          {translations[lang].header.menu_btn}
        </button>
        <div className='header_logo'>
          <Logo />
        </div>
        <ul className='list-reset'>
          <li>123</li>
        </ul>
      </div>
    </header>
  )
}
