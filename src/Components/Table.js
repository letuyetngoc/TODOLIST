import styled from 'styled-components'

export const Table = styled.table`
    color: ${props => props.theme.color};
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    border-spacing: 2px;
    font-size:1rem;
    @media (max-width: 575.98px) { 
        font-size:0.8rem;
     };
    border-color: ${props => props.theme.borderButton};
`
export const Thead = styled.thead`
    display: table-header-group;
    vertical-align: middle;
    border: 1px solid ${props => props.theme.borderButton};
`
export const Tbody = styled.tbody`
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
`
export const Tr = styled.tr`
    display: table-row ;
    vertical-align: inherit;
    border: 1px solid ${props => props.theme.borderButton};
`
export const Td = styled.td`
    padding: 0.5rem;
    vertical-align: top;
    border: 1px solid ${props => props.theme.borderButton};
`
export const Th = styled.th`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border-top: 1px solid ${props => props.theme.borderButton};
    border-bottom: 1px solid ${props => props.theme.borderButton};
    padding: 0.5rem;    

`