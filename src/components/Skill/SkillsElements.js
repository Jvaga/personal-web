import styled from "styled-components";


export const SkillsContainer = styled.div`
    background: #f9f9f9;
    height: 100%;;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const SkillsH1 = styled.h1`
    font-size: 2.5rem;
    padding-top: 20px;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const SkillsWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 15px;
    width:100%;
    padding: 50px;

    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 40px;
        width: 90%;
    }
`; 

export const SkillsCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    flex-content: flex-start;
    align-items: center;
    box-shadow: 1px 1px 3px 2px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        
    }
    @media screen and (max-width: 768px) {
        border: 0 50px 0 10px;
    }
    
`;

export const SkillIcon = styled.img`
    padding-top: 10px;
    height: 170px;
    
    
`;

export const SkillsH2 = styled.h2`
    font-size: 2rem;
    margin-top: 10px;
    color: #000000;
`;

export const SkillsP = styled.p`
    font-size: 1rem;
    margin-top: -15px;
    color: #000000;


}
    
`;