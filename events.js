
document.addEventListener('DOMContentLoaded', (event) => {
    // Handle the search form submission
    const searchForm = document.querySelector('.search-container form');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        const query = this.search.value.trim();
        if (query) {
            // Perform the search - replace with your actual search logic
            window.location.href = '/search?query=' + encodeURIComponent(query);
        }
    });

    // Add any additional JavaScript for submenu interaction below
    // ...
});
