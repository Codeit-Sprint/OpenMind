/* eslint-disable react/prop-types */
import styled from 'styled-components';
import IMAGES from '../../../assets';
import theme from '../../../styles/theme';
//import { device } from '../../../styles/mediaQuery';
import * as S from '../../../styles/typography';
/* TODO
1. 미디어 쿼리 적용
*/

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.type === 'answer' ? theme['brown-10'] : theme['brown-40']};

  display: flex;
  width: ${(props) => (props.type === 'answer' ? '192px' : '160px')};
  height: 46px;
  border: 1px solid ${theme['brown-40']};
  border-width: ${(props) => (props.type === 'answer' ? '1px' : '0px')};
  color: ${(props) =>
    props.type === 'answer' ? theme['brown-40'] : '#FFFFFF'};
  gap: 10px;
  padding: 12px 24px 12px 24px;
  border-radius: 8px;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  white-space: nowrap;

  & ${Icon} {
  }

  &: hover {
    border: 2px solid;
    border-color: ${(props) =>
      props.type === 'answer' ? theme['brown-40'] : theme['brown-50']};
  }

  &:active {
    background-color: ${(props) =>
      props.type === 'answer' ? theme['brown-20'] : theme['brown-50']};
    border-width: ${(props) => (props.type === 'answer' ? '2px' : '0px')};
  }

  &:disabled {
    background-color: ${(props) =>
      props.type === 'answer' ? theme['brown-10'] : theme['brown-30']};
  }
  border-width: ${(props) => (props.type === 'answer' ? '2px' : '0px')};
  border-color: theme[ 'brown-30'];
  ${S.BodyRegular3};
`;

function Button(props) {
  let iconName = '';
  if (props.type === 'answer') {
    iconName = IMAGES.brownArrowImg;
  } else if (props.type === 'question') {
    iconName = IMAGES.arrowImg;
  }

  return (
    <StyledButton type={props.type}>
      <Icon src={iconName} alt="arrow icon" />
      {props.text}
      <Icon src={iconName} alt="arrow icon" />
    </StyledButton>
  );
}

export default Button;
