// Theme
// Theme Select

const themes = {
  Dynamic: [
    {
      title: "XONE",
      theme: "xone",
      image: "./assets/theme/Dynamic/xone.jpg",
      imageBg: "./assets/theme/Dynamic/xone-bg.jpg",
    },
    {
      title: "Zing Music Awards",
      theme: "zma",
      image: "./assets/theme/Dynamic/zma.jpg",
      imageBg: "./assets/theme/Dynamic/zma.svg",
    },
    {
      title: "Tháp Eiffel",
      theme: "eiffel",
      image: "./assets/theme/Dynamic/eiffel.jpg",
      imageBg: "./assets/theme/Dynamic/eiffel-bg.jpg",
    },
    {
      title: "London",
      theme: "london",
      image: "./assets/theme/Dynamic/london.png",
      imageBg: "./assets/theme/Dynamic/london-bg.jpg",
    },
  ],
 
  Artist: [
    {
      title: "IU",
      theme: "iu",
      image: "./assets/theme/Artist/iu.jpg",
      imageBg: "./assets/theme/Artist/iu-bg.jpg",
    },
    {
      title: "Ji Chang Wook",
      theme: "ji-chang-wook",
      image: "./assets/theme/Artist/ji-chang-wook.jpg",
      imageBg: "./assets/theme/Artist/ji-chang-wook-bg.jpg",
    },
    {
      title: "Lisa",
      theme: "lisa",
      image: "./assets/theme/Artist/lisa.jpg",
      imageBg: "./assets/theme/Artist/lisa-bg.jpg",
    },
    {
      title: "Jennie Kim",
      theme: "jennie",
      image: "./assets/theme/Artist/jennie.jpg",
      imageBg: "./assets/theme/Artist/jennie-bg.jpg",
    },
    {
      title: "Jisoo",
      theme: "jisoo",
      image: "./assets/theme/Artist/jisoo.jpg",
      imageBg: "./assets/theme/Artist/jisoo-bg.jpg",
    },
    {
      title: "Rosé",
      theme: "rose",
      image: "./assets/theme/Artist/rose.jpg",
      imageBg: "./assets/theme/Artist/rose-bg.jpg",
    },
  ],
  Dark: [
    {
      title: "Tối",
      theme: "dark",
      image: "./assets/theme/Dark/dark.jpg",
      imageBg: "",
    },
    {
      title: "Tím",
      theme: "purple",
      image: "./assets/theme/Dark/purple.jpg",
      imageBg: "",
    },
    {
      title: "Xanh đậm",
      theme: "blue",
      image: "./assets/theme/Dark/blue.jpg",
      imageBg: "",
    },
    {
      title: "Xanh biển",
      theme: "blue-light",
      image: "./assets/theme/Dark/blue-light.jpg",
      imageBg: "",
    },
    {
      title: "Xanh lá",
      theme: "green",
      image: "./assets/theme/Dark/green.jpg",
      imageBg: "",
    },
    {
      title: "Nâu",
      theme: "brown",
      image: "./assets/theme/Dark/brown.jpg",
      imageBg: "",
    },
    {
      title: "Hồng",
      theme: "pink",
      image: "./assets/theme/Dark/pink.jpg",
      imageBg: "",
    },
    {
      title: "Đỏ",
      theme: "red",
      image: "./assets/theme/Dark/red.jpg",
      imageBg: "",
    },
  ],
  Light: [
    {
      title: "Sáng",
      theme: "light",
      image: "./assets/theme/Light/light.jpg",
      imageBg: "",
    },
    {
      title: "Xám",
      theme: "gray",
      image: "./assets/theme/Light/gray.jpg",
      imageBg: "",
    },
    {
      title: "Xanh nhạt",
      theme: "green-light",
      image: "./assets/theme/Light/green-light.jpg",
      imageBg: "",
    },
    {
      title: "Hồng cánh sen",
      theme: "pink-light",
      image: "./assets/theme/Light/pink-light.jpg",
      imageBg: "",
    },
  ],
};

const themesBg = {
  london: {
    imageBg: "./assets/theme/Dynamic/london-bg.jpg",
    style: "",
  },
  xone: {
    imageBg: "./assets/theme/Other/xone-bg.jpg",
    style: "",
  },
  zma: {
    imageBg: "./assets/theme/Other/zma.svg",
    style: "",
  },
  eiffel: {
    imageBg: "./assets/theme/Other/eiffel-bg.jpg",
    style: "",
  },
  iu: {
    imageBg: "./assets/theme/Artist/iu-bg.jpg",
    style: "",
  },
  "ji-chang-wook": {
    imageBg: "./assets/theme/Artist/ji-chang-wook-bg.jpg",
    style: "",
  },
  lisa: {
    imageBg: "./assets/theme/Artist/lisa-bg.jpg",
    style: "",
  },
  jennie: {
    imageBg: "./assets/theme/Artist/jennie-bg.jpg",
    style: "",
  },
  jisoo: {
    imageBg: "./assets/theme/Artist/jisoo-bg.jpg",
    style: "",
  },
  rose: {
    imageBg: "./assets/theme/Artist/rose-bg.jpg",
    style: "",
  },
};

// Render Theme
renderThemes(themes);
function renderThemes(themes) {
  for (let key in themes) {
    const themeBody = document.querySelector(".theme__content");
    const htmls = document.createElement("div");
    htmls.classList.add("theme__section");
    htmls.innerHTML = `
      <div class="theme__style">${key}</div>
      <div class="theme__parent">
        <!-- Select Theme -->
        ${themes[key]
          .map(
            (obj) =>
              `
            <div class="theme__child">
            <div class="theme__image" name="${obj.title}">
              <div class="theme__icon-check"><span class="material-symbols-outlined">check</span></div>
              <img src="${obj.image}" alt="">
              <div class="opacity">
                  <button class='theme__apply' theme='${obj.theme}' name="${obj.title}">Áp dụng</button>
                  <button class='theme__preview' theme='${obj.theme}'>Xem trước</button>
              </div>
            </div>
            <p>${obj.title}</p>
          </div>
            `
          )
          .join("")}
  
      `;
    themeBody.appendChild(htmls);
  }
}

const iconThemes = document.querySelector(".nav__theme");
iconThemes.onclick = () => {
  const theme = document.querySelector("#theme");
  const iconTheme = document.querySelector("#theme__icon");
  const modalTheme = document.querySelector("#modal__theme");
  const buttonsApply = document.querySelectorAll(".theme__apply");
  const buttonsPreview = document.querySelectorAll(".theme__preview");
  const themeImages = document.querySelectorAll(".theme__image");
  const layout = document.querySelector(".layout");
  let getTheme = document.documentElement.getAttribute("data-theme");
  let layoutBg = layout.style.backgroundImage;

  
  // Show modal theme
  modalTheme.style.display = "block";

  // Apply theme
  for (let button of buttonsApply) {
    button.onclick = () => {
      const theme = button.getAttribute("theme");
      const name = button.getAttribute("name");
      document.documentElement.setAttribute("data-theme", theme);

      themeImages.forEach((themeImage) => {
        themeImage.getAttribute("name") === name
          ? themeImage.classList.add("theme__active")
          : themeImage.classList.remove("theme__active");
      });
      themesBg[theme]
        ? (layout.style.backgroundImage = `url(${themesBg[theme].imageBg})`)
        : (layout.style.backgroundImage = "");
      modalTheme.style.display = "none";

      // getTheme = document.documentElement.getAttribute("data-theme");
      // layoutBg = layout.style.backgroundImage;

      localStorage.setItem('theme', JSON.stringify({
        theme: document.documentElement.getAttribute("data-theme"),
        themeBackground: layout.style.backgroundImage,
        name
      }))
    };
  }

  // Preview theme
  for (let button of buttonsPreview) {
    button.onclick = () => {
      const theme = button.getAttribute("theme");
      document.documentElement.setAttribute("data-theme", theme);
      themesBg[theme]
        ? (layout.style.backgroundImage = `url(${themesBg[theme].imageBg})`)
        : (layout.style.backgroundImage = "");
    };
  }

  // Hide modal theme
  iconTheme.onclick = () => {
    modalTheme.style.display = "none";
    document.documentElement.setAttribute("data-theme", getTheme);
    layout.style.backgroundImage = layoutBg;
  };

  modalTheme.addEventListener("click", iconTheme.onclick);
  theme.addEventListener("click", (e) => e.stopPropagation());
};
