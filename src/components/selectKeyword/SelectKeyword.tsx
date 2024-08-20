import Header from "@components/common/header/Header";
import * as S from "./SelectKeyword.styeld";
import keywordData from "./data.json";
import NextBtn from "@components/common/NextBtn";
import { useEffect, useState } from "react";

const SelectKeyword = () => {
  const result = keywordData.result.map((i) => i.keyword);

  const [selectedKeyword, setSelectedKeyword] = useState<string[]>([]); // 선택된 값들의 배열 관리
  const [isAcitve, setIsActive] = useState(false);

  const handleClick = (item: string) => {
    if (selectedKeyword.includes(item)) {
      setSelectedKeyword(
        selectedKeyword.filter((selectedItem) => selectedItem !== item)
      );
    } else if (selectedKeyword.length >= 3) {
      alert("최대 3개까지 선택 가능합니다!");
    } else {
      setSelectedKeyword([...selectedKeyword, item]);
    }
  };

  useEffect(() => {
    if (selectedKeyword.length > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [selectedKeyword]);

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
              isSelected={selectedKeyword.includes(item)}
              onClick={() => handleClick(item)}
            >
              {item}
            </S.Keyword>
          ))}
        </S.KeywordWrapper>
        <NextBtn
          width="85%"
          isActive={isAcitve}
          text="다음"
          handleBtn={() => console.log(selectedKeyword)}
        />
      </S.Wrapper>
    </>
  );
};

export default SelectKeyword;
