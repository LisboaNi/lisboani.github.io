/* CERTIFICATION */
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});

/* TOPO */ 
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

/* DARK */
const toggleBtn = document.getElementById('toggle-theme');
const html = document.documentElement;
const icon = toggleBtn.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
  icon.classList.remove('bi-moon-stars-fill');
  icon.classList.add('bi-sun-fill');
} else {
  html.classList.remove('dark');
  icon.classList.remove('bi-sun-fill');
  icon.classList.add('bi-moon-stars-fill');
}

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');

  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    icon.classList.remove('bi-moon-stars-fill');
    icon.classList.add('bi-sun-fill');
  } else {
    localStorage.setItem('theme', 'light');
    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-stars-fill');
  }
});

/* i18n */
const languageButtons = document.querySelectorAll('.lang-option');
const currentLangLabel = document.getElementById('current-lang');

const loadLanguage = async (lang) => {
  const response = await fetch(`./src/locales/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations;

    keys.forEach(k => {
      value = value?.[k];
    });

    if (value) el.textContent = value;
  });

  if (currentLangLabel) {
      currentLangLabel.textContent = lang.toUpperCase();
    }

  localStorage.setItem('language', lang);
};

// Botões de idioma
languageButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    loadLanguage(lang);
  });
});

// Ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('language') || 'pt';
  loadLanguage(lang);
});
