import styled from 'styled-components';
import person from '../../../assets/Person.svg';
import PropTypes from 'prop-types';
import { BodyRegular3 } from '../../../styles/typography';

function InputField({ placeholder }) {
  return (
    <Container>
      <img src={person} alt="person" />
      <Input type="text" placeholder={placeholder} />
    </Container>
  );
}

InputField.defaultProps = {
  placeholder: '이름을 입력하세요',
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

const Container = styled.div`
  width: 33.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 12px 16px;
  gap: 4px;

  border: 1px solid ${(props) => props.theme['grayscale-40']};
  border-radius: 8px;

  &:focus-within {
    border: 1px solid ${(props) => props.theme['brown-40']};
    outline: none;
  }
`;

const Input = styled.input`
  width: 100%;
  ${BodyRegular3};
`;

export default InputField;
