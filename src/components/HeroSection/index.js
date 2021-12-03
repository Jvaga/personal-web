import React from 'react'
import Video from '../../Videos/video1.mp4'
import profile from '../../images/bild_job.jpg'
import {FaLinkedin} from 'react-icons/fa';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    Img,
    HeroH2,
    SocialIconLink

} from './HeroElements'

const HeroSection = () => {
    

    


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Web-Development</HeroH1>
                <HeroP>
                    Eine Welt voller Möglichkeiten
                </HeroP>
                <Img src={profile}></Img>
                <HeroH2>
                    Kontakt
                </HeroH2>
                <SocialIconLink href="https://www.linkedin.com/in/jhonny-vargas-860393209/" target="_blank" arial-label="LinkedIn">
                    <FaLinkedin />
                </SocialIconLink>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
