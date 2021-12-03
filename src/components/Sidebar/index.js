import React from 'react';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';



const Sidebar = ({isOpen, toggle}) => {

    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle} >
           <Icon onClick={toggle}>
                <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="about"  
                            smooth={true}                    
                            offset={-80} 
                            onClick={toggle}
                            >Über mich</SidebarLink>

                   <SidebarLink to="lenguage"
                            smooth={true} 
                            offset={-80} 
                            onClick={toggle}
                            >Sprachen</SidebarLink>
                            
                   <SidebarLink to="skills" 
                            smooth={true} 
                            offset={-80} 
                            onClick={toggle}
                            >Skills</SidebarLink>

                   <SidebarLink to="erfahrung" 
                            smooth={true} 
                            offset={-80} 
                            onClick={toggle}
                            >Berufserfahrung</SidebarLink>
               </SidebarMenu>
               
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
