import styled from 'styled-components'
export const Link = ({ className, children, ...restProps }) => (
    <a className={className} {...restProps}>
        {children}
    </a>
)

export const StyleLink = styled(Link)`
    background-color: red;
    font-weight: bold;
    color: #fff !important;
`