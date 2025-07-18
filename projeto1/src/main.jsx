import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar, SubNavbar } from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <SubNavbar />
  </StrictMode>,
)
