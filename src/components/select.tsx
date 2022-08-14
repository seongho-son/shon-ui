import { ShadowBox } from 'components/styles/box'
import styled from 'styled-components'
import { Column, Row } from 'components/styles/layout'
import { BaseText } from 'components/styles/text'
import { Select as SelectProps } from 'infra/types/select'
import React, { RefObject, useEffect, useRef } from 'react'

export const Select: React.FC<SelectProps> = ({
  children,
  isOpen,
  size,
  type,
  value,
  onOpen,
  onClose,
  onChange,
  position,
}) => {
  const selectRef = useRef(null)

  const s = size || 'medium'
  const t = type || 'default'
  const p = position || 'bottom'

  useOnClickOutside(selectRef, () => onClose?.())
  return (
    <SelectStyle ref={selectRef}>
      <SelectBox
        onClick={() => (isOpen ? onClose?.() : onOpen?.())}
        size={s}
        type={t}
      >
        <BaseText>{value}</BaseText>
        <Image
          src={`icons/chevron-${isOpen ? 'up' : 'down'}-black2.svg`}
          alt='down'
          width={18}
        />
      </SelectBox>
      {isOpen && (
        <OptionBox
          position={p}
          size={s}
          onClick={(v: React.MouseEvent<HTMLDivElement>) => {
            onChange?.((v.target as HTMLElement).innerText)
            onClose?.()
          }}
        >
          {children}
        </OptionBox>
      )}
    </SelectStyle>
  )
}

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (e: MouseEvent) => void,
) {
  const listener = (e: MouseEvent) => {
    const el = ref?.current
    if (!el || el.contains(e.target as Node)) {
      return
    }
    handler(e)
  }
  useEffect(() => {
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [])
}

export const Option = styled(BaseText)`
  padding: 10px 15px;
  white-space: nowrap;
  cursor: pointer;
  :hover {
    background-color: ${(p) => p.theme.color.gray4};
  }
`

const OptionBox = styled(ShadowBox)<{
  size: string
  position: string
}>`
  top: ${(p) =>
    p.position === 'bottom' ? p.theme.optionTop[`${p.size}`] : ''};
  bottom: ${(p) => (p.position === 'top' ? '60px' : '')};
  min-width: ${(p) => p.theme.selectWidth[`${p.size}`]};
  max-height: 130px;
  position: absolute;
  overflow: hidden auto;
  background-color: ${(p) => p.theme.color.white1};
`

const SelectStyle = styled(Column)`
  position: relative;
`

const SelectBox = styled(Row)<{
  size: string
  type: string
}>`
  justify-content: space-between;
  padding: ${(p) => p.theme.selectSize[`${p.size}`]};
  min-width: ${(p) => p.theme.selectWidth[`${p.size}`]};
  border: ${(p) =>
    p.type === 'contained' ? `1px solid ${p.theme.color.gray2}` : ''};
  border-bottom: ${(p) =>
    p.type === 'underline' ? `1px solid ${p.theme.color.black1}` : ''};
  border-radius: ${(p) => (p.type === 'contained' ? '4px' : '')};
  cursor: pointer;
`

const Image = styled.img`
  margin-left: 5px;
`
