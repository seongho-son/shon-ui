import React from 'react'

export type BtnColor = 'default' | 'primary' | 'secondary'

export type BtnType = 'default' | 'contained' | 'outlined'

export type BtnSize = 'small' | 'medium' | 'large'

export interface Button {
  children?: React.ReactNode
  variant?: BtnType
  color?: BtnColor
  size?: BtnSize
  disabled?: boolean
  onClick?: () => void
}
