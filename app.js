function goKakao() {
  const url = "https://open.kakao.com/o/XXXX"; // 여기에 네 링크 넣어
  window.location.href = url;
}

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