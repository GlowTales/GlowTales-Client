import { franc } from "franc";
import { iso6393 } from "iso-639-3";
import styled from "styled-components";

interface SpeakPracticeProps {
  title: string;
  text1: string;
  text2: string;
}

const getLangCode = (isoCode: string): string => {
  const lang = iso6393.find((lang) => lang.iso6393 === isoCode);
  if (lang && lang.iso6393 === "cmn") {
    return "zh";
  }
  return lang ? lang.iso6391 || "en" : "en";
};

const SpeakPractice = (props: SpeakPracticeProps) => {
  const handleBtn = () => {
    const detectedLang = franc(props.text1);
    const langCode = getLangCode(detectedLang);

    const utterance = new SpeechSynthesisUtterance(props.text1);
    utterance.lang = langCode;
    utterance.rate = 0.6;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <SpeakBox>
        <SpeakBtn src="/speaker.png" onClick={handleBtn} />
        <WordBox>{props.text1}</WordBox>
      </SpeakBox>
      <SubText> {props.text2}</SubText>
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
