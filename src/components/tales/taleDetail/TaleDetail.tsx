import Header from "@components/common/header/Header";
import * as S from "./TaleDetail.styled";
import Dropdown from "@components/common/dropDown/Dropdown";
import { useEffect, useState } from "react";
import NextBtn from "@components/common/NextBtn";
import {
  charElements,
  contentElements,
  moodElements,
} from "@utils/defaultData";
import { useLocation, useNavigate } from "react-router-dom";

const TaleDetail = () => {
  const location = useLocation();
  const { selectKeywords } = location.state || {};

  const navigate = useNavigate();

  const [mood, setMood] = useState<string | number | null>(null);
  const [characters, setCharacters] = useState<string | number | null>(null);
  const [contents, setContents] = useState<string | number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [btnText, setBtnText] = useState<string>("항목을 선택해주세요");
  const [selectedCharText, setSelectedCharText] = useState<string[]>([]);
  const [selectedCharValue, setSelectedCharValue] = useState<string[]>([]);

  const result: (string | number | null)[] = [mood, contents];

  useEffect(() => {
    const isFormValid = () =>
      result.every((value) => value !== null) && selectedCharValue.length > 0;
    if (isFormValid()) {
      setIsActive(true);
      setBtnText("동화 생성하기");
    } else {
      setIsActive(false);
      setBtnText("항목을 선택해주세요");
    }
  }, [mood, contents, selectedCharValue]);

  useEffect(() => {
    if (characters !== null) {
      const charText = charElements.find(
        (element) => element.value === characters
      )?.text;
      const charValue = charElements.find(
        (element) => element.value === characters
      )?.value;
      setSelectedCharText((prevSelectedCharacters) => {
        if (prevSelectedCharacters.length >= 3) {
          alert("등장인물은 3개까지입니다!");
          return prevSelectedCharacters;
        } else {
          return [...prevSelectedCharacters, String(charText)];
        }
      });
      setSelectedCharValue((prevSelectedCharacters) => {
        return [...prevSelectedCharacters, String(charValue)];
      });
    }
  }, [characters]);

  const handleBtn = async () => {
    const requestData = {
      ...(Array.isArray(selectKeywords) && selectKeywords.length > 0
        ? { keywords: selectKeywords }
        : { keywords: [] }),
      mood,
      characters: selectedCharValue,
      contents,
    };
    navigate("/create", { state: { requestData } });
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
          <S.SemiTitle>동화의 등장인물을 설정해주세요</S.SemiTitle>
          <Dropdown
            selectList={charElements}
            setter={setCharacters}
            width="100%"
          />
          <S.CharacterWrapper>
            {selectedCharText.length > 0 &&
              selectedCharText.map((item, idx) => (
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
          isActive={isActive}
          text={btnText}
          handleBtn={handleBtn}
        />
      </S.Wrapper>
    </>
  );
};

export default TaleDetail;
