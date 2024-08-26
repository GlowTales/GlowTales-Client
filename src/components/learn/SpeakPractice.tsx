import { SpeakPracticeProps } from "@type/learning";
import { speakText } from "@utils/speechUtil";
import * as S from "./speakPractice.styled";

const SpeakPractice = ({ data }: { data: SpeakPracticeProps }) => {
  return (
    <S.Wrapper>
      <S.SpeakSection>
        <S.Title>동화의 핵심 단어에요</S.Title>
        {data.words.map((w, idx) => (
          <S.SpeakRowBox key={idx}>
            <S.SpeakBtn
              src="/speaker.png"
              onClick={() => speakText(w.word, data.languageId)}
            />
            <S.WordBox>{w.word}</S.WordBox>
            <S.MeanText1> {w.mean}</S.MeanText1>
          </S.SpeakRowBox>
        ))}
      </S.SpeakSection>
      
      <S.SpeakSection>
        <S.Title>동화의 핵심 문장이에요</S.Title>
        {data.sentences.map((s, idx) => (
          <S.SpeakColumnBox>
            <S.SpeakRowBox key={idx}>
              <S.SpeakBtn
                src="/speaker.png"
                onClick={() => speakText(s.sentence, data.languageId)}
              />
              <S.WordBox>{s.sentence}</S.WordBox>
            </S.SpeakRowBox>
            <S.MeanText2> {s.mean}</S.MeanText2>
          </S.SpeakColumnBox>
        ))}
      </S.SpeakSection>
    </S.Wrapper>
  );
};

export default SpeakPractice;
