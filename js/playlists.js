document.addEventListener("DOMContentLoaded", () => {
  //playlists:
  const playlists = [
    [
      {
        songIndex: "0",
        title: "Virginia Beach",
        artist: "Drake",
        mainArtist: "Drake",
        album: "For All The Dogs",
        dateAdded: "March 23, 2024",
        duration: "4:11",
        artistImage: "../images/artist-images/drake.jpeg",
        artistMonthlyListeners: "78,845,941 monthly listeners",
        artistDescription:
          "Canadian rapper and vocalist Drake has retained a bigger-than-life commercial presence shortly after he hit the scene in 2006, whether with his own chart-topping releases or with a long string of guest appearances on hits by the likes of",
        albumCover: "../images/album-covers/for-all-the-dogs.jpg",
        credits: [
          { name: "Drake", role: "Main Artist" },
          { name: "A.Graham", role: "Composer" },
          { name: "H.Arsenault", role: "Composer" },
        ],
        merch: [
          {
            image: "../images/merch/for_all_the_boys_merch.jpeg",
            name: "Black Tee",
          },
        ],
      },
      {
        songIndex: "1",
        title: "Yebba's Heartbreak",
        artist: "Drake, Yebba",
        mainArtist: "Drake",
        album: "Certified Lover Boy",
        dateAdded: "Feb 20, 2025",
        duration: "2:13",
        artistImage: "../images/artist-images/drake.jpeg",
        artistMonthlyListeners: "78,845,941 monthly listeners",
        artistDescription:
          "Canadian rapper and vocalist Drake has retained a bigger-than-life commercial presence shortly after he hit the scene in 2006...",
        albumCover: "../images/album-covers/certified-lover-boy.webp",
        credits: [
          { name: "Drake", role: "Main Artist" },
          { name: "Yebba", role: "Main Artist, Producer" },
          { name: "James Francies", role: "Composer, Producer" },
        ],
        merch: [
          {
            image: "../images/merch/yebba_nike_clb.jpeg",
            name: "NIKE CLB HAT WHITE",
          },
        ],
      },
      {
        songIndex: "2",
        title: "Die Trying",
        artist: "PARTYNEXTDOOR, Drake, Yebba",
        mainArtist: "PARTYNEXTDOOR",
        album: "Some Sexy Songs 4U",
        dateAdded: "March 17, 2025",
        duration: "3:15",
        artistImage: "../images/artist-images/partynextdoor.jpeg",
        artistMonthlyListeners: "35,633,590 monthly listeners",
        artistDescription: "PARTYNEXTDOOR 4",
        albumCover: "../images/album-covers/Some_Sexy_Songs_4_U.png",
        credits: [
          { name: "PARTYNEXTDOOR", role: "Main Artist" },
          { name: "Drake", role: "Main Artist" },
          { name: "Yebba", role: "Main Artist" },
        ],
        merch: [
          {
            image: "../images/merch/partynextdoor_merch.jpeg",
            name: "$$$4U Nokia Tee",
          },
        ],
      },
      {
        songIndex: "3",
        title: "Session",
        artist: "Linkin Park",
        mainArtist: "Linkin Park",
        album: "Meteora",
        dateAdded: "Nov 5, 2024",
        duration: "2:25",
        artistImage: "../images/artist-images/linkin_park.jpeg",
        artistMonthlyListeners: "46,717,337 monthly listeners",
        artistDescription:
          "LINKIN PARK emerged as an innovative musical force and are one of the best-selling artists of the last twenty years.",
        albumCover:
          "../images/album-covers/Linkin_Park_Meteora_Album_Cover.jpg",
        credits: [
          { name: "Linkin Park", role: "Main Artist, Producer" },
          { name: "Brad Delson", role: "Producer, Writer" },
          { name: "Chester Bennington", role: "Producer, Writer" },
        ],
        merch: [
          {
            image: "../images/merch/meteora_1.jpeg",
            name: "Meteora LP03 Ladies Muscle Tank",
          },
          {
            image: "../images/merch/meteora_2.jpeg",
            name: "Vintage Meteora Spray Bracket Zip Hoodie",
          },
          {
            image: "../images/merch/meteora_3.jpeg",
            name: "Logo Tilt Washed Black Hoodie",
          },
        ],
      },
      {
        songIndex: "4",
        title: "Tron: Legacy",
        artist: "Daft Punk",
        mainArtist: "Daft Punk",
        album: "Tron: Legacy",
        dateAdded: "Oct 28, 2024",
        duration: "2:36",
        artistImage: "../images/artist-images/daft_punk.jpeg",
        artistMonthlyListeners: "22,651,932 monthly listeners",
        artistDescription:
          "As they evolved from '90s French house pioneers to 2000s dance tastemakers to mainstream heroes in the 2010s, Daft Punk remained one of dance music's most iconic acts...",
        albumCover: "../images/album-covers/tron-legacy-cover.jpeg",
        credits: [
          { name: "Daft Punk", role: "Main Artist, Producer" },
          { name: "Thomas Bangalter", role: "Composer, Producer" },
          { name: "Guy-Manuel de Homem-Christo", role: "Composer, Producer" },
        ],
        merch: [
          {
            image: "../images/merch/daft_punk_merch_1.jpeg",
            name: "Classic Daft Punk Logo Black Hoodie",
          },
          {
            image: "../images/merch/daft_punk_merch_2.jpeg",
            name: "Classic Daft Punk Logo Black Tee",
          },
        ],
      },
      {
        songIndex: "5",
        title: "512",
        artist: "Lamb of God",
        mainArtist: "Lamb of God",
        album: "VII:Sturm und Drang",
        dateAdded: "March 17, 2025",
        duration: "4:45",
        artistImage: "../images/artist-images/lamb_of_god.jpeg",
        artistMonthlyListeners: "2,052,783 monthly listeners",
        artistDescription:
          "For millions of headbangers, Lamb Of God are simply the most important contemporary metal band in the world,- Guitar World Now, the Grammy-nominated goliath follows 2020's self-titled slab.",
        albumCover:
          "../images/album-covers/Lamb_of_God_-_VII_Sturm_und_Drang.jpg",
        credits: [
          { name: "Lamb of God", role: "Main Artist" },
          { name: "Christopher James Adler", role: "Composer, Lyricist" },
          { name: "William M.Adler", role: "Composer, Lyricist" },
        ],
        merch: [],
      },
    ],
    [
      {
        songIndex: "0",
        title: "Noosphere",
        explicit: false,
        artist: "Guillaume David",
        mainArtist: "Guillaume David",
        album: "Warhammer 40,000: Mechanicus (Original Soundtrack)",
        dateAdded: "April 2, 2025",
        duration: "6:28",
        artistImage: "../images/artist-images/guillaume_david.jpeg",
        artistMonthlyListeners: "151,326 monthly listeners",
        artistDescription: "",
        albumCover: "../images/album-covers/warhammer40k.jpeg",
        credits: [{ name: "Guillaume David", role: "Main Artist, Composer" }],
        merch: [],
      },
      {
        songIndex: "1",
        title: "Labyrinth",
        explicit: false,
        artist: "OOMPH!",
        mainArtist: "OOMPH!",
        album: "Monster",
        dateAdded: "April 2, 2025",
        duration: "4:13",
        artistImage: "../images/artist-images/oomph.jpeg",
        artistMonthlyListeners: "380,356 monthly listeners",
        artistDescription:
          'Legendary Neue Deutsche Härte pioneers OOMPH! are back with their 14th studio album, "Richter und Henker"! (en: Judge and Executioner). The band hit #1 on the Official German Album Charts with their previous album and Napalm Records debut, "Ritual" (2019). The highly successful band\'s biggest hit to date, their 2004 single "Augen Auf!", is a timeless classic, while countless massive international tours and festival appearances paved the band\'s way. The upcoming full-length, "Richter und Henker", kicks off a new era as it marks the first album with a new lineup, as CR4P and FLUX are joined by new vocalist DER SCHULZ. The new album is set to be released on September 8, 2023 and was once again produced and recorded by the band themselves.',
        albumCover: "../images/album-covers/monster.jpeg",
        credits: [
          { name: "OOMPH!", role: "Main Artist, Producer" },
          { name: "Dero", role: "Composer, Lyricist" },
          { name: "Crap", role: "Composer, Lyricist" },
        ],
        merch: [],
      },
      {
        songIndex: "2",
        explicit: false,
        title: "Sonne",
        artist: "Rammstein",
        mainArtist: "Rammstein!",
        album: "Mutter",
        dateAdded: "March 17, 2025",
        duration: "4:32",
        artistImage: "../images/artist-images/rammstein.jpeg",
        artistMonthlyListeners: "12,682,910 monthly listeners",
        artistDescription:
          "Rammstein are one of rock’s most individual and successful names, a multiple award-winning outfit with a vision that continues to evolve. Since forming in 1994, the six East Berliners have headlined the world’s major festivals and stadiums, selling millions of albums, and topping charts worldwide.",
        albumCover: "../images/album-covers/mutter.jpeg",
        credits: [
          { name: "Rammstein", role: "Main Artist, Producer" },
          { name: "Christoph Doom Schneider", role: "Composer" },
          { name: "Doktor Christian Lorenz", role: "Composer" },
        ],
        merch: [],
      },
    ],
  ];
  localStorage.setItem("playlistsArray", JSON.stringify(playlists));
  const header = document.querySelector(".content-header");
  const playlistHeader = document.querySelector(".content-second-layer");
  const playlistImageContainer = document.querySelector(
    ".content-header-image"
  );
  const songList = document.querySelector(".song-list-wrapper");
  const playlistTitle = document.querySelector(".playlist-name h2");
  const playlistOwner = document.querySelector(".playlist-owner");
  const playlistSize = document.querySelector(".playlist-size");

  const playalistSelectButtons = document.querySelectorAll(
    ".playlist-play-button"
  );
  const colorThief = new ColorThief();

  playalistSelectButtons.forEach((btn) => {
    const playlistItem = btn.closest(".playlist-item");
    playlistItem.addEventListener("click", () => {
      //fetch playlist element:
      const allPlaylistItems = document.querySelectorAll(".playlist-item");
      allPlaylistItems.forEach((item) => {
        const listElement = item.closest("li");
        listElement.classList.remove("active");
      });

      playlistItem.closest("li").classList.add("active");
      const playlistId = playlistItem.dataset.playlistId;
      const imageElement = playlistItem.querySelector(".playlist-icon img");
      const playlistItemTitle = playlistItem.querySelector(
        ".playlist-item-title"
      );
      const playlistItemOwner = playlistItem.querySelector(
        ".playlist-item-owner"
      );
      playlistTitle.textContent = playlistItemTitle.textContent;
      playlistOwner.textContent = playlistItemOwner.textContent;
      playlistImageContainer.src = imageElement.src;
      playlistSize.textContent = playlists[playlistId].length;
      const colors = colorThief.getColor(imageElement);
      const rgb = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;

      header.style.background = `linear-gradient(180deg, ${rgb}, rgba(0, 0, 0, 0.41))`;
      playlistHeader.style.background = `linear-gradient(180deg, ${rgb}, rgba(0, 0, 0, 0.99))`;

      songList.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.41), ${rgb})`;
      loadPlaylist(parseInt(playlistId));
    });
  });

  //update song grid?
  const songListContainer = document.querySelector(".songs-grid");

  function loadPlaylist(index) {
    const selectedPlaylist = playlists[index];

    songListContainer.innerHTML = ""; // Clear previous songs

    selectedPlaylist.forEach((song) => {
      const songItem = document.createElement("div");
      songItem.classList.add("song-item");

      // Add data attributes
      songItem.setAttribute("data-song-index", song.songIndex);
      songItem.setAttribute("data-artist-image", song.artistImage);
      songItem.setAttribute("data-artist-name", song.artist);
      songItem.setAttribute(
        "data-artist-monthly-listeners",
        song.monthlyListeners
      );
      songItem.setAttribute("data-artist-description", song.artistDescription);
      songItem.setAttribute("data-credits", JSON.stringify(song.credits));
      songItem.setAttribute("data-merch", JSON.stringify(song.merch));

      songItem.innerHTML = `
              <div class="song-item-left">
                  <div class="song-image-container">
                      <img class="song-image" src="${song.albumCover}" alt="${
        song.title
      }">
                      <button class="play-pause-song-button" data-song-index="${
                        song.songIndex
                      }">
                          <svg id="before-song-image" role="img" aria-hidden="true" viewBox="0 0 24 24">
                              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                          </svg>
                      </button>
                  </div>
                  <div class="song-item-info">
                      <p class="song-title">${song.title}</p>
                      ${
                        song.explicit ? "🅴" : ""
                      } <a href="" class="song-performers">${song.artist}</a>
                  </div>
              </div>
              <a href="">${song.album}</a>
              <p>${song.dateAdded}</p>
              <p class="song-grid-4th-col">${song.duration}</p>
          `;

      const previousSongIndex = localStorage.getItem("currentSongIndex");
      const previousPlaylistId = localStorage.getItem("currentPlaylistIndex");
      const playlistPlayButton = document.querySelector(".play-button");

      const audioElement = document.getElementById("audio-player");
      playlistPlayButton.dataset.currentPlaylistId = index;

      if (index == previousPlaylistId) {
        if (audioElement.paused) {
          playlistPlayButton.innerHTML = `<svg height="30px" width="30px" role="img" aria-hidden="true" viewBox="0 0 16 16">
          <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
        </svg>`;
        } else {
          playlistPlayButton.innerHTML = `<svg height="30px" width="30px" role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M2 2h4v12H2V2zm8 0h4v12h-4V2z"></path>
              </svg>`;
        }
      } else {
        playlistPlayButton.innerHTML = `<svg height="30px" width="30px" role="img" aria-hidden="true" viewBox="0 0 16 16">
        <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
      </svg>`;
      }

      if (song.songIndex == previousSongIndex && index == previousPlaylistId) {
        songItem.classList.add("active");
        if (!audioElement.paused) {
          songItem.classList.add("playing");
        }
      }
      songListContainer.appendChild(songItem);
    });
  }
});
