const guides = {
  "PP": {
    text: "PP는 내용물을 비우고 라벨을 제거한 후, 세척하고 부피를 줄여 배출하세요.",
    image: "https://i.imgur.com/o4y8VUM.png"
  },
  "PET": {
    text: "PET는 뚜껑과 라벨을 제거하고 압착하여 배출하세요.",
    image: "https://i.imgur.com/UeFk4KU.png"
  },
  "PE": {
    text: "PE는 내용물을 비우고 이물질을 제거하여 배출하세요.",
    image: "https://i.imgur.com/yYhP2QI.png"
  },
  "종이팩": {
    text: "종이팩은 깨끗이 헹군 후 따로 배출하세요.",
    image: "https://i.imgur.com/MGmS7Gy.png"
  },
  "캔": {
    text: "캔은 내용물 제거 후 부피를 줄여 배출하세요.",
    image: "https://i.imgur.com/Ukgu7fK.png"
  },
  "유리병": {
    text: "유리병은 내용물 제거 후 뚜껑을 분리하고 배출하세요.",
    image: "https://i.imgur.com/8mXbI3B.png"
  },
  "건전지": {
    text: "건전지는 일반 쓰레기가 아닙니다. 수거함을 이용하세요.",
    image: "https://i.imgur.com/1L4VGXs.png"
  },
  "형광등": {
    text: "형광등은 깨지지 않게 포장하여 수거함 이용.",
    image: "https://i.imgur.com/G70E74s.png"
  }
};

function showGuide() {
  const input = document.getElementById('materialInput').value.trim();
  const data = guides[input];
  const resultDiv = document.getElementById('result');
  const imageDiv = document.getElementById('imageContainer');
  if (data) {
    resultDiv.textContent = data.text;
    imageDiv.innerHTML = `<img src="${data.image}" alt="${input} 이미지">`;
  } else {
    resultDiv.textContent = "해당 항목은 데이터에 없습니다.";
    imageDiv.innerHTML = "";
  }
}
