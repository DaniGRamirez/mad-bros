(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){e.exports=a.p+"static/media/LogoInstaBN.6974b5f9.png"},145:function(e,t,a){},154:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(18),r=a.n(i),c=(a(69),a(3)),l=a(4),s=a(6),u=a(5),m=a(7),d=a(8),p=(a(70),a(71),a(56)),h=a.n(p),g=a(24),b=a.n(g),f=a(9),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e,t="";return!1===this.props.isDesktop?(e="",t=""):(e=o.a.createElement("div",null,o.a.createElement("div",{className:"navs"},o.a.createElement(f.b,{to:"/Photos"},"Photos"),o.a.createElement(f.b,{to:"/About"},"About"),o.a.createElement(f.b,{to:"/Contact"},"Contact"))),t=o.a.createElement("div",{className:"socialNavIcons"},o.a.createElement("a",{target:"blank",className:"menu-item--small",href:"https://www.instagram.com/lifeinredandwhite/?hl=es"},o.a.createElement("img",{className:"logoInstaHeader",alt:"logo",src:b.a})))),o.a.createElement("div",{className:" bg-light-gray"},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"logo"},o.a.createElement(f.b,{to:"/"},o.a.createElement("img",{className:"",alt:"logo",src:h.a}))),o.a.createElement(f.b,{to:"/",className:"lettersLink"},o.a.createElement("div",{className:"lettersLogoContainer"},o.a.createElement("h1",{className:"letterLogo"},"Mad"),o.a.createElement("h1",{className:"letterLogo",id:"brosRed"},"Bros"))),e,t))}}]),t}(n.Component),E=(a(21),a(82),n.Component,a(59)),O=a(61),j=a.n(O),k=(a(126),a(127),a(128),[]);function x(e,t,a){e.forEach(function(e){k[e].width=t,k[e].height=a})}var w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={currentImage:0},e.closeLightbox=e.closeLightbox.bind(Object(d.a)(Object(d.a)(e))),e.openLightbox=e.openLightbox.bind(Object(d.a)(Object(d.a)(e))),e.gotoNext=e.gotoNext.bind(Object(d.a)(Object(d.a)(e))),e.gotoPrevious=e.gotoPrevious.bind(Object(d.a)(Object(d.a)(e))),function(){for(var e=0;e<15;e++){var t=e+1;k[e]={src:"../img/foto-"+t+".jpg",width:3,height:2}}x([0,3],2,3),x([1],1,1),x([5],1.2,1),console.log(k),console.log("invoking getselected")}(),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"openLightbox",value:function(e,t){this.setState({currentImage:t.index,lightboxIsOpen:!0})}},{key:"closeLightbox",value:function(){this.setState({currentImage:0,lightboxIsOpen:!1})}},{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"GalleryDiv"},o.a.createElement(E.a,{photos:k,columns:"3",onClick:this.openLightbox,direction:"column"}),o.a.createElement(j.a,{images:k,onClose:this.closeLightbox,onClickPrev:this.gotoPrevious,onClickNext:this.gotoNext,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen}))}}]),t}(n.Component),C=(a(145),a(62)),N=a.n(C),y=a(25),I={accessToken:"access...",clientId:"client...",get:"user",locationId:null,resolution:"standard_resolution",sortBy:"none",tagName:null,userId:123},L=(a.n(y)()(I),function(){var e=Object(y.buildUrl)(I),t=e.json,a=e.loading,i=e.error;e.abort;if(a)return"Loading...";if(i)return"Error: ".concat(i);if(!t)return null;var r=t.data;t.meta,t.pagination;return o.a.createElement(n.Fragment,null,r&&r.map(function(e,t){e.caption,e.id;var a=e.images;return e.tags,a[I.resolution],o.a.createElement("div",null,o.a.createElement("h1",null,"Texto de prueba"),"/>")}))}),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"fullImage"},o.a.createElement("img",{src:N.a})),o.a.createElement("div",{className:"quoteContainer"},o.a.createElement("h1",null,'"Too fast to live, too young to die"')),o.a.createElement("div",{className:"powr-instagram-feed",id:"d9174698_1553704120"}),o.a.createElement(L,null))}}]),t}(n.Component),S=(a(154),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"mainContainer"},o.a.createElement("div",{className:"usContainer"},o.a.createElement("img",{className:"usItem",src:"http://lorempixel.com/256/256"}),o.a.createElement("div",{className:"usItem",id:"usText"},o.a.createElement("h1",null,"Quien co\xf1o somos"),o.a.createElement("p",null,'Esto es el parrafo para el about sobre nosotros, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Esto es el parrafo para el about sobre nosotros, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),o.a.createElement("img",{className:"usItem",src:"http://lorempixel.com/256/256"})),o.a.createElement("div",{className:"madBrosImgContainer"},o.a.createElement("img",{id:"madBrosImg",src:"http://lorempixel.com/1024/1024"})))}}]),t}(n.Component)),D=a(63),q=(a(170),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={menuOpen:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"toggleMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(D.slide,{right:!0,width:"100%",isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)}},o.a.createElement(f.b,{to:"/Home",onClick:function(){return e.closeMenu()}},"Home"),o.a.createElement(f.b,{to:"/Photos",onClick:function(){return e.closeMenu()}},"Photos"),o.a.createElement(f.b,{to:"/About",onClick:function(){return e.closeMenu()}},"About"),o.a.createElement(f.b,{to:"/Contact",onClick:function(){return e.closeMenu()}},"Contact"),o.a.createElement("a",{target:"blank",onClick:function(){return e.closeMenu()},className:"menu-item--small",href:"https://www.instagram.com/lifeinredandwhite/?hl=es"},o.a.createElement("img",{id:"logoInsta",alt:"logo",src:b.a}))))}}]),t}(n.Component)),M=(a(171),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"contactContainer"},o.a.createElement("h1",null,"Contact mail"),o.a.createElement("p",null,"madbros.spain@gmail.com"))}}]),t}(n.Component)),B=a(16),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isDesktop:!1},a.updatePredicate=a.updatePredicate.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>500})}},{key:"render",value:function(){var e;return e=!1===this.state.isDesktop?o.a.createElement(q,null):"",o.a.createElement(f.a,null,o.a.createElement("div",null,o.a.createElement(v,{isDesktop:this.state.isDesktop}),e,o.a.createElement(B.a,{exact:!0,path:"/",component:P}),o.a.createElement(B.a,{exact:!0,path:"/Photos",component:w}),o.a.createElement(B.a,{exact:!0,path:"/About",component:S}),o.a.createElement(B.a,{exact:!0,path:"/Contact",component:M})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(172);r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,a){e.exports=a.p+"static/media/LogoInstaInvertido.391776ef.png"},56:function(e,t,a){e.exports=a.p+"static/media/logoredandwhite.eab043a3.png"},62:function(e,t,a){e.exports=a.p+"static/media/foto-8.61d52a68.jpg"},64:function(e,t,a){e.exports=a(173)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},82:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.ae02c314.chunk.js.map