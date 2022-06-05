import styled from 'styled-components'
export const ContainerFluid = styled.div`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: 5px solid ${props => props.theme.borderColor};
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
`

export const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: 5px solid ${props => props.theme.borderColor};
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    
    @media (max-width: 991.98px) { 
        width: 70%;
    };
    @media (max-width: 767.98px) { 
        width:80%
    };
    @media (max-width: 575.98px) { 
        width:100%
     };

`