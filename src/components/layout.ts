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
