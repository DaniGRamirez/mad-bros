(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){e.exports=a.p+"static/media/LogoInstaBN.6974b5f9.png"},142:function(e,t,a){},143:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(18),i=a.n(c),r=(a(65),a(3)),s=a(4),l=a(6),u=a(5),m=a(7),d=a(8),h=(a(66),a(67),a(50)),p=a.n(h),g=a(23),b=a.n(g),f=a(9),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e,t="";return!1===this.props.isDesktop?(e="",t=""):(e=o.a.createElement("div",null,o.a.createElement("div",{className:"navs"},o.a.createElement(f.b,{to:"/Photos"},"Fotos"),o.a.createElement(f.b,{to:"/About"},"Nosotros"),o.a.createElement(f.b,{to:"/Contact"},"Contacto"))),t=o.a.createElement("div",{className:"socialNavIcons"},o.a.createElement("a",{target:"blank",className:"menu-item--small",href:"https://www.instagram.com/madbros.spain/"},o.a.createElement("img",{className:"logoInstaHeader",alt:"logo",src:b.a})))),o.a.createElement("div",{className:" bg-light-gray"},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"logo"},o.a.createElement(f.b,{to:"/"},o.a.createElement("img",{className:"",alt:"logo",src:p.a}))),o.a.createElement(f.b,{to:"/",className:"lettersLink"},o.a.createElement("div",{className:"lettersLogoContainer"},o.a.createElement("h1",{className:"letterLogo"},"Mad"),o.a.createElement("h1",{className:"letterLogo",id:"brosRed"},"Bros"))),e,t))}}]),t}(n.Component),E=(a(21),a(78),n.Component,a(53)),O=a(55),j=a.n(O),k=(a(123),a(124),a(125),[]);function w(){k.length=0,N("1_1",1,1,1),N("3_2",3,2,12),N("2_3",2,3,2),N("4_3",4,3,2),N("3_4",3,4,0),N("5_4",5,4,1),function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(k),console.log(k),console.log("invoking getselected")}function N(e,t,a,n){k.push();for(var o=0;o<n;o++){var c=o+1;k.push({src:"../img/"+e+"/Foto"+c+".jpg",width:t,height:a})}}var x=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={currentImage:0},e.closeLightbox=e.closeLightbox.bind(Object(d.a)(Object(d.a)(e))),e.openLightbox=e.openLightbox.bind(Object(d.a)(Object(d.a)(e))),e.gotoNext=e.gotoNext.bind(Object(d.a)(Object(d.a)(e))),e.gotoPrevious=e.gotoPrevious.bind(Object(d.a)(Object(d.a)(e))),w(),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"openLightbox",value:function(e,t){this.setState({currentImage:t.index,lightboxIsOpen:!0})}},{key:"closeLightbox",value:function(){this.setState({currentImage:0,lightboxIsOpen:!1})}},{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"GalleryDiv"},o.a.createElement(E.a,{photos:k,columns:"3",onClick:this.openLightbox,direction:"column"}),o.a.createElement(j.a,{images:k,onClose:this.closeLightbox,onClickPrev:this.gotoPrevious,onClickNext:this.gotoNext,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen}))}}]),t}(n.Component),y=(a(142),a(56)),C=a.n(y),I=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"fullImage"},o.a.createElement("img",{src:C.a})),o.a.createElement("div",{className:"quoteContainer"},o.a.createElement("h1",null,'"Mejoramos tu imagen personal y la de tu producto"')),o.a.createElement("div",{className:"InstaFeed"},o.a.createElement("div",{className:"powr-instagram-feed",id:"d9174698_1553704120"})))}}]),t}(n.Component),L=(a(143),a(57)),M=a.n(L),P=a(58),D=a.n(P),S=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"mainContainer"},o.a.createElement("div",{className:"usContainer"},o.a.createElement("img",{className:"usItem imgUs",src:D.a}),o.a.createElement("div",{className:"usItem",id:"usText"},o.a.createElement("h1",null,"Qui\xe9nes somos ?"),o.a.createElement("p",null,"Mad Bros esta formado por Dani y Marcos Garc\xeda Ram\xedrez, dos hermanos residentes en Madrid."),o.a.createElement("p",null,"Despu\xe9s de varios a\xf1os de experiencia desarrolando la cuenta de instagram",o.a.createElement("a",{id:"linkInstaLife",target:"_blank",href:"https://www.instagram.com/lifeinredandwhite/?hl=es"},"@lifeinredandwhite"),"nos hemos profesionalizado para llevar nuestras ideas y experiencia a todo aquel que quiera mejorar su imagen o la de su producto.")),o.a.createElement("img",{className:"usItem imgUs",src:M.a})))}}]),t}(n.Component),_=a(59),B=(a(159),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={menuOpen:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"toggleMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(_.slide,{right:!0,width:"100%",isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)}},o.a.createElement(f.b,{to:"/",onClick:function(){return e.closeMenu()}},"Inicio"),o.a.createElement(f.b,{to:"/Photos",onClick:function(){return e.closeMenu()}},"Fotos"),o.a.createElement(f.b,{to:"/About",onClick:function(){return e.closeMenu()}},"Nosotros"),o.a.createElement(f.b,{to:"/Contact",onClick:function(){return e.closeMenu()}},"Contacto"),o.a.createElement("a",{target:"blank",onClick:function(){return e.closeMenu()},className:"menu-item--small",href:"https://www.instagram.com/lifeinredandwhite/?hl=es"},o.a.createElement("img",{id:"logoInsta",alt:"logo",src:b.a}))))}}]),t}(n.Component)),q=(a(160),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"contactContainer"},o.a.createElement("h1",null,"Mail de contacto:"),o.a.createElement("p",null,"contact@madbrosspain.com"))}}]),t}(n.Component)),z=a(16),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isDesktop:!1},a.updatePredicate=a.updatePredicate.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>500})}},{key:"render",value:function(){var e;return e=!1===this.state.isDesktop?o.a.createElement(B,null):"",o.a.createElement(f.a,null,o.a.createElement("div",null,o.a.createElement(v,{isDesktop:this.state.isDesktop}),e,o.a.createElement(z.a,{exact:!0,path:"/",component:I}),o.a.createElement(z.a,{exact:!0,path:"/Photos",component:x}),o.a.createElement(z.a,{exact:!0,path:"/About",component:S}),o.a.createElement(z.a,{exact:!0,path:"/Contact",component:q})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(161);i.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,t,a){e.exports=a.p+"static/media/LogoInstaInvertido.391776ef.png"},50:function(e,t,a){e.exports=a.p+"static/media/logoredandwhite.eab043a3.png"},56:function(e,t,a){e.exports=a.p+"static/media/foto-8.61d52a68.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/Dani.d67ec02f.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/Marcos.36b0616e.jpg"},60:function(e,t,a){e.exports=a(162)},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},78:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.6cc20468.chunk.js.map