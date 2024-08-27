import Header from "@components/common/header/Header";
import * as S from "./TaleDetail.styled";
import Dropdown from "@components/common/dropDown/Dropdown";
import NextBtn from "@components/common/NextBtn";
import Modal from "@components/common/modal/Modal";
import { contentElements, moodElements } from "@utils/defaultData";
import useTaleDetail from "@hooks/taleDetail/useTaleDetail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaleDetail = () => {
  const {
    mood,
    characters,
    contents,
    selectedCharText,
    availableCharacters,
    setMood,
    setCharacters,
    setContents,
    handleBtn,
  } = useTaleDetail();

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const confirmNavigation = () => {
    setShowModal(false);
    navigate("/createTale");
  };

  const cancelNavigation = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header text="동화만들기" backBtn={() => setShowModal(true)} />
      <S.Wrapper>
        <S.SectionWrapper>
          <S.Title>분위기</S.Title>
          <S.SemiTitle>만들고 싶은 동화의 분위기를 골라주세요</S.SemiTitle>
          <Dropdown selectList={moodElements} setter={setMood} width="100%" />
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.Title>등장인물</S.Title>
          <S.SemiTitle>
            동화의 등장인물을 설정해주세요 {"(최대 3개)"}
          </S.SemiTitle>
          <Dropdown
            selectList={availableCharacters}
            setter={setCharacters}
            width="100%"
          />
          <S.CharacterWrapper>
            {selectedCharText.length > 0 &&
              selectedCharText.map((item: string, idx: number) => (
                <S.Characters key={idx}>{item}</S.Characters>
              ))}
          </S.CharacterWrapper>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.Title>내용</S.Title>
          <S.SemiTitle>만들고 싶은 동화의 내용을 설정해주세요</S.SemiTitle>
          <Dropdown
            selectList={contentElements}
            setter={setContents}
            width="100%"
          />
        </S.SectionWrapper>
        <NextBtn
          width="90%"
          isActive={true}
          text="동화 만들기"
          handleBtn={handleBtn}
        />
      </S.Wrapper>
      {showModal && (
        <Modal
          message="동화만들기를 종료하시겠어요?"
          onConfirm={confirmNavigation}
          onCancel={cancelNavigation}
        />
      )}
    </>
  );
};

export default TaleDetail;
