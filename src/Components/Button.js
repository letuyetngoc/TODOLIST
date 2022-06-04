import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.borderButton};
    padding: 0.25em 0.5em;
    transition: all 0.5s;
    font-size: 17px;
    &:hover {
        color: ${props => props.theme.hoverTextColor};
        background-color:  ${props => props.theme.hoverBgColor} !important;
        border: 1px solid ${props => props.theme.borderHover};
    }

`