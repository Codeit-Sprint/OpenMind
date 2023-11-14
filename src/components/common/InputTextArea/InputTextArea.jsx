import styled from 'styled-components';
import { BodyRegular3 } from '../../../styles/typography';
import { device } from '../../../styles/mediaQuery';

const InputTextArea = ({
  placeholder = '이름을 입력하세요',
  setContent,
  content,
}) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => setContent(e.target.value)}
      value={content}
    />
  );
};

const Input = styled.textarea`
  width: 100%;
  height: 18.6rem;
  padding: 1.6rem;
  resize: none;

  @media ${device.mobile} {
    height: 22rem;
    display: flex;
    padding: 1.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
  }

  background-color: ${(props) => props.theme['grayscale-20']};
  border: 0.1rem solid ${(props) => props.theme['grayscale-20']};
  border-radius: 8px;

  ${BodyRegular3};

  &:focus-within {
    background-color: ${(props) => props.theme['grayscale-20']};
    border-color: ${(props) => props.theme['brown-40']};
    outline: none;
  }
`;

export default InputTextArea;
