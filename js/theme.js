// js/theme.js
document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('theme-style');
  const btn = document.createElement('button');
  btn.id = 'themeToggle';
  btn.textContent = 'Dark';
  btn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:10px;border-radius:50%;background:#2e7d32;color:white;border:none;cursor:pointer;z-index:999;';
  document.body.appendChild(btn);

  let mode = localStorage.getItem('theme') || 'light';

  const apply = () => {
    if (mode === 'dark') {
      link.href = 'css/dark-mode.css';
      btn.textContent = 'HC';
    } else if (mode === 'high') {
      link.href = 'css/high-contrast.css';
      btn.textContent = 'Light';
    } else {
      link.href = 'css/style.css';
      btn.textContent = 'Dark';
    }
  };

  btn.onclick = () => {
    mode = mode === 'light' ? 'dark' : mode === 'dark' ? 'high' : 'light';
    localStorage.setItem('theme', mode);
    apply();
  };

  apply();
});