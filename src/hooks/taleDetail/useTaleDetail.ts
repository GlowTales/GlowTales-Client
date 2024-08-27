// hooks/useTaleDetail.ts
import { useLocation, useNavigate } from "react-router-dom";
import useNavigationWarning from "@hooks/useNavigationWarning";
import useMood from "./useMood";
import useContents from "./useContents";
import useCharacters from "./useCharacters";

const useTaleDetail = () => {
  const location = useLocation();
  const { selectKeywords } = location.state || {};
  const navigate = useNavigate();

  const {
    state: mood,
    setState: setMood,
    getDefaultElement: getDefaultMood,
  } = useMood();
  const {
    characters,
    setCharacters,
    selectedCharText,
    selectedCharValue,
    availableCharacters,
  } = useCharacters();
  const {
    state: contents,
    setState: setContents,
    getDefaultElement: getDefaultContent,
  } = useContents();

  const { showModal, confirmNavigation, cancelNavigation } =
    useNavigationWarning(() => navigate("/createTale"));

  const handleBtn = () => {
    const requestData = {
      ...(Array.isArray(selectKeywords) && selectKeywords.length > 0
        ? { keywords: selectKeywords }
        : { keywords: [] }),
      mood: getDefaultMood(),
      characters:
        selectedCharValue && String(selectedCharValue).length > 0
          ? selectedCharValue
          : [getDefaultMood()],
      contents: getDefaultContent(),
    };
    navigate("/createTale/generate", { state: { requestData } });
  };

  return {
    mood,
    setMood,
    characters,
    setCharacters,
    contents,
    setContents,
    selectedCharText,
    availableCharacters,
    showModal,
    handleBtn,
    confirmNavigation,
    cancelNavigation,
  };
};

export default useTaleDetail;
