import { IProductCounterProps } from '@/types/goods'
import React from 'react'

export const ProductCounter = ({
  className,
  count,
  //   initialCount,
  //   totalCount,
  //   setCount,
  //   increasePrice,
  //   decreasePrice,
  //   cartItem,
  //   updateCountAsync,
}: Partial<IProductCounterProps>) => (
  <div className={className}>
    <button
      className='btn-reset'
      //   onClick={decrease}
      //   disabled={disableDecrease || spinner}
    />
    <span>
      {count}
      {/* {spinner ? <FontAwesomeIcon icon={faSpinner} spin /> : count} */}
    </span>
    <button
    //   onClick={increase}
    //   disabled={disableIncrease || spinner}
    />
  </div>
)
