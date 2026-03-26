import{a as u,S as f,i as n}from"./assets/vendor-dNBuWDsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(s){return u.get("https://pixabay.com/api/",{params:{key:"55127817-55120131a00f673dd7cbfbc42",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),m=new f(".gallery a");function p(s){const o=s.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
      <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
      </a>
    <div class="gallery-description">
    <p>Likes ${t.likes}</p>
    <p>Views ${t.views}</p>
    <p>Comments ${t.comments}</p>
    <p>Downloads ${t.downloads}</p>
    </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",o),m.refresh()}function g(){l.innerHTML=""}const c=document.querySelector(".loader");function h(){c.classList.add("is-visible")}function y(){c.classList.remove("is-visible")}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const t=new FormData(s.target).get("search-text").trim();t&&(g(),h(),d(t).then(i=>{if(!i.hits.length){n.show({message:"Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white"});return}p(i.hits)}).catch(i=>{n.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white"})}).finally(()=>{y()}))});
//# sourceMappingURL=index.js.map
