export default ({ router }) => {
  router.afterEach((to) => {
    if (to.path === "/copy") {
      const urlParams = new URLSearchParams(window.location.search);
      const textToCopy = urlParams.get("text");

      if (textToCopy) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            alert("✅ 링크가 복사되었습니다!");
            window.close(); // 창 자동 종료
          })
          .catch((err) => {
            alert("❌ 복사 실패! 브라우저 설정을 확인하세요.");
            console.error("복사 실패:", err);
          });
      } else {
        alert("⚠️ 복사할 텍스트가 없습니다.");
        window.close();
      }
    }
  });
};
