import { useEffect, useState } from "react";
import Header from "@components/common/header/Header";
import * as S from "./ReadTale.styled";
import Dropdown from "@components/common/dropDown/Dropdown";
import NextBtn from "@components/common/NextBtn";
import { getTale } from "@apis/createTales";
import { useLocation, useNavigate } from "react-router-dom";
import { commonLanguageElements } from "@utils/defaultData";
import { ResponseTaleData } from "@type/createTale";
import { speakText, toggleSpeech } from "@utils/speechUtil";
import Modal from "@components/common/modal/Modal";

const ReadTale = () => {
  const location = useLocation();
  const { response } = location.state || {};
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string | number | null>(null);
  const [data, setData] = useState<ResponseTaleData>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const [showModal, setShowModal] = useState(false);

  const confirmNavigation = () => {
    setShowModal(false);
    navigate("/home");
  };

  const cancelNavigation = () => {
    setShowModal(false);
  };

  const selectSentence = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      setSelectedIndex(index);

      if (data) {
        const textToSpeak = data.story.split("\n")[index];
        speakText(
          textToSpeak,
          null,
          () => setIsSpeaking(false),
          () => setIsSpeaking(false)
        );
        setIsSpeaking(true);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const tale = await getTale(Number(language) || 2, response.taleId);
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
      <Header text="동화 읽기" backBtn={() => setShowModal(true)} />
      <S.Wrapper>
        {data && (
          <>
            <S.ReadTaleHead>
              <S.TitleWrapper>
                <S.Complete>내가 동화를 만든 날 | {data.createdAt}</S.Complete>
                <S.Title>제목: {data.title}</S.Title>
              </S.TitleWrapper>
              <Dropdown
                selectList={commonLanguageElements}
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
                handleBtn={() => {
                  navigate(`/learnTale/pre`, {
                    state: { taleId: response.taleId },
                  });
                }}
              />
            </S.BtnWrapper>
          </>
        )}
      </S.Wrapper>
      {showModal && (
        <Modal
          message="동화읽기를 종료하시겠어요?"
          onConfirm={confirmNavigation}
          onCancel={cancelNavigation}
        />
      )}
    </>
  );
};

export default ReadTale;
