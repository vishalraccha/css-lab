import React from 'react'
import Navbar from './Navbar'
import Components from './Components'
import "./documentation.css"

const Documentation=()=> {
  let code=[
  {
    "name":"nav1",
    "html":`<div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      Logo
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
  </div>
</div>`,

    "css":`
.nav {
  height: 50px;
  width: 100%;
  background-color: #4d4d4d;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
`
  },
  {
    "name":"comic-button",
    "html":`<button class="buttonst">
  <p>Button</p>
</button>`,

    "css":`.buttonst {
  all: unset;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.6em 2em;
  border: mediumspringgreen solid 0.15em;
  border-radius: 0.25em;
  color: mediumspringgreen;
  font-size: 1.5em;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: border 300ms, color 300ms;
  user-select: none;
}

.buttonst p {
  z-index: 1;
}

.buttonst:hover {
  color: #212121;
}

.buttonst:active {
  border-color: teal;
}

.buttonst::after, .button::before {
  content: "";
  position: absolute;
  width: 9em;
  aspect-ratio: 1;
  background: mediumspringgreen;
  opacity: 50%;
  border-radius: 50%;
  transition: transform 500ms, background 300ms;
}

.buttonst::before {
  left: 0;
  transform: translateX(-8em);
}

.buttonst::after {
  right: 0;
  transform: translateX(8em);
}

.buttonst:hover:before {
  transform: translateX(-1em);
}

.buttonst:hover:after {
  transform: translateX(1em);
}

.buttonst:active:before,
.buttonst:active:after {
  background: teal;
}
`
  },
  {
    "name":"button2",
    "html":`<button class="buttonhover"> Hey, Hover Me
</button>`,

    "css":`.buttonhover {
  padding: 15px 20px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  z-index: 1;
}

.buttonhover::after,
.buttonhover::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

.buttonhover::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #28282d;
  border-radius: 10px;
}

.buttonhover::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  border-radius: 50px;
}

.buttonhover:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.buttonhover:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.buttonhover:active::after {
  transition: 0s;
  transform: translate(0, 5%);
} 
`

  },
  {
    "name":"btn",
    "html":`
<button class="btn-17">
  <span class="text-container">
    <span class="text">Button</span>
  </span>
</button>
`,

    "css":`.btn-17,
.btn-17 *,
.btn-17 :after,
.btn-17 :before,
.btn-17:after,
.btn-17:before {
  border: 0 solid;
  box-sizing: border-box;
}

.btn-17 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  text-transform: uppercase;
}

.btn-17:disabled {
  cursor: default;
}

.btn-17:-moz-focusring {
  outline: auto;
}

.btn-17 svg {
  display: block;
  vertical-align: middle;
}

.btn-17 [hidden] {
  display: none;
}

.btn-17 {
  border-radius: 99rem;
  border-width: 2px;
  padding: 0.8rem 3rem;
  z-index: 0;
}

.btn-17,
.btn-17 .text-container {
  overflow: hidden;
  position: relative;
}

.btn-17 .text-container {
  display: block;
  mix-blend-mode: difference;
}

.btn-17 .text {
  display: block;
  position: relative;
}

.btn-17:hover .text {
  -webkit-animation: move-up-alternate 0.3s forwards;
  animation: move-up-alternate 0.3s forwards;
}

@-webkit-keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(80%);
  }

  51% {
    transform: translateY(-80%);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(80%);
  }

  51% {
    transform: translateY(-80%);
  }

  to {
    transform: translateY(0);
  }
}

.btn-17:after,
.btn-17:before {
  --skew: 0.2;
  background: white;
  content: "";
  display: block;
  height: 102%;
  left: calc(-50% - 50% * var(--skew));
  pointer-events: none;
  position: absolute;
  top: -104%;
  transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
  transition: transform 0.2s ease;
  width: 100%;
}

.btn-17:after {
  --progress: 0%;
  left: calc(50% + 50% * var(--skew));
  top: 102%;
  z-index: -1;
}

.btn-17:hover:before {
  --progress: 100%;
}

.btn-17:hover:after {
  --progress: -102%;
}
`


  },
  {
    "name":"btn2",
    "text":"Fold me!",
    "html":`<button class="btn2">
<b>Fold me!</b>
</button>`,

    "css":`.btn2 {
position: relative;
font-size: 1.2em;
padding: 0.7em 1.4em;
background-color: #BF0426;
text-decoration: none;
border: none;
border-radius: 0.5em;
color: #DEDEDE;
box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
}

.btn2::before {
position: absolute;
content: '';
height: 0;
width: 0;
top: 0;
left: 0;
background: linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1)
60%);
border-radius: 0 0 0.5em 0;
box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
transition: 0.3s;
}

.btn2:hover::before {
width: 1.6em;
height: 1.6em;
}

.btn2:active {
box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
transform: translate(0.1em, 0.1em);
}
`
  },

  {
    "name":"btn3",
    "text":"Button",
    "html":`<button class="buttonsub">
  Subscribe
</button>`,

    "css":`.buttonsub {
cursor: pointer;
position: relative;
padding: 10px 24px;
font-size: 18px;
color: rgb(193, 163, 98);
border: 2px solid rgb(193, 163, 98);
border-radius: 34px;
background-color: transparent;
font-weight: 600;
transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
overflow: hidden;
}

.buttonsub::before {
content: '';
position: absolute;
inset: 0;
margin: auto;
width: 50px;
height: 50px;
border-radius: inherit;
scale: 0;
z-index: -1;
background-color: rgb(193, 163, 98);
transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.buttonsub:hover::before {
scale: 3;
}

.buttonsub:hover {
color: #212121;
scale: 1.1;
box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
}

.buttonsub:active {
scale: 1;
}
`
  },    
  {
    "name":"btn4",
    "html":`<label>
  <input class="toggle-checkbox" type="checkbox">
  <div class="toggle-slot">
    <div class="sun-icon-wrapper">
      <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
    </div>
    <div class="toggle-button"></div>
    <div class="moon-icon-wrapper">
      <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
    </div>
  </div>
</label>
`,

    "css":`.toggle-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.toggle-slot {
  font-size: 10px;
  position: relative;
  height: 3.5em;
  width: 7em;
  border: 0px solid transparent;
  border-radius: 10em;
  background-color: white;
  transition: background-color 250ms;
}

.toggle-checkbox:checked ~ .toggle-slot {
  background-color: #374151;
}

.toggle-button {
  transform: translate(0.3em, 0.25em);
  position: absolute;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  background-color: #ffeccf;
  box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
  transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
  background-color: #485367;
  box-shadow: inset 0px 0px 0px 0.75em white;
  transform: translate(3.65em, 0.25em);
}

.sun-icon {
  position: absolute;
  height: 6em;
  width: 6em;
  color: #ffbb52;
}

.sun-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 1;
  transform: translate(2em, 2em) rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
  opacity: 0;
  transform: translate(3em, 2em) rotate(0deg);
}

.moon-icon {
  position: absolute;
  height: 6em;
  width: 6em;
  color: white;
}

.moon-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 0;
  transform: translate(11em, 2em) rotate(0deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
  opacity: 1;
  transform: translate(2em, 2em) rotate(-15deg);
}
`
  },    
  {
    "name":"btn5",
    "html":`<label class="switch">
  <input type="checkbox" checked="">
</label>
`,

    "css":`.switch {
 --false: #E81B1B;
 --true: #009068;
}

input[type=checkbox] {
 appearance: none;
 height: 2.5rem;
 width: 4rem;
 background-color: #fff;
 position: relative;
 border-radius: .2em;
 cursor: pointer;
}

input[type=checkbox]::before {
 content: '';
 display: block;
 height: 1.9em;
 width: 1.9em;
 transform: translate(-50%, -50%);
 position: absolute;
 top: 50%;
 left: calc(1.9em/2 + .3em);
 background-color: var(--false);
 border-radius: .2em;
 transition: .3s ease;
}

input[type=checkbox]:checked::before {
 background-color: var(--true);
 left: calc(100% - (1.9em/2 + .3em));
}
`
  },    
  {
    "name":"btn6",
    "html":` <input type="checkbox" id="checkbox">
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
`,

    "css":`#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: rgb(176, 92, 255);
  border-radius: 4px;
}

#bar2 {
  transition-duration: .8s;
}

#bar1,#bar3 {
  width: 70%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle {
  transition-duration: .5s;
  transform: rotate(180deg);
}
`
  },    
  {
    "name":"btn7",
    "html":` <input id="checkboxInput" type="checkbox">
    <label class="toggleSwitch" for="checkboxInput">
    </label>
`,

    "css":`/* To hide the checkbox */
#checkboxInput {
  display: none;
}

.toggleSwitch {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80px;
  height: 40px;
  background-color: rgb(199, 199, 199);
  border-radius: 20px;
  cursor: pointer;
  transition-duration: .3s;
}

.toggleSwitch::after {
  content: "";
  position: absolute;
  height: 40px;
  width: 40px;
  left: 0px;
  background: conic-gradient(rgb(104, 104, 104),white,rgb(104, 104, 104),white,rgb(104, 104, 104));
  border-radius: 50%;
  transition-duration: .3s;
  box-shadow: 5px 2px 7px rgba(8, 8, 8, 0.308);
}

#checkboxInput:checked+.toggleSwitch::after {
  transform: translateX(100%);
  transition-duration: .3s;
}
/* Switch background change */
#checkboxInput:checked+.toggleSwitch {
  background-color: rgb(153, 197, 151);
  transition-duration: .3s;
}
`
  },    
  {
    "name":"btn8",
    "html":` <div class="container">
<label class="switchbg">
  <input class="togglesw" type="checkbox" checked="">
  <div class="indicator left"></div>
  <div class="indicator right"></div>
  <div class="button"></div>
</label>
</div>
`,

    "css":`.container {
  display: flex;
  align-items: center;
  justify-content: center;
  --hue: 220deg;
  --width: 15rem;
  --accent-hue: 22deg;
  --duration: 0.6s;
  --easing: cubic-bezier(1, 0, 1, 1);
}

.togglesw {
  display: none;
}

.switchbg {
  --shadow-offset: calc(var(--width) / 20);
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: var(--width);
  height: calc(var(--width) / 2.5);
  border-radius: var(--width);
  box-shadow: inset 10px 10px 10px hsl(var(--hue) 20% 80%),
    inset -10px -10px 10px hsl(var(--hue) 20% 93%);
}

.indicator {
  content: '';
  position: absolute;
  width: 40%;
  height: 60%;
  transition: all var(--duration) var(--easing);
  box-shadow: inset 0 0 2px hsl(var(--hue) 20% 15% / 60%),
    inset 0 0 3px 2px hsl(var(--hue) 20% 15% / 60%),
    inset 0 0 5px 2px hsl(var(--hue) 20% 45% / 60%);
}

.indicator.left {
  --hue: var(--accent-hue);
  overflow: hidden;
  left: 10%;
  border-radius: 100px 0 0 100px;
  background: linear-gradient(180deg, hsl(calc(var(--accent-hue) + 20deg) 95% 80%) 10%, hsl(calc(var(--accent-hue) + 20deg) 100% 60%) 30%, hsl(var(--accent-hue) 90% 50%) 60%, hsl(var(--accent-hue) 90% 60%) 75%, hsl(var(--accent-hue) 90% 50%));
}

.indicator.left::after {
  content: '';
  position: absolute;
  opacity: 0.6;
  width: 100%;
  height: 100%;
}

.indicator.right {
  right: 10%;
  border-radius: 0 100px 100px 0;
  background-image: linear-gradient(180deg, hsl(var(--hue) 20% 95%), hsl(var(--hue) 20% 65%) 60%, hsl(var(--hue) 20% 70%) 70%, hsl(var(--hue) 20% 65%));
}

.button {
  position: absolute;
  z-index: 1;
 width: 50%;
  height: 70%;
  left: 5%;
  border-radius: 100px;
  background-image: linear-gradient(160deg, hsl(var(--hue) 20% 95%) 40%, hsl(var(--hue) 20% 65%) 70%);
  transition: all var(--duration) var(--easing);
  box-shadow: 2px 2px 3px hsl(var(--hue) 18% 50% / 80%),
    2px 2px 6px hsl(var(--hue) 18% 50% / 40%),
    10px 20px 10px hsl(var(--hue) 18% 50% / 40%),
    20px 30px 30px hsl(var(--hue) 18% 50% / 60%);
}

.button::before, 
.button::after {
  content: '';
  position: absolute;
  top: 10%;
  width: 41%;
  height: 80%;
  border-radius: 100%;
}

.button::before {
  left: 5%;
  box-shadow: inset 1px 1px 2px hsl(var(--hue) 20% 85%);
  background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 85%) 80%);
}

.button::after {
  right: 5%;
  box-shadow: inset 1px 1px 3px hsl(var(--hue) 20% 70%);
  background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 75%) 80%);
}

.togglesw:checked ~ .button {
  left: 40%;
}

.togglesw:not(:checked) ~ .indicator.left,
.togglesw:checked ~ .indicator.right {
  box-shadow: inset 0 0 5px hsl(var(--hue) 20% 15% / 100%),
    inset 20px 20px 10px hsl(var(--hue) 20% 15% / 100%),
    inset 20px 20px 15px hsl(var(--hue) 20% 45% / 100%);
}

`
  },    
  {
    "name":"btn9",
    "html":`<div class="love">
  <input id="switch" type="checkbox">
  <label class="love-heart" for="switch">
    <i class="left"></i>
    <i class="right"></i>
    <i class="bottom"></i>
    <div class="round"></div>
  </label>
</div>

`,

    "css":`.love-heart:before,#switch {
 display: none;
}

.love-heart, .love-heart::after {
 border-color: hsl(231deg 28% 86%);
 border: 1px solid;
 border-top-left-radius: 100px;
 border-top-right-radius: 100px;
 width: 10px;
 height: 8px;
 border-bottom: 0
}

.round {
 position: absolute;
 z-index: 1;
 width: 8px;
 height: 8px;
 background: hsl(0deg 0% 100%);
 box-shadow: rgb(0 0 0 / 24%) 0px 0px 4px 0px;
 border-radius: 100%;
 left: 0px;
 bottom: -1px;
 transition: all .5s ease;
 animation: check-animation2 .5s forwards;
}

input:checked + label .round {
 transform: translate(0px, 0px);
 animation: check-animation .5s forwards;
 background-color: hsl(0deg 0% 100%);
}

@keyframes check-animation {
 0% {
  transform: translate(0px, 0px);
 }

 50% {
  transform: translate(0px, 7px);
 }

 100% {
  transform: translate(7px, 7px);
 }
}

@keyframes check-animation2 {
 0% {
  transform: translate(7px, 7px);
 }

 50% {
  transform: translate(0px, 7px);
 }

 100% {
  transform: translate(0px, 0px);
 }
}

.love-heart {
 box-sizing: border-box;
 position: relative;
 transform: rotate(-45deg) translate(-50%, -33px) scale(4);
 display: block;
 border-color: hsl(231deg 28% 86%);
 cursor: pointer;
 top: 0;
}

input:checked + .love-heart, input:checked + .love-heart::after, input:checked + .love-heart .bottom {
 border-color: hsl(347deg 81% 61%);
 box-shadow: inset 6px -5px 0px 2px hsl(347deg 99% 72%);
}

.love-heart::after, .love-heart .bottom {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 border-color: hsl(231deg 28% 86%);
}

.love-heart::after {
 right: -9px;
 transform: rotate(90deg);
 top: 7px;
}

.love-heart .bottom {
 width: 11px;
 height: 11px;
 border-left: 1px solid;
 border-bottom: 1px solid;
 border-color: hsl(231deg 28% 86%);
 left: -1px;
 top: 5px;
 border-radius: 0px 0px 0px 5px;
}

`
  },    
  {
    "name":"btn10",
    "html":`<label class="switchan">
  <input type="checkbox">
  <span class="slider"></span>
</label>
`,

    "css":`.switchan {
--button-width: 3.5em;
--button-height: 2em;
--toggle-diameter: 1.5em;
--button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
--toggle-shadow-offset: 10px;
--toggle-wider: 3em;
--color-grey: #cccccc;
--color-green: #4296f4;
}

.slider {
display: inline-block;
width: var(--button-width);
height: var(--button-height);
background-color: var(--color-grey);
border-radius: calc(var(--button-height) / 2);
position: relative;
transition: 0.3s all ease-in-out;
}

.slider::after {
content: "";
display: inline-block;
width: var(--toggle-diameter);
height: var(--toggle-diameter);
background-color: #fff;
border-radius: calc(var(--toggle-diameter) / 2);
position: absolute;
top: var(--button-toggle-offset);
transform: translateX(var(--button-toggle-offset));
box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
transition: 0.3s all ease-in-out;
}

.switchan input[type="checkbox"]:checked + .slider {
background-color: var(--color-green);
}

.switchan input[type="checkbox"]:checked + .slider::after {
transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

.switchan input[type="checkbox"] {
display: none;
}

.switchan input[type="checkbox"]:active + .slider::after {
width: var(--toggle-wider);
}

.switchan input[type="checkbox"]:checked:active + .slider::after {
transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
}
`
  },    
  {
    "name":"card1",
    "html":`<div class="card">
  <div class="card-inner">
    <div class="card-front">
      <p>Front Side</p>
    </div>
    <div class="card-back">
      <p>Back Side</p>
    </div>
  </div>
</div>

`,

    "css":`.card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #6A2C70;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #6A2C70;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #F08A5D;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #F08A5D;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}


`
  },    
  {
    "name":"card2",
    "html":`<div class="card1">
  <b></b>
  <div class="content">
    <p class="title">Some Fomous<br><span>Creative Designer</span></p>
    <ul class="sci">
      <li>
        <a href="#">
<ion-icon name="logo-linkedin"></ion-icon>         
</a>
      </li>

      <li>
        <a href="#">
<ion-icon name="logo-instagram"></ion-icon>        </a>
      </li>

      <li>
        <a href="#">
<ion-icon name="logo-twitter"></ion-icon>         </a>
      </li>

      <li>
        <a href="#">
<ion-icon name="logo-github"></ion-icon>        </a>
      </li>
    </ul>
  </div>
</div>
`,

    "css":`.card1 {
  position: relative;
  width: 190px;
  height: 254px;
  background: #f00;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg,#03a9f4,#ff0058);
}

.card1::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg,#03a9f4,#ff0058);
  filter: blur(30px);
}

.card1 b {
  position: absolute;
  inset: 6px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
}

.card1 img {
  position: absolute;
  z-index: 3;
  scale: 0.8;
  opacity: 0.25;
  transition: 0.5s;
}

.card1:hover img {
  scale: 0.5;
  opacity: 0.9;
  transform: translateY(-70px);
}

.card1 .content {
  position: absolute;
  z-index: 3;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  transition: 0.5s;
}

.card1:hover .content {
  transform: scale(1);
  bottom: 25px;
}

.content .title {
  position: relative;
  color: #fff;
  font-weight: 500;
  line-height: 1em;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
}

.content .title span {
  font-weight: 300;
  font-size: 0.70em;
}

.content .sci {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 5px;
}

.sci li {
  list-style: none;
}

.sci li .fa-brands {
  width: 14px;
}

.sci li .fa-facebook {
  width: 10px;
}

.sci li a {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  fill: currentColor;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: 0.5s;
}

.sci li a:hover {
  fill: currentColor;
  color: rgba(255, 255, 255, 1);
}

`
  },    
  {
    "name":"card3",
    "html":`<div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div class="tracker tr-10"></div>
    <div class="tracker tr-11"></div>
    <div class="tracker tr-12"></div>
    <div class="tracker tr-13"></div>
    <div class="tracker tr-14"></div>
    <div class="tracker tr-15"></div>
    <div class="tracker tr-16"></div>
    <div class="tracker tr-17"></div>
    <div class="tracker tr-18"></div>
    <div class="tracker tr-19"></div>
    <div class="tracker tr-20"></div>
    <div class="tracker tr-21"></div>
    <div class="tracker tr-22"></div>
    <div class="tracker tr-23"></div>
    <div class="tracker tr-24"></div>
    <div class="tracker tr-25"></div>
    <div id="card">
    <p id="prompt">HOVER OVER :D</p>
      <div class="title">look mom,<br>no JS</div>
      <div class="subtitle">
        mouse hover tracker
      </div>
      
    </div>
  </div>
</div>
`,

    "css":`
.container {
  position: relative;
  width: 190px;
  height: 254px;
  transition: 200ms;
}

.container:active {
  width: 180px;
  height: 245px;
}

#card {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 700ms;
  background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
}

.subtitle {
  transform: translateY(160px);
  color: rgb(134, 110, 221);
  text-align: center;
  width: 100%;
}

.title {
  opacity: 0;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out-out;
  transition-delay: 100ms;
  position: absolute;
  font-size: x-large;
  font-weight: bold;
  color: white;
}

.tracker:hover ~ #card .title {
  opacity: 1;
}

#prompt {
  bottom: 8px;
  left: 12px;
  z-index: 20;
  font-size: 20px;
  font-weight: bold;
  transition: 300ms ease-in-out-out;
  position: absolute;
  max-width: 110px;
  color: rgb(255, 255, 255);
}

.tracker {
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
}

.tracker:hover {
  cursor: pointer;
}

.tracker:hover ~ #card #prompt {
  opacity: 0;
}

.tracker:hover ~ #card {
  transition: 300ms;
  filter: brightness(1.1);
}

.container:hover #card::before {
  transition: 200ms;
  content: '';
  opacity: 80%;
}

.canvas {
  perspective: 800px;
  inset: 0;
  z-index: 200;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: "tr-1 tr-2 tr-3 tr-4 tr-5"
    "tr-6 tr-7 tr-8 tr-9 tr-10"
    "tr-11 tr-12 tr-13 tr-14 tr-15"
    "tr-16 tr-17 tr-18 tr-19 tr-20"
    "tr-21 tr-22 tr-23 tr-24 tr-25";
}

#card::before {
  content: '';
  background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
  filter: blur(2rem);
  opacity: 30%;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  transition: 200ms;
}

.tr-1 {
  grid-area: tr-1;
}

.tr-2 {
  grid-area: tr-2;
}

.tr-3 {
  grid-area: tr-3;
}

.tr-4 {
  grid-area: tr-4;
}

.tr-5 {
  grid-area: tr-5;
}

.tr-6 {
  grid-area: tr-6;
}

.tr-7 {
  grid-area: tr-7;
}

.tr-8 {
  grid-area: tr-8;
}

.tr-9 {
  grid-area: tr-9;
}

.tr-10 {
  grid-area: tr-10;
}

.tr-11 {
  grid-area: tr-11;
}

.tr-12 {
  grid-area: tr-12;
}

.tr-13 {
  grid-area: tr-13;
}

.tr-14 {
  grid-area: tr-14;
}

.tr-15 {
  grid-area: tr-15;
}

.tr-16 {
  grid-area: tr-16;
}

.tr-17 {
  grid-area: tr-17;
}

.tr-18 {
  grid-area: tr-18;
}

.tr-19 {
  grid-area: tr-19;
}

.tr-20 {
  grid-area: tr-20;
}

.tr-21 {
  grid-area: tr-21;
}

.tr-22 {
  grid-area: tr-22;
}

.tr-23 {
  grid-area: tr-23;
}

.tr-24 {
  grid-area: tr-24;
}

.tr-25 {
  grid-area: tr-25;
}

.tr-1:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-2:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-3:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
}

.tr-4:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
}

.tr-5:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
}

.tr-6:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-7:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-8:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
}

.tr-9:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
}

.tr-10:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
}

.tr-11:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-12:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-13:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.tr-14:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
}

.tr-15:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
}

.tr-16:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-17:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-18:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
}

.tr-19:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
}

.tr-20:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
}

.tr-21:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-22:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-23:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
}

.tr-24:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
}

.tr-25:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
}

.noselect {
  -webkit-touch-callout: none;
   /* iOS Safari */
  -webkit-user-select: none;
   /* Safari */
   /* Konqueror HTML */
  -moz-user-select: none;
   /* Old versions of Firefox */
  -ms-user-select: none;
   /* Internet Explorer/Edge */
  user-select: none;
   /* Non-prefixed version, currently
									supported by Chrome, Edge, Opera and Firefox */
}

`
  },    
  {
    "name":"card4",
    "html":`<div class="card4">
    <h2>CARD</h2>
</div>
`,

    "css":`.card4 {
  width: 190px;
  height: 254px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.card4 h2 {
  z-index: 1;
  color: white;
  font-size: 2em;
}

.card4::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card4::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}  
/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */


`
  },    
  {
    "name":"card5",
    "html":`<div class="card5">
  <div class="card-details">
    <p class="text-title">Card title</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  <button class="card-button">More info</button>
</div>
`,

    "css":`.card5 {
 width: 190px;
 height: 254px;
 border-radius: 20px;
 background: #f5f5f5;
 position: relative;
 padding: 1.8rem;
 border: 2px solid #c3c6ce;
 transition: 0.5s ease-out;
 overflow: visible;
}

.card-details {
 color: black;
 height: 100%;
 gap: .5em;
 display: grid;
 place-content: center;
}

.card-button {
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: #008bf8;
 color: #fff;
 font-size: 1rem;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
}

.text-body {
 color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
 font-size: 1.5em;
 font-weight: bold;
}

/*Hover*/
.card5:hover {
  border:2px solid #008bf8;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card5:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}

`
  },    
  {
    "name":"card6",
    "html":`<div class="card6">
  <div class="headercard">
    <div class="topcard">
      <div class="circlecard">
        <span class="red circle2"></span>
      </div>
      <div class="circlecard">
        <span class="yellow circle2"></span>
      </div>
      <div class="circlecard">
        <span class="green circle2"></span>
      </div>
      <div class="titlecard">
        <p id="title2">style.css</p>
      </div>
    </div>
  </div>
  <div class="code-container">
    <textarea readonly="" name="code" id="code" class="area">
.card {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  background-color: #24233b;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 0px 10px 10px rgb(73, 70, 92);
  transition: 0.5s;
}

.card:hover {
  transform: translateY(-7px);
  box-shadow: 0px 10px 10px black;
}

.top {
  display: flex;
  align-items: center;
  padding-left: 10px;
}</textarea
    >
  </div>
</div>

`,

    "css":`.card6 {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  background-color: #24233b;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 0px 10px 10px rgb(73, 70, 92);
  transition: 0.5s;
}

.card6:hover {
  transform: translateY(-7px);
  box-shadow: 0px 10px 10px black;
}

.topcard {
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.circlecard {
  padding: 0 4px;
}

.circle2 {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 5px;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}

.headercard {
  margin: 5px;
  margin-top: 5px;
  border-radius: 5px;
}

#title2 {
  color: white;
  padding-left: 50px;
  font-size: 15px;
}

.code-container {
  text-align: center;
}
#code {
  width: 270px;
  height: 350px;
  resize: none;
  background-color: rgb(73, 70, 92);
  border-radius: 5px;
  border: none;
  color: white;
  padding: 10px;
}
#code:focus {
  outline: none !important;
}

`
  },    
  {
    "name":"card7",
    "html":`<div class="card7">
      <div class="content7">
        <div class="title7">Personal edition</div>
        <div class="price">$39.99</div>
        <div class="description7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
      </div>
        <button class="button7card">
          Buy now
        </button>
  </div>
`,

    "css":`.card7 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 260px;
  padding: 20px 1px;
  margin: 10px 0;
  text-align: center;
  position: relative;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(33,150,243,.4),0 4px 6px -4px rgba(33,150,243,.4);
  border-radius: 10px;
  background-color: #6B6ECC;
  background: linear-gradient(45deg, #04051dea 0%, #2b566e 100%);
}

.content7 {
  padding: 20px;
}

.content7 .price {
  color: white;
  font-weight: 800;
  font-size: 50px;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
}

.content7 .description7 {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  font-size: 14px;
}

.content7 .title7 {
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.64);
  margin-top: 10px;
  font-size: 25px;
  letter-spacing: 1px;
}

.button7card {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: none;
  outline: none;
  color: rgb(255 255 255);
  text-transform: uppercase;
  font-weight: 700;
  font-size: .75rem;
  padding: 0.75rem 1.5rem;
  background-color: rgb(33 150 243);
  border-radius: 0.5rem;
  width: 90%;
  text-shadow: 0px 4px 18px #2c3442;
}


`
  },    
  {
    "name":"card8",
    "html":`<div class="card8">
 <div class="image8"></div>
  <div class="content8">
    <a href="#">
      <span class="title8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </a>

    <p class="desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium 
    </p>

    <a class="action8" href="#">
      Find out more
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>
`,

    "css":`.card8 {
  max-width: 300px;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
}

.card8 a {
  text-decoration: none
}

.content8 {
  padding: 1.1rem;
}

.image8 {
  object-fit: cover;
  width: 100%;
  height: 150px;
  background-color: rgb(239, 205, 255);
}

.title8 {
  color: #111827;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.desc {
  margin-top: 0.5rem;
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.action8 {
  display: inline-flex;
  margin-top: 1rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: #2563EB;
  padding: 4px 8px;
  border-radius: 4px;
}

.action8 span {
  transition: .3s ease;
}

.action8:hover span {
  transform: translateX(4px);
}


`
  },    
  {
    "name":"card9",
    "html":`<div class="section-banner">
  <div id="star-1">
    <div class="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div class="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-2">
    <div class="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div class="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-3">
    <div class="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div class="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-4">
    <div class="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div class="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-5">
    <div class="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div class="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-6">
    <div class="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div class="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-7">
    <div class="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div class="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>
</div>

`,

    "css":`.section-banner {
  height: 250px;
  width: 250px;
  position: relative;
  transition: left 0.3s linear;
  background: url("data:image/jpeg;base64,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");
  background-size: cover;
  background-position: left;
  bottom: 0px;
  border-radius: 50%;
  animation: earthRotate 30s linear 0s infinite;
  box-shadow: 0px 0 20px RGBA(255, 255, 255, 0.2), -5px 0px 8px #c3f4ff inset,
    15px 2px 25px #000 inset, -24px -2px 34px #c3f4ff99 inset,
    250px 0px 44px #00000066 inset, 150px 0px 38px #000000aa inset;
}
@keyframes earthRotate {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400px 0;
  }
}

.curved-corner-star {
  display: flex;
  position: relative;
}

#curved-corner-bottomleft,
#curved-corner-bottomright,
#curved-corner-topleft,
#curved-corner-topright {
  width: 4px;
  height: 5px;
  overflow: hidden;
  position: relative;
}

#curved-corner-bottomleft:before,
#curved-corner-bottomright:before,
#curved-corner-topleft:before,
#curved-corner-topright:before {
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 50%;
}

#curved-corner-bottomleft:before {
  bottom: 0;
  left: 0;
  box-shadow: -5px 5px 0 0 white;
}

#curved-corner-bottomright:before {
  bottom: 0;
  right: 0;
  box-shadow: 5px 5px 0 0 white;
}

#curved-corner-topleft:before {
  top: 0;
  left: 0;
  box-shadow: -5px -5px 0 0 white;
}

#curved-corner-topright:before {
  top: 0;
  right: 0;
  box-shadow: 5px -5px 0 0 white;
}

@keyframes twinkling {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
}

#star-1 {
  position: absolute;
  left: -20px;
  animation: twinkling 3s infinite;
}

#star-2 {
  position: absolute;
  left: -40px;
  top: 30px;
  animation: twinkling 2s infinite;
}
#star-3 {
  position: absolute;
  left: 350px;
  top: 90px;
  animation: twinkling 4s infinite;
}
#star-4 {
  position: absolute;
  left: 200px;
  top: 290px;
  animation: twinkling 3s infinite;
}
#star-5 {
  position: absolute;
  left: 50px;
  top: 270px;
  animation: twinkling 1.5s infinite;
}

#star-6 {
  position: absolute;
  left: 250px;
  top: -50px;
  animation: twinkling 4s infinite;
}
#star-7 {
  position: absolute;
  left: 290px;
  top: 60px;
  animation: twinkling 2s infinite;
}


`
  },    
  {
    "name":"form1",
    "html":`<div class="form-container">
      <div class="logo-container">
        Forgot Password
      </div>

      <form class="form1">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email" required="">
        </div>

        <button class="form-submit-btn" type="submit">Send Email</button>
      </form>

      <p class="signup-link">
        Don't have an account?
        <a href="#" class="signup-link link"> Sign up now</a>
      </p>
    </div>
`,

    "css":`.form-container {
  max-width: 400px;
  background-color: #fff;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.form-container button:active {
  scale: 0.95;
}

.form-container .logo-container {
  text-align: center;
  font-weight: 600;
  font-size: 18px;
}

.form-container .form {
  display: flex;
  flex-direction: column;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: inherit;
  border: 1px solid #ccc;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #1778f2;
}

.form-container .form-submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  color: #fff;
  background-color: #212121;
  border: none;
  width: 100%;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.form-container .form-submit-btn:hover {
  background-color: #313131;
}

.form-container .link {
  color: #1778f2;
  text-decoration: none;
}

.form-container .signup-link {
  align-self: center;
  font-weight: 500;
}

.form-container .signup-link .link {
  font-weight: 400;
}

.form-container .link:hover {
  text-decoration: underline;
}


`
  },    
  {
    "name":"form2",
    "html":`<form class="form2">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input type="email" placeholder="Enter email">
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password">
        </div>
         <button type="submit" class="submit">
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
   </form>

`,

    "css":`.form2 {
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 350px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
}

.input-container input, .form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4F46E5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
}

.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}

`
  },    
  {
    "name":"form3",
    "html":`<form action="" class="form_main">
    <p class="heading">Login</p>
    <div class="inputContainer">
        <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
        </svg>
    <input type="text" class="inputField" id="username" placeholder="Username">
    </div>
    
<div class="inputContainer">
    <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
    <input type="password" class="inputField" id="password" placeholder="Password">
</div>
              
           
<button id="button">Submit</button>
    <a class="forgotLink" href="#">Forgot your password?</a>
</form>

`,

    "css":`.form_main {
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding: 30px 30px 30px 30px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  position: relative;
  overflow: hidden;
}

.form_main::before {
  position: absolute;
  content: "";
  width: 300px;
  height: 300px;
  background-color: rgb(209, 193, 255);
  transform: rotate(45deg);
  left: -180px;
  bottom: 30px;
  z-index: 1;
  border-radius: 30px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.082);
}

.heading {
  font-size: 2em;
  color: #2e2e2e;
  font-weight: 700;
  margin: 5px 0 10px 0;
  z-index: 2;
}

.inputContainer {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.inputIcon {
  position: absolute;
  left: 3px;
}

.inputField {
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgb(173, 173, 173);
  margin: 10px 0;
  color: black;
  font-size: .8em;
  font-weight: 500;
  box-sizing: border-box;
  padding-left: 30px;
}

.inputField:focus {
  outline: none;
  border-bottom: 2px solid rgb(199, 114, 255);
}

.inputField::placeholder {
  color: rgb(80, 80, 80);
  font-size: 1em;
  font-weight: 500;
}

#button {
  z-index: 2;
  position: relative;
  width: 100%;
  border: none;
  background-color: rgb(162, 104, 255);
  height: 30px;
  color: white;
  font-size: .8em;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 10px;
  cursor: pointer;
}

#button:hover {
  background-color: rgb(126, 84, 255);
}

.forgotLink {
  z-index: 2;
  font-size: .7em;
  font-weight: 500;
  color: rgb(44, 24, 128);
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 20px;
}


`
  },    
  {
    "name":"loader1",
    "html":`<div class="loader">
    <span></span>
</div>

`,

    "css":`.loader {
  position: relative;
  width: 150px;
  height: 150px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 25px 25px 75px rgba(0,0,0,0.55);
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loader::before {
  content: '';
  position: absolute;
  inset: 20px;
  background: transparent;
  border: 1px dashed#444;
  border-radius: 50%;
  box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
  inset 5px 5px 35px rgba(0,0,0,0.25);
}

.loader::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed#444;
  box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
  inset 5px 5px 35px rgba(0,0,0,0.25);
}

.loader span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 100%;
  background: transparent;
  transform-origin: top left;
  animation: radar81 2s linear infinite;
  border-top: 1px dashed #fff;
}

.loader span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: seagreen;
  transform-origin: top left;
  transform: rotate(-55deg);
  filter: blur(30px) drop-shadow(20px 20px 20px seagreen);
}

@keyframes radar81 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`
  },    
  {
    "name":"input1",
    "html":`<div class="searchBox">
            <input class="searchInput" type="text" name="" placeholder="Search something">
            <button class="searchButton" href="#">
            <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>        
`,

    "css":`.searchBox {
  display: flex;
  width: 370px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: #2f3640;
  border-radius: 50px;
  position: relative;
}

.searchButton {
  color: white;
  position: absolute;
  right: 8px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-2, linear-gradient(90deg, #2AF598 0%, #009EFD 100%));
  border: 0;
  display: inline-block;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
}
/*hover effect*/
button:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
  transform: translateY(-3px);
}
/*button pressing effect*/
button:active {
  box-shadow: none;
  transform: translateY(0);
}

.searchInput {
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 15px;
  padding: 24px 46px 24px 26px;
}


`
  },    
  {
    "name":"input2",
    "html":`<input type="text" placeholder="Write here..." name="text" class="inputnew">   
`,

    "css":`.inputnew {
  border-radius: 10px;
  outline: 2px solid #FEBF00;
  border: 0;
  width:360px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;
}

.inputnew:focus {
  outline-offset: 5px;
  background-color: #fff
}
`
  },    
  
    
]

  return (
    <>
    <Navbar/>
      <div className="doccontainer">
      
      {code.map((element, index) => (
        
            <Components key={index} name={element.name} output={<div className={element.name}>{element.text}</div>} html={element.html} css={element.css} />
          ))}
               
      </div>
      
    </>
  )
}

export default Documentation
