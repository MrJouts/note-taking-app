
import styled from 'styled-components';

const InputTitle = styled.input`
  font-family: "Playfair Display", serif;
  border: none;
  background: none;
  outline: none;
  width: 100%;
  color: #31303a;
  font-weight: 900;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
  }

`

const Textarea = styled.textarea`
  resize: vertical;
  line-height: 150%;
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
`

const ErrorMsg = styled.span`
  color: ${ props => props.theme.colorDanger};
  font-size: .75rem;
`

export { InputTitle, Textarea, ErrorMsg };