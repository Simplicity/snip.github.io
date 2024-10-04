"use strict";(self.webpackChunklandingpage_new=self.webpackChunklandingpage_new||[]).push([[583],{9173:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Me});var n=t(781),r=t(6540),a=t(3540);function s(e,i){i({...e.getBoundingClientRect().toJSON(),clientWidth:e.clientWidth,clientHeight:e.clientHeight})}const o=(0,r.createContext)(null);function c(e,i){return 0===i?0:(e%i+i)%i}const l=a.Ay.div`
  display: inline-flex;
  position: relative;
  width: 7em;
`,d=(a.Ay.div`
  position: absolute;
  width: 100%;
`,a.i7`
  0% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0em);
  }
  50% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0em);
  }
  100% {
    opacity: 0;
    transform: rotateX(-90deg) translateY(1em);
  }
`),h=a.i7`
  0% {
    opacity: 0;
    transform: rotateX(90deg) translateY(-0.33em);
  }
  50% {
    opacity: 0;
    transform: rotateX(90deg) translateY(-0.33em);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0em);
  }
`,m=a.Ay.div`
  position: absolute;
  width: 100%;
`,x=(0,a.Ay)(m)`
  animation-name: ${e=>"in"===e.$animation?h:d};
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;var p=t(4848);function g(e){const[i,t]=(0,r.useReducer)((i=>c(i+1,e.words.length)),-1),[n,a]=[e.words.at(i),e.words.at(c(i+1,e.words.length))];(0,r.useEffect)((()=>{const e=setInterval((()=>{t()}),3e3);return()=>{clearInterval(e)}}),[]);const s=(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("div",{children:"\xa0"}),e.children]});return-1===i?(0,p.jsxs)(l,{children:[s,(0,p.jsx)(m,{children:e.words.at(0)})]}):(0,p.jsxs)(l,{children:[s,(0,p.jsx)(x,{$animation:"out",children:n},n),(0,p.jsx)(x,{$animation:"in",children:a},a)]})}const f=a.Ay.a`
  text-decoration: none;
`,w=a.Ay.span`
  display: flex;
  border: 1px solid var(--accent-contrast-color-1);
  color: var(--accent-contrast-color-1);
  border-radius: 3em;
  width: 2.5em;
  height: 2.5em;
  align-items: center;
  justify-content: center;
  margin-left: 1em;
  margin-right: 1em;

  @media (min-width: 768px) {
    width: 3em;
    height: 3em;
  }

  svg {
    height: 40%;
    width: 40%;
    margin: 0.5em;
  }
`;function u(e){return(0,p.jsx)(f,{href:e.href,children:(0,p.jsx)(w,{children:e.children})})}function A(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"}),(0,p.jsx)("path",{d:"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"})]})}const b=a.Ay.section`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  background-color: var(--background-color-1);
`,j=a.Ay.div`
  transition: margin-top 0.33s, opacity 0.33s;
  margin-top: ${e=>void 0===e.$isInView?"0":e.$isInView?"":"10em"};

  opacity: ${e=>void 0===e.$isInView||e.$isInView?"1":"0"};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.$flexDirection??"row"};
  width: 100%;
`,y=a.AH`
  box-shadow: 0 10px 30px rgba(var(--box-shadow-base-color), 0.5);
`,v=a.Ay.div`
  display: flex;
  border-radius: 1em;
  overflow: hidden;
  ${e=>e.$boxShadow&&y}
  img {
    width: 100%;
    align-self: center; // Hack for Safari: keep aspect ratio of image
  }
`,C=a.Ay.span`
  display: inline-flex;
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
  svg {
    height: 100%;
    width: 100%;
  }
`,B=(0,a.Ay)(b)`
  color: var(--accent-contrast-color-1);
  background-color: var(--accent-color-1);
  height: var(--landing-page-download-section-height);
`,S=(0,a.Ay)(j)`
  flex: 1;
  padding-bottom: 3em;
  p {
    text-align: center;
  }
`,W=(0,a.Ay)(S)`
  @media (max-width: 768px) {
    display: none;
  }
`,k=(0,a.Ay)(S)`
  @media (min-width: 768px) {
    display: none;
  }
`;function z(){return(0,p.jsxs)(B,{children:[(0,p.jsxs)(W,{$flexDirection:"column",children:[(0,p.jsx)("p",{children:" Available on macOS. Coming soon on all other platforms."}),(0,p.jsx)(u,{href:"https://github.com/snip-app/client/releases/latest/download/Snip.dmg",children:(0,p.jsx)(A,{})})]}),(0,p.jsxs)(k,{$flexDirection:"column",children:[(0,p.jsx)("p",{children:" Available on iOS. Coming soon on all other platforms."}),(0,p.jsx)(u,{href:"https://apps.apple.com/ch/app/snip-notes-todos-reminders/id1584692945",children:(0,p.jsx)(A,{})})]})]})}const V=a.Ay.div`
  filter: drop-shadow(0px 5px 6px rgba(var(--box-shadow-base-color), 1));
  transform: translateZ(0); // fix flickering shadow on safari
`,Y=a.Ay.div`
  position: relative;
  display: flex;

  --aspect-ratio: 9 / 19.5;
  --border-width: 3%;
  --border-radius-inner: 15%;
  --border-radius-outer: calc(var(--border-radius-inner) + var(--border-width));

  border-radius: var(--border-radius-outer) /
    calc(var(--border-radius-outer) * var(--aspect-ratio));

  background-color: black;
`,I=a.Ay.div`
  width: 100%;
  margin: var(--border-width);
  aspect-ratio: var(--aspect-ratio);
  position: relative;
  display: flex;
  border-radius: 15% / calc(15% * var(--aspect-ratio));
  overflow: hidden;
  box-shadow: 0 0 0 var(--iphone-x-device-border-width) black;
`,Z=a.Ay.div`
  position: absolute;
  top: 0%;
  left: 50%;
  height: 3%;
  width: 48%;
  background-color: black;
  border-bottom-right-radius: 1000px;
  border-bottom-left-radius: 1000px;
  transform: translateX(-50%);
  z-index: 1000000000;
`,F=a.Ay.div`
  position: absolute;
  bottom: 1%;
  left: 50%;
  height: 1%;
  width: 40%;
  background-color: black;
  border-radius: 1000px;
  transform: translateX(-50%);
  z-index: 1000000000;
`,Q=a.Ay.div`
  position: absolute;
  top: 12%;
  left: 0.1%;
  height: 5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`,X=a.Ay.div`
  position: absolute;
  top: 21%;
  left: 0.1%;
  height: 8.5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`,L=a.Ay.div`
  position: absolute;
  top: 32%;
  left: 0.1%;
  height: 8.5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`,O=a.Ay.div`
  position: absolute;
  top: 17%;
  right: 0.1%;
  height: 4%;
  width: 1%;
  background-color: black;
  transform: translateX(100%);
`;function D(e){return(0,p.jsx)(V,{className:e.className,children:(0,p.jsxs)(Y,{children:[(0,p.jsxs)(I,{children:[e.children,(0,p.jsx)(Z,{}),(0,p.jsx)(F,{})]}),(0,p.jsx)(Q,{}),(0,p.jsx)(X,{}),(0,p.jsx)(L,{}),(0,p.jsx)(O,{})]})})}const M=(0,a.Ay)(b)`
  background: linear-gradient(
    180deg,
    var(--accent-contrast-color-1) 20%,
    var(--accent-color-1)
  );

  min-height: calc(
    min(
      100vh - var(--ifm-navbar-height) -
        var(--landing-page-download-section-height),
      80em
    )
  );
