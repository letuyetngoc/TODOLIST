import styled from 'styled-components'

export const Dropdown = styled.select`
    width: 100%;
    height: 50px;
    @media (max-width: 575.98px) { 
        height: 40px;
        font-size: 0.8rem;
        padding: 5px;
     };
    font-size: 100%;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: 2px solid ${props => props.theme.borderColor};
    padding: 10px;
    padding-right: 38px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
    &:hover {
        background-color: ${props => props.theme.hoverBgColor};
        color: ${props => props.theme.hoverTextColor};
        border-bottom-color:#DCDCDC;
    }

`