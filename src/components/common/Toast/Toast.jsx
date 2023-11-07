import styled from 'styled-components';
import { CaptionMedium1 } from '../../../styles/typography';

const Toast = () => {
  return (
    <Container>
      <p>URL이 복사되었습니다.</p>
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['grayscale-10']};
  border-radius: 8px;
  background-color: ${(props) => props.theme['grayscale-60']};
  box-shadow: ${(props) => props.theme['shadow-2pt']};

  ${CaptionMedium1};
`;

export default Toast;
