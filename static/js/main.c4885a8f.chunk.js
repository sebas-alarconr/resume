(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e){e.exports=[{label:"Me",route:"/"},{label:"Resume",route:"/resume"},{label:"Contact",route:"/contact"},{label:"Blog",route:"/blog"}]},31:function(e,t,a){e.exports=a(62)},54:function(e){e.exports={}},60:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(26),c=a.n(r),l=a(0),o=a.n(l),s=a(15),i=a.n(s),m=(a(43),a(1)),u=a(3),p=a(2),d=a(4),b=a(12),f=a(5),h=a.n(f),E=function(e){var t={navlink:!0};return e.isCurrent&&(t["navlink--active"]=!0),{className:h()(t)}},_=function(e){return o.a.createElement(n.a,Object.assign({},e,{getProps:E}))},v=a(27),g="regular",y="light",N="brand",k="solid",w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:a.getClass()}),a.renderAnimatedIcon())},a.renderAnimatedIcon=function(){var e;return a.props.animated&&(e=o.a.createElement("i",{className:a.getClass(!0)})),e},a.getClass=function(e){var t={icon:!0,"icon--animated":a.props.animated,icon__default:a.props.animated&&!e,icon__transform:a.props.animated&&e,"show-animation":a.props.showSecondIcon};return t[a.getIconStyle()]=!0,t[a.getIconName(e)]=!0,t["fa-".concat(a.props.size)]=!0,t["icon--".concat(a.props.type)]=!0,t[a.props.className]=a.props.className,h()(t)},a.getIconStyle=function(){var e;switch(a.props.iconStyle){case g:e="".concat("fa","r");break;case y:e="".concat("fa","l");break;case N:e="".concat("fa","b");break;case k:e="".concat("fa","s");break;default:e=""}return e},a.getIconName=function(e){var t=e?a.props.secondIconName:a.props.name;return"fa-".concat(t)},a}return Object(d.a)(t,e),t}(l.Component);w.defaultProps={animated:!1,showSecondIcon:!1,size:"sm",type:"primary"};var O=w,j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return o.a.createElement("button",{className:a.getClass(),onClick:a.props.onClick},a.props.children)},a.getClass=function(){var e={button:!0};return e[a.props.className]=a.props.className,h()(e)},a}return Object(d.a)(t,e),t}(l.Component),C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).render=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("nav",{className:a.getNavClass()},o.a.createElement("ul",{className:"header__list no-margin"},v.map(a.renderHeaderItem)),o.a.createElement("div",{className:"header__menuicon hide-medium-up"},o.a.createElement(j,{className:"header__buttonmenu",onClick:a.handleNavBarIconClick},o.a.createElement(O,{animated:!0,className:"no-margin",iconStyle:"solid",name:"bars",secondIconName:"times",showSecondIcon:a.state.opened,size:"lg",type:"tertiary"})))))},a.renderHeaderItem=function(e,t){return o.a.createElement("li",{className:"header__listitem",key:t},o.a.createElement(_,{to:e.route,onClick:a.handleLinkClick},e.label))},a.getNavClass=function(){var e={header__nav:!0,"header__nav--open":a.state.opened};return h()(e)},a.handleNavBarIconClick=function(e){a.setState({opened:!a.state.opened}),e.preventDefault()},a.handleLinkClick=function(){a.setState({opened:!1})},a.state={opened:!1},a}return Object(d.a)(t,e),t}(l.Component),x=a(28),I=a.n(x),S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return o.a.createElement("article",{className:"index text-center app__content"},o.a.createElement("div",{className:"index__imagecontainer"},o.a.createElement("img",{src:"".concat("/bio","/bio_pic.png"),alt:"Personal"})),o.a.createElement("h1",null,"Hi! I'm Sebas."),o.a.createElement("section",null,o.a.createElement("p",null,"My name is Sebastian Alarcon. I'm ",I()().diff([1992,2,28],"years")," years old and I was born in Bogota, Colombia."),o.a.createElement("a",{href:"https://github.com/sebas-alarconr",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(O,{iconStyle:"brand",name:"github-square",size:"2x",type:"secondary"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/sebastian-alarcon-ramos",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(O,{iconStyle:"brand",name:"linkedin",size:"2x",type:"secondary"})),o.a.createElement("a",{href:"https://stackoverflow.com/users/9347317/sebasti%C3%A1n-alarc%C3%B3n",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(O,{iconStyle:"brand",name:"stack-overflow",size:"2x",type:"secondary"}))))},a}return Object(d.a)(t,e),t}(l.Component),A=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){b.toast.error("Oops! This page seems that doesn't exist")},a.componentDidUpdate=function(){b.toast.error("Oops! This page seems that doesn't exist")},a.render=function(){return o.a.createElement("article",{className:"notfound",style:{background:"url(".concat("/bio","/404.png) 60% center/cover")}},o.a.createElement("div",{className:"notfound__container app__content"},o.a.createElement("div",{className:"notfound__textcontainer"},o.a.createElement("h1",null,"404! Page Not Found."),o.a.createElement("h2",null,"We were searching your page but we couldn't find it."))))},a}return Object(d.a)(t,e),t}(l.Component),B=(a(54),a(16)),D=a.n(B),z=a(29),P=a(30),H=a(17),T=a.n(H),q=(a(59),{apiKey:"AIzaSyBSFtPxgJS8USawtuUnHwVHH0ttP3V7Nx8",authDomain:"my-personal-bio.firebaseapp.com",databaseURL:"https://my-personal-bio.firebaseio.com",projectId:"my-personal-bio",storageBucket:"my-personal-bio.appspot.com",messagingSenderId:"770715025261",appId:"1:770715025261:web:8aa851a469fa962f"}),F=new(function(){function e(){Object(m.a)(this,e),T.a.initializeApp(q),this.db=T.a.firestore(),this.bioId="dqqrhVhL4q05XfXYhP9R"}return Object(P.a)(e,[{key:"getBio",value:function(){var e=Object(z.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("bios/".concat(this.bioId)).get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}()),L=a(6),M=a.n(L),U=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=function(){F.getBio().then(function(e){return a.setState({bioData:e.data()})})},a.render=function(){var e=a.state.bioData;return console.log(e),o.a.createElement("article",{className:"resume app__content"},o.a.createElement("h1",null,"Overview"),o.a.createElement("p",null,M.a.get(e,"overview")),o.a.createElement("h2",null,"Experience"),o.a.createElement("ul",{className:"resume__experience"},M.a.get(e,"experience",[]).map(a.renderExperience)),o.a.createElement("h2",null,"Education"),o.a.createElement("ul",{className:"resume__education"},M.a.get(e,"education",[]).map(a.renderEducation)),o.a.createElement("h2",null,"Community"),o.a.createElement("ul",{className:"resume__community"},M.a.get(e,"community",[]).map(a.renderCommunity)))},a.renderExperience=function(e,t){return o.a.createElement("li",{className:"resume__experience-item",key:t},o.a.createElement("div",{className:"resume__experience-item-title"},o.a.createElement("div",{className:"resume__list-bullet resume__list-bullet--outer"},o.a.createElement("div",{className:"resume__list-bullet resume__list-bullet--inner"})),o.a.createElement("h3",null,e.company)),o.a.createElement("div",{className:"resume__experience-item-content"},o.a.createElement("p",null,e.title),o.a.createElement("p",null,e.start," - ",e.end),o.a.createElement("p",null,M.a.get(e,"technologies",[]).map(a.renderTechnologies)),o.a.createElement("ul",null,M.a.get(e,"responsabilities",[]).map(a.renderExtraInfo))))},a.renderEducation=function(e,t){return o.a.createElement("li",{className:"resume__education-item",key:t},o.a.createElement("div",{className:"resume__education-item-title"},o.a.createElement("div",{className:"resume__list-bullet resume__list-bullet--outer"},o.a.createElement("div",{className:"resume__list-bullet resume__list-bullet--inner"})),o.a.createElement("h3",null,e.institution)),o.a.createElement("div",{className:"resume__education-item-content"},o.a.createElement("p",null,e.title),o.a.createElement("p",null,e.start," - ",e.end),o.a.createElement("ul",null,M.a.get(e,"extras",[]).map(a.renderExtraInfo))))},a.renderCommunity=function(e,t){return o.a.createElement("li",{className:"resume__community-item",key:t},o.a.createElement("div",{className:"resume__community-item-title"},o.a.createElement("div",{className:"resume__list-bullet resume__list-bullet--outer"},o.a.createElement("div",{className:"resume__list-bullet resume__list-bullet--inner"})),o.a.createElement("h3",null,e.role)),o.a.createElement("div",{className:"resume__community-item-content"},o.a.createElement("p",null,e.description),o.a.createElement("p",null,M.a.get(e,"dates",[]).map(a.renderDates)),o.a.createElement("ul",null,M.a.get(e,"events",[]).map(a.renderEvents))))},a.renderExtraInfo=function(e,t){return o.a.createElement("li",{key:t},e)},a.renderDates=function(e,t){var a=t?" - ":null;return o.a.createElement("span",{key:t},a,e)},a.renderTechnologies=function(e,t){var a=t?", ":null;return o.a.createElement("span",{key:t},a,e)},a.renderEvents=function(e,t){return o.a.createElement("li",{className:"resume__community-item-extra",key:t},o.a.createElement("p",null,e.title),o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"(",e.link,")"))},a.state={bioData:{}},a}return Object(d.a)(t,e),t}(l.Component),J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(b.ToastContainer,null),o.a.createElement("main",null,o.a.createElement(n.c,null,o.a.createElement(S,{path:"/"}),o.a.createElement(U,{path:"/resume"}),o.a.createElement(A,{default:!0}))))},a}return Object(d.a)(t,e),t}(l.Component);a(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=c()(),V=Object(n.d)(R);i.a.render(o.a.createElement(function(){return o.a.createElement(n.b,{history:V},o.a.createElement(J,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.c4885a8f.chunk.js.map