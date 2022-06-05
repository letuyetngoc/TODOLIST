import styled from 'styled-components'

export const Input = styled.input`
    border: 1px solid ${props => props.theme.borderColor};
    min-height: 35px;
    height: 35px;
    font-size: 17px;
    @media (max-width: 575.98px) { 
        font-size:0.8rem;
        min-height: 25px;
        height: 25px;
     };
    width: 70%;
    display: inherit;
    margin-top: 10px;
`

export const Label = styled.span`
    color:${props => props.theme.color};
    width:auto;
    font-size: 17px;
    font-weight: 400;
    
`

export const TextFeild = ({ label, ...props }) => {
    return <span>
        <Label>
            {label}
        </Label>
        <br />
        <Input {...props} />
    </span>

}