// 기존의 Feed/Feed.style.jsx 파일입니다.
import styled from 'styled-components';
import IMAGES from '../../assets';
import { H2, H3 } from '../../styles/typography';
import { device } from '../../styles/mediaQuery';

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 23.4rem;

  background-image: url(${IMAGES.indexBackground});
  background-size: cover;
  background-position: center 70%;

  @media ${device.mobile} {
    height: 17.7rem;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 5.4rem;
`;

const LogoImage = styled.img`
  margin-top: 4rem;
  width: 17rem;
  height: 5.7rem;
  flex-shrink: 0;

  @media ${device.mobile} {
    width: 12.3803rem;
    height: 6.2649rem;
  }
`;

const ProfileImage = styled.img`
  width: 13.6rem;
  height: 13.6rem;
  border-radius: 13.6rem;
  flex-shrink: 0;

  @media ${device.mobile} {
    width: 10.4rem;
    height: 10.4rem;
  }
`;

const NickName = styled.div`
  color: ${(props) => props.theme['grayscale-60']};
  ${H2}
  margin: 1.2rem 0;

  @media ${device.mobile} {
    ${H3}
  }
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
`;

export {
  Background,
  Container,
  LogoImage,
  ProfileImage,
  NickName,
  ButtonWrapper,
};
