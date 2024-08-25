import React, { useEffect, useState } from "react";
import Header from "@components/common/header/Header";
import * as S from "./ReadTale.styled";
import Dropdown from "@components/common/dropDown/Dropdown";
import NextBtn from "@components/common/NextBtn";
import { getTale } from "@apis/createTales";
import { useLocation } from "react-router-dom";
import { nationElements } from "@utils/defaultData";
import { ResponseTaleData } from "@type/createTale";
import { speakText, toggleSpeech } from "@utils/speechUtil";

const ReadTale = () => {
  const location = useLocation();
  const { response } = location.state || {};

  const [language, setLanguage] = useState<string | number | null>(2);
  const [data, setData] = useState<ResponseTaleData>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const selectSentence = (index: number) => {
    if (selectedIndex === index) {
      // 선택된 문장을 다시 클릭하면 하이라이트 해제 및 음성 중단
      setSelectedIndex(null);
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // 새로운 문장 선택 시 이전 음성 취소, 새로운 문장 하이라이트 및 읽기
      setSelectedIndex(index);

      if (data) {
        const textToSpeak = data.story.split("\n")[index];
        speakText(
          textToSpeak,
          () => setIsSpeaking(false), // onEnd callback
          () => setIsSpeaking(false) // onPause callback
        );
        setIsSpeaking(true);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const tale = await getTale(Number(language) || 2, response);
      setData(tale);
    };
    fetchData();
  }, [language, response]);

  const handleSpeechButtonClick = () => {
    if (data) {
      const textToSpeak = data.story.replace(/\n/g, " ");
      toggleSpeech(textToSpeak, isSpeaking, setIsSpeaking);
    }
  };

  return (
    <>
      <Header text="동화 읽기" />
      <S.Wrapper>
        {data && (
          <>
            <S.ReadTaleHead>
              <S.TitleWrapper>
                <S.Complete>동화가 완성되었어요!</S.Complete>
                <S.Title>제목: {data.title}</S.Title>
              </S.TitleWrapper>
              <Dropdown
                selectList={nationElements}
                setter={setLanguage}
                width="30%"
              />
            </S.ReadTaleHead>
            <S.TaleWrapper>
              {data.story.split("\n").map((line, idx) => (
                <div
                  key={idx}
                  onClick={() => selectSentence(idx)}
                  style={{
                    backgroundColor:
                      selectedIndex === idx ? "#FFF4B3" : "transparent",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  {line}
                </div>
              ))}
            </S.TaleWrapper>
            <S.BtnWrapper>
              <NextBtn
                width="48%"
                isActive={true}
                text={isSpeaking ? "중지" : "음성으로 듣기"}
                handleBtn={handleSpeechButtonClick}
              />
              <NextBtn
                width="48%"
                isActive={true}
                text="학습하기"
                handleBtn={() => {}}
              />
            </S.BtnWrapper>
          </>
        )}
      </S.Wrapper>
    </>
  );
};

export default ReadTale;
