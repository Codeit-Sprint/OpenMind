import Button from '../components/common/Button/Button';
import FloatingButton from '../components/common/Button/FloatingButton';
import FacebookButton from '../components/common/Button/FacebookButton';
import LinkButton from '../components/common/Button/LinkButton';
import KakaoButton from '../components/common/Button/KakaoButton';
const HomePage = () => {
  return (
    <>
      <Button type="question" text="질문 받기" />
      <div>hi</div>
      <Button type="answer" text="답변하러 가기" />
      <FloatingButton />
      <FacebookButton />
      <LinkButton />
      <KakaoButton />
    </>
  );
};

export default HomePage;
