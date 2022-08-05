export type Color = 'default' | 'primary' | 'secondary'

export type Type = 'default' | 'contained' | 'outlined'

export type Size = 'small' | 'medium' | 'large'

export interface Checkbox {
  label?: string
  checked?: boolean
  color?: Color
  size?: Size
  customColor?: string
  disabled?: boolean
  onChange?: () => void
}
