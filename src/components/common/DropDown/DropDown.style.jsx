import styled from 'styled-components';
import { CaptionMedium1 } from '../../../styles/typography';

const Container = styled.div`
  position: relative;
  width: 79px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const DropDownBtn = styled.div`
  display: flex;
  flex-direction: row;

  width: 79px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['grayscale-40']};
  color: ${(props) => props.theme['grayscale-40']};
  ${CaptionMedium1};

  ${({ $isDropped }) =>
    $isDropped &&
    `
      color: black;
      border: 1px solid black;
    `};
`;

const Menu = styled.div`
  z-index: 1;
  position: absolute;
  left: 50%;

  width: 79px;
  padding: 0px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4px;

  background-color: white;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['grayscale-40']};
  color: ${(props) => props.theme['grayscale-40']};
  box-shadow: ${(props) => props.theme['shadow-1pt']};
  ${CaptionMedium1};

  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
  }

  ${({ $isDropped }) =>
    $isDropped &&
    `
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};

  &:hover {
    border: 1px solid ${(props) => props.theme['grayscale-80']};
  }
`;

const Ul = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.div`
  padding: 6px 16px;

  ${CaptionMedium1}
  color: ${(props) =>
    props.$active ? props.theme['blue-50'] : props.theme['grayscale-50']};

  &:hover {
    font-weight: 600;
  }
`;

export { Container, DropDownBtn, Menu, Ul, Li };
