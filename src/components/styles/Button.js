import styled from 'styled-components';

const Button = styled.button`
  padding: .75rem 2rem;
  border: none;
  border-radius: 2rem;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  outline: none;
  transition: opacity 200ms ease-in-out;

  :hover {
    opacity: .8;
  }
`

const ButtonPrimary = styled(Button)`
  background: ${props => props.theme.colorPrimary};
  color: #fff;
`

const ButtonDanger = styled(Button)`
  background: ${props => props.theme.colorDanger};
  color: #fff;
`

const ButtonMuted = styled(Button)`
  border: 1px solid ${props => props.theme.colorSecondary};
  background: #FFFFFF;
  color: ${props => props.theme.colorSecondary};
`

const ButtonBack = styled(Button)`
  text-decoration: none;
  color: #6e6e71;
  padding-left: 0;

  i {
    margin-right: .75rem;
  }
`

const ButtonIcon = styled.button`
  border: none;
  background-color: #31303a;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
`

const ButtonIconAdd = styled(ButtonIcon)`
  :hover {
      transform: rotate(90deg) scale(1.1);
      background: ${props => props.theme.colorSecondary};
    }
`

const ButtonIconBack = styled(ButtonIcon)`
  :hover {
      transform: scale(1.1);
      background: ${props => props.theme.colorSecondary};
    }
`

export { Button, ButtonPrimary, ButtonIcon, ButtonBack, ButtonIconAdd, ButtonIconBack, ButtonMuted, ButtonDanger };