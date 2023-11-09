import styled from 'styled-components';
import IMAGES from '../../assets';
import { H2 } from '../../styles/typography';

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 234px;

  background-image: url(${IMAGES.indexBackground});
  background-size: cover;
  background-position: center 70%;
`;

const Container = styled.div`
  position: relative;

  width: 20rem;
  height: 40rem;
  margin: 0 auto;

  border: 1px solid red;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 4rem;
  width: 17rem;
  height: 5.7rem;
  flex-shrink: 0;
`;

const ProfileImage = styled.img`
  position: absolute;

  top: 12.9rem;
  left: 1.7rem;
  align-items: center;
  width: 13.6rem;
  height: 13.6rem;
  flex-shrink: 0;
`;

const NickName = styled.div`
  position: absolute;

  top: 27.7rem;
  left: 2rem;

  ${H2}
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 31.7rem;
  left: 1.3rem;

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
