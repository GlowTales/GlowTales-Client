import { ModalProps } from "@type/modal";
import * as S from "./Modal.styled";

const Modal = ({ message, onConfirm, onCancel }: ModalProps) => {
  const totalHeight = document.documentElement.scrollHeight;

  return (
    <S.ModalSection height={totalHeight}>
      <S.ModalWrapper>
        <S.TextWrapper>
          <S.ModalTitle>{message}</S.ModalTitle>
          <S.ModalExplain>나중에 다시 할 수 있어요.</S.ModalExplain>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <S.ButtonStyle onClick={onCancel} isRightButton={false}>
            취소
          </S.ButtonStyle>
          <S.ButtonStyle onClick={onConfirm} isRightButton={true}>
            종료하기
          </S.ButtonStyle>
        </S.ButtonWrapper>
      </S.ModalWrapper>
    </S.ModalSection>
  );
};

export default Modal;
