export default ({ router }) => {
  router.afterEach((to) => {
    if (to.path === "/copy") {
      const urlParams = new URLSearchParams(window.location.search);
      const textToCopy = urlParams.get("text");

      if (textToCopy) {
        copyToClipboard(textToCopy);
      } else {
        alert("⚠️ 복사할 텍스트가 없습니다.");
        setTimeout(() => window.close(), 500);
      }
    }
  });

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      // 최신 브라우저에서 Clipboard API 사용
      navigator.clipboard
        .writeText(text)
        .then(() => handleSuccess())
        .catch(() => fallbackCopy(text));
    } else {
      // Safari, iOS 대응 (fallback 방식)
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", ""); // iOS에서 키보드가 뜨지 않도록 설정
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);

    textArea.select();
    textArea.setSelectionRange(0, 99999); // iOS 대응
    document.execCommand("copy");

    document.body.removeChild(textArea);
    handleSuccess();
  }

  function handleSuccess() {
    alert("✅ 링크가 복사되었습니다!");
    setTimeout(() => window.close(), 500);
  }
};
