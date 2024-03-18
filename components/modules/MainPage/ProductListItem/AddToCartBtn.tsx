import { IAddToCartBtnProps } from '@/types/goods'
import React from 'react'

export const AddToCartBtn = ({
  className,
  text,
}: Partial<IAddToCartBtnProps>) => <button className={className}>{text}</button>
