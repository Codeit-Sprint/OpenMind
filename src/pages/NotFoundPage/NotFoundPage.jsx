import * as S from './NotFoundPage.styles';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동
  };
  return (
    <>
      <S.NotFoundContainer>
        <S.ContentContainer>
          <S.TitleContainer>Oops!</S.TitleContainer>
          <S.NotFoundDetail>404 - Not Found</S.NotFoundDetail>
          <S.RedirectButton onClick={onClickBtn}>
            이전 페이지로 돌아가기
          </S.RedirectButton>
        </S.ContentContainer>
      </S.NotFoundContainer>
    </>
  );
};

export default NotFoundPage;
