import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Side } from 'components/side'
import styled from 'styled-components'
import { Row } from 'components/styles/layout'
import { Section } from 'components/section'

import Home from 'pages/home'
import Button from 'pages/button'
import Checkbox from 'pages/checkbox'
import Select from 'pages/select'

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
            <Route path='/select' element={<Select />} />
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
