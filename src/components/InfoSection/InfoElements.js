import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
    @media screen and (max-width: 468px) {
        padding: 10px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart? `'col2 col1'` : `'col1 col2'` )};
    
    @media screen and (max-width: 768px){
       grid-template-areas: ${({imgStart}) => (imgStart? `'col1' 'col2'` : `'col1' 'col1' 'col2' 'col2'` )};
    }
`;

export const Column1 = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    width: 95%;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #0026FF;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')}; 

    @media screen and (max-width: 480px) {
        font-size: 32px;
        padding-right: 3px;
    }
`;

export const Subtitle = styled.p`
    max-width: 540px;
    margin-bottom: 35px;
    font-size: 17px;
    line-height: 24px;
    color: ${({darkText}) => ( darkText ? '#010606' : '#fff' )};

    @media screen and (max-width: 480px) {
        padding-right: 50px;
    }
`;



export const ImgWrap = styled.div`
    max-width: 90%;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    border-radius: 10px;
    box-shadow: 1px 5px 15px 8px rgba(3,59,249,0.3);;

    @media screen and (max-width: 480px) {
        width: 95%
    }
`;