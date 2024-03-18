'use client'
import { Effect, createDomain, sample } from 'effector'
import { Gate, createGate } from 'effector-react'

import { getBestsellersProductsFx, getNewProductsFx } from '@/api/main-page'
import { IProduct } from '@/types/common'
import { loadOneProductFx } from '@/api/goods'
import { ILoadOneProductFx } from '@/types/goods'

const goods = createDomain()

export const MainPageGate = createGate()

export const setCurrentProduct = goods.createEvent<IProduct>()
export const loadOneProduct = goods.createEvent<ILoadOneProductFx>()

const goodStoreInstance = (effect: Effect<void, [], Error>) =>
  goods
    .createStore([])
    .on(effect.done, (_, { result }) => result)
    .on(effect.fail, (_, { error }) => {
      console.log(error.message)
    })

const goodsSampleInstance = (
  effect: Effect<void, [], Error>,
  gate: Gate<unknown>
) => sample({ clock: gate.open, target: effect })

export const $newProducts = goodStoreInstance(getNewProductsFx)
export const $bestsellerProducts = goodStoreInstance(getBestsellersProductsFx)

goodsSampleInstance(getNewProductsFx, MainPageGate)
goodsSampleInstance(getBestsellersProductsFx, MainPageGate)

export const $currentProduct = goods
  .createStore<IProduct>({} as IProduct)
  .on(setCurrentProduct, (_, product) => product)
  .on(loadOneProductFx.done, (_, { result }) => result.productItem)

sample({
  clock: loadOneProduct,
  to: loadOneProductFx,
})
