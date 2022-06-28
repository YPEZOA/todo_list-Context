import { faBars, faThumbTack } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HideAt, ShowAt } from 'react-with-breakpoints'
import Icon from '../Icon/Icon'
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
        <Icon
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
          <Icon
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
          <St.MenuList>
            <NavButton href="/user/home">Inicio</NavButton>
            <NavButton href="/user/calendar">Calendario</NavButton>
            <NavButton href="/auth/login" style={{ color: '#a3a3a3' }}>
              Logout
            </NavButton>
          </St.MenuList>
        )}
      </ShowAt>
    </St.Container>
  )
}

export default Navbar
