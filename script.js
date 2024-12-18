document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar input");
    const movieCards = document.querySelectorAll(".movie-card");

    searchBar.addEventListener("input", () => {
        const searchValue = searchBar.value.toLowerCase();
        movieCards.forEach(card => {
            const title = card.querySelector("h3").innerText.toLowerCase();
            if (title.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // View More Button - Redirect to YouTube
    document.querySelector(".view-more").addEventListener("click", () => {
        window.location.href = "https://www.youtube.com";
    });
});
