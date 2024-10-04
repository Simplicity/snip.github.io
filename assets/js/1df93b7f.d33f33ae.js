"use strict";(self.webpackChunklandingpage_new=self.webpackChunklandingpage_new||[]).push([[583],{2446:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Ee});var n=t(781),a=t(6540),C=t(3540);function r(e,i){return 0===i?0:(e%i+i)%i}const s=C.Ay.div`
  display: inline-flex;
  position: relative;
  width: 7em;
`,o=(C.Ay.div`
  position: absolute;
  width: 100%;
`,C.i7`
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
`),c=C.i7`
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
`,l=C.Ay.div`
  position: absolute;
  width: 100%;
`,d=(0,C.Ay)(l)`
  animation-name: ${e=>"in"===e.$animation?c:o};
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;var h=t(4848);function m(e){const[i,t]=(0,a.useReducer)((i=>r(i+1,e.words.length)),-1),[n,C]=[e.words.at(i),e.words.at(r(i+1,e.words.length))];(0,a.useEffect)((()=>{const e=setInterval((()=>{t()}),3e3);return()=>{clearInterval(e)}}),[]);const o=(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)("div",{children:"\xa0"}),e.children]});return-1===i?(0,h.jsxs)(s,{children:[o,(0,h.jsx)(l,{children:e.words.at(0)})]}):(0,h.jsxs)(s,{children:[o,(0,h.jsx)(d,{$animation:"out",children:n},n),(0,h.jsx)(d,{$animation:"in",children:C},C)]})}const x=C.Ay.a`
  text-decoration: none;
`,p=C.Ay.span`
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
`;function g(e){return(0,h.jsx)(x,{href:e.href,children:(0,h.jsx)(p,{children:e.children})})}function f(){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,h.jsx)("path",{d:"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"}),(0,h.jsx)("path",{d:"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"})]})}const w=C.Ay.section`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  background-color: var(--background-color-1);
`,u=C.Ay.div`
  transition: margin-top 0.33s, opacity 0.33s;
  margin-top: ${e=>void 0===e.$isInView?"0":e.$isInView?"":"10em"};

  opacity: ${e=>void 0===e.$isInView||e.$isInView?"1":"0"};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.$flexDirection??"row"};
  width: 100%;
`,A=C.AH`
  box-shadow: 0 10px 30px rgba(var(--box-shadow-base-color), 0.5);
`,j=C.Ay.div`
  display: flex;
  border-radius: 1em;
  overflow: hidden;
  ${e=>e.$boxShadow&&A}
  img {
    width: 100%;
    align-self: center; // Hack for Safari: keep aspect ratio of image
  }
`,b=C.Ay.span`
  display: inline-flex;
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
  svg {
    height: 100%;
    width: 100%;
  }
`,y=(0,C.Ay)(w)`
  color: var(--accent-contrast-color-1);
  background-color: var(--accent-color-1);
  height: var(--landing-page-download-section-height);
`,v=(0,C.Ay)(u)`
  flex: 1;
  padding-bottom: 3em;
  p {
    text-align: center;
  }
`,B=(0,C.Ay)(v)`
  @media (max-width: 768px) {
    display: none;
  }
`,S=(0,C.Ay)(v)`
  @media (min-width: 768px) {
    display: none;
  }
`;function W(){return(0,h.jsxs)(y,{children:[(0,h.jsxs)(B,{$flexDirection:"column",children:[(0,h.jsx)("p",{children:" Available on macOS. Coming soon on all other platforms."}),(0,h.jsx)(g,{href:"https://github.com/snip-app/client/releases/latest/download/Snip.dmg",children:(0,h.jsx)(f,{})})]}),(0,h.jsxs)(S,{$flexDirection:"column",children:[(0,h.jsx)("p",{children:" Available on iOS. Coming soon on all other platforms."}),(0,h.jsx)(g,{href:"https://apps.apple.com/ch/app/snip-notes-todos-reminders/id1584692945",children:(0,h.jsx)(f,{})})]})]})}const k=C.Ay.div`
  filter: drop-shadow(0px 5px 6px rgba(var(--box-shadow-base-color), 1));
`,V=C.Ay.div`
  position: relative;
  display: flex;

  --aspect-ratio: 9 / 19.5;
  --border-width: 3%;
  --border-radius-inner: 15%;
  --border-radius-outer: calc(var(--border-radius-inner) + var(--border-width));

  border-radius: var(--border-radius-outer) /
    calc(var(--border-radius-outer) * var(--aspect-ratio));

  background-color: black;
`,I=C.Ay.div`
  width: 100%;
  margin: var(--border-width);
  aspect-ratio: var(--aspect-ratio);
  position: relative;
  display: flex;
  border-radius: 15% / calc(15% * var(--aspect-ratio));
  overflow: hidden;
  box-shadow: 0 0 0 var(--iphone-x-device-border-width) black;
`,z=C.Ay.div`
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
`,M=C.Ay.div`
  position: absolute;
  bottom: 1%;
  left: 50%;
  height: 1%;
  width: 40%;
  background-color: black;
  border-radius: 1000px;
  transform: translateX(-50%);
  z-index: 1000000000;
`,Y=C.Ay.div`
  position: absolute;
  top: 12%;
  left: 0.1%;
  height: 5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`,Z=C.Ay.div`
  position: absolute;
  top: 21%;
  left: 0.1%;
  height: 8.5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`,D=C.Ay.div`
  position: absolute;
  top: 32%;
  left: 0.1%;
  height: 8.5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`,F=C.Ay.div`
  position: absolute;
  top: 17%;
  right: 0.1%;
  height: 4%;
  width: 1%;
  background-color: black;
  transform: translateX(100%);
`;function Q(e){return(0,h.jsx)(k,{className:e.className,children:(0,h.jsxs)(V,{children:[(0,h.jsxs)(I,{children:[e.children,(0,h.jsx)(z,{}),(0,h.jsx)(M,{})]}),(0,h.jsx)(Y,{}),(0,h.jsx)(Z,{}),(0,h.jsx)(D,{}),(0,h.jsx)(F,{})]})})}const X=(0,C.Ay)(w)`
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
`,L=C.Ay.header`
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
`,O=(0,C.Ay)((function(e){switch(e.variation){case 1:return(0,h.jsx)("svg",{className:e.className,"aria-hidden":"true",viewBox:"0 0 418 42",preserveAspectRatio:"none",children:(0,h.jsx)("path",{d:"M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"})});case 2:return(0,h.jsx)("svg",{className:e.className,"aria-hidden":"true",viewBox:"0 0 281 40",preserveAspectRatio:"none",children:(0,h.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"})})}}))`
  position: absolute;
  margin-top: 1.75em;
  margin-left: 0.25em;
  width: 6.5em;
  stroke: var(--accent-color-1);
  fill: var(--accent-color-1);
`,N=(0,C.Ay)((function(e){return(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",className:e.className,children:(0,h.jsx)("path",{d:"M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"})})}))`
  width: 1em;
  position: absolute;
  right: -0.8em;
  top: 1.25em;
