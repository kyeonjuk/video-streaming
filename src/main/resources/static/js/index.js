// 제목 토글 클릭시
const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const titleName = document.querySelector('.info .metadata .title .title-name');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  titleName.classList.toggle('clamp');
})


// 구독 클릭시
const subscribeBtn = document.querySelector('.info .channel .metadata .subscribe');

subscribeBtn.addEventListener('click', () => {
  subscribeBtn.classList.toggle('clicked');
  if (subscribeBtn.classList.contains('clicked')) {
      subscribeBtn.textContent = 'Subscribed';
    } else {
      subscribeBtn.textContent = 'Subscribe';
    }
})

// 좋아요 클릭시 색상 변경
const likeBtn = document.querySelector('.actions .fa-thumbs-up');

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('active');
})

// import 클릭시 색상 변경
const importBtn = document.querySelector('.actions .fa-flag');

importBtn.addEventListener('click', () => {
  importBtn.classList.toggle('active');
})