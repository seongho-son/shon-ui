import styled from 'styled-components'

export const Row = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${(p) => (p.gap ? p.gap : 0)}px;
`

export const Column = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(p) => (p.gap ? p.gap : 0)}px;
`
export const ComponentContainer = styled(Column)`
  gap: 10px;
`

export const ComponentWrapper = styled(Row)`
  width: fit-content;
  gap: 20px;
  padding: 30px;
  border: 1px solid ${(p) => p.theme.color.gray4};
  border-radius: 4px;
`
