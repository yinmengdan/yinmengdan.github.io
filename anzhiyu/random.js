var posts=["2026/01/08/字数统计/","2026/01/07/hexo本地环境配置/","2026/01/08/搜索/","2026/01/08/诗词/","2026/01/07/安知鱼主题配置/","2026/01/07/永久链接/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };