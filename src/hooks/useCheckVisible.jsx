import { useEffect, useState } from "react";

const useCheckVisible = (parentRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateElement, setAnimateElement] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, []);

  if (isVisible && !animateElement) {
    setAnimateElement(true);
  }

  return { animateElement };
};

export default useCheckVisible;
