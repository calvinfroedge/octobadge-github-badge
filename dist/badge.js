!function(){function a(a,e){a.className="github-badge",e.orientation=a.getAttribute("orientation")||"vertical",e.orientation&&(a.className+=" "+e.orientation),e.badge=a.getAttribute("badge")||"octo",a.className+=" "+e.badge,e.username=a.getAttribute("user")}function e(a,e,t){function n(a,e){var n=a+"Container",i=g("p");i.className=a;var r=g("i");r.className=e,i.appendChild(r),t[a]=g("span"),i.appendChild(t[a]),t[n]=i,t.summary.appendChild(t[n])}t.summary=g("div"),t.summary.className="gb-summary";var i=g("img");i.className="user",i.width="octo"==e.badge?"50":"100",t.img=i,t.summary.appendChild(t.img);var r=g("h4");t.name=r,t.summary.appendChild(t.name),"octo"!=e.badge&&n("location","fa fa-map-marker"),n("followers","fa fa-users"),n("repostotal","octicon octicon-repo"),n("stars","fa fa-star"),"octo"!=e.badge&&n("gists","fa fa-pencil"),a.appendChild(t.summary)}function t(a,e,t){if("octo"!=e.badge){t.detail=g("div"),t.detail.className="detail",t.repos={container:g("section"),title:g("h4"),listContainer:g("div")},t.repos.container.className="repos",t.repos.title.innerHTML="Popular repositories";var n=t.repos,i=n.container;i.appendChild(n.title),i.appendChild(n.listContainer),t.detail.appendChild(i),t.languages={container:g("section"),title:g("h4"),listContainer:g("div")},t.languages.container.className="languages",t.languages.title.innerHTML="Codes in",t.languages.container.appendChild(t.languages.title),t.languages.container.appendChild(t.languages.listContainer),t.detail.appendChild(t.languages.container),a.appendChild(t.detail)}}function n(a){var e=g("img");e.className="octodex",e.width="30",e.src="data:image/png;base64,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",a.appendChild(e)}function i(a,e,t,n){window.gh_badge_basicData=function(i){var r=(i.meta,i.data);a.addEventListener("click",function(){var a=g("a");a.target="_blank",a.href=r.html_url,a.click()}),t.img&&(t.img.src=r.avatar_url),t.name&&(t.name.innerHTML=r.name),t.location&&(t.location.innerHTML=r.location),t.followers&&(t.followers.innerHTML=r.followers+("octo"!=e.badge?" followers":"")),t.repostotal&&(t.repostotal.innerHTML=r.public_repos+("octo"!=e.badge?" public repos":""),e.repos_count=r.public_repos),t.gists&&(t.gists.innerHTML=r.public_gists+" gists");n(r)},c(l+"users/"+e.username,"gh_badge_basicData")}function r(a,e,t,n){var i=Math.ceil(n.public_repos/30),r=0,o=setInterval(function(){if(r==i&&(clearInterval(o),"octo"!=e.badge)){var a=e.repos.sort(function(a,e){return a.stargazers_count<e.stargazers_count?1:a.stargazers_count>e.stargazers_count?-1:0}),n=a.slice(0,3);n.map(function(a){var e=g("p"),n=g("i");n.className="fa fa-star",e.appendChild(n);var i=g("span");i.innerHTML=a.stargazers_count,e.appendChild(i),e.innerHTML=e.innerHTML+a.name+" ("+a.language+")",t.repos.listContainer.appendChild(e)});var s=g("p"),l=[];for(var c in e.languages)if("null"!=c){var u={name:c,value:e.languages[c]};l.push(u)}var d=l.sort(function(a,e){return a.value<e.value?1:a.value>e.value?-1:0}),m=d.map(function(a){return a.name}).join(", ");s.innerHTML=m,t.languages.listContainer.appendChild(s)}},1);window.gh_badge_repoData=function(a){var n=(a.meta,a.data);n.map(function(a){e.stargazers=e.stargazers+a.stargazers_count,e.repos.push(a),e.languages[a.language]?++e.languages[a.language]:e.languages[a.language]=1}),t.stars&&(t.stars.innerHTML=e.stargazers+("octo"!=e.badge?" stars":"")),++r};for(var s=1;i+1>s;s++){var u=l+"users/"+e.username+"/repos?page="+s;c(u,"gh_badge_repoData")}}function o(a,e,t){function n(a,e){return Array(Math.max(e-String(a).length+1,0)).join(0)+a}if("octo"==e.badge){t.history=g("div"),t.history.className="history",t.history.id="github-badge-history";var i=new Date;i.setHours(0,0,0,0),i.setDate(i.getDate()-29);var r=30;e.history={days:{}};for(var o=0;r>o;o++){var s=[i.getFullYear(),n(i.getMonth()+1,2),n(i.getDate(),2)].join("-"),l=g("i");e.history.days[s]={el:l,value:0},l.setAttribute("data-date",s),i.setDate(i.getDate()+1),t.history.appendChild(l)}a.appendChild(t.history)}}function s(a,e){function t(){c(l+"users/"+e.username+"/events/public?page="+ ++e.history.pages,"gh_badge_history")}function n(a){return a.created_at.split("T")[0]}function i(a){var e=new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()-30);var t=e,n=new Date(a);return n.setDate(n.getDate()+1),n>t}function r(){e.history.days;for(key in e.history.days){var a=e.history.days[key],t="";a.value>=18?t="many-commits":a.value>=12?t="more-commits":a.value>=6?t="some-commits":a.value>0&&(t="few-commits"),a.el.className=t}}"octo"==e.badge&&(e.history.pages=0,window.gh_badge_history=function(a){var o=(a.meta,a.data),s=e.history.days;if(o.map(function(a){if("PushEvent"==a.type||"PullRequestEvent"==a.type){var e=n(a);void 0!=s[e]&&("PushEvent"==a.type&&(s[e].value+=parseInt(a.payload.size)),"PullRequestEvent"==a.type&&(s[e].value+=parseInt(a.payload.pull_request.commits)))}}),o.length&&e.history.pages<10){var l=n(o[o.length-1]);i(l)?t():r()}else r()},t())}{var l="https://api.github.com/",c=function(a,e){function t(){var e=window.document.getElementsByTagName("script")[0],t=window.document.createElement("script");t.src=a+(a.indexOf("?")+1?"&":"?")+"callback="+i,e.parentNode.insertBefore(t,e),t.onload=function(){this.remove()}}var n=!1,i=a.replace(/[^a-zA-Z0-9]/g,"_");window[i]=function(t){if(n){var i=new Date;i.setDate(i.getDate()+1);try{localStorage.setItem(a,JSON.stringify({expiry:i.getTime(),value:t}))}catch(r){console.log("Could not add item to local storage...clearing localStorage...",r),localStorage.clear()}}window[e](t)};var r=localStorage.getItem(a);if(r){var o=(new Date).getTime(),s=JSON.parse(r);s.expiry>o?window[i](s.value):(localStorage.removeItem(a),n=!0,t())}else n=!0,t()},g=function(a){return document.createElement(a)},u=function(l){var c={},g={stargazers:0,repos:[],repos_count:0,languages:{}};a(l,g),e(l,g,c),t(l,g,c),n(l),o(l,g,c),i(l,g,c,function(a){r(l,g,c,a)}),s(l,g,c)};!function(){function a(a){var e=document.getElementsByTagName("head")[0],t=g("link");t.type="text/css",t.rel="stylesheet",t.href=a,e.appendChild(t)}var e=document.getElementsByTagName("github-badge");if(e.length){a("//cdnjs.cloudflare.com/ajax/libs/octicons/2.2.2/octicons.min.css"),a("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");for(var t=0;t<e.length;t++)new u(e[t])}}()}}();