import { Logo } from '@/components/elements/Logo/Logo'
import { AllowedLangs } from '@/constants/lang'
import { setLang } from '@/context/lang'
import { $menuIsOpen, closeMenu } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'

export const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)

  const { lang, translations } = useLang()

  const menuIsOpen = useUnit($menuIsOpen)

  const handleSwitchLang = (lang: AllowedLangs) => {
    setLang(lang)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang(AllowedLangs.RU)
  const handleSwitchLangToEn = () => handleSwitchLang(AllowedLangs.EN)

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='container nav-menu__container'>
        <div className={`nav-menu__logo ${menuIsOpen ? 'open' : ''}`}>
          <Logo />
        </div>
        <img
          className={`nav-menu__bg ${menuIsOpen ? 'open' : ''}`}
          src='/img/menu-bg.png'
          alt='menu background'
        />
        <button
          onClick={handleCloseMenu}
          className={`nav-menu__close ${menuIsOpen ? 'open' : ''}`}
        />
        <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
          <button
            className={`nav-menu__lang__btn ${lang === 'ru' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToRu}
          >
            RU
          </button>
          <button
            className={`nav-menu__lang__btn ${lang === 'en' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToEn}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  )
}
