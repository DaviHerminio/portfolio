// src/components/Header.tsx

import { Nav, NavLink, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <NavLink href="/" passHref>
        <a className="navbar-brand">
          Início
        </a>
      </NavLink>
      <Nav className="flex-row" navbar>
        <NavLink href="/products" passHref>
          <a className="nav-link me-2">
            Quem sou
          </a>
        </NavLink>
        <NavLink href="/cart" passHref>
          <a className="nav-link">
            Experiências
          </a>
        </NavLink>
        <NavLink href="/cart" passHref>
          <a className="nav-link">
            Projetos
          </a>
        </NavLink>
        <NavLink href="/cart" passHref>
          <a className="nav-link">
            Serviços
          </a>
        </NavLink>
        <NavLink href="/cart" passHref>
          <a className="nav-link">
            Conhecimentos
          </a>
        </NavLink>
      </Nav>
    </Navbar>
  )
}

export default Header