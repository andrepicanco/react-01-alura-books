import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const Imagem = styled.img`
  margin-right: 30px;
`

function Logo() {
    return (
        <LogoContainer>
            <Imagem
                src={logo}
                alt="logo"
                className='logo-img'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo