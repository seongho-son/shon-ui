import styled from 'styled-components'

export const BaseText = styled.span`
  color: ${(p) => p.theme.color.black1};
  font-size: ${(p) => p.theme.fontSize.default};
  font-weight: ${(p) => p.theme.fontWeight.medium};
`

export const BoldText = styled(BaseText)`
  font-weight: ${(p) => p.theme.fontWeight.bold};
`

export const SubTitle = styled(BaseText)`
  font-size: ${(p) => p.theme.fontSize.h5};
`

export const Heading1 = styled.h1`
  color: ${(p) => p.theme.color.black1};
  font-size: ${(p) => p.theme.fontSize.h1};
  font-weight: ${(p) => p.theme.fontWeight.bold};
`
