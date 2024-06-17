import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Collapse from 'react-bootstrap/Collapse';

import styles from '../styles/NavBar.module.css';


function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);
  return (
    <Navbar bg="light" fixed="left" onClick={toggleNavbar} className={`${styles.NavBar} ${expanded && styles.NavBarExpanded}`}>
      <NavbarBrand href="#home" className={styles.Name}>
        {expanded ? 'Luka Black' : 'LB'}
      </NavbarBrand>
      <Collapse in={expanded} onExiting={closeNavbar}>
        <Container fluid className={styles.NavLinksContainer}>
          <Nav className={styles.NavLinks}>
            <Nav.Link href="#home" onClick={() => closeNavbar()}><i className='fas fa-home' /> {expanded && 'Home'}</Nav.Link>
            <Nav.Link href="#education"><i className="fas fa-graduation-cap"/> {expanded && 'Education'}</Nav.Link>
            <Nav.Link href="#experience"><i className="fas fa-briefcase" /> {expanded && 'Experience'}</Nav.Link>
            <Nav.Link href="#skills"><i className="fas fa-list-alt" /> {expanded && 'Skills'}</Nav.Link>
            <Nav.Link href="#projects"><i className="fas fa-lightbulb" /> {expanded && 'Projects'}</Nav.Link>
            <Nav.Link href="#contact"><i className="fas fa-envelope" /> {expanded && 'Contact'}</Nav.Link>
            <div className={styles.NavSocialLinks}>
              <Nav.Link href="#" target='_blank'><i className="fab fa-github" /> {expanded && 'GitHub'}</Nav.Link>
              <Nav.Link href="#"><i className="fab fa-linkedin" /> {expanded && 'LinkedIn'}</Nav.Link>
              <Nav.Link href="#"><i className="fab fa-facebook" /> {expanded && 'Facebook'}</Nav.Link>
              <Nav.Link href="#"><i className="fab fa-instagram" /> {expanded && 'Instagram'}</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Collapse>
    </Navbar>
  )
}

export default NavBar
