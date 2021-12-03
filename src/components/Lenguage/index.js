import React from 'react'
import col from '../../images/colombia-35364.svg'
import ger from '../../images/germany-31017.svg'
import eng from '../../images/eng.svg'
import { 
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './LenguageElements'

const Lenguage = () => {
    return (
        <ServicesContainer id="lenguage">
            <ServicesH1>Sprachen</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={col} />
                    <ServicesH2>Spanisch</ServicesH2>
                    <ServicesP>Muttersprache</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ger} />
                    <ServicesH2>Deutsch</ServicesH2>
                    <ServicesP>Verhandlungssicher</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={eng} />
                    <ServicesH2>Englisch</ServicesH2>
                    <ServicesP>Gute Kenntnisse</ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Lenguage
