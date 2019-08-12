import React from 'react';
import Link from '../atoms/link';
import styled from 'styled-components'
const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
`
const Actions = ()=> {
    return (<Div>
    <Link link={'sign_in'} value={'Sign in'}/>
    <Link link={'sign_up'} value={'Sign up'}/>
    </Div>)
}

export default Actions