(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{192:function(n,e,t){"use strict";t.r(e);var i=t(0),o=t.n(i),a=t(197),r=t(195);e.default=function(){return o.a.createElement(a.a,null,o.a.createElement(r.a,{title:"404: Not found"}),o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},194:function(n,e){n.exports={appstore_link:"https://lingvograph.com",playstore_link:"https://lingvograph.com",google_analytics_ID:"UA-47311644-5",video_or_screenshot:"screenshot",app_url:"https://lingvograph.com",path_prefix:"/",app_name:"LingvoGraph",app_price:"Free",app_description:"Automatically generate GatsbyJS app landing pages.",app_keywords:["automatic","gatsbyjs","app","landing page"],your_name:"Sergey Todyshev",your_link:"https://tsvbits.com",your_city:"Berdsk",email_address:"stodyshev@gmail.com",linkedin_username:null,facebook_username:null,instagram_username:null,twitter_username:"todysh",github_username:"sergeyt",youtube_username:null,features:[{title:"GitHub Pages GatsbyJS Starter",description:"Designed for GitHub Pages and Netlify. Fork. Edit site-config.js. Upload screenshot/video. Push to gh-pages branch. Voilà!",fontawesome_icon_name:"magic"},{title:"iPhone Device Preview",description:"Preview your app in the context of an iPhone device. Five different device colors included.",fontawesome_icon_name:"mobile"},{title:"Video Support",description:"Preview app video on the iPhone device simply by placing your video files in the videos folder.",fontawesome_icon_name:"play-circle"},{title:"Optimized Performance",description:"No need to worry about page performance or optimizing images and videos. Everything is already configured for the best performance possible!",fontawesome_icon_name:"sync"},{title:"Easy to Tweak",description:"Tweak accent color, images, icons and transparency via the site-config.js file. No HTML/CSS needed.",fontawesome_icon_name:"adjust"},{title:"Feature List",description:"Add features (like this one) to your site via the site-config.js file. No HTML/CSS needed.",fontawesome_icon_name:"star"},{title:"Deploy to Netlify",description:"Easily deploy your GatsbyJS landing page to Netlify.",fontawesome_icon_name:"arrow-alt-circle-down"},{title:"Social Links",description:"Easily add social media accounts and contact info in the footer via the site-config.js file. No HTML/CSS needed.",fontawesome_icon_name:"link"},{title:"FontAwesome Support",description:"Pick custom Font Awesome icons for the feature list via the site-config.js file. No HTML/CSS needed.",fontawesome_icon_name:"info-circle"}],header_background:"rgba(0, 0, 0, 0.1)",topbar_title_color:"#ffffff",cover_overlay_color_rgba:"rgba(54, 59, 61, 0.8)",device_color:"black",body_background_color:"ffffff",primary_text_color:"#000",content_width:"1170px",font:'"Helvetica Neue", sans-serif',link_color:"#1d63ea",app_title_color:"#ffffff",app_price_color:"#ffffff",app_description_color:"#ffffff",feature_title_color:"#000000",feature_text_color:"#666666",feature_icons_foreground_color:"#1d63ea",feature_icons_background_color:"#e6e6e6",social_icons_foreground_color:"#666666",social_icons_background_color:"#e6e6e6",footer_text_color:"#666666"}},195:function(n,e,t){"use strict";var i=t(196),o=t(0),a=t.n(o),r=t(200),p=t.n(r);function c(n){var e=n.description,t=n.lang,o=n.meta,r=n.keywords,c=n.title,l=i.data.site,d=e||l.siteMetadata.description;return a.a.createElement(p.a,{htmlAttributes:{lang:t},title:c,titleTemplate:l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}c.defaultProps={lang:"en",meta:[],keywords:[]},e.a=c},196:function(n){n.exports={data:{site:{siteMetadata:{title:"LingvoGraph",description:"Automatically generate GatsbyJS app landing pages.",author:"todysh"}}}}},197:function(n,e,t){"use strict";var i=t(0),o=t.n(i),a=t(198),r=t(194),p=t.n(r);function c(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  html {\n    font-size: 62.5%;\n    font-family: ",";\n    line-height: 1;\n  }\n\n  body {\n    font-size: 2rem;\n    background-color: ",";\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  h3 {\n    font-size: 2rem;\n  }\n\n  // Better font rendering\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: ",";\n  }\n\n  a:link,\n  a:hover,\n  a:visited,\n  a:active {\n    color: ",";\n    text-decoration: none;\n  }\n\n  // Various resets\n  *,\n  *::before,\n  *::after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n\n    margin: 0;\n    padding: 0;\n  }\n\n  .imageWrapper {\n    // Sets the background image in the header area\n    height: 714px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: top;\n    border-radius: 0px 0px 40px 40px;\n  }\n\n  .headerImage {\n    position: unset !important;\n    height: 0 !important;\n    display: block !important;\n    \n  }\n  .headerImage > div{\n    padding-bottom: 0 !important;\n  }\n  .headerImage img {\n    z-index: -1;\n    border-radius: 0px 0px 40px 40px;\n  }\n\n  .headerBackground {\n    height: 115px;\n    background-color: ",";\n  }\n\n  .container {\n    // Set up the container for the site content\n    display: grid;\n    margin: auto;\n    max-width: ",';\n    padding-left: 15px;\n    padding-right: 15px;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: 115px 876px auto auto;\n    grid-column-gap: 30px;\n    grid-template-areas:\n      "h h h h h h h h h h h h"\n      "p p p p p i i i i i i i"\n      "c c c c c c c c c c c c"\n      "f f f f f f f f f f f f";\n  }\n\n  @media only screen and (max-width: 1070px) {\n    .container {\n      // Set up the container for the site content\n      grid-template-rows: 115px 811px auto auto;\n    }\n  }\n\n  @media only screen and (max-width: 992px) {\n    .container {\n      grid-column-gap: 0px;\n      grid-template-columns: 1;\n      grid-template-rows: 115px auto auto auto auto;\n      grid-template-areas:\n        "h h h h h h h h h h h h"\n        "i i i i i i i i i i i i"\n        "p p p p p p p p p p p p"\n        "c c c c c c c c c c c c"\n        "f f f f f f f f f f f f";\n    }\n  }\n\n  header {\n    grid-area: h;\n    display: flex;\n  }\n\n  .logo {\n    display: flex;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    height: 115px;\n  }\n\n  .logo > p {\n    color: ',";\n    display: flex;\n    font-weight: bold;\n    padding-bottom: 1px;\n  }\n\n  .headerIcon {\n    width: 50px;\n    height: 50px;\n    -webkit-clip-path: url(#shape);\n    clip-path: url(#shape);\n    margin-right: 15px;\n  }\n\n  // Navigation Links\n  nav {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 115px;\n  }\n\n  nav > ul {\n    color: #fff;\n    display: flex;\n    list-style-type: none;\n  }\n\n  nav > ul li {\n    padding-left: 50px;\n    text-align: right;\n  }\n\n  nav > ul li:first-child {\n    padding-left: 0px;\n  }\n\n  nav > ul li a:link,\n  nav > ul li a:visited {\n    text-decoration: none;\n    color: rgba(",", 0.6);\n  }\n\n  nav > ul li a:hover,\n  nav > ul li a:active {\n    text-decoration: none;\n    color: rgba(",", 1);\n  }\n\n  // App Title, Price, Description and Links\n\n  .appInfo {\n    grid-area: i;\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 140px;\n    align-content: flex-start;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .appInfo {\n      padding-top: 50px;\n      justify-content: center;\n    }\n  }\n\n  .appIconShadow {\n    display: flex;\n    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));\n  }\n\n  .appIconLarge {\n    width: 120px;\n    height: 120px;\n    -webkit-clip-path: url(#shape120);\n    clip-path: url(#shape120);\n  }\n\n  .appNamePriceContainer {\n    display: flex;\n    flex: 0 1 auto;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    margin-left: 30px;\n  }\n\n  .appName {\n    color: ",";\n  }\n\n  .appPrice {\n    color: ",";\n    font-weight: normal;\n    margin-top: 13px;\n  }\n\n  @media only screen and (max-width: 768px) {\n    .appNamePriceContainer {\n      width: 100%;\n      margin-left: 0px;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .appName {\n      margin-top: 30px;\n      text-align: center;\n    }\n\n    .appPrice {\n      margin-top: 13px;\n      text-align: center;\n    }\n  }\n\n  .appDescriptionContainer {\n    font-size: 2.5rem;\n    font-weight: normal;\n    width: 100%;\n    align-items: flex-start;\n    margin-top: 45px;\n    flex: 0 1 auto;\n    line-height: 1.5;\n  }\n\n  .appDescription {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 992px) {\n    .appDescription {\n      text-align: center;\n    }\n  }\n\n  .downloadButtonsContainer {\n    display: inline-block;\n    margin-top: 42px;\n    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));\n  }\n\n  @media only screen and (max-width: 992px) {\n    .downloadButtonsContainer {\n      text-align: center;\n    }\n  }\n\n  .playStore {\n    height: 75px;\n    margin-right: 24px;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .playStore {\n      margin-right: 24px;\n      margin-bottom: 0px;\n    }\n  }\n\n  @media only screen and (max-width: 528px) {\n    .playStore {\n      margin-right: 0px;\n      margin-bottom: 24px;\n    }\n  }\n\n  .appStore {\n    height: 75px;\n  }\n\n  // iPhone Device Preview\n\n  .iphonePreview {\n    grid-area: p;\n    background-size: 400px auto;\n    background-repeat: no-repeat;\n    margin-top: 68px;\n  }\n\n  .iphoneScreen {\n    width: 349px;\n    -webkit-clip-path: url(#screenMask);\n    clip-path: url(#screenMask);\n    margin-left: 26px;\n    margin-top: 23px;\n  }\n\n  .videoContainer {\n    width: 349px;\n    height: 755px;\n    -webkit-clip-path: url(#screenMask);\n    clip-path: url(#screenMask);\n    margin-left: 26px;\n    margin-top: 23px;\n  }\n\n  .videoContainer > video {\n    width: 349px;\n    height: 755px;\n  }\n\n  @media only screen and (max-width: 1070px) {\n    .iphonePreview {\n      background-size: 370px auto;\n    }\n\n    .iphoneScreen {\n      width: 322px;\n      margin-left: 24px;\n      margin-top: 22px;\n    }\n\n    .videoContainer {\n      width: 322px;\n      height: 698px;\n      margin-left: 24px;\n      margin-top: 22px;\n    }\n\n    .videoContainer > video {\n      width: 322px;\n      height: 698px;\n    }\n  }\n\n  @media only screen and (max-width: 992px) {\n    .iphonePreview {\n      display: flex;\n      background-size: 260px auto;\n      background-position: center 0;\n      margin-top: 47px;\n      justify-content: center;\n      padding-bottom: 75px;\n    }\n\n    .iphoneScreen {\n      width: 226px;\n      height: 488px;\n      -webkit-clip-path: url(#screenMask);\n      clip-path: url(#screenMask);\n      margin: 0px;\n      margin-top: 17px;\n    }\n\n    .videoContainer {\n      width: 226px;\n      height: 488px;\n      margin-left: 0px;\n      margin-top: 17px;\n    }\n\n    .videoContainer > video {\n      width: 226px;\n      height: 488px;\n    }\n  }\n\n  // Feature List\n\n  .features {\n    grid-area: c;\n    display: flex;\n    flex: 0 1 auto;\n    align-content: flex-start;\n    justify-content: flex-start;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    margin-top: 93px;\n  }\n\n  .feature {\n    display: flex;\n    padding-top: 63px;\n    padding-left: 15px;\n    padding-right: 15px;\n    width: calc(100% / 3);\n  }\n\n  .feature:nth-child(-n + 3) {\n    padding-top: 0px;\n  }\n\n  .feature:nth-child(3n) {\n    padding-right: 0px;\n  }\n\n  .feature:nth-child(3n + 1) {\n    padding-left: 0px;\n  }\n\n  .iconBack {\n    color: ",";\n  }\n\n  .iconTop {\n    color: ",";\n  }\n\n  .socialIconBack {\n    color: ",";\n  }\n\n  .socialIconTop {\n    color: ",";\n  }\n\n  .featureText {\n    margin-left: 18px;\n  }\n\n  .featureText > h3 {\n    color: ",";\n  }\n\n  .featureText > p {\n    color: ",";\n    margin-top: 8px;\n    line-height: 1.5;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .features {\n      flex-grow: 1;\n      flex-direction: row;\n      flex-wrap: wrap;\n      margin-top: 11px;\n    }\n\n    .feature {\n      display: flex;\n      padding-top: 41px;\n      padding-left: 15px;\n      padding-right: 15px;\n      width: 100%;\n    }\n\n    .feature:nth-child(-n + 3) {\n      padding-top: 41px;\n    }\n\n    .feature:nth-child(1) {\n      padding-top: 0px;\n    }\n\n    .feature:nth-child(3n) {\n      padding-right: 15px;\n    }\n\n    .feature:nth-child(3n + 1) {\n      padding-left: 15px;\n    }\n  }\n\n  // Footer\n\n  footer {\n    grid-area: f;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: center;\n  }\n\n  .footerText {\n    color: ",";\n    display: block;\n    line-height: 1.5;\n    width: 100%;\n    text-align: center;\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n\n  .footerIcons {\n    padding-bottom: 70px;\n    display: flex;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .footerText {\n      color: ",";\n      display: block;\n      line-height: 1.5;\n      width: 100%;\n      text-align: center;\n      padding-top: 54px;\n      padding-bottom: 61px;\n    }\n\n    .footerIcons {\n      padding-bottom: 70px;\n      display: flex;\n    }\n  }\n\n  .hidden {\n    display: none;\n  }\n"]);return c=function(){return n},n}var l=Object(a.a)(c(),p.a.font,p.a.body_background_color,p.a.body_background_color,p.a.link_color,p.a.header_background,p.a.content_width,p.a.topbar_title_color,p.a.topbar_title_color,p.a.topbar_title_color,p.a.app_title_color,p.a.app_price_color,p.a.app_description_color,p.a.feature_icons_background_color,p.a.feature_icons_foreground_color,p.a.social_icons_background_color,p.a.social_icons_foreground_color,p.a.feature_title_color,p.a.feature_text_color,p.a.footer_text_color,p.a.footer_text_color);e.a=function(n){var e=n.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null),e)}}}]);
//# sourceMappingURL=component---src-pages-404-js-f48641b677e6708c0a28.js.map