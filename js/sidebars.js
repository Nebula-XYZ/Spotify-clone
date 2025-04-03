document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main-content");
  const rightSidebarToggleButton = document.getElementById(
    "trigger-now-playing-view"
  );
  const rightSidebar = document.querySelector(".right-sidebar");
  const buttonSvg = rightSidebarToggleButton.querySelector(".button-svg");
  rightSidebarToggleButton.addEventListener("click", () => {
    collapseRightSidebarBtn.classList.toggle("flipped");
    if (buttonSvg.classList.contains("audio-active")) {
      buttonSvg.classList.remove("audio-active");
      rightSidebar.classList.add("hidden");
      main.classList.add("right-sidebar-hidden");
    } else {
      buttonSvg.classList.add("audio-active");
      rightSidebar.classList.remove("hidden");
      main.classList.remove("right-sidebar-hidden");
    }
  });

  const closeRightSidebarButton = document.querySelector(
    ".close-right-sidebar-button"
  );
  closeRightSidebarButton.addEventListener("click", () => {
    rightSidebarToggleButton.click();
  });

  const collapseRightSidebarBtn = document.querySelector(
    ".collapse-right-sidebar-button"
  );
  collapseRightSidebarBtn.addEventListener("click", () => {
    rightSidebarToggleButton.click();
  });
  const expandLeftSidebarButton = document.querySelector(
    ".expand-left-sidebar-button"
  );

  expandLeftSidebarButton.addEventListener("click", () => {
    if (expandLeftSidebarButton.classList.contains("clicked")) {
      main.classList.remove("left-sidebar-expanded");
      expandLeftSidebarButton.classList.remove("clicked");
    } else {
      main.classList.add("left-sidebar-expanded");
      expandLeftSidebarButton.classList.add("clicked");
    }
  });

  //create dropdown:
  const createBtn = document.querySelector(".create-button");

  createBtn.addEventListener("click", (event) => {
    createBtn.classList.toggle("triggered");
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!createBtn.contains(event.target)) {
      createBtn.classList.remove("triggered");
    }
  });

  //scale playlist header text:
  const container = document.querySelector(".content-header-text");
  function scaleText() {
    const text = container.querySelector("h2");

    if (!container || !text) return;

    const containerWidth = container.clientWidth;
    const newSize = Math.max(36, Math.min(containerWidth * 0.1, 90));

    text.style.fontSize = `${newSize}px`;
  }

  // run when window resizes
  window.addEventListener("resize", scaleText);

  // observe changes in the container’s size
  const resizeObserver = new ResizeObserver(() => scaleText());
  resizeObserver.observe(container);

  window.addEventListener("resize", scaleText);

  const playlistListViewBtns = document.querySelectorAll(".playlist-view");
  const listViewParents = document.querySelectorAll(".list-view-option");
  const parentContainer = document.querySelector(".sidebar-second-layer");
  const viewIcons = document.querySelectorAll(".view-icon");

  playlistListViewBtns.forEach((element) => {
    element.addEventListener("click", () => {
      viewIcons.forEach((icon) => {
        if (!icon.classList.contains("hidden")) {
          icon.classList.add("hidden");
        }
      });
      listViewParents.forEach((listElement) => {
        if (listElement.classList.contains("active")) {
          listElement.classList.remove("active");
          const activeBtn = listElement.querySelector(".playlist-view");
          parentContainer.classList.remove(`${activeBtn.dataset.view}`);
        }
      });

      document.querySelectorAll(".selected-svg").forEach((svg) => {
        if (!svg.classList.contains("selected")) {
          svg.classList.remove("selected");
        }
        if (!svg.classList.contains("hidden")) {
          svg.classList.add("hidden");
        }
      });

      const parentElement = element.closest(".list-view-option");

      parentElement.classList.add("active");
      parentElement.querySelector(".selected-svg").classList.add("selected");
      parentElement.querySelector(".selected-svg").classList.remove("hidden");

      //update UI
      const viewType = element.dataset.view;
      if (viewType == "list") {
        document.getElementById("list-svg").classList.remove("hidden");
      } else if (viewType == "compact") {
        document.getElementById("compact-svg").classList.remove("hidden");
      } else {
        document.getElementById("grid-svg").classList.remove("hidden");
      }

      parentContainer.classList.add(`${viewType}`);
    });
  });
});
