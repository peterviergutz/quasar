!function(){function e(){u.classList.toggle("open"),w.classList.toggle("active")}function t(){var e=l&&l.scrollTop||d.scrollTop,t=m.offsetHeight;if(s.className=e>t?"fix-sidebar":"",!y&&b){for(var n,i=0;i<b.length;i++){var a=b[i];if(a.offsetTop>=e+t+100){n||(n=a);break}n=a}n&&o(n.id)}}function n(e){var t=document.createElement("li"),n=e.textContent.replace(/\(.*\)$/,"");return e.id=e.id.replace(/\(.*\)$/,"").replace(/\$/,""),t.innerHTML='<a class="section-link" data-scroll href="#'+e.id+'">'+n+"</a>",t}function i(e){for(var t=[],n=e.nextSibling;n&&"H2"!==n.tagName;)"H3"===n.tagName&&t.push(n),n=n.nextSibling;return t}function a(e,t){var i=document.createElement("ul");return t&&(i.className="menu-sub"),e.forEach(function(e){i.appendChild(n(e))}),i}function o(e){var t=u.querySelector(".section-link.active"),n="string"==typeof e?u.querySelector('.section-link[href="#'+e+'"]'):e;if(n!==t&&(t&&t.classList.remove("active"),n.classList.add("active"),window.themePreview&&!window.themePreview.fullPageDemo)){var i=$(n).attr("href").substring(1),a=$('.content a[data-scroll][href="#'+i+'"]').next();window.themePreview.selectPage(a?a.data("demo"):"")}}function r(e){var t=document.createElement("a");t.href="#"+e.id,t.setAttribute("data-scroll",""),e.parentNode.insertBefore(t,e),t.appendChild(e)}var c=[].forEach,s=document.getElementById("main"),l=document.documentElement,d=document.body,m=document.getElementById("header"),u=document.querySelector(".sidebar"),p=document.querySelector(".content"),h=400,f=m.querySelector(".menu-button"),w=document.querySelector(".sidebar-backdrop");if(u){f.addEventListener("click",e),w.addEventListener("click",e);var v=u.querySelector(".sidebar-link.current");if(v){var g,b=[];g=document.createElement("ul"),g.className="menu-sub",v.parentNode.appendChild(g);var k=p.querySelectorAll("h2");k.length?c.call(k,function(e){g.appendChild(n(e));var t=i(e);b.push(e),b.push.apply(b,t),t.length&&g.appendChild(a(t))}):(k=p.querySelectorAll("h3"),c.call(k,function(e){g.appendChild(n(e)),b.push(e)}));var y=!1;g.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("section-link")&&(u.classList.remove("open"),o(e.target),y=!0)},!0),b.forEach(r),smoothScroll.init({speed:h,offset:window.innerWidth>720?100:15,callback:function(){setTimeout(function(){y=!1},100)}})}}(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}})();window.addEventListener("scroll",t),window.addEventListener("resize",t);for(var x=document.links,E=0,L=x.length;L>E;E++)x[E].hostname!==window.location.hostname&&(x[E].target="_blank")}(),function(){function e(e){return"https://github.com/rstoenescu/quasar-site/tree/master/demo-app/src/pages/"+e}function t(e,t){return 0===t.indexOf("http")?t:"/demo-app/"+e+".html#/"+("index"===t?"":t)}function n(n){return'<span class="demo-links">Demo: '+h.map(function(e){return'<a class="spawn-demo" href="'+t(e,n)+'" target="_blank"><i class="fa fa-'+e+'"></i></a>'}).join(" ")+' <a class="spawn-demo" target="_blank" href="'+e(n)+'">Source <i class="fa fa-file-code-o"></i></a></span>'}function i(){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))}var a,o=$("#preview"),r=$("#preview-chooser a"),c=$("#preview .theme"),s=$("#preview iframe"),l=$("#main > .content"),d=$.cookie("theme")||"android",m=$("#main .content input[data-demo]"),u=$("#main .content input[data-fullpage-demo]"),p=$(".view-source"),h=["android","apple"];if(0!==r.length&&(0!==m.length||0!==u.length)){if(i())return m.each(function(){var e=$(this),t=e.data("demo");e.after(n(t))}),void u.after(n(u.data("fullpage-demo")));0===u.length&&$("#main .footer").css("margin-bottom","100vh"),r.click(function(){window.themePreview.selectTheme($(this).data("theme"))}),$("#btn-close-desktop-view").click(function(){window.themePreview.selectTheme("desktop")}),window.themePreview={show:function(e){o.css("display","block"),l.addClass("with-previewer"),a=e,this.selectTheme(d)},hide:function(){o.css("display","none"),l.removeClass("with-previewer")},selectPage:function(n){a=n,s.each(function(){var i=$(this),a=$(this).attr("id").split("-")[0];d===a&&(n?(i.attr("src",t(a,n)),p.css("display",0===n.indexOf("http")?"none":"inline-block").attr("href",e(n))):(i.attr("src",""),p.css("display","none")))})},selectTheme:function(e){r.removeClass("active"),"desktop"===e&&"desktop"===d&&(e="android",$("body").css("overflow","")),$('#preview #preview-chooser a[data-theme="'+e+'"]').addClass("active"),c.css("display","none"),$("#"+e+"-preview").css("display","block"),"desktop"!==e?$.cookie("theme",e):"desktop"!==d&&$("body").css("overflow","hidden"),d=e,this.selectPage(a)}},u.length>0?(window.themePreview.fullPageDemo=!0,window.themePreview.show(u.data("fullpage-demo"))):window.themePreview.show()}}(),$(function(){"use strict";function e(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function t(t){var n=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text().replace(/^.*\/\/[^\/]+/,"")}}).get(),i=document.getElementById("local-search-input"),a=document.getElementById("local-search-result");$("input#local-search-input").keyup(function(e){27==e.keyCode&&($(this).val(""),a.innerHTML="")}),i.addEventListener("input",function(){var t="<ul>",i=this.value.trim();a.innerHTML="",i.length<=0||(i=i.toLowerCase().split(/[\s\-]+/),n.forEach(function(n){var a=!0,o=n.title.trim().toLowerCase(),r=n.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),c=n.url,s=-1,l=-1,d=-1;if(console.log(c),""!=o&&""!=r&&i.forEach(function(e,t){s=o.indexOf(e),l=r.indexOf(e),0>s&&0>l?a=!1:(0>l&&(l=0),0==t&&(d=l))}),a){var m=n.content.trim().replace(/<[^>]+>/g,"");if(!m.length)return;if(t+='<li><a href="'+c+'" class="search-result-title">'+e(o)+"</a>",d>=0){var u=d-100,p=d+100;0>u&&(u=0),0==u&&(p=200),p>m.length&&(p=m.length);var h=m.substring(u,p);i.forEach(function(e){var t=new RegExp(e,"gi");h=h.replace(t,"<code>"+e+"</code>")}),t+='<a class="search-result" href="'+c+'"><p>'+h+"...</p></a>"}t+="</li>"}}),t+="</ul>",a.innerHTML=t)}),$("#loading-search").slideToggle(),$("#search-content").slideToggle()}0===window.location.pathname.indexOf("/search")&&$.ajax({url:"/search.xml",dataType:"xml",success:t})});