export interface SelectOptionProps extends InputImgProps {
  imgURL: string;
  text: string;
}

export interface InputImgProps {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
