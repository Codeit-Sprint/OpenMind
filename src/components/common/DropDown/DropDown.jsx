import { useState } from 'react';
import IMAGES from '../../../assets';
import * as S from './DropDown.style';
import useDetectClose from './useDetectClose';

const DropDown = ({ handleClick }) => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [selected, setSelected] = useState('최신순');
  const [isNameActive, setIsNameActive] = useState(false);
  const [isNewestActive, setIsNewestActive] = useState(true);

  const handleNameClick = () => {
    handleClick('name');
    setSelected('이름순');
    setIsNameActive(true);
    setIsNewestActive(false);
  };

  const handleNewestClick = () => {
    handleClick('time');
    setSelected('최신순');
    setIsNewestActive(true);
    setIsNameActive(false);
  };

  return (
    <S.Container>
      <S.DropDownBtn
        onClick={myPageHandler}
        ref={myPageRef}
        $isDropped={myPageIsOpen}
      >
        <p>{selected}</p>
        <img
          src={myPageIsOpen ? IMAGES.arrow_up : IMAGES.arrow_down}
          alt="arrow"
        />
      </S.DropDownBtn>
      <S.Menu $isDropped={myPageIsOpen}>
        <S.Ul>
          <S.Li $active={isNameActive} onClick={handleNameClick}>
            <p id="name">이름순</p>
          </S.Li>
          <S.Li $active={isNewestActive} onClick={handleNewestClick}>
            <p id="newest">최신순</p>
          </S.Li>
        </S.Ul>
      </S.Menu>
    </S.Container>
  );
};

export default DropDown;
