const menuBtn: HTMLInputElement | null =
  document.querySelector(".header_menu_btn");
const menu: HTMLInputElement | null = document.querySelector(".header_menu");
const header: HTMLInputElement | null = document.querySelector(".header");
const menuLine = document.querySelectorAll(".header_menu_line");

const isVisible = () => {
  menu?.classList.toggle("header_menu_hiden");
  header?.classList.toggle("header_style");
  menuLine.forEach((item, index: number) => {
    item.classList.toggle(`header_menu_line_${index + 1}`);
  });
};

menuBtn?.addEventListener("click", isVisible);

export {};