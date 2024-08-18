import { CommonBtn } from "./common.styled";

interface NextBtnProps {
  isActive: boolean;
  text: string;
  handleBtn: () => void;
}

const NextBtn = ({ isActive, text, handleBtn }: NextBtnProps) => {
  return (
    <CommonBtn onClick={handleBtn} isActive={isActive}>
      {text}
    </CommonBtn>
  );
};

export default NextBtn;
