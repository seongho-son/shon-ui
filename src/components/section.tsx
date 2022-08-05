import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Heading1 } from 'components/text'

export const Section = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  return (
    <Main>
      <Head>{location.pathname.slice(1)}</Head>
      {children}
    </Main>
  )
}
export const Main = styled.section`
  padding: 20px;
`

export const Head = styled(Heading1)`
  margin-bottom: 40px;
`
