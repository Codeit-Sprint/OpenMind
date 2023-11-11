import styled from 'styled-components';
import { CaptionMedium1 } from '../../../styles/typography';

const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  color: ${(props) =>
    !!props.state && props.react === 'like'
      ? props.theme['blue-50']
      : props.state && props.react === 'dislike'
      ? props.theme['grayscale-60']
      : props.theme['grayscale-40']};
  ${CaptionMedium1};
`;

export { Container };
