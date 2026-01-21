                              // script.js

// === Theme Toggle ===
const html = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');

// Load saved theme from localStorage or default to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  html.classList.add('dark');
}

// Toggle theme and save preference
themeToggleBtn?.addEventListener('click', () => {
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// === Accordion Logic ===
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains('open');

    // Close all other accordions
    document.querySelectorAll('.accordion-content').forEach(c => {
      if (c !== content && c.classList.contains('open')) {
        c.classList.remove('open');
        c.style.maxHeight = '0px';
        c.previousElementSibling.querySelector('i').classList.remove('rotate-180');
      }
    });

    // Toggle current accordion
    if (isOpen) {
      content.classList.remove('open');
      content.style.maxHeight = '0px';
      button.querySelector('i').classList.remove('rotate-180');
    } else {
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      button.querySelector('i').classList.add('rotate-180');
    }
  });
});