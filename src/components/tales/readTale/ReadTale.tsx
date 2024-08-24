import Header from "@components/common/header/Header";
import * as S from "./ReadTale.styled";
import Dropdown from "@components/common/dropDown/Dropdown";
import { useEffect, useState } from "react";
import NextBtn from "@components/common/NextBtn";
import { getTale } from "@apis/createTales";
import { useLocation } from "react-router-dom";
import { nationElements } from "@utils/defaultData";
import { ResponseTaleData } from "@type/createTale";

const ReadTale = () => {
  const location = useLocation();
  //   const navigate = useNavigate();
  const { response } = location.state || {};

  const [language, setLanguage] = useState<string | number | null>(2);
  const [data, setData] = useState<ResponseTaleData>();

  const onClick = () => {
    console.log(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const tale = await getTale(Number(language) || 2, response);
      setData(tale);
    };

    fetchData();
  }, [language, response]);

  return (
    <>
      <Header text="동화 읽기" />
      <S.Wrapper>
        {data && (
          <>
            <S.ReadTaleHead>
              <S.TitleWrapper>
                <S.Complete>동화가 완성되었어요!</S.Complete>
                <S.Title>제목: {data.title}</S.Title>
              </S.TitleWrapper>
              <Dropdown
                selectList={nationElements}
                setter={setLanguage}
                width="30%"
              />
            </S.ReadTaleHead>
            <S.TaleWrapper>
              {data.story.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </S.TaleWrapper>
            <S.BtnWrapper>
              <NextBtn
                width="48%"
                isActive={true}
                text="음성으로 듣기"
                handleBtn={onClick}
              />
              <NextBtn
                width="48%"
                isActive={true}
                text="학습하기"
                handleBtn={onClick}
              />
            </S.BtnWrapper>
          </>
        )}
      </S.Wrapper>
    </>
  );
};

export default ReadTale;
