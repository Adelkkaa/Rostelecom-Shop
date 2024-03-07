import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import LogoImage from '@/public/img/Logo.svg'

export const Logo = () => (
  <Link className='logo' href='/'>
    <Image src={LogoImage} alt='logo' className='logo_img' />
  </Link>
)
