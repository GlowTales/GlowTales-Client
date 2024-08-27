import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./TabBar.styled";
import { Margin } from "../common.styled";

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { id: 1, icon: "/homeIcon.png", label: "홈", path: "/home" },
    {
      id: 2,
      icon: "/createIcon.png",
      label: "동화만들기",
      path: "/createTale",
    },
    { id: 3, icon: "/learnIcon.png", label: "학습하기", path: "/learnTale" },
  ];

  const selectedTab =
    tabs.find((tab) => tab.path === location.pathname)?.id || 1;

  return (
    <>
      <Margin />
      <S.TabBarContainer>
        {tabs.map((tab) => (
          <S.TabWrapper key={tab.id}>
            <S.TabCircle
              key={tab.id}
              $isSelected={selectedTab === tab.id}
            ></S.TabCircle>
            <S.TabBackground />
            <S.TabContents
              $isSelected={selectedTab === tab.id}
              onClick={() => navigate(tab.path)}
            >
              <img className="tab-icon" src={tab.icon} />
              <span className="tab-text">{tab.label}</span>
            </S.TabContents>
          </S.TabWrapper>
        ))}
      </S.TabBarContainer>
    </>
  );
};

export default TabBar;
