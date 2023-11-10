/* eslint-disable react/prop-types */
import styled from 'styled-components';
import theme from '../../../styles/theme';
import * as S from '../../../styles/typography';

const StyledButton = styled.button`
  background-color: ${theme['brown-40']};
  color: white;
  display: flex;
  width: min-content;
  height: 54px;
  gap: 10px;
  padding: 12px 24px 12px 24px;
  border-radius: 200px;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: ${theme['shadow-3pt']};
  ${S.BodyRegular1};

  &:active {
    background-color: ${theme['brown-50']};
  }
`;

function FloatingButton({ setActive }) {
  return (
    <StyledButton onClick={() => setActive((prev) => !prev)}>
      질문 작성하기
    </StyledButton>
  );
}

export default FloatingButton;
