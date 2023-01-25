const body = document.querySelector("body");
const tippys = document.querySelectorAll(".tippys");
const layoutTag = document.querySelector(".layout");

visible();
function visible() {
  tippys.forEach((elem, index) => {
    elem.parentElement.addEventListener('click', function (e) {
      e.stopPropagation();
      if (this.className === "nav__setting" || this.className === "nav__setting active") {
        this.classList.toggle('active')
      } else {
        this.classList.add('active')
      }

      // !index hide tippy
      tippys.forEach((tippy, index2) => {
        if (index2 !== index) {
          tippy.parentElement.classList.remove('active')
        }
      });
    })

    elem.onclick = (e) => {
      e.stopPropagation();
    };

    // body onclick hide tippy
    body.addEventListener("click", () => {
      elem.parentElement.classList.remove('active')
    });
    
  });
}



// Set theme zma
setThemeStorage();
function setThemeStorage() {
  const getThemeStorage = zmp3Storage.get('theme')
  const themeImages = document.querySelectorAll(".theme__image");
  document.documentElement.setAttribute(
    "data-theme",
    getThemeStorage?.theme || "zma"
  );
  layoutTag.style.backgroundImage =
    getThemeStorage?.themeBackground === undefined
      ? `url(./assets/theme/Other/zma.svg)`
      : getThemeStorage?.themeBackground;
  themeImages.forEach((elem) => {
    elem.getAttribute("name") === getThemeStorage?.name
      ? elem.classList.add("active")
      : elem.classList.remove("active");
  });
}

layoutTag.onscroll = () => {
  layoutTag.scrollY > 0 || layoutTag.scrollTop > 0
    ? (body.style = "--header-scroll-bottom: 0")
    : (body.style = "--header-scroll-bottom: 100%");
};
