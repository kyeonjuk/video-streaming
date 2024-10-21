// 썸네일 미리보기
document.getElementById('thumbnail').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById('thumbnailPreview');

    // 미리보기 영역을 초기화
    preview.innerHTML = '';

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Thumbnail Preview">`;
            preview.style.display = 'block'; // 이미지를 보여줍니다.
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none'; // 이미지가 없으면 숨깁니다.
    }
});