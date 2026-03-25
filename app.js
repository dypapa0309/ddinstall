function goKakao() {
  const url = "https://open.kakao.com/o/XXXX"; // 여기에 네 링크 넣어
  window.location.href = url;
}

// 슬라이더 dots
(function initSlider() {
  const slider = document.getElementById('slider');
  const dotsWrap = document.getElementById('sliderDots');
  if (!slider || !dotsWrap) return;

  const slides = slider.querySelectorAll('.slide');
  slides.forEach((_, i) => {
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