import * as S from "./Modal.styled";

const Modal = () => {
  const totalHeight = document.documentElement.scrollHeight;

  return (
    <S.ModalSection height={totalHeight}>
      <S.ModalWrapper>
        <S.TextWrapper>
          <S.ModalTitle>동화만들기를 종료하시겠어요?</S.ModalTitle>
          <S.ModalExplain>나중에 다시 만들 수 있어요</S.ModalExplain>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <S.ButtonStyle onClick={() => console.log(1)} isRightButton={false}>
            취소
          </S.ButtonStyle>
          <S.ButtonStyle onClick={() => console.log(1)} isRightButton={true}>
            종료하기
          </S.ButtonStyle>
        </S.ButtonWrapper>
      </S.ModalWrapper>
    </S.ModalSection>
  );
};

export default Modal;
