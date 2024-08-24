import styled from "styled-components";
import NextBtn from "./NextBtn";
import { useNavigate } from "react-router-dom";

interface FinishScreenProps {
  imgURL: string;
  title: string;
  sub: string;
}

const FinishScreen = (props: FinishScreenProps) => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home");
  };
  return (
    <Container>
      <Title>
        <SubTitle>{props.sub}</SubTitle>
        {props.title.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </Title>
      <Image src={props.imgURL} />
      <NextBtn
        isActive={true}
        text="홈으로 가기"
        handleBtn={toHome}
        width="70%"
      />
    </Container>
  );
};

export default FinishScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  gap: 5%;
`;

const Title = styled.div`
  font-size: 3.4rem;
  font-weight: 800;
  text-align: center;
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const SubTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ffb800;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto; /* 비율 유지 */
  max-width: 600px;
`;
