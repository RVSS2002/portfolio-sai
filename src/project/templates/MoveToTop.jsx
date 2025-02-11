import { useEffect } from "react";

const MoveToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null; // Since this component doesn't render anything, return null
};

export default MoveToTop;
