document.addEventListener('DOMContentLoaded', function () {
    const videosPerPage = 6; // Number of videos to display per page
    const videoContainer = document.getElementById('videoContainer');
    const paginationContainer = document.getElementById('pagination');

    const totalVideos = videoContainer.children.length;
    const totalPages = Math.ceil(totalVideos / videosPerPage);

    // Initialize pagination
    renderPagination();

    function renderPagination() {
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.classList.add('page-link');
            pageLink.addEventListener('click', function () {
                showPage(i);
            });
            paginationContainer.appendChild(pageLink);
        }

        // Show the first page by default
        showPage(1);
    }

    function showPage(pageNumber) {
        const startIdx = (pageNumber - 1) * videosPerPage;
        const endIdx = startIdx + videosPerPage;

        // Hide all videos
        for (let i = 0; i < totalVideos; i++) {
            videoContainer.children[i].style.display = 'none';
        }

        // Show videos for the current page
        for (let i = startIdx; i < endIdx && i < totalVideos; i++) {
            videoContainer.children[i].style.display = 'block';
        }

        // Update active state in pagination links
        const pageLinks = paginationContainer.querySelectorAll('.page-link');
        pageLinks.forEach(link => link.classList.remove('active'));
        pageLinks[pageNumber - 1].classList.add('active');
    }
});