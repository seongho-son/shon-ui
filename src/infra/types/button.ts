import React from 'react'

type Color = 'default' | 'primary' | 'secondary'

type Type = 'default' | 'contained' | 'outlined'

type Size = 'small' | 'medium' | 'large'

export interface Button {
  children: React.ReactNode
  variant?: Type
  color?: Color
  size?: Size
  disabled?: boolean
  onClick?: () => void
}
