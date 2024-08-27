import { useEffect, useState } from "react";
import * as S from "./HomeStatus.styled";
import { getStatus } from "@apis/home";
import { StatusProps } from "@type/login";

const HomeStatus = () => {
  const [status, setStatus] = useState<StatusProps>();
  useEffect(() => {
    const fetchStatus = async () => {
      const response = await getStatus();
      setStatus(response);
    };
    fetchStatus();
  }, []);
  return (
    <S.Wrapper>
      <S.StatusWrapper>
        <S.Status>
          <S.TitleWrapper>
            <S.StatusTitle>글로우테일과 함께</S.StatusTitle>
            <S.StatusTitle>이야기 속으로 떠나볼까요?</S.StatusTitle>
          </S.TitleWrapper>
          <S.StateWrapper>
            {status && (
              <>
                <S.State>생성한 동화 | {status.createdTaleCount}개</S.State>
                <S.State>학습한 동화 | {status.studiedTaleCount}개</S.State>
                <S.State>학습 횟수 | {status.studyCount}개</S.State>
                <S.State>
                  학습 중인 언어 |{" "}
                  {status.learningLanguageList.map((language, index) => (
                    <span key={index}>
                      {language}
                      {index < status.learningLanguageList.length - 1 && ", "}
                    </span>
                  ))}
                </S.State>
              </>
            )}
          </S.StateWrapper>
        </S.Status>
        <S.Img src="/statusImg.png" />
      </S.StatusWrapper>
    </S.Wrapper>
  );
};

export default HomeStatus;
