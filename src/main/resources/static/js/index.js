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

// 댓글 input 에 값 입력시 작성 버튼 색 변경 + 활성화
const commentInputBtn = document.querySelector('.Comment_input_box > input');
const commentWriteBtn = document.querySelector('#Comment_btn2');
const commentCancelBtn = document.querySelector('#Comment_btn1');
commentWriteBtn.style.display = 'none'; // 기본값
commentCancelBtn.style.display = 'none';

commentInputBtn.addEventListener('input', (e) => {
  if (commentInputBtn.value.trim() !== "") {
          commentWriteBtn.classList.add('active'); // 값이 있을 때 active 클래스 추가
          commentWriteBtn.style.display = 'block'; // 버튼 표시
          commentCancelBtn.style.display = 'block';
      } else {
          commentWriteBtn.classList.remove('active'); // 값이 없을 때 active 클래스 제거
          commentWriteBtn.style.display = 'none'; // 버튼 숨김
          commentCancelBtn.style.display = 'none';
      }
})

// 댓글 취소 버튼 클릭시
commentCancelBtn.addEventListener('click', () => {
  commentInputBtn.value = ''; // 입력 필드 비우기
  commentWriteBtn.classList.remove('active'); // active 클래스 제거
  commentWriteBtn.style.display = 'none'; // 버튼 숨김
  commentCancelBtn.style.display = 'none';
})

// 댓글 작성 버튼 클릭시
commentWriteBtn.addEventListener('click', () => {
    const comment = commentInputBtn.value;

            // API 호출
            fetch('https://example.com/api/comments', { // API URL 로 변경
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment }) // JSON 형태로 comment 데이터 전송
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // 응답을 JSON으로 파싱
            })
            .then(data => {
                console.log('성공:', data);
                // 추가 동작 (예: 댓글 리스트 갱신)
                commentInput.value = ""; // 입력 필드 비우기
                updateCommentButton(); // 버튼 상태 업데이트
            })
            .catch(error => {
                console.error('실패:', error);
            });
})

// 댓글 like 클릭시 아이콘 변경
const commentLikeBtn = document.querySelectorAll('.comment_thumb_up');
commentLikeBtn.forEach(commentLikeList => {
    commentLikeList.addEventListener('click', () => {
        commentLikeList.textContent = (commentLikeList.textContent === 'thumb_up_off_alt') ? 'thumb_up' : 'thumb_up_off_alt'; // 아이콘 변경
    });
});

// 댓글 unlike 클릭시 아이콘 변경
const commentUnlikeBtn = document.querySelectorAll('.comment_thumb_down');
commentUnlikeBtn.forEach(commentUnlikeList => {
    commentUnlikeList.addEventListener('click', () => {
        commentUnlikeList.textContent = (commentUnlikeList.textContent === 'thumb_down_off_alt') ? 'thumb_down' : 'thumb_down_off_alt'; // 아이콘 변경
    });
});