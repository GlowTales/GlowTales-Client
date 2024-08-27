import { franc } from "franc";
import { iso6393 } from "iso-639-3";
import styled from "styled-components";

interface SpeakPracticeProps {
  text1: string;
}

const getLangCode = (isoCode: string): string => {
  const lang = iso6393.find((lang) => lang.iso6393 === isoCode);
  if (lang && lang.iso6393 === "cmn") {
    return "zh";
  }
  return lang ? lang.iso6391 || "en" : "en";
};

const SpeechTale = ({ text1 }: SpeakPracticeProps) => {
  const handleBtn = () => {
    const detectedLang = franc(text1);
    const langCode = getLangCode(detectedLang);

    const utterance = new SpeechSynthesisUtterance(text1);
    utterance.lang = langCode;
    utterance.rate = 0.6;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <Wrapper>
      <SpeakBox>
        <SpeakBtn src="/speaker.png" onClick={handleBtn} />
        <WordBox>{text1}</WordBox>
      </SpeakBox>
    </Wrapper>
  );
};

export default SpeechTale;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  display: none;
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
  display: none;
`;
