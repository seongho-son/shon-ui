import styled from 'styled-components'
import React from 'react'
import { Button as ButtonProps } from 'infra/types/button'

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  color,
  size,
  disabled,
  onClick,
}) => {
  const v = variant || 'default'
  const c = color || 'default'
  const s = size || 'medium'
  const d = disabled || false
  return (
    <ButtonStyle
      color={c}
      size={s}
      disabled={d}
      className={v}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  )
}

export const ButtonStyle = styled.button<ButtonProps>`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.default};
  padding: ${(p) => p.theme.btnSize[`${p.size}`]};
  border-radius: 4px;
  :not(:disabled) {
    cursor: pointer;
  }
  &.default {
    background-color: ${(p) => p.theme.color.white1};
    color: ${(p) =>
      p.disabled
        ? p.theme.color.gray2
        : p.color === 'default'
        ? p.theme.color.black1
        : p.theme.color[`${p.color}`]};
    border: none;
  }
  &.contained {
    background-color: ${(p) =>
      p.disabled ? p.theme.color.disabled : p.theme.color[`${p.color}`]};
    color: ${(p) =>
      p.disabled
        ? p.theme.color.gray2
        : p.color === 'default'
        ? p.theme.color.black1
        : p.theme.color.white1};
    border: none;
    box-shadow: ${(p) => (p.disabled ? '' : '0px 0px 5px 0px #888888')};
  }
  &.outlined {
    background-color: ${(p) => p.theme.color.white1};
    border: 1px solid
      ${(p) =>
        p.disabled ? p.theme.color.disabled : p.theme.color[`${p.color}`]};
    color: ${(p) =>
      p.disabled
        ? p.theme.color.gray2
        : p.color === 'default'
        ? p.theme.color.black1
        : p.theme.color[`${p.color}`]};
  }
`
