const makeSidebar = require("./sidebar");

module.exports = {
  title: "Hoon's devlog",
  description: "Hoon's devlog",
  base: "/Learning-things/",
  dest: "post",
  themeConfig: {
    logo: "logo_hoon's_full.png",
    smoothScroll: true,
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/jeonghun-project/Learning-things",
      },
    ],
    smoothScroll: true,
    sidebar: [...makeSidebar.makeTree()],
  },
  head: [
    [
      "script",
      {
        src: "https://developers.kakao.com/sdk/js/kakao.min.js",
        defer: true,
      },
    ],
  ],
  plugins: [
    [
      "sitemap",
      { hostname: "https://jeonghun-project.github.io/Learning-things/" },
    ],
  ],
};
