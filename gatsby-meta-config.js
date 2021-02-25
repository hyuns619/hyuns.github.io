module.exports = {
  title: `Sunghyun Jeon`,
  description: `Sunghyun Jeon
  의 블로그입니다. 프론트엔드 개발과 관련된 일련의 경험과 배운 것을 블로그에 기록합니다.`,
  author: `hyun`,
  introduction: `개발을 진심으로 즐길 수 있는 개발자가 되기를 희망합니다. 블로그에서는 공부하는 일련의 과정을 기록하고 있습니다.`,
  siteUrl: `https://hyuns.netlify.app/`, // Your blog
  sitemapPath: `https://hyuns.netlify.app/sitemap.xml`,
  robotsPolicy: [{ userAgent: '*', allow: '/' }],
  social: {
    til: `sunghyunjeonme/TIL`, // Your Twitter account
    github: `sunghyunjeonme`, // Your GitHub account
    medium: ``, // Your Medium account
    facebook: ``, // Your Facebook account
    instagram: `hyuns619`, // Your LinkedIn account
  },
  icon: `content/assets/favicon.png`, // Add your favicon
  keywords: [
    `blog`,
    `devlog`,
    `web`,
    `development`,
    `frontend`,
    `javascript`,
    `books`,
    `review`,
    `til`,
  ],
  comment: {
    disqusShortName: '', // Your disqus-short-name. check disqus.com.
    utterances: 'sunghyunjeonme/hyuns.netlify.app', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: '',
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: 'G-M4KZ6DB1Y5', // Add your google analytics tranking ID
}
