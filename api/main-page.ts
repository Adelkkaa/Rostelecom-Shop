import { createEffect } from 'effector'
import baseApi from './apiInstance'

export const getNewProductsFx = createEffect(async () => {
  const { data } = await baseApi.get('/api/goods/new')

  return data
})

export const getBestsellersProductsFx = createEffect(async () => {
  const { data } = await baseApi.get('/api/goods/bestsellers')

  return data
})
