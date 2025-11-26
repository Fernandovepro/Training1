document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle");

  const menu = document.querySelector(".Menu-Horizontal");

  // Verificar que ambos elementos existan
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    const allMenuItems = menu.querySelectorAll("li");

    allMenuItems.forEach((menuItem) => {
      const submenu = menuItem.querySelector(".menu-vertical");

      if (submenu) {
        const menuLink = menuItem.querySelector("a");

        if (menuLink) {
          menuLink.addEventListener("click", (e) => {
            e.preventDefault();

            allMenuItems.forEach((item) => {
              if (item !== menuItem) {
                item.classList.remove("submenu-open");
              }
            });

            menuItem.classList.toggle("submenu-open");
          });
        }
      }
    });
  }
});
