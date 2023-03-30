const useScrollIntoView = (element, closeNavbar = false) => {
  const offsetPosition =
    element.getBoundingClientRect().top + window.scrollY - 60;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });

  if (closeNavbar) {
    const element = document.querySelector(".nav__checkbox");
    element.checked = false;
  }
};

export default useScrollIntoView;
