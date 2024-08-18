export interface DropdownProps {
  selectList: DropdownElement[];
  setter: (value: string | number) => void;
  width?: string;
}

export interface DropdownElement {
  imgURL?: string; // 앞에 로고 들어가야 하는 경우 경로 넣기
  text: string; // 드랍다운에 작성될 텍스트
  value: string | number | null; // 실제 들어갈 값
}
