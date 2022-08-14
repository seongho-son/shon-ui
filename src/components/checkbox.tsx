import { Checkbox as CheckboxProps } from 'infra/types/checkbox'
import React from 'react'
import { BaseText } from 'components/styles/text'
import styled from 'styled-components'
import { Row } from 'components/styles/layout'

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  color,
  size,
  customColor,
  disabled,
  onChange,
}) => {
  const c = color || 'default'
  const s = size || 'medium'

  return (
    <CheckboxStyle
      onClick={() => {
        if (!disabled) onChange?.()
      }}
      disabled={disabled}
    >
      <Box
        color={c}
        size={s}
        checked={checked}
        disabled={disabled}
        customColor={customColor}
      >
        {checked && <Image src='icons/check-white1.svg' alt='check' size={s} />}
      </Box>
      <Desc disabled={disabled}>{label}</Desc>
    </CheckboxStyle>
  )
}

const CheckboxStyle = styled(Row)<CheckboxProps>`
  gap: 10px;
  align-items: center;
  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
`

const Desc = styled(BaseText)<CheckboxProps>`
  color: ${(p) => (p.disabled ? p.theme.color.gray2 : p.theme.color.black1)};
`

const Image = styled.img<CheckboxProps>`
  width: ${(p) => p.theme.checkboxSize[`${p.size}`]};
  height: ${(p) => p.theme.checkboxSize[`${p.size}`]};
`

const Box = styled.div<CheckboxProps>`
  width: ${(p) => p.theme.checkboxSize[`${p.size}`]};
  height: ${(p) => p.theme.checkboxSize[`${p.size}`]};
  background-color: ${(p) =>
    p.checked
      ? p.customColor
        ? p.customColor
        : p.disabled
        ? p.theme.color.gray2
        : p.theme.color[`${p.color}`]
      : 'none'};
  border: ${(p) =>
    p.checked
      ? 0
      : `1.5px solid ${
          p.disabled ? p.theme.color.gray2 : p.theme.color.gray1
        }`};
  border-radius: 2px;
`
