import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrolNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrolNav(true)
        } else {
            setScrolNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
       
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>VaGa</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Über mich</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks 
                            to="lenguage"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Sprachen</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="skills"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="erfahrung"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Berufserfahrung</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
