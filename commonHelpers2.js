import"./assets/reset-41fa52ec.js";import{i as o}from"./assets/vendor-651d7991.js";const l=document.querySelector("form");l.addEventListener("submit",t=>{a(t).then(e=>o.success({title:"OK",message:`Fulfilled promise in ${e}ms`,position:"topRight",titleColor:"white",messageColor:"white",timeout:!1,backgroundColor:"#59A10D"})).catch(e=>o.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight",titleColor:"white",messageColor:"white",timeout:!1,backgroundColor:"#EF4040"}))});function a(t){t.preventDefault();const e=t.currentTarget.elements.delay.value,r=t.currentTarget.elements.state.value;return new Promise((s,i)=>{setTimeout(()=>{r==="fulfilled"?s(e):i(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map