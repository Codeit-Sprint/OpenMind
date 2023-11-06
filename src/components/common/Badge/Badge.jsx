import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CaptionMedium1 } from '../../../styles/typography';

function Badge({ status }) {
  const coments = status ? '답변 완료' : '미답변';
  return <Container status={status}>{coments}</Container>;
}

Badge.defaultProps = {
  status: true,
  //   status: false,
};

Badge.propTypes = {
  status: PropTypes.Boolean,
};

const Container = styled.div`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: 1px solid
    ${(props) =>
      props.status ? props.theme['brown-40'] : props.theme['grayscale-40']};
  border-radius: 8px;
  background: ${(props) => props.theme['grayscale-10']};

  ${CaptionMedium1};
  color: ${(props) =>
    props.status ? props.theme['brown-40'] : props.theme['grayscale-40']};
`;

export default Badge;
