document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    // 초기 상태에서 메시지 숨기기
    errorMessage.style.display = "none";
    successMessage.style.display = "none";

    // 비밀번호 입력 시 확인
    const checkPasswords = () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            errorMessage.style.display = "block"; // 에러 메시지 표시
            successMessage.style.display = "none"; // 성공 메시지 숨김
        } else {
            errorMessage.style.display = "none"; // 에러 메시지 숨김
            successMessage.style.display = "block"; // 성공 메시지 표시
        }
    };

    confirmPasswordInput.addEventListener("input", checkPasswords);
    passwordInput.addEventListener("input", checkPasswords);
});