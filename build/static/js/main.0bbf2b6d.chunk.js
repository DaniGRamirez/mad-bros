(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){e.exports=a.p+"static/media/LogoInstaBN.6974b5f9.png"},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),c=a.n(r),i=a(15),s=a(27),l=(a(67),a(3)),u=a(4),d=a(7),m=a(5),h=a(10),p=a(6),g=(a(68),a(69),a(51)),f=a.n(g),b=a(28),v=a.n(b),E=a(8),O=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e,t="";return!1===this.props.isDesktop?(e="",t=""):(e=o.a.createElement("div",null,o.a.createElement("div",{className:"navs"},o.a.createElement(E.b,{to:"/Photos"},"Fotos"),o.a.createElement(E.b,{to:"/About"},"Nosotros"),o.a.createElement(E.b,{to:"/Contact"},"Contacto"))),t=o.a.createElement("div",{className:"socialNavIcons"},o.a.createElement("a",{target:"blank",className:"menu-item--small",href:"https://www.instagram.com/madbros.spain/"},o.a.createElement("img",{className:"logoInstaHeader",alt:"logo",src:v.a})))),o.a.createElement("div",{className:"bg-light-gray"},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"logo"},o.a.createElement(E.b,{to:"/"},o.a.createElement("img",{className:"",alt:"logo",src:f.a}))),o.a.createElement(E.b,{to:"/",className:"lettersLink"},o.a.createElement("div",{className:"lettersLogoContainer"},o.a.createElement("h1",{className:"letterLogo"},"Mad"),o.a.createElement("h1",{className:"letterLogo",id:"brosRed"},"Bros"))),e,t))}}]),t}(n.Component),C=(a(24),a(74),n.Component,a(53)),y=a(55),j=a.n(y),k=(a(119),a(120),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={currentImage:0},e.closeLightbox=e.closeLightbox.bind(Object(h.a)(e)),e.openLightbox=e.openLightbox.bind(Object(h.a)(e)),e.gotoNext=e.gotoNext.bind(Object(h.a)(e)),e.gotoPrevious=e.gotoPrevious.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"openLightbox",value:function(e,t){this.setState({currentImage:t.index,lightboxIsOpen:!0})}},{key:"closeLightbox",value:function(){this.setState({currentImage:0,lightboxIsOpen:!1})}},{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"drawGallery",value:function(){if(0!=this.props.selectedPhotos.length)return o.a.createElement("div",null,o.a.createElement(C.a,{photos:this.props.selectedPhotos,columns:3,onClick:this.openLightbox,direction:"column"}),o.a.createElement(j.a,{images:this.props.selectedPhotos,onClose:this.closeLightbox,onClickPrev:this.gotoPrevious,onClickNext:this.gotoNext,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"GalleryDiv"},this.drawGallery())}}]),t}(n.Component)),_=(a(121),a(122),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).DoLogicOnClick=e.DoLogicOnClick.bind(Object(h.a)(e)),e.state={selected:!1},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"DoLogicOnClick",value:function(){var e=this.props.onCategoriesChanged.bind(this),t={type:"SELECT_CATEGORY",payload:this.props.CategoryInfo.id};e(this.props.CategoryInfo.id),this.props.dispatch(t)}},{key:"componentDidMount",value:function(){}},{key:"drawCategory",value:function(){return this.props.categorySelected==this.props.CategoryInfo.id?o.a.createElement("div",{className:"category selected",id:this.props.CategoryInfo.id},o.a.createElement(E.b,{to:"/Photos",onClick:this.DoLogicOnClick}," ",this.props.CategoryInfo.name)):o.a.createElement("div",{className:" category",id:this.props.CategoryInfo.id},o.a.createElement(E.b,{to:"/Photos",onClick:this.DoLogicOnClick}," ",this.props.CategoryInfo.name))}},{key:"render",value:function(){return this.drawCategory()}}]),t}(n.Component)),w=Object(i.b)(function(e){return{categorySelected:e.categorySelected}},null)(_),I=[];function N(e){if(0!=e.length){I.length=0;for(var t=0;t<e.length;t++)x(e[t].id+"/1_1",1,1,e[t].folder_1_1),x(e[t].id+"/3_2",3,2,e[t].folder_3_2),x(e[t].id+"/2_3",2,3,e[t].folder_2_3),x(e[t].id+"/4_3",4,3,e[t].folder_4_3),x(e[t].id+"/3_4",3,4,e[t].folder_3_4),x(e[t].id+"/5_4",5,4,e[t].folder_5_1);!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(I)}}function x(e,t,a,n){for(var o=0;o<n;o++){var r=o+1;I.push({src:"img/"+e+"/Foto"+r+".jpg",width:t,height:a})}}var S=[{name:"Deportes",id:"Sport",icon:"All",folder_1_1:0,folder_2_3:0,folder_3_2:15,folder_4_3:2,folder_3_4:0,folder_5_4:0},{name:"Retratos",id:"Portrait",icon:"All",folder_1_1:1,folder_2_3:2,folder_3_2:6,folder_4_3:1,folder_3_4:0,folder_5_4:2},{name:"Producto",id:"Product",icon:"All",folder_1_1:0,folder_2_3:0,folder_3_2:2,folder_4_3:0,folder_3_4:0,folder_5_4:0}],P={name:"Todo",id:"All",icon:"All"},D=[];function L(e){switch(D=[],e){case"All":D.push(S[0]),D.push(S[1]),D.push(S[2]);break;case"Sport":D.push(S[0]);break;case"Portrait":D.push(S[1]);break;case"Product":D.push(S[2])}return o.a.createElement("h1",null)}var M=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).CategoriesElements=S.map(function(t,a){return o.a.createElement(w,{key:a,CategoryInfo:S[a],onCategoriesChanged:e.onCategoriesChanged})}),e.onCategoriesChanged=e.onCategoriesChanged.bind(Object(h.a)(e)),L("All"),N(D),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onCategoriesChanged",value:function(e){console.log("Categorie changed"),L(e),N(D)}},{key:"componentDidMount",value:function(){L(this.props.categorySelected),N(D),console.log("DID Mount in photos")}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return console.log("Render Phostos"),o.a.createElement("div",null,o.a.createElement("div",{className:"navCategories"},o.a.createElement(w,{CategoryInfo:P,onCategoriesChanged:this.onCategoriesChanged}),this.CategoriesElements),o.a.createElement(k,{selectedPhotos:I}))}}]),t}(n.Component),A=Object(i.b)(function(e){return{categorySelected:e.categorySelected}},null)(M),R=(a(123),a(56)),G=a.n(R),T=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("script",{src:"https://www.powr.io/powr.js?platform=web"}),o.a.createElement("div",{className:"fullImage"},o.a.createElement("img",{src:G.a})),o.a.createElement("div",{className:"quoteContainer"},o.a.createElement("h1",null,'"Mejoramos tu imagen personal y la de tu producto"')),o.a.createElement("div",{className:"InstaFeed"},o.a.createElement("div",{className:"powr-instagram-feed",id:"d9174698_1553704120"})))}}]),t}(n.Component),U=(a(124),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"mainContainer"},o.a.createElement("div",{className:"usContainer"},o.a.createElement("img",{className:"usItem imgUs",src:"img/Us/Marcos.jpg"}),o.a.createElement("div",{className:"usItem",id:"usText"},o.a.createElement("h1",null,"Qui\xe9nes somos ?"),o.a.createElement("p",null,"Mad Bros esta formado por Dani y Marcos Garc\xeda Ram\xedrez, dos hermanos residentes en Madrid."),o.a.createElement("p",null,"Despu\xe9s de varios a\xf1os de experiencia desarrolando la cuenta de instagram",o.a.createElement("a",{id:"linkInstaLife",target:"_blank",href:"https://www.instagram.com/lifeinredandwhite/?hl=es"},"@lifeinredandwhite"),"nos hemos profesionalizado para llevar nuestras ideas y experiencia a todo aquel que quiera mejorar su imagen o la de su producto.")),o.a.createElement("img",{className:"usItem imgUs",src:"img/Us/Dani.jpg"})))}}]),t}(n.Component)),B=a(57),q=(a(140),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={menuOpen:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"toggleMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(B.slide,{right:!0,width:"100%",isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)}},o.a.createElement(E.b,{to:"/",onClick:function(){return e.closeMenu()}},"Inicio"),o.a.createElement(E.b,{to:"/Photos",onClick:function(){return e.closeMenu()}},"Fotos"),o.a.createElement(E.b,{to:"/About",onClick:function(){return e.closeMenu()}},"Nosotros"),o.a.createElement(E.b,{to:"/Contact",onClick:function(){return e.closeMenu()}},"Contacto"),o.a.createElement("a",{target:"blank",onClick:function(){return e.closeMenu()},className:"menu-item--small",href:"https://www.instagram.com/madbros.spain/"},o.a.createElement("img",{id:"logoInsta",alt:"logo",src:v.a}))))}}]),t}(n.Component)),z=(a(141),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"contactContainer"},o.a.createElement("h1",null,"Mail de contacto:"),o.a.createElement("p",null,"contact@madbrosspain.com"))}}]),t}(n.Component)),F=a(17),W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={isDesktop:!1},a.updatePredicate=a.updatePredicate.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>500})}},{key:"render",value:function(){var e;return e=!1===this.state.isDesktop?o.a.createElement(q,null):"",o.a.createElement(E.a,null,o.a.createElement("div",null,o.a.createElement(O,{isDesktop:this.state.isDesktop}),e,o.a.createElement(F.a,{exact:!0,path:"/",component:T}),o.a.createElement(F.a,{exact:!0,path:"/Photos",component:A}),o.a.createElement(F.a,{exact:!0,path:"/About",component:U}),o.a.createElement(F.a,{exact:!0,path:"/Contact",component:z})))}}]),t}(n.Component),J=Object(i.b)(function(e){return{categorySelected:e.categorySelected}},null)(W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y={categorySelected:"All"},H=Object(s.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("Reducer changeCategory"),t.type){case"SELECT_CATEGORY":return Object.assign({},e,{categorySelected:t.payload});default:return e}return e});c.a.render(o.a.createElement(i.a,{store:H},o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t,a){e.exports=a.p+"static/media/LogoInstaInvertido.391776ef.png"},51:function(e,t,a){e.exports=a.p+"static/media/logoredandwhite.eab043a3.png"},56:function(e,t,a){e.exports=a.p+"static/media/foto-8.61d52a68.jpg"},58:function(e,t,a){e.exports=a(142)},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.0bbf2b6d.chunk.js.map