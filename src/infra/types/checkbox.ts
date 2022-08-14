type Color = 'default' | 'primary' | 'secondary'

type Size = 'small' | 'medium' | 'large'

export interface Checkbox {
  label?: string
  checked?: boolean
  color?: Color
  size?: Size
  customColor?: string
  disabled?: boolean
  onChange?: () => void
}
