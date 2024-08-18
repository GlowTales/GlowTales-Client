import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./TabBar.styled";
import { FaHome, FaBook, FaPencilAlt } from "react-icons/fa";

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { id: 1, icon: <FaHome />, label: "홈", path: "/home" },
    { id: 2, icon: <FaBook />, label: "동화만들기", path: "/createTale" },
    { id: 3, icon: <FaPencilAlt />, label: "학습하기", path: "/learning" },
  ];

  const selectedTab =
    tabs.find((tab) => tab.path === location.pathname)?.id || 1;

  return (
    <S.TabBarContainer>
      {tabs.map((tab) => (
        <S.TabItem
          key={tab.id}
          isSelected={selectedTab === tab.id}
          onClick={() => navigate(tab.path)}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </S.TabItem>
      ))}
    </S.TabBarContainer>
  );
};

export default TabBar;
