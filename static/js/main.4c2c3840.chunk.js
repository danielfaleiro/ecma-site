(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1005:function(e,a,t){},17:function(e,a,t){e.exports=t.p+"static/media/fisioterapia.1c574da8.jpg"},1762:function(e,a,t){},1763:function(e,a,t){},1764:function(e,a,t){},1766:function(e,a,t){},1767:function(e,a,t){},1768:function(e,a,t){},18:function(e,a,t){e.exports=t.p+"static/media/osteopatia.ff5fd661.jpg"},19:function(e,a,t){e.exports=t.p+"static/media/pilates.b1185abd.jpg"},1946:function(e,a,t){},1947:function(e,a,t){},1963:function(e,a,t){},1964:function(e,a,t){},1965:function(e,a,t){},1966:function(e,a,t){},1968:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(23),i=t.n(o),c=(t(48),t(8)),r=t(9),l=t(11),m=t(10),d=t(12),u=(t(49),t(17)),p=t.n(u),E=t(18),f=t.n(E),v=t(19),N=t.n(v),h=t(20),g=t.n(h),b=(t(50),t(34)),x=t.n(b),w=t(27),I={home:"/ecma-site",clinic:"/ecma-site/clinica",faith:"/ecma-site/nossaconfessionalidade",team:"/ecma-site/equipe",services:{self:"/ecma-site/servicos",fisio:"/ecma-site/servicos/fisioterapia",osteo:"/ecma-site/servicos/osteopatia",pilates:"/ecma-site/servicos/pilates",training:"/ecma-site/servicos/treinamentofisico"},contact:"/ecma-site/contato"},C=t(2),O=function(){document.getElementById("mobileNavigation").classList.remove("show-mobile-menu");var e=document.getElementById("navigation");e.classList.contains("shadow-1")||e.classList.add("shadow-1"),document.getElementById("dropdown-content").classList.remove("show-dropdown"),window.scrollTo(0,0)},S=function(e){return s.a.createElement(C.b,{to:e.to,onClick:O},e.children)},y=function(){var e="Home",a="A Cl\xednica",t="Nossa Confessionalidade",n="Equipe",o={self:"Servi\xe7os",fisioterapia:"Fisioterapia",osteopatia:"Osteopatia",pilates:"Pilates",treinamento:"Treinamento F\xedsico"},i="Contato",c=function(e,a,t){e?(t.classList.add("show-mobile-menu"),a.classList.remove("shadow-1")):(t.classList.remove("show-mobile-menu"),a.classList.add("shadow-1"))},r=function(e){var a=document.getElementById("mobileNavigation"),t=document.getElementById("navigation");!0===e||!1===e?c(e,t,a):a.classList.contains("show-mobile-menu")?c(!1,t,a):c(!0,t,a)},l=function(e){var a=document.getElementById("dropdown-content");e?a.classList.add("show-dropdown"):a.classList.remove("show-dropdown")};return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{id:"navigation",className:"flex justify-between navigation shadow-1"},s.a.createElement("div",{className:"logoContainer"},s.a.createElement(S,{to:I.home},s.a.createElement("img",{className:"headerLogo",src:x.a,alt:"Logo"}))),s.a.createElement("div",{className:"menuItems"},s.a.createElement(C.c,{exact:!0,to:I.home,className:"center items-center menu-item",activeClassName:"nav-active"},s.a.createElement("p",{onClick:O,className:"lato"},e)),s.a.createElement(C.c,{to:I.clinic,className:"center items-center menu-item",activeClassName:"nav-active"},s.a.createElement("p",{onClick:O,className:"lato"},a)),s.a.createElement(C.c,{to:I.faith,className:"center items-center menu-item",activeClassName:"nav-active"},s.a.createElement("p",{onClick:O,className:"lato"},t)),s.a.createElement(C.c,{to:I.team,className:"center items-center menu-item",activeClassName:"nav-active"},s.a.createElement("p",{onClick:O,className:"lato"},n)),s.a.createElement("div",{className:"dropdown"},s.a.createElement(C.c,{exact:!0,to:I.services.self,onFocus:function(){return l(!0)},className:"center items-center menu-item",activeClassName:"nav-active"},s.a.createElement("p",{onClick:O,className:"lato flex"},o.self,s.a.createElement(w.MdArrowDropDown,{className:"self-center",size:"25"}))),s.a.createElement("div",{id:"dropdown-content",className:"dropdown-content color-ecma-blue lato"},s.a.createElement(C.c,{to:I.services.fisio,onClick:O,activeClassName:"dropdown-active"},o.fisioterapia),s.a.createElement(C.c,{to:I.services.osteo,onClick:O,activeClassName:"dropdown-active"},o.osteopatia),s.a.createElement(C.c,{to:I.services.pilates,onClick:O,activeClassName:"dropdown-active"},o.pilates),s.a.createElement(C.c,{to:I.services.training,onClick:O,onBlur:function(){return l(!1)},activeClassName:"dropdown-active"},o.treinamento))),s.a.createElement(C.c,{to:I.contact,className:"center items-center menu-item",activeClassName:"nav-active"},s.a.createElement("p",{onClick:O,className:"lato"},i)),s.a.createElement("button",{id:"menu-icon",onClick:r,className:"menu-icon pointer"},s.a.createElement(w.MdMenu,{size:"30"})))),s.a.createElement("nav",{id:"mobileNavigation",className:"mobile-navigation"},s.a.createElement("div",{id:"mobileMenu",className:"menu-mobile"},s.a.createElement(C.c,{exact:!0,to:I.home,onClick:O,className:"mobile-menu-item",activeClassName:"dropdown-active"},e),s.a.createElement(C.c,{to:I.clinic,onClick:O,className:"mobile-menu-item",activeClassName:"dropdown-active"},a),s.a.createElement(C.c,{to:I.faith,onClick:O,className:"mobile-menu-item",activeClassName:"dropdown-active"},t),s.a.createElement(C.c,{to:I.team,onClick:O,className:"mobile-menu-item",activeClassName:"dropdown-active"},n),s.a.createElement("div",{className:"dropdown"},s.a.createElement(C.c,{exact:!0,to:I.services.self,onClick:O,className:"mobile-menu-item",activeClassName:"dropdown-active"},o.self,s.a.createElement(w.MdArrowDropDown,{className:"self-center",size:"25"})),s.a.createElement("div",{className:"dropdown-content color-ecma-blue lato hma"},s.a.createElement(C.c,{to:I.services.fisio,onClick:O,activeClassName:"dropdown-active"},o.fisioterapia),s.a.createElement(C.c,{to:I.services.osteo,onClick:O,activeClassName:"dropdown-active"},o.osteopatia),s.a.createElement(C.c,{to:I.services.pilates,onClick:O,activeClassName:"dropdown-active"},o.pilates),s.a.createElement(C.c,{to:I.services.training,onClick:O,activeClassName:"dropdown-active"},o.treinamento))),s.a.createElement(C.c,{to:I.contact,onClick:O,onBlur:function(){return r(!1)},className:"mobile-menu-item",activeClassName:"dropdown-active"},i))))},k=(t(1005),t(37)),A=t.n(k),F=t(13),M=function(){return s.a.createElement("div",{className:"footer center bg-ecma-blue pt4 pb4 white roboto"},s.a.createElement("div",{className:"min-max-width hma flex justify-between footer-inner"},s.a.createElement("div",{className:"center items-center flex-column footer-logo-container"},s.a.createElement("img",{className:"footer-logo",src:A.a,alt:"Logo"})),s.a.createElement("div",{className:"center items-center flex-column footer-info"},s.a.createElement("div",{className:"start flex-row items-center footer-info-left"},s.a.createElement(F.IoLocation,{className:"footer-icon",size:40}),s.a.createElement("p",{className:"footer-text"},"Rua 85A - Qd. F-16, Lote 13 St. Sul",s.a.createElement("br",null),"Goi\xe2nia - GO",s.a.createElement("br",null),"CEP: 74080-020")),s.a.createElement("div",{className:"start flex-row items-center"},s.a.createElement(F.IoIosTelephone,{className:"footer-icon",size:40}),s.a.createElement("p",{className:"footer-text"},s.a.createElement("a",{className:"footer-link",href:"tel:06239261118"},"(62) 3926-1118"),s.a.createElement("span",null," / "),s.a.createElement("a",{className:"footer-link",href:"tel:062991050615"},"(62) 9 9105-0615"))),s.a.createElement("a",{className:"start items-center flex-row footer-link",href:"mailto:raydelmm@gmail.com"},s.a.createElement(F.IoEmail,{className:"footer-icon",size:40}),s.a.createElement("p",{className:"footer-text"},"raydelmm@gmail.com"))),s.a.createElement("div",{className:"center footer-social-media items-center"},s.a.createElement("a",{className:"footer-link",href:"https://www.facebook.com/espacoraydelmarques/"},s.a.createElement(F.IoSocialFacebook,{className:"social-icon",size:60})),s.a.createElement("a",{className:"footer-link",href:"https://www.instagram.com/espacoecma/"},s.a.createElement(F.IoSocialInstagram,{className:"social-icon",size:60})))))},T=t(24),L=t(38),X=t.n(L),j=t(39),q=t.n(j),R=t(40),z=t.n(R),D=(t(1761),t(1762),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).validateEmail=function(){var e=t.state.email.toLowerCase(),a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),n=document.getElementById("FormEmail");return 0===e.length?(t.setState({emailError:"E-mail \xe9 um campo obrigat\xf3rio."}),n.className="form-error"):a?(t.setState({emailError:""}),n.className=""):(t.setState({emailError:"Digite um e-mail v\xe1lido."}),n.className="form-error"),a},t.validateName=function(){var e=t.state.name.length<=0,a=document.getElementById("FormName");return e?(t.setState({nameError:"Nome \xe9 um campo obrigat\xf3rio."}),a.className="form-error"):(t.setState({nameError:""}),a.className=""),!e},t.validateMessage=function(){var e=t.state.message.length,a=document.getElementById("FormMessage"),n=0===e,s=e<10;return n?(a.className="form-error",t.setState({messageError:"Mensagem \xe9 um campo obrigat\xf3rio."})):s?(a.className="form-error",t.setState({messageError:"Mensagem muito curta."})):(a.className="",t.setState({messageError:""})),!n&&!s},t.validateForm=function(){var e=t.validateMessage(),a=t.validateName(),n=t.validateEmail();return a&&n&&e},t.clearForm=function(){t.setState({name:""}),t.setState({phone:""}),t.setState({email:""}),t.setState({message:""}),t.setState({nameError:""}),t.setState({phoneError:""}),t.setState({emailError:""}),t.setState({messageError:""})},t.submitForm=function(){if(!t.state.isSending&&t.validateForm()){t.setState({isSending:!0});var e=document.getElementById("form-button");e.classList.add("disabled"),fetch("https://serene-forest-13940.herokuapp.com/sendmessage",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.state.name,phone:t.state.phone,email:t.state.email,message:t.state.message})}).then(function(a){a.status>=400?t.addErrorNotification():a.status>=200&&(t.addSuccessNotification(),t.clearForm()),t.setState({isSending:!1}),e.classList.remove("disabled")}).catch(function(){t.addErrorNotification(),t.setState({isSending:!1}),e.classList.remove("disabled")})}},t.setPhone=function(e){t.setState({phone:e.target.value})},t.setEmail=function(e){t.setState({email:e.target.value})},t.setMessage=function(e){t.setState({message:e.target.value})},t.setName=function(e){t.setState({name:e.target.value})},t.addSuccessNotification=t.addSuccessNotification.bind(Object(T.a)(t)),t.addErrorNotification=t.addErrorNotification.bind(Object(T.a)(t)),t.notificationDOMRef=s.a.createRef(),t.state={name:"",phone:"",email:"",message:"",nameError:"",phoneError:"",emailError:"",messageError:"",isSending:!1},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"addSuccessNotification",value:function(){this.notificationDOMRef.current.addNotification({title:"Sucesso!",message:"Mensagem enviada.",type:"success",insert:"top",container:"top-center",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:5e3},dismissable:{click:!0}})}},{key:"addErrorNotification",value:function(){this.notificationDOMRef.current.addNotification({title:"Erro",message:"N\xe3o foi poss\xedvel enviar a mensagem.",type:"danger",insert:"top",container:"top-center",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:5e3},dismissable:{click:!0}})}},{key:"render",value:function(){return s.a.createElement("form",{className:"roboto"},s.a.createElement("label",null,"Nome:"),s.a.createElement("input",{placeholder:"Ex.: Jo\xe3o Silva",id:"FormName",value:this.state.name,onChange:this.setName,type:"text",maxLength:"100"}),s.a.createElement("div",{className:"error-msg"},this.state.nameError),s.a.createElement("label",null,"Telefone (Opcional):"),s.a.createElement(X.a,{className:"input-mask",id:"formTel",mask:"(99) 999999999",placeholder:"Ex.: (62) 98765-4321",value:this.state.phone,onChange:this.setPhone,type:"tel"}),s.a.createElement("label",null,"E-mail:"),s.a.createElement("input",{placeholder:"Ex.: joaosilva@email.com",id:"FormEmail",value:this.state.email,onChange:this.setEmail,type:"email",maxLength:"200"}),s.a.createElement("div",{className:"error-msg"},this.state.emailError),s.a.createElement("label",null,"Mensagem:"),s.a.createElement("textarea",{placeholder:"Digite sua mensagem aqui.",id:"FormMessage",value:this.state.message,onChange:this.setMessage,type:"text",maxLength:"3000"}),s.a.createElement("div",{className:"error-msg"},this.state.messageError),s.a.createElement("div",{id:"form-button",className:"fr button no-underline white lato form-button",onClick:this.submitForm},this.state.isSending?s.a.createElement(z.a,{id:"form-loader",type:"ThreeDots",color:"#FFFFFF",height:"15"}):"Enviar"),s.a.createElement(q.a,{ref:this.notificationDOMRef}))}}]),a}(n.Component)),P=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e={lat:-16.684012,lng:-49.257245},a=new window.google.maps.Map(document.getElementById("map"),{zoom:16,center:e});new window.google.maps.Marker({position:e,title:"ECMA"}).setMap(a)}},{key:"render",value:function(){return s.a.createElement("div",{id:"map"})}}]),a}(n.Component),B=(t(1763),function(){return s.a.createElement("div",{className:"center top-page flex-column flex-nowrap lato page-min-height"},s.a.createElement("div",{className:"roboto tc bg-moon-gray container-tpa"},s.a.createElement("h1",{className:"color-ecma-gold"},"Contato"),s.a.createElement("p",{className:"section-subtitle hma"},"Deseja marcar uma avalia\xe7\xe3o? Tem alguma d\xfavida? Pode contar conosco!"),s.a.createElement("div",{className:"contact-info tl"},s.a.createElement(F.IoIosTelephone,{id:"icon1",size:"25"}),s.a.createElement("div",null,s.a.createElement("strong",null,"Telefone")),s.a.createElement("span",null),s.a.createElement("div",{className:"grid-gap"},s.a.createElement("a",{href:"tel:06239261118"},"(62) 3926-1118"),s.a.createElement("span",null," / "),s.a.createElement("a",{href:"tel:062991050615"},"(62) 9 9105-0615")),s.a.createElement(F.IoIosEmail,{id:"icon2",size:"25"}),s.a.createElement("div",null,s.a.createElement("strong",null,"E-mail")),s.a.createElement("span",null),s.a.createElement("a",{href:"mailto:contato@espacoecma.com.br",className:"grid-gap"},"contato@espacoecma.com.br"),s.a.createElement(F.IoIosLocation,{id:"icon3",size:"25"}),s.a.createElement("div",null,s.a.createElement("strong",null,"Endere\xe7o")),s.a.createElement("span",null),s.a.createElement("div",{className:"grid-gap"},"Rua 85A Qd. F-16, Lote 13 St. Sul",s.a.createElement("br",null),"Goi\xe2nia - GO",s.a.createElement("br",null),"CEP: 74080-020"))),s.a.createElement(P,null),s.a.createElement("div",{className:"center flex-nowrap flex-column min-max-width"},s.a.createElement("div",{className:"hma section-container"},s.a.createElement("h1",{className:"tc color-ecma-gold"},"Deixe sua mensagem"),s.a.createElement(D,null))))}),U=(t(1764),t(14),t(3)),G=t.n(U),Q=function(e){var a=e.to,t=e.text,n=e.className;return void 0===n?n="button lato":n+=" button lato",s.a.createElement(C.b,{className:n,to:a,onClick:O},t)},J=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.flip,t=e.title,n=document.getElementById("cardOuter".concat(t)),s=document.getElementById("cardInner".concat(t));a?s.classList.add("card-flip"):(n.classList.add("flex-row"),n.classList.add("card-container-bg"))}},{key:"render",value:function(){var e=this.props,a=e.title,t=e.img,n=e.text,o=e.route;return s.a.createElement("div",{id:"cardOuter".concat(a),className:"card-container"},s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0},s.a.createElement("div",{id:"cardInner".concat(a),className:"card-inner center min-max-width"},s.a.createElement("img",{className:"card-img",src:t,alt:a}),s.a.createElement("div",{className:"card-info start flex-column flex-nowrap"},s.a.createElement("h3",null,a),s.a.createElement("p",{className:"text",style:{flexGrow:1}},n),s.a.createElement(Q,{to:o,className:"self-start card-button",text:"Saiba mais"})))))}}]),a}(n.Component),V=function(){return s.a.createElement("div",{className:"top-page container-tpa center flex-nowrap flex-column lato page-min-height"},s.a.createElement("h1",{className:"center min-max-width tc color-ecma-gold hma"},"Nossos Servi\xe7os"),s.a.createElement("div",{className:"center flex-row flex-wrap"},s.a.createElement(J,{img:p.a,title:"FISIOTERAPIA",route:I.services.fisio,text:"Texto",flip:!1}),s.a.createElement(J,{img:f.a,title:"OSTEOPATIA",route:I.services.osteo,text:"Texto",flip:!0}),s.a.createElement(J,{img:N.a,title:"PILATES",route:I.services.pilates,text:"Texto",flip:!1}),s.a.createElement(J,{img:g.a,title:"TREINAMENTO F\xcdSICO",route:I.services.training,text:"Texto",flip:!0})))},H=(t(1766),function(e){var a=e.name,t=e.image,n=e.others;return s.a.createElement("div",{className:"top-page container-tpa page-min-height"},s.a.createElement("div",{className:"hma min-max-width center flex-column section-container lato"},s.a.createElement("h1",{className:"color-ecma-gold tc"},a),s.a.createElement("div",{className:"start flex-column flex-wrap"},s.a.createElement("div",{className:"start flex-wrap"},s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0,className:"service-text service-0"},s.a.createElement("h3",null,"O QUE \xc9?"),s.a.createElement("p",null,"Texto")),s.a.createElement(G.a,{animateIn:"fadeInRight",animateOnce:!0,className:"service-image"},s.a.createElement("img",{src:"".concat(t),alt:"Fisioterapia",height:"400px",width:"100%"})),s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0,className:"service-1 service-text"},s.a.createElement("h3",null,"COMO FUNCIONA"),s.a.createElement("p",null,"Texto")),s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0,className:"service-2 service-text"},s.a.createElement("h3",null,"PARA QUEM \xc9 INDICADO"),s.a.createElement("p",null,"Texto")),s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0,className:"service-3 service-text"},s.a.createElement("h3",null,"CONTATO"),s.a.createElement("p",null,"Texto"))))),s.a.createElement("div",{className:"bg-ecma-gray other-services section-container"},s.a.createElement("div",{className:"min-max-width center flex-column items-center"},s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0},s.a.createElement("h1",{className:"tc lato color-ecma-gray"},"Conhe\xe7a Tamb\xe9m")),s.a.createElement(G.a,{animateIn:"fadeInUp",animateOnce:!0,className:"center flex-row flex-wrap"},n.services.map(function(e,a){return s.a.createElement(C.b,{to:n.route[a],key:a,onClick:O,className:"services-bt white b lato",style:{backgroundImage:"url(".concat(n.images[a],")"),backgroundSize:"250px 250px"}},s.a.createElement("span",{className:"services-bt-text"},e.toUpperCase()))})))))}),W=(t(1767),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.index,a=document.getElementById("member".concat(e)),t=document.getElementById("memberInfo".concat(e));e%2===0?(a.classList.add("team-left"),t.classList.add("team-left")):(a.classList.add("team-right"),t.classList.add("team-right"))}},{key:"render",value:function(){var e=this.props,a=e.index,t=e.name,n=e.job,o=e.credentials,i=e.phone,c=e.email;return s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0},s.a.createElement("div",{id:"member".concat(a),className:"min-max-width start flex-wrap member-container lato"},s.a.createElement("div",{className:"member-photo center"},"Foto"),s.a.createElement("div",{id:"memberInfo".concat(a),className:"member-info center flex-wrap"},s.a.createElement("span",{className:a%2===0?"triangle-right":"triangle-left"}),s.a.createElement("div",{className:"member-info-1"},s.a.createElement("h2",null,t),s.a.createElement("div",null,s.a.createElement("p",{className:"member-text"},n),s.a.createElement("p",null,o))),s.a.createElement("div",{className:"member-info-2 ts start flex-column"},s.a.createElement("span",null,s.a.createElement("p",null,s.a.createElement("strong",null,"Telefone:")),s.a.createElement("p",null,i)),s.a.createElement("span",null,s.a.createElement("p",null,s.a.createElement("strong",null,"E-mail:")),s.a.createElement("p",null,s.a.createElement("a",{href:"mailto:"+c},c)))),s.a.createElement("div",{className:"member-info-3"},"Texto"))))}}]),a}(n.Component)),$=function(){return s.a.createElement("div",{className:"min-max-width top-page container-tpa center flex-column page-min-height"},s.a.createElement("h1",{className:"color-ecma-gold tc lato"},"Nossa Equipe"),s.a.createElement("div",{className:"hma mt3 flex justify-between flex-column flex-wrap"},s.a.createElement(W,{index:1,name:"RAYDEL MARQUES",job:"Fisioterapeuta",credentials:"CREFITO: 11/XXXXX-X",phone:"(62) XXXX-XXXX",email:"fisioterapia@espacoecma.com.br"}),s.a.createElement(W,{index:2,name:"LUANA FALEIRO",job:"Educadora F\xedsica",credentials:"CREF XXXXXXX",phone:"(62) XXXX-XXXX",email:"treinamento@espacoecma.com.br",flip:!0}),s.a.createElement(W,{index:3,name:"NOME SOBRENOME",job:"Instrutora de Pilates",credentials:"Credencial",phone:"(62) XXXX-XXXX",email:"pilates@espacoecma.com.br"}),s.a.createElement(W,{index:4,name:"NOME SOBRENOME",job:"Instrutora de Pilates",credentials:"Credencial",phone:"(62) XXXX-XXXX",email:"pilates@espacoecma.com.br"})))},Y=(t(1768),t(28)),K=(t(1946),function(e){var a=e.icon,t=e.title,n=e.text,o=e.size;return s.a.createElement("div",{className:"icon-card flex justify-between items-center flex-column"},function(){switch(a){case"eye":return s.a.createElement(Y.GoEye,{className:"color-ecma-gold",size:o});case"star":return s.a.createElement(Y.GoStar,{className:"color-ecma-gold",size:o});case"heart":return s.a.createElement(Y.GoHeart,{className:"color-ecma-gold",size:o});default:return s.a.createElement("p",null,"Invalid Icon")}}(),s.a.createElement("h3",{className:"color-ecma-gold"},t),s.a.createElement("p",{className:"tc roboto icon-card-text"},n))}),Z=function(){return s.a.createElement("div",{id:"clinicPage",className:"hma top-page container-tpa page-min-height"},s.a.createElement("div",{className:"center min-max-width clinic-container center flex-column lato"},s.a.createElement("h1",{className:"tc color-ecma-gold"},"Bem-vindo ao ECMA"),s.a.createElement("p",{className:"section-subtitle tc"},"Pensando em voc\xea, nosso cliente, buscamos um meio de oferecer servi\xe7os de sa\xfade e qualidade de vida, mas com um contexto voltado para a tr\xedade do ser humano. Assim nasce o ECMA \u2013 ",s.a.createElement("strong",null),"Espa\xe7o Cl\xednico Raydel Marques, que busca n\xe3o somente oferecer servi\xe7os, mas tamb\xe9m propor uma experiencia em busca do reequil\xedbrio da sa\xfade de forma humanizada."),s.a.createElement("div",{className:"center flex-row flex-wrap container-vpa"},s.a.createElement(G.a,{animateIn:"slideInLeft",animateOnce:!0,className:"clinic-panel clinic-img"}),s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0,className:"clinic-panel"},s.a.createElement("h3",{className:"lato"},"FILOSOFIA"),s.a.createElement("p",{className:"text"},"Sua sa\xfade estar\xe1 nas m\xe3os de \xf3timos profissionais. O que estes tem em comum \xe9 uma vis\xe3o cl\xe1ssica de sa\xfade."),s.a.createElement("p",{className:"text"},"A Filosofia de sa\xfade do ECMA considera que a qualidade de vida est\xe1 firmemente enraizada na busca de um equil\xedbrio da sa\xfade do ",s.a.createElement("strong",null,"corpo"),", da ",s.a.createElement("strong",null,"mente")," e do ",s.a.createElement("strong",null,"esp\xedrito"),". O enriquecimento da vida social, emocional com a conserva\xe7\xe3o da riqueza teol\xf3gica e moral, nos faz olhar para o corpo como uma s\xf3 ",s.a.createElement("strong",null,"unidade"),", onde a sa\xfade \xe9 influenciada pelos fatores internos e externos podendo gerar um desequil\xedbrio. \u201cCl\xe1ssicos s\xe3o admirados n\xe3o porque s\xe3o antigos; em vez disso, s\xe3o cl\xe1ssicos porque continuam a ser verdadeiros com pessoas de muitas \xe9pocas, culturas e idiomas\u201d.")),s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0,className:"clinic-panel"},s.a.createElement("h3",{className:"lato"},"METODOLOGIA DE TRABALHO"),s.a.createElement("p",{className:"text"},"Somos um ",s.a.createElement("strong",null,"espa\xe7o de sa\xfade cl\xe1ssica"),"."),s.a.createElement("p",{className:"text"},"Ser um espa\xe7o de sa\xfade \xe9 buscar e apresentar meios de gerar equil\xedbrio para o corpo. Portanto, a ",s.a.createElement(S,{to:I.faith},"nossa confessionalidade")," se expressa diretamente em nossas a\xe7\xf5es e elo entre terapeuta e cliente. Assim, buscamos identificar os campos a serem trabalhados em nossos clientes, respeitando e incentivando esses aspectos, mas tamb\xe9m respeitando sua f\xe9."),s.a.createElement("p",{className:"text"},"Ser um espa\xe7o com bases crist\xe3s \xe9 olhar para a tr\xedade do ser humano e us\xe1-las com os instrumentos necess\xe1rios para identificar aquilo que possa estar interferindo no equil\xedbrio da sa\xfade e bem-estar dos nossos clientes. O espa\xe7o ECMA apresenta em suas a\xe7\xf5es o que \xe9 um ser crist\xe3o, com amor ao pr\xf3ximo, compaix\xe3o, servir e demonstrando empatia."),s.a.createElement("p",{className:"text"},"Enquanto metodologia nos identificamos com a ",s.a.createElement("strong",null,"sa\xfade cl\xe1ssica"),", isso significa que nossa abordagem se d\xe1 pelos m\xe9todos das medicinas tradicionais e recursos da sa\xfade humanizada e natural. Com \xeanfase nos aspectos de aten\xe7\xe3o ao pr\xf3ximo."),s.a.createElement("p",{className:"text"},"A sa\xfade, vista por este \xe2ngulo, nos faz perceber o ser humano como um todo e proporciona as duas partes uma experiencia de humaniza\xe7\xe3o e empatia.")),s.a.createElement(G.a,{animateIn:"slideInRight",animateOnce:!0,className:"clinic-panel clinic-img"})),s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0,className:"center flex-row flex-wrap container-vpa"},s.a.createElement(K,{icon:"eye",size:"4em",title:"Vis\xe3o",text:"Atendimento humanizado com foco na tr\xedade do ser humano."}),s.a.createElement(K,{icon:"star",size:"4em",title:"Miss\xe3o",text:"Ser um espa\xe7o modelo para promo\xe7\xe3o da sa\xfade reequil\xedbrio do corpo da alma e do espirito."}),s.a.createElement(K,{icon:"heart",size:"4em",title:"Valores",text:"Exposi\xe7\xe3o da f\xe9 nas a\xe7\xf5es, exercer empatia e demonstrar a\xe7\xf5es de humaniza\xe7\xe3o."}))))},_=t(41),ee=t.n(_),ae=function(){return s.a.createElement("div",{className:"hma lato top-page page-min-height"},s.a.createElement("div",{className:"min-max-width center flex-column container-tpa"},s.a.createElement("h1",{className:"tc lato color-ecma-gold"},"Nossa Confessionalidade"),s.a.createElement("p",{className:"text"},"Temos a ",s.a.createElement("strong",null,"Teologia Reformada")," como base de nossas vidas, que adere \xe0 f\xe9, a pr\xe1tica e \xe0s defini\xe7\xf5es doutrin\xe1rias exemplificadas especialmente pela B\xedblia, pelos cr\xedticos das eras apost\xf3licas e p\xf3s-apost\xf3licas. Essa teologia sempre abra\xe7ou uma rica vida espiritual e intelectual, produzindo algumas das melhores mentes dos tempos cl\xe1ssicos e modernos. N\xf3s praticamos dessa tradi\xe7\xe3o duradoura. Consequentemente, somos livres para discutir e viver nossa f\xe9 frente \xe0s outras tend\xeancias religiosas, culturas e pol\xedticas. Entretanto, o ECMA acolhe colaboradores, parceiros, pacientes, clientes e amigos de diversas origens, respeitando suas tradi\xe7\xf5es religiosas.")),s.a.createElement("div",{className:"min-max-width center flex-column container-bpa"},s.a.createElement("h1",{className:"tc lato color-ecma-gold"},"Nossa Confiss\xe3o de F\xe9"),s.a.createElement("p",{className:"text"},"Ser uma fam\xedlia crist\xe3 \xe9 ver o ser humano como uma cria\xe7\xe3o Divina, onde as enfermidades \xe9 obra do mau e do mundo em que vivemos. Em nossa abordagem, Deus toma o lugar central, respeitando as individualidades e buscando o centro das necessidades de cada um a quem se disp\xf5e a fazer parte do nosso trabalho."),s.a.createElement(Q,{className:"hma center",to:ee.a,text:"Leia Nossa Confiss\xe3o de F\xe9"})))},te=t(16),ne=(t(1947),t(42)),se=t.n(ne),oe=function(){var e={dots:!0,infinite:!0,swipeToSlide:!0,slidesToShow:1,slidesToScroll:1,autoplay:!1,speed:1e3,autoplaySpeed:5e3,cssEase:"linear",appendDots:function(e){return s.a.createElement("div",{style:{position:"relative",top:"-45px",padding:"10px"}},s.a.createElement("ul",{style:{margin:"0px",paddingInlineStart:"0"}}," ",e," "))}};return s.a.createElement("div",{id:"carousel",className:"carousel top-page"},s.a.createElement(se.a,e,s.a.createElement("div",{className:"carousel-container"},s.a.createElement("div",{className:"min-max-width center flex-column"},s.a.createElement("h1",{className:"carousel-title mb0 hpa white roboto"},"Fisioterapia, Pilates e Personal Trainer em um \xfanico lugar"),s.a.createElement("p",{className:"carousel-subtitle hpa white lato"},"Temos a solu\xe7\xe3o completa para sua sa\xfade e bem-estar."),s.a.createElement(Q,{className:"hma",to:I.services.self,text:"Conhe\xe7a Nossas Especialidades"})))))},ie=(t(1963),function(){return s.a.createElement("div",{className:"intro-container min-max-width section-vpa section-container center flex-row"},s.a.createElement(G.a,{animateIn:"slideInLeft",animateOnce:!0,className:"flex-column intro-title-container"},s.a.createElement("p",{id:"intro-1",className:"color-ecma-gold roboto intro-title"},s.a.createElement("span",{className:"overpass-mono"},"+")," Resultados"),s.a.createElement("p",{id:"intro-2",className:"color-ecma-gold roboto intro-title"},s.a.createElement("span",{className:"overpass-mono"},"+")," Cuidado"),s.a.createElement("p",{id:"intro-3",className:"moon-gray roboto intro-title"},s.a.createElement("span",{className:"overpass-mono"},"-")," Modismo")),s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0,className:"intro-text-container flex flex-column flex-nowrap"},s.a.createElement("p",{className:"intro-text roboto"},"A ",s.a.createElement("span",{className:"color-ecma-gold"},"ECMA")," ... nunc in bibendum libero. Donec molestie non erat sed rutrum. Cras vulputate elementum posuere. Sed vel odio quis elit scelerisque tincidunt sit amet sed ipsum. Praesent sollicitudin quis sapien at mollis. Maecenas vel consequat mauris. Nam fermentum facilisis quam ut auctor."),s.a.createElement("p",{className:"intro-text roboto"},"Mauris lacinia erat ac orci molestie pellentesque. In quis malesuada est. Sed ut velit vehicula, malesuada lorem et, hendrerit metus. Cras sodales gravida arcu facilisis aliquet. Nam sed faucibus ipsum. Aliquam blandit dui sed scelerisque cursus. Duis viverra, nulla id mattis semper, quam lacus iaculis tellus, nec ornare diam elit id nulla. Suspendisse at massa diam. Sed scelerisque feugiat dui nec mollis. Curabitur finibus laoreet tortor et imperdiet. Vestibulum accumsan sodales risus ac sollicitudin.")))}),ce=(t(1964),function(){return s.a.createElement("div",{className:"section-container section-vpa services-container"},s.a.createElement("div",{className:"min-max-width center flex-column tc"},s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0},s.a.createElement("h1",{className:"hma services-title lato"},"Nossos Servi\xe7os")),s.a.createElement(G.a,{animateIn:"fadeInUp",animateOnce:!0,className:"hma center flex-row flex-wrap"},s.a.createElement(C.b,{id:"fisioterapia-bt",to:I.services.fisio,onClick:O,className:"hma services-bt white lato b"},s.a.createElement("span",{className:"services-bt-text"},"FISIOTERAPIA")),s.a.createElement(C.b,{id:"osteopatia-bt",to:I.services.osteo,onClick:O,className:"hma services-bt white lato b"},s.a.createElement("span",{className:"services-bt-text"},"OSTEOPATIA")),s.a.createElement(C.b,{id:"pilates-bt",to:I.services.pilates,onClick:O,className:"hma services-bt white lato b"},s.a.createElement("span",{className:"services-bt-text"},"PILATES")),s.a.createElement(C.b,{id:"treinamento-bt",to:I.services.training,onClick:O,className:"hma services-bt white lato b"},s.a.createElement("span",{className:"services-bt-text"},"TREINAMENTO F\xcdSICO")))))}),re=[{name:"C\xc9LIO FERREIRA DA SILVA",testmony:"Pratico t\xeanis com frequ\xeancia e contuso\u1ebds, dores e desgastes s\xe3o comuns para mim. Mas sempre conto com a ECMA para ficar 100% novamente e continuar praticando!"},{name:"JOAQUINA PEREREIRA",testmony:"Minha vida melhorou muito depois que passei a praticar pilatates no ECMA."},{name:"MARIA DE LURDES",testmony:"Quando fazia academia, meu treino n\xe3o rendia muito e me faltava motiva\xe7\xe3o. Mas com a professora Luana na ECMA, finalmente alcancei meu potencial de treino!"}],le=(t(1965),function(e){var a=e.id;return s.a.createElement("div",{className:"testmony tl"},s.a.createElement("h5",{className:"color-ecma-gold lato"},re[a].name),s.a.createElement("p",{className:"roboto"},re[a].testmony))}),me=function(){return s.a.createElement("div",{className:"section-container center flex-wrap section-vpa flex-column min-max-width tc"},s.a.createElement(G.a,{animateIn:"fadeIn",animateOnce:!0},s.a.createElement("h1",{className:"hm30 color-ecma-gold lato"},"Depoimentos")),s.a.createElement(G.a,{animateIn:"fadeInUp",animateOnce:!0,className:"hm30 flex justify-between flex-wrap flex-row ts"},s.a.createElement(le,{id:"0"}),s.a.createElement(le,{id:"1"}),s.a.createElement(le,{id:"2"})))},de=function(){return s.a.createElement("div",{className:"page-min-height"},s.a.createElement(oe,null),s.a.createElement(ie,null),s.a.createElement(ce,null),s.a.createElement(me,null))},ue=(t(1966),function(){return s.a.createElement("div",{className:"top-page section-vpa center flex-column hma notFound-container"},s.a.createElement("h1",{className:"tc color-ecma-gold notFound-h1"},"404"),s.a.createElement("h2",{className:"tc color-ecma-gold notFound-h2"},"P\xe1gina n\xe3o encontrada."),s.a.createElement("div",{className:"center"},s.a.createElement(Q,{className:"hma",to:I.home,text:"Ir Para P\xe1gina Inicial"})))}),pe=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(C.a,null,s.a.createElement("div",{className:"color-default"},s.a.createElement(y,null),s.a.createElement(te.c,null,s.a.createElement(te.a,{exact:!0,path:I.home,component:de}),s.a.createElement(te.a,{path:I.clinic,component:Z}),s.a.createElement(te.a,{path:I.faith,component:ae}),s.a.createElement(te.a,{path:I.team,component:$}),s.a.createElement(te.a,{exact:!0,path:I.services.self,component:V}),s.a.createElement(te.a,{path:I.services.fisio,component:Ee}),s.a.createElement(te.a,{path:I.services.osteo,component:fe}),s.a.createElement(te.a,{path:I.services.pilates,component:ve}),s.a.createElement(te.a,{path:I.services.training,component:Ne}),s.a.createElement(te.a,{path:I.contact,component:B}),s.a.createElement(te.a,{component:ue})),s.a.createElement(M,null)))}}]),a}(n.Component),Ee=function(){var e={services:["Osteopatia","Pilates","Treinamento F\xedsico"],images:[f.a,N.a,g.a],route:[I.services.osteo,I.services.pilates,I.services.training]};return s.a.createElement(H,{name:"Fisioterapia",image:p.a,others:e})},fe=function(){var e={services:["Fisioterapia","Pilates","Treinamento F\xedsico"],images:[p.a,N.a,g.a],route:[I.services.fisio,I.services.pilates,I.services.training]};return s.a.createElement(H,{name:"Osteopatia",image:f.a,others:e})},ve=function(){var e={services:["Fisioterapia","Osteopatia","Treinamento F\xedsico"],images:[p.a,f.a,g.a],route:[I.services.fisio,I.services.osteo,I.services.training]};return s.a.createElement(H,{name:"Pilates",image:N.a,others:e})},Ne=function(){var e={services:["Fisioterapia","Osteopatia","Pilates"],images:[p.a,f.a,N.a],route:[I.services.fisio,I.services.osteo,I.services.pilates]};return s.a.createElement(H,{name:"Treinamento F\xedsico",image:g.a,others:e})},he=pe;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(1967);i.a.render(s.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e,a,t){e.exports=t.p+"static/media/treinamento.fa88ab34.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/headerlogo.481d762d.png"},37:function(e,a,t){e.exports=t.p+"static/media/footerlogo.ee738dc2.png"},41:function(e,a,t){e.exports=t.p+"static/media/DECLARA\xc7\xc3O DE F\xc9 ECMA.728ff5d1.pdf"},43:function(e,a,t){e.exports=t(1968)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){}},[[43,1,2]]]);
//# sourceMappingURL=main.4c2c3840.chunk.js.map