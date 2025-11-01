import { loadPage } from './spa.js';
import './theme.js';

window.loadPage = loadPage;

window.toggleMenu = () => {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
  const expanded = menu.classList.contains('active');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', expanded);
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.hash.slice(1) || 'inicio';
  loadPage(page);
});