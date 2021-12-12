import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 850px) {
        height: 1100px;
    }
    @media screen and (max-width: 768px) {
        height: 1300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    width: 100%;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        width: 90%;
        margin-bottom: 0;
        
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px 40px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    margin-top: 30px;
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 84px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin: auto;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;