'use client'

import { ReactNode } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

import { useDropdown } from '@/hooks'
import classNames from 'classnames'
interface DropdownProps {
  children: ReactNode
  button: ReactNode
  className?: string
}

export default function Dropdown({
  children,
  button,
  className
}: DropdownProps) {
  const { isOpen, toggleDropdown, dropdownRef, position, contentRef } =
    useDropdown()

  return (
    <div className='relative z-[1000]' ref={dropdownRef}>
      <button
        className={`flex cursor-pointer items-center gap-1 lg:gap-3 ${className}`}
        onClick={toggleDropdown}
      >
        {button}
        <TiArrowSortedDown size={20} />
      </button>

      {/* Dropdown content */}
      <div
        ref={contentRef}
        className={classNames(
          'absolute mt-2 max-w-[calc(100vw-20px)] min-w-[10rem] shadow-lg transition-all duration-300',
          {
            'scale-100 opacity-100': isOpen,
            'pointer-events-none scale-95 opacity-0': !isOpen,
            'right-0': position === 'right',
            'left-0': position === 'left'
          }
        )}
      >
        {children}
      </div>
    </div>
  )
}
