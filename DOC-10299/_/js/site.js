!function(){"use strict";var t=document.querySelector(".nav"),e=t&&t.querySelector(".menu-expand-toggle"),e=(e&&e.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("collapse-menu")}),document.querySelector(".nav-container"));if(e){if(!e.querySelector(".components")){if(!window.siteNavigationData)return;var n=window.siteNavigationData.reduce(function(e,t){return(e[t.name]=t)&&e},{}),i=document.getElementById("page-versions"),r=document.getElementById("page-navigation-group");if(!r)return;var l,o=e,d=c(),u=i,p=JSON.parse(r.innerText),m=n,i=g("div","components is-revealed"),v=(1===p.components.length&&p.title===m[p.components[0]].title.replace(/^Couchbase | Database$/,"")?l=!0:(r=g("div","components_group-title"),p.url?((n=g("a")).href=h(d.url,p.url),n.appendChild(document.createTextNode(p.title)),r.appendChild(n)):r.appendChild(document.createTextNode(p.title)),i.appendChild(r)),g("ul","components_list"));p.components.forEach(function(r){var o,s,n,e=m[r],a=g("li","components_list-items"),c=r===d.component?d.version:p.latestVersions[r],t=g("div","component_list-version"),i=g("span","component_list_title");i.appendChild(document.createTextNode(e.title)),t.appendChild(i),(s=c&&"master"!==c)&&(r===d.component&&u?n=u.content.querySelector(".version_list"):(n=g("select","version_list"),e.versions.forEach(function(e){var t=g("option");t.value=e.version,e.version===c&&t.setAttribute("selected",""),t.appendChild(document.createTextNode(e.displayVersion||e.version)),n.appendChild(t)})),t.appendChild(n)),a.appendChild(t),e.versions.forEach(function(e,t){var n=g("div","version_items"),i=(n.dataset.version=e.version,!0),i=((i=d.component===r&&d.version===e.version||l&&(!s||e.version===c)?!1:i)&&n.classList.add("hide"),e.sets);(i=1!==i.length||i[0].content?i:i[0].items).length&&i[0].content&&i[0].content.endsWith(" Home")&&i.splice.apply(i,[0,1].concat(i[0].items||[])),function r(e,t,o,s){if(!(e||[]).length)return;var a=g("ul","menu_row");s=s.concat(a);e.forEach(function(e){null==e.content&&1===e.items.length&&(e=e.items[0]);var t,n=g("li","menu_list"),i=(n.dataset.depth=s.length-1,g("span","menu_line")),e=(e.url?((t=g("a","menu_title menu_link")).href=h(o.url,e.url),o.url===e.url&&(n.classList.add("is-current-page"),t.classList.add("is-current-page"))):t=g("span","menu_title menu_text"),t.innerHTML=e.content||"",i.appendChild(t),n.appendChild(i),r(e.items,n,o,s));e&&(1<s.length&&i.insertBefore(Object.assign(document.createElement("span"),{className:"in-toggle"}),t),n.classList.add("is-parent"),n.querySelector("a.is-current-page")||n.classList.add("closed")),a.appendChild(n)});return t.appendChild(a)}(i,n,d,[])&&(o=!0),a.appendChild(n)}),o&&v.appendChild(a)}),i.appendChild(v),o.appendChild(i)}var s=e,a=c(),n=(s.addEventListener("mousedown",function(e){1<e.detail&&"pointer"===window.getComputedStyle(e.target).cursor&&e.preventDefault()}),s.querySelector(".components")),r=n,o=s.querySelector("a.is-current-page");o&&(i=r.getBoundingClientRect(),r.scrollHeight!==Math.round(i.height)&&(o=o.getBoundingClientRect(),r.scrollTop+=Math.round(o.top-i.top-.5*(i.height-o.height)))),n.classList.contains("is-revealed")||(L("a.is-current-page",s).forEach(function(e){for(var t=_("menu_list",e,s),n=(t.classList.contains("is-parent")&&t.classList.remove("closed"),e);(n=n.parentNode)&&n!==s;)n.classList.remove(n.classList.contains("hide")?"hide":"closed")}),n.classList.add("is-revealed")),L(".component_list_title",s).forEach(function(i){i.style.cursor="pointer",i.addEventListener("click",function(){var e,t=i.parentNode.parentNode,n=t.querySelector(".version_list");n?(e=t.querySelector(".version_items:not(.hide)"))?e.classList.add("hide"):(e=t.querySelector('.version_items[data-version="'+n.value+'"]'))&&e.classList.remove("hide"):t.querySelector(".version_items").classList.toggle("hide")})}),L(".menu_title",s).forEach(function(e){var t=_("menu_list",e,s);t.classList.contains("is-parent")&&!e.href&&(e.style.cursor="pointer",e.addEventListener("click",function(e){t.classList.toggle("closed")}))}),L(".version_list",s).forEach(function(n){n.addEventListener("change",function(){if(n.dataset.component===a.component){var e=n.options[n.selectedIndex];if(e.dataset.url)return void(window.location.href=e.dataset.url)}var e=n.parentNode.parentNode,t=e.querySelector(".version_items:not(.hide)"),t=(t&&t.classList.add("hide"),e.querySelector('.version_items[data-version="'+n.value+'"]'));t&&t.classList.remove("hide")})}),L(".in-toggle",s).forEach(function(e){var t=_("is-parent",e,s);e.addEventListener("click",function(){t.classList.toggle("closed")})})}function c(){var e=document.head;return{component:e.querySelector('meta[name="dcterms.subject"]').getAttribute("content"),version:e.querySelector('meta[name="dcterms.identifier"]').getAttribute("content"),url:e.querySelector("meta[name=page-url]").getAttribute("content")}}function h(e,t){if(!e||"/"!==t.charAt())return t;var n="",i=t.indexOf("#");return~i&&(n=t.substr(i),t=t.substr(0,i)),e===t?n||("/"===t.charAt(t.length-1)?"./":t.substr(t.lastIndexOf("/")+1)):(function(e,t){for(var n=f(e.split("/")),i=f(t.split("/")),r=0,o=Math.min(n.length,i.length),s=o;r<o;r++)if(n[r]!==i[r]){s=r;break}for(var a=[],c=n.length-s;0<c;c--)a.push("..");return a.concat(i.slice(s)).join("/")}(e.slice(0,e.lastIndexOf("/")),t)||".")+("/"===t.charAt(t.length-1)?"/"+n:n)}function f(e){for(var t=0,n=e.length;t<n&&!e[t];t++);if(t===n)return[];for(var i=n;0<i&&!e[i-1];i--);return e.slice(t,i)}function g(e,t){e=document.createElement(e);return t&&(e.className=t),e}function L(e,t){return[].slice.call((t||document).querySelectorAll(e))}function _(e,t,n){if((t=t.parentNode)!==n)return t.classList.contains(e)?t:_(e,t,n)}}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e&&!document.querySelector("body.-toc")){var t=parseInt(e.dataset.levels||1,10);if(!(t<0)){for(var o="article.doc",n=document.querySelector(o),c=[],r=0;r<=t;r++){var i=[o];if(r){for(var d=1;d<=r;d++)i.push((2===d?".sectionbody>":"")+".sect"+d);i.push("h"+(r+1)+"[id]")}else i.push("h1[id].sect0");c.push(i.join(">"))}u=c.join(",");var a,s,l,u,m=function(e){return[].slice.call(e)}((n.parentNode||document).querySelectorAll(u));m.length&&(s={},u=m.reduce(function(e,t){var o=document.createElement("a"),n=(o.textContent=t.textContent,s[o.href="#"+t.id]=o,document.createElement("li"));return n.dataset.level=parseInt(t.nodeName.slice(1),10)-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),(l=e.querySelector(".toc-menu"))||((l=document.createElement("div")).className="toc-menu"),l.appendChild(u),e&&window.addEventListener("load",function(){f(),window.addEventListener("scroll",f)}),(u=!document.getElementById("toc")&&n.querySelector("h1.page ~ :not(.is-before-toc)"))&&((e=document.createElement("aside")).className="toc embedded",e.appendChild(l.cloneNode(!0)),u.parentNode.insertBefore(e,u)))}}function f(){var t,e;m.some(function(e){if(!(Math.floor(e.getBoundingClientRect().top)<=0))return!0;t="#"+e.id}),t?t!==a&&(a&&s[a].classList.remove("is-active"),(e=s[t]).classList.add("is-active"),l.scrollHeight>l.offsetHeight&&(l.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-l.offsetHeight)),a=t):a&&(s[a].classList.remove("is-active"),a=void 0)}}();
!function(){"use strict";"MozAppearance"in document.body.style&&Array.prototype.slice.call(document.querySelectorAll("main [id]")).forEach(function(e){var t;e.firstChild&&~window.getComputedStyle(e).display.indexOf("inline")&&((t=document.createElement("a")).id=e.id,e.removeAttribute("id"),e.parentNode.insertBefore(t,e))})}();
!function(){"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".navbar-burger");t&&t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active"),document.getElementById(t.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar"),document.querySelector("nav.collapse-menu").classList.remove("collapse-menu")})})}();
var checkActiveClass,hash=window.location.hash,queueData=[],tabOnLargeScreen=5,tabOnSmallScreen=1,smallBreak=768;function activateTab(e){e.preventDefault();var t=this.tab,a=this.pane,e=document.querySelector(".tabs ul"),n=t.parentNode.parentNode.parentNode.querySelector(".tabs > ul"),s=t.parentNode;"other-tablist"===t.parentNode.classList[0]&&(s.appendChild(n.lastElementChild),n.appendChild(t),s.classList.remove("show")),t.classList.contains("is-active")&&e.classList.remove("show"),find(".tabs li, .tab-pane",this.tabset).forEach(function(e){e===t||e===a?e.classList.add("is-active"):e.classList.remove("is-active")})}function find(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function getPane(t,e){return find(".tab-pane",e).find(function(e){return e.getAttribute("aria-labelledby")===t})}find(".doc .tabset").forEach(function(s){var i,o,e=s.querySelector(".tabs");e&&(find("ul",e).forEach(function(e,t){e&&find("li",e).forEach(function(a,e){var t,n=(a.querySelector("a[id]")||a).id;window.innerWidth<smallBreak?tabOnSmallScreen-1<e&&queueData.push(a):tabOnLargeScreen-1<e&&queueData.push(a),checkActiveClass=setTimeout(function(){var e,t;a.classList.contains("is-active")&&0<queueData.length&&(window.innerWidth>smallBreak&&a.parentNode.childElementCount>tabOnLargeScreen-1?a.parentNode.parentNode.insertAdjacentHTML("beforeend",'<div class="other-tab-box"><a href="#" class="dropddown-btn dropdown-btn-down">More... </a> <ul class="other-tablist"></ul></div>'):a.parentNode.parentNode.insertAdjacentHTML("beforeend",'<div class="other-tab-box desktop-hide"><a href="#" class="dropddown-btn dropdown-btn-down">More... </a> <ul class="other-tablist"></ul></div>'),e=a.parentNode.parentNode.querySelector(".dropdown-btn-down"),t=a.parentNode.parentNode.querySelector(".tabs .other-tablist"),e.addEventListener("click",function(e){e.preventDefault(),"block"===t.style.display||t.classList.contains("show")?(t.classList.remove("show"),t.classList.add("hide")):(t.classList.add("show"),t.classList.remove("hide"))}))},40),n&&(t=getPane(n,s),e||(o={tab:a,pane:t}),!i&&hash==="#"+n&&(i=!0)?(a.classList.add("is-active"),t&&t.classList.add("is-active")):e||(a.classList.remove("is-active"),t&&t.classList.remove("is-active")),a.addEventListener("click",activateTab.bind({tabset:s,tab:a,pane:t})))})}),!i&&o&&(o.tab.classList.add("is-active"),o.pane&&o.pane.classList.add("is-active"))),s.classList.remove("is-loading"),clearTimeout(checkActiveClass,2e4)}),setTimeout(function(){queueData.length&&queueData.forEach(function(e){e.parentNode.nextElementSibling.lastElementChild.appendChild(e)})},200),setTimeout(function(){document.querySelector(" .dropddown-btn")&&document.querySelector(" .dropddown-btn").addEventListener("click",function(e){e.preventDefault()})},200);
!function(e){"use strict";var t,n,o=document.getElementById("dialogBox"),c=document.getElementById("yesBtn"),s=document.getElementById("noBtn"),i=document.getElementById("skipBtnMsg"),d=document.querySelector(".feed-back-msg"),l=document.querySelector(".submit-btn"),a=document.querySelector(".info-btn"),u=document.querySelector(".feedback-modal"),r=document.querySelector(".close-popup");(c||s)&&(t=c.dataset,n=s.dataset,c.addEventListener("click",function(e){this.classList.add("active"),s.classList.remove("active"),console.log(t,16)}),s.addEventListener("click",function(e){this.classList.add("active"),c.classList.remove("active"),console.log(n,27)}),i.addEventListener("click",function(e){o.style.display="none",d.value=""}),d.addEventListener("keyup",function(e){""!==this.value?l.classList.remove("disabled"):l.classList.add("disabled")}),a.addEventListener("click",function(e){u.classList.add("show")}),r.addEventListener("click",function(e){u.classList.remove("show")})),window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){e("#myCustomTrigger").click(function(e){e.preventDefault(),t()})}},window.location.hash&&(i=window.location.hash,0!==e(i).length&&(a=e(i).offset().top,e("html, body").animate({scrollTop:a},"slow")))}(jQuery);
!function(){"use strict";var m={cpp:"cc",csharp:"dotnet",js:"nodejs",python:"py",ruby:"rb"},p=document.querySelector("main.article");function h(e){var t=e.querySelector("iframe"),n=t.cloneNode();e.replaceChild(n,t),n.contentWindow.document.write("<!DOCTYPE html><html><body><pre>Running code...</pre></body></html>")}document.querySelectorAll("pre > code").forEach(function(a){var e,t,n,c,o=a.parentNode,l=a.dataset.sourceUrl,l=(l&&((e=document.createElement("a")).href=l,e.className="view-source-button remove-ext-icon",e.target="_blank",e.dataset.title="View On GitHub",e.appendChild(document.createElement("i")).className="fab fa-github",l=document.createTextNode("View"),e.appendChild(l)),document.createElement("div")),d=(l.className="source-type-box",document.createElement("div")),r=(d.className="col-2 left-block",document.createElement("div")),i=(r.className="col-2 right-block",document.createElement("a")),u=(i.className="copy-code-button",i.dataset.title="Copy",i.appendChild(document.createElement("i")).className="far fa-copy",document.createTextNode("Copy")),u=(i.appendChild(u),document.createElement("span")),s=(u.className="data-source",u.innerHTML+=a.dataset.lang,document.createElement("span"));s.className="fade-shadow",i.addEventListener("click",function(e){var t=a.innerText;"$"===t.charAt(0)?(t=t.substring(2),navigator.clipboard.writeText(t).then(function(){i.blur(),i.dataset.title="Copied ✓",setTimeout(function(){i.dataset.title="Copy"},2e3)},function(){i.dataset.title="Error"})):navigator.clipboard.writeText(a.innerText).then(function(){i.blur(),i.dataset.title="Copied ✓",setTimeout(function(){i.dataset.title="Copy"},2e3)},function(){i.dataset.title="Error"})}),a.matches(".listingblock.try-it code")&&(a.contentEditable=!0,a.spellcheck=!1,(t=document.createElement("a")).className="run-code",t.dataset.title="Run Code",t.appendChild(document.createElement("i")).className="fas fa-terminal",n=document.createTextNode("Run Code"),t.appendChild(n),c=function(a){var e=document.getElementById("run-code-panel");if("TEMPLATE"!==e.tagName)return e;var t=e;return(e=a.appendChild(t.content.firstElementChild.cloneNode(!0))).querySelector(".rerun").addEventListener("click",function(){h(e)}),e.querySelector(".close").addEventListener("click",function(){var e=a.querySelector("main"),t=e.getBoundingClientRect().top,e=Array.prototype.slice.call(e.querySelectorAll("*")).find(function(e){return e.getBoundingClientRect().top>=t}),n=e.getBoundingClientRect().top,e=(document.documentElement.classList.remove("terminal-launched"),e.getBoundingClientRect().top);document.documentElement.style.scrollBehavior="auto",document.documentElement.scrollBy(0,e-n),document.documentElement.style.scrollBehavior=""}),t.parentNode.removeChild(t),e.id="run-code-panel",e}(p.parentNode),t.addEventListener("click",function(e){var t=this.getBoundingClientRect().top,n=(document.documentElement.classList.add("terminal-launched"),this.getBoundingClientRect().top),n=(p.scrollBy(0,n-t),h(c),c.querySelector("form")),t=(n.lang.value=m[a.dataset.lang]||a.dataset.lang,a.innerText);"java"===n.lang.value&&(t=t.replace(/^(?:public )?class \S+/m,"class Program")),n.code.value=t,n.submit()})),o.prepend(l),l.appendChild(d),l.appendChild(r),d.appendChild(u),e&&r.appendChild(e),r.appendChild(i),t&&r.appendChild(t),o.appendChild(s)})}();
!function(){"use strict";var u,a,c,i,l;document.getElementById("contributorList")&&(a=document.getElementById("contributorList"),c=document.getElementById("commitdate"),i=document.getElementById("otherContributor"),l=document.querySelector(".contributor-list-box"),fetch("https://api.github.com/repos/couchbase/docs-ui/stats/contributors").then(function(t){return t.json()}).then(function(t){0;var t=(u=t).length-5,e=u.length-1,e=u[e].weeks,e=e[e.length-1].w,e=new Date(1e3*e),n=e.getDate(),r=e.getFullYear(),o=new Array,o=(o[0]="January",o[1]="February",o[2]="March",o[3]="April",o[4]="May",o[5]="June",o[6]="July",o[7]="August",o[8]="September",o[9]="October",o[10]="November",o[11]="December",o[e.getMonth()]);c.append(o+" "+n+", "+r),i.append(t),l.classList.add("show"),u.slice(0).reverse().map(function(t,e,n){var r,o,u;e<=4&&(e=t.author.avatar_url,t=t.author.html_url,r=document.createElement("li"),o=document.createElement("a"),(u=document.createElement("img")).setAttribute("src",e),u.setAttribute("alt",""),o.setAttribute("href",t),o.setAttribute("target","_blank"),r.appendChild(o),o.appendChild(u),a.appendChild(r))})}).catch(function(t){console.log(t,13)}))}();
!function(){"use strict";var t=document.querySelectorAll("table.tableblock");window.onload=function(){window.innerWidth<768?t.forEach(function(t,e){for(var l=t.querySelectorAll("tbody tr").length,h=t.querySelectorAll("thead tr th").length,r=1;r<=h;r++){var c,o=t.querySelectorAll("th");void 0!==o[r]&&(c=o[r].offsetHeight);for(var d=1;d<=l;d++)null!=t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")")&&void 0!==t.querySelector(" tr:nth-child("+d+") td:nth-child("+r+")")&&(t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")").offsetHeight>c&&(c=t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")").offsetHeight),t.querySelectorAll("tr:nth-child("+d+") td:nth-child("+r+")").scrollHeight>t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")").offsetHeight&&(c=t.querySelectorAll("tr:nth-child("+d+") td:nth-child("+r+")").scrollHeight));for(var i=1;i<=l;i++)null!=t.querySelector("tr:nth-child("+i+") td:nth-child("+r+")")&&void 0!==t.querySelector("tr:nth-child("+i+") td:nth-child("+r+")")&&(t.querySelector("tr:nth-child("+i+") td:nth-child("+r+")").style.height=c+"px",t.querySelector("th:nth-child("+r+")").style.height=c+"px")}}):document.querySelectorAll("table.tableblock tbody tr td, table.tableblock thead tr th").forEach(function(t,e){t.style.height="auto"})}}();
!function(){"use strict";var n,e,o;document.querySelector(".tutorials-filter")&&(e=document.querySelectorAll(".nav-menu.filter li a"),n=document.querySelectorAll(".data-filter-column"),e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("active"),this.nextElementSibling.classList.toggle("open")})}),n.forEach(function(e,t){t%2==1?n[t].classList.add("even"):n[t].classList.add("odd")}),e=document.querySelectorAll('input[type="checkbox"]'),o={},e.forEach(function(a){a.addEventListener("change",function(e){e.preventDefault();var t,e=this,c=(!0===a.checked&&(Object.prototype.hasOwnProperty.call(o,e.name)||(o[e.name]=[]),o[e.name].push(e.value.toLowerCase())),!1===a.checked&&(t=o[e.name].indexOf(e.value),1===o[e.name].length?delete o[e.name]:o[e.name].splice(t,1)),n.forEach(function(e){e.classList.remove("odd"),e.classList.remove("even")}),Array.from(document.querySelectorAll(".data-filter-column")));Object.keys(o).forEach(function(e){var a=o[e];c=c.filter(function(e){var t,c=!1,e=(Array.from(e.querySelectorAll(".sub-heading")).forEach(function(e){e=e.dataset.category.toLowerCase().split(" ");t=e}),t);return Array.prototype.forEach.call(e,function(e){if(-1!==a.indexOf(e))return!(c=!0)}),c})}),n.forEach(function(e){e.classList.add("hide")}),c.forEach(function(e,t){e.classList.add("show"),e.classList.remove("hide"),t%2==1?e.classList.add("even"):e.classList.add("odd")}),document.getElementById("clearALLBtn").addEventListener("click",function(e){e.preventDefault(),o=[],n.forEach(function(e,t){e.classList.remove("hide"),e.classList.remove("show"),e.classList.remove("odd"),e.classList.remove("even"),t%2==1?e.classList.add("even"):e.classList.add("odd")});for(var t=document.querySelectorAll(".check-mark"),c=0;c<t.length;c++)t[c].checked=!1})})}))}();
!function(){"use strict";[].slice.call(document.querySelectorAll("td.icon > i.fa")).forEach(function(e){e.classList.remove("fa")}),[].slice.call(document.querySelectorAll("a.anchor")).forEach(function(e){/^H[1-6]$/.test(e.parentNode.tagName)&&(e.appendChild(document.createElement("i")).className="fas fa-link")}),[].slice.call(document.querySelectorAll(".edition a")).forEach(function(e){~e.innerText.toLowerCase().indexOf("community")&&e.parentNode.classList.add("page-edition")}),[].slice.call(document.querySelectorAll("table.tableblock")).forEach(function(e){e.caption&&e.classList.add("caption-table")})}();