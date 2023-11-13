import styled from 'styled-components';
import { CaptionMedium1 } from '../../../styles/typography';
import { device } from '../../../styles/mediaQuery';

const Toast = ({ text, bgColor = '#000', textColor = '#FFF' }) => {
  return (
    <Container $bgColor={bgColor} $textColor={textColor}>
      <p>{text}</p>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: inline-flex;
  bottom: 6rem;
  left: 50%;
  transform: translate(-50%, 0);
  transition: ease-in-out 0.5s;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.$textColor};
  border-radius: 8px;
  background-color: ${(props) => props.$bgColor};
  box-shadow: ${(props) => props.theme['shadow-2pt']};

  ${CaptionMedium1};

  @media ${device.mobile} {
    bottom: 10rem;
  }
`;

export default Toast;
