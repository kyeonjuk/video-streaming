// 클릭 이벤트를 처리하는 함수
function handleNavigation(event) {
    const href = this.getAttribute('data-href');
    if (href) {
        window.location.href = href; // 해당 URL로 이동
    }
}

// 구독 목록 항목에 클릭 이벤트 추가
document.querySelectorAll('.subscription-list li').forEach(item => {
    item.addEventListener('click', handleNavigation);
});
