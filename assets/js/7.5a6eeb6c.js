(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{295:function(e,t,n){},345:function(e,t,n){"use strict";n(295)},358:function(e,t,n){"use strict";n.r(t);n(17);function i(e,t,n=50,i=3e3){var a=document.querySelectorAll(".index-tip"),o=(new Date).getTime(),s=0==a.length?0:a[a.length-1].getAttribute("data-top"),r=parseInt(s)+(0!=a.length?a[a.length-1].offsetHeight+17:n);let l=document.createElement("div");l.className=`index-tip tip-${t} ${o}`,l.style.top=parseInt(s)+"px",l.setAttribute("data-top",r),"info"==t||1==t?l.innerHTML=`<i class="iconfont icon-info icon"></i><p class="tip-info-content">${e}</p>`:"success"==t||2==t?l.innerHTML=`<i class="iconfont icon-dagouyouquan icon"></i><p class="tip-success-content">${e}</p>`:"danger"==t||3==t?l.innerHTML=`<i class="iconfont icon-cuowu icon"></i><p class="tip-danger-content">${e}</p>`:"warning"!=t&&4!=t||(l.innerHTML=`<i class="iconfont icon-gantanhao icon"></i><p class="tip-warning-content">${e}</p>`),document.body.appendChild(l);let h=document.getElementsByClassName(o)[0];setTimeout(()=>{h.style.top=parseInt(r)+"px",h.style.opacity="1"},10),setTimeout(()=>{h.style.top="0px",h.style.opacity="0";var e=function(e){for(var t=[],n=e;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t}(h);for(let i=0;i<e.length;i++){var t=e[i],n=parseInt(t.getAttribute("data-top"))-t.offsetHeight-17;t.setAttribute("data-top",n),t.style.top=n+"px"}setTimeout(()=>{h.remove()},500)},i)}var a={mounted(){const e=document.getElementById("banner-arrow");e&&e.parentNode.removeChild(e);let t=document.createElement("a");t.id="banner-arrow",t.className="banner-arrow",document.getElementsByClassName("banner")[0].append(t),document.getElementById("banner-arrow").addEventListener("click",e=>{this.scrollFn()});let n=1,i=!1,a=!1,o=["transparent","rgba(255, 148, 48, .2","rgba(0, 0, 0, .3)","rgba(0, 0, 0, .5)"],s=!1,r=[],l=200,h=800,c="1.4rem",m=!1,d=0,u=200;if(this.$themeConfig.indexImg&&Object.keys(this.$themeConfig.indexImg).length>0&&(n=null==this.$themeConfig.indexImg.navColor?n:this.$themeConfig.indexImg.navColor,i=null==this.$themeConfig.indexImg.switchNavColor?i:this.$themeConfig.indexImg.switchNavColor,a=null==this.$themeConfig.indexImg.bgTimeColor?a:this.$themeConfig.indexImg.bgTimeColor,o=null==this.$themeConfig.indexImg.bgTimeColorArray?o:this.$themeConfig.indexImg.bgTimeColorArray,s=null==this.$themeConfig.indexImg.descFade?s:this.$themeConfig.indexImg.descFade,r=null==this.$themeConfig.indexImg.desc?r:this.$themeConfig.indexImg.desc,c=null==this.$themeConfig.indexImg.descFontSize?c:this.$themeConfig.indexImg.descFontSize,l=null==this.$themeConfig.indexImg.descFadeInTime?l:this.$themeConfig.indexImg.descFadeInTime,h=null==this.$themeConfig.indexImg.descNextTime?h:this.$themeConfig.indexImg.descNextTime,m=null==this.$themeConfig.indexImg.bubble?m:this.$themeConfig.indexImg.bubble,d=null==this.$themeConfig.indexImg.bubblePosition?d:this.$themeConfig.indexImg.bubblePosition,u=null==this.$themeConfig.indexImg.bubbleNum?u:this.$themeConfig.indexImg.bubbleNum),a&&this.bgTimeColor(o),setTimeout(()=>{this.noBgBlur()},100),this.blurText(n),this.watchScroll(n,i),s&&this.textFadeInAndOut(r,c,l,100,h),m){let e=document.createElement("canvas");e.id="canvas",e.style.top=d+"%",document.getElementsByClassName("banner")[0].append(e),this.canvasBubble(u)}},watch:{$route(e,t){"/"==e.path&&Object.keys(this.$route.query).length>0&&setTimeout(()=>{this.clickArrow()},200)}},methods:{scrollFn(){const e=document.getElementsByClassName("banner")[0].clientHeight;window.scrollTo({top:e,behavior:"smooth"})},clickArrow(){document.getElementById("banner-arrow").click()},watchScroll(e,t){const n=document.getElementsByClassName("banner")[0].clientHeight;window.onscroll=()=>{document.documentElement.scrollTop<n?(this.blurText(e),this.noBgBlur()):(t&&1==e?this.blurText(2):t&&2==e&&this.blurText(1),this.bgBlur())}},bgBlur(){document.getElementsByClassName("navbar")[0].className="navbar blur"},noBgBlur(){document.getElementsByClassName("navbar")[0].className="navbar navbar1 blur"},blurText(e){let t=document.getElementsByClassName("site-name")[0],n=document.getElementsByClassName("search-box")[0],i=document.getElementsByClassName("nav-links")[0];1==e?(t.className="site-name can-hide",i.className="nav-links can-hide",n.className="search-box"):2==e&&(t.className="site-name site-name1 can-hide",i.className="nav-links nav-links1 can-hide",n.className="search-box search-box1")},bgTimeColor(e){var t=(new Date).getHours(),n=(new Date).getMinutes(),a=(new Date).getSeconds();t=t<10?"0"+t:t,n=n<10?"0"+n:n,a=a<10?"0"+a:a;let o=document.createElement("div");o.className="banner-color",t>=6&&t<11?(o.style.backgroundColor=e[0],i(`早上好呀~~，现在是 ${t}:${n}:${a}，吃早餐了吗？😊🤭`,"info",50,4e3)):t>=12&&t<=16?(o.style.backgroundColor=e[0],i(`下午好呀~~，现在是 ${t}:${n}:${a}，繁忙的下午也要适当休息哦🥤🏀~~`,"info",50,4e3)):t>=16&&t<=19?(o.style.backgroundColor=e[1],i(`到黄昏了~~，现在是 ${t}:${n}:${a}，该准备吃饭啦🥗🍖~~`,"info",50,4e3)):t>=19&&t<24?(o.style.backgroundColor=e[2],i(`晚上好呀~~，现在是 ${t}:${n}:${a}，该准备洗漱睡觉啦🥱😪~~`,"info",50,4e3)):t>=0&&t<6&&(o.style.backgroundColor=e[3],i(`别再熬夜了~~，现在是 ${t}:${n}:${a}，早点睡吧，让我们一起欣赏早上的太阳~~😇🛏`,"info",50,4e3)),document.getElementsByClassName("banner")[0].parentNode.append(o)},textFadeInAndOut(e,t,n,i,a){let o=document.getElementsByClassName("description")[0];if(o.style.fontSize=t,o){var s=document.createElement("span");s.className="typed",s.innerHTML="|";var r=0,l=0,h=o.innerText;o.innerText="",o.appendChild(document.createElement("span")),o.appendChild(s);var c,m=setInterval(d,n)}function d(){o&&(s.style.animation="none",e instanceof Array&&e.length>0&&(h=e[l]),o.firstChild.innerText=h.substring(0,r++),r>h.length&&(clearInterval(m),s.style.animation="typedBlink 1s infinite",setTimeout(()=>{c=setInterval(u,i)},a)))}function u(){r>=0?(s.style.animation="none",o.firstChild.innerText=h.substring(0,r--)):(clearInterval(c),s.style.animation="typedBlink 1s infinite",setTimeout(()=>{++l>=e.length&&(l=0),m=setInterval(d,n)},a))}},canvasBubble(e){var t=document.getElementById("canvas"),n=t.getContext("2d");function i(){this.alive=!0,this.x=Math.round(Math.random()*t.width),this.y=Math.round(Math.random()*t.height),this.diameter=10.8*Math.random(),this.ColorData={Red:Math.round(255*Math.random()),Green:Math.round(255*Math.random()),Blue:Math.round(255*Math.random())},this.alpha=.5,this.color="rgba("+this.ColorData.Red+", "+this.ColorData.Green+","+this.ColorData.Blue+","+this.alpha+")",this.velocity={x:Math.round(Math.random()<.5?-1:1)*Math.random()*.7,y:Math.round(Math.random()<.5?-1:1)*Math.random()*.7}}i.prototype={Draw:function(){n.fillStyle=this.color,n.beginPath(),n.arc(this.x,this.y,this.diameter,0,2*Math.PI,!1),n.fill()},Update:function(){this.alpha<.8&&(this.alpha+=.01,this.color="rgba("+this.ColorData.Red+", "+this.ColorData.Green+","+this.ColorData.Blue+","+this.alpha+")"),this.x+=this.velocity.x,this.y+=this.velocity.y,(this.x>t.width+5||this.x<-5||this.y>t.height+5||this.y<-5)&&(this.alive=!1)}};var a={rArray:[],Init:function(){t.width=window.innerWidth,t.height=window.innerHeight;for(var n=0;n<e;n++)this.rArray.push(new i);this.Update()},Draw:function(){n.clearRect(0,0,t.width,t.height),this.rArray.forEach((function(e){e.Draw()}))},Update:function(){if(a.rArray.length<e)for(var t=a.rArray.length;t<e;t++)a.rArray.push(new i);a.rArray.forEach((function(e){e.Update()})),a.rArray=a.rArray.filter((function(e){return e.alive})),a.Draw(),requestAnimationFrame(a.Update)}};window.onresize=function(){a.rArray=[],t.width=window.innerWidth,t.height=window.innerHeight},a.Init()}}},o=(n(345),n(1)),s=Object(o.a)(a,(function(){return(0,this._self._c)("div",{staticClass:"index-bigimg",staticStyle:{display:"none"}})}),[],!1,null,null,null);t.default=s.exports}}]);