export interface DropdownProps {
  selectList: DropdownElement[];
  setter: (value: string | number | null) => void;
  width?: string;
}

export interface DropdownElement {
  imgURL?: string;
  text: string;
  value: string | number | null;
}
