'use client'

import { useUnit } from 'effector-react'
import React from 'react'

import { $bestsellerProducts } from '@/context/goods'
import { getBestsellersProductsFx } from '@/api/main-page'
import { useLang } from '@/hooks/useLang'
import MainPageSection from './MainPageSections'

export const BestsellerGoods = () => {
  const goods = useUnit($bestsellerProducts)
  const spinner = useUnit(getBestsellersProductsFx.pending)
  const { lang, translations } = useLang()

  return (
    <MainPageSection
      title={translations[lang].main_page.bestsellers_title}
      goods={goods}
      spinner={spinner}
    />
  )
}
