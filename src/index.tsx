import 'styles/global.css'
import 'styles/reset.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import { ThemeProvider } from 'styled-components'
import { theme } from 'infra/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
