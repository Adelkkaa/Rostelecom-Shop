'use client'
import { BestsellerGoods } from '@/components/modules/MainPage/BestsellerGoods'
import { BrandLife } from '@/components/modules/MainPage/BrandLife'
import { Categories } from '@/components/modules/MainPage/Categories/Categories'
import { Hero } from '@/components/modules/MainPage/Hero/Hero'
import { NewGoods } from '@/components/modules/MainPage/NewGoods'
import { MainPageGate } from '@/context/goods'
import { useGate } from 'effector-react'
import React from 'react'

export const MainPage = () => {
  useGate(MainPageGate)

  return (
    <>
      <Hero />
      <Categories />
      <NewGoods />
      <BestsellerGoods />
      <BrandLife />
    </>
  )
}
