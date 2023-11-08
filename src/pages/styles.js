import styled from 'styled-components';

const PageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme['grayscale-20']};
`;

export { PageBox };
