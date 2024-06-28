import { Outlet } from "react-router-dom";
import styled from "styled-components";
import backgroundImg from "../../assets/images/backgroundImg.png";

const Layout = () => {
  return (
    <Container>
      <Inner>
        <Outlet />
      </Inner>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
`;

const Inner = styled.div`
  width: 100vw;
  min-width: 26.875rem;
  height: 100vh;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;
