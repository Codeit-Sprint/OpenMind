import { useState } from 'react';
import IMAGES from '../../../assets';
import * as S from './DropDown.style';
import useDetectClose from './useDetectClose';

const DropDown = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [selected, setSelected] = useState('이름순');
  const [isNameActive, setIsNameActive] = useState(true);
  const [isNewestActive, setIsNewestActive] = useState(false);

  const handleNameClick = () => {
    setSelected('이름순');
    setIsNameActive(true);
    setIsNewestActive(false);
  };

  const handleNewestClick = () => {
    setSelected('최신순');
    setIsNewestActive(true);
    setIsNameActive(false);
  };

  return (
    <S.Container>
      <S.DropDownBtn
        onClick={myPageHandler}
        ref={myPageRef}
        isDropped={myPageIsOpen}
      >
        <p>{selected}</p>
        <img
          src={myPageIsOpen ? IMAGES.arrow_up : IMAGES.arrow_down}
          alt="arrow"
        />
      </S.DropDownBtn>
      <S.Menu isDropped={myPageIsOpen}>
        <S.Ul>
          <S.Li active={isNameActive}>
            <p id="name" onClick={handleNameClick}>
              이름순
            </p>
          </S.Li>
          <S.Li active={isNewestActive}>
            <p id="newest" onClick={handleNewestClick}>
              최신순
            </p>
          </S.Li>
        </S.Ul>
      </S.Menu>
    </S.Container>
  );
};

export default DropDown;
