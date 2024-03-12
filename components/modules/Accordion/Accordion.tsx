import { IAccordionProps } from '@/types/modules'
import { AnimatePresence, motion } from 'framer-motion'
import React, { FC, useState } from 'react'

export const Accordion: FC<IAccordionProps> = ({
  title,
  titleClass,
  rotateIconClass,
  children,
}) => {
  const [expanded, setExpanded] = useState(false)
  const toggleAccordion = () => setExpanded((prev) => !prev)
  return (
    <>
      <motion.button
        initial={false}
        onClick={toggleAccordion}
        className={`${titleClass} ${
          rotateIconClass ? (expanded ? rotateIconClass : '') : ''
        }`}
      >
        {title}
      </motion.button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            style={{ overflow: 'hidden' }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
