import styled from 'styled-components';
import { BodyBold1 } from '../../styles/typography';

const PaginationBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;

const PaginationNumberBox = styled.div`
  cursor: pointer;
  display: flex;
  width: 4rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover > p {
    color: ${(props) => props.theme['brown-40']};
    text-decoration: underline;
  }

  p {
    color: ${(props) =>
      props.$currentnum
        ? props.theme['brown-40']
        : props.theme['grayscale-40']};
    text-align: center;
    ${BodyBold1}
  }
`;

export { PaginationBox, PaginationNumberBox };
