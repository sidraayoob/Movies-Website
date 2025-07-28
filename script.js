const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    toggleBtn.textContent = '🌞';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        toggleBtn.textContent = '🌞';
        localStorage.setItem('theme', 'light');
    } else {
        toggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});