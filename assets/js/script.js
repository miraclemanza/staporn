'use strict';
const sidebar=document.querySelector("[data-sidebar]"),sbtn=document.querySelector("[data-sidebar-btn]");
sbtn.addEventListener("click",()=>sidebar.classList.toggle("active"));
const links=document.querySelectorAll("[data-nav-link]"),pages=document.querySelectorAll("[data-page]");
function show(name){pages.forEach(p=>p.classList.toggle("active",p.dataset.page===name));links.forEach(l=>l.classList.toggle("active",l.textContent.trim().toLowerCase()===name));window.scrollTo(0,0);}
links.forEach(l=>l.addEventListener("click",()=>show(l.textContent.trim().toLowerCase())));
if(location.hash)show(location.hash.slice(1));