`,H=a.Ay.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 1em;
    margin-bottom: 2em;
    font-size: 1em;

    em {
      text-align: center;
    }
  }

  h2 {
    display: none;
    font-size: 1.5em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.25em;
    }
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5em;
    }

    h2 {
      display: block;
      font-size: 1.5em;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 3.25em;
    }
  }
`,E=(0,a.Ay)((function(e){switch(e.variation){case 1:return(0,p.jsx)("svg",{className:e.className,"aria-hidden":"true",viewBox:"0 0 418 42",preserveAspectRatio:"none",children:(0,p.jsx)("path",{d:"M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"})});case 2:return(0,p.jsx)("svg",{className:e.className,"aria-hidden":"true",viewBox:"0 0 281 40",preserveAspectRatio:"none",children:(0,p.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"})})}}))`
  position: absolute;
  margin-top: 1.75em;
  margin-left: 0.25em;
  width: 6.5em;
  stroke: var(--accent-color-1);
  fill: var(--accent-color-1);
`,T=(0,a.Ay)((function(e){return(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",className:e.className,children:(0,p.jsx)("path",{d:"M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"})})}))`
  width: 1em;
  position: absolute;
  right: -0.8em;
  top: 1.25em;
`,N=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-top: 1.25em;
  padding-bottom: 3em;
`,R=(0,a.Ay)(v).attrs({$boxShadow:!0})`
  width: 90%;
  max-width: 1050px;

  @media (max-width: 768px) {
    display: none;
  }
`,U=(0,a.Ay)(D)`
  max-width: 393px;

  @media (max-width: 576px) {
    width: 60%;
  }

  @media (min-width: 576px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`,J=["Lightweight","Free Of Charge","Simple","Offline-First","Powerful","Modular","Private","Cross-Platform","Responsive"];function P(){return(0,p.jsxs)(r.Fragment,{children:[(0,p.jsxs)(M,{children:[(0,p.jsxs)(H,{children:[(0,p.jsxs)("h1",{children:["Note Taking Can Be \xa0",(0,p.jsx)("em",{children:(0,p.jsx)(g,{words:J,children:(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)(E,{variation:1}),(0,p.jsx)(T,{})]})})})]}),(0,p.jsxs)("h2",{children:["Snip Is Your Everyday \xa0",(0,p.jsx)("em",{children:"Productivity"}),"\xa0 Companion."]})]}),(0,p.jsxs)(N,{children:[(0,p.jsx)(R,{children:(0,p.jsx)("img",{src:t(5090).A})}),(0,p.jsx)(U,{children:(0,p.jsx)("img",{src:t(1238).A})})]})]}),(0,p.jsx)(z,{})]})}var q=t(350);const K=a.Ay.div`
  transition: transform ${e=>e.$animationDuration}s
      ${e=>e.$animationDelay}s,
    opacity ${e=>e.$animationDuration}s
      ${e=>e.$animationDelay}s;

  opacity: ${e=>e.$isInView?"1":"0"};
`;(0,a.Ay)(K)`
  transform: ${e=>e.$isInView?"translateY(0)":"translateY(-5em)"};
`,(0,a.Ay)(K)`
  transform: ${e=>e.$isInView?"translateY(0)":"translateY(5em)"};
`,(0,a.Ay)(K)`
  transform: ${e=>e.$isInView?"translateX(0)":"translateX(-5em)"};
`,(0,a.Ay)(K)`
  transform: ${e=>e.$isInView?"translateX(0)":"translateX(5em)"};
`;function G(e){const i=(0,r.useRef)(null);(0,q.W)(i);return e.children}const $=(0,a.Ay)(b)`
  display: none;

  background-color: var(--accent-color-1);
  color: var(--accent-contrast-color-1);
  min-height: 100vh;

  position: relative;

  @media (min-width: 1200px) {
    display: flex;
  }
`,_=a.Ay.div`
  position: absolute;
  left: -5em;
  height: 5em;
  width: calc(100% + 10em);

  /* TODO remove? */
  transition: margin-top 1s;
  margin-top: ${e=>e.$hide?"5em":"0"};
`,ee=(0,a.Ay)(_)`
  top: -5em;
  box-shadow: 0 20px 18px rgba(var(--box-shadow-base-color), 0.9);
  transform: translateY(-2em) rotateZ(-0.75deg);
`,ie=(0,a.Ay)(_)`
  top: -5em;
  box-shadow: 0 20px 18px rgba(var(--box-shadow-base-color), 0.9);
  transform: translateY(-2em) rotateZ(0.75deg);
`,te=(0,a.Ay)(_)`
  bottom: -5em;
  box-shadow: 0px 0px 40px rgba(var(--box-shadow-base-color), 0.9);
`,ne=(a.Ay.div`
  height: 60em;
  width: 100em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,(0,a.Ay)(v).attrs({$boxShadow:!0})`
  max-width: 55em;
`),re=a.Ay.div`
  margin-right: 5em;
  max-width: 30em;

  h1 {
    font-size: 5em;
  }

  p {
    text-align: center;
  }

  @media (max-width: 992px) {
    max-width: 30em;
  }
`;function ae(){return(0,p.jsxs)($,{children:[(0,p.jsx)(ee,{$hide:!1}),(0,p.jsx)(ie,{$hide:!1}),(0,p.jsx)(te,{$hide:!1}),(0,p.jsx)(G,{children:(0,p.jsxs)(j,{children:[(0,p.jsxs)(re,{children:[(0,p.jsx)("h1",{children:"Dashboards"}),(0,p.jsx)("p",{children:"Pin notes to the navigation bar and use references to create dashboards."})]}),(0,p.jsx)(ne,{children:(0,p.jsx)("img",{src:t(1762).A})})]})})]})}const se=(0,a.Ay)(b)`
  min-height: 40em;

  h1 {
    font-size: 1.5em;
    margin: 0;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2em;
    }
  }

  p {
    margin: 0;
    margin-top: 1em;
    max-width: 22.5em;
    padding-left: 2em;
  }

  ul {
    margin: 0;
    margin-top: 1em;
  }
`,oe=a.Ay.div`
  width: 3em;
  margin-left: 2em;

  @media (min-width: 768px) {
    width: 4em;
  }
`,ce=(0,a.Ay)(j)`
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;function le(){return(0,p.jsxs)(se,{children:[(0,p.jsx)(G,{children:(0,p.jsxs)(j,{children:[(0,p.jsx)("h1",{children:"Sync with GitHub"}),(0,p.jsx)(oe,{children:(0,p.jsx)("img",{src:t(75).A})})]})}),(0,p.jsxs)(ce,{children:[(0,p.jsx)(G,{type:"from-left",animationDelay:.5,children:(0,p.jsx)("p",{children:"Snip allows you to sync all your notes to a GitHub repo by using a fine grained access token. This has the following advantages:"})}),(0,p.jsx)(G,{type:"from-right",animationDelay:.5,children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:"You never lose your notes"}),(0,p.jsx)("li",{children:"You have access from multiple devices"}),(0,p.jsx)("li",{children:"You can store your notes for free, forever"})]})})]})]})}function de(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),(0,p.jsx)("path",{d:"M11.315 10.014a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434"})]})}function he(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"}),(0,p.jsx)("path",{d:"M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"})]})}const me=a.Ay.div`
  width: ${e=>e.$width?e.$width:"none"};
  max-width: calc(100% - 2em);
  border-radius: 2em;
  overflow: hidden;
  background-color: var(--accent-color-1);
  border: 1px solid var(--border-color-1);
`,xe=a.AH`
  transform: translateX(2.5em) translateY(1.5em);
`,pe=a.AH`
  transform: translateX(-2.5em) translateY(1.5em);
`,ge=a.AH`
  transform: translateY(1.5em);
  margin-left: 1em;
  margin-right: 1em;
`,fe=a.AH`
  margin: 1em;
`;const we=a.Ay.div`
  ${e=>function(e){switch(e){case"on-the-right":return xe;case"on-the-left":return pe;case"at-the-bottom":return ge;case"centered":return fe}}(e.$position)}
  filter: drop-shadow(0px 5px 6px rgba(var(--box-shadow-base-color), 0.75));
`;function ue(e){return(0,p.jsx)(me,{$width:e.width,className:e.className,children:(0,p.jsx)(we,{$position:e.position,children:e.children})})}const Ae=(0,a.Ay)(b)`
  padding-top: 7em;
  padding-bottom: 10em;
  min-height: 100vh;

  h1,
  h2 {
    display: flex;
    align-items: center;
  }

  h1 {
    margin-bottom: 1em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2.25em;
    }

    h2 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 3.5em;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4em;
    }
  }
`,be=(0,a.Ay)(j)`
  padding-left: 2em;
  padding-right: 2em;

  justify-content: space-between;
  max-width: 60em;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`,je=(0,a.Ay)(be)`
  flex-direction: row-reverse;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`,ye=a.Ay.div`
  max-width: 20em;

  @media (max-width: 992px) {
    max-width: 30em;
  }
`,ve=(0,a.Ay)(ue)`
  max-width: 30em;
`,Ce=a.Ay.div`
  height: 7.5em;
`,Be=a.Ay.div`
  position: absolute;
  top: -5em;
  left: -5em;
  height: 5em;
  width: calc(100% + 10em);

  box-shadow: 0px 0px 20px rgba(var(--box-shadow-base-color), 1);
  background-color: red;
`,Se=a.Ay.div`
  position: absolute;
  left: 0;
  width: calc(100% + 10em);
  background-color: var(--accent-color-1);
`,We=(0,a.Ay)(Se)`
  top: 0;
  height: 10em;
  transform: translateX(-5em) translateY(-6.5em) rotateZ(2deg);
`,ke=(0,a.Ay)(Se)`
  bottom: 0;
  transform: translateX(-5em) translateY(6.5em) rotateZ(2deg);
  height: 12em;
`;function ze(){return(0,p.jsxs)(Ae,{children:[(0,p.jsx)(We,{}),(0,p.jsx)(Be,{}),(0,p.jsx)(ke,{}),(0,p.jsx)("h1",{children:"Find And Organize"}),(0,p.jsxs)(be,{children:[(0,p.jsx)(G,{type:"from-left",children:(0,p.jsxs)(ye,{children:[(0,p.jsx)("h2",{children:(0,p.jsx)(C,{children:(0,p.jsx)(he,{})})}),(0,p.jsx)("h2",{children:"Search"}),(0,p.jsx)("p",{children:"Snip offers fast and efficient search functionality, delivering well-formatted results that provide clear and concise previews of the content."})]})}),(0,p.jsx)(G,{type:"from-right",children:(0,p.jsx)(ve,{position:"at-the-bottom",children:(0,p.jsx)(v,{children:(0,p.jsx)("img",{src:t(3696).A})})})})]}),(0,p.jsx)(Ce,{}),(0,p.jsxs)(je,{children:[(0,p.jsx)(G,{type:"from-right",children:(0,p.jsxs)(ye,{children:[(0,p.jsx)("h2",{children:(0,p.jsx)(C,{children:(0,p.jsx)(de,{})})}),(0,p.jsx)("h2",{children:"Icons"}),(0,p.jsx)("p",{children:"Snip includes a collection of icons that enhance the structure of your notes, adding both clarity and visual appeal."})]})}),(0,p.jsx)(G,{type:"from-left",children:(0,p.jsx)(ve,{position:"on-the-right",children:(0,p.jsx)(v,{children:(0,p.jsx)("img",{src:t(1315).A})})})})]})]})}const Ve=(0,a.Ay)(b)`
  filter: drop-shadow(1px 15px 20px rgba(var(--box-shadow-base-color), 0.9));
  z-index: 1;

  @media (max-width: 768px) {
    /* Because the mobile section is hidden on more narrow devices, we have to change the shadow here */
    filter: drop-shadow(1px 15px 20px rgba(0, 0, 0, 0.9));
  }

  h2 {
    text-align: center;
    font-size: 3em;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  --section-width: 60em;

  transform: translateZ(0); // fix flickering shadow on safari
`,Ye=(0,a.Ay)(j)`
  flex-direction: column;
  padding-bottom: 2em;

  p {
    max-width: calc(100% - 2em);
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: var(--section-width);

    p {
      max-width: calc(100% / 3 - 1em);
    }
  }
`,Ie=a.Ay.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
  width: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
    width: var(--section-width);
  }
`,Ze=a.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;

    p {
      padding-right: 3em;
    }
  }

  max-width: calc(100% - 2em);
