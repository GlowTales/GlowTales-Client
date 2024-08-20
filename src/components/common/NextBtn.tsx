import { CommonBtn } from "./common.styled";

interface NextBtnProps {
  isActive: boolean;
  text: string;
  width: string;
  handleBtn: () => void;
}

const NextBtn = ({ width, isActive, text, handleBtn }: NextBtnProps) => {
  return (
    <CommonBtn width={width} onClick={handleBtn} isActive={isActive}>
      {text}
    </CommonBtn>
  );
};

export default NextBtn;
