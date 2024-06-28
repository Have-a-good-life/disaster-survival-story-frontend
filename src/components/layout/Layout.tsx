import paths from "@/constants/paths";
import {
  currentPageState,
  evaluationState,
  injuryState,
  progressState,
  situationState,
} from "@/recoils/atoms";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";
import backgroundImg from "../../assets/images/backgroundImg.png";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const situation = useRecoilValue(situationState);
  const resetEvaluation = useResetRecoilState(evaluationState);
  const resetInjury = useResetRecoilState(injuryState);
  const resetProgress = useResetRecoilState(progressState);
  const resetSituation = useResetRecoilState(situationState);

  const resetState = () => {
    resetEvaluation();
    resetInjury();
    resetProgress();
    resetSituation();
    setCurrentPage(paths.home);
  };

  useEffect(() => {
    if (
      location.pathname !== paths.home &&
      !situation.situationId &&
      !situation.situationName &&
      !situation.situationDesc
    ) {
      resetState();
      navigate(paths.home, { replace: true });
    }
  }, [location.pathname, situation, navigate, resetState]);

  useEffect(() => {
    setCurrentPage(location.pathname);

    const handlePopState = () => {
      if (location.pathname === paths.home) return;
      const confirmation = window.confirm("메인 화면으로 이동하시겠습니까?");
      if (confirmation) {
        resetState();
        navigate(paths.home, { replace: true });
      } else {
        // 현재 페이지에 머물기 위해 popstate 이벤트 무시
        window.history.pushState(null, "", location.pathname);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location.pathname, navigate, resetState, setCurrentPage]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (location.pathname === paths.home) return;
      event.preventDefault();
      event.returnValue = ""; // 기본 경고 메시지를 표시하도록 설정
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (
      !situation.situationId &&
      !situation.situationName &&
      !situation.situationDesc
    ) {
      resetState();
      navigate(paths.home, { replace: true });
    }
  }, [situation, navigate, resetState]);
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
