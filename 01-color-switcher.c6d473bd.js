!function(){var t,e=document.querySelector("body"),n=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");n.addEventListener("click",(function(){if(t)return;t=setInterval((function(){e.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3)})),r.addEventListener("click",(function(){if(!t)return;clearInterval(t),t=!1}))}();
//# sourceMappingURL=01-color-switcher.c6d473bd.js.map