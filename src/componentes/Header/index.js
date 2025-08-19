import IconesHeader from '../IconesHeader';
import OpcoesHeader from '../OpcoesHeader';
import Logo from '../Logo'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFFF;
    display: flex;
    justify-content: center;
`

function Header () {

    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )

}

export default Header