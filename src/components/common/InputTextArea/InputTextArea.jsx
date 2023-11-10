import styled from 'styled-components';
import { BodyRegular3 } from '../../../styles/typography';
import { device } from '../../../styles/mediaQuery';

const InputTextArea = ({ placeholder = '이름을 입력하세요', setContent }) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => setContent(e.target.value)}
    />
  );
};

const Input = styled.textarea`
  width: 100%;
  height: 186px;
  padding: 16px;
  @media ${device.tablet} {
    width: 548px;
  }
  @media ${device.mobile} {
    width: 203px;
  }

  background-color: ${(props) => props.theme['grayscale-20']};
  border: 1px solid ${(props) => props.theme['grayscale-20']};
  border-radius: 8px;

  ${BodyRegular3};

  &:focus-within {
    background-color: ${(props) => props.theme['grayscale-20']};
    border-color: ${(props) => props.theme['brown-40']};
    outline: none;
  }
`;

export default InputTextArea;
