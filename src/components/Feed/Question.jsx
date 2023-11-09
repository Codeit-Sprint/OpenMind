import IMAGES from '../../assets';
import * as S from './Question.style';

const Empty = () => {
  return (
    <S.Container>
      <S.Info>
        <img src={IMAGES.messages} alt="messages" />
        <S.Text>아직 질문이 없습니다</S.Text>
      </S.Info>
      <img src={IMAGES.container} alt="container" />
    </S.Container>
  );
};

const List = ({ num }) => {
  return (
    <S.Container>
      <S.Info>
        <img src={IMAGES.messages} alt="messages" />
        <S.Text>{num}개의 질문이 있습니다</S.Text>
      </S.Info>
      <img src={IMAGES.container} alt="container" />
      <img src={IMAGES.container} alt="container" />
      <img src={IMAGES.container} alt="container" />
      <img src={IMAGES.container} alt="container" />
      <img src={IMAGES.container} alt="container" />
    </S.Container>
  );
};

export { Empty, List };
