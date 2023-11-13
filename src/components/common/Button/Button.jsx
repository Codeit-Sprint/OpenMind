import styled from 'styled-components';
import IMAGES from '../../../assets';
import { device } from '../../../styles/mediaQuery';
import * as S from '../../../styles/typography';

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.type === 'answer'
      ? props.theme['brown-10']
      : props.theme['brown-40']};
  display: flex;
  width: ${(props) => (props.type === 'answer' ? '16.6rem' : '12.7rem')};
  height: 46px;
  border: 1px solid ${(props) => props.theme['brown-40']};
  border-width: ${(props) => (props.type === 'answer' ? '1px' : '0px')};
  color: ${(props) =>
    props.type === 'answer' ? props.theme['brown-40'] : '#FFFFFF'};
  gap: 10px;
  padding: 12px 24px 12px 24px;
  border-radius: 8px;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  white-space: nowrap;

  & ${Icon} {
  }

  &:hover {
    border: 2px solid;
    border-color: ${(props) =>
      props.type === 'answer'
        ? props.theme['brown-40']
        : props.theme['brown-50']};
  }

  &:active {
    background-color: ${(props) =>
      props.type === 'answer'
        ? props.theme['brown-20']
        : props.theme['brown-50']};
    border-width: ${(props) => (props.type === 'answer' ? '2px' : '0px')};
  }

  &:disabled {
    background-color: ${(props) =>
      props.type === 'answer'
        ? props.theme['brown-10']
        : props.theme['brown-30']};
  }
  border-width: ${(props) => (props.type === 'answer' ? '2px' : '0px')};
  border-color: ${(props) => props.theme['brown-30']};
  ${S.BodyRegular3};

  @media ${device.mobile} {
    weight: min-width;
    height: 34px;
    ${S.CaptionRegular1};
  }
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
      {props.text}
      <Icon src={iconName} alt="arrow icon" />
    </StyledButton>
  );
}

export default Button;
