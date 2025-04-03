document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownMenu = document.getElementById("user-dropdown-menu");
  const playlistFilterToggle = document.getElementById(
    "playlist-filter-dropdown-toggle"
  );
  const playlistFilterMenu = document.getElementById(
    "playlist-filter-dropdown-menu"
  );

  function toggleDropdown(menu, toggle) {
    menu.classList.toggle("show");
    setTimeout(
      () =>
        document.addEventListener(
          "click",
          (event) => closeDropdown(event, menu, toggle),
          { once: true }
        ),
      0
    );
  }

  function closeDropdown(event, menu, toggle) {
    if (!toggle.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("show");
    }
  }

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleDropdown(dropdownMenu, dropdownToggle);
    });
  }

  if (playlistFilterToggle && playlistFilterMenu) {
    playlistFilterToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleDropdown(playlistFilterMenu, playlistFilterToggle);
    });
  }
});
