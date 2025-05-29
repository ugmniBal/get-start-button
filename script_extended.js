
const guides = {
  "pp": {
    ko: { text: "PP는 내용물을 비우고 라벨을 제거한 후, 세척하고 부피를 줄여 배출하세요.", image: "https://i.imgur.com/o4y8VUM.png" },
    en: { text: "For PP, empty the contents, remove the label, wash and compress before recycling.", image: "https://i.imgur.com/o4y8VUM.png" }
  },
  "pet": {
    ko: { text: "PET는 뚜껑과 라벨을 제거하고 압착하여 배출하세요.", image: "https://i.imgur.com/UeFk4KU.png" },
    en: { text: "Remove the cap and label from PET bottles and crush before recycling.", image: "https://i.imgur.com/UeFk4KU.png" }
  },
  "종이팩": {
    ko: { text: "종이팩은 깨끗이 헹군 후 따로 배출하세요.", image: "https://i.imgur.com/MGmS7Gy.png" },
    en: { text: "Rinse paper packs clean and dispose of them separately.", image: "https://i.imgur.com/MGmS7Gy.png" }
  }
};

let language = 'ko';
let history = [];

function showGuide() {
  const input = document.getElementById('materialInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');
  const imageDiv = document.getElementById('imageContainer');
  const data = guides[input];

  if (data) {
    resultDiv.textContent = data[language].text;
    imageDiv.innerHTML = `<img src="\${data[language].image}" alt="\${input} 이미지">`;
    if (!history.includes(input)) {
      history.unshift(input);
      updateHistory();
    }
  } else {
    resultDiv.textContent = language === 'ko' ? "해당 항목은 데이터에 없습니다." : "This item is not found in the data.";
    imageDiv.innerHTML = "";
  }
}

function updateHistory() {
  const historyList = document.getElementById('searchHistory');
  historyList.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}

function switchLanguage() {
  language = document.getElementById('langSwitcher').value;
  document.getElementById('title').textContent = language === 'ko' ? '분리배출 가이드' : 'Recycling Guide';
  document.getElementById('historyTitle').textContent = language === 'ko' ? '📌 최근 검색한 품목' : '📌 Recent Searches';
  document.getElementById('allTitle').textContent = language === 'ko' ? '🗃️ 전체 품목 목록' : '🗃️ Full List';
  updateFullList();
}

function updateFullList() {
  const fullList = document.getElementById('fullList');
  fullList.innerHTML = '';
  const datalist = document.getElementById('materialList');
  datalist.innerHTML = '';

  Object.keys(guides).forEach(key => {
    const li = document.createElement('li');
    li.textContent = key;
    fullList.appendChild(li);

    const option = document.createElement('option');
    option.value = key;
    datalist.appendChild(option);
  });
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  updateFullList();
});
