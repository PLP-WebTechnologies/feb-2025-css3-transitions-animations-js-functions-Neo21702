const box = document.getElementById('box');
const button = document.getElementById('animateBtn');
const colorSelect = document.getElementById('colorSelect');

// Load saved color from localStorage
window.onload = function() {
  const savedColor = localStorage.getItem('boxColor');
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorSelect.value = savedColor;
  }
};

// Trigger animation
button.addEventListener('click', () => {
  box.classList.add('animate');

  setTimeout(() => {
    box.classList.remove('animate');
  }, 1000);
});

// Save selected color to localStorage
colorSelect.addEventListener('change', () => {
  const color = colorSelect.value;
  box.style.backgroundColor = color;
  localStorage.setItem('boxColor', color);
});
