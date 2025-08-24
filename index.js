import{a as u,S as m,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="51939816-d2a4c418c191417f29ceae84e",y="https://pixabay.com/api/";async function h(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(y,{params:r})).data}const c=document.querySelector(".gallery"),f=document.querySelector(".loader");let L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:p,downloads:d})=>`
    <li class="gallery-item">
      <a href="${i}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><span>Likes</span><span>${t}</span></p>
        <p><span>Views</span><span>${n}</span></p>
        <p><span>Comments</span><span>${p}</span></p>
        <p><span>Downloads</span><span>${d}</span></p>
      </div>
    </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){c.innerHTML=""}function S(){f.classList.remove("hidden")}function v(){f.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term!",backgroundColor:"#ff4d4f",titleColor:"#fff",messageColor:"#fff",position:"topRight"}),l.reset();return}w(),S(),a.info({title:"Loading",message:"Loading images, please wait...",position:"topRight",timeout:!1,close:!1});try{const o=await h(r);if(a.destroy(),o.hits.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.reset();return}b(o.hits),l.reset()}catch{a.destroy(),a.error({title:"Error",message:"Something went wrong!",backgroundColor:"#ff4d4f",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
