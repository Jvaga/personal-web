import React from 'react'
import react from '../../images/icons8-react-native.svg'
import node from '../../images/icons8-node-js.svg'
import javascript from '../../images/icons8-javascript.svg'
import html from '../../images/icons8-html-5.svg'
import css from '../../images/icons8-css3.svg'
import bootstrap from '../../images/icons8-bootstrap.svg'
import git from '../../images/icons8-git.svg'
import github from '../../images/icons8-github-black.svg'
import java from '../../images/icons8-java-color.svg'
import { 
    SkillsContainer,
    SkillsH1,
    SkillsWrapper,
    SkillsCard,
    SkillIcon,
    SkillsH2,
    SkillsP
} from './SkillsElements'

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsH1>Kenntnisse / Fähigkeiten</SkillsH1>
            <SkillsWrapper>
                <SkillsCard>
                    <SkillIcon src={javascript}></SkillIcon>
                    <SkillsH2>JavaScript</SkillsH2>
                    <SkillsP>Erfahrung:  {'>'} 1 Jahr</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillIcon src={react}></SkillIcon>
                    <SkillsH2>React.js</SkillsH2>
                    <SkillsP>Erfahrung:  {'>'} 1 Jahr</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillIcon src={node}></SkillIcon>
                    <SkillsH2>Node.js</SkillsH2>
                    <SkillsP>Erfahrung:  {'>'} 1 Jahr</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillIcon src={html}></SkillIcon>
                    <SkillsH2>HTML</SkillsH2>
                    <SkillsP>Erfahrung:  {'>'} 1 Jahr</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillIcon src={css}></SkillIcon>
                    <SkillsH2>CSS</SkillsH2>
                    <SkillsP>Erfahrung:  {'>'} 1 Jahr</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillIcon src={bootstrap}></SkillIcon>
                    <SkillsH2>Bootstrap</SkillsH2>
                    <SkillsP>Erfahrung:  {'>'} 1 Jahr</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillIcon src={github}></SkillIcon>
                    <SkillsH2>GitHub</SkillsH2>
                    <SkillsP>Erfahrung:  {'>'} 6 Monate</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillIcon src={git}></SkillIcon>
                    <SkillsH2>Git</SkillsH2>
                    <SkillsP>Erfahrung:  {'>'} 6 Monate</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillIcon src={java}></SkillIcon>
                    <SkillsH2>Java</SkillsH2>
                    <SkillsP>Erfahrung:  {'>'} 1 Jahr</SkillsP>
                </SkillsCard>
                
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills
