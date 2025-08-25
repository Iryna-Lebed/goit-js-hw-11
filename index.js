import{a as d,S as m,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="51939816-d2a4c418c191417f29ceae84e",y="https://pixabay.com/api/";async function h(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(y,{params:r})).data}const l=document.querySelector(".gallery"),f=document.querySelector(".loader");let L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:u})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><span>Likes</span><span>${t}</span></p>
        <p><span>Views</span><span>${a}</span></p>
        <p><span>Comments</span><span>${p}</span></p>
        <p><span>Downloads</span><span>${u}</span></p>
      </div>
    </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){l.innerHTML=""}function S(){f.classList.remove("hidden")}function v(){f.classList.add("hidden")}const i=document.querySelector(".form");i.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){c.error({title:"Error",message:"Please enter a search term!",backgroundColor:"#ff4d4f",titleColor:"#fff",messageColor:"#fff",position:"topRight"}),i.reset();return}w(),S();try{const o=await h(r);if(o.hits.length===0){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.reset();return}b(o.hits),i.reset()}catch{c.error({title:"Error",message:"Something went wrong!",backgroundColor:"#ff4d4f",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
