import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BodyRegular3 } from '../../../styles/typography';

function InputTextArea({ placeholder }) {
  return <Input placeholder={placeholder} />;
}

InputTextArea.defaultProps = {
  placeholder: '이름을 입력하세요',
};

InputTextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

const Input = styled.textarea`
  width: 33.6rem;
  height: 14rem;
  padding: 16px;

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
