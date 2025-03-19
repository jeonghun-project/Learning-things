<template>
  <div class="kakao-share-container">
    <a
      id="kakaotalk-sharing-btn"
      class="kakao-share-btn"
      :class="{ disabled: isLoading }"
    >
      <img
        :src="require('../public/kakaolink_btn_medium.png')"
        alt="카카오톡 공유"
        class="kakao-share-img"
      />
    </a>
    <span class="kakao-share-text">{{ "<- 카카오톡 공유하기" }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      KAKAO_APP_KEY: "c3b72259974d45749f33c28109a16472",
      isLoading: true,
      sdkLoaded: false,
    };
  },
  mounted() {
    this.loadKakaoSDK();
  },
  methods: {
    loadKakaoSDK() {
      if (window.Kakao && window.Kakao.isInitialized()) {
        this.sdkLoaded = true;
        return;
      }

      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.onload = () => {
        if (!window.Kakao) {
          console.error("카카오 SDK 로드 실패");
          return;
        }

        window.Kakao.init(this.KAKAO_APP_KEY);
        this.sdkLoaded = true;

        this.initShareButton();
      };

      script.onerror = () => {
        console.error("카카오 SDK 로드 실패");
        alert("카카오 SDK 로드에 실패했습니다. 새로고침 후 다시 시도해주세요.");
        window.close();
      };

      document.head.appendChild(script);
    },
    initShareButton() {
      if (!window.Kakao) {
        console.error("Kakao SDK가 초기화되지 않음");
        return;
      }
      this.isLoading = false;
      window.Kakao.Share.createScrapButton({
        container: "#kakaotalk-sharing-btn",
        requestUrl: window.location.href,
        templateId: 117651,
      });
    },
  },
};
</script>

<style scoped>
.kakao-share-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.kakao-share-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 14px;
  background-color: #f2eca9;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.kakao-share-btn.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.kakao-share-img {
  width: 40px;
  height: 40px;
}

.kakao-share-text {
  margin: 8px;
  font-size: 28px;
  font-weight: bold;
  color: #3c1e1e;
}
</style>

<style scoped>
.kakao-share-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.kakao-share-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 14px;
  background-color: #f2eca9;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.kakao-share-btn:hover {
  background-color: #f0cc2c;
  transform: scale(1.05);
}

.kakao-share-img {
  width: 40px;
  height: 40px;
}

.kakao-share-text {
  margin: 8px;
  font-size: 28px;
  font-weight: bold;
  color: #3c1e1e;
}
</style>
