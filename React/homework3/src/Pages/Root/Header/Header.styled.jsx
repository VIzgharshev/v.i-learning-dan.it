import styled from "styled-components";

export const HeaderWrapper = styled.header`
  max-width: 1100px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 50px;
    position: relative;
    top: -15px;
  }

  img::after {
    content: '';
    display: block;
    width: 600px;
    height: 1px;
    background-color: #000000;
    top: 0;
    left: 0;
  }

`
export const Navbar = styled.ul`
  width: 70%;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  list-style: none;
  font-size: 20px;
  text-transform: uppercase;
  justify-content: space-between;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #000000;
    position: absolute;
    top: 70px;
    left: 0;
  }
`
export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #000000;
    transition: 0.2s ease;
  }
  
  a:hover{
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    box-shadow: 0px 18px 33px -27px rgba(0,0,0,0.75);
  }
`