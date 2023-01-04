import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const eventsList = ["touchstart", "click"];

  dropdownMenus.forEach((menu) => {
    eventsList.forEach((eventItem) => {
      menu.addEventListener(eventItem, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");

    outsideClick(this, eventsList, () => {
      this.classList.remove("active");
    });
  }
}
