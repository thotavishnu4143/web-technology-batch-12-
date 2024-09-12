window.addEventListener('DOMContentLoaded', (event) => {
    // Get the current URL to detect the active tab
    const currentPage = window.location.href.split("/").pop();

    // Get all tabs
    const tabs = document.querySelectorAll(".tab a");

    // Loop through tabs to set the active one
    tabs.forEach(tab => {
        if (tab.getAttribute('href') === currentPage) {
            tab.style.backgroundColor = '#0044cc';
            tab.style.color = 'white';
        }
    });
});
