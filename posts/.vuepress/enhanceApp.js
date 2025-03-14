export default ({ router }) => {
  router.afterEach((to) => {
    if (to.path === "/copy") {
      const urlParams = new URLSearchParams(window.location.search);
      const textToCopy = urlParams.get("text");

      if (textToCopy) {
        setTimeout(() => {
          navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
              alert("✅ 링크가 복사되었습니다!");
              window.close();
            })
            .catch(() => {
              fallbackCopy(textToCopy);
            });
        }, 100);
      } else {
        alert("⚠️ 복사할 텍스트가 없습니다.");
        setTimeout(() => window.close(), 500);
      }
    }
  });

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("✅ 링크가 복사되었습니다!");
    setTimeout(() => window.close(), 500);
  }
};
