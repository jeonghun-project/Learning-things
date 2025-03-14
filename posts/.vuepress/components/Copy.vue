<template>
  <div class="copy-container">
    <p>
      <strong>{{ textToCopy ? `📋 ${textToCopy}` : "없음" }}</strong>
    </p>
    <button @click="handleCopy" class="copy-button">
      {{ copied ? "✅ 복사 완료!" : "📋 복사하기" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copied: false,
      textToCopy: "", // URL에서 가져온 복사할 텍스트
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.textToCopy = urlParams.get("text") || "";

    // 자동 복사 기능 (iOS 대응)
    if (this.textToCopy) {
      setTimeout(() => {
        this.handleCopy();
      }, 500);
    }
  },
  methods: {
    async handleCopy() {
      if (!this.textToCopy) {
        alert("⚠️ 복사할 텍스트가 없습니다.");
        return;
      }

      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(this.textToCopy);
          this.showSuccess();
        } catch (err) {
          this.fallbackCopy();
        }
      } else {
        this.fallbackCopy();
      }
    },
    fallbackCopy() {
      const div = document.createElement("div");
      div.textContent = this.textToCopy;
      div.style.position = "absolute";
      div.style.left = "-9999px";
      div.style.whiteSpace = "pre";
      div.contentEditable = true;
      document.body.appendChild(div);

      const range = document.createRange();
      range.selectNode(div);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");
      document.body.removeChild(div);

      this.showSuccess();
    },
    showSuccess() {
      this.copied = true;
      alert("✅ 복사 완료!");
    },
  },
};
</script>

<style scoped>
.copy-container {
  text-align: center;
  padding: 20px;
}
.copy-button {
  padding: 8px 12px;
  border: none;
  background-color: #007aff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.copy-button:active {
  background-color: #005bb5;
}
</style>
