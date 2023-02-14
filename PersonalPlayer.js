const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const player = $(".player-music");
const playing = $(".playing__modal");

const personal = $(".personal");

const libraryData = [
  {
    name: "China",
    artist: "Nhiều ca sĩ",
    key: "album-china",
    background: "./assets/music/china/images/01.jpg",
    listMusic: [
      {
        song: "A Moment Of Romance",
        artist: "Viên Phụng Nghi",
        path: "./assets/music/china/01AMomentOfRomance.mp3",
        thumbnail: "./assets/music/china/images/01.jpg",
      },
      {
        song: "999 Đóa Hồng",
        artist: "Trác Y Đình",
        path: "./assets/music/china/02DoaHong.mp3",
        thumbnail: "./assets/music/china/images/02.jpg",
      },
      {
        song: "Ảo Mộng Tình Yêu",
        artist: "Trác Y Đình",
        path: "./assets/music/china/03AoMongTinhYeu.mp3",
        thumbnail: "./assets/music/china/images/03.jpg",
      },
      {
        song: "Chờ Trên Tháng Năm",
        artist: "Lưu Đức Hoa",
        path: "./assets/music/china/04ChoTrenThangNam.mp3",
        thumbnail: "./assets/music/china/images/04.jpg",
      },
      {
        song: "Kiếp Ve Sầu",
        artist: "Trác Y Đình",
        path: "./assets/music/china/05KiepVeSau.mp3",
        thumbnail: "./assets/music/china/images/05.jpg",
      },
      {
        song: "Tình Nhạt Phai",
        artist: "Lưu Đức Hoa",
        path: "./assets/music/china/06TinhNhatPhai.mp3",
        thumbnail: "./assets/music/china/images/06.jpg",
      },
      {
        song: "Bến Thượng Hải",
        artist: "Lưu Đức Hoa",
        path: "./assets/music/china/07BenThuongHai.mp3",
        thumbnail: "./assets/music/china/images/07.jpg",
      },
    ],
  },
  {
    name: "Tiktok",
    artist: "Nhiều ca sĩ",
    key: "album-tiktok",
    background: "./assets/music/tiktok/images/01.jpg",
    listMusic: [
      {
        song: "Yêu Giang Sơn Càng Yêu Mỹ Nhân",
        artist: "Tiểu A Phong",
        path: "./assets/music/tiktok/01.mp3",
        thumbnail: "./assets/music/tiktok/images/01.jpg",
      },
      {
        song: "Melody Of The Night",
        artist: "Jin Shi",
        path: "./assets/music/tiktok/02.mp3",
        thumbnail: "./assets/music/tiktok/images/02.jpg",
      },
      {
        song: "Tiktok Music",
        artist: "V.A",
        path: "./assets/music/tiktok/03.mp3",
        thumbnail: "./assets/music/tiktok/images/03.jpg",
      },
      {
        song: "Star Sky",
        artist: "Two Steps From Hell",
        path: "./assets/music/tiktok/04.mp3",
        thumbnail: "./assets/music/tiktok/images/04.jpg",
      },
      {
        song: "Silent Open OST",
        artist: "Cagnet",
        path: "./assets/music/tiktok/05.mp3",
        thumbnail: "./assets/music/tiktok/images/05.jpg",
      },
      {
        song: "Windy Hill",
        artist: "V.A",
        path: "./assets/music/tiktok/06.mp3",
        thumbnail: "./assets/music/tiktok/images/06.jpg",
      },
      {
        song: "Khởi Hành",
        artist: "V.A",
        path: "./assets/music/tiktok/07.mp3",
        thumbnail: "./assets/music/tiktok/images/07.jpg",
      },
    ],
  },
  {
    name: "China 2",
    artist: "Nhiều ca sĩ",
    key: "album-china-2",
    background: "./assets/music/china2/images/a.jpg",
    listMusic: [
      {
        song: "Túy hồng trần - Remix",
        artist: "Ngụy Tân Vũ",
        path: "./assets/music/china2/a.mp3",
        thumbnail: "./assets/music/china2/images/a.jpg",
      },
      {
        song: "Thương ly biệt - Remix",
        artist: "Ngụy Tân Vũ",
        path: "./assets/music/china2/b.mp3",
        thumbnail: "./assets/music/china2/images/b.jpg",
      },
      {
        song: "Là tự em đa tình",
        artist: "Hồ Dương Lâm",
        path: "./assets/music/china2/c.mp3",
        thumbnail: "./assets/music/china2/images/c.jpg",
      },
      {
        song: "Họa tâm",
        artist: "Trương Lương Dĩnh",
        path: "./assets/music/china2/d.mp3",
        thumbnail: "./assets/music/china2/images/d.jpg",
      },
      {
        song: "Luân hồi chi cảnh",
        artist: "Critty",
        path: "./assets/music/china2/e.mp3",
        thumbnail: "./assets/music/china2/images/e.jpg",
      },
      {
        song: "Phù dung chớm nở, mưa đúng lúc",
        artist: "Châu Thâm - Trịnh Vân Long",
        path: "./assets/music/china2/f.mp3",
        thumbnail: "./assets/music/china2/images/f.jpg",
      },
    ],
  },
];

