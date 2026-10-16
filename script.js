const surpriseBtn = document.getElementById('surpriseBtn');
const surprisePanel = document.getElementById('surprisePanel');
const wishBtn = document.getElementById('wishBtn');
const wishResult = document.getElementById('wishResult');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
}

function launchConfetti(count = 115) {
  const colors = ['#ff79c8', '#a58bff', '#ffe79b', '#8cf4df', '#ffffff'];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('i');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 260}px`);
    piece.style.animationDuration = `${3 + Math.random() * 3.5}s`;
    piece.style.animationDelay = `${Math.random() * 0.9}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 8000);
  }
}

surpriseBtn.addEventListener('click', () => {
  surprisePanel.hidden = false;
  surpriseBtn.innerHTML = '<span>Surprise opened!</span><span class="btn-icon">💖</span>';
  surpriseBtn.disabled = true;
  surpriseBtn.style.opacity = '.75';
  launchConfetti();
  surprisePanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  showToast('SURPRISEEEE, KACKROCH! 🪳🎂');
});

wishBtn.addEventListener('click', () => {
  const wishes = [
    'Wish unlocked: unlimited happiness and unlimited cake! 🎂',
    'Birthday magic activated. May your best days be ahead! ✨',
    'Official order: laugh a lot, stress less, eat cake. 💜',
    'A legendary year for a legendary cockroach. 🪳👑'
  ];
  wishResult.textContent = wishes[Math.floor(Math.random() * wishes.length)];
  launchConfetti(55);
});

// Tiny star field, generated locally; no tracking or external scripts needed.
const field = document.querySelector('.sparkle-field');
for (let i = 0; i < 38; i++) {
  const star = document.createElement('span');
  star.className = 'sparkle';
  star.textContent = Math.random() > 0.5 ? '✦' : '·';
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.fontSize = `${8 + Math.random() * 13}px`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  field.appendChild(star);
}
