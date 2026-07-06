import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Amader from './amader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Amader/>
  </StrictMode>,
)

