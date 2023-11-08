import styled from 'styled-components';
import { BodyRegular3 } from '../../../styles/typography';
import { device } from '../../../styles/mediaQuery';

const InputTextArea = ({ placeholder = '이름을 입력하세요' }) => {
  return <Input placeholder={placeholder} />;
};

// const Input = styled.textarea`
//   width: 33.6rem;
//   height: 14rem;
//   padding: 16px;

//   background-color: ${(props) => props.theme['grayscale-20']};
//   border: 1px solid ${(props) => props.theme['grayscale-20']};
//   border-radius: 8px;

//   ${BodyRegular3};

//   &:focus-within {
//     background-color: ${(props) => props.theme['grayscale-20']};
//     border-color: ${(props) => props.theme['brown-40']};
//     outline: none;
//   }
// `;

// 모달로 답변을 입력할 때와 구분하기 위함, 미디어쿼리 적용
const Input = styled.textarea`
  width: 560px;
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
