import styled from 'styled-components';
import theme from '../../styles/theme';
import * as S from '../../styles/typography';
const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme['brown-40']};
`;
const TitleContainer = styled.div`
  ${S.H1};
  font-size: 160px;
`;

const RedirectButton = styled.button`
  color: #ffffff;
  margin-top: 5%;
  background-color: ${theme['brown-40']};
  padding: 12px 24px 12px 24px;
  border-radius: 8px;
`;

const NotFoundDetail = styled.div`
  ${S.H3};
`;
export {
  ContentContainer,
  TitleContainer,
  NotFoundContainer,
  NotFoundDetail,
  RedirectButton,
};
