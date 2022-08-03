import { Button as ButtonComponent } from 'components/button'
import { Column, Row } from 'components/layout'
import { Heading1, SubTitle } from 'components/text'
import styled from 'styled-components'

function Button() {
  return (
    <Column gap={40}>
      <Heading1>Button</Heading1>
      <Column gap={10}>
        <SubTitle>Default</SubTitle>
        <ComponentWrapper>
          <ButtonComponent variant='default' color='default'>
            DEFAULT
          </ButtonComponent>
          <ButtonComponent variant='default' color='primary'>
            PRIMARY
          </ButtonComponent>
          <ButtonComponent variant='default' color='secondary'>
            SECONDARY
          </ButtonComponent>
          <ButtonComponent variant='default' disabled>
            DISABLED
          </ButtonComponent>
        </ComponentWrapper>
      </Column>
      <Column gap={10}>
        <SubTitle>Contained</SubTitle>
        <ComponentWrapper>
          <ButtonComponent variant='contained' color='default'>
            DEFAULT
          </ButtonComponent>
          <ButtonComponent variant='contained' color='primary'>
            PRIMARY
          </ButtonComponent>
          <ButtonComponent variant='contained' color='secondary'>
            SECONDARY
          </ButtonComponent>
          <ButtonComponent variant='contained' disabled>
            DISABLED
          </ButtonComponent>
        </ComponentWrapper>
      </Column>
      <Column gap={10}>
        <SubTitle>Outlined</SubTitle>
        <ComponentWrapper>
          <ButtonComponent variant='outlined' color='default'>
            DEFAULT
          </ButtonComponent>
          <ButtonComponent variant='outlined' color='primary'>
            PRIMARY
          </ButtonComponent>
          <ButtonComponent variant='outlined' color='secondary'>
            SECONDARY
          </ButtonComponent>
          <ButtonComponent variant='outlined' disabled>
            DISABLED
          </ButtonComponent>
        </ComponentWrapper>
      </Column>
    </Column>
  )
}

export default Button

const ComponentWrapper = styled(Row)`
  width: fit-content;
  gap: 20px;
  padding: 30px;
  border: 1px solid ${(p) => p.theme.color.gray4};
  border-radius: 4px;
`
