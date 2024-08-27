import * as S from "./ProgressBar.styeld";

export interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <S.ProgressBarWrapper>
      <S.Progress $percentage={props.percentage} />
    </S.ProgressBarWrapper>
  );
};

export default ProgressBar;
