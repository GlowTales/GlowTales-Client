import { useEffect, useState } from "react";

const useNavigationWarning = (onConfirmNavigate?: () => void) => {
  const [isNavigatingAway, setIsNavigatingAway] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    // 현재 페이지의 상태를 히스토리에 추가
    window.history.pushState(null, "", window.location.pathname);

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isNavigatingAway) {
        event.preventDefault();
        setShowModal(true);
      }
    };

    const handlePopState = () => {
      if (!isNavigatingAway) {
        setShowModal(true);
        window.history.pushState(null, "", window.location.pathname);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isNavigatingAway]);

  const confirmNavigation = () => {
    setIsNavigatingAway(true);
    setShowModal(false);
    if (onConfirmNavigate) {
      onConfirmNavigate();
    }
  };

  const cancelNavigation = () => {
    setShowModal(false);
  };

  return { showModal, setShowModal, confirmNavigation, cancelNavigation };
};

export default useNavigationWarning;
