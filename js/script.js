window.fathom=function(){var t=document.currentScript||document.querySelector('script[src*="script.js"][site]')||document.querySelector("script[data-site]")||document.querySelector("script[site]"),e=t.getAttribute("data-site")||t.getAttribute("site"),n=!1,o=!0,a=!0,i=[],r=[];function d(){window.fathom.trackPageview()}function c(){var t;void 0!==history&&(t=history.pushState,history.pushState=function(){var e=t.apply(history,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchangefathom")),e},window.addEventListener("popstate",(function(){window.dispatchEvent(new Event("locationchangefathom"))})),window.addEventListener("locationchangefathom",d))}function s(){window.addEventListener("hashchange",d)}if("true"==(t.getAttribute("data-honor-dnt")||t.getAttribute("honor-dnt"))&&(n="doNotTrack"in navigator&&"1"===navigator.doNotTrack),"false"==(t.getAttribute("data-auto")||t.getAttribute("auto"))&&(o=!1),"false"==(t.getAttribute("data-canonical")||t.getAttribute("canonical"))&&(a=!1),(t.getAttribute("data-excluded-domains")||t.getAttribute("excluded-domains"))&&(i=(t.getAttribute("data-excluded-domains")||t.getAttribute("excluded-domains")).split(",")),t.getAttribute("data-included-domains")||t.getAttribute("included-domains")?r=(t.getAttribute("data-included-domains")||t.getAttribute("included-domains")).split(","):(t.getAttribute("data-allowed-domains")||t.getAttribute("allowed-domains"))&&(r=(t.getAttribute("data-allowed-domains")||t.getAttribute("allowed-domains")).split(",")),t.getAttribute("data-spa")||t.getAttribute("spa"))switch(t.getAttribute("data-spa")||t.getAttribute("spa")){case"history":c();break;case"hash":s();break;case"auto":(void 0!==history?c:s)()}var u,l="https://cdn.usefathom.com/";function m(t){return t.cid=Math.floor(1e8*Math.random())+1,"?"+Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")}function h(){for(var t,e={},n=window.location.search.substring(window.location.search.indexOf("?")+1).split("&"),o=0;o<n.length;o++)n[o]&&(t=n[o].split("="),-1<["keyword","q","ref","s","utm_campaign","utm_content","utm_medium","utm_source","utm_term","action","name","pagename","tab"].indexOf(decodeURIComponent(t[0]))&&(e[decodeURIComponent(t[0])]=decodeURIComponent(t[1])));return e}function f(){var t=!1;try{t=window.localStorage&&window.localStorage.getItem("blockFathomTracking")}catch(t){}var e="visibilityState"in document&&"prerender"===document.visibilityState,o=-1<i.indexOf(window.location.hostname),a=!(0<r.length)||-1<r.indexOf(window.location.hostname);if(!t&&!e&&!n&&!o&&a)return!0}function g(t){var e,n=window.location;return void 0===t.url?a&&document.querySelector('link[rel="canonical"][href]')&&((e=document.createElement("a")).href=document.querySelector('link[rel="canonical"][href]').href,n=e):(n=document.createElement("a")).href=t.url,n}return t.src.indexOf("cdn.usefathom.com")<0&&((u=document.createElement("a")).href=t.src,l="https://"+u.hostname+"/"),o&&setTimeout((function(){window.fathom.trackPageview()})),{siteId:e,send:function(t){var e;f()&&((e=document.createElement("img")).setAttribute("alt",""),e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.src=l+m(t),e.addEventListener("load",(function(){e.parentNode.removeChild(e)})),e.addEventListener("error",(function(){e.parentNode.removeChild(e)})),document.body.appendChild(e))},beacon:function(t){f()&&navigator.sendBeacon(l+m(t))},trackPageview:function(e){var n,o,a=g(e=void 0===e?{}:e);""!==a.host&&(n=a.protocol+"//"+a.hostname,o=a.pathname||"/","hash"==t.getAttribute("data-spa")&&(o+=a.hash),this.send({h:n,p:o,r:e.referrer||(document.referrer.indexOf(n)<0?document.referrer:""),sid:this.siteId,qs:JSON.stringify(h())}))},trackGoal:function(t,e){var n=g({}),o=n.protocol+"//"+n.hostname;this.beacon({gcode:t,gval:e,qs:JSON.stringify(h()),p:n.pathname||"/",h:o,r:document.referrer.indexOf(o)<0?document.referrer:"",sid:this.siteId})},trackEvent:function(t,e={}){var n=g({}),o=n.protocol+"//"+n.hostname;this.beacon({name:t,payload:JSON.stringify(e),p:n.pathname||"/",h:o,r:document.referrer.indexOf(o)<0?document.referrer:"",sid:this.siteId,qs:JSON.stringify(h())})},setSite(t){this.siteId=t},blockTrackingForMe:function(){window.localStorage?(window.localStorage.setItem("blockFathomTracking",!0),alert("You have blocked Fathom for yourself on this website.")):alert("Your browser doesn't support localStorage.")},enableTrackingForMe:function(){window.localStorage&&(window.localStorage.removeItem("blockFathomTracking"),alert("Fathom has been enabled for this website."))},isTrackingEnabled:function(){return!0===f()}}}();