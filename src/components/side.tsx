import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SubTitle, BaseText } from 'components/text'
import { Column } from 'components/layout'

export const Side = () => {
  return (
    <Main>
      <Menu>
        <SubTitle className='title'>Input</SubTitle>
        <Link to='/button'>
          <BaseText className='sub'>Button</BaseText>
        </Link>
      </Menu>
    </Main>
  )
}

const Main = styled.aside`
  width: 250px;
  background-color: ${(p) => p.theme.color.gray4};
`

const Menu = styled(Column)`
  gap: 10px;
  .title {
    padding: 10px;
  }
  .sub {
    padding: 10px 20px;
  }
`