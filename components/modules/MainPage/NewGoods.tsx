'use client'

import { useUnit } from 'effector-react'
import React from 'react'

import { $newProducts } from '@/context/goods'
import { getNewProductsFx } from '@/api/main-page'
import { useLang } from '@/hooks/useLang'
import MainPageSection from './MainPageSections'

export const NewGoods = () => {
  const goods = useUnit($newProducts)
  const spinner = useUnit(getNewProductsFx.pending)
  const { lang, translations } = useLang()

  return (
    <MainPageSection
      title={translations[lang].main_page.new_title}
      goods={goods}
      spinner={spinner}
    />
  )
}
