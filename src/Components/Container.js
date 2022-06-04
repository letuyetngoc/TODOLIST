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
`