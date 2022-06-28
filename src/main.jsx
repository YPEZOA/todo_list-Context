import React from 'react'
import ReactDOM from 'react-dom/client'
import { BreakpointsProvider } from 'react-with-breakpoints'
import './main.css'
import AppRouter from './router/AppRouter'

const breakpoints = {
  small: 468,
  medium: 768,
  large: 1024,
  xlarge: Infinity
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BreakpointsProvider breakpoints={breakpoints}>
    <AppRouter />
  </BreakpointsProvider>
)
