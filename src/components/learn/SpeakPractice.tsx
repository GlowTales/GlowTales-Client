import { SpeakPracticeProps } from "@type/learning";
import { speakText } from "@utils/speechUtil";
import styled from "styled-components";

const SpeakPractice = ({ data }: { data: SpeakPracticeProps }) => {
  return (
    <Wrapper>
      <Title>동화의 핵심 단어에요</Title>
      {data.words.map((w, idx) => (
        <SpeakBox key={idx}>
          <SpeakBtn
            src="/speaker.png"
            onClick={() => speakText(w.word, data.languageId)}
          />
          <WordBox>{w.word}</WordBox>
          <SubText> {w.mean}</SubText>
        </SpeakBox>
      ))}
      <Title>동화의 핵심 문장이에요</Title>
      {data.sentences.map((s, idx) => (
        <SpeakBox key={idx}>
          <SpeakBtn
            src="/speaker.png"
            onClick={() => speakText(s.sentence, data.languageId)}
          />
          <WordBox>{s.sentence}</WordBox>
          <SubText> {s.mean}</SubText>
        </SpeakBox>
      ))}
    </Wrapper>
  );
};

export default SpeakPractice;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;

const SpeakBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  height: fit-content;
`;

const SpeakBtn = styled.img`
  cursor: pointer;
  width: 2.2rem;
`;

const WordBox = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  line-height: 3rem;
`;

const SubText = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: #808080;
  margin-left: 4rem;
`;