`;function Fe(){return(0,p.jsxs)(Ve,{children:[(0,p.jsxs)(j,{$flexDirection:"column",children:[(0,p.jsx)("h2",{children:"Spaced Repetition With Flashcards"}),(0,p.jsxs)(Ye,{children:[(0,p.jsx)("p",{children:'Snip is all about taking notes. In Snip, a "Note" is in fact called a "Snippet" (hence the name "Snip"). A Snippet is a piece of data that can be represented in a graphical user interface.'}),(0,p.jsx)("p",{children:"When taking notes, you will be using the Rich Text Snippet. It represents some text on which you can apply formatting such as titles, sub-titles, quotes, code blocks, bold and italic text, etc."}),(0,p.jsx)("p",{children:"In the following section, you will learn about another Snippet type, the Flashcard Snippet, which is very similar to a Rich Text Snippet, but comes with additional functionality, allowing you to use Snip as a spaced repetition app."})]})]}),(0,p.jsxs)(j,{$flexDirection:"column",children:[(0,p.jsxs)(Ie,{children:[(0,p.jsx)(G,{type:"from-left",children:(0,p.jsxs)(Ze,{children:[(0,p.jsx)("h3",{children:"Flashcard Snippet"}),(0,p.jsx)("p",{children:"Conceptually, a flashcard snippet is identical to a real world flash card: It has two sides, where one side is a question or prompt and the other side is an answer or information. For example, this can be used for learning a new language."})]})}),(0,p.jsx)(G,{type:"from-right",children:(0,p.jsx)(ue,{width:"30em",position:"at-the-bottom",children:(0,p.jsx)(v,{children:(0,p.jsx)("img",{src:t(2687).A})})})})]}),(0,p.jsxs)(Ie,{children:[(0,p.jsx)(G,{type:"from-left",children:(0,p.jsxs)(Ze,{children:[(0,p.jsx)("h3",{children:"Dashboard"}),(0,p.jsx)("p",{children:"The Dashboard gives an overview of all the flashcards in this folder. It shows your learning progress over time and lists all flashcards ordered by relevance. The relevance of a card is calculated through a scoring algorithm."})]})}),(0,p.jsx)(G,{type:"from-right",children:(0,p.jsx)(ue,{width:"35em",position:"on-the-right",children:(0,p.jsx)(v,{children:(0,p.jsx)("img",{src:t(8098).A})})})})]}),(0,p.jsxs)(Ie,{children:[(0,p.jsx)(G,{type:"from-left",children:(0,p.jsxs)(Ze,{children:[(0,p.jsx)("h3",{children:"Session Wizard"}),(0,p.jsx)("p",{children:"Flashcards can be practiced in an interactive mode. When stepping through the flashcards, a rating can be provided, which will re-prioritize the flashcards in the next session."})]})}),(0,p.jsx)(G,{type:"from-right",children:(0,p.jsx)(ue,{width:"25em",position:"at-the-bottom",children:(0,p.jsx)(v,{children:(0,p.jsx)("img",{src:t(2865).A})})})})]})]})]})}const Qe=(0,a.Ay)(b)`
  display: none;
  background-color: var(--accent-color-1);
  color: var(--accent-contrast-color-1);
  min-height: 100vh;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);

  h1 {
    font-size: 4em;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`,Xe=(0,a.Ay)(D)`
  width: 20em;
`,Le=(0,a.Ay)(j)`
  margin-top: 5em;
  margin-bottom: 5em;
`;function Oe(){return(0,p.jsxs)(Qe,{children:[(0,p.jsxs)(j,{$flexDirection:"column",children:[(0,p.jsx)("h1",{children:"Available on iOS"}),(0,p.jsx)(G,{children:(0,p.jsx)(Xe,{children:(0,p.jsx)("img",{src:t(1238).A})})})]}),(0,p.jsxs)(Le,{$flexDirection:"column",children:[(0,p.jsx)("p",{children:"Available on iOS. Coming soon on all other platforms."}),(0,p.jsx)(u,{href:"https://apps.apple.com/ch/app/snip-notes-todos-reminders/id1584692945",children:(0,p.jsx)(A,{})})]})]})}const De=a.Ay.main`
  em {
    font-style: normal;
    color: var(--accent-color-1);
    white-space: nowrap;
  }
`;function Me(){const e=(0,r.useRef)(null),i=function(e,i){void 0===i&&(i={doPostEvaluation:!1});const[t,n]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const t=e?.current;if(t){const e=new ResizeObserver((e=>{let[i]=e;s(i.target,n)}));e.observe(t),s(t,n);const r=i.doPostEvaluation&&setTimeout((()=>{s(t,n)}),500);return()=>{e.unobserve(t),r&&clearTimeout(r)}}}),[e?.current]),i.refreshTrigger&&(0,r.useEffect)((()=>{e?.current&&s(e.current,n)}),[i.refreshTrigger?.trigger]),t}(e),[t,a]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=setTimeout((()=>a(!0)),0);return()=>clearTimeout(e)}),[]),(0,p.jsx)(o.Provider,{value:i,children:(0,p.jsx)(n.A,{title:"A free to use, cross-platform productivity app",description:"Snip is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored.",children:(0,p.jsxs)(De,{ref:e,style:{opacity:t?1:0,transition:"opacity 0s"},children:[(0,p.jsx)(P,{}),(0,p.jsx)(ae,{}),(0,p.jsx)(le,{}),(0,p.jsx)(ze,{}),(0,p.jsx)(Fe,{}),(0,p.jsx)(Oe,{})]})})})}},1762:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/dashboard-f5ae217bc6f8fdfd61b23a34f338f998.png"},8098:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/flashcard-deck-457a6c01b72a54e4232fbcd3e9f75297.png"},2865:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/flashcard-session-4ed05e74cc9b6fc798d07fa0d2d7c208.png"},5090:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/general-todos-332796b73c59716aad16b275baf5dbe7.png"},75:(e,i,t)=>{t.d(i,{A:()=>n});const n="data:image/png;base64,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"},1315:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/icons-f777903f2944a108eeafff0923472a84.png"},1238:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/mobile-editor-3cc65c57f93432a49ae79187c79a8b58.png"},3696:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/search-b8be07fe54dbcf10fd3bbe4121da3863.png"},2687:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/single-flashcard-02215eb5406424408b251816a3d668e5.png"}}]);