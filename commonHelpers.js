import"./assets/reset-41fa52ec.js";import{f as h,i as v}from"./assets/vendor-651d7991.js";let l,i=null;const e=document.querySelector("button[data-start]"),n=document.querySelector("#datetime-picker");e.disabled=!0;let c=!1;const a=document.querySelectorAll(".value");e.addEventListener("click",p);h("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){l=t[0],l-new Date<0?(e.disabled=!0,e.classList.remove("active-btn"),v.error({title:"Error",message:"Please choose a date in the future",position:"topRight",titleColor:"white",messageColor:"white",timeout:!1,backgroundColor:"#EF4040"})):(e.disabled=!1,e.classList.add("active-btn"))}});function b(t){const d=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:m,seconds:f}}function r(t){return t.toString().padStart(2,"0")}function p(){c&&clearInterval(i),c=!0,e.disabled=!0,e.classList.remove("active-btn"),n.disabled=!0,n.classList.add("disable-input"),i=setInterval(()=>{const t=Date.now(),s=l-t;s<1e3&&(clearInterval(i),n.disabled=!1,n.classList.remove("disable-input"));const o=b(s);a[0].textContent=r(o.days),a[1].textContent=r(o.hours),a[2].textContent=r(o.minutes),a[3].textContent=r(o.seconds)},1e3)}
//# sourceMappingURL=commonHelpers.js.map