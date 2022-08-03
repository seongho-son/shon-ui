import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Button from 'pages/button'
import { Side } from 'components/side'
import styled from 'styled-components'
import { Row } from 'components/layout'
import Home from 'pages/home'

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Side />
        <Section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/button' element={<Button />} />
          </Routes>
        </Section>
      </BrowserRouter>
    </Main>
  )
}

export default App

export const Main = styled(Row)`
  height: 100%;
`

export const Section = styled.section`
  padding: 20px;
`
