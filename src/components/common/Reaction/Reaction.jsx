import { useEffect, useState } from 'react';

import styled from 'styled-components';
import IMAGES from '../../../assets';
import { CaptionMedium1 } from '../../../styles/typography';
import { setLocalStorageReaction } from '../../../utils/setLocalStorageReaction';
import postReaction from '../../../apis/postReaction';
import checkIsLoggedIn from '../../../utils/checkIsLoggedIn';

const Like = ({
  like,
  questionId,
  checkedReaction,
  setReactionClicked,
  reactionClicked,
  likeChecked,
  setShowToast,
  showToast,
}) => {
  const [clicked, setClicked] = useState(false);
  const [likeNum, setLikeNum] = useState(like);

  const checkVisited = () => {
    if (checkedReaction && likeChecked) {
      setClicked(true);
    }
  };

  const handleClick = () => {
    if (!checkIsLoggedIn()) {
      if (!showToast) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      }
      return;
    }
    if (clicked || checkedReaction || reactionClicked) return;

    setLocalStorageReaction({ questionId, like: true, dislike: false }); // LocalStorage에 저장
    postReaction({ questionId, type: 'like' });
    setLikeNum((prev) => prev + 1);
    setClicked(!clicked);
    setReactionClicked(true);
  };

  useEffect(() => {
    checkVisited();
    setLikeNum(like);
  }, [like]);

  return (
    <Container onClick={handleClick} $status={clicked} $react="like">
      <img src={clicked ? IMAGES.like_clicked : IMAGES.like} alt="like" />
      <p>좋아요</p>
      {likeNum === 0 ? '' : likeNum}
    </Container>
  );
};

const Dislike = ({
  dislike,
  dislikeChecked,
  questionId,
  checkedReaction,
  setReactionClicked,
  reactionClicked,
  setShowToast,
  showToast,
}) => {
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [dislikeNum, setDislikeNum] = useState(dislike);

  const checkVisited = () => {
    if (checkedReaction && dislikeChecked) {
      setDislikeClicked(true);
    }
  };

  const handleClick = () => {
    if (!checkIsLoggedIn()) {
      if (!showToast) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      }
      return;
    }

    if (dislikeClicked || checkedReaction || reactionClicked) return;

    setLocalStorageReaction({ questionId, like: false, dislike: true }); // LocalStorage에 저장
    postReaction({ questionId, type: 'dislike' });
    setDislikeNum((prev) => prev + 1);
    setDislikeClicked((prev) => !prev);
    setReactionClicked(true);
  };

  useEffect(() => {
    checkVisited();
    setDislikeNum(dislike);
  }, [dislike]);

  return (
    <Container onClick={handleClick} $status={dislikeClicked} $react="dislike">
      <img
        src={dislikeClicked ? IMAGES.dislike_clicked : IMAGES.dislike}
        alt="dislike"
      />
      <p>싫어요</p>
      {dislikeNum === 0 ? '' : dislikeNum}
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
