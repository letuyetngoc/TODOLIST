import styled from 'styled-components'

const Input = styled.input`
    border: 1px solid ${props => props.theme.borderColor};
    min-height: 35px;
    height: 35px;
    font-size: 17px;
    width: 50%;
    display: inherit;
    margin-top: 10px;
`

const Label = styled.span`
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