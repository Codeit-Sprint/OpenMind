import PropTypes from 'prop-types';
import styled from 'styled-components';
import IMAGES from '../../../assets';
import { CaptionMedium1 } from '../../../styles/typography';
import { useState } from 'react';

const Like = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    return clicked;
  };
  return (
    <Container onClick={handleClick} status={clicked}>
      <img src={clicked ? IMAGES.like_clicked : IMAGES.like} alt="like" />
      <p>좋아요</p>
    </Container>
  );
};

const Dislike = ({ clicked }) => {
  const handleClick = () => {
    clicked = !clicked;
    return clicked;
  };
  return (
    <Container onClick={handleClick}>
      <img
        src={clicked ? IMAGES.dislike_clicked : IMAGES.dislike}
        alt="dislike"
      />
      <p>싫어요</p>
    </Container>
  );
};

Dislike.defaultProps = {
  clicked: false,
};

Dislike.propTypes = {
  clicked: PropTypes.boolean,
};

const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  color: ${(props) =>
    props.status ? props.theme['blue-50'] : props.theme['grayscale-40']};
  ${CaptionMedium1};
`;

export { Like, Dislike };
