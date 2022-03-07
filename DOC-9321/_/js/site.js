!function(){"use strict";var t=document.querySelector(".nav"),e=t&&t.querySelector(".menu-expand-toggle");e&&e.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("collapse-menu")});var n=document.querySelector(".nav-container");if(n){if(!n.querySelector(".components")){if(!window.siteNavigationData)return;var i=window.siteNavigationData.reduce(function(e,t){return(e[t.name]=t)&&e},{}),r=document.getElementById("page-versions"),e=document.getElementById("page-navigation-group");if(!e)return;!function(e,l,d,u,p){var v,t=f("div","components is-revealed");{var n,i;1===u.components.length&&u.title===p[u.components[0]].title.replace(/^Couchbase | Database$/,"")?v=!0:(n=f("div","components_group-title"),u.url?((i=f("a")).href=h(l.url,u.url),i.appendChild(document.createTextNode(u.title)),n.appendChild(i)):n.appendChild(document.createTextNode(u.title)),t.appendChild(n))}var m=f("ul","components_list");u.components.forEach(function(r){var o,s,n,e=p[r],a=f("li","components_list-items"),c=r===l.component?l.version:u.latestVersions[r],t=f("div","component_list-version"),i=f("span","component_list_title");i.appendChild(document.createTextNode(e.title)),t.appendChild(i),(s=c&&"master"!==c)&&(r===l.component&&d?n=d.content.querySelector(".version_list"):(n=f("select","version_list"),e.versions.forEach(function(e){var t=f("option");t.value=e.version,e.version===c&&t.setAttribute("selected",""),t.appendChild(document.createTextNode(e.displayVersion||e.version)),n.appendChild(t)})),t.appendChild(n)),a.appendChild(t),e.versions.forEach(function(e,t){var n=f("div","version_items");n.dataset.version=e.version;var i=!0;(i=l.component===r&&l.version===e.version||v&&(!s||e.version===c)?!1:i)&&n.classList.add("hide");e=e.sets;(e=1===e.length&&!e[0].content?e[0].items:e).length&&e[0].content&&e[0].content.endsWith(" Home")&&e.splice.apply(e,[0,1].concat(e[0].items||[])),function r(e,t,o,s){if(!(e||[]).length)return;var a=f("ul","menu_row");s=s.concat(a);e.forEach(function(e){null==e.content&&1===e.items.length&&(e=e.items[0]);var t=f("li","menu_list");t.dataset.depth=s.length-1;var n,i=f("span","menu_line");e.url?((n=f("a","menu_title menu_link")).href=h(o.url,e.url),o.url===e.url&&(t.classList.add("is-current-page"),n.classList.add("is-current-page"))):n=f("span","menu_title menu_text"),n.innerHTML=e.content||"",i.appendChild(n),t.appendChild(i);e=r(e.items,t,o,s);e&&(1<s.length&&i.insertBefore(Object.assign(document.createElement("span"),{className:"in-toggle"}),n),t.classList.add("is-parent"),t.querySelector("a.is-current-page")||t.classList.add("closed")),a.appendChild(t)});return t.appendChild(a)}(e,n,l,[])&&(o=!0),a.appendChild(n)}),o&&m.appendChild(a)}),t.appendChild(m),e.appendChild(t)}(n,o(),r,JSON.parse(e.innerText),i)}!function(i,r){i.addEventListener("mousedown",function(e){1<e.detail&&"pointer"===window.getComputedStyle(e.target).cursor&&e.preventDefault()});var e=i.querySelector(".components");(function(e,t){var n;t&&(n=e.getBoundingClientRect(),e.scrollHeight!==Math.round(n.height)&&(t=t.getBoundingClientRect(),e.scrollTop+=Math.round(t.top-n.top-.5*(n.height-t.height))))})(e,i.querySelector("a.is-current-page")),e.classList.contains("is-revealed")||(s("a.is-current-page",i).forEach(function(e){var t=a("menu_list",e,i);t.classList.contains("is-parent")&&t.classList.remove("closed");for(var n=e;(n=n.parentNode)&&n!==i;)n.classList.remove(n.classList.contains("hide")?"hide":"closed")}),e.classList.add("is-revealed"));s(".component_list_title",i).forEach(function(i){i.style.cursor="pointer",i.addEventListener("click",function(){var e,t=i.parentNode.parentNode,n=t.querySelector(".version_list");n?(e=t.querySelector(".version_items:not(.hide)"))?e.classList.add("hide"):(n=t.querySelector('.version_items[data-version="'+n.value+'"]'))&&n.classList.remove("hide"):t.querySelector(".version_items").classList.toggle("hide")})}),s(".menu_title",i).forEach(function(e){var t=a("menu_list",e,i);t.classList.contains("is-parent")&&!e.href&&(e.style.cursor="pointer",e.addEventListener("click",function(e){t.classList.toggle("closed")}))}),s(".version_list",i).forEach(function(n){n.addEventListener("change",function(){if(n.dataset.component===r.component){var e=n.options[n.selectedIndex];if(e.dataset.url)return void(window.location.href=e.dataset.url)}var t=n.parentNode.parentNode,e=t.querySelector(".version_items:not(.hide)");e&&e.classList.add("hide");t=t.querySelector('.version_items[data-version="'+n.value+'"]');t&&t.classList.remove("hide")})}),s(".in-toggle",i).forEach(function(e){var t=a("is-parent",e,i);e.addEventListener("click",function(){t.classList.toggle("closed")})})}(n,o())}function o(){var e=document.head;return{component:e.querySelector('meta[name="dcterms.subject"]').getAttribute("content"),version:e.querySelector('meta[name="dcterms.identifier"]').getAttribute("content"),url:e.querySelector("meta[name=page-url]").getAttribute("content")}}function h(e,t){if(!e||"/"!==t.charAt())return t;var n="",i=t.indexOf("#");return~i&&(n=t.substr(i),t=t.substr(0,i)),e===t?n||("/"===t.charAt(t.length-1)?"./":t.substr(t.lastIndexOf("/")+1)):(function(e,t){for(var n=l(e.split("/")),i=l(t.split("/")),r=0,o=Math.min(n.length,i.length),s=o;r<o;r++)if(n[r]!==i[r]){s=r;break}for(var a=[],c=n.length-s;0<c;c--)a.push("..");return a.concat(i.slice(s)).join("/")}(e.slice(0,e.lastIndexOf("/")),t)||".")+("/"===t.charAt(t.length-1)?"/"+n:n)}function l(e){for(var t=0,n=e.length;t<n&&!e[t];t++);if(t===n)return[];for(var i=n;0<i&&!e[i-1];i--);return e.slice(t,i)}function f(e,t){e=document.createElement(e);return t&&(e.className=t),e}function s(e,t){return[].slice.call((t||document).querySelectorAll(e))}function a(e,t,n){if((t=t.parentNode)!==n)return t.classList.contains(e)?t:a(e,t,n)}}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e&&!document.querySelector("body.-toc")){var t=parseInt(e.dataset.levels||1,10);if(!(t<0)){for(var o="article.doc",n=document.querySelector(o),c=[],r=0;r<=t;r++){var d=[o];if(r){for(var i=1;i<=r;i++)d.push((2===i?".sectionbody>":"")+".sect"+i);d.push("h"+(r+1)+"[id]")}else d.push("h1[id].sect0");c.push(d.join(">"))}var a,s,l,u,m,f=(a=c.join(","),function(e){return[].slice.call(e)}((n.parentNode||document).querySelectorAll(a)));f.length&&(l={},m=f.reduce(function(e,t){var o=document.createElement("a");o.textContent=t.textContent,l[o.href="#"+t.id]=o;var n=document.createElement("li");return n.dataset.level=parseInt(t.nodeName.slice(1),10)-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),(u=e.querySelector(".toc-menu"))||((u=document.createElement("div")).className="toc-menu"),u.appendChild(m),e&&window.addEventListener("load",function(){v(),window.addEventListener("scroll",v)}),(m=!document.getElementById("toc")&&n.querySelector("h1.page ~ :not(.is-before-toc)"))&&((e=document.createElement("aside")).className="toc embedded",e.appendChild(u.cloneNode(!0)),m.parentNode.insertBefore(e,m)))}}function v(){var t,e;f.some(function(e){return!(Math.floor(e.getBoundingClientRect().top)<=0)||void(t="#"+e.id)}),t?t!==s&&(s&&l[s].classList.remove("is-active"),(e=l[t]).classList.add("is-active"),u.scrollHeight>u.offsetHeight&&(u.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-u.offsetHeight)),s=t):s&&(l[s].classList.remove("is-active"),s=void 0)}}();
!function(){"use strict";"MozAppearance"in document.body.style&&Array.prototype.slice.call(document.querySelectorAll("main [id]")).forEach(function(e){var t;e.firstChild&&~window.getComputedStyle(e).display.indexOf("inline")&&((t=document.createElement("a")).id=e.id,e.removeAttribute("id"),e.parentNode.insertBefore(t,e))})}();
!function(){"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".navbar-burger");t&&t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active"),document.getElementById(t.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar"),document.querySelector("nav.collapse-menu").classList.remove("collapse-menu")})})}();
var checkActiveClass,hash=window.location.hash,queueData=[],tabOnLargeScreen=5,tabOnSmallScreen=1,smallBreak=768;function activateTab(e){e.preventDefault();var t=this.tab,a=this.pane,n=document.querySelector(".tabs ul"),s=t.parentNode.parentNode.parentNode.querySelector(".tabs > ul"),e=t.parentNode;"other-tablist"===t.parentNode.classList[0]&&(e.appendChild(s.lastElementChild),s.appendChild(t),e.classList.remove("show")),t.classList.contains("is-active")&&n.classList.remove("show"),find(".tabs li, .tab-pane",this.tabset).forEach(function(e){e===t||e===a?e.classList.add("is-active"):e.classList.remove("is-active")})}function find(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function getPane(t,e){return find(".tab-pane",e).find(function(e){return e.getAttribute("aria-labelledby")===t})}find(".doc .tabset").forEach(function(s){var i,o,e=s.querySelector(".tabs");e&&(find("ul",e).forEach(function(e,t){e&&find("li",e).forEach(function(a,e){var t,n=(a.querySelector("a[id]")||a).id;window.innerWidth<smallBreak?tabOnSmallScreen-1<e&&queueData.push(a):tabOnLargeScreen-1<e&&queueData.push(a),checkActiveClass=setTimeout(function(){var e,t;a.classList.contains("is-active")&&0<queueData.length&&(window.innerWidth>smallBreak&&a.parentNode.childElementCount>tabOnLargeScreen-1?a.parentNode.parentNode.insertAdjacentHTML("beforeend",'<div class="other-tab-box"><a href="#" class="dropddown-btn dropdown-btn-down">More... </a> <ul class="other-tablist"></ul></div>'):a.parentNode.parentNode.insertAdjacentHTML("beforeend",'<div class="other-tab-box desktop-hide"><a href="#" class="dropddown-btn dropdown-btn-down">More... </a> <ul class="other-tablist"></ul></div>'),e=a.parentNode.parentNode.querySelector(".dropdown-btn-down"),t=a.parentNode.parentNode.querySelector(".tabs .other-tablist"),e.addEventListener("click",function(e){e.preventDefault(),"block"===t.style.display||t.classList.contains("show")?(t.classList.remove("show"),t.classList.add("hide")):(t.classList.add("show"),t.classList.remove("hide"))}))},40),n&&(t=getPane(n,s),e||(o={tab:a,pane:t}),!i&&hash==="#"+n&&(i=!0)?(a.classList.add("is-active"),t&&t.classList.add("is-active")):e||(a.classList.remove("is-active"),t&&t.classList.remove("is-active")),a.addEventListener("click",activateTab.bind({tabset:s,tab:a,pane:t})))})}),!i&&o&&(o.tab.classList.add("is-active"),o.pane&&o.pane.classList.add("is-active"))),s.classList.remove("is-loading"),clearTimeout(checkActiveClass,2e4)}),setTimeout(function(){queueData.length&&queueData.forEach(function(e){e.parentNode.nextElementSibling.lastElementChild.appendChild(e)})},200),setTimeout(function(){document.querySelector(" .dropddown-btn")&&document.querySelector(" .dropddown-btn").addEventListener("click",function(e){e.preventDefault()})},200);
!function(e){"use strict";var t,n,o=document.getElementById("dialogBox"),c=document.getElementById("yesBtn"),s=document.getElementById("noBtn"),i=document.getElementById("skipBtnMsg"),d=document.querySelector(".feed-back-msg"),l=document.querySelector(".submit-btn"),a=document.querySelector(".info-btn"),u=document.querySelector(".feedback-modal"),r=document.querySelector(".close-popup");(c||s)&&(t=c.dataset,n=s.dataset,c.addEventListener("click",function(e){this.classList.add("active"),s.classList.remove("active"),console.log(t,16)}),s.addEventListener("click",function(e){this.classList.add("active"),c.classList.remove("active"),console.log(n,27)}),i.addEventListener("click",function(e){o.style.display="none",d.value=""}),d.addEventListener("keyup",function(e){""!==this.value?l.classList.remove("disabled"):l.classList.add("disabled")}),a.addEventListener("click",function(e){u.classList.add("show")}),r.addEventListener("click",function(e){u.classList.remove("show")})),window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){e("#myCustomTrigger").click(function(e){e.preventDefault(),t()})}},window.location.hash&&(r=window.location.hash,0!==e(r).length&&(r=e(r).offset().top,e("html, body").animate({scrollTop:r},"slow")))}(jQuery);
!function(){"use strict";var m={cpp:"cc",csharp:"dotnet",js:"nodejs",python:"py",ruby:"rb"},p=document.querySelector("main.article");function h(e){var t=e.querySelector("iframe"),n=t.cloneNode();e.replaceChild(n,t),n.contentWindow.document.write("<!DOCTYPE html><html><body><pre>Running code...</pre></body></html>")}document.querySelectorAll("pre > code").forEach(function(a){var e,t=a.parentNode,n=a.dataset.sourceUrl;n&&((e=document.createElement("a")).href=n,e.className="view-source-button remove-ext-icon",e.target="_blank",e.dataset.title="View On GitHub",e.appendChild(document.createElement("i")).className="fab fa-github");var c=document.createElement("div");c.className="source-type-box";var o=document.createElement("div");o.className="col-2 left-block";var l=document.createElement("div");l.className="col-2 right-block";var r=document.createElement("a");r.className="copy-code-button",r.dataset.title="Copy",r.appendChild(document.createElement("i")).className="far fa-copy";var d=document.createTextNode("Copy");r.appendChild(d);var i=document.createElement("span");i.className="data-source",i.innerHTML+=a.dataset.lang;var u,s,n=document.createElement("span");n.className="fade-shadow",r.addEventListener("click",function(e){var t=a.innerText;"$"===t.charAt(0)?(t=t.substring(2),navigator.clipboard.writeText(t).then(function(){r.blur(),r.dataset.title="Copied ✓",setTimeout(function(){r.dataset.title="Copy"},2e3)},function(){r.dataset.title="Error"})):navigator.clipboard.writeText(a.innerText).then(function(){r.blur(),r.dataset.title="Copied ✓",setTimeout(function(){r.dataset.title="Copy"},2e3)},function(){r.dataset.title="Error"})}),a.matches(".listingblock.try-it code")&&(a.contentEditable=!0,a.spellcheck=!1,(u=document.createElement("a")).className="run-code",u.dataset.title="Run Code",u.appendChild(document.createElement("i")).className="fas fa-terminal",d=document.createTextNode("Run Code"),u.appendChild(d),s=function(a){var e=document.getElementById("run-code-panel");if("TEMPLATE"!==e.tagName)return e;var t=e;return(e=a.appendChild(t.content.firstElementChild.cloneNode(!0))).querySelector(".rerun").addEventListener("click",function(){h(e)}),e.querySelector(".close").addEventListener("click",function(){var e=a.querySelector("main"),t=e.getBoundingClientRect().top,n=Array.prototype.slice.call(e.querySelectorAll("*")).find(function(e){return e.getBoundingClientRect().top>=t}),e=n.getBoundingClientRect().top;document.documentElement.classList.remove("terminal-launched");n=n.getBoundingClientRect().top;document.documentElement.style.scrollBehavior="auto",document.documentElement.scrollBy(0,n-e),document.documentElement.style.scrollBehavior=""}),t.parentNode.removeChild(t),e.id="run-code-panel",e}(p.parentNode),u.addEventListener("click",function(e){var t=this.getBoundingClientRect().top;document.documentElement.classList.add("terminal-launched");var n=this.getBoundingClientRect().top;p.scrollBy(0,n-t),h(s);n=s.querySelector("form");n.lang.value=m[a.dataset.lang]||a.dataset.lang;t=a.innerText;"java"===n.lang.value&&(t=t.replace(/^(?:public )?class \S+/m,"class Program")),n.code.value=t,n.submit()})),t.prepend(c),c.appendChild(o),c.appendChild(l),l.appendChild(i),e&&l.appendChild(e),l.appendChild(r),u&&l.appendChild(u),t.appendChild(n)})}();
!function(){"use strict";var u,a,c,i,l;document.getElementById("contributorList")&&(a=document.getElementById("contributorList"),c=document.getElementById("commitdate"),i=document.getElementById("otherContributor"),l=document.querySelector(".contributor-list-box"),fetch("https://api.github.com/repos/couchbase/docs-ui/stats/contributors").then(function(t){return t.json()}).then(function(t){0;var e=(u=t).length-5,n=u.length-1,r=u[n].weeks,o=r[r.length-1].w,t=new Date(1e3*o),n=t.getDate(),r=t.getFullYear(),o=new Array;o[0]="January",o[1]="February",o[2]="March",o[3]="April",o[4]="May",o[5]="June",o[6]="July",o[7]="August",o[8]="September",o[9]="October",o[10]="November",o[11]="December";t=o[t.getMonth()];c.append(t+" "+n+", "+r),i.append(e),l.classList.add("show"),u.slice(0).reverse().map(function(t,e,n){var r,o,u;e<=4&&(r=t.author.avatar_url,o=t.author.html_url,u=document.createElement("li"),e=document.createElement("a"),(t=document.createElement("img")).setAttribute("src",r),t.setAttribute("alt",""),e.setAttribute("href",o),e.setAttribute("target","_blank"),u.appendChild(e),e.appendChild(t),a.appendChild(u))})}).catch(function(t){console.log(t,13)}))}();
!function(){"use strict";var t=document.querySelectorAll("table.tableblock");window.onload=function(){window.innerWidth<768?t.forEach(function(t,e){for(var l=t.querySelectorAll("tbody tr").length,h=t.querySelectorAll("thead tr th").length,r=1;r<=h;r++){var c,o=t.querySelectorAll("th");void 0!==o[r]&&(c=o[r].offsetHeight);for(var d=1;d<=l;d++)null!=t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")")&&void 0!==t.querySelector(" tr:nth-child("+d+") td:nth-child("+r+")")&&(t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")").offsetHeight>c&&(c=t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")").offsetHeight),t.querySelectorAll("tr:nth-child("+d+") td:nth-child("+r+")").scrollHeight>t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")").offsetHeight&&(c=t.querySelectorAll("tr:nth-child("+d+") td:nth-child("+r+")").scrollHeight));for(var i=1;i<=l;i++)null!=t.querySelector("tr:nth-child("+i+") td:nth-child("+r+")")&&void 0!==t.querySelector("tr:nth-child("+i+") td:nth-child("+r+")")&&(t.querySelector("tr:nth-child("+i+") td:nth-child("+r+")").style.height=c+"px",t.querySelector("th:nth-child("+r+")").style.height=c+"px")}}):document.querySelectorAll("table.tableblock tbody tr td, table.tableblock thead tr th").forEach(function(t,e){t.style.height="auto"})}}();
!function(){"use strict";var n,e,o;document.querySelector(".tutorials-filter")&&(e=document.querySelectorAll(".nav-menu.filter li a"),n=document.querySelectorAll(".data-filter-column"),e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("active"),this.nextElementSibling.classList.toggle("open")})}),n.forEach(function(e,t){t%2==1?n[t].classList.add("even"):n[t].classList.add("odd")}),e=document.querySelectorAll('input[type="checkbox"]'),o={},e.forEach(function(a){a.addEventListener("change",function(e){e.preventDefault();var t=this;!0===a.checked&&(Object.prototype.hasOwnProperty.call(o,t.name)||(o[t.name]=[]),o[t.name].push(t.value.toLowerCase())),!1===a.checked&&(e=o[t.name].indexOf(t.value),1===o[t.name].length?delete o[t.name]:o[t.name].splice(e,1)),n.forEach(function(e){e.classList.remove("odd"),e.classList.remove("even")});var c=Array.from(document.querySelectorAll(".data-filter-column"));Object.keys(o).forEach(function(e){var a=o[e];c=c.filter(function(e){var t,c=!1;Array.from(e.querySelectorAll(".sub-heading")).forEach(function(e){e=e.dataset.category.toLowerCase().split(" ");t=e});e=t;return Array.prototype.forEach.call(e,function(e){if(-1!==a.indexOf(e))return!(c=!0)}),c})}),n.forEach(function(e){e.classList.add("hide")}),c.forEach(function(e,t){e.classList.add("show"),e.classList.remove("hide"),t%2==1?e.classList.add("even"):e.classList.add("odd")}),document.getElementById("clearALLBtn").addEventListener("click",function(e){e.preventDefault(),o=[],n.forEach(function(e,t){e.classList.remove("hide"),e.classList.remove("show"),e.classList.remove("odd"),e.classList.remove("even"),t%2==1?e.classList.add("even"):e.classList.add("odd")});for(var t=document.querySelectorAll(".check-mark"),c=0;c<t.length;c++)t[c].checked=!1})})}))}();
!function(){"use strict";[].slice.call(document.querySelectorAll("td.icon > i.fa")).forEach(function(e){e.classList.remove("fa")}),[].slice.call(document.querySelectorAll("a.anchor")).forEach(function(e){/^H[1-6]$/.test(e.parentNode.tagName)&&(e.appendChild(document.createElement("i")).className="fas fa-link")}),[].slice.call(document.querySelectorAll(".edition a")).forEach(function(e){~e.innerText.toLowerCase().indexOf("community")&&e.parentNode.classList.add("page-edition")}),[].slice.call(document.querySelectorAll("table.tableblock")).forEach(function(e){e.caption&&e.classList.add("caption-table")})}();