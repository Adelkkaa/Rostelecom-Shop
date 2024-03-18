'use client'
import { $showQuickViewModal, closeQuickViewModal } from '@/context/modals'
import { useUnit } from 'effector-react'
import React, { FC, PropsWithChildren } from 'react'
import { Layout } from './Layout'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'

export const PagesLayout: FC<PropsWithChildren> = ({ children }) => {
  const showQuickViewModal = useUnit($showQuickViewModal)

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody()
    closeQuickViewModal()
  }
  return (
    <html lang='ru'>
      <body>
        <Layout>{children}</Layout>
        <div
          className={`quick-view-modal-overlay ${showQuickViewModal ? 'overlay-active' : ''}`}
          onClick={handleCloseQuickViewModal}
        />
      </body>
    </html>
  )
}
