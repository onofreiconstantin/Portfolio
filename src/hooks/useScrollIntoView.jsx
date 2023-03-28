const useScrollIntoView = (element) => {
  const offsetPosition =
    element.getBoundingClientRect().top + window.scrollY - 60;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
};

export default useScrollIntoView;
