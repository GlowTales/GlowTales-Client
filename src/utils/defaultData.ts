import { DropdownElement } from "@type/dropdown";
import { ColorSet } from "@type/selectList";

export const nationElements: DropdownElement[] = [
  {
    text: "선택해주세요",
    value: null,
  },
  {
    imgURL: `/america.png`,
    text: "영어",
    value: 1,
  },
  {
    imgURL: `/china.png`,
    text: "중국어",
    value: 2,
  },
  {
    imgURL: `/korea.png`,
    text: "한국어",
    value: 3,
  },
  {
    imgURL: `/japan.png`,
    text: "일본어",
    value: 4,
  },
];

export const colorSets: { [key: string]: ColorSet } = {
  red: {
    background: "#FFDADA",
    border: "#FF5757",
    color: "black",
  },
  green: {
    background: "#E6FFE5",
    border: "#6CE368",
    color: "black",
  },
  yellow: {
    background: "#FFF9E5",
    border: "#FFC300",
    color: "black",
  },
  gray: {
    background: "none",
    border: "#D8D8D8",
    color: "#909090",
  },
};