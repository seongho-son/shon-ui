import React from 'react'

type Type = 'default' | 'contained' | 'underline'

type Size = 'small' | 'medium' | 'large'

type Position = 'top' | 'bottom'

export interface Select {
  children: React.ReactNode
  size?: Size
  type?: Type
  position?: Position
  value?: string
  isOpen?: boolean
  disabled?: boolean
  onOpen?: Function
  onClose?: Function
  onChange?: (v: string) => void
}
