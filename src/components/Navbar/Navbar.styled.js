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
  z-index: 999;
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
