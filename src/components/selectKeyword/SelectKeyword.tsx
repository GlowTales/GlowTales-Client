import Header from "@components/common/header/Header";
import * as S from "./SelectKeyword.styeld";
import keywordData from "./data.json";
import NextBtn from "@components/common/NextBtn";
import { useEffect, useState } from "react";

const SelectKeyword = () => {
  const result = keywordData.result.map((i) => i.keyword);

  const [selectedKeywordIndices, setSelectedKeywordIndices] = useState<
    number[]
  >([]);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (index: number) => {
    if (selectedKeywordIndices.includes(index)) {
      setSelectedKeywordIndices(
        selectedKeywordIndices.filter(
          (selectedIndex) => selectedIndex !== index
        )
      );
    } else if (selectedKeywordIndices.length >= 3) {
      alert("최대 3개까지 선택 가능합니다!");
    } else {
      setSelectedKeywordIndices([...selectedKeywordIndices, index]);
    }
  };

  useEffect(() => {
    setIsActive(selectedKeywordIndices.length > 0);
  }, [selectedKeywordIndices]);

  return (
    <>
      <Header text="동화 만들기" />
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>사진에서 단어를 추출했어요</S.Title>
          <S.Title>원하는 단어를 골라주세요</S.Title>
        </S.TitleWrapper>
        <S.KeywordWrapper>
          {result.map((item, idx) => (
            <S.Keyword
              key={idx}
              isSelected={selectedKeywordIndices.includes(idx)}
              onClick={() => handleClick(idx)}
            >
              {item}
            </S.Keyword>
          ))}
        </S.KeywordWrapper>
        <NextBtn
          width="85%"
          isActive={isActive}
          text="다음"
          handleBtn={() => {
            const selectedKeywords = selectedKeywordIndices.map(
              (index) => result[index]
            );
            console.log(selectedKeywords);
            console.log(selectedKeywordIndices);
          }}
        />
      </S.Wrapper>
    </>
  );
};

export default SelectKeyword;
