document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("pause-play-button");
  const playlistPlayButton = document.querySelector(".play-button");
  const nextButton = document.querySelector(".next-button");
  const prevButton = document.querySelector(".previous");

  const progressBar = document.querySelector(".progress-fill");
  const progressContainer = document.querySelector(".progress-bar");
  const progressCircle = document.querySelector(".progress-circle");

  const volumeContainer = document.querySelector(".volume-container");
  const volumeFill = document.querySelector(".volume-fill");
  const volumeBar = document.querySelector(".volume-bar");
  const volumeCircle = document.querySelector(".volume-level-circle");

  const currentSongTime = document.querySelector(".current-song-progress");
  const songDuration = document.querySelector(".total-duration");

  const repeatButton = document.getElementById("repeat-button");
  const repeatIcon = document.getElementById("repeat-icon");

  const songPlayButton = document.querySelectorAll(".play-pause-song-button");

  const playlistItemSidePlayButtons = document.querySelectorAll(
    ".playlist-play-button"
  );

  // Songs
  const PlaylistsSongs = [
    [
      { src: "../songs/playlist_1/Drake - Virginia Beach (Audio).mp3" },
      { src: "../songs/playlist_1/Drake - Yebbas Heartbreak (Audio).mp3" },
      { src: "../songs/playlist_1/PARTYNEXTDOOR & DRAKE - DIE TRYING.mp3" },
      { src: "../songs/playlist_1/Session - Linkin Park (Meteora).mp3" },
      { src: "../songs/playlist_1/End of Line (From TRON_ LegacyScore).mp3" },
      { src: "../songs/playlist_1/512.mp3" },
    ],
    [
      { src: "../songs/playlist_2/Noosphere (Pipe Organ Cut).mp3" },
      {
        src: "../songs/playlist_2/Oomph! Labyrinth (German Version with German Lyrics).mp3",
      },
      { src: "../songs/playlist_2/Sonne.mp3" },
    ],
  ];

  let currentSongIndex = 0;
  let currentPlaylistIndex = 0;
  localStorage.setItem("currentSongIndex", 0);
  localStorage.setItem("currentPlaylistIndex", 0);
  // Function to load a song
  function loadSong(index) {
    const songs = PlaylistsSongs[currentPlaylistIndex];

    localStorage.setItem("currentSongIndex", index);
    localStorage.setItem("currentPlaylistIndex", currentPlaylistIndex);

    audioElement.src = songs[index].src;
    audioElement.load();
    audioElement.addEventListener("loadeddata", () => {
      songDuration.textContent = formatTime(audioElement.duration);
      if (repeatIcon.classList.contains("audio-active")) {
        audioElement.loop = true;
      }
    });
    updateRightSidebarContent();
    updateCurrentSongFooterUI();
    updateCreditsUI();
    updateMerchUI();
    updateNextInQueueUI();

    audioElement.play();
  }

  const audioElement = document.getElementById("audio-player");

  // Play/pause functionality
  playButton.addEventListener("click", () => {
    const playlistIndex = playlistPlayButton.dataset.currentPlaylistId;

    if (audioElement.paused) {
      audioElement.play();
      playButton.innerHTML = `<svg role="img" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M2 2h4v12H2V2zm8 0h4v12h-4V2z"></path>
            </svg>`;
      if (playlistIndex == currentPlaylistIndex) {
        playlistPlayButton.innerHTML = `<svg height="30px" width="30px" role="img" aria-hidden="true" viewBox="0 0 16 16">
            <path d="M2 2h4v12H2V2zm8 0h4v12h-4V2z"></path>
          </svg>`;
      }
    } else {
      audioElement.pause();
      playButton.innerHTML = `<svg role="img" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
            </svg>`;
      if (playlistIndex == currentPlaylistIndex) {
        playlistPlayButton.innerHTML = `<svg height="30px" width="30px" role="img" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
            </svg>`;
      }
    }
  });
  playlistItemSidePlayButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      //change the current playlist id and reset song index if different playlist
      const pressedPlaylistId =
        btn.closest(".playlist-item").dataset.playlistId;
      if (pressedPlaylistId != currentPlaylistIndex) {
        currentPlaylistIndex = pressedPlaylistId;
        currentSongIndex = 0;
        loadSong(0);
      } else {
        if (audioElement.paused) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
      }
    });
  });

  playlistPlayButton.addEventListener("click", () => {
    const playlistIndex = playlistPlayButton.dataset.currentPlaylistId;
    if (playlistIndex == currentPlaylistIndex) {
      if (audioElement.paused) {
        audioElement.play();
        playButton.innerHTML = `<svg role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M2 2h4v12H2V2zm8 0h4v12h-4V2z"></path>
              </svg>`;
        playlistPlayButton.innerHTML = `<svg height="30px" width="30px" role="img" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M2 2h4v12H2V2zm8 0h4v12h-4V2z"></path>
            </svg>`;
      } else {
        audioElement.pause();
        playButton.innerHTML = `<svg role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
              </svg>`;
        playlistPlayButton.innerHTML = `<svg height="30px" width="30px" role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
              </svg>`;
      }
    } else {
      playlistPlayButton.innerHTML = `<svg height="30px" width="30px" role="img" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M2 2h4v12H2V2zm8 0h4v12h-4V2z"></path>
            </svg>`;
      currentSongIndex = 0;
      currentPlaylistIndex = playlistIndex;
      loadSong(0);
    }
  });

  // Song end
  audioElement.addEventListener("ended", () => {
    if (!audioElement.loop) {
      // Only go to the next song if loop is disabled
      const activePlaylist = document.querySelector("li.active .playlist-item");
      const activePlaylistIndex = parseInt(activePlaylist.dataset.playlistId);
      const songs = PlaylistsSongs[activePlaylistIndex];
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong(currentSongIndex); // Load the next song based on the updated index
    }
  });

  // Change SVG when audio starts playing
  audioElement.addEventListener("play", () => {
    const activePlaylist = document.querySelector("li.active .playlist-item");
    const activePlaylistIndex = parseInt(activePlaylist.dataset.playlistId);
    playButton.innerHTML = `<svg role="img" aria-hidden="true" viewBox="0 0 16 16">
            <path d="M2 2h4v12H2V2zm8 0h4v12h-4V2z"></path>
          </svg>`;
    if (activePlaylistIndex == currentPlaylistIndex) {
      playlistPlayButton.innerHTML = `<svg height="30px" width="30px" role="img" aria-hidden="true" viewBox="0 0 16 16">
          <path d="M2 2h4v12H2V2zm8 0h4v12h-4V2z"></path>
        </svg>`;
    }

    if (activePlaylistIndex == currentPlaylistIndex) {
      document.querySelectorAll(".song-item").forEach((item) => {
        item.classList.remove("playing", "active");
      });
    }

    if (activePlaylistIndex == currentPlaylistIndex) {
      const btn = document.querySelector(
        `.play-pause-song-button[data-song-index= "${currentSongIndex}"]`
      );
      const parentSongItem = btn.closest(".song-item");
      parentSongItem.classList.add("active", "playing");
      btn.innerHTML = pauseSvg;
    }

    //reset playlist items parent's state:
    document.querySelectorAll(".playlist-item").forEach((element) => {
      element.closest("li").classList.remove("has-current-song", "playing");
      element.closest("li").querySelector(".playlist-play-button").innerHTML =
        playSvg;
    });

    //find playlist with id == currentplaylistid then add playing class to it's li parent element
    const playlistItemBtn = document.querySelector(
      `.playlist-item[data-playlist-id="${currentPlaylistIndex}"]`
    );
    const parentListItem = playlistItemBtn.closest("li");
    parentListItem.classList.add("has-current-song");
    parentListItem.classList.add("playing");

    if (activePlaylistIndex == currentPlaylistIndex) {
    }
    //find playlist item of current playlist id
    playlistItemBtn.querySelector(".playlist-play-button").innerHTML = pauseSvg;
  });

  audioElement.addEventListener("pause", () => {
    const activePlaylist = document.querySelector("li.active .playlist-item");
    const activePlaylistIndex = parseInt(activePlaylist.dataset.playlistId);
    //find playlist with id == currentplaylistid then add playing class to it's li parent element
    const playlistItemBtn = document.querySelector(
      `.playlist-item[data-playlist-id="${currentPlaylistIndex}"]`
    );
    const parentListItem = playlistItemBtn.closest("li");
    if (activePlaylistIndex == currentPlaylistIndex) {
      document.querySelectorAll(".song-item").forEach((item) => {
        item.classList.remove("playing");
      });

      const btn = document.querySelector(
        `.play-pause-song-button[data-song-index= "${currentSongIndex}"]`
      );
      btn.innerHTML = playSvg;
    }
    parentListItem.classList.remove("playing");
    playlistItemBtn.querySelector(".playlist-play-button").innerHTML = playSvg;
  });

  // Progress bar updates with audio progress
  audioElement.addEventListener("timeupdate", () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.style.inlineSize = `${progress}%`;
    currentSongTime.textContent = formatTime(audioElement.currentTime);

    // Position the progress circle to match the progress
    progressCircle.style.left = `${progress}%`;
  });

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  // Next/Previous functionality
  nextButton.addEventListener("click", () => {
    const activePlaylist = document.querySelector("li.active .playlist-item");
    const activePlaylistIndex = parseInt(activePlaylist.dataset.playlistId);

    if (activePlaylistIndex == currentPlaylistIndex) {
      document.querySelectorAll(".song-item").forEach((item) => {
        item.classList.remove("active", "playing");
      });
      document.querySelectorAll(".play-pause-song-button").forEach((item) => {
        item.innerHTML = playSvg;
      });
    }

    const songs = PlaylistsSongs[currentPlaylistIndex];
    currentSongIndex = (currentSongIndex + 1) % songs.length;

    loadSong(currentSongIndex);
  });

  prevButton.addEventListener("click", () => {
    const activePlaylist = document.querySelector("li.active .playlist-item");
    const activePlaylistIndex = parseInt(activePlaylist.dataset.playlistId);

    if (activePlaylistIndex == currentPlaylistIndex) {
      document.querySelectorAll(".song-item").forEach((item) => {
        item.classList.remove("active", "playing");
      });
      document.querySelectorAll(".play-pause-song-button").forEach((item) => {
        item.innerHTML = playSvg;
      });
    }

    const songs = PlaylistsSongs[currentPlaylistIndex];
    // + songs.length so we don't get a negative song index
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
  });

  // Repeat button functionality
  repeatButton.addEventListener("click", () => {
    if (repeatButton.classList.contains("audio-active")) {
      repeatButton.classList.remove("audio-active");
      repeatIcon.classList.remove("audio-active");
      audioElement.loop = false;
    } else {
      repeatButton.classList.add("audio-active");
      repeatIcon.classList.add("audio-active");
      audioElement.loop = true;
    }
  });

  // function to update progress
  let isDraggingProgressBar = false;

  function updateProgress(e) {
    const progressWidth = progressContainer.offsetWidth;
    const progressRect = progressContainer.getBoundingClientRect(); // get position
    let offsetX = e.clientX - progressRect.left; // mouse position relative to progress bar

    // ensure offsetX stays within bounds (never gets more than the width of the progress container)
    offsetX = Math.max(0, Math.min(offsetX, progressWidth));

    const newTime = (offsetX / progressWidth) * audioElement.duration;
    audioElement.currentTime = newTime;

    // Update UI
    progressCircle.style.left = `${(offsetX / progressWidth) * 100}%`;
  }

  progressContainer.addEventListener("click", updateProgress);

  // Drag Functionality
  progressCircle.addEventListener("mousedown", () => {
    isDraggingProgressBar = true;
    document.addEventListener("mousemove", updateProgress);
    document.addEventListener(
      "mouseup",
      () => {
        isDraggingProgressBar = false;
        document.removeEventListener("mousemove", updateProgress);
      },
      { once: true }
    );
  });

  audioElement.addEventListener("volumechange", () => {
    volumeFill.style.inlineSize = `${audioElement.volume * 100}%`;
    volumeCircle.style.left = `${
      audioElement.volume * volumeContainer.offsetWidth - 7.5
    }px`;
  });
  const volumeBtn = document.querySelector(".volume-control-btn");
  const volumeOn = document.querySelector("#volume-icon-on");
  const volumeOff = document.querySelector("#volume-icon-off");

  // Function to update volume
  function updateVolume(event) {
    const containerWidth = volumeBar.offsetWidth;
    let offsetX = event.clientX - volumeBar.getBoundingClientRect().left;

    offsetX = Math.max(0, Math.min(offsetX, containerWidth));

    const newvolumeFill = offsetX / containerWidth;

    audioElement.volume = newvolumeFill;
    // Show/hide mute icon
    if (audioElement.volume > 0) {
      volumeOn.classList.remove("hidden");
      volumeOff.classList.add("hidden");
    } else {
      volumeOn.classList.add("hidden");
      volumeOff.classList.remove("hidden");
    }
  }

  volumeContainer.addEventListener("click", updateVolume);

  volumeCircle.addEventListener("mousedown", (event) => {
    isDragging = true;
    document.addEventListener("mousemove", updateVolume);
    document.addEventListener(
      "mouseup",
      () => {
        isDragging = false;
        document.removeEventListener("mousemove", updateVolume);
      },
      { once: true }
    );
  });

  volumeBtn.addEventListener("click", () => {
    if (audioElement.volume == 0) {
      audioElement.volume = localStorage.getItem("lastVolume");

      volumeOn.classList.remove("hidden");
      volumeOff.classList.add("hidden");
    } else {
      localStorage.setItem("lastVolume", audioElement.volume);
      audioElement.volume = 0;
      volumeOn.classList.add("hidden");
      volumeOff.classList.remove("hidden");
    }
  });

  function initializeCircles() {
    const initialProgress = 0; // or any initial value, like 0% for progress bar
    const initialVolume = audioElement.volume * 100; // Initialize volume percentage from the current audio volume
    progressBar.style.inlineSize = `${initialProgress}%`; // Set the initial progress bar width
    volumeFill.style.inlineSize = `${initialVolume}%`; // Set the initial volume level

    progressCircle.style.left = `calc(${initialProgress}% - 7.5px)`; // Set the initial position of the progress circle
    volumeCircle.style.left = `calc(${initialVolume}% - 7.5px)`; // Set the initial position of the volume circle
  }

  const playSvg = `<svg height="20px" width="20px" fill="#b3b3b3" role="img" aria-hidden="true" viewBox="0 0 16 16">
  <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
</svg>`;

  const pauseSvg = `<svg height="20px" width="20px" fill="#b3b3b3" role="img" aria-hidden="true" viewBox="0 0 16 16">
  <path d="M2 2h4v12H2V2zm8 0h4v12h-4V2z"></path>
</svg>`;
  const songListContainer = document.querySelector(".songs-grid");
  songListContainer.addEventListener("click", (event) => {
    const element = event.target.closest(".play-pause-song-button");
    if (!element) return; // Ignore clicks that are not on a button

    //when we click on any of these, fetch big play button playlist id and update the current playlist
    // or when we press the big play button update current playlist id
    //else don't change it

    const songIndex = element.dataset.songIndex;
    const songItem = element.closest(".song-item");

    const activePlaylist = document.querySelector("li.active .playlist-item");
    const activePlaylistIndex = parseInt(activePlaylist.dataset.playlistId);

    if (
      currentPlaylistIndex == activePlaylistIndex &&
      songIndex == currentSongIndex
    ) {
      if (audioElement.paused) {
        audioElement.play();
        songItem.classList.add("playing", "active");
        element.innerHTML = pauseSvg;
      } else {
        audioElement.pause();
        songItem.classList.remove("playing");
        element.innerHTML = playSvg;
      }
    } else {
      currentPlaylistIndex = activePlaylistIndex;
      // Reset all buttons and song items
      document.querySelectorAll(".song-item").forEach((item) => {
        item.classList.remove("active", "playing");
      });

      document.querySelectorAll(".play-pause-song-button").forEach((btn) => {
        btn.innerHTML = playSvg;
      });

      // Load and play new song
      currentSongIndex = parseInt(element.dataset.songIndex, 10);
      loadSong(currentSongIndex);
      audioElement.play();

      // Update UI for the new song
      element.innerHTML = pauseSvg;
      songItem.classList.add("playing", "active");
    }
  });

  //change bottom left current image indicator function:
  const currentFooterSongImage = document.querySelector(
    ".active-song-footer-image"
  );
  const currentFooterSongPerformers = document.getElementById(
    "current-song-performers"
  );
  const currentFooterSongTitle = document.getElementById("current-song-title");

  function updateCurrentSongFooterUI() {
    const parentSongItem =
      playlistArray[currentPlaylistIndex][currentSongIndex];
    // select the song item ancestor of the button first

    const currentActiveSongImage = parentSongItem.albumCover;
    const currentActiveSongTitle = parentSongItem.title;
    const currentActiveSongPerformers = parentSongItem.artist;
    currentFooterSongImage.src = currentActiveSongImage;
    currentFooterSongTitle.textContent = currentActiveSongTitle;
    currentFooterSongPerformers.textContent = currentActiveSongPerformers;
  }

  //change next in queue component UI function
  const currentNextInQueueImage = document.querySelector(
    ".next-in-queue-song-cover"
  );
  const currentNextInQueueTitle = document.querySelector(
    ".next-in-queue-song-title"
  );
  const currentNextInQueuePerformers = document.querySelector(
    ".next-in-queue-song-performers"
  );

  //retrieve song info through playlistArray:
  const playlistArray = JSON.parse(localStorage.getItem("playlistsArray"));
  function updateNextInQueueUI() {
    //get next song index

    const songs = PlaylistsSongs[currentPlaylistIndex];

    // get next in queue song UI info
    // console.log(playlistArray[0]);
    const parentSongItem =
      playlistArray[currentPlaylistIndex][
        (currentSongIndex + 1) % songs.length
      ];

    currentNextInQueueImage.src = parentSongItem.albumCover;
    currentNextInQueueTitle.textContent = parentSongItem.title;
    currentNextInQueuePerformers.textContent = parentSongItem.artist;
  }
  // get current song UI info
  const songCardPerformers = document.querySelector(".song-card-performers");
  const songCardCover = document.querySelector(".song-card-cover");
  const songCardTitle = document.querySelector(".song-card-title");

  const artistCardName = document.querySelector(".artist-name");
  const artistCardMonthlyListeners = document.querySelector(
    ".monthly-listeners-text"
  );
  const artistCardDescription = document.querySelector(".artist-description");
  const artistCardImage = document.querySelector(".artist-cover");
  function updateRightSidebarContent() {
    const parentSongItem =
      playlistArray[currentPlaylistIndex][currentSongIndex];
    const currentActiveSongImage = parentSongItem.albumCover;
    const currentActiveSongTitle = parentSongItem.title;
    const currentActiveSongPerformers = parentSongItem.artist;

    artistCardName.textContent = parentSongItem.mainArtist;
    artistCardMonthlyListeners.textContent =
      parentSongItem.artistMonthlyListeners;
    artistCardDescription.textContent = parentSongItem.artistDescription;
    artistCardImage.src = parentSongItem.artistImage;

    songCardCover.src = currentActiveSongImage;
    songCardTitle.textContent = currentActiveSongTitle;
    songCardPerformers.textContent = currentActiveSongPerformers;
  }

  //update credits UI function
  const creditsContainer = document.querySelector(".credits-content");
  function updateCreditsUI() {
    const parentSongItem =
      playlistArray[currentPlaylistIndex][currentSongIndex];
    const credits = parentSongItem.credits;

    // Clear existing credits
    creditsContainer.innerHTML = "";

    // Loop through credits and create new elements
    credits.forEach((credit) => {
      const creditElement = document.createElement("div");
      creditElement.classList.add("credits-artist-composer");
      creditElement.innerHTML = `
         <div>
           <h5>${credit.name}</h5>
           <p>${credit.role}</p>
         </div>
         ${credit.role.includes("Main Artist") ? "<button>Follow</button>" : ""}
       `;
      creditsContainer.appendChild(creditElement);
    });
  }
  //update merch UI function
  const merchContainer = document.querySelector(".merch-content");

  function updateMerchUI() {
    // Get current song's merch data
    const parentSongItem =
      playlistArray[currentPlaylistIndex][currentSongIndex];
    const merchArray = parentSongItem.merch;

    //Reset merch content
    merchContainer.innerHTML = "";

    if (!merchArray || merchArray.length === 0) {
      merchContainer.innerHTML = `
        <div class="no-merch">
          <svg width="50" height="50" viewBox="0 0 24 24">
            <path fill="gray" d="M12 2L2 7v6c0 5.5 3.8 10.3 9 11 5.2-.7 9-5.5 9-11V7l-10-5zM5 8l7-3.5L19 8v5c0 4.1-2.7 8.2-7 8.9-4.3-.7-7-4.8-7-8.9V8z"></path>
          </svg>
          <p>No merch available for this album.</p>
        </div>
      `;
      return;
    }

    // Loop through merch items and append them to the DOM
    merchArray.forEach((merchElement) => {
      const merchItem = document.createElement("div"); // Create a container div for each item
      merchItem.classList.add("merch-item");
      merchItem.innerHTML = `
        <img src="${merchElement.image}" alt="${merchElement.name}">
        <a href="">${merchElement.name}</a>
      `;

      // Append new merch item
      merchContainer.appendChild(merchItem);
    });
  }

  //play next song button
  const playNextButton = document.querySelector(".play-next-song-button");
  playNextButton.addEventListener("click", () => {
    nextButton.click();
  });

  // Load the first song on page load
  loadSong(0);
  initializeCircles();
});
