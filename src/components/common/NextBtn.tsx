import { CommonBtn } from "./common.styled";

interface NextBtnProps {
  isActive: boolean;
  text: string;
  width?: string;
  handleBtn: () => void;
}

const NextBtn = (props: NextBtnProps) => {
  return (
    <CommonBtn
      width={props.width}
      onClick={props.handleBtn}
      isActive={props.isActive}
    >
      {props.text}
    </CommonBtn>
  );
};

export default NextBtn;
