document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the current theme from localStorage
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggleButton.addEventListener('click', () => {
        let newTheme = 'light';
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            newTheme = 'dark';
        } else if (document.documentElement.getAttribute('data-theme') === 'dark') {
            newTheme = 'custom';
        } else if (document.documentElement.getAttribute('data-theme') === 'custom') {
            newTheme = 'light';
        }
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});