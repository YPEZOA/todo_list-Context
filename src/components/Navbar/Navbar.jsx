import { faBars, faThumbTack } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HideAt, ShowAt } from 'react-with-breakpoints'
import { motion } from 'framer-motion'
import Icona from '../Icon/Icon'
import * as St from './Navbar.styled'

const NavButton = ({ href, children, ...props }) => {
  const location = useLocation()
  const active = location.pathname === href

  return (
    <St.NavLink
      href={active ? '' : href}
      style={{
        backgroundColor: active ? '#81aec1' : undefined,
        color: active ? '#202023' : '#f2f2f2'
      }}
      {...props}
    >
      {children}
    </St.NavLink>
  )
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <St.Container>
      <St.Brand href="/user/home">
        <Icona
          iconType={faThumbTack}
          style={{ fontSize: 25, color: '#f2f2f2' }}
        />
      </St.Brand>
      <HideAt breakpoint="small">
        <St.Links>
          <NavButton href="/user/home">Inicio</NavButton>
          <NavButton href="/user/calendar">Calendario</NavButton>
          <NavButton
            href="/auth/login"
            style={{ marginLeft: 20, color: '#a3a3a3' }}
          >
            Logout
          </NavButton>
        </St.Links>
      </HideAt>
      <ShowAt breakpoint="small">
        <button
          style={{
            background: 'transparent',
            border: 'none',
            outline: 0,
            color: '#f2f2f2'
          }}
        >
          <Icona
            iconType={faBars}
            style={{
              margin: '0px 20px',
              border: '1px solid #f2f2f2',
              padding: 10,
              borderRadius: 5,
              cursor: 'pointer'
            }}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </button>

        {openMenu && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              right: 0,
              width: '150px',
              backgroundColor: 'rgb(0 14 28)',
              marginTop: '195px',
              borderRadius: 'none',
              padding: 10
            }}
          >
            <NavButton href="/user/home">Inicio</NavButton>
            <NavButton href="/user/calendar">Calendario</NavButton>
            <NavButton href="/auth/login" style={{ color: '#a3a3a3' }}>
              Logout
            </NavButton>
          </motion.div>
        )}
      </ShowAt>
    </St.Container>
  )
}

export default Navbar
