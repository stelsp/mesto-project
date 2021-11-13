(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>P});var t=document.querySelector(".popup_type_photo"),n=document.querySelector(".profile__photo"),o=document.querySelector(".popup__close-button_type_photo"),r=document.querySelector(".popup__input_type_photo"),c=document.querySelector("#popup__form_type_photo"),u=document.querySelector(".popup_type_profile"),a=document.querySelector(".profile__edit-button"),i=document.querySelector(".popup__close-button_type_profile"),l=document.querySelector(".popup__input_type_name"),s=document.querySelector(".popup__input_type_quote"),d=document.querySelector(".profile__name"),p=document.querySelector(".profile__quote"),f=document.querySelector(".elements__list"),_=document.querySelector("#elements__template").content,m="elements__like-button_active",y=document.querySelector(".popup_type_card-add"),h=document.querySelector(".profile__add-button"),v=document.querySelector(".popup__close-button_type_card-add"),S=document.querySelector(".popup__input_type_image"),b=document.querySelector(".popup__input_type_title"),q=document.querySelector("#popup__form_type_card-add"),E=document.querySelector(".popup_type_picture"),g=document.querySelector(".popup__close-button_type_picture"),L=document.querySelector(".image__pic"),k=document.querySelector(".image__title"),C={baseUrl:"https://mesto.nomoreparties.co/v1/plus-cohort-3",headers:{authorization:"bb5f0ee9-ef64-4836-93fe-6fc2439d86be","Content-Type":"application/json"}},x=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status+" - "+e.statusText))},A=function(e,t){return fetch("".concat(C.baseUrl,"/cards/likes/").concat(e),{method:t,headers:C.headers}).then(x)};function w(e){e.classList.add("popup_opened"),document.addEventListener("mousedown",T),document.addEventListener("keydown",O)}function U(e){e.classList.remove("popup_opened"),document.removeEventListener("mousedown",T),document.removeEventListener("keydown",O)}var O=function(e){"Escape"===e.key&&U(document.querySelector(".popup_opened"))},T=function(e){e.target.classList.contains("popup")&&U(e.target)};function j(e){var t,n,o=_.querySelector(".elements__cell").cloneNode(!0),r=o.querySelector(".elements__image"),c=o.querySelector(".elements__name");return r.src=e.link,r.alt="Фото "+e.name,c.textContent=e.name,e.owner._id!=P&&(o.querySelector(".elements__delete-button").style.display="none"),function(e,t){t.querySelector(".elements__delete-button").addEventListener("click",(function(){var n;(n=e._id,fetch("".concat(C.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:C.headers}).then(x)).then((function(){t.remove()})).catch((function(e){console.log(e)}))}))}(e,o),function(e,t){var n=t.querySelector(".elements__like-counter"),o=t.querySelector(".elements__like-button");n.textContent=e.likes.length.toString(),e.likes.some((function(e){return e._id==P}))&&o.classList.add(m),o.addEventListener("click",(function(){o.classList.contains(m)?A(e._id,"DELETE").then((function(t){o.classList.remove(m),e.likes=t.likes,n.textContent=t.likes.length.toString()})).catch((function(e){console.log(e)})):A(e._id,"PUT").then((function(t){o.classList.add(m),e.likes=t.likes,n.textContent=t.likes.length.toString()})).catch((function(e){console.log(e)}))}))}(e,o),t=e.name,n=e.link,o.querySelector(".elements__image").addEventListener("click",(function(){w(E),L.src=n,L.alt="Фото "+t,k.textContent=t})),o}var P,D=function(e,t){!function(e){return e.every((function(e){return e.validity.valid}))}(t)?e.disabled=!0:e.disabled=!1};function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}Promise.all([fetch("".concat(C.baseUrl,"/users/me"),{headers:C.headers}).then(x),fetch("".concat(C.baseUrl,"/cards"),{headers:C.headers}).then(x)]).then((function(e){var t,o,r=(o=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);u=!0);}catch(e){a=!0,r=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw r}}return c}}(t,o)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],u=r[1];n.src=c.avatar,d.textContent=c.name,p.textContent=c.about,P=c._id,I(u)})).catch((function(e){console.log(e)}));var I=function(e){e.forEach((function(e){f.append(j(e))}))};function J(e,t,n,o){var r=t.querySelector(".popup__submit-button");r.disabled=o,r.textContent="".concat(n),e&&(r.textContent="Сохранение...")}g.addEventListener("click",(function(){U(E)})),n.addEventListener("click",(function(){w(t)})),o.addEventListener("click",(function(){U(t)})),t.addEventListener("submit",(function(e){var o;e.preventDefault(),J(!0,t),(o=r,fetch("".concat(C.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:C.headers,body:JSON.stringify({avatar:o.value})}).then(x)).then((function(e){n.src=e.avatar,U(t),c.reset()})).catch((function(e){console.log(e)})).finally((function(){J(!1,t,"Сохранить",!0)}))})),a.addEventListener("click",(function(){l.value=d.textContent,s.value=p.textContent,w(u)})),i.addEventListener("click",(function(){U(u)})),u.addEventListener("submit",(function(e){var t,n;e.preventDefault(),J(!0,u),(t=l,n=s,fetch("".concat(C.baseUrl,"/users/me"),{method:"PATCH",headers:C.headers,body:JSON.stringify({name:t.value,about:n.value})}).then(x)).then((function(e){d.textContent=e.name,p.textContent=e.about,U(u)})).catch((function(e){console.log(e)})).finally((function(){J(!1,u,"Сохранить",!0)}))})),h.addEventListener("click",(function(){w(y)})),v.addEventListener("click",(function(){U(y)})),y.addEventListener("submit",(function(e){var t,n;e.preventDefault(),J(!0,y),(t=b,n=S,fetch("".concat(C.baseUrl,"/cards"),{method:"POST",headers:C.headers,body:JSON.stringify({name:t.value,link:n.value})}).then(x)).then((function(e){f.prepend(j(e)),U(y),q.reset()})).catch((function(e){console.log(e)})).finally((function(){J(!1,y,"Создать",!0)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){e.addEventListener("submit",(function(e){e.preventDefault()}));var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.buttonSelector);n.forEach((function(e){e.addEventListener("input",(function(){(function(e,t){e.validity.valid?function(e,t){document.querySelector("#".concat(e.name,"-error")).textContent="",e.classList.remove(t.inputErrorClass)}(e,t):function(e,t){document.querySelector("#".concat(e.name,"-error")).textContent=e.validationMessage,e.classList.add(t.inputErrorClass)}(e,t)})(e,t),D(o,n)})),D(o,n)}))}(t,e)}))}({formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__submit-button",inputErrorClass:"popup__input_error"})})();