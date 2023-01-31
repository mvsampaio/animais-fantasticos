import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.events = ["touchstart", "click"];
    this.activeClass = "active";

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((eventItem) => {
        menu.addEventListener(eventItem, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addDropdownMenuEvent();
    return this;
  }
}
