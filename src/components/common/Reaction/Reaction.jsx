import styled from 'styled-components';
import IMAGES from '../../../assets';
import { CaptionMedium1 } from '../../../styles/typography';
import { useState } from 'react';

const Like = ({ like }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    return clicked;
  };
  return (
    <Container onClick={handleClick} $status={clicked} $react="like">
      <img src={clicked ? IMAGES.like_clicked : IMAGES.like} alt="like" />
      <p>좋아요</p>
      {like}
    </Container>
  );
};

const Dislike = ({ dislike }) => {
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const handleClick = () => {
    setDislikeClicked(!dislikeClicked);
    return dislikeClicked;
  };
  return (
    <Container onClick={handleClick} $status={dislikeClicked} $react="dislike">
      <img
        src={dislikeClicked ? IMAGES.dislike_clicked : IMAGES.dislike}
        alt="dislike"
      />
      <p>싫어요</p>
      {dislike}
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  color: ${(props) =>
    props.$status && props.$react === 'like'
      ? props.theme['blue-50']
      : props.$status && props.$react === 'dislike'
      ? props.theme['grayscale-60']
      : props.theme['grayscale-40']};
  ${CaptionMedium1};
`;

export { Like, Dislike };
