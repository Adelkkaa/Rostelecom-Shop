import React, { MouseEventHandler } from 'react'

export interface IAccordionProps {
  children: React.ReactNode
  title: string
  titleClass: string
  rotateIconClass?: string
}

export interface IMenuLinkItemProps {
  item: {
    id: number
    text: string
    href: string
  }
  handleRedirectToCatalog: (arg: string) => void
}

export interface ICatalogMenuButtonProps {
  name: string
  isActive: boolean
  handler: MouseEventHandler<HTMLButtonElement>
}

export interface ICatalogMenuListProps {
  items: string[]
}
