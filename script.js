// Tab Switching
function showTab(tabId) {
  const panes = document.querySelectorAll('.tab-pane');
  const buttons = document.querySelectorAll('.tab-btn');

  panes.forEach(pane => {
    pane.classList.remove('active');
  });

  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  const targetPane = document.getElementById(tabId);
  if (targetPane) {
    targetPane.classList.add('active');
  }

  // Highlight current button
  const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId));
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// State for CV Switcher
let currentProfile = 'art'; // 'art' or 'corp'
let currentLang = 'de';     // 'de' or 'en'

function updateCVDisplay() {
  const allViews = document.querySelectorAll('.cv-view');
  allViews.forEach(view => {
    view.style.display = 'none';
  });

  const targetId = `cv-${currentProfile}-${currentLang}`;
  const targetView = document.getElementById(targetId);
  if (targetView) {
    targetView.style.display = 'block';
  }

  // Update Profile Buttons
  document.getElementById('cv-btn-art')?.classList.toggle('active', currentProfile === 'art');
  document.getElementById('cv-btn-corp')?.classList.toggle('active', currentProfile === 'corp');

  // Update Lang Buttons
  document.getElementById('lang-btn-de')?.classList.toggle('active', currentLang === 'de');
  document.getElementById('lang-btn-en')?.classList.toggle('active', currentLang === 'en');
}

function setCVProfile(profile) {
  currentProfile = profile;
  updateCVDisplay();
}

function setCVLang(lang) {
  currentLang = lang;
  updateCVDisplay();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  // Check authentication status
  checkAuth();

  // Check hash in URL for direct tab linking
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    showTab(hash);
  }
  updateCVDisplay();
});

// =========================================================================
// PASSWORD GATE (pass1234 - Persists across sessions in localStorage)
// =========================================================================
const AUTH_PASSWORD = 'pass1234';
const AUTH_STORAGE_KEY = 'haptic_auth_token';

function checkAuth() {
  const gate = document.getElementById('auth-gate-overlay');
  if (!gate) return true;

  const params = new URLSearchParams(window.location.search);
  const urlAuth = params.get('auth');
  const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);

  if (urlAuth === AUTH_PASSWORD || storedAuth === AUTH_PASSWORD) {
    if (urlAuth === AUTH_PASSWORD) {
      localStorage.setItem(AUTH_STORAGE_KEY, AUTH_PASSWORD);
    }
    unlockApp();
    return true;
  }

  showAuthGate();
  return false;
}

function submitAuth(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('auth-password-input');
  const errorMsg = document.getElementById('auth-error-msg');
  if (!input) return;

  if (input.value.trim() === AUTH_PASSWORD) {
    localStorage.setItem(AUTH_STORAGE_KEY, AUTH_PASSWORD);
    if (errorMsg) errorMsg.style.display = 'none';
    unlockApp();
  } else {
    if (errorMsg) {
      errorMsg.style.display = 'block';
      errorMsg.textContent = 'Falsches Passwort. Bitte erneut versuchen.';
    }
    input.classList.add('auth-input-error');
    setTimeout(() => input.classList.remove('auth-input-error'), 600);
    input.focus();
    input.select();
  }
}

function unlockApp() {
  const gate = document.getElementById('auth-gate-overlay');
  if (gate) {
    gate.style.opacity = '0';
    gate.style.pointerEvents = 'none';
    setTimeout(() => {
      gate.style.display = 'none';
    }, 350);
  }
}

function showAuthGate() {
  const gate = document.getElementById('auth-gate-overlay');
  if (gate) {
    gate.style.display = 'flex';
    gate.style.opacity = '1';
    gate.style.pointerEvents = 'auto';
    const input = document.getElementById('auth-password-input');
    if (input) {
      setTimeout(() => input.focus(), 150);
    }
  }
}
