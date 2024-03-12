'use client'
import React, { FC, PropsWithChildren } from 'react'
import { Header } from '../modules/Header/Header'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { MobileNavbar } from '../modules/MobileNavbar/MobileNavbar'
import { AnimatePresence, motion } from 'framer-motion'
import { useUnit } from 'effector-react'
import { $searchModalIsOpen } from '@/context/modals'
import { SearchModal } from '../modules/Header/SearchModal'
import { handleCloseSearchModal } from '@/lib/utils/common'
import { Footer } from '../modules/Footer/Footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const isMedia800 = useMediaQuery(800)
  const searchModalIsOpen = useUnit($searchModalIsOpen)
  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <AnimatePresence>
        {searchModalIsOpen && (
          <motion.div
            initial={{ opacity: 0, zIndex: 102 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchModal />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`header__search-overlay ${searchModalIsOpen ? 'overlay-active' : ''}`}
        onClick={handleCloseSearchModal}
      />
      <Footer />
    </>
  )
}
