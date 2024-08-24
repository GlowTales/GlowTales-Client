export interface ColorSet {
  background: string;
  border: string;
  color: string;
}

export interface SelectOptionProps {
  selectList: SelectOptionElement[];
  setter: (value: string | number | null) => void;
  width?: string;
}

export interface SelectOptionElement {
  text: string;
  state: "correct" | "wrong" | "selected" | "default";
  value: string | number;
}

export interface SelectBtnProps {
  text: string;
  colorName: string;
  imgURL?: string;
  onClick: () => void;
}
