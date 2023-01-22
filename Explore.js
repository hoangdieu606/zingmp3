// Icon data
const icon = {
  arrowForward: `<span class="material-symbols-outlined">arrow_forward_ios</span>`,
  arrowBack: `<span class="material-symbols-outlined">arrow_back_ios_new</span>`,
  favorite: `<span class="material-symbols-outlined">favorite</span>`,
  more: `<span class="material-symbols-outlined">more_horiz</span>`,
  live: `./assets/icons/live-tag.svg`,
  playCircle: `<span class="material-symbols-outlined">play_circle</span>`,
  pauseCircle: `<span class="material-symbols-outlined">pause_circle</span>`,
  playRounded: `<span class="material-symbols-rounded">play_circle</span>`,
  pauseRounded: `<span class="material-symbols-rounded">pause_circle</span>`,
  skipNext: `<span class="material-symbols-rounded">skip_next</span>`,
  skipPrev: `<span class="material-symbols-rounded">skip_previous</span>`,
  shuffle: `<span class="material-symbols-rounded">shuffle</span>`,
  repeat: `<span class="material-symbols-rounded">repeat</span>`,
  repeatOne: `<span class="material-symbols-rounded">repeat_one</span>`,
  volumeMute: `<span class="material-symbols-outlined">volume_mute</span>`,
  volumeUp: `<span class="material-symbols-outlined">volume_up</span>`,
  libraryMusic: `<span class="material-symbols-rounded">library_music</span>`,
  mic: `<span class="material-symbols-outlined">mic</span>`,
  queueMusic: `<span class="material-symbols-outlined">queue_music</span>`,
  branding: `<span class="material-symbols-outlined">branding_watermark</span>`,
  movie: `<span class="material-symbols-outlined">movie</span>`,
  
  playArrow: `<span class="material-symbols-rounded">play_arrow</span>`,
  pause: `<span class="material-symbols-outlined">pause</span>`,
  iconPlaying:  `<img src='./assets/icons/icon_playing.gif'>`,
};

// Gallery data
const galleryData = [
  {
    title: "",
    class: "select",
    image: `./assets/images/a.jpg`,
  },
  {
    title: "",
    class: "next",
    image: `./assets/images/b.jpg`,
  },
  {
    title: "",
    class: "last",
    image: `./assets/images/c.jpg`,
  },
  {
    title: "",
    class: "add",
    image: `./assets/images/d.jpg`,
  },
  {
    title: "",
    class: "first",
    image: `./assets/images/e.jpg`,
  },
  {
    title: "",
    class: "prev",
    image: `./assets/images/f.jpg`,
  },
];

