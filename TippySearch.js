const searchData = {
  suggest: {
    icon: `<span class="material-symbols-outlined"> trending_up </span>`,
    title: [
      "anh tự do",
      "ngủ một mình",
      "hơn em chỗ nào",
      "karaoke",
      "XONE Radio",
      "podcast",
    ],
  },
  suggestion: [
    {
      title: "Thương Võ",
      text: "Nghệ sĩ • 2Tr quan tâm",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/7/2/6/07265c8332ab47e1bbab1515cbbfcf16.jpg",
    },
    {
      title: "Châu Khải Phong",
      text: "Nghệ sĩ • 554K quan tâm",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/9/a/e/5/9ae5c75c89064613a294f0de98bcad64.jpg",
    },
  ],
};

const suggestTag = document.querySelector(".search__suggest");
suggestTag.innerHTML = TippySearch(searchData);
function TippySearch(searchData) {
  return `
            <div class="search__suggest--content">
                <div class="suggest__title">Đề xuất cho bạn</div>
                ${searchData.suggest.title
                  .map(
                    (str) =>
                      `
                        <div class="suggest__items">
                            <span>${searchData.suggest.icon}</span>
                            <span>${str}</span>
                        </div>
                        `
                  )
                  .join("")}
                <div class="suggest__suggestion">
                    <div class="suggest__title">Gợi ý kết quả</div>
                    ${searchData.suggestion
                      .map(
                        (obj) =>
                          `
                        <div class="media suggest__items">
                        <div class="media__thumb">
                          <img
                            src="${obj.image}"
                            alt=""
                          />
                        </div>
                        <div class="media__body">
                          <h3>${obj.title}</h3>
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
