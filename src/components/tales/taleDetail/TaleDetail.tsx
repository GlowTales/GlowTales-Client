import Header from "@components/common/header/Header";
import * as S from "./TaleDetail.styled";
import Dropdown from "@components/common/dropDown/Dropdown";
import { nationElements } from "@pages/OnboardingPage";
import { useEffect, useState } from "react";
import NextBtn from "@components/common/NextBtn";
import { useLocation, useNavigate } from "react-router-dom";

const TaleDetail = () => {
  const location = useLocation();
  const { selectKeywords } = location.state || {};

  const navigate = useNavigate();

  const [mood, setMood] = useState<string | number | null>(null);
  const [characters, setCharacters] = useState<string | number | null>(null);
  const [contents, setContents] = useState<string | number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [btnText, setBtnText] = useState<string>("단어를 선택해주세요");

  const result: (string | number | null)[] = [mood, characters, contents];
  const detail = "구체적";
  const chr = ["최재영"];
  const isFormValid = () => result.every((value) => value !== null);

  useEffect(() => {
    if (isFormValid()) {
      setIsActive(true);
      setBtnText("동화 생성하기");
    } else {
      setIsActive(false);
      setBtnText("단어를 선택해주세요");
    }
  }, [mood, characters, contents]);

  const handleBtn = async () => {
    const requestData = {
      detail,
      keywords: selectKeywords,
      mood,
      characters: chr,
      contents,
    };
    navigate("/readTale", { state: { requestData } });
  };

  return (
    <>
      <Header text="동화만들기" />
      <S.Wrapper>
        <S.SectionWrapper>
          <S.Title>분위기</S.Title>
          <S.SemiTitle>만들고 싶은 동화의 분위기를 골라주세요</S.SemiTitle>
          <Dropdown selectList={nationElements} setter={setMood} width="100%" />
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.Title>등장인물</S.Title>
          <S.SemiTitle>동화의 등장인물을 설정해주세요</S.SemiTitle>
          <Dropdown
            selectList={nationElements}
            setter={setCharacters}
            width="100%"
          />
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.Title>내용</S.Title>
          <S.SemiTitle>만들고 싶은 동화의 내용을 설정해주세요</S.SemiTitle>
          <Dropdown
            selectList={nationElements}
            setter={setContents}
            width="100%"
          />
        </S.SectionWrapper>
        <NextBtn
          width="90%"
          isActive={isActive}
          text={btnText}
          handleBtn={handleBtn} // 버튼 클릭 시 handleBtn 함수 실행
        />
      </S.Wrapper>
    </>
  );
};

export default TaleDetail;
