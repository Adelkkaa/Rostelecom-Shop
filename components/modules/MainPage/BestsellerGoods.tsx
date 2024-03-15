'use client'

import { useUnit } from 'effector-react'
import React from 'react'

import { $bestsellerProducts } from '@/context/goods'

export const BestsellerGoods = () => {
  const goods = useUnit($bestsellerProducts)

  console.log(goods)
  return <div>BestsellerGoods</div>
}