// Carousel data
const carouselData = {
  best2022: [
    {
      title: "10 Nghệ Sĩ Xuất Sắc 2022",
      text: "Hoàng Thùy Linh, AMEE, MONO...",
      class: "",
      image: "./assets/images/carousel/best2022-1.webp",
    },
    {
      title: "10 Ca Khúc Xuất Sắc",
      text: "Karik, Đức Phúc, Văn Mai Hương...",
      class: "",
      image: "./assets/images/carousel/best2022-2.webp",
    },
    {
      title: "V-Pop Nổi Bật 2022",
      text: "Miu Lê, Karik, Hoàng Thùy Linh...",
      class: "",
      image: "./assets/images/carousel/best2022-3.webp",
    },
    {
      title: "US-UK Nổi Bật 2022",
      text: "Harry Styles, The Weeknd, Troye Sivan...",
      class: "",
      image: "./assets/images/carousel/best2022-4.webp",
    },
    {
      title: "Hip-hop Việt Nổi Bật 2022",
      text: "HIEUTHUHAI, Phúc Du, Karik...",
      class: "",
      image: "./assets/images/carousel/best2022-5.webp",
    },
  ],
  newYear: [
    {
      title: "Xuân Lắng Đọng",
      text: "Lắng đọng ngẫm về 1 năm thật dài đã trôi qua cùng...",
      class: "",
      image: "./assets/images/carousel/newyear-1.jpg",
    },
    {
      title: "Cà Phê Quán Quen",
      text: "Quán quen góc cũ cùng những giai điệu V-Pop...",
      class: "",
      image: "./assets/images/carousel/newyear-2.jpg",
    },
    {
      title: "Holiday Time",
      text: "Nếu bạn đang có ý định du lịch thì phải bỏ túi ngay...",
      class: "",
      image: "./assets/images/carousel/newyear-3.jpg",
    },
    {
      title: "Nhẹ Nhàng Cùng V-Pop",
      text: "Thả mình cùng những giai điệu V-Pop nhẹ nhàng...",
      class: "",
      image: "./assets/images/carousel/newyear-4.jpg",
    },
    {
      title: "Acoustic Chill",
      text: "Không ồn ã, không vội vàng, cùng thư giãn với...",
      class: "",
      image: "./assets/images/carousel/newyear-5.jpg",
    },
  ],
  newDay: [
    {
      title: "V-Pop Tháng 1/2023",
      text: "Noo Phước Thịnh, Hứa Kim Tuyền, Kai Đinh...",
      class: "",
      image: "./assets/images/carousel/newday-1.webp",
    },
    {
      title: "US-UK Tháng 1/2023",
      text: "The Weeknd, SZA, Lewis Capaldi...",
      class: "",
      image: "./assets/images/carousel/newday-2.webp",
    },
    {
      title: "K-Pop Tháng 1/2023",
      text: "ATEEZ, GOT the beat, Super Junior...",
      class: "",
      image: "./assets/images/carousel/newday-3.webp",
    },
    {
      title: "C-Pop Tháng 1/2023",
      text: "Jackson Wang, WayV, Daniel Zhou...",
      class: "",
      image: "./assets/images/carousel/newday-4.webp",
    },
    {
      title: "Indie Việt Tháng 1/2023",
      text: "Thái Đinh, T.R.I, The Sheep...",
      class: "",
      image: "./assets/images/carousel/newday-5.webp",
    },
  ],
  top100: [
    {
      title: "Top 100 Bài Hát Nhạc...",
      text: "MONO, Vương Anh Tú, Keyo...",
      class: "",
      image: "./assets/images/carousel/top100-1.webp",
    },
    {
      title: "Top 100 Pop Âu Mỹ Hay...",
      text: "Adele, Justin Bieber, Meghan Trainor...",
      class: "",
      image: "./assets/images/carousel/top100-2.webp",
    },
    {
      title: "Top 100 Nhạc...",
      text: "Alan Walker, K-391, Emelie Hollow...",
      class: "",
      image: "./assets/images/carousel/top100-3.webp",
    },
    {
      title: "Top 100 Nhạc Trữ Tình...",
      text: "Như Quỳnh, Mạnh Quỳnh, Tố My...",
      class: "",
      image: "./assets/images/carousel/top100-4.webp",
    },
    {
      title: "Top 100 Nhạc Hàn Quốc...",
      text: "BLACKPINK, IVE, (G)I-DLE...",
      class: "",
      image: "./assets/images/carousel/top100-5.webp",
    },
  ],
  xone: [
    {
      title: "2022 Hot New",
      text: "Nhạc MỚI của Nicki Minaj, SZA,...",
      class: "",
      image: "./assets/images/carousel/xone-1.webp",
    },
    {
      title: "2021 Best Hits",
      text: "HITS lớn của Rosé, IU,...",
      class: "",
      image: "./assets/images/carousel/xone-2.webp",
    },
    {
      title: "V-POP Đầu Năm",
      text: "Nghe list nạc hay, cả năm may mắn!",
      class: "",
      image: "./assets/images/carousel/xone-3.webp",
    },
    {
      title: "Rock The New Year!",
      text: "Chào mừng năm mới với MODERN ROCK!!!",
      class: "",
      image: "./assets/images/carousel/xone-4.webp",
    },
    {
      title: "Drop The EDM'S Beat",
      text: "Xập xình ngày đầu năm với list EDM này!",
      class: "",
      image: "./assets/images/carousel/xone-5.webp",
    },
  ],
};

// Banner data
const bannerData = [
  "./assets/images/banner/1.jpg",
  "./assets/images/banner/2.jpg",
  "./assets/images/banner/3.jpg",
];

// Artist data
const artistData = [
  "./assets/images/artist/1.png",
  "./assets/images/artist/2.png",
  "./assets/images/artist/3.png",
  "./assets/images/artist/4.png",
  "./assets/images/artist/5.png",
  "./assets/images/artist/6.png",
  "./assets/images/artist/7.png",
  "./assets/images/artist/8.png",
  "./assets/images/artist/9.png",
  "./assets/images/artist/10.png",
  "./assets/images/artist/11.png",
];

// New Music data
const newMusicData = {
  primary: [
    {
      title: "Quả Phụ Tướng",
      artist: "Dunghoangpham",
      order: "#1",
      date: "26.12.2022",
      image: "./assets/images/newmusic/1.webp",
    },
    {
      title: "Người Thương Em Đây Mà",
      artist: "Đinh Kiến Phong",
      order: "#2",
      date: "29.12.2022",
      image: "./assets/images/newmusic/2.webp",
    },
    {
      title: "Chịu Em Đi",
      artist: "Tracy Thảo My, YuniBoo",
      order: "#3",
      date: "30.12.2022",
      image: "./assets/images/newmusic/3.webp",
    },
    {
      title: "Bông Hoa Nở Muộn",
      artist: "Khánh Trung, Hana Cẩm Tiên",
      order: "#4",
      date: "30.12.2022",
      image: "./assets/images/newmusic/4.webp",
    },
    {
      title: "Thương Phận Đời Con Gái",
      artist: "Hồ Việt Trung",
      order: "#5",
      date: "29.12.2022",
      image: "./assets/images/newmusic/5.webp",
    },
    {
      title: "Con Hứa Sẽ Về",
      artist: "Lê Bảo Bình",
      order: "#6",
      date: "27.12.2022",
      image: "./assets/images/newmusic/6.webp",
    },
    {
      title: "Anh Chưa Nghĩ Tới",
      artist: "Phan Duy Anh, ACV",
      order: "#7",
      date: "27.12.2022",
      image: "./assets/images/newmusic/7.webp",
    },
    {
      title: "có người đón em rồi..",
      artist: "OSAD",
      order: "#8",
      date: "29.12.2022",
      image: "./assets/images/newmusic/8.webp",
    },
    {
      title: "Xem tất cả",
      artist: "",
      order: "#All",
      date: "",
      image: "./assets/images/newmusic/all.jpg",
      other: "end",
    },
  ],
  secondary: [
    {
      title: "Tết Này Phất Luôn...",
      text: "Hồng Thanh",
      class: "",
      image: "./assets/images/carousel/newmusic-1.webp",
    },
    {
      title: "Cơm Đoàn Viên (Single)",
      text: "Thành Đạt",
      class: "",
      image: "./assets/images/carousel/newmusic-2.webp",
    },
    {
      title: "Dancing All Night (Single)",
      text: "Quang Hà",
      class: "",
      image: "./assets/images/carousel/newmusic-3.webp",
    },
    {
      title: "Từ Lúc Có Em (Single)",
      text: "Chớp, Simp, Zero",
      class: "",
      image: "./assets/images/carousel/newmusic-4.webp",
    },
    {
      title: "Ngày Xuân Đến (Single)",
      text: "Võ Lê Mi, Jin Tuấn Nam",
      class: "",
      image: "./assets/images/carousel/newmusic-5.webp",
    },

    // 22222
    {
      title: "Nàng Sen (Single)",
      text: "Hoàng Y Nhung",
      class: "",
      image: "./assets/images/carousel/newmusic-6.webp",
    },
    {
      title: "Tết Rộn Ràng (Single)",
      text: "Nhật Kim Anh",
      class: "",
      image: "./assets/images/carousel/newmusic-7.webp",
    },
    {
      title: "Tết Cười, Mùa Xuân Tới",
      text: "Hà Đức Tâm",
      class: "",
      image: "./assets/images/carousel/newmusic-8.webp",
    },
    {
      title: "Tết này con có thể?",
      text: "Trấn Minh, Khương Linh",
      class: "",
      image: "./assets/images/carousel/newmusic-9.webp",
    },
    {
      title: "Cứ Phone Cho Anh",
      text: "Khánh Juno",
      class: "",
      image: "./assets/images/carousel/newmusic-10.webp",
    },

    /// 33333
    {
      title: "Trái Tim Mồ Côi (Single)",
      text: "Phát Hồ, Kiều Trang",
      class: "",
      image: "./assets/images/carousel/newmusic-11.webp",
    },

    {
      title: "Trăng Ơi! (Single)",
      text: "FOR7",
      class: "",
      image: "./assets/images/carousel/newmusic-12.webp",
    },
  ],
};

// Radio data
const radioData = [
  {
    title: "XONE Radio",
    subtitle: "111 đang nghe",
    svgCdn: 50,
    imgBig: "./assets/images/radio/1.webp",
    imgSmall: "./assets/images/radio/1a.webp",
  },
  {
    title: "V-POP",
    subtitle: "222 đang nghe",
    svgCdn: 100,
    imgBig: "./assets/images/radio/2.webp",
    imgSmall: "./assets/images/radio/2a.webp",
  },
  {
    title: "Pladio",
    subtitle: "333 đang nghe",
    svgCdn: 150,
    imgBig: "./assets/images/radio/3.webp",
    imgSmall: "./assets/images/radio/3a.webp",
  },
  {
    title: "Chạm",
    subtitle: "444 đang nghe",
    svgCdn: 200,
    imgBig: "./assets/images/radio/4.webp",
    imgSmall: "./assets/images/radio/4a.webp",
  },
  {
    title: "On Air",
    subtitle: "555 đang nghe",
    svgCdn: 250,
    imgBig: "./assets/images/radio/5a.webp",
    imgSmall: "./assets/images/radio/5a.webp",
  },
  {
    title: "Bolero",
    subtitle: "666 đang nghe",
    svgCdn: 300,
    imgBig: "./assets/images/radio/6.webp",
    imgSmall: "./assets/images/radio/6a.webp",
  },
  {
    title: "US-UK",
    subtitle: "777 đang nghe",
    svgCdn: 50,
    imgBig: "./assets/images/radio/7.webp",
    imgSmall: "./assets/images/radio/7a.webp",
  },
  {
    title: "K-POP",
    subtitle: "888 đang nghe",
    svgCdn: 0,
    imgBig: "./assets/images/radio/8.webp",
    imgSmall: "./assets/images/radio/8a.webp",
  },
  {
    title: "Acoustic",
    subtitle: "999 đang nghe",
    svgCdn: 100,
    imgBig: "./assets/images/radio/9.webp",
    imgSmall: "./assets/images/radio/9a.webp",
  },
  {
    title: "Rap Việt",
    subtitle: "678 đang nghe",
    svgCdn: 150,
    imgBig: "./assets/images/radio/10.webp",
    imgSmall: "./assets/images/radio/10a.webp",
  },
];

// Event data
const enventData = [
  {
    title: "Clone Web Zing mp3",
    subtitle: "Tại Facebook F8",
    tag: "Đang diễn ra",
    image: "./assets/images/event/event1.jpg",
    avatar1: "./assets/images/event/1.jpg",
    avatar2: "./assets/images/event/2.jpg",
    avatar3: "./assets/images/event/3.jpg",
    avatar4: "./assets/images/event/4.jpg",
    avatar5: "./assets/images/event/5.jpg",
    avatar6: "./assets/images/event/6.jpg",
    avatarText: "+888",
  },
  {
    title: "Happy New Year",
    subtitle: "Tại Facebook F8",
    tag: "Đang diễn ra",
    image: "./assets/images/event/event2.jpg",
    avatar1: "./assets/images/event/1.jpg",
    avatar2: "./assets/images/event/2.jpg",
    avatar3: "./assets/images/event/3.jpg",
    avatar4: "./assets/images/event/4.jpg",
    avatar5: "./assets/images/event/5.jpg",
    avatar6: "./assets/images/event/6.jpg",
    avatarText: "+999",
  },
];

// Footer data
const footerData = [
  {
    title: "",
    image: "./assets/images/footer/1.png",
  },
  {
    title: "",
    image: "./assets/images/footer/2.png",
  },
  {
    title: "",
    image: "./assets/images/footer/3.png",
  },
  {
    title: "",
    image: "./assets/images/footer/4.png",
  },
  {
    title: "",
    image: "./assets/images/footer/5.png",
  },
  {
    title: "",
    image: "./assets/images/footer/6.png",
  },
  {
    title: "",
    image: "./assets/images/footer/7.png",
  },
  {
    title: "",
    image: "./assets/images/footer/8.png",
  },
  {
    title: "",
    image: "./assets/images/footer/9.png",
  },
  {
    title: "",
    image: "./assets/images/footer/10.png",
  },
];

// Get ItemLayer Maxwith -- Run
let itemPrimary = getItemLayer(1224, 3, 2);
let itemSecondary = getItemLayer(1350, 5, 4);
let itemArtist = getItemLayer(1224, 7, 5);

// Content Render Component
const explore = document.querySelector(".explore");
explore.innerHTML = Explore();
function Explore() {
  return `
  <div class='content__parent'>
      ${Gallery(galleryData, icon)}
      ${CarouselRender(carouselData.best2022, icon, "Hay Nhất Của 2022 ⭐")}
      ${CarouselRender(carouselData.newYear, icon, "New year vibe ✨")}

      <div class="section radio__primary">
         ${RadioRender(radioData, icon, "Radio nổi bật")}
      </div>

      ${CarouselRender(carouselData.newDay, icon, "Nhạc Mới Mỗi Ngày")}
      ${Banner(bannerData)}

      <div class="section artist__primary">
         ${ArtistRender(artistData, icon)}
      </div>

      ${CarouselRender(carouselData.top100, icon, "Top 100")}
      ${CarouselRender(carouselData.xone, icon, "XONE's CORNER")}

      <div class="section new-music__primary">
          ${NewMusicPrimary(newMusicData.primary, icon, "Nhạc Mới")}
      </div>
      <div class="section new-music__secondary">
         ${NewMusicSecondary(newMusicData.secondary, icon)}
      </div>

      ${EventRender(enventData, "Sự kiện")}
      ${FooterRender(footerData, "Đối tác âm nhạc")}
    </div>
    `;
}

// Gallery Render Component
function Gallery(gallery, icon) {
  return `
    <div class="gallery-container">
      <div class="gallery-prev"><button class="carousel-control-prev">${
        icon.arrowBack
      }</button></div>
      ${gallery
        .map(
          (obj) =>
            `
             <div class="gallery-item ${obj.class}"> 
              <img src="${obj.image}" alt="">
             </div>

          `
        )
        .join("")}
    <div class="gallery-next"><button class="carousel-control-next">${
      icon.arrowForward
    }</button></div>
  </div>
    `;
}

// Gallery Run
galleryRun();
function galleryRun() {
  let arr = ["select", "next", "last", "add", "first", "prev"];
  let galleryTags = document.querySelectorAll(".gallery-item");
  let galleryContainerTags = document.querySelector(".gallery-container");
  let controlPrev = document.querySelector(
    ".gallery-prev .carousel-control-prev"
  );
  let controlNext = document.querySelector(
    ".gallery-next .carousel-control-next"
  );

  //
  let indexLast = arr.length - 1;
  let i = arr.length;
  // i++;
  // 5000s
  let timeId = setInterval(galleryDecre, 5000);
  function galleryDecre() {
    let select, next, first, last, add, prev;

    i < 0 && (i = indexLast);
    i--;
    // console.log(i);
    select = i;
    select < 0 && (select = indexLast);
    prev = select - 1;
    prev < 0 && (prev = indexLast);
    next = select + 1;
    next > indexLast && (next = 0);
    first = next + 1;
    first > indexLast && (first = 0);
    last = first + 1;
    last > indexLast && (last = 0);
    add = last + 1;
    add > indexLast && (add = 0);

    //render
    galleryTags[0].className = `gallery-item ${arr[select]}`;
    galleryTags[1].className = `gallery-item ${arr[next]}`;
    galleryTags[2].className = `gallery-item ${arr[first]}`;
    galleryTags[3].className = `gallery-item ${arr[last]}`;
    galleryTags[4].className = `gallery-item ${arr[add]}`;
    galleryTags[5].className = `gallery-item ${arr[prev]}`;
  }

  function galleryIncre() {
    let select, next, first, last, add, prev;
    i > indexLast && (i = 0);
    i++;

    select = i;
    // console.log(i);
    select > indexLast && (select = 0);

    prev = select - 1;
    prev < 0 && (prev = indexLast);
    next = select + 1;
    next > indexLast && (next = 0);
    first = next + 1;
    first > indexLast && (first = 0);
    last = first + 1;
    last > indexLast && (last = 0);
    add = last + 1;
    add > indexLast && (add = 0);

    //render
    galleryTags[0].className = `gallery-item ${arr[select]}`;
    galleryTags[1].className = `gallery-item ${arr[next]}`;
    galleryTags[2].className = `gallery-item ${arr[first]}`;
    galleryTags[3].className = `gallery-item ${arr[last]}`;
    galleryTags[4].className = `gallery-item ${arr[add]}`;
    galleryTags[5].className = `gallery-item ${arr[prev]}`;
  }
  galleryContainerTags.addEventListener("mouseenter", function () {
    clearInterval(timeId);
    controlPrev.style.opacity = 1;
    controlNext.style.opacity = 1;
    controlPrev.onclick = () => galleryIncre();
    controlNext.onclick = () => galleryDecre();
  });
  galleryContainerTags.addEventListener("mouseleave", function () {
    timeId = setInterval(galleryDecre, 5000);
    controlPrev.style.opacity = 0;
    controlNext.style.opacity = 0;
  });
}

// Media Run
mediaRun(
  ".artist__parent",
  ".artist__child",
  itemArtist,
  ".artist__btnprev",
  ".artist__btnnext"
);
mediaRun(".primary__parent", ".primary__child", itemPrimary);
mediaRun(".secondary__parent", ".secondary__child", itemSecondary);

// Matches Window -- Radio Render
matchesWindow(
  "(max-width: 1224px)",
  ".radio__primary",
  RadioRender,
  "",
  nextPrevMedia,
  {
    data: radioData,
    icon,
    title: "",
    selectorParent: ".radio__parent",
    selectorChild: ".radio__child",
    itemMatches: 5,
    itemNoMatches: 7,
    btnPrev: ".radio__btnprev",
    btnNext: ".radio__btnnext",
  }
);

// Matches Window -- Artist Render
matchesWindow(
  "(max-width: 1224px)",
  ".artist__primary",
  ArtistRender,
  mediaRun,
  "",
  {
    data: artistData,
    icon,
    title: "",
    selectorParent: ".artist__parent",
    selectorChild: ".artist__child",
    itemMatches: 5,
    itemNoMatches: 7,
    btnPrev: ".artist__btnprev",
    btnNext: ".artist__btnnext",
  }
);

// Matches Window -- NewMusicPrimary Render
matchesWindow(
  "(max-width: 1224px)",
  ".new-music__primary",
  NewMusicPrimary,
  mediaRun,
  "",
  {
    data: newMusicData.primary,
    icon,
    title: "Nhạc Mới",
    selectorParent: ".primary__parent",
    selectorChild: ".primary__child",
    itemMatches: 2,
    itemNoMatches: 3,
  }
);
// Matches Window -- NewMusicSecondary Render
matchesWindow(
  "(max-width: 1350px)",
  ".new-music__secondary",
  NewMusicSecondary,
  mediaRun,
  "",
  {
    data: newMusicData.secondary,
    icon,
    title: "",
    selectorParent: ".secondary__parent",
    selectorChild: ".secondary__child",
    itemMatches: 4,
    itemNoMatches: 5,
  }
);

// Matches Window -- Render
function matchesWindow(
  maxwith,
  selectorRoot,
  callbackRender,
  callbackAutoRun,
  callbackClickRun,
  objData
) {
  let {
    data,
    icon,
    title,
    selectorParent,
    selectorChild,
    itemMatches,
    itemNoMatches,
    btnPrev,
    btnNext,
  } = objData;

  let maxwithMatches = window.matchMedia(maxwith);
  let parentTag = document.querySelector(selectorRoot);
  maxwithMatches.onchange = () => {
    if (maxwithMatches.matches) {
      parentTag.innerHTML = callbackRender(data, icon, title, itemMatches);
      callbackAutoRun &&
        callbackAutoRun(
          selectorParent,
          selectorChild,
          itemMatches,
          btnPrev,
          btnNext
        );
      callbackClickRun &&
        callbackClickRun(
          selectorParent,
          selectorChild,
          itemMatches,
          btnPrev,
          btnNext
        );
    } else {
      parentTag.innerHTML = callbackRender(data, icon, title, itemNoMatches);
      callbackAutoRun &&
        callbackAutoRun(
          selectorParent,
          selectorChild,
          itemNoMatches,
          btnPrev,
          btnNext
        );
      callbackClickRun &&
        callbackClickRun(
          selectorParent,
          selectorChild,
          itemNoMatches,
          btnPrev,
          btnNext
        );
    }
  };
}

// New Music__Primary Render Component
function NewMusicPrimary(primary, icon, title, itemLayer = itemPrimary) {
  let arr = primary.concat(primary.slice(0, itemLayer));
  return `
      
        <h3 class="section__title">${title}</h3>
        <div class="section__body">
          <div class="section__media primary__parent">
            ${arr
              .map(
                (obj) =>
                  `
                  <div class="primary__child ${obj.other}">
                    <div class="media__item">
                      <div class="media__left">
                      <div class="card__image">
                      <figure><img src="${obj.image}" alt=""></figure>
                      <div class="opacity">
                        <div class="option">
                          <button class="play__circle" title="${obj.title}">${icon.playCircle}</button>
                        </div>
                      </div>
                    </div>
                      </div>
                      <div class="media__content">
                        <div>
                          <h3 class="media__title">${obj.title}</h3>
                          <span class="media__subtitle">${obj.artist}</span>
                        </div>
                        <div>
                        <span class="media__order">${obj.order}</span>
                        <span class="media__date">${obj.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      
    `;
}

// New Music__Secondary Render Component
function NewMusicSecondary(secondary, icon, title, itemLayer = itemSecondary) {
  let arr = secondary.concat(secondary.slice(0, itemLayer));

  return `
      <div class="section__body">
        <div class="section__media secondary__parent">
          ${arr
            .map(
              (obj) =>
                `
            <div class="card secondary__child">
              <div class="card__image">
                <figure><img src="${obj.image}" alt=""></figure>
                <div class="opacity">
                  <div class="option">
                    <button>${icon.favorite}</button>
                    <button class="play__circle" title="${obj.title}">${icon.playCircle}</button>
                    <button>${icon.more}</button>
                  </div>
                </div>
              </div>
              <div class="card__content">
                <a href="#"  title="${obj.title}">${obj.title}</a>
                <p>${obj.text}</p>
              </div>
           </div>
              `
            )
            .join("")}
        </div>  
      </div>
    `;
}

// Media Run
function mediaRun(selectorParent, selectorChild, itemLayer, btnPrev, btnNext) {
  let media = document.querySelector(selectorParent);
  let mediaWrapper = document.querySelectorAll(selectorChild);
  let times = Math.ceil(mediaWrapper.length / itemLayer);
  let odd = (mediaWrapper.length % itemLayer) / itemLayer;
  let i = 0;
  let btnPrevTag, btnNextTag;
  let timeId = setTimeout(autoRunMedia, 5000);

  if (btnPrev && btnNext) {
    btnPrevTag = document.querySelector(btnPrev);
    btnNextTag = document.querySelector(btnNext);
    btnPrevTag.style.opacity = 0.1;
  }
  function autoRunMedia() {
    i++;
    if (i >= times) {
      i = 0;
      media.style.transform = `translateX(${i})`;
      timeId = setTimeout(autoRunMedia, 10);
    } else {
      // media.classList.add('active-transition')
      media.style.transition = "transform .3s ease .1s";
      if (odd && i === times - 2) {
        media.style.transform = `translateX(-${(i - 1 + odd) * 100}%)`;
      } else if (odd && i === times - 1) {
        media.style.transform = `translateX(-${(i - 1 + odd) * 100}%)`;
      } else {
        media.style.transform = `translateX(-${i}00%)`;
      }
      timeId = setTimeout(autoRunMedia, 5000);
    }

    // Hide--Visible Button
    if (btnPrevTag && btnNextTag) {
      i === times - 2
        ? (btnNextTag.style.opacity = 0.1)
        : (btnNextTag.style.opacity = 1);
      i === times - 1
        ? (btnPrevTag.style.opacity = 0.1)
        : (btnPrevTag.style.opacity = 1);
    }
  }

  //  Remove transition
  media.ontransitionend = () => {
    media.style.transition = "unset";
  };

  // Clear Timeout
  media.onmouseenter = () => clearTimeout(timeId);

  media.onmouseleave = () => {
    i === 0
      ? (timeId = setTimeout(autoRunMedia, 10))
      : (timeId = setTimeout(autoRunMedia, 5000));
  };

  // Btn click -- Prev Next Media
  if (btnPrevTag && btnNextTag) {
    btnNextTag.onclick = () => {
      clearTimeout(timeId);
      autoRunMedia();
    };
    btnPrevTag.onclick = () => {
      if (i === times - 1) return;
      clearTimeout(timeId);
      i === times - 2;
      autoRunMedia();
    };
  }
}

// Get ItemLayer Maxwith -- Function
function getItemLayer(maxwith, layerBig, layerSmall) {
  return window.innerWidth > maxwith ? layerBig : layerSmall;
}

// Event Render Component
function EventRender(arr, title) {
  return `
      <div class="section">
        <h3 class="section__title">${title}</h3>
        <div class="section__body">
          <div class="section__media event__parent">
            ${arr
              .map(
                (obj) =>
                  `
                <div class="event__child">
                  <div class="event__image">
                    <figure><img src="${obj.image}"></figure>
                    <div class="event__content">
                      <span class="event__tag">${obj.tag}</span>
                      <div class="event__title">${obj.title}</div>
                      <div class="event__subtitle">${obj.subtitle}</div>
                    </div>
                  </div>
                  <div class="event__follow">
                    <div class="event__left">
                      <div class="title">Lượt quan tâm</div>
                      <div class="avatars">
                        <div class="avatar__item"><img src="${obj.avatar1}"></div>
                        <div class="avatar__item"><img src="${obj.avatar2}"></div>
                        <div class="avatar__item"><img src="${obj.avatar3}"></div>
                        <div class="avatar__item"><img src="${obj.avatar4}"></div>
                        <div class="avatar__item"><img src="${obj.avatar5}"></div>
                        <div class="avatar__item"><img src="${obj.avatar6}"></div>
                        <div class="avatar__text">${obj.avatarText}</div>
                      </div>
                    </div>
                    <div class="event__right">
                      <button>Quan tâm</button>
                    </div>
                  </div>
                </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
}

// Footer Render Component
function FooterRender(arr, title) {
  return `
      <div class="footer">
        <h3 class="footer__title">${title}</h3>
        <div class="footer__body">
          ${arr
            .map(
              (obj) =>
                `
                <div class="footer__item">
                  <div class="footer__item-wrapper">
                    <figure>
                      <img src="${obj.image}">
                    </figure>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
}

// Banner Render Component
function Banner(arr) {
  return `
      <div class="section">
        <div class="section__body">
          <div class="section__media banner__parent">
            ${arr
              .map(
                (url) =>
                  `
                <div class="banner__child">
                  <div class="card__image banner__image">
                    <figure><img src="${url}"></figure>
                  </div>
                </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
}

// Carousel Render Component
function CarouselRender(arr, icon, title) {
  return `
    <div class="section">
      <h3 class="section__title">${title}</h3>
      <div class="section__body">
        <div class="section__media">
          ${arr
            .map(
              (obj) =>
                `
            <div class="card">
              <div class="card__image">
                <figure><img src="${obj.image}" alt=""></figure>
                <div class="opacity">
                  <div class="option">
                    <button>${icon.favorite}</button>
                    <button class="play__circle" title="${obj.title}">${icon.playCircle}</button>
                    <button>${icon.more}</button>
                  </div>
                </div>
              </div>
              <div class="card__content">
                <a href="#"  title="${obj.title}">${obj.title}</a>
                <p>${obj.text}</p>
              </div>
           </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
    `;
}

// Artist Render Component
function ArtistRender(arrArtist, icon, title, itemLayer = itemArtist) {
  let arr = arrArtist.concat(arrArtist.slice(0, itemLayer));
  return `
        <div class="section__body">
          <button class="media__btn artist__btnprev">${icon.arrowBack}</button>
          <div class="section__media artist__parent">
            ${arr
              .map(
                (image) =>
                  `
                  <div class='artist__child'>
                    <figure>
                      <img src="${image}">
                    </figure>
                  </div>
                `
              )
              .join("")}
          </div>
          <button class="media__btn artist__btnnext">${
            icon.arrowForward
          }</button>
        </div>
    `;
}

// Radio Render Component
function RadioRender(arrRadio, icon, title, itemLayer) {
  return `
        <div class="section__title">${title}</div>
        <div class='section__wrapper'>
          <button class="media__btn radio__btnprev">${icon.arrowBack}</button>
          <div class='section__body'>
            <div class="section__media radio__parent">
              ${arrRadio
                .map(
                  (obj) =>
                    `
                    <div class='radio__child'>
                      <div class='card__image'>
                        <svg class="svg" width="100%" height="100%" viewBox="0 0 100 100"><circle class="svg-circle-bg" stroke="rgba(255, 255, 255, 0.2)" cx="50" cy="50" r="48.75" stroke-width="2.5"></circle><circle class="svg-circle" stroke="#ff4b4a" cx="50" cy="50" r="48.75" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="306.3052837250048" stroke-dashoffset="${obj.svgCdn}" style="transition: stroke-dashoffset 850ms ease-in-out 0s;"></circle></svg>
                        <figure class='image__primary'>
                          <img src='${obj.imgBig}'>
                          <div class='opacity'>
                            <div class='option'>
                              <button class="play__circle" title="${obj.title}">${icon.playCircle}</button>
                            </div>
                          </div>
                        </figure>
                        <figure class='image__host'><img src='${obj.imgSmall}'></figure>
                        <figure class='image__label'><img src='${icon.live}'></figure>
                      </div>
                      <div class='card__content'>
                        <h3 class='card__title'>${obj.title}</h3>
                        <p class='card__subtitle'>${obj.subtitle}</p>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
            
          </div>
          <button class="media__btn radio__btnnext">${
            icon.arrowForward
          }</button>
        </div>
    `;
}

// Next Prev Media -- Click Btn
nextPrevMedia(
  ".radio__parent",
  ".radio__child",
  itemArtist,
  ".radio__btnprev",
  ".radio__btnnext"
);
function nextPrevMedia(
  selectorParent,
  selectorChild,
  itemLayer,
  selectorBtnPrev,
  selectorBtnNext
) {
  const media = document.querySelector(selectorParent);
  const mediaAllChild = document.querySelectorAll(selectorChild);
  const btnPrevTag = document.querySelector(selectorBtnPrev);
  const btnNextTag = document.querySelector(selectorBtnNext);
  let times = Math.ceil(mediaAllChild.length / itemLayer);
  let odd = (mediaAllChild.length % itemLayer) / itemLayer;
  let i = 0;

  btnPrevTag.onclick = () => {
    i = 0;
    media.style.transform = `translateX(${i})`;
    btnPrevTag.style.opacity = 0.1;
    btnNextTag.style.opacity = 1;
  };
  btnNextTag.onclick = () => {
    i++;
    if (i >= times) {
      return;
    } else {
      if (odd && i === times - 2) {
        media.style.transform = `translateX(-${(i - 1 + odd) * 100}%)`;
      } else if (odd && i === times - 1) {
        media.style.transform = `translateX(-${(i - 1 + odd) * 100}%)`;
      } else {
        media.style.transform = `translateX(-${i}00%)`;
      }
    }
    btnPrevTag.style.opacity = 1;
    btnNextTag.style.opacity = 0.1;
  };
  i === 0 ? (btnPrevTag.style.opacity = 0.1) : (btnPrevTag.style.opacity = 1);
}