// Render Albums
libraryRender();
function libraryRender() {
  personal.innerHTML = `
    <div class='library active'>
      <div class='library__head'>
            <h3>Library</h3>
      </div>
      <div class='library__body'>
        <div class='library__subtitle'>
            <h5>Đã thêm gần đây</h5>
        </div>
        <div class='library__albums'>
          <div class='albums__parent'>
            ${libraryData
              .map(
                (obj) =>
                  `
                <div class='albums__child'>
                      <div class='album__image'>
                            <figure style='background-image: url(${obj.background})'></figure>
                      </div>
                      <div class='album__name'>
                            ${obj.name}
                      </div>
                      <div class='album__artist'>
                            ${obj.artist}
                      </div>
                </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
    <div class='playlist'>
    </div>
  `;
  $$(".albums__child").forEach((elem, index) => {
    elem.onclick = () => {
      musicApp.start(
        libraryData[index].listMusic,
        libraryData[index].key,
        true
      );

      setTimeout(()=>$('.info__audio-current').play())
      zmp3Storage.set("ALBUM_INDEX", index);

      // active playlist, remove active library
      $(".library").classList.remove("active");
      $(".playlist").classList.add("active");
      $(".header").style = "--header-nav-left-display: none";
    };
  });
}

// musicApp

const musicApp = {
  // Variable
  isMouse: false,

  // TrackBarRender
  trackThumbRender(ratio, track) {
    if (track) {
      return `
      border-radius: 4px;
      background: linear-gradient(
        to right,
        var(--progressbar-active-bg) 0%,
        var(--progressbar-active-bg) ${ratio}%,
        var(--progressbar-player-bg) ${ratio}%,
        var(--progressbar-player-bg) 100%
      )`;
    } else {
      return `
        <div class="thumb__bar" 
        style="border-radius: 50%;background-color: var(--progressbar-active-bg);transform: translate(${
          ratio - 6
        }px, -3.5px);"></div>
      `;
    }
  },

  // Player Render
  PlayerRender() {
    player.innerHTML = `
  <div class="player">
    <div class="player__wrapper">
      <div class="player__media">
        <div class="media__image player__image">
          <svg
            fill="var(--progressbar-active-bg)"
            viewBox="0 0 512 512"
            class="thumb-note note-1"
          >
            <path
              d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"
            ></path>
          </svg>
          <svg
            fill="var(--progressbar-active-bg)"
            viewBox="0 0 384 512"
            class="thumb-note note-2"
          >
            <path
              d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"
            ></path>
          </svg>
          <svg
            fill="var(--progressbar-active-bg)"
            viewBox="0 0 512 512"
            class="thumb-note note-3"
          >
            <path
              d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"
            ></path>
          </svg>
          <svg
            fill="var(--progressbar-active-bg)"
            viewBox="0 0 384 512"
            class="thumb-note note-4"
          >
            <path
              d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"
            ></path>
          </svg>
          <figure class="media__thumbnail"></figure>
        </div>
  
        <div class="media__body">
          <div class="media__info">
            <div class="info__song-wrapper">
              <h3 class="info__song-current"></h3>
            </div>
            <p class="info__artist-current"></p>
            <audio class="info__audio-current" src=""></audio>
          </div>
          <div class="media__option">
            <button>${icon.favorite}</button>
            <button>${icon.more}</button>
          </div>
        </div>
      </div>
  
      <div class="player__control">
        <div class="music__action">
          <button class="btn__shuffle">${icon.shuffle}</button>
          <button class="btn__prev">${icon.skipPrev}</button>
          <button class="btn__play">${icon.playRounded}</button>
          <button class="btn__next">${icon.skipNext}</button>
          <button class="btn__repeat">${icon.repeat}</button>
        </div>
        <div class="music__timeline">
          <div class="time left">00:88</div>
          <div class="timeline__duration">
            <div class="track__wrapper">
              <div class="track__bar duration__track"></div>
              <input
                class="input__duration"
                type="range"
                value="0"
                step="0.000001"
              />
            </div>
          </div>
          <div class="time right">05:33</div>
        </div>
      </div>
  
      <div class="player__subcontrol">
        <button class="btn__movie">${icon.movie}</button>
        <button class="btn__mic">${icon.mic}</button>
        <button class="btn__window">${icon.branding}</button>
        <div class="music__volume">
          <button class="btn__volume">${icon.volumeUp}</button>
          <div class="track__wrapper">
            <div class="track__bar volume__track"></div>
            <input class="input__volume" type="range" value="0" />
          </div>
        </div>
        <div class="music__divide"></div>
        <button class="btn__queue">${icon.queueMusic}</button>
      </div>
      <button class="player__btn-close">
        <span class="player__ic-close"></span>
      </button>
    </div>
  </div>
  
  
          `;

    // Set CurrentTime, durationTrack, durationThumb
    const inputDuration = $(".input__duration");
    const btnPlay = $(".btn__play");

    const durationTrack = $('.duration__track')
    const volumeTrack = $(".volume__track");
    const audio = $(".info__audio-current");
    const btnVolume = $(".btn__volume");
    // Set currentTime to Storage
    const currentTime = zmp3Storage.get(this.keyStorage)?.currentTime;
    currentTime && (audio.currentTime = currentTime);
    // Set volume to Storage
    const volumeCurrent = zmp3Storage.get(this.keyStorage)?.volumeCurrent;
    const volumeMuted = zmp3Storage.get(this.keyStorage)?.volumeMuted;

    const playerBtnClose = $(".player__btn-close");

    if (volumeMuted) {
      audio.muted = volumeMuted;
      volumeTrack.style = this.trackThumbRender(0, true);
      volumeTrack.innerHTML = this.trackThumbRender(0);
      btnVolume.innerHTML = icon.volumeMute;
    } else {
      audio.volume = volumeCurrent ? volumeCurrent : 0.7;
      volumeTrack.style = this.trackThumbRender(audio.volume * 100, true);
      setTimeout(
        () =>
          (volumeTrack.innerHTML = this.trackThumbRender(
            audio.volume * volumeTrack.offsetWidth
          ))
      );
      btnVolume.innerHTML = icon.volumeUp;
    }

    // Window matches mobile 739px
    if (window.matchMedia("(max-width: 740px)").matches) {
      btnPlay.innerHTML = icon.playArrow;
      $(".player__image").classList.add("thumb__mobile");
    } else {
      btnPlay.innerHTML = icon.playRounded;
      $(".player__image").classList.remove("thumb__mobile");
    }

    // Player onclick show nowPlaying
    player.onclick = (e) => {
      if (
        e.target.tagName !== "BUTTON" &&
        e.target.tagName !== "SPAN" &&
        e.target.tagName !== "INPUT"
      ) {
        player.classList.add("now-playing");
        // player.style.backgroundImage = `url(${currentSong.thumbnail})`
        const image = $('.media__thumbnail').querySelector('img')
        player.style.backgroundImage = `url(${image.src}`
        durationTrack.innerHTML = this.trackThumbRender(audio.currentTime/audio.duration * durationTrack.offsetWidth);
        volumeTrack.innerHTML = this.trackThumbRender(audio.volume * volumeTrack.offsetWidth)
      }
    };

    // playerBtnClose hide nowPlaying
    playerBtnClose.onclick = () => {
      player.classList.remove("now-playing")
      player.style.backgroundImage = 'var(--miniplayer-bg-img-root)'
      durationTrack.innerHTML = this.trackThumbRender(audio.currentTime/audio.duration * durationTrack.offsetWidth);
      volumeTrack.innerHTML = this.trackThumbRender(audio.volume * volumeTrack.offsetWidth)

    }

  },

  // Playlist Render
  playListRender() {
    $(".playlist").innerHTML = `
        <div class='playlist__back'>
              ${icon.arrowBack}
        </div>
        <div class='playlist__parent'>
            <div class='playlist__slide'>
                <div class='slide__wrapper'>
                    ${this.album
                      .map(
                        (obj) =>
                          `
                          <div class='slide__item fourth'>
                            <figure><img src='${obj.thumbnail}'></figure>
                          </div>
                        `
                      )
                      .join("")}
                </div>
            </div>
            <div class='playlist__body'>
            <div class='playlist__title'>
                <div class=''>Bài hát</div>
                <div class=''>Thời gian</div>
                <div class=''>Tùy chọn</div>
            </div>

                ${this.album
                  .map(
                    (obj) =>
                      `
                      <div class='level playlist__child'>
                            <div class='level__left'>
                                <div class='media__left media__image'>
                                    <figure class='playlist__thumbnail'>
                                      <img src='${obj.thumbnail}'>
                                      <div class='opacity'></div>
                                      <button class='btn__playing'>
                                        ${icon.playArrow}
                                      </button>
                                    </figure>
                                </div>
                                <div class='media__info'>
                                    <div class='info__song'>${obj.song}</div>
                                    <p class='info__artist'>${obj.artist}</p>
                                    <audio class='info__audio' src='${obj.path}'></audio>
                                </div>
                            </div>
                            
                            <div class='level__center'>
                              <span class='info__duration'>03:33</span>
                            </div>
                            <div class='media__option'>
                              <button>${icon.favorite}</button>
                              <button>${icon.more}</button>
                            </div>
                      </div>
                        `
                  )
                  .join("")}
            </div>
        </div>
        `;
    // Load duration playlist
    $$(".info__duration").forEach((elem, index) => {
      $$(".info__audio")[index].onloadedmetadata = () => {
        elem.textContent = this.formatTime($$(".info__audio")[index].duration);
      };
    });

    // playlist__back
    $(".playlist__back").onclick = () => {
      $(".library").classList.add("active");
      $(".playlist").classList.remove("active");
      $(".header").style = "--header-nav-left-display: flex";
    };
  },

  playingRender() {
    playing.innerHTML = `
    <div class="playing__btn-close">
      <span class='playing__btn-close-ic'></span>
    </div>
    `;
    //
    const playingBtnClose = $(".playing__btn-close");
    playingBtnClose.onclick = () => {
      playing.style.top = 100 + "%";
    };
  },

  // AutoRun Slide Item
  autoRunSlide() {
    const slideWrapper = $(".slide__wrapper");
    const slideItems = $$(".slide__item");
    let indexLastItem = slideItems.length - 1;
    let i = 0;

    autoRun();
    let timeId = setInterval(autoRun, 2000);
    function autoRun() {
      let first, second, third, prev;

      first = i;

      second = i + 1;
      second > indexLastItem && (second = 0);

      third = second + 1;
      third > indexLastItem && (third = 0);

      prev = i - 1;
      prev < 0 && (prev = indexLastItem);

      slideItems[first].className = "slide__item first";
      slideItems[second].className = "slide__item second";
      slideItems[third].className = "slide__item third";
      slideItems[prev].className = "slide__item fourth";

      i++;
      i > indexLastItem && (i = 0);
    }

    // clearTimeId onmouseenter
    slideWrapper.onmouseenter = () => clearInterval(timeId);

    // setTimeId onmouseleave
    slideWrapper.onmouseleave = () => (timeId = setInterval(autoRun, 2000));
  },

  // Set Current Song
  curentSong() {
    let currentSong = this.album[this.indexSong];
    $(
      ".player .media__thumbnail"
    ).innerHTML = `<img src='${currentSong.thumbnail}'>`;
    $(
      ".info__song-current"
    ).innerHTML = ` <div>${currentSong.song}</div> <div>${currentSong.song}</div>`;
    $(".info__artist-current").textContent = currentSong.artist;
    $(".info__audio-current").src = currentSong.path;

    // Set Current Song -- Active Current Song
    $$(".playlist__child").forEach((elem, index) => {
      if (index === this.indexSong) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    });

    // Set Current Song -- Set btn_playing Playlist
    $$(".btn__playing").forEach((elem) => (elem.innerHTML = icon.playArrow));

    // Set background if class Nowplaying
    $(".player-music.now-playing") &&
      ($(
        ".player-music.now-playing"
      ).style.backgroundImage = `url(${currentSong.thumbnail})`);

    // Set Current Song -- Set Local Storage
    zmp3Storage.set(this.keyStorage, {
      ...zmp3Storage.get(this.keyStorage),
      indexSong: this.indexSong,
      arrShuffle: this.arrShuffle,
    });
  },

  // Check IndexRepeat
  checkIndexRepeat() {
    if (this.indexBtnRepeat === 0) {
      $(".btn__repeat").classList.remove("active");
    } else if (this.indexBtnRepeat === 1) {
      $(".btn__repeat").innerHTML = icon.repeatOne;
      $(".btn__repeat").classList.add("active");
    } else if (this.indexBtnRepeat === 2) {
      $(".btn__repeat").classList.add("active");
    } else {
      $(".btn__repeat").innerHTML = icon.repeat;
    }
  },

  // Check IndexShuffle
  checkIndexShuffle() {
    this.indexBtnShuffle === 0
      ? $(".btn__shuffle").classList.remove("active")
      : $(".btn__shuffle").classList.add("active");
  },

  // Shuffle Song
  shuffleSong() {
    let indexShuffle;
    do {
      indexShuffle = Math.floor(Math.random() * this.album.length);
    } while (this.arrShuffle.includes(indexShuffle));

    this.indexSong = indexShuffle;
    this.arrShuffle.push(indexShuffle);
    this.arrShuffle.length === this.album.length && (this.arrShuffle = []);
  },

  // Format time
  formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);

    sec < 10 && (sec = "0" + sec);
    min < 10 && (min = "0" + min);
    return `${min}:${sec}`;
  },

  // ListenEvent
  listenEvent() {
    const audio = $(".info__audio-current");

    const btnPlay = $(".btn__play");
    const btnNext = $(".btn__next");
    const btnPrev = $(".btn__prev");
    const btnShuffle = $(".btn__shuffle");
    const btnRepeat = $(".btn__repeat");
    const timeLeft = $(".time.left");
    const durationTrack = $(".duration__track");
    const inputDuration = $(".input__duration");
    const timeRight = $(".time.right");

    const btnMovie = $(".btn__movie");
    const btnMic = $(".btn__mic");
    const btnWindow = $(".btn__window");
    const btnVolume = $(".btn__volume");
    const volumeTrack = $(".volume__track");
    const inputVolume = $(".input__volume");
    const btnQueue = $(".btn__queue");

    const btnsPlaying = $$(".btn__playing");
    const windowMatches739px = window.matchMedia("(max-width: 740px)");

    // ListenEvent -- btnPlay click
    btnPlay.onclick = () => {
      audio && audio.paused ? audio.play() : audio.pause();
    };

    // ListenEvent -- btnNext click
    btnNext.onclick = () => {
      if (this.indexBtnShuffle === 1) {
        this.shuffleSong();
      } else {
        this.indexSong++;
        this.indexSong === this.album.length && (this.indexSong = 0);
      }
      this.curentSong();
      btnPlay.innerHTML === icon.playRounded ||
      btnPlay.innerHTML === icon.playArrow
        ? audio.pause()
        : audio.play();
    };

    // ListenEvent -- btnPrev click
    btnPrev.onclick = () => {
      if (this.indexBtnShuffle === 1) {
        this.shuffleSong();
      } else {
        this.indexSong--;
        this.indexSong < 0 && (this.indexSong = this.album.length - 1);
      }
      this.curentSong();
      btnPlay.innerHTML === icon.playRounded ||
      btnPlay.innerHTML === icon.playArrow
        ? audio.pause()
        : audio.play();
    };

    // ListenEvent -- btnRepeat click
    btnRepeat.onclick = () => {
      this.indexBtnRepeat++;
      this.indexBtnRepeat > 2 && (this.indexBtnRepeat = 0);
      if (this.indexBtnRepeat === 0) {
        btnRepeat.classList.remove("active");
      } else if (this.indexBtnRepeat === 1) {
        btnRepeat.innerHTML = icon.repeatOne;
        btnRepeat.classList.add("active");
      } else {
        btnRepeat.innerHTML = icon.repeat;
      }

      // set localStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        indexBtnRepeat: this.indexBtnRepeat,
      });
    };

    // ListenEvent -- btnShuffle onclick
    btnShuffle.onclick = () => {
      this.indexBtnShuffle === 0
        ? (this.indexBtnShuffle = 1)
        : (this.indexBtnShuffle = 0);
      this.indexBtnShuffle === 0
        ? btnShuffle.classList.remove("active")
        : btnShuffle.classList.add("active");

      // set localStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        indexBtnShuffle: this.indexBtnShuffle,
      });
    };

    // ListenEvent -- btnsPlaying onclick
    btnsPlaying.forEach((elem, index) => {
      elem.onclick = () => {
        if (this.indexSong !== index) {
          this.indexSong = index;
          this.curentSong();
          audio.play()
        } else {
          btnPlay.click();
        }
      };
    });

    // ListenEvent -- Audio Onplay
    audio.onplay = () => {
      btnPlay.innerHTML = icon.pauseRounded;
      btnsPlaying[this.indexSong].innerHTML = icon.iconPlaying;

      // Window matches mobile 739px
      if (window.matchMedia("(max-width: 739px)").matches) {
        btnPlay.innerHTML = icon.pause;
      }
    };
    // ListenEvent -- Audio Onpause
    audio.onpause = () => {
      btnPlay.innerHTML = icon.playRounded;
      btnsPlaying[this.indexSong].innerHTML = icon.playArrow
      
      // Window matches mobile 739px
      if (window.matchMedia("(max-width: 739px)").matches) {
        btnPlay.innerHTML = icon.playArrow;
      }
    };

    // ListenEvent -- Audio Onended
    audio.onended = () => {
      if (this.indexBtnRepeat === 1) {
        audio.play();
      } else if (
        this.indexBtnRepeat === 0 &&
        this.indexSong === this.album.length - 1
      ) {
        audio.pause();
      } else {
        btnNext.click();
        audio.paused && audio.play();
      }
    };

    // ListenEvent -- Audio Onloadedmetadata
    audio.onloadedmetadata = () => {
      timeRight.textContent = this.formatTime(audio.duration);
    };

    // ListenEvent -- Audio Timeupdate
    audio.ontimeupdate = () => {
      if (!this.isMouse) {
        let currentTime = audio.currentTime;
        let ratioTime = (currentTime / audio.duration) * 100;
        !ratioTime && (ratioTime = 0);

        timeLeft.textContent = this.formatTime(currentTime);
        durationTrack.style = this.trackThumbRender(ratioTime, true);
        // Audio Timeupdate -- ratioBar

        let ratioBar = (ratioTime / 100) * durationTrack.offsetWidth;
        durationTrack.innerHTML = this.trackThumbRender(ratioBar);
        inputDuration.value = ratioTime;

        // Audio Timeupdate -- setLocalStorage
        zmp3Storage.set(this.keyStorage, {
          ...zmp3Storage.get(this.keyStorage),
          currentTime,
        });
      }

      // audio.paused
      if (audio.paused) {
        player.classList.remove("playing");
      } else {
        player.classList.add("playing");
      }
    };

    // ListenEvent -- inputDuration__Mousedown
    inputDuration.onmousedown = () => {
      this.isMouse = true;
    };

    // ListenEvent -- inputDuration__Oninput
    inputDuration.oninput = (e) => {
      timeLeft.textContent = this.formatTime(
        (e.target.value / 100) * audio.duration
      );
      durationTrack.style = this.trackThumbRender(e.target.value, true);
      // inputDuration -- Ratio Bar
      let ratioBar = (e.target.value / 100) * durationTrack.offsetWidth;
      durationTrack.innerHTML = this.trackThumbRender(ratioBar);
    };

    // ListenEvent -- inputDuration__Onchange
    inputDuration.onchange = (e) => {
      this.isMouse = false;
      audio.currentTime = (e.target.value / 100) * audio.duration;

      // ListenEvent -- inputDuration__setLocalStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        currentTime: audio.currentTime,
      });
    };

    // ListenEvent -- btnVolume onclick
    btnVolume.onclick = () => {
      audio.volume === 0 && (audio.muted = true);
      audio.muted = audio.muted ? (audio.muted = false) : (audio.muted = true);

      if (audio.muted) {
        volumeTrack.style = this.trackThumbRender(0, true);
        volumeTrack.innerHTML = this.trackThumbRender(0);
        btnVolume.innerHTML = icon.volumeMute;
      } else {
        volumeTrack.style = this.trackThumbRender(audio.volume * 100, true);
        volumeTrack.innerHTML = this.trackThumbRender(
          audio.volume * volumeTrack.offsetWidth
        );
        btnVolume.innerHTML = icon.volumeUp;
      }

      // set LocalStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        volumeCurrent: audio.volume,
        volumeMuted: audio.muted,
      });
    };

    // ListenEvent -- inputVolume__Oninput
    inputVolume.oninput = (e) => {
      audio.volume = inputVolume.value / 100;
      audio.volume === 0 ? (audio.muted = true) : (audio.muted = false);

      volumeTrack.style = this.trackThumbRender(e.target.value, true);
      // inputVolume -- Thumb__Bar
      let ratioBar = (e.target.value / 100) * volumeTrack.offsetWidth;
      volumeTrack.innerHTML = this.trackThumbRender(ratioBar);

      audio.volume
        ? (btnVolume.innerHTML = icon.volumeUp)
        : (btnVolume.innerHTML = icon.volumeMute);

      // set LocalStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        volumeCurrent: audio.volume,
        volumeMuted: audio.muted,
      });
    };

    // Window matches mobile 739px
    windowMatches739px.onchange = () => {
      if (windowMatches739px.matches) {
        btnPlay.innerHTML = audio.paused ? icon.playArrow : icon.pause;
      } else {
        btnPlay.innerHTML = audio.paused ? icon.playRounded : icon.pauseRounded;
      }
    };
  },

  //   Start app
  start(album, keyStorage, autoplay) {
    this.album = album;
    this.keyStorage = keyStorage;
    this.indexSong = zmp3Storage.get(keyStorage)?.indexSong || 0;
    this.indexBtnRepeat = zmp3Storage.get(keyStorage)?.indexBtnRepeat || 0;
    this.indexBtnShuffle = zmp3Storage.get(keyStorage)?.indexBtnShuffle || 0;
    this.arrShuffle = zmp3Storage.get(keyStorage)?.arrShuffle || [];
    this.autoplay = autoplay ? (this.autoplay = true) : (this.autoplay = false);

    this.PlayerRender();
    this.playListRender();
    this.playingRender();
    this.curentSong();
    this.listenEvent();
    this.autoRunSlide();
    this.checkIndexRepeat();
    this.checkIndexShuffle();

    // player.style.display = "flex";
    player.classList.add('active')
    $('.sidebar').style.height = 'var(--sidebar-height)'
  },
};

// if has key Storage run musicApp
const ALBUM_INDEX = zmp3Storage.get("ALBUM_INDEX");

  if(ALBUM_INDEX !== null) {
    musicApp.start(
      libraryData[ALBUM_INDEX].listMusic,
      libraryData[ALBUM_INDEX].key
    )
  }
