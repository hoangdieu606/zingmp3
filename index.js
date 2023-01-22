const body = document.querySelector("body");
const search = document.querySelector(".search");
const searchInput = document.querySelector(".search__input");
const searchSuggest = document.querySelector(".search__suggest");
const settings = document.querySelector(".nav__setting");
const settingsMenu = document.querySelector(".settings__menu");

body.onclick = function () {
  const hiddenTip = [searchSuggest, settingsMenu];
  hiddenTip.forEach((elem) => (elem.style.display = "none"));
  search.classList.remove("is-collapse");
};

// Hiện Tippy và Xóa sự kiện nổi bọt
visible();
function visible() {
  const visibleTip = [
    search,
    searchInput,
    searchSuggest,
    settings,
    settingsMenu,
  ];
  visibleSecond = [
    [searchSuggest, search, searchInput],
    [settingsMenu, settings],
  ];

  visibleTip.forEach((elem) => {
    elem.onclick = function (e) {
      e.stopPropagation();
      elem === settings &&
        (settingsMenu.style.display === "block"
          ? (settingsMenu.style.display = "none")
          : (settingsMenu.style.display = "block"));
      elem === searchInput &&
        (searchSuggest.style.display = "block") &&
        search.classList.add("is-collapse");
      visibleSecond.forEach((ele) => {
        if (!ele.includes(elem)) {
          ele[0].style.display = "none";
          ele[0] === searchSuggest && search.classList.remove("is-collapse");
        }
      });
    };
  });
}

const layoutTag = document.querySelector(".layout");

// Set theme zma
setThemeStorage();
function setThemeStorage() {
  const getThemeStorage = JSON.parse(localStorage.getItem("theme"));
  const themeImages = document.querySelectorAll(".theme__image");
  document.documentElement.setAttribute(
    "data-theme",
    getThemeStorage?.theme || "zma"
  );
  console.log('kaak', getThemeStorage?.themeBackground=== undefined)
  layoutTag.style.backgroundImage =
    getThemeStorage?.themeBackground === undefined
      ? `url(./assets/theme/Other/zma.svg)`
      : getThemeStorage?.themeBackground;
  themeImages.forEach((elem) => {
    elem.getAttribute("name") === getThemeStorage?.name
      ? elem.classList.add("theme__active")
      : elem.classList.remove("theme__active");
  });
}

layoutTag.onscroll = () => {
  layoutTag.scrollY > 0 || layoutTag.scrollTop > 0
    ? (body.style = "--header-scroll-bottom: 0")
    : (body.style = "--header-scroll-bottom: 100%");
};
