import React from 'react'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'
const Div = Styled.div`
width:10vw;
display:flex;
justify-content:center;
align-items:center;
`
const Links  = (props) => {
    return <Div>
    <Link to={`/${props.link}`}>{props.value}</Link>
    </Div>
}
export default Links