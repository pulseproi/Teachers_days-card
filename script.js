function showMessage() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Optional: floating heart animation generator
const heartsContainer = document.querySelector('.hearts');
setInterval(() => {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 20 + 'px';
  heart.style.animation = `float ${5 + Math.random() * 3}s linear`;
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 700);


