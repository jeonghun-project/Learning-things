<template>
  <div v-if="isKakaoLoaded" class="kakao-share-container">
    <a @click="handleShare" id="kakaotalk-sharing-btn" class="kakao-share-btn">
      <img
        :src="require('../public/kakaolink_btn_medium.png')"
        alt="카카오톡 공유"
        class="kakao-share-img"
      />
    </a>
    <span class="kakao-share-text">{{ "<- 카카오톡 공유하기" }}</span>
  </div>
  <div v-else>
    <span>잠시만 기다려주세요</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      KAKAO_APP_KEY: "c3b72259974d45749f33c28109a16472", // 카카오 JavaScript 키
    };
  },
  mounted() {
    if (typeof window !== "undefined" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(this.KAKAO_APP_KEY);
      }
    }
  },
  computed: {
    isKakaoLoaded() {
      return typeof window !== "undefined" && window.Kakao;
    },
  },
  methods: {
    handleShare() {
      if (typeof window !== "undefined" && window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(this.KAKAO_APP_KEY);
        }
        window.Kakao.Share.createScrapButton({
          container: "#kakaotalk-sharing-btn",
          requestUrl: window.location.href,
          templateId: 117651,
        });
      }
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