`,H=C.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-top: 1.25em;
  padding-bottom: 3em;
`,E=(0,C.Ay)(j).attrs({$boxShadow:!0})`
  width: 90%;
  max-width: 1050px;

  @media (max-width: 768px) {
    display: none;
  }
`,T=(0,C.Ay)(Q)`
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
`,U=["Lightweight","Free Of Charge","Simple","Offline-First","Powerful","Modular","Private","Cross-Platform","Responsive"];function R(){return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsxs)(X,{children:[(0,h.jsxs)(L,{children:[(0,h.jsxs)("h1",{children:["Note Taking Can Be \xa0",(0,h.jsx)("em",{children:(0,h.jsx)(m,{words:U,children:(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(O,{variation:1}),(0,h.jsx)(N,{})]})})})]}),(0,h.jsxs)("h2",{children:["Snip Is Your Everyday \xa0",(0,h.jsx)("em",{children:"Productivity"}),"\xa0 Companion."]})]}),(0,h.jsxs)(H,{children:[(0,h.jsx)(E,{children:(0,h.jsx)("img",{src:t(5090).A})}),(0,h.jsx)(T,{children:(0,h.jsx)("img",{src:t(1238).A})})]})]}),(0,h.jsx)(W,{})]})}var J=t(350);const P=C.Ay.div`
  transition: transform ${e=>e.$animationDuration}s
      ${e=>e.$animationDelay}s,
    opacity ${e=>e.$animationDuration}s
      ${e=>e.$animationDelay}s;

  opacity: ${e=>e.$isInView?"1":"0"};
`,q=(0,C.Ay)(P)`
  transform: ${e=>e.$isInView?"translateY(0)":"translateY(-5em)"};
`,K=(0,C.Ay)(P)`
  transform: ${e=>e.$isInView?"translateY(0)":"translateY(5em)"};
`,G=(0,C.Ay)(P)`
  transform: ${e=>e.$isInView?"translateX(0)":"translateX(-5em)"};
`,$=(0,C.Ay)(P)`
  transform: ${e=>e.$isInView?"translateX(0)":"translateX(5em)"};
`,_=.5;function ee(e){const i=(0,a.useRef)(null),t=(0,J.W)(i);switch(e.type){case"from-top":return(0,h.jsx)(q,{ref:i,$isInView:t,$animationDuration:e.animationDuration??_,$animationDelay:e.animationDelay??0,children:e.children});case"from-left":return(0,h.jsx)(G,{ref:i,$isInView:t,$animationDuration:e.animationDuration??_,$animationDelay:e.animationDelay??0,children:e.children});case"from-right":return(0,h.jsx)($,{ref:i,$isInView:t,$animationDuration:e.animationDuration??_,$animationDelay:e.animationDelay??0,children:e.children});default:return(0,h.jsx)("div",{ref:i,children:(0,h.jsx)(K,{$isInView:t,$animationDuration:e.animationDuration??_,$animationDelay:e.animationDelay??0,children:e.children})})}}const ie=(0,C.Ay)(w)`
  display: none;

  background-color: var(--accent-color-1);
  color: var(--accent-contrast-color-1);
  min-height: 100vh;

  position: relative;

  @media (min-width: 1200px) {
    display: flex;
  }
`,te=C.Ay.div`
  position: absolute;
  left: -5em;
  height: 5em;
  width: calc(100% + 10em);

  /* TODO remove? */
  transition: margin-top 1s;
  margin-top: ${e=>e.$hide?"5em":"0"};
`,ne=(0,C.Ay)(te)`
  top: -5em;
  box-shadow: 0 20px 18px rgba(var(--box-shadow-base-color), 0.9);
  transform: translateY(-2em) rotateZ(-0.75deg);
`,ae=(0,C.Ay)(te)`
  top: -5em;
  box-shadow: 0 20px 18px rgba(var(--box-shadow-base-color), 0.9);
  transform: translateY(-2em) rotateZ(0.75deg);
`,Ce=(0,C.Ay)(te)`
  bottom: -5em;
  box-shadow: 0px 0px 40px rgba(var(--box-shadow-base-color), 0.9);
`,re=(C.Ay.div`
  height: 60em;
  width: 100em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,(0,C.Ay)(j).attrs({$boxShadow:!0})`
  max-width: 55em;
`),se=C.Ay.div`
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
`;function oe(){return(0,h.jsxs)(ie,{children:[(0,h.jsx)(ne,{$hide:!1}),(0,h.jsx)(ae,{$hide:!1}),(0,h.jsx)(Ce,{$hide:!1}),(0,h.jsx)(ee,{children:(0,h.jsxs)(u,{children:[(0,h.jsxs)(se,{children:[(0,h.jsx)("h1",{children:"Dashboards"}),(0,h.jsx)("p",{children:"Pin notes to the navigation bar and use references to create dashboards."})]}),(0,h.jsx)(re,{children:(0,h.jsx)("img",{src:t(1762).A})})]})})]})}const ce=(0,C.Ay)(w)`
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
`,le=C.Ay.div`
  width: 3em;
  margin-left: 2em;

  @media (min-width: 768px) {
    width: 4em;
  }
`,de=(0,C.Ay)(u)`
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;function he(){return(0,h.jsxs)(ce,{children:[(0,h.jsx)(ee,{children:(0,h.jsxs)(u,{children:[(0,h.jsx)("h1",{children:"Sync with GitHub"}),(0,h.jsx)(le,{children:(0,h.jsx)("img",{src:t(75).A})})]})}),(0,h.jsxs)(de,{children:[(0,h.jsx)(ee,{type:"from-left",animationDelay:.5,children:(0,h.jsx)("p",{children:"Snip allows you to sync all your notes to a GitHub repo by using a fine grained access token. This has the following advantages:"})}),(0,h.jsx)(ee,{type:"from-right",animationDelay:.5,children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"You never lose your notes"}),(0,h.jsx)("li",{children:"You have access from multiple devices"}),(0,h.jsx)("li",{children:"You can store your notes for free, forever"})]})})]})]})}function me(){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,h.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),(0,h.jsx)("path",{d:"M11.315 10.014a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434"})]})}function xe(){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,h.jsx)("path",{d:"M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"}),(0,h.jsx)("path",{d:"M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"})]})}const pe=C.Ay.div`
  width: ${e=>e.$width?e.$width:"none"};
  max-width: calc(100% - 2em);
  border-radius: 2em;
  overflow: hidden;
  background-color: var(--accent-color-1);
  border: 1px solid var(--border-color-1);
`,ge=C.AH`
  transform: translateX(2.5em) translateY(1.5em);
`,fe=C.AH`
  transform: translateX(-2.5em) translateY(1.5em);
`,we=C.AH`
  transform: translateY(1.5em);
  margin-left: 1em;
  margin-right: 1em;
`,ue=C.AH`
  margin: 1em;
`;const Ae=C.Ay.div`
  ${e=>function(e){switch(e){case"on-the-right":return ge;case"on-the-left":return fe;case"at-the-bottom":return we;case"centered":return ue}}(e.$position)}
  filter: drop-shadow(0px 5px 6px rgba(var(--box-shadow-base-color), 0.75));
`;function je(e){return(0,h.jsx)(pe,{$width:e.width,className:e.className,children:(0,h.jsx)(Ae,{$position:e.position,children:e.children})})}const be=(0,C.Ay)(w)`
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
`,ye=(0,C.Ay)(u)`
  padding-left: 2em;
  padding-right: 2em;

  justify-content: space-between;
  max-width: 60em;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`,ve=(0,C.Ay)(ye)`
  flex-direction: row-reverse;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`,Be=C.Ay.div`
  max-width: 20em;

  @media (max-width: 992px) {
    max-width: 30em;
  }
`,Se=(0,C.Ay)(je)`
  max-width: 30em;
`,We=C.Ay.div`
  height: 7.5em;
`,ke=C.Ay.div`
  position: absolute;
  top: -5em;
  left: -5em;
  height: 5em;
  width: calc(100% + 10em);

  box-shadow: 0px 0px 20px rgba(var(--box-shadow-base-color), 1);
  background-color: red;
`,Ve=C.Ay.div`
  position: absolute;
  left: 0;
  width: calc(100% + 10em);
  background-color: var(--accent-color-1);
`,Ie=(0,C.Ay)(Ve)`
  top: 0;
  height: 10em;
  transform: translateX(-5em) translateY(-6.5em) rotateZ(2deg);
`,ze=(0,C.Ay)(Ve)`
  bottom: 0;
  transform: translateX(-5em) translateY(6.5em) rotateZ(2deg);
  height: 12em;
`;function Me(){return(0,h.jsxs)(be,{children:[(0,h.jsx)(Ie,{}),(0,h.jsx)(ke,{}),(0,h.jsx)(ze,{}),(0,h.jsx)("h1",{children:"Find And Organize"}),(0,h.jsxs)(ye,{children:[(0,h.jsx)(ee,{type:"from-left",children:(0,h.jsxs)(Be,{children:[(0,h.jsx)("h2",{children:(0,h.jsx)(b,{children:(0,h.jsx)(xe,{})})}),(0,h.jsx)("h2",{children:"Search"}),(0,h.jsx)("p",{children:"Snip offers fast and efficient search functionality, delivering well-formatted results that provide clear and concise previews of the content."})]})}),(0,h.jsx)(ee,{type:"from-right",children:(0,h.jsx)(Se,{position:"at-the-bottom",children:(0,h.jsx)(j,{children:(0,h.jsx)("img",{src:t(3696).A})})})})]}),(0,h.jsx)(We,{}),(0,h.jsxs)(ve,{children:[(0,h.jsx)(ee,{type:"from-right",children:(0,h.jsxs)(Be,{children:[(0,h.jsx)("h2",{children:(0,h.jsx)(b,{children:(0,h.jsx)(me,{})})}),(0,h.jsx)("h2",{children:"Icons"}),(0,h.jsx)("p",{children:"Snip includes a collection of icons that enhance the structure of your notes, adding both clarity and visual appeal."})]})}),(0,h.jsx)(ee,{type:"from-left",children:(0,h.jsx)(Se,{position:"on-the-right",children:(0,h.jsx)(j,{children:(0,h.jsx)("img",{src:t(1315).A})})})})]})]})}const Ye=(0,C.Ay)(w)`
  filter: drop-shadow(1px 15px 20px rgba(var(--box-shadow-base-color), 0.9));
  z-index: 1;

  h2 {
    text-align: center;
    font-size: 3em;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  --section-width: 60em;

  transform: translateZ(0); // fix flickering shadow on safari
`,Ze=(0,C.Ay)(u)`
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
`,De=C.Ay.div`
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
`,Fe=C.Ay.div`
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
`;function Qe(){return(0,h.jsxs)(Ye,{children:[(0,h.jsxs)(u,{$flexDirection:"column",children:[(0,h.jsx)("h2",{children:"Spaced Repetition With Flashcards"}),(0,h.jsxs)(Ze,{children:[(0,h.jsx)("p",{children:'Snip is all about taking notes. In Snip, a "Note" is in fact called a "Snippet" (hence the name "Snip"). A Snippet is a piece of data that can be represented in a graphical user interface.'}),(0,h.jsx)("p",{children:"When taking notes, you will be using the Rich Text Snippet. It represents some text on which you can apply formatting such as titles, sub-titles, quotes, code blocks, bold and italic text, etc."}),(0,h.jsx)("p",{children:"In the following section, you will learn about another Snippet type, the Flashcard Snippet, which is very similar to a Rich Text Snippet, but comes with additional functionality, allowing you to use Snip as a spaced repetition app."})]})]}),(0,h.jsxs)(u,{$flexDirection:"column",children:[(0,h.jsxs)(De,{children:[(0,h.jsx)(ee,{type:"from-left",children:(0,h.jsxs)(Fe,{children:[(0,h.jsx)("h3",{children:"Flashcard Snippet"}),(0,h.jsx)("p",{children:"Conceptually, a flashcard snippet is identical to a real world flash card: It has two sides, where one side is a question or prompt and the other side is an answer or information. For example, this can be used for learning a new language."})]})}),(0,h.jsx)(ee,{type:"from-right",children:(0,h.jsx)(je,{width:"30em",position:"at-the-bottom",children:(0,h.jsx)(j,{children:(0,h.jsx)("img",{src:t(2687).A})})})})]}),(0,h.jsxs)(De,{children:[(0,h.jsx)(ee,{type:"from-left",children:(0,h.jsxs)(Fe,{children:[(0,h.jsx)("h3",{children:"Dashboard"}),(0,h.jsx)("p",{children:"The Dashboard gives an overview of all the flashcards in this folder. It shows your learning progress over time and lists all flashcards ordered by relevance. The relevance of a card is calculated through a scoring algorithm."})]})}),(0,h.jsx)(ee,{type:"from-right",children:(0,h.jsx)(je,{width:"35em",position:"on-the-right",children:(0,h.jsx)(j,{children:(0,h.jsx)("img",{src:t(8098).A})})})})]}),(0,h.jsxs)(De,{children:[(0,h.jsx)(ee,{type:"from-left",children:(0,h.jsxs)(Fe,{children:[(0,h.jsx)("h3",{children:"Session Wizard"}),(0,h.jsx)("p",{children:"Flashcards can be practiced in an interactive mode. When stepping through the flashcards, a rating can be provided, which will re-prioritize the flashcards in the next session."})]})}),(0,h.jsx)(ee,{type:"from-right",children:(0,h.jsx)(je,{width:"25em",position:"at-the-bottom",children:(0,h.jsx)(j,{children:(0,h.jsx)("img",{src:t(2865).A})})})})]})]})]})}const Xe=(0,C.Ay)(w)`
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

  @media (min-width: 992px) {
    display: flex;
  }
`,Le=(0,C.Ay)(Q)`
  width: 20em;
`,Oe=((0,C.Ay)((function(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"346.549 567.922 1386.387 140.065",className:e.className,children:[(0,h.jsx)("path",{d:"M 353.13,625.87 C 351.71 626.74, 351.25 628.00, 350.53 630.14 C 349.82 632.29, 349.57 633.71, 349.55 636.61 C 349.52 639.51, 350.06 641.35, 350.42 644.64 C 350.78 647.94, 350.97 649.66, 351.33 653.08 C 351.69 656.50, 351.83 658.32, 352.23 661.76 C 352.62 665.19, 352.84 667.00, 353.32 670.27 C 353.80 673.55, 353.91 675.24, 354.62 678.14 C 355.32 681.05, 355.78 682.48, 356.83 684.81 C 357.87 687.14, 358.32 688.36, 359.85 689.80 C 361.38 691.24, 362.48 691.81, 364.48 692.03 C 366.49 692.24, 368.01 691.97, 369.87 690.86 C 371.73 689.75, 372.82 688.77, 373.80 686.46 C 374.78 684.15, 374.79 682.56, 374.76 679.30 C 374.73 676.05, 374.00 674.09, 373.66 670.19 C 373.33 666.28, 373.19 664.10, 373.08 659.78 C 372.97 655.46, 372.99 653.14, 373.11 648.59 C 373.24 644.04, 373.36 641.62, 373.71 637.02 C 374.07 632.42, 374.28 630.04, 374.89 625.59 C 375.50 621.15, 375.87 618.92, 376.76 614.79 C 377.65 610.65, 378.17 608.59, 379.33 604.94 C 380.50 601.29, 381.19 599.53, 382.59 596.54 C 383.99 593.55, 384.90 592.19, 386.31 589.98 C 387.72 587.77, 388.37 586.83, 389.64 585.48 C 390.91 584.13, 391.50 583.73, 392.67 583.23 C 393.85 582.72, 394.33 582.66, 395.50 582.97 C 396.68 583.28, 397.12 583.71, 398.57 584.79 C 400.03 585.88, 400.90 586.51, 402.78 588.39 C 404.66 590.27, 405.91 591.37, 407.97 594.20 C 410.02 597.02, 411.10 598.81, 413.06 602.53 C 415.01 606.24, 415.95 608.43, 417.75 612.77 C 419.54 617.12, 420.36 619.53, 422.03 624.25 C 423.69 628.96, 424.45 631.51, 426.06 636.35 C 427.66 641.18, 428.46 643.71, 430.03 648.43 C 431.61 653.14, 432.40 655.51, 433.92 659.94 C 435.45 664.36, 436.23 666.56, 437.67 670.55 C 439.11 674.53, 439.88 676.44, 441.12 679.86 C 442.37 683.28, 442.63 685.08, 443.90 687.65 C 445.16 690.22, 446.08 691.34, 447.46 692.71 C 448.84 694.08, 449.73 694.16, 450.80 694.51 C 451.88 694.87, 452.17 694.69, 452.84 694.48 C 453.50 694.26, 453.74 693.98, 454.14 693.43 C 454.54 692.88, 454.71 692.77, 454.84 691.74 C 454.96 690.72, 455.25 690.01, 454.78 688.30 C 454.30 686.59, 453.74 685.53, 452.44 683.19 C 451.15 680.85, 449.98 679.65, 448.30 676.61 C 446.63 673.57, 445.74 671.74, 444.05 667.97 C 442.36 664.20, 441.52 662.07, 439.86 657.77 C 438.20 653.47, 437.38 651.14, 435.76 646.48 C 434.14 641.82, 433.34 639.32, 431.77 634.47 C 430.19 629.63, 429.46 627.08, 427.90 622.26 C 426.34 617.45, 425.58 614.97, 423.96 610.40 C 422.34 605.82, 421.52 603.51, 419.79 599.37 C 418.06 595.22, 417.19 593.22, 415.30 589.66 C 413.40 586.11, 412.59 584.31, 410.33 581.59 C 408.07 578.88, 406.72 577.59, 403.98 576.08 C 401.25 574.56, 399.54 574.21, 396.65 574.01 C 393.76 573.80, 392.23 574.07, 389.54 575.05 C 386.85 576.03, 385.43 576.84, 383.21 578.90 C 380.99 580.96, 380.05 582.42, 378.44 585.35 C 376.83 588.28, 376.36 590.03, 375.14 593.55 C 373.93 597.07, 373.36 598.96, 372.35 602.95 C 371.34 606.93, 370.89 609.11, 370.10 613.46 C 369.30 617.82, 368.97 620.13, 368.38 624.73 C 367.80 629.34, 367.59 631.77, 367.16 636.47 C 366.74 641.18, 366.60 643.63, 366.26 648.25 C 365.93 652.87, 365.83 655.24, 365.51 659.59 C 365.18 663.94, 365.14 666.20, 364.63 669.99 C 364.13 673.78, 363.40 675.66, 362.98 678.54 C 362.56 681.43, 362.28 682.66, 362.52 684.41 C 362.76 686.16, 363.38 686.70, 364.17 687.30 C 364.96 687.91, 365.85 687.82, 366.47 687.43 C 367.09 687.05, 367.33 686.59, 367.28 685.38 C 367.23 684.16, 366.74 683.31, 366.20 681.35 C 365.66 679.38, 365.31 678.10, 364.58 675.54 C 363.86 672.99, 363.25 671.55, 362.59 668.58 C 361.92 665.61, 361.64 663.92, 361.26 660.70 C 360.87 657.47, 360.76 655.74, 360.67 652.46 C 360.59 649.18, 360.69 647.49, 360.83 644.30 C 360.97 641.10, 361.46 639.31, 361.37 636.47 C 361.28 633.63, 361.14 632.21, 360.39 630.08 C 359.65 627.94, 359.10 626.64, 357.65 625.79 C 356.20 624.95, 354.55 625.00, 353.13 625.87"}),(0,h.jsx)("path",{d:"M 361.10,650.78 C 361.94 651.97, 362.66 652.08, 364.33 652.56 C 366.00 653.05, 366.96 653.44, 369.45 653.21 C 371.94 652.98, 373.47 652.17, 376.78 651.40 C 380.08 650.63, 382.09 650.14, 385.98 649.35 C 389.88 648.56, 392.05 648.17, 396.26 647.46 C 400.47 646.74, 402.73 646.41, 407.01 645.79 C 411.29 645.18, 413.54 644.90, 417.66 644.40 C 421.79 643.90, 423.89 643.67, 427.64 643.30 C 431.39 642.93, 433.45 643.16, 436.42 642.56 C 439.40 641.95, 440.67 641.32, 442.53 640.26 C 444.38 639.19, 445.23 638.44, 445.70 637.23 C 446.17 636.01, 445.83 635.01, 444.87 634.18 C 443.91 633.36, 442.91 633.27, 440.88 633.10 C 438.85 632.92, 437.62 632.85, 434.73 633.32 C 431.84 633.79, 430.04 634.68, 426.42 635.45 C 422.81 636.22, 420.74 636.53, 416.66 637.18 C 412.58 637.82, 410.32 638.11, 406.04 638.67 C 401.75 639.23, 399.46 639.54, 395.23 639.99 C 391.01 640.44, 388.86 640.70, 384.90 640.91 C 380.95 641.13, 378.89 640.99, 375.46 641.08 C 372.03 641.17, 370.29 640.86, 367.74 641.36 C 365.19 641.85, 364.22 642.50, 362.71 643.56 C 361.19 644.62, 360.48 645.21, 360.16 646.65 C 359.84 648.10, 360.27 649.60, 361.10 650.78"}),(0,h.jsx)("path",{d:"M 467.38,621.46 C 466.45 622.44, 466.49 622.90, 466.24 624.15 C 466.00 625.41, 465.87 626.00, 466.16 627.74 C 466.45 629.47, 466.87 630.57, 467.72 632.85 C 468.56 635.12, 469.30 636.35, 470.38 639.11 C 471.47 641.87, 472.03 643.46, 473.13 646.65 C 474.24 649.83, 474.79 651.65, 475.91 655.04 C 477.03 658.43, 477.58 660.21, 478.74 663.59 C 479.91 666.97, 480.54 668.72, 481.73 671.94 C 482.92 675.15, 483.42 676.85, 484.71 679.67 C 486.00 682.49, 486.70 683.85, 488.19 686.04 C 489.69 688.22, 490.43 689.24, 492.19 690.61 C 493.96 691.98, 494.95 692.56, 497.02 692.89 C 499.08 693.22, 500.50 693.06, 502.52 692.25 C 504.55 691.44, 505.62 690.64, 507.15 688.83 C 508.68 687.02, 509.34 685.87, 510.18 683.19 C 511.01 680.51, 510.77 678.72, 511.31 675.43 C 511.86 672.14, 512.11 670.30, 512.90 666.73 C 513.70 663.17, 514.21 661.27, 515.27 657.61 C 516.34 653.96, 517.02 652.00, 518.22 648.46 C 519.42 644.93, 520.34 643.27, 521.27 639.93 C 522.20 636.60, 523.42 633.79, 522.85 631.80 C 522.28 629.81, 520.24 628.93, 518.42 629.97 C 516.60 631.02, 515.32 633.87, 513.75 637.04 C 512.17 640.21, 511.81 642.20, 510.54 645.82 C 509.28 649.44, 508.67 651.46, 507.43 655.14 C 506.18 658.83, 505.57 660.75, 504.31 664.24 C 503.06 667.73, 502.37 669.55, 501.15 672.61 C 499.93 675.66, 498.93 677.16, 498.21 679.52 C 497.50 681.88, 497.56 682.98, 497.59 684.41 C 497.62 685.84, 498.02 686.24, 498.36 686.69 C 498.70 687.14, 499.23 687.06, 499.30 686.66 C 499.37 686.25, 499.25 685.83, 498.70 684.67 C 498.15 683.50, 497.58 682.71, 496.55 680.84 C 495.53 678.97, 494.88 677.79, 493.58 675.33 C 492.29 672.86, 491.40 671.44, 490.09 668.52 C 488.78 665.60, 488.14 663.94, 487.02 660.72 C 485.90 657.50, 485.40 655.76, 484.48 652.43 C 483.56 649.10, 483.10 647.34, 482.42 644.08 C 481.74 640.82, 481.63 639.16, 481.09 636.13 C 480.56 633.09, 480.51 631.50, 479.77 628.92 C 479.03 626.34, 478.51 625.01, 477.40 623.24 C 476.29 621.46, 475.52 620.84, 474.22 620.05 C 472.92 619.25, 472.27 618.98, 470.90 619.26 C 469.53 619.54, 468.31 620.48, 467.38 621.46"}),(0,h.jsx)("path",{d:"M 583.56,629.98 C 583.85 628.42, 583.41 627.54, 582.50 626.14 C 581.58 624.75, 580.83 624.01, 578.98 623.00 C 577.14 621.99, 575.68 621.55, 573.28 621.10 C 570.87 620.65, 569.60 620.69, 566.97 620.74 C 564.33 620.78, 562.97 620.76, 560.10 621.32 C 557.23 621.88, 555.62 622.26, 552.63 623.55 C 549.64 624.83, 548.07 625.81, 545.15 627.76 C 542.23 629.70, 540.74 630.86, 538.02 633.28 C 535.30 635.71, 533.88 637.04, 531.54 639.88 C 529.19 642.71, 528.01 644.28, 526.29 647.47 C 524.56 650.66, 523.73 652.41, 522.89 655.83 C 522.06 659.24, 521.77 661.15, 522.10 664.53 C 522.44 667.91, 523.04 669.75, 524.57 672.75 C 526.09 675.74, 527.21 677.24, 529.73 679.52 C 532.24 681.80, 533.90 682.74, 537.14 684.14 C 540.38 685.54, 542.29 686.00, 545.91 686.52 C 549.54 687.03, 551.55 687.00, 555.27 686.70 C 558.99 686.40, 560.92 686.04, 564.52 685.01 C 568.13 683.99, 569.96 683.22, 573.28 681.57 C 576.60 679.91, 578.26 678.95, 581.11 676.75 C 583.95 674.54, 585.25 673.21, 587.50 670.55 C 589.76 667.88, 590.80 666.40, 592.38 663.41 C 593.95 660.41, 594.52 658.73, 595.38 655.57 C 596.25 652.42, 596.44 650.73, 596.69 647.62 C 596.94 644.50, 597.00 642.86, 596.64 640.01 C 596.27 637.16, 596.15 635.32, 594.86 633.37 C 593.57 631.43, 592.20 630.61, 590.20 630.29 C 588.19 629.96, 586.52 630.42, 584.84 631.76 C 583.16 633.10, 582.27 634.50, 581.82 637.00 C 581.37 639.50, 581.73 641.21, 582.58 644.26 C 583.43 647.32, 584.64 649.00, 586.07 652.27 C 587.50 655.53, 588.18 657.30, 589.74 660.58 C 591.31 663.86, 592.08 665.52, 593.89 668.66 C 595.70 671.80, 596.68 673.45, 598.79 676.27 C 600.90 679.09, 601.98 680.54, 604.44 682.76 C 606.90 684.98, 608.29 686.00, 611.08 687.37 C 613.87 688.74, 615.45 689.24, 618.39 689.61 C 621.33 689.98, 622.92 689.91, 625.79 689.23 C 628.65 688.55, 630.18 687.90, 632.71 686.19 C 635.23 684.47, 636.48 683.26, 638.40 680.66 C 640.31 678.07, 640.99 676.43, 642.28 673.19 C 643.57 669.95, 643.99 668.02, 644.83 664.47 C 645.67 660.93, 645.94 659.04, 646.49 655.47 C 647.04 651.91, 647.36 649.98, 647.56 646.64 C 647.77 643.31, 648.26 641.16, 647.51 638.80 C 646.75 636.44, 645.46 635.43, 643.80 634.84 C 642.13 634.25, 640.65 634.63, 639.17 635.85 C 637.68 637.06, 636.67 638.42, 636.36 640.92 C 636.05 643.42, 636.76 645.16, 637.63 648.34 C 638.49 651.52, 639.57 653.39, 640.67 656.81 C 641.77 660.22, 642.21 662.05, 643.12 665.43 C 644.02 668.81, 644.37 670.55, 645.20 673.71 C 646.02 676.87, 646.16 678.78, 647.26 681.23 C 648.36 683.67, 649.35 684.61, 650.69 685.93 C 652.02 687.25, 652.74 687.70, 653.92 687.84 C 655.10 687.99, 655.87 687.57, 656.57 686.65 C 657.27 685.73, 657.32 685.01, 657.42 683.24 C 657.52 681.46, 657.68 680.25, 657.05 677.79 C 656.42 675.33, 655.32 673.85, 654.29 670.93 C 653.26 668.00, 652.70 666.41, 651.89 663.16 C 651.08 659.91, 650.65 658.10, 650.24 654.68 C 649.82 651.27, 650.12 649.21, 649.80 646.07 C 649.49 642.94, 649.69 641.19, 648.66 639.01 C 647.62 636.82, 646.36 635.92, 644.62 635.16 C 642.89 634.41, 641.50 634.39, 639.98 635.23 C 638.46 636.08, 637.51 637.15, 637.02 639.39 C 636.52 641.63, 637.45 643.45, 637.52 646.42 C 637.58 649.38, 637.71 651.09, 637.34 654.22 C 636.96 657.34, 636.53 659.07, 635.65 662.05 C 634.77 665.03, 634.14 666.65, 632.94 669.11 C 631.74 671.57, 630.91 672.54, 629.65 674.34 C 628.38 676.14, 627.86 676.98, 626.61 678.13 C 625.36 679.27, 624.75 679.63, 623.37 680.06 C 621.99 680.49, 621.28 680.56, 619.72 680.29 C 618.16 680.01, 617.32 679.68, 615.56 678.70 C 613.80 677.72, 612.83 677.01, 610.92 675.39 C 609.01 673.77, 607.88 672.83, 606.02 670.59 C 604.16 668.36, 603.20 666.93, 601.63 664.20 C 600.05 661.47, 599.32 659.95, 598.16 656.94 C 597.01 653.93, 596.44 652.25, 595.86 649.16 C 595.28 646.07, 595.65 644.20, 595.25 641.51 C 594.86 638.82, 594.78 637.45, 593.87 635.70 C 592.96 633.95, 592.06 633.30, 590.70 632.75 C 589.35 632.21, 588.22 632.30, 587.09 632.98 C 585.95 633.66, 585.29 634.48, 585.03 636.15 C 584.76 637.83, 585.51 639.16, 585.76 641.35 C 586.01 643.53, 586.33 644.71, 586.29 647.07 C 586.25 649.43, 586.10 650.74, 585.58 653.15 C 585.07 655.55, 584.78 656.79, 583.72 659.09 C 582.66 661.40, 581.93 662.54, 580.28 664.66 C 578.64 666.77, 577.68 667.86, 575.48 669.65 C 573.29 671.44, 571.96 672.26, 569.29 673.62 C 566.62 674.97, 565.05 675.63, 562.13 676.42 C 559.21 677.21, 557.62 677.44, 554.69 677.57 C 551.75 677.69, 550.15 677.57, 547.46 677.05 C 544.77 676.53, 543.45 676.00, 541.25 674.97 C 539.05 673.93, 538.06 673.23, 536.45 671.88 C 534.84 670.53, 534.11 669.88, 533.19 668.22 C 532.27 666.56, 532.05 665.63, 531.86 663.59 C 531.67 661.55, 531.74 660.39, 532.26 658.03 C 532.78 655.67, 533.20 654.25, 534.46 651.79 C 535.72 649.33, 536.62 648.01, 538.54 645.73 C 540.47 643.45, 541.73 642.29, 544.08 640.41 C 546.43 638.52, 547.78 637.61, 550.29 636.28 C 552.79 634.96, 554.21 634.60, 556.62 633.78 C 559.03 632.96, 560.24 632.64, 562.33 632.19 C 564.43 631.73, 565.43 631.51, 567.11 631.49 C 568.79 631.48, 569.37 631.71, 570.73 632.13 C 572.08 632.54, 572.60 633.08, 573.90 633.58 C 575.19 634.08, 575.76 634.56, 577.18 634.63 C 578.61 634.70, 579.75 634.86, 581.03 633.93 C 582.30 633.00, 583.26 631.54, 583.56 629.98"}),(0,h.jsx)("path",{d:"M 631.94,585.70 C 633.44 586.18, 634.35 586.38, 634.45 586.10 C 634.55 585.83, 633.70 585.21, 632.44 584.32 C 631.18 583.43, 629.60 582.23, 628.14 581.66 C 626.68 581.09, 625.39 581.06, 625.14 581.47 C 624.90 581.88, 625.57 582.88, 626.93 583.72 C 628.29 584.57, 630.43 585.23, 631.94 585.70"}),(0,h.jsx)("path",{d:"M 679.87,571.61 C 678.56 572.42, 678.15 573.40, 677.55 575.40 C 676.96 577.40, 676.67 578.69, 676.89 581.60 C 677.11 584.51, 677.97 586.35, 678.64 589.97 C 679.30 593.60, 679.61 595.56, 680.19 599.71 C 680.78 603.86, 681.01 606.14, 681.55 610.71 C 682.09 615.29, 682.30 617.73, 682.89 622.57 C 683.47 627.40, 683.78 629.98, 684.49 634.88 C 685.19 639.77, 685.55 642.29, 686.42 647.06 C 687.29 651.82, 687.81 654.25, 688.84 658.69 C 689.88 663.13, 690.33 665.32, 691.59 669.26 C 692.84 673.21, 693.27 675.60, 695.11 678.43 C 696.96 681.25, 699.02 682.88, 700.82 683.40 C 702.63 683.93, 703.92 682.77, 704.14 681.05 C 704.35 679.34, 703.05 677.68, 701.92 674.85 C 700.79 672.01, 699.83 670.44, 698.49 666.88 C 697.15 663.32, 696.40 661.26, 695.23 657.06 C 694.05 652.86, 693.51 650.49, 692.60 645.88 C 691.69 641.27, 691.33 638.81, 690.67 634.01 C 690.02 629.20, 689.76 626.66, 689.31 621.88 C 688.86 617.10, 688.69 614.66, 688.43 610.11 C 688.16 605.55, 688.04 603.26, 687.97 599.09 C 687.90 594.93, 687.95 592.94, 688.06 589.27 C 688.18 585.59, 688.77 583.63, 688.54 580.71 C 688.31 577.80, 687.81 576.59, 686.93 574.72 C 686.05 572.84, 685.55 571.95, 684.14 571.33 C 682.73 570.71, 681.19 570.79, 679.87 571.61"}),(0,h.jsx)("path",{d:"M 779.37,635.51 C 780.03 633.91, 779.70 632.37, 778.79 630.42 C 777.88 628.48, 776.89 627.42, 774.81 625.80 C 772.73 624.18, 771.17 623.29, 768.38 622.32 C 765.59 621.35, 763.99 621.11, 760.85 620.94 C 757.71 620.77, 756.04 620.89, 752.70 621.47 C 749.35 622.05, 747.52 622.55, 744.11 623.83 C 740.69 625.12, 738.92 625.96, 735.61 627.90 C 732.31 629.83, 730.58 630.98, 727.58 633.49 C 724.58 636.00, 723.05 637.45, 720.61 640.44 C 718.17 643.42, 717.02 645.09, 715.38 648.43 C 713.74 651.77, 713.01 653.62, 712.39 657.14 C 711.77 660.67, 711.71 662.62, 712.29 666.06 C 712.87 669.51, 713.51 671.36, 715.29 674.36 C 717.07 677.36, 718.36 678.89, 721.19 681.05 C 724.01 683.21, 725.87 684.04, 729.41 685.18 C 732.95 686.31, 734.97 686.60, 738.87 686.71 C 742.77 686.82, 744.91 686.56, 748.92 685.73 C 752.94 684.90, 755.27 684.36, 758.94 682.57 C 762.61 680.77, 766.11 678.89, 767.28 676.77 C 768.45 674.66, 767.07 672.32, 764.79 671.99 C 762.52 671.66, 759.40 674.01, 755.92 675.12 C 752.43 676.23, 750.69 677.00, 747.38 677.55 C 744.07 678.11, 742.32 678.14, 739.34 677.89 C 736.37 677.63, 734.90 677.19, 732.49 676.26 C 730.07 675.34, 729.00 674.68, 727.27 673.28 C 725.54 671.88, 724.91 671.06, 723.83 669.26 C 722.75 667.47, 722.32 666.43, 721.86 664.29 C 721.41 662.15, 721.26 660.98, 721.56 658.57 C 721.86 656.15, 722.23 654.77, 723.38 652.22 C 724.53 649.68, 725.37 648.26, 727.30 645.84 C 729.23 643.42, 730.51 642.16, 733.04 640.12 C 735.56 638.09, 737.09 637.11, 739.90 635.67 C 742.72 634.23, 744.26 633.68, 747.10 632.90 C 749.94 632.12, 751.50 632.01, 754.11 631.78 C 756.71 631.54, 758.04 631.54, 760.12 631.72 C 762.20 631.91, 762.92 632.04, 764.52 632.70 C 766.11 633.36, 766.71 634.11, 768.08 635.02 C 769.44 635.92, 769.88 636.53, 771.36 637.21 C 772.84 637.89, 773.89 638.75, 775.49 638.41 C 777.09 638.07, 778.71 637.11, 779.37 635.51"}),(0,h.jsx)("path",{d:"M 751.33,625.44 C 752.33 626.57, 753.25 626.64, 754.65 626.94 C 756.04 627.23, 756.76 627.06, 758.30 626.93 C 759.84 626.79, 760.66 626.41, 762.35 626.24 C 764.04 626.07, 764.96 625.91, 766.75 626.09 C 768.55 626.27, 769.56 626.47, 771.32 627.15 C 773.09 627.82, 774.00 628.27, 775.59 629.45 C 777.18 630.63, 777.90 631.34, 779.26 633.04 C 780.62 634.74, 781.22 635.77, 782.38 637.95 C 783.53 640.13, 784.14 641.37, 785.03 643.96 C 785.93 646.55, 786.24 648.03, 786.85 650.91 C 787.46 653.79, 787.64 655.38, 788.09 658.35 C 788.54 661.33, 788.49 662.91, 789.10 665.79 C 789.71 668.67, 790.07 670.14, 791.12 672.76 C 792.17 675.38, 792.80 676.75, 794.37 678.88 C 795.93 681.01, 797.03 682.14, 798.96 683.41 C 800.89 684.68, 802.27 684.99, 804.04 685.22 C 805.80 685.44, 806.64 685.08, 807.79 684.53 C 808.93 683.98, 809.50 683.55, 809.75 682.46 C 809.99 681.38, 809.45 680.05, 809.01 679.11 C 808.57 678.18, 808.06 678.29, 807.57 677.79 C 807.07 677.30, 807.18 677.10, 806.55 676.63 C 805.92 676.15, 805.30 676.07, 804.42 675.41 C 803.54 674.76, 802.95 674.56, 802.17 673.37 C 801.39 672.17, 801.08 671.36, 800.51 669.43 C 799.95 667.49, 799.86 666.25, 799.36 663.70 C 798.86 661.15, 798.56 659.64, 798.00 656.68 C 797.45 653.71, 797.24 652.04, 796.59 648.87 C 795.94 645.71, 795.68 644.00, 794.74 640.85 C 793.80 637.70, 793.31 636.02, 791.88 633.11 C 790.44 630.21, 789.54 628.75, 787.56 626.32 C 785.57 623.89, 784.35 622.78, 781.94 620.96 C 779.52 619.15, 778.12 618.44, 775.48 617.26 C 772.84 616.08, 771.46 615.68, 768.72 615.06 C 765.99 614.43, 764.45 614.10, 761.81 614.12 C 759.16 614.15, 757.57 614.46, 755.48 615.19 C 753.39 615.93, 752.52 616.58, 751.36 617.79 C 750.21 619.01, 749.69 619.73, 749.69 621.26 C 749.68 622.79, 750.34 624.30, 751.33 625.44"}),(0,h.jsx)("path",{d:"M 821.23,573.76 C 819.95 574.29, 819.69 574.81, 818.92 576.25 C 818.16 577.69, 817.54 578.58, 817.40 580.95 C 817.26 583.32, 817.74 584.95, 818.23 588.10 C 818.73 591.25, 819.29 593.05, 819.86 596.68 C 820.43 600.31, 820.66 602.32, 821.08 606.27 C 821.50 610.22, 821.63 612.33, 821.96 616.42 C 822.28 620.52, 822.43 622.68, 822.69 626.73 C 822.96 630.78, 823.10 632.87, 823.30 636.68 C 823.51 640.49, 823.55 642.46, 823.71 645.78 C 823.87 649.09, 823.65 650.73, 824.09 653.26 C 824.53 655.79, 824.77 656.95, 825.92 658.44 C 827.07 659.94, 828.07 660.49, 829.86 660.74 C 831.65 660.99, 833.16 660.66, 834.88 659.68 C 836.59 658.70, 837.39 657.74, 838.42 655.83 C 839.45 653.91, 839.46 652.58, 840.02 650.09 C 840.58 647.61, 840.36 646.05, 841.22 643.41 C 842.08 640.77, 842.72 639.40, 844.33 636.89 C 845.94 634.39, 846.97 633.13, 849.26 630.89 C 851.55 628.65, 852.92 627.54, 855.77 625.71 C 858.62 623.88, 860.30 623.00, 863.53 621.75 C 866.76 620.51, 868.55 620.01, 871.92 619.50 C 875.28 618.99, 877.07 618.91, 880.35 619.19 C 883.63 619.47, 885.36 619.86, 888.31 620.90 C 891.27 621.95, 892.68 622.71, 895.15 624.43 C 897.62 626.14, 898.80 627.29, 900.65 629.48 C 902.50 631.68, 903.28 632.97, 904.40 635.41 C 905.52 637.86, 905.86 639.18, 906.24 641.70 C 906.63 644.22, 906.64 645.57, 906.33 648.01 C 906.02 650.46, 905.69 651.63, 904.69 653.91 C 903.69 656.19, 903.03 657.34, 901.34 659.43 C 899.65 661.52, 898.61 662.58, 896.24 664.35 C 893.87 666.12, 892.47 666.95, 889.49 668.30 C 886.51 669.64, 884.77 670.25, 881.35 671.08 C 877.93 671.91, 876.01 672.18, 872.38 672.44 C 868.75 672.69, 866.81 672.65, 863.22 672.35 C 859.62 672.05, 857.64 671.72, 854.42 670.94 C 851.20 670.16, 849.65 669.52, 847.12 668.45 C 844.60 667.38, 843.59 666.71, 841.80 665.58 C 840.02 664.46, 839.68 663.86, 838.20 662.83 C 836.72 661.79, 835.89 660.48, 834.41 660.41 C 832.93 660.34, 831.36 660.95, 830.81 662.49 C 830.25 664.03, 830.53 665.91, 831.65 668.10 C 832.77 670.29, 833.96 671.68, 836.41 673.46 C 838.85 675.23, 840.62 675.85, 843.89 676.97 C 847.16 678.10, 848.99 678.43, 852.74 679.08 C 856.50 679.74, 858.62 680.02, 862.65 680.26 C 866.69 680.50, 868.81 680.55, 872.90 680.29 C 877.00 680.03, 879.16 679.80, 883.14 678.96 C 887.11 678.11, 889.15 677.53, 892.80 676.06 C 896.44 674.58, 898.26 673.72, 901.38 671.58 C 904.50 669.45, 906.02 668.15, 908.41 665.39 C 910.81 662.62, 911.87 661.01, 913.34 657.76 C 914.80 654.51, 915.32 652.67, 915.73 649.15 C 916.14 645.63, 916.03 643.67, 915.39 640.14 C 914.74 636.62, 914.15 634.78, 912.51 631.50 C 910.86 628.22, 909.71 626.57, 907.18 623.76 C 904.64 620.95, 903.06 619.57, 899.82 617.46 C 896.57 615.35, 894.71 614.44, 890.94 613.20 C 887.18 611.95, 885.03 611.54, 880.99 611.23 C 876.95 610.93, 874.79 611.06, 870.74 611.67 C 866.69 612.27, 864.58 612.84, 860.72 614.25 C 856.87 615.65, 854.91 616.64, 851.45 618.69 C 847.99 620.75, 846.35 621.99, 843.43 624.52 C 840.50 627.06, 839.19 628.53, 836.85 631.37 C 834.51 634.22, 833.59 635.84, 831.73 638.76 C 829.87 641.68, 828.72 643.19, 827.54 645.97 C 826.36 648.75, 825.85 650.39, 825.83 652.67 C 825.81 654.94, 826.41 656.10, 827.43 657.33 C 828.44 658.56, 829.72 658.88, 830.91 658.80 C 832.10 658.72, 832.79 658.28, 833.37 656.93 C 833.94 655.58, 833.97 654.48, 833.80 652.06 C 833.62 649.65, 833.04 648.07, 832.52 644.86 C 831.99 641.64, 831.62 639.72, 831.16 635.99 C 830.70 632.25, 830.53 630.19, 830.20 626.17 C 829.87 622.16, 829.74 620.01, 829.52 615.92 C 829.31 611.84, 829.21 609.71, 829.11 605.75 C 829.02 601.78, 828.95 599.76, 829.05 596.09 C 829.15 592.42, 829.51 590.54, 829.61 587.40 C 829.72 584.26, 829.93 582.67, 829.58 580.38 C 829.22 578.10, 828.70 577.34, 827.85 575.98 C 827.00 574.62, 826.65 574.03, 825.33 573.58 C 824.01 573.14, 822.51 573.23, 821.23 573.76"}),(0,h.jsx)("path",{d:"M 931.49,575.12 C 930.08 575.79, 929.65 576.77, 928.89 578.57 C 928.12 580.38, 927.72 581.53, 927.66 584.16 C 927.61 586.79, 928.19 588.49, 928.62 591.71 C 929.06 594.93, 929.45 596.61, 929.86 600.25 C 930.26 603.89, 930.31 605.91, 930.63 609.92 C 930.95 613.93, 931.09 616.09, 931.44 620.29 C 931.80 624.49, 931.95 626.71, 932.39 630.92 C 932.82 635.13, 933.03 637.28, 933.62 641.36 C 934.20 645.45, 934.54 647.53, 935.33 651.33 C 936.12 655.14, 936.53 656.97, 937.56 660.39 C 938.59 663.80, 939.02 665.47, 940.49 668.38 C 941.97 671.29, 942.87 672.69, 944.93 674.93 C 946.99 677.17, 948.21 678.13, 950.80 679.58 C 953.38 681.03, 954.85 681.64, 957.87 682.19 C 960.88 682.74, 962.65 682.90, 965.86 682.32 C 969.07 681.74, 970.68 680.88, 973.94 679.30 C 977.20 677.72, 978.82 676.67, 982.16 674.42 C 985.49 672.17, 987.25 670.79, 990.60 668.06 C 993.95 665.33, 995.67 663.81, 998.90 660.77 C 1002.13 657.72, 1003.81 656.03, 1006.75 652.82 C 1009.69 649.60, 1011.17 647.93, 1013.61 644.69 C 1016.04 641.44, 1017.15 639.79, 1018.94 636.60 C 1020.74 633.40, 1021.78 631.85, 1022.59 628.74 C 1023.40 625.62, 1023.36 623.89, 1023.00 621.01 C 1022.64 618.13, 1022.19 616.69, 1020.79 614.32 C 1019.40 611.96, 1018.36 610.74, 1016.03 609.18 C 1013.70 607.62, 1012.09 606.99, 1009.15 606.53 C 1006.20 606.07, 1004.43 606.15, 1001.30 606.88 C 998.17 607.61, 996.47 608.41, 993.50 610.20 C 990.54 611.99, 989.07 613.26, 986.48 615.84 C 983.89 618.41, 982.59 619.92, 980.55 623.09 C 978.52 626.26, 977.49 628.05, 976.31 631.69 C 975.13 635.32, 974.62 637.39, 974.64 641.26 C 974.67 645.14, 974.97 647.33, 976.44 651.07 C 977.91 654.81, 979.11 656.74, 982.00 659.98 C 984.88 663.22, 986.75 664.70, 990.86 667.28 C 994.96 669.87, 997.39 670.99, 1002.50 672.91 C 1007.61 674.84, 1010.54 675.59, 1016.40 676.90 C 1022.26 678.22, 1025.54 678.69, 1031.80 679.49 C 1038.05 680.29, 1041.84 680.55, 1047.65 680.91 C 1053.46 681.26, 1056.49 681.42, 1060.84 681.25 C 1065.18 681.08, 1067.69 681.02, 1069.38 680.06 C 1071.08 679.10, 1071.01 677.34, 1069.31 676.45 C 1067.60 675.57, 1065.14 675.85, 1060.87 675.63 C 1056.60 675.42, 1053.63 675.64, 1047.95 675.37 C 1042.27 675.10, 1038.51 675.04, 1032.45 674.29 C 1026.39 673.53, 1023.20 673.00, 1017.66 671.60 C 1012.12 670.21, 1009.36 669.31, 1004.76 667.31 C 1000.15 665.32, 998.04 664.08, 994.65 661.64 C 991.26 659.19, 989.91 657.77, 987.82 655.09 C 985.73 652.41, 985.09 650.98, 984.19 648.24 C 983.30 645.50, 983.21 644.10, 983.32 641.38 C 983.44 638.66, 983.79 637.24, 984.78 634.62 C 985.76 632.00, 986.56 630.59, 988.23 628.28 C 989.91 625.98, 991.04 624.82, 993.14 623.07 C 995.25 621.33, 996.59 620.66, 998.76 619.56 C 1000.93 618.47, 1002.11 618.14, 1004.00 617.60 C 1005.89 617.07, 1006.74 616.96, 1008.21 616.90 C 1009.69 616.84, 1010.34 616.92, 1011.37 617.29 C 1012.40 617.66, 1012.81 617.87, 1013.36 618.76 C 1013.91 619.65, 1014.11 620.22, 1014.12 621.75 C 1014.12 623.28, 1013.92 624.20, 1013.39 626.41 C 1012.86 628.63, 1012.64 630.06, 1011.44 632.83 C 1010.25 635.60, 1009.41 637.25, 1007.40 640.28 C 1005.38 643.31, 1004.05 644.94, 1001.37 647.97 C 998.68 651.00, 997.05 652.62, 993.96 655.42 C 990.87 658.23, 989.15 659.62, 985.91 661.98 C 982.67 664.33, 980.88 665.49, 977.74 667.19 C 974.61 668.90, 972.99 669.55, 970.23 670.50 C 967.48 671.45, 966.19 671.54, 963.98 671.95 C 961.77 672.35, 960.92 672.62, 959.19 672.52 C 957.45 672.42, 956.74 672.23, 955.30 671.45 C 953.85 670.67, 953.25 670.13, 951.95 668.63 C 950.65 667.12, 950.06 666.13, 948.78 663.92 C 947.50 661.71, 946.72 660.46, 945.55 657.58 C 944.38 654.71, 943.84 653.02, 942.92 649.55 C 941.99 646.07, 941.59 644.09, 940.93 640.22 C 940.28 636.35, 940.05 634.27, 939.64 630.19 C 939.24 626.10, 939.12 623.90, 938.90 619.78 C 938.68 615.66, 938.57 613.54, 938.54 609.57 C 938.51 605.61, 938.60 603.60, 938.75 599.95 C 938.90 596.29, 939.10 594.52, 939.29 591.30 C 939.48 588.07, 939.89 586.37, 939.69 583.83 C 939.50 581.28, 939.07 580.30, 938.31 578.59 C 937.55 576.87, 937.26 575.93, 935.89 575.23 C 934.53 574.54, 932.89 574.45, 931.49 575.12"}),(0,h.jsx)("path",{d:"M 1214.87,629.99 C 1215.42 628.53, 1215.17 627.50, 1214.41 625.99 C 1213.65 624.48, 1212.88 623.65, 1211.07 622.43 C 1209.27 621.22, 1207.88 620.62, 1205.40 619.93 C 1202.93 619.24, 1201.52 619.17, 1198.69 619.00 C 1195.86 618.82, 1194.35 618.65, 1191.25 619.06 C 1188.15 619.47, 1186.47 620.00, 1183.19 621.05 C 1179.92 622.11, 1178.20 622.77, 1174.89 624.33 C 1171.57 625.89, 1169.82 626.81, 1166.63 628.86 C 1163.43 630.91, 1161.76 632.07, 1158.92 634.59 C 1156.08 637.11, 1154.65 638.49, 1152.43 641.45 C 1150.21 644.40, 1149.07 646.01, 1147.81 649.37 C 1146.55 652.74, 1146.03 654.72, 1146.14 658.26 C 1146.24 661.81, 1146.69 663.85, 1148.32 667.10 C 1149.95 670.34, 1151.30 671.94, 1154.28 674.50 C 1157.26 677.06, 1159.23 678.20, 1163.24 679.91 C 1167.25 681.63, 1169.59 682.21, 1174.33 683.07 C 1179.08 683.93, 1181.82 684.14, 1186.97 684.22 C 1192.12 684.31, 1194.94 684.09, 1200.09 683.48 C 1205.24 682.87, 1207.92 682.35, 1212.74 681.16 C 1217.55 679.97, 1220.02 679.25, 1224.17 677.53 C 1228.33 675.82, 1230.22 674.81, 1233.50 672.58 C 1236.79 670.35, 1238.47 669.23, 1240.58 666.38 C 1242.69 663.54, 1243.38 661.66, 1244.07 658.35 C 1244.75 655.05, 1244.71 653.14, 1243.99 649.84 C 1243.27 646.54, 1242.40 644.78, 1240.46 641.85 C 1238.53 638.91, 1237.04 637.58, 1234.31 635.18 C 1231.59 632.78, 1229.91 631.74, 1226.83 629.84 C 1223.76 627.94, 1222.02 627.08, 1218.92 625.69 C 1215.82 624.31, 1214.13 623.54, 1211.33 622.92 C 1208.52 622.29, 1206.95 622.46, 1204.89 622.56 C 1202.82 622.67, 1202.17 622.86, 1200.99 623.43 C 1199.81 624.00, 1199.45 624.70, 1199.00 625.43 C 1198.56 626.15, 1198.66 626.59, 1198.79 627.06 C 1198.91 627.53, 1199.39 627.43, 1199.61 627.79 C 1199.83 628.15, 1199.60 628.33, 1199.88 628.87 C 1200.17 629.41, 1200.23 629.93, 1201.02 630.50 C 1201.82 631.06, 1202.29 631.18, 1203.85 631.69 C 1205.41 632.20, 1206.57 632.44, 1208.82 633.06 C 1211.08 633.68, 1212.53 633.83, 1215.14 634.81 C 1217.75 635.80, 1219.34 636.47, 1221.88 637.98 C 1224.41 639.50, 1225.75 640.51, 1227.79 642.41 C 1229.84 644.31, 1230.72 645.50, 1232.09 647.48 C 1233.45 649.46, 1234.00 650.43, 1234.63 652.29 C 1235.26 654.15, 1235.46 654.97, 1235.23 656.79 C 1235.00 658.61, 1234.75 659.47, 1233.50 661.40 C 1232.25 663.34, 1231.40 664.48, 1228.98 666.47 C 1226.57 668.45, 1224.98 669.61, 1221.42 671.33 C 1217.85 673.04, 1215.57 673.84, 1211.16 675.03 C 1206.75 676.23, 1204.17 676.75, 1199.37 677.29 C 1194.57 677.84, 1191.89 677.98, 1187.17 677.76 C 1182.46 677.53, 1179.90 677.17, 1175.78 676.17 C 1171.66 675.18, 1169.70 674.41, 1166.59 672.77 C 1163.48 671.14, 1162.16 669.96, 1160.21 668.01 C 1158.25 666.06, 1157.70 665.01, 1156.80 663.01 C 1155.91 661.01, 1155.76 660.10, 1155.71 658.01 C 1155.67 655.92, 1155.78 654.81, 1156.57 652.56 C 1157.35 650.31, 1158.01 649.04, 1159.64 646.75 C 1161.28 644.47, 1162.41 643.21, 1164.74 641.14 C 1167.07 639.06, 1168.54 638.02, 1171.30 636.37 C 1174.06 634.72, 1175.66 633.97, 1178.55 632.87 C 1181.44 631.77, 1182.98 631.40, 1185.75 630.88 C 1188.52 630.36, 1189.95 630.42, 1192.38 630.28 C 1194.82 630.13, 1195.99 630.00, 1197.93 630.15 C 1199.87 630.30, 1200.61 630.54, 1202.09 631.03 C 1203.56 631.53, 1204.07 632.10, 1205.30 632.61 C 1206.53 633.12, 1206.97 633.44, 1208.25 633.58 C 1209.53 633.72, 1210.36 634.03, 1211.68 633.31 C 1213.01 632.60, 1214.33 631.46, 1214.87 629.99"}),(0,h.jsx)("path",{d:"M 1252.29,626.13 C 1250.93 626.54, 1250.48 627.03, 1249.59 628.37 C 1248.70 629.71, 1248.20 630.69, 1247.86 632.83 C 1247.52 634.98, 1247.70 636.45, 1247.88 639.12 C 1248.06 641.78, 1248.37 643.26, 1248.75 646.16 C 1249.12 649.07, 1249.42 650.66, 1249.77 653.63 C 1250.13 656.59, 1250.19 658.17, 1250.52 661.01 C 1250.86 663.85, 1251.08 665.35, 1251.46 667.83 C 1251.85 670.30, 1251.67 671.62, 1252.46 673.38 C 1253.25 675.14, 1253.88 676.02, 1255.42 676.63 C 1256.96 677.25, 1258.50 677.18, 1260.17 676.47 C 1261.83 675.76, 1262.83 674.86, 1263.74 673.09 C 1264.65 671.31, 1264.77 670.07, 1264.71 667.59 C 1264.66 665.12, 1263.82 663.52, 1263.46 660.73 C 1263.09 657.94, 1262.89 656.38, 1262.90 653.64 C 1262.91 650.91, 1263.03 649.62, 1263.52 647.08 C 1264.01 644.54, 1264.38 643.25, 1265.36 640.94 C 1266.33 638.64, 1266.88 637.58, 1268.39 635.56 C 1269.89 633.54, 1270.79 632.58, 1272.88 630.85 C 1274.97 629.12, 1276.20 628.22, 1278.83 626.89 C 1281.46 625.57, 1282.97 624.96, 1286.03 624.21 C 1289.08 623.47, 1290.83 623.26, 1294.10 623.16 C 1297.37 623.07, 1299.14 623.13, 1302.37 623.74 C 1305.60 624.35, 1307.23 624.86, 1310.24 626.21 C 1313.26 627.57, 1314.77 628.46, 1317.47 630.52 C 1320.16 632.58, 1321.46 633.84, 1323.73 636.51 C 1326.01 639.18, 1327.04 640.72, 1328.85 643.88 C 1330.66 647.03, 1331.41 648.84, 1332.78 652.29 C 1334.14 655.74, 1334.67 657.61, 1335.68 661.14 C 1336.68 664.66, 1337.04 666.53, 1337.80 669.93 C 1338.57 673.33, 1338.69 675.29, 1339.52 678.12 C 1340.35 680.95, 1340.90 682.24, 1341.95 684.08 C 1343.00 685.93, 1343.71 686.46, 1344.78 687.35 C 1345.84 688.24, 1346.32 688.53, 1347.28 688.53 C 1348.24 688.54, 1348.97 688.08, 1349.58 687.39 C 1350.19 686.69, 1350.14 686.32, 1350.33 685.07 C 1350.52 683.82, 1350.79 683.12, 1350.52 681.14 C 1350.26 679.16, 1349.92 677.88, 1349.02 675.16 C 1348.13 672.45, 1347.19 670.84, 1346.04 667.56 C 1344.89 664.28, 1344.49 662.41, 1343.27 658.78 C 1342.05 655.14, 1341.49 653.13, 1339.95 649.39 C 1338.40 645.64, 1337.59 643.62, 1335.53 640.04 C 1333.48 636.46, 1332.33 634.64, 1329.68 631.49 C 1327.03 628.33, 1325.51 626.79, 1322.29 624.28 C 1319.07 621.77, 1317.24 620.65, 1313.58 618.94 C 1309.91 617.24, 1307.90 616.59, 1303.98 615.76 C 1300.06 614.93, 1297.96 614.81, 1293.99 614.81 C 1290.02 614.81, 1287.95 614.99, 1284.14 615.77 C 1280.34 616.56, 1278.38 617.19, 1274.96 618.73 C 1271.54 620.27, 1269.90 621.30, 1267.05 623.47 C 1264.20 625.64, 1262.84 626.89, 1260.69 629.59 C 1258.54 632.28, 1257.68 633.88, 1256.29 636.94 C 1254.89 640.00, 1254.50 641.71, 1253.71 644.88 C 1252.92 648.06, 1252.82 649.63, 1252.36 652.80 C 1251.89 655.96, 1251.76 657.65, 1251.40 660.73 C 1251.03 663.81, 1250.37 665.58, 1250.53 668.19 C 1250.69 670.81, 1251.07 672.12, 1252.19 673.80 C 1253.31 675.47, 1254.45 676.16, 1256.14 676.56 C 1257.83 676.96, 1259.35 676.70, 1260.64 675.78 C 1261.93 674.87, 1262.31 673.84, 1262.59 671.97 C 1262.88 670.11, 1262.33 668.90, 1262.08 666.45 C 1261.82 664.00, 1261.66 662.50, 1261.33 659.73 C 1261.00 656.96, 1260.65 655.45, 1260.44 652.59 C 1260.24 649.74, 1260.26 648.24, 1260.30 645.47 C 1260.33 642.69, 1260.61 641.25, 1260.62 638.72 C 1260.64 636.19, 1260.73 634.81, 1260.37 632.80 C 1260.02 630.79, 1259.66 629.98, 1258.86 628.68 C 1258.06 627.39, 1257.69 626.84, 1256.38 626.33 C 1255.07 625.82, 1253.65 625.72, 1252.29 626.13"}),(0,h.jsx)("path",{d:"M 1473.68,631.52 C 1472.42 632.29, 1472.18 633.06, 1471.59 634.65 C 1471.00 636.24, 1470.78 637.20, 1470.73 639.48 C 1470.67 641.77, 1470.88 643.31, 1471.32 646.10 C 1471.75 648.88, 1472.37 650.36, 1472.91 653.39 C 1473.45 656.41, 1473.60 658.05, 1474.01 661.22 C 1474.43 664.39, 1474.59 666.08, 1474.99 669.24 C 1475.40 672.39, 1475.52 674.06, 1476.04 677.00 C 1476.56 679.94, 1476.83 681.49, 1477.60 683.95 C 1478.37 686.42, 1478.84 687.73, 1479.90 689.32 C 1480.95 690.90, 1481.81 691.26, 1482.87 691.87 C 1483.94 692.48, 1484.38 692.47, 1485.20 692.37 C 1486.02 692.28, 1486.40 691.93, 1486.97 691.39 C 1487.55 690.86, 1487.71 690.71, 1488.07 689.67 C 1488.44 688.64, 1488.88 687.92, 1488.80 686.22 C 1488.72 684.53, 1488.17 683.46, 1487.66 681.21 C 1487.14 678.97, 1486.82 677.67, 1486.24 675.00 C 1485.66 672.32, 1485.23 670.78, 1484.75 667.82 C 1484.27 664.86, 1484.07 663.26, 1483.82 660.18 C 1483.57 657.09, 1483.52 655.45, 1483.50 652.40 C 1483.47 649.35, 1483.79 647.78, 1483.70 644.93 C 1483.61 642.08, 1483.59 640.47, 1483.03 638.15 C 1482.48 635.82, 1481.94 634.78, 1480.92 633.32 C 1479.89 631.85, 1479.34 631.18, 1477.89 630.82 C 1476.44 630.47, 1474.94 630.76, 1473.68 631.52"}),(0,h.jsx)("path",{d:"M 1469.72,590.15 C 1471.20 590.72, 1472.12 590.97, 1472.27 590.67 C 1472.42 590.38, 1471.66 589.68, 1470.47 588.68 C 1469.28 587.67, 1467.76 586.32, 1466.32 585.65 C 1464.88 584.99, 1463.57 584.92, 1463.28 585.36 C 1463.00 585.80, 1463.60 586.90, 1464.89 587.86 C 1466.18 588.82, 1468.25 589.59, 1469.72 590.15"}),(0,h.jsx)("path",{d:"M 1575.48,606.20 C 1575.82 604.52, 1575.25 603.06, 1573.98 601.25 C 1572.71 599.45, 1571.54 598.53, 1569.11 597.17 C 1566.68 595.80, 1564.95 595.02, 1561.84 594.44 C 1558.74 593.86, 1556.96 593.97, 1553.59 594.25 C 1550.21 594.53, 1548.52 594.93, 1544.97 595.84 C 1541.43 596.75, 1539.51 597.35, 1535.85 598.81 C 1532.20 600.27, 1530.32 601.14, 1526.71 603.15 C 1523.10 605.16, 1521.22 606.33, 1517.80 608.88 C 1514.39 611.42, 1512.61 612.83, 1509.62 615.87 C 1506.64 618.91, 1505.20 620.60, 1502.86 624.10 C 1500.51 627.59, 1499.39 629.47, 1497.90 633.32 C 1496.42 637.17, 1495.79 639.28, 1495.41 643.35 C 1495.04 647.41, 1495.17 649.66, 1496.04 653.65 C 1496.91 657.65, 1497.65 659.69, 1499.77 663.34 C 1501.89 666.99, 1503.33 668.80, 1506.63 671.88 C 1509.93 674.97, 1512.01 676.41, 1516.27 678.77 C 1520.52 681.14, 1522.96 682.14, 1527.91 683.71 C 1532.85 685.29, 1535.64 685.88, 1541.00 686.63 C 1546.35 687.39, 1549.26 687.52, 1554.70 687.50 C 1560.14 687.49, 1562.98 687.27, 1568.19 686.55 C 1573.41 685.83, 1576.07 685.27, 1580.76 683.91 C 1585.45 682.55, 1587.71 681.72, 1591.66 679.75 C 1595.62 677.77, 1597.46 676.61, 1600.53 674.02 C 1603.60 671.44, 1605.03 669.99, 1607.02 666.81 C 1609.02 663.62, 1609.73 661.70, 1610.49 658.10 C 1611.25 654.50, 1611.23 652.51, 1610.84 648.82 C 1610.45 645.13, 1609.87 643.21, 1608.55 639.65 C 1607.22 636.10, 1606.22 634.32, 1604.20 631.04 C 1602.19 627.76, 1600.88 626.16, 1598.48 623.23 C 1596.09 620.30, 1594.69 618.85, 1592.22 616.39 C 1589.74 613.94, 1588.41 612.41, 1586.11 610.95 C 1583.80 609.50, 1582.50 609.47, 1580.69 609.13 C 1578.88 608.80, 1578.09 608.75, 1577.06 609.27 C 1576.03 609.79, 1575.58 610.59, 1575.53 611.72 C 1575.48 612.85, 1575.93 613.45, 1576.81 614.92 C 1577.70 616.39, 1578.13 617.39, 1579.95 619.07 C 1581.78 620.75, 1583.54 621.36, 1585.93 623.32 C 1588.31 625.28, 1589.71 626.42, 1591.89 628.86 C 1594.08 631.30, 1595.17 632.77, 1596.85 635.53 C 1598.54 638.30, 1599.28 639.83, 1600.31 642.69 C 1601.35 645.54, 1601.69 647.04, 1602.02 649.80 C 1602.34 652.55, 1602.36 653.90, 1601.95 656.48 C 1601.54 659.05, 1601.24 660.27, 1599.97 662.67 C 1598.69 665.07, 1597.85 666.25, 1595.55 668.47 C 1593.26 670.70, 1591.81 671.89, 1588.49 673.79 C 1585.16 675.69, 1583.16 676.59, 1578.93 677.98 C 1574.71 679.36, 1572.20 679.98, 1567.35 680.72 C 1562.50 681.46, 1559.78 681.69, 1554.69 681.70 C 1549.59 681.71, 1546.83 681.55, 1541.87 680.77 C 1536.91 679.98, 1534.33 679.34, 1529.89 677.78 C 1525.44 676.22, 1523.29 675.17, 1519.64 672.96 C 1515.99 670.74, 1514.29 669.38, 1511.64 666.71 C 1508.99 664.04, 1507.99 662.54, 1506.40 659.61 C 1504.81 656.67, 1504.34 655.14, 1503.70 652.03 C 1503.06 648.92, 1502.93 647.24, 1503.21 644.04 C 1503.48 640.85, 1503.89 639.21, 1505.07 636.06 C 1506.26 632.91, 1507.15 631.26, 1509.12 628.28 C 1511.10 625.29, 1512.33 623.79, 1514.96 621.13 C 1517.59 618.48, 1519.18 617.21, 1522.28 615.02 C 1525.37 612.83, 1527.12 611.80, 1530.41 610.16 C 1533.71 608.53, 1535.46 607.88, 1538.75 606.84 C 1542.03 605.80, 1543.81 605.41, 1546.84 604.98 C 1549.87 604.55, 1551.40 604.58, 1553.90 604.68 C 1556.40 604.79, 1557.36 604.94, 1559.36 605.50 C 1561.35 606.06, 1562.16 606.76, 1563.88 607.50 C 1565.60 608.24, 1566.28 608.76, 1567.96 609.19 C 1569.63 609.62, 1570.74 610.25, 1572.25 609.65 C 1573.75 609.06, 1575.13 607.88, 1575.48 606.20"}),(0,h.jsx)("path",{d:"M 1698.43,599.88 C 1698.66 598.16, 1698.04 596.54, 1696.42 594.64 C 1694.79 592.74, 1693.34 591.53, 1690.30 590.39 C 1687.27 589.25, 1685.06 589.11, 1681.25 588.94 C 1677.44 588.77, 1675.39 589.08, 1671.26 589.55 C 1667.14 590.02, 1664.90 590.43, 1660.62 591.27 C 1656.34 592.10, 1654.06 592.60, 1649.87 593.73 C 1645.68 594.87, 1643.49 595.54, 1639.67 596.94 C 1635.86 598.34, 1633.91 598.95, 1630.78 600.73 C 1627.66 602.50, 1626.02 603.38, 1624.04 605.81 C 1622.07 608.25, 1621.33 609.91, 1620.91 612.89 C 1620.49 615.86, 1620.59 617.84, 1621.96 620.68 C 1623.32 623.53, 1624.70 624.91, 1627.75 627.13 C 1630.80 629.36, 1632.95 629.97, 1637.20 631.82 C 1641.45 633.68, 1643.94 634.52, 1649.01 636.41 C 1654.09 638.29, 1657.01 639.23, 1662.57 641.26 C 1668.13 643.28, 1671.20 644.31, 1676.79 646.53 C 1682.38 648.75, 1685.35 649.88, 1690.51 652.35 C 1695.67 654.81, 1698.30 656.18, 1702.60 658.84 C 1706.91 661.49, 1708.91 662.91, 1712.02 665.63 C 1715.14 668.35, 1716.42 669.85, 1718.17 672.41 C 1719.93 674.98, 1720.18 676.38, 1720.79 678.46 C 1721.40 680.54, 1721.60 681.23, 1721.22 682.81 C 1720.85 684.40, 1720.27 684.81, 1718.90 686.39 C 1717.53 687.97, 1716.85 689.03, 1714.36 690.72 C 1711.87 692.41, 1710.25 693.42, 1706.44 694.86 C 1702.63 696.30, 1700.24 697.00, 1695.29 697.92 C 1690.34 698.85, 1687.44 699.17, 1681.67 699.49 C 1675.90 699.82, 1672.69 699.81, 1666.46 699.56 C 1660.24 699.30, 1656.84 698.99, 1650.53 698.21 C 1644.21 697.43, 1640.89 696.89, 1634.87 695.64 C 1628.86 694.38, 1625.77 693.61, 1620.44 691.93 C 1615.11 690.25, 1612.51 689.26, 1608.24 687.26 C 1603.97 685.26, 1601.96 684.08, 1599.10 681.93 C 1596.24 679.78, 1595.55 678.33, 1593.95 676.50 C 1592.35 674.68, 1592.15 674.05, 1591.10 672.80 C 1590.05 671.54, 1589.81 670.60, 1588.71 670.22 C 1587.62 669.83, 1586.43 669.85, 1585.63 670.87 C 1584.84 671.89, 1584.38 673.07, 1584.74 675.33 C 1585.09 677.60, 1585.27 679.73, 1587.41 682.20 C 1589.54 684.66, 1591.70 685.60, 1595.41 687.67 C 1599.13 689.74, 1601.27 690.71, 1605.98 692.55 C 1610.69 694.39, 1613.39 695.29, 1618.97 696.86 C 1624.56 698.43, 1627.72 699.16, 1633.91 700.39 C 1640.10 701.61, 1643.46 702.15, 1649.92 702.98 C 1656.38 703.81, 1659.82 704.16, 1666.21 704.55 C 1672.60 704.95, 1675.86 705.05, 1681.86 704.95 C 1687.87 704.86, 1690.86 704.71, 1696.21 704.09 C 1701.57 703.47, 1704.14 703.05, 1708.65 701.87 C 1713.16 700.68, 1715.24 700.04, 1718.77 698.15 C 1722.31 696.27, 1724.15 695.19, 1726.31 692.44 C 1728.48 689.68, 1729.06 687.69, 1729.60 684.37 C 1730.13 681.04, 1730.11 679.10, 1728.98 675.81 C 1727.85 672.52, 1726.55 670.91, 1723.95 667.90 C 1721.34 664.89, 1719.65 663.52, 1715.95 660.75 C 1712.25 657.98, 1710.09 656.66, 1705.44 654.03 C 1700.80 651.40, 1698.08 650.08, 1692.73 647.61 C 1687.39 645.14, 1684.37 644.00, 1678.74 641.70 C 1673.10 639.40, 1670.02 638.31, 1664.56 636.09 C 1659.10 633.87, 1656.21 632.79, 1651.44 630.58 C 1646.66 628.37, 1644.29 627.22, 1640.69 625.04 C 1637.08 622.86, 1635.64 621.46, 1633.42 619.68 C 1631.20 617.90, 1630.59 617.28, 1629.60 616.15 C 1628.62 615.03, 1628.31 614.94, 1628.49 614.06 C 1628.67 613.18, 1629.14 612.93, 1630.49 611.76 C 1631.84 610.59, 1632.81 609.72, 1635.23 608.20 C 1637.64 606.69, 1639.24 605.62, 1642.56 604.17 C 1645.88 602.72, 1647.97 602.02, 1651.84 600.94 C 1655.72 599.87, 1657.95 599.41, 1661.94 598.80 C 1665.93 598.19, 1668.18 597.92, 1671.80 597.89 C 1675.42 597.86, 1677.13 597.96, 1680.02 598.64 C 1682.91 599.32, 1684.05 600.50, 1686.26 601.30 C 1688.47 602.10, 1689.27 602.26, 1691.07 602.65 C 1692.88 603.04, 1693.81 603.79, 1695.28 603.24 C 1696.75 602.69, 1698.20 601.60, 1698.43 599.88"})]})}))`
  width: 30em;
  fill: var(--accent-contrast-color-1);
  transform: rotateZ(-10deg);
`,(0,C.Ay)((function(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 1422 800",className:e.className,children:[(0,h.jsx)("g",{id:"two-0",transform:"matrix(1 0 0 1 0 0)",opacity:"1"}),(0,h.jsx)("path",{d:"M 500.2610601348995 164.71824497424808 Q 500.2610601348995 164.71824497424808 501.55052167231156 182.0486151023992 502.8399832097237 199.37898523055028 504.4024213042543 215.32216596599864 505.96485939878494 231.26534670144702 507.4000961721621 248.70983557426368 508.8353329455393 266.15432444708034 510.03995086061707 288.7710933770907 511.2445687756949 311.3878623071011 512.2572565287745 335.79715327091543 513.2699442818541 360.20644423472976 514.5537212785146 385.56942460756403 515.8374982751751 410.9324049803983 517.5804501601996 433.1235899862596 519.323402045224 455.314774992121 521.2391926501061 468.807370445391 523.1549832549883 482.29996589866096 526.4389361351432 494.8445394465115 529.722889015298 507.38911299436194 543.5843068359384 508.3257861675616 557.4457246565786 509.26245934076127 580.2072494484584 507.68515433959936 602.9687742403381 506.10784933843746 642.949776756407 502.50842040042494 682.9307792724759 498.90899146241236 732.3672090013148 494.6999321881261 781.8036387301537 490.49087291383995 833.2706403992083 486.29153460947066 884.737642068263 482.09219630510137 926.8979202614914 479.4500783494212 969.0581984547198 476.807960393741 995.6397625678094 475.4454111177233 1022.2213266808989 474.0828618417057 1037.3982008336568 473.0620681954722 1052.5750749864146 472.0412745492387 1059.9711272518798 471.219461903199 1067.3671795173452 470.3976492571593 1069.3854151800779 470.6502666256178 1071.4036508428105 470.9028839940763 1073.2355680134483 471.78672233059194 1075.067485184086 472.6705606671076 1076.5212816512844 474.09308186453654 1077.9750781184825 475.5156030619655 1078.8985410083603 477.3278687754279 1079.822003898238 479.14013448889017 1080.118446402455 481.15240001979464 1080.4148889066716 483.1646655506991 1080.0532734167828 485.1662461667736 1079.6916579268936 487.167826782848 1078.7098456801475 488.94915646522344 1077.7280334334014 490.73048614759887 1076.2288204312053 492.1050592083052 1074.7296074290095 493.4796322690116 1072.869961668448 494.30353054574084 1071.0103159078863 495.1274288224701 1068.9849427909883 495.31438994816074 1066.9595696740903 495.5013510738513 1064.9805263008418 495.0318001692905 1063.0014829275933 494.5622492647297 1061.27597566159 493.48534843357436 1059.550468395587 492.4084476024191 1058.2591583030694 490.83694864596544 1056.967848210552 489.26544968951185 1056.2459357990792 487.363888963336 1055.5240233876063 485.4623282371602 1055.4470930772263 483.4297996512561 1055.370162766846 481.39727106535196 1055.9462691813628 479.44658089919915 1056.5223755958793 477.4958907330463 1057.6912002416157 475.8312767619732 1058.8600248873522 474.16666279090003 1060.4991915153598 472.9624105370934 1062.1383581433674 471.7581582832867 1064.0762455749962 471.1403532756118 1066.014133006625 470.5225482679368 1068.0478439162302 470.5558748537819 1070.0815548258358 470.58920143962695 1071.998159144335 471.2701703166567 1073.9147634628341 471.9511391936864 1075.5135922121456 473.2084527407174 1077.112420961457 474.4657662877484 1078.2260763494783 476.167783444508 1079.3397317374993 477.8698006012677 1079.8516137511278 479.8383197221543 1080.3634957647562 481.80683884304096 1080.2200102220413 483.8357554564592 1080.0765246793267 485.8646720698774 1079.2926945544673 487.7415580708203 1078.508864429608 489.61844407176324 1077.1667569435879 491.1467890004824 1075.8246494575678 492.67513392920154 1074.0647836184553 493.69491966821613 1072.3049177793428 494.7147054072307 1070.3115520050524 495.1191601204687 1068.3181862307622 495.5236148337066 1068.3200706781945 495.5235435082025 1068.3219551256268 495.52347218269847 1060.9500558490217 495.2628383668382 1053.578156572417 495.002204550978 1038.5301458927297 495.3018316816374 1023.4821352130426 495.60145881229687 997.03926902185 497.3457819524979 970.5964028306576 499.0901050926988 928.7026087431302 502.2505434570046 886.8088146556028 505.4109818213104 835.4898242164452 510.341480768011 784.1708337772876 515.2719797147116 734.9941589419968 520.4828715435863 685.817484106706 525.693763372461 646.0504964489036 530.689174647883 606.2835087911011 535.684585923305 583.131219387107 539.2529520298109 559.9789299831128 542.8213181363168 542.9047296862932 543.3092532657129 525.8305293894737 543.7971883951088 516.9119825885208 538.0786964674435 507.9934357875679 532.3602045397781 505.59948205996244 522.7971340401148 503.205528332357 513.2340635404513 501.609997542398 499.0074148073551 500.01446675243903 484.78076607425885 499.0049790822445 470.97174982389276 497.99549141205 457.1627335735267 495.87094031585093 434.7155922851018 493.7463892196518 412.268450996677 491.96116865134684 386.87907785308437 490.1759480830418 361.4897047094917 488.4907015380409 337.34599238270124 486.80545499304003 313.20228005591076 484.6774969315911 290.93321439646957 482.54953887014216 268.66414873702837 480.6666568476476 251.3591669765767 478.78377482515305 234.054185216125 477.06215230795885 217.9897129536028 475.3405297907646 201.92524069108057 473.4260263318388 184.65273797072092 471.511522872913 167.3802352503613 471.5611194667041 165.64078854245372 471.61071606049524 163.90134183454617 472.0751612120394 162.22431310104957 472.5396063635836 160.54728436755295 473.39190649885114 159.03014259725296 474.2442066341187 157.51300082695298 475.43482602920284 156.24392237082205 476.62544542428697 154.97484391469112 478.08518522400436 154.02758767222699 479.5449250237217 153.08033142976285 481.1889450823271 152.50995197828416 482.8329651409325 151.93957252680548 484.5657149353759 151.77922034683132 486.2984647298194 151.6188681668572 488.01923676063484 151.87786293462182 489.74000879145024 152.13685770238646 491.34879170735655 152.80014662981856 492.95757462326293 153.46343555725065 494.3608658855993 154.49246826072334 495.76415714793575 155.52150096419606 496.88039740260194 156.85647001463468 497.9966376572681 158.19143906507327 498.76095096821643 159.75475599854303 499.52526427916484 161.31807293201277 499.893228720852 163.01887769488826 500.2611931625392 164.71968245776375 500.26112664871937 164.71896371600593 Z"}),(0,h.jsx)("path",{d:"M 907.2414272759364 411.9005861328203 Q 907.2414272759364 411.9005861328203 918.1015682213326 414.60604757486124 928.961709166729 417.31150901690216 939.3074695717551 420.1309970704352 949.6532299767812 422.9504851239683 960.4861208630591 426.16783012537115 971.3190117493369 429.385175126774 981.3342262565866 432.3311138118268 991.3494407638362 435.2770524968796 1006.8782405302027 439.66903469237354 1022.4070402965691 444.0610168878674 1035.2185678456433 446.56927700629905 1048.0300953947176 449.07753712473067 1059.379237568226 451.58689810535736 1070.7283797417347 454.0962590859841 1079.703710097289 460.07432998815295 1088.6790404528435 466.05240089032185 1088.4823111376159 479.5081180680095 1088.2855818223882 492.96383524569706 1079.19196869722 502.21055814773194 1070.0983555720518 511.45728104976683 1051.8891578750638 523.240739030741 1033.6799601780758 535.0241970117152 1007.3466349023986 550.7933889365202 981.0133096267215 566.5625808613253 953.8226011249558 581.3286235052772 926.63189262319 596.094666149229 906.6900680961393 606.574062409964 886.7482435690886 617.0534586706988 874.6171397894539 623.891225367394 862.4860360098193 630.7289920640892 852.5831036179766 636.959794003289 842.6801712261338 643.1905959424887 840.4023450440893 644.0485780890155 838.124518862045 644.9065602355422 835.6919737580099 644.9922911879507 833.259428653975 645.0780221403594 830.9268527424713 644.3825258453019 828.5942768309677 643.6870295502445 826.6058914256702 642.2831246534066 824.6175060203726 640.8792197565688 823.1814955980985 638.9138954712444 821.7454851758245 636.94857118592 821.012200406856 634.6275974835777 820.2789156378874 632.3066237812354 820.3251316311038 629.8730072211881 820.3713476243202 627.4393906611408 821.1922255530318 625.1479315396377 822.0131034817434 622.8564724181347 823.5226972101236 620.9470871100837 825.0322909385038 619.0377018020328 827.072545604697 617.7103034532156 829.1128002708901 616.3829051043983 831.470100672771 615.7764726723353 833.8274010746519 615.1700402402722 836.2549372378767 615.3480673606829 838.6824734011013 615.5260944810935 840.926081648573 616.4699416674763 843.1696898960447 617.413788853859 844.994463851998 619.0246350566482 846.8192378079513 620.6354812594374 848.0341231575043 622.7446704559788 849.2490085070573 624.8538596525202 849.7268064334132 627.2405591771642 850.2046043597692 629.627258701808 849.8952892939122 632.0415804842968 849.5859742280553 634.4559022667855 848.5219315390319 636.6450661791735 847.4578888500085 638.8342300915613 845.7505240882394 640.5690300943381 844.0431593264703 642.3038300971151 841.8712340332133 643.4026321720476 839.6993087399562 644.50143424698 837.2902240667479 644.8491935267671 834.8811393935395 645.196952806554 832.4871271416011 644.7572588028023 830.093114889663 644.3175647990506 827.9648287737307 643.1364535900209 825.8365426577984 641.9553423809913 824.1968147960231 640.1564766220522 822.5570869342479 638.357610863113 821.5775972666037 636.1293322740798 820.5981075989595 633.9010536850466 820.3814089522089 631.4766636223994 820.1647103054581 629.0522735597524 820.7334910851187 626.6856063030274 821.3022718647792 624.3189390463024 822.596980573077 622.257785282018 823.8916892813746 620.1966315177336 825.7767695747809 618.6567945891022 827.6618498681872 617.1169576604709 827.6598943453014 617.1180840345812 827.6579388224156 617.1192104086915 838.5916036056649 611.982962332737 849.5252683889142 606.8467142567824 861.6947194173842 600.4967055131391 873.8641704458541 594.1466967694957 893.0070935888381 582.6425060566398 912.150016731822 571.1383153437838 937.7219002604229 555.2867627764373 963.2937837890237 539.4352102090908 987.2279300530877 522.3645217711442 1011.1620763171518 505.29383333319765 1025.2875420948767 492.5782966187268 1039.4130078726016 479.862759904256 1047.4579065631015 471.6161270161897 1055.502805253601 463.3694941281234 1053.456586615271 477.74396059979995 1051.4103679769407 492.11842707147656 1041.428082911099 489.620479521359 1031.4457978452574 487.1225319712414 1021.1532108192876 484.35839447410456 1010.8606237933178 481.59425697696776 995.7378416378601 476.89249193688056 980.6150594824024 472.1907268967933 970.6498816355452 469.32642970695485 960.6847037886879 466.4621325171164 950.1367175883263 463.5470754513348 939.5887313879648 460.63201838555324 929.781510378196 458.0688392790521 919.9742893684272 455.50566017255096 909.047461319683 453.0847635823653 898.1206332709386 450.6638669921797 895.8676584371799 449.83654727974965 893.6146836034211 449.00922756731967 891.6251770168833 447.6667607892398 889.6356704303454 446.32429401115996 888.0252623073146 444.5447043996478 886.4148541842839 442.76511478813563 885.2771415205355 440.6518321750259 884.1394288567869 438.5385495619161 883.540535565793 436.21439803197495 882.941642274799 433.89024650203373 882.9163760627712 431.490305851381 882.8911098507433 429.0903652007283 883.4409391911116 426.7541200927408 883.99076853148 424.4178749847532 885.0837373171487 422.2811080948751 886.1767061028174 420.144341204997 887.7492909366106 418.3312415252635 889.3218757704036 416.5181418455301 891.2826779478935 415.1340868145156 893.2434801253833 413.7500317835011 895.4785377318863 412.8754627446376 897.7135953383893 412.0008937057741 900.0930067208017 411.68664065269184 902.4724181032142 411.37238759960957 904.8578917601942 411.63671493451875 907.2433654171741 411.901042269428 907.2423963465553 411.90081420112415 Z"})]})}))`
  width: 12.5em;
  stroke: var(--accent-contrast-color-1);
  fill: var(--accent-contrast-color-1);
  position: absolute;
  transform: translateY(4em);
`,(0,C.Ay)(u)`
  margin-top: 5em;
  margin-bottom: 5em;
`);function Ne(){return(0,h.jsxs)(Xe,{children:[(0,h.jsxs)(u,{$flexDirection:"column",children:[(0,h.jsx)("h1",{children:"Available on iOS"}),(0,h.jsx)(Le,{children:(0,h.jsx)("img",{src:t(1238).A})})]}),(0,h.jsxs)(Oe,{$flexDirection:"column",children:[(0,h.jsx)("p",{children:"Available on iOS. Coming soon on all other platforms."}),(0,h.jsx)(g,{href:"https://apps.apple.com/ch/app/snip-notes-todos-reminders/id1584692945",children:(0,h.jsx)(f,{})})]})]})}const He=C.Ay.main`
  em {
    font-style: normal;
    color: var(--accent-color-1);
    white-space: nowrap;
  }
`;function Ee(){const[e,i]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=setTimeout((()=>i(!0)),0);return()=>clearTimeout(e)}),[]),(0,h.jsx)(n.A,{title:"A free to use, cross-platform productivity app",description:"Snip is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored.",children:(0,h.jsxs)(He,{style:{opacity:e?1:0,transition:"opacity 0s"},children:[(0,h.jsx)(R,{}),(0,h.jsx)(oe,{}),(0,h.jsx)(he,{}),(0,h.jsx)(Me,{}),(0,h.jsx)(Qe,{}),(0,h.jsx)(Ne,{})]})})}},1762:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/dashboard-f5ae217bc6f8fdfd61b23a34f338f998.png"},8098:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/flashcard-deck-457a6c01b72a54e4232fbcd3e9f75297.png"},2865:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/flashcard-session-4ed05e74cc9b6fc798d07fa0d2d7c208.png"},5090:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/general-todos-332796b73c59716aad16b275baf5dbe7.png"},75:(e,i,t)=>{t.d(i,{A:()=>n});const n="data:image/png;base64,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"},1315:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/icons-f777903f2944a108eeafff0923472a84.png"},1238:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/mobile-editor-3cc65c57f93432a49ae79187c79a8b58.png"},3696:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/search-b8be07fe54dbcf10fd3bbe4121da3863.png"},2687:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/single-flashcard-02215eb5406424408b251816a3d668e5.png"}}]);