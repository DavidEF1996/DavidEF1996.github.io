function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));let habilitar=!1;function play(){const e=new Audio("./video/audio.mp3"),t=document.querySelector(".boton");1==habilitar?t.disabled:(e.play(),e.loop=!0,habilitar=!0)}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),a=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),a.classList.add("body-scroll")):(e.classList.remove("fijo"),a.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){document.querySelector(".galeria-imagenes");for(let e=1;e<=12;e++){const t=document.createElement("picture");t.innerHTML=`\n            <source srcset="build/img/thumb/${e}.avif" type="image/avif">\n            <source srcset="build/img/thumb/${e}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/thumb/${e}.jpg" alt="imagen galeria">\n        `,t.onclick=function(){mostrarImagen(e)}}}function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/grande/${e}.avif" type="image/avif">\n        <source srcset="build/img/grande/${e}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria">\n    `;const a=document.createElement("DIV");a.appendChild(t),a.classList.add("overlay"),a.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),a.remove()};const n=document.createElement("P");n.textContent="X",n.classList.add("btn-cerrar"),n.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),a.remove()},a.appendChild(n);const i=document.querySelector("body");i.appendChild(a),i.classList.add("fijar-body")}var textWrapper=document.querySelector(".ml6 .letters");textWrapper.innerHTML=textWrapper.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),anime.timeline({loop:!0}).add({targets:".ml6 .letter",translateY:["1.1em",0],translateZ:0,duration:750,delay:(e,t)=>50*t}).add({targets:".ml6",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3}),anime.timeline({loop:!0}).add({targets:".ml15 .word",scale:[14,1],opacity:[0,1],easing:"easeOutCirc",duration:1500,delay:(e,t)=>800*t}).add({targets:".ml15",opacity:0,duration:2e3,easing:"easeOutExpo",delay:1e3});
//# sourceMappingURL=app.js.map
