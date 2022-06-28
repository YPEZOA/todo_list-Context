import styledComponents from 'styled-components'

export const Container = styledComponents.div`
  display: flex;
  position: fixed;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgb(0,0,0,0.5);
  backdrop-filter: blur(10px);
  z-index: 1;
`

export const Brand = styledComponents.a`
  text-decoration: none;
  color: #f2f2f2;
  cursor: pointer;
  margin: 0px 20px;
  &:hover {
  transform: rotate(-20deg);
}
`

export const TitleBrand = styledComponents.span`
  margin-left: 10px;
  font-size: 17px;
`

export const NavLink = styledComponents.a`
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 3px;
  &::after {
    display: block;
    content: '';
    width: 0;
    height: 2px;
    background: #f2f2f2;
    transition: width .4s;
  }
  &:hover::after {
    width: 100%;
  }
`

export const Links = styledComponents.li`
  color: #f2f2f2;
  list-style: none;
  margin: 0px 10px;
`

export const NavButton = styledComponents.button`
  background: transparent;
  border:none;
  color: #f2f2f2;
  padding: 0;
  margin: 0px 5px;
  cursor: pointer;
  &::after {
    display: block;
    content: '';
    width: 0;
    height: 2px;
    background: #f2f2f2;
    transition: width .4s;
}
  &:hover::after {
    width: 100%;
  }
`

export const MenuList = styledComponents.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: auto;
  right: 0;
  width: 150px;
  padding: 10px;
  margin-top: 195px;
  background-color: #1B2631;
  border-radius: 3px;
  z-index: -1;
`
