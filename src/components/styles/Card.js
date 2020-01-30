
import styled from 'styled-components';

const Card = styled.div`
  padding: 15px 20px;
  border: 1px solid rgba(0,0,0,0.125);
  border-top: 5px solid #b1b1b1;
  border-radius: 3px;
  background-color: #ffffff;

  :not(:last-of-type) {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    :not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  &.dark {
    border-top-color: ${props => props.theme.colorPrimary};
  }
  
  &.danger {
    border-top-color: ${props => props.theme.colorDanger};
  }

  &.warning {
    border-top-color: ${props => props.theme.colorWarning};
  }

  &.success {
    border-top-color: ${props => props.theme.colorSuccess};
  }
  
  &.info {
    border-top-color: ${props => props.theme.colorInfo};
  }
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  font-weight: 900;
  color: ${props => props.theme.colorPrimary};

  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
`
const CardContent = styled.p`
  line-height: 150%;
`

const CardActions = styled.div`
  float: right;

  >*:last-child {
    margin-left: .5rem;
  }
`

const CardButton = styled.button`
  border: none;
  background-color: transparent;
  padding: .5rem;
  color: #6e6e71;
  font-size: 15px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  outline: none;

  :hover {
    color: ${props => props.theme.colorPrimary};
    transform: scale(1.2);
  }

  span {
    font-size: 0;
  }
`

export { Card, CardTitle, CardContent, CardActions, CardButton };