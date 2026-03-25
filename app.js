function goKakao() {
  const url = "https://open.kakao.com/o/XXXX"; // 여기에 네 링크 넣어
  window.location.href = url;
}

// 슬라이더 - 랜덤 사진 12장
(function initSlider() {
  const slider = document.getElementById('slider');
  const dotsWrap = document.getElementById('sliderDots');
  if (!slider || !dotsWrap) return;

  const allImages = [
    'img/KakaoTalk_Photo_2026-03-25-13-23-15 001.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-16 002.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-16 003.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-16 004.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-16 005.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-16 006.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-16 007.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-17 008.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-17 009.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-17 010.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-18 011.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-18 012.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-18 013.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-19 014.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-19 015.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-19 016.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-19 017.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-20 018.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-20 019.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-20 020.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-21 021.jpeg',
    'img/KakaoTalk_Photo_2026-03-25-13-23-21 022.jpeg',
  ];

  // 셔플 후 12장 선택
  const shuffled = allImages.sort(() => Math.random() - 0.5).slice(0, 12);

  shuffled.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = '시공 사례 ' + (i + 1);
    slide.appendChild(img);
    slider.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(dot);
  });

  const dots = dotsWrap.querySelectorAll('.dot');

  slider.addEventListener('scroll', () => {
    const index = Math.round(slider.scrollLeft / slider.offsetWidth);
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  });
})();

function calcTotal() {
  const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]:checked');
  let total = 0;
  checkboxes.forEach(cb => total += parseInt(cb.value));

  const totalBox = document.getElementById('totalBox');
  const totalPrice = document.getElementById('totalPrice');

  if (total > 0) {
    totalPrice.textContent = (total / 10000) + '만원';
    totalBox.style.display = 'flex';
  } else {
    totalBox.style.display = 'none';
  }
}