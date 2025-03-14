<template>
  <a @click="handleShare" id="kakaotalk-sharing-btn">
    <img
      :src="require('../public/kakaolink_btn_medium.png')"
      alt="카카오톡 공유"
    />
  </a>
  <span>{{ "<- 카카오톡 공유하기" }} </span>
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
