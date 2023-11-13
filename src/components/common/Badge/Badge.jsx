import styled from 'styled-components';
import { CaptionMedium1 } from '../../../styles/typography';

const Badge = ({ answer }) => {
  let comments = '';

  if (answer?.isRejected) {
    comments = '답변 거절';
  } else if (answer?.content || (answer?.content && answer?.isRejected)) {
    comments = '답변 완료';
  } else {
    comments = '미답변';
  }
  return <StyledContainer props={answer?.content}>{comments}</StyledContainer>;
};

const StyledContainer = styled.div`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: 1px solid
    ${(props) =>
      props ? props.theme['brown-40'] : props.theme['grayscale-40']};
  border-radius: 8px;
  background: ${(props) => props.theme['grayscale-10']};

  ${CaptionMedium1};
  color: ${(props) =>
    props ? props.theme['brown-40'] : props.theme['grayscale-40']};
`;

export default Badge;
