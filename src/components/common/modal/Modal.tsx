import * as S from "./Modal.styled";

const Modal = (props: { purpose?: string | undefined }) => {
  const totalHeight = document.documentElement.scrollHeight;

  return (
    <S.ModalSection height={totalHeight}>
      <S.ModalStyle>
        <S.Content>종료하시겠어요?</S.Content>
        <S.ButtonWrapper>
          <S.ButtonStyle onClick={() => console.log(1)} isRightButton={false}>
            취소
          </S.ButtonStyle>
          <S.ButtonStyle onClick={() => console.log(1)} isRightButton={true}>
            종료하기
          </S.ButtonStyle>
        </S.ButtonWrapper>
      </S.ModalStyle>
    </S.ModalSection>
  );
};

export default Modal;
