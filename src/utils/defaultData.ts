import { DropdownElement } from "@type/dropdown";
import { ColorSet } from "@type/selectList";

export const commonLanguageElements: DropdownElement[] = [
  {
    imgURL: `/korea.png`,
    text: "한국어",
    value: 2,
  },
  {
    imgURL: `/america.png`,
    text: "영어",
    value: 1,
  },
  {
    imgURL: `/japan.png`,
    text: "일본어",
    value: 3,
  },
  {
    imgURL: `/china.png`,
    text: "중국어",
    value: 4,
  },
];

export const nationElements: DropdownElement[] = [
  {
    text: "선택해주세요",
    value: null,
  },
  ...commonLanguageElements,
];

export const moodElements: DropdownElement[] = [
  {
    text: "자동",
    value: null,
  },
  {
    text: "무서움",
    value: "scary",
  },
  {
    text: "행복함",
    value: "happiness",
  },
  {
    text: "슬픔",
    value: "sadness",
  },
  {
    text: "평온함",
    value: "peaceful",
  },
  {
    text: "신비로움",
    value: "mystique",
  },
];

export const charElements: DropdownElement[] = [
  {
    text: "자동",
    value: null,
  },
  {
    text: "로봇",
    value: "robot",
  },
  {
    text: "인형",
    value: "doll",
  },
  {
    text: "영웅",
    value: "hero",
  },
  {
    text: "악마",
    value: "devil",
  },
  {
    text: "마법사",
    value: "wizard",
  },
];

export const contentElements: DropdownElement[] = [
  {
    text: "자동",
    value: null,
  },
  {
    text: "역경을 극복하는 성장 스토리",
    value: "A story of growth overcoming adversity",
  },
  {
    text: "시련을 통해 교훈을 얻는 스토리",
    value: "A story about learning lessons through trials",
  },
  {
    text: "노력의 결실을 맺는 스토리",
    value: "A story that pays off one's efforts",
  },
  {
    text: "악마와 싸워 승리를 쟁취하는 스토리",
    value: "A story of fighting the devil and winning the victory",
  },
  {
    text: "꿈과 목표를 향한 도전 스토리",
    value: "A story of a challenge to your dreams and goals",
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
  lemonYellow: {
    background: "#fff7cc",
    border: "#f7a300",
    color: "black",
  },
  gray: {
    background: "none",
    border: "#D8D8D8",
    color: "#909090",
  },
  darkGray: {
    background: "#f7f7f7",
    border: "#d8d8d8",
    color: "#777777",
  },
};
