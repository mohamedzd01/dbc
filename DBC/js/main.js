

import XHR from './XHR.js';
import getLocalStorgeItem,{setDark,setLang} from './Functions.js'

let isDark = getLocalStorgeItem("mode","light","dark",false);

console.log(setDark(isDark));


let sections = document.querySelectorAll(".sections  .section") ;
let strtBtn = document.querySelector(".sections .btn") ;
let spec = document.querySelector(".sections .section.active").dataset.spcial;



let isAr = getLocalStorgeItem("lang","an","عر",true);
let lang = isAr ? "ar":"an";
let xhr = new XHR(lang,spec);
isAr = setLang(isAr,xhr);

strtBtn.addEventListener("click",(e)=>{
    document.querySelector(".sections").classList.remove("active");
    document.querySelector(".infos").classList.add("active");
    xhr.newXHR();

})
document.querySelector(".infos .btn").addEventListener("click",(e)=>{
    document.querySelector(".sections").classList.add("active");
    document.querySelector(".infos").classList.remove("active");

})
sections.forEach(ele=>{

ele.addEventListener("click",(e)=>{

    document.querySelector(".sections .section.active").classList.remove("active");
    e.currentTarget.classList.add("active");
     xhr.setSpeciality(e.currentTarget.dataset.spcial)
})
})