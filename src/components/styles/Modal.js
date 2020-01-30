import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  &.show {
    display: flex;
  }

  &.hide {
    display: none;
  }
`

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 3rem 2rem;
  min-width: 30vw;
  text-align: center;

  p {
    margin-bottom: 2.5rem;
  }
`

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-family: "Playfair Display", serif;
  font-weight: 900;
  margin-bottom: 2rem;
  color: ${props => props.theme.colorPrimary};
`

const ModalActions = styled.div`
 button:first-of-type {
   margin-right: 1rem;
 }
`



export { Modal, ModalContent, ModalTitle, ModalActions };