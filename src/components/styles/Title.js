import styled from 'styled-components'

const WebTitle = styled.h1`
  font-size: 1.15rem;
  font-family: "Playfair Display", serif;
  font-weight: 900;
  color: ${props => props.theme.colorPrimary};
  
  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
`

const PageTitle = styled.h2`
  font-size: 1.5rem;
  font-family: "Playfair Display", serif;
  font-weight: 900;
  color: ${props => props.theme.colorPrimary};

  @media (min-width: 480px) {
    font-size: 2rem;
  }
`

export { WebTitle, PageTitle };