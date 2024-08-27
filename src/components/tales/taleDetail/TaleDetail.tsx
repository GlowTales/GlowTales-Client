import Header from "@components/common/header/Header";
import * as S from "./TaleDetail.styled";
import Dropdown from "@components/common/dropDown/Dropdown";
import { useEffect, useMemo, useState } from "react";
import NextBtn from "@components/common/NextBtn";
import {
  charElements,
  colorSets,
  contentElements,
  moodElements,
} from "@utils/defaultData";
import { useLocation, useNavigate } from "react-router-dom";
import { getRandomElement } from "./getRandomElement";
import useNavigationWarning from "@hooks/useNavigationWarning";
import Modal from "@components/common/modal/Modal";

const TaleDetail = () => {
  const location = useLocation();
  const { selectKeywords } = location.state || {};

  const navigate = useNavigate();

  const [mood, setMood] = useState<string | number | null>(null);
  const [characters, setCharacters] = useState<string | number | null>(null);
  const [contents, setContents] = useState<string | number | null>(null);
  const [selectedCharText, setSelectedCharText] = useState<string[]>([]);
  const [selectedCharValue, setSelectedCharValue] = useState<string[]>([]);

  const { showModal, confirmNavigation, cancelNavigation } =
    useNavigationWarning(() => navigate("/createTale"));

  const availableCharacters = useMemo(() => {
    return charElements.filter(
      (element) => !selectedCharValue.includes(element.value as string)
    );
  }, [selectedCharValue]);

  useEffect(() => {
    if (characters !== null) {
      const charText = charElements.find(
        (element) => element.value === characters
      )?.text;
      const charValue = charElements.find(
        (element) => element.value === characters
      )?.value;

      // 3개 이상 선택할 수 없도록 제한
      if (selectedCharText.length >= 3) {
        alert("등장인물은 3개까지입니다!");
        setCharacters(null);
        return;
      }

      // 캐릭터를 선택 목록에 추가
      setSelectedCharText((prevSelectedCharacters) => [
        ...prevSelectedCharacters,
        String(charText),
      ]);

      setSelectedCharValue((prevSelectedCharacters) => [
        ...prevSelectedCharacters,
        String(charValue),
      ]);

      setCharacters(null); // 선택 초기화
    }
  }, [characters]);

  const handleBtn = async () => {
    const requestData = {
      ...(Array.isArray(selectKeywords) && selectKeywords.length > 0
        ? { keywords: selectKeywords }
        : { keywords: [] }),
      mood: mood || getRandomElement(moodElements).value,
      characters:
        selectedCharValue.length > 0
          ? selectedCharValue
          : [getRandomElement(charElements).value],
      contents: contents || getRandomElement(contentElements).value,
    };
    navigate("/createTale/generate", { state: { requestData } });
  };

  return (
    <>
      <Header text="동화만들기" />
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
              selectedCharText.map((item, idx) => (
                <S.Characters $colorSet={colorSets.darkGray} key={idx}>
                  {item}
                </S.Characters>
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
