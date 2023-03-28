import { useEffect, useState } from "react";

const useCheckVisible = (parentRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log("se seteaza true");
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
  });

  return { isVisible };
};

export default useCheckVisible;
