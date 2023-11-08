import styled from 'styled-components';
import IMAGES from '../assets';
import { device } from '../styles/mediaQuery';

const PageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-position: center bottom;
  background-image: url(${IMAGES.indexBackground});
  background-color: ${(props) => props.theme['grayscale-20']};

  @media ${device.tablet} {
    background-size: contain;
  }

  @media ${device.mobile} {
    background-size: contain;
  }
`;

export { PageBox };
