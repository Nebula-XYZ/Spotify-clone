window.addEventListener("load", function () {
  const img = document.querySelector(".content-header-image");
  const colorThief = new ColorThief();

  // check if the image has loaded
  if (img.complete) {
    applyBackground(img);
  } else {
    img.addEventListener("load", () => applyBackground(img));
  }

  function applyBackground(image) {
    const colors = colorThief.getColor(image);
    const rgb = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;

    // apply background gradient
    const header = document.querySelector(".content-header");
    const playlistHeader = document.querySelector(".content-second-layer");
    const songList = document.querySelector(".song-list-wrapper");
    header.style.background = `linear-gradient(180deg, ${rgb}, rgba(0, 0, 0, 0.41))`;
    playlistHeader.style.background = `linear-gradient(180deg, ${rgb}, rgba(0, 0, 0, 0.99))`;
    songList.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.41), ${rgb})`;
  }
});
