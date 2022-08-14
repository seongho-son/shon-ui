import styled from 'styled-components'
import { Column } from 'components/styles/layout'

export const ShadowBox = styled(Column)`
  box-shadow: 0px 10px 10px 0px ${(p) => p.theme.color.gray4};
  border-radius: 4px;
`
