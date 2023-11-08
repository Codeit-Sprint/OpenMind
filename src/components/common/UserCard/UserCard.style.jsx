import styled from 'styled-components';
import { BodyBold1, BodyRegular3 } from '../../../styles/typography';

const Container = styled.div`
  width: 220px;
  height: 187px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  border: 1px solid ${(props) => props.theme['grayscale-40']};
  border-radius: 16px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${BodyBold1}
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme['grayscale-40']};
  ${BodyRegular3};
`;

export { Container, Profile, ProfileImage, Question };
