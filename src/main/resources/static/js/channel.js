// 정렬
document.addEventListener("DOMContentLoaded", function() {
    const sortSelect = document.getElementById("sort-select");
    const videoList = document.getElementById("video-list");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    sortSelect.addEventListener("change", function() {
        const sortBy = this.value;
        const videos = Array.from(videoList.children);

        videos.sort((a, b) => {
            if (sortBy === "popular") {
                return b.dataset.popularity - a.dataset.popularity; // 인기순 정렬
            } else {
                return new Date(b.dataset.uploadDate) - new Date(a.dataset.uploadDate); // 업로드순 정렬
            }
        });

        videoList.innerHTML = "";
        videos.forEach(video => videoList.appendChild(video));
    });

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase();
        const videos = Array.from(videoList.children);

        videos.forEach(video => {
            const title = video.dataset.title.toLowerCase();
            if (title.includes(query)) {
                video.style.display = ""; // 검색 결과에 포함된 경우 표시
            } else {
                video.style.display = "none"; // 검색 결과에 포함되지 않는 경우 숨김
            }
        });
    });
});

// 구독 클릭시
const subscribeBtn = document.querySelector('.subscribe');

subscribeBtn.addEventListener('click', () => {
  subscribeBtn.classList.toggle('clicked');
  if (subscribeBtn.classList.contains('clicked')) {
      subscribeBtn.textContent = 'Subscribed';
    } else {
      subscribeBtn.textContent = 'Subscribe';
    }
})