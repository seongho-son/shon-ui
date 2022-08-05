import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Side } from 'components/side'
import styled from 'styled-components'
import { Row } from 'components/layout'
import Home from 'pages/home'
import Button from 'pages/button'
import Checkbox from 'pages/checkbox'
import { Section } from 'components/section'

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Side />
        <Section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/button' element={<Button />} />
            <Route path='/checkbox' element={<Checkbox />} />
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
