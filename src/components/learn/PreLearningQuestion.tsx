import * as S from "./learn.styled";
import Header from "@common/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import ProgressBar from "@components/common/progressBar/ProgressBar";
import NextBtn from "@components/common/NextBtn";
import Dropdown from "@components/common/dropDown/Dropdown";
import { nationElements } from "@utils/defaultData";
import { useResult } from "@hooks/useResult";
import { getLearnedHistory, getLearningLevel } from "@apis/learning";
import { useEffect, useState } from "react";
import CreateQuiz from "./CreateQuiz";
import useSelectLevel from "@hooks/useSelectLevel";
import SelectOptionList from "@common/selectOption/SelectOptionList";

const PreLearningQuestion = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { taleId } = location.state || {};

  const [selectLanguage, setSelectLanguage] = useResult();
  const { selectedLevel, setSelectedLevel, levelOptions } = useSelectLevel();
  const [step, setStep] = useState(0);

  const [userLearnedInfo, setUserLearnedInfo] = useState<any[]>();

  const language = nationElements.find((e) => e.value === selectLanguage);
  const [currLanguageTaleId, setCurrLanguageTaleId] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const learnedHistory = await getLearnedHistory(taleId);

        const updatedLearnedInfo = await Promise.all(
          learnedHistory.map(
            async (info: {
              languageId: number;
              languageTaleId: number;
              isLearned: "NO" | "YES";
            }) => {
              const level = await getLearningLevel(info.languageId);
              return {
                ...info,
                learningLevel: level,
              };
            }
          )
        );

        setUserLearnedInfo(updatedLearnedInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [taleId]);

  const handleNextStep = () => {
    const userInfo = userLearnedInfo?.find(
      (info) => info.languageId === selectLanguage
    );
    setCurrLanguageTaleId(userInfo.languageTaleId);

    if (step === 0 && selectLanguage) {
      if (userInfo?.learningLevel !== null) {
        setSelectedLevel(userInfo.learningLevel);
        if (userInfo.isLearned === "YES") {
          navigate(`/learnTale/${userInfo.languageTaleId}`);
        } else {
          setStep(2);
        }
      } else {
        setStep(1);
      }
    } else if (step === 1) {
      setStep(2);
    }
  };

  return (
    <>
      <Header text="학습하기" />
      <S.Wrapper>
        {step < 2 && <ProgressBar percentage={step === 0 ? 40 : 80} />}
        {step === 0 && (
          <S.PreContainer>
            <S.PreSubTitle>학습하기 전에 몇가지 궁금한게 있어요!</S.PreSubTitle>
            <S.PreTitle>어떤 언어를 학습하시나요?</S.PreTitle>
            <Dropdown selectList={nationElements} setter={setSelectLanguage} />
          </S.PreContainer>
        )}

        {step === 1 && (
          <S.PreContainer>
            <S.PreSubTitle>학습하기 전에 몇가지 궁금한게 있어요!</S.PreSubTitle>
            <S.PreTitle>{language?.text}를 얼마나 알고있나요?</S.PreTitle>
            <SelectOptionList
              selectList={levelOptions.map((option) => ({
                text: option.text,
                value: option.value,
                state: selectedLevel === option.value ? "selected" : "default",
              }))}
              setter={setSelectedLevel}
            />
          </S.PreContainer>
        )}

        {step === 2 && (
          <CreateQuiz
            languageTaleId={currLanguageTaleId as number}
            learningLevel={selectedLevel as string}
          />
        )}

        {step !== 2 && (
          <NextBtn
            isActive={
              (step === 0 && selectLanguage) || (step === 1 && selectedLevel)
                ? true
                : false
            }
            text={step === 0 ? "다음" : "학습 시작"}
            handleBtn={handleNextStep}
          />
        )}
      </S.Wrapper>
    </>
  );
};

export default PreLearningQuestion;