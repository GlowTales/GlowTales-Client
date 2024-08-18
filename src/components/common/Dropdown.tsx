import { useState, useEffect } from "react";
import { DropdownElement, DropdownProps } from "@type/dropdown";
import {
  DropdownButton,
  DropdownContainer,
  DropdownImage,
  DropdownItem,
  DropdownMenu,
} from "./Dropdown.styled";

const Dropdown = ({ selectList, setter, width }: DropdownProps) => {
  const [selectedText, setSelectedText] = useState<string>(
    selectList[0]?.text || ""
  );
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    selectList[0]?.imgURL
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 선택 리스트가 변경될 때 상태 업데이트
  useEffect(() => {
    if (selectList.length > 0) {
      setSelectedText(selectList[0].text);
      setSelectedImage(selectList[0].imgURL);
      setter(selectList[0].value);
    }
  }, [selectList, setter]);

  const handleSelect = (element: DropdownElement) => {
    setSelectedText(element.text);
    setSelectedImage(element.imgURL);
    setter(element.value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer width={width}>
      <DropdownButton>
        {selectedImage && <DropdownImage src={selectedImage} alt="현재 선택" />}
        {selectedText || "옵션 선택"}
        <img
          src="/dropdowntri.png"
          alt="드롭다운 삼각형"
          onClick={toggleDropdown}
        />
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {selectList.map((element, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(element)}>
            {element.imgURL && (
              <DropdownImage src={element.imgURL} alt="선택지" />
            )}
            {element.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
