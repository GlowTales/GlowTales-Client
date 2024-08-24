import * as S from "./learn.styled";
import SpeakPractice from "./SpeakPractice";

const LearnTaleKeys = () => {
  return (
    <S.Container>
      <SpeakPractice title="동화의 핵심단어에요" text1="Love" text2="사랑"/>
      <SpeakPractice title="동화의 핵심 문장이에요" text1="Love and the power of friends saved the apple tree!" text2="사랑과 친구들의 힘이 사과나무를 살렸어!"/>
    </S.Container>
  );
};

export default LearnTaleKeys;
