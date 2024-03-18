'use client'
import React, { FC, PropsWithChildren } from 'react'
import { Header } from '../modules/Header/Header'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { MobileNavbar } from '../modules/MobileNavbar/MobileNavbar'
import { AnimatePresence, motion } from 'framer-motion'
import { useUnit } from 'effector-react'
import { $searchModalIsOpen, $showQuickViewModal } from '@/context/modals'
import { SearchModal } from '../modules/Header/SearchModal'
import { handleCloseSearchModal } from '@/lib/utils/common'
import { Footer } from '../modules/Footer/Footer'
import { QuickViewModal } from '../modules/MainPage/QuickViewModal/QuickViewModal'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const isMedia800 = useMediaQuery(800)
  const searchModalIsOpen = useUnit($searchModalIsOpen)
  const showQuickViewModal = useUnit($showQuickViewModal)

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
      {!isMedia800 && (
        <AnimatePresence>
          {showQuickViewModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <QuickViewModal />
            </motion.div>
          )}
        </AnimatePresence>
      )}
      <div
        className={`header__search-overlay ${searchModalIsOpen ? 'overlay-active' : ''}`}
        onClick={handleCloseSearchModal}
      />
      <Footer />
    </>
  )
}
