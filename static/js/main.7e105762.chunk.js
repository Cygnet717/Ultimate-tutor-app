(this["webpackJsonpultimate_tutor-app"]=this["webpackJsonpultimate_tutor-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/731.b7e9cda5.gif"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/SBBLogo.c7b183d7.png"},,,,function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),s=a(1),o=a(3),i=a(4),u=a(7),m=a(5),d=a(6),p={API_SCRYFALL:"https://api.scryfall.com/",API_ENDPOINT:"https://ultimatetutor-api.herokuapp.com/api",TOKEN_KEY:"auth-token",USER_ID:"user_id",DECKS:"decks"},h={saveAuthToken:function(e,t){window.sessionStorage.setItem(p.TOKEN_KEY,e),window.sessionStorage.setItem(p.USER_ID,t)},getAuthToken:function(){return window.sessionStorage.getItem(p.TOKEN_KEY)},clearAuthToken:function(){window.sessionStorage.removeItem(p.TOKEN_KEY),window.sessionStorage.removeItem(p.USER_ID),window.sessionStorage.removeItem(p.DECKS)},hasAuthToken:function(){return!!h.getAuthToken()},makeBasicAuthToken:function(e,t){return window.btoa("".concat(e,":").concat(t))}},E=h,f=r.a.createContext(),g=(a(32),a(23)),y=a.n(g),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleLogoutClick=function(){E.clearAuthToken(),a.context.clearId()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderLogoutLink",value:function(){return r.a.createElement("div",{className:"header-buttons"},r.a.createElement(s.b,{className:"navLink",to:"/MyDecks"},"My Decks"),r.a.createElement(s.b,{className:"navLink",to:"/SearchCards"},"Search"),r.a.createElement(s.b,{className:"navLink",to:"/",onClick:this.handleLogoutClick},"Logout"))}},{key:"renderLoginLink",value:function(){return r.a.createElement("div",{className:"header-buttons"},r.a.createElement(s.b,{className:"navLink",to:"/LoginPage"},"Login"),r.a.createElement(s.b,{className:"navLink",to:"/RegisterPage"},"Register"))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"header"},r.a.createElement(s.b,{className:"navLink logo",to:"/"},r.a.createElement("img",{className:"utlogo",src:y.a,alt:"UT logo"})),r.a.createElement("div",{className:"headerbottom"},this.context.user_id?this.renderLogoutLink():this.renderLoginLink())))}}]),t}(n.Component);k.contextType=f;var v=a(12),b=(a(38),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Search all of the cards in the Magic: the Gathering universe for the perfect cards to build your deck"),r.a.createElement("p",null,"See official rulings/errata on a card"),r.a.createElement("p",null,"Coming Soon: Add some basic lands to your deck and test draw your first hand"),r.a.createElement("p",null,"SignUp and start building your decks now"),r.a.createElement("p",null,"Or use the Demo User account to see how it works"),r.a.createElement("p",null,"User Name: DemoUser "),r.a.createElement("p",null,"Password: DemoUser1!"))}}]),t}(n.Component)),N=a(11),S=a.n(N),w={postLogin:function(e){return fetch("".concat(p.API_ENDPOINT,"/auth/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postUser:function(e){return fetch("".concat(p.API_ENDPOINT,"/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},C=(a(40),{getDecks:function(){return fetch("".concat(p.API_ENDPOINT,"/decks"),{method:"GET",headers:{authorization:"bearer ".concat(E.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postDeck:function(e,t){return fetch("".concat(p.API_ENDPOINT,"/decks"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(E.getAuthToken())},body:JSON.stringify({user_id:e,deck_name:t})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteDeck:function(e){return fetch("".concat(p.API_ENDPOINT,"/decks"),{method:"DELETE",headers:{"content-type":"application/json",authorization:"bearer ".concat(E.getAuthToken())},body:JSON.stringify({deck_id:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}}),O=a(15),x=a.n(O),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleLoginSuccess=function(){var e=a.props,t=e.location,n=e.history,r=(t.state||{}).from||"/MyDecks";n.push(r)},a.handleSubmitJwtAuth=function(e){e.preventDefault(),a.setState({error:null,thinking:!0});var t=e.target,n=t.username,r=t.password;w.postLogin({username:n.value,password:r.value}).then((function(e){n.value="",r.value="",E.saveAuthToken(e.authToken,e.payload.user_id),a.handleSetUserInfo()})).catch((function(e){a.setState({error:e.error})}))},a.state={error:null,user_id:null,thinking:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSetUserInfo",value:function(){var e,t;return S.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.awrap(C.getDecks());case 2:return e=a.sent,a.next=5,S.a.awrap(this.context.updateDecks(e));case 5:t=a.sent,this.handleLoginSuccess(t);case 7:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmitJwtAuth},r.a.createElement("div",{role:"alert"},this.state.error&&r.a.createElement("p",{className:"red"},this.state.error)),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Login"),r.a.createElement("label",null,"User Name: "),r.a.createElement("input",{required:!0,type:"text",name:"username"}),r.a.createElement("br",null),r.a.createElement("label",null,"Password: "),r.a.createElement("input",{required:!0,type:"password",name:"password"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Login"}))),r.a.createElement("br",null),this.state.thinking?r.a.createElement("img",{id:"thinking",src:x.a,alt:"loading..."}):r.a.createElement("span",null))}}]),t}(n.Component);T.contextType=f,T.defaultProps={location:{},history:{push:function(){}}};a(41);var _=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,registerthinking:!1},a.handleRegistrationSuccess=function(e){a.props.history.push("/LoginPage")},a.handleSubmitNewUser=function(e){e.preventDefault(),a.setState({error:null,registerthinking:!0});var t=e.target,n=t.username,r=t.password;w.postUser({username:n.value,password:r.value}).then((function(e){n.value="",a.handleRegistrationSuccess()})).catch((function(e){a.setState({error:e.error})}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmitNewUser},r.a.createElement("div",{role:"alert"},this.state.error&&r.a.createElement("p",{className:"red"},this.state.error)),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Register New User"),r.a.createElement("label",null,"New User Name: "),r.a.createElement("span",{className:"criteria"},"*Case sensitive"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Password: "),r.a.createElement("br",null),r.a.createElement("span",{className:"criteria"},"*Must be 8 characters long and inclue Capital, number, and one of #?!@$%^&*-"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password"}),r.a.createElement("br",null),this.state.registerthinking?r.a.createElement("img",{id:"thinking",src:x.a,alt:"loading..."}):r.a.createElement("button",{type:"submit"},"Register"))))}}]),t}(n.Component);_.defaultProps={history:{push:function(){}}};var j=a(14),D=(a(42),{getSearchResults:function(e){return fetch(p.API_SCRYFALL+"cards/search?q="+e,{method:"GET",mode:"cors",handlers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log({error:e})}))},getNextPageResults:function(e){return fetch(e,{method:"GET",mode:"cors",handlers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log({error:e})}))},getRulings:function(e){return fetch(e,{method:"GET",mode:"cors",handlers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log({error:e})}))},getNameSearchResults:function(e){return fetch(p.API_SCRYFALL+"cards/named?fuzzy="+e,{method:"GET",mode:"cors",handlers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log({error:e})}))}}),P={getDeckList:function(e){return fetch("".concat(p.API_ENDPOINT,"/decks/").concat(e),{method:"GET",headers:{authorization:"bearer ".concat(E.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postNewCard:function(e,t,a,n,r){return fetch("".concat(p.API_ENDPOINT,"/decks/").concat(n),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(E.getAuthToken())},body:JSON.stringify({card_name:e,image_url:t,multiverseid:a,deck_id:n,type:r})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.log(e)}))},deleteCard:function(e,t){return fetch("".concat(p.API_ENDPOINT,"/decks/").concat(t),{method:"DELETE",headers:{"content-type":"application/json",authorization:"bearer ".concat(E.getAuthToken())},body:JSON.stringify({card_id:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).closeUp=function(){a.setState({imageModalView:"showmodal"})},a.removeImageCloseUp=function(){a.setState({imageModalView:"hidemodal"})},a.removeRulingsCloseUp=function(){a.setState({rulingsModalView:"hidemodal"})},a.revealConfirmation=function(e){var t=a.context.decks.find((function(t){return Number(e.deck_id)===t.deck_id}));a.setState({added:!0,addedCard:e.card_name,addedToDeck:t.deck_name})},a.addCardToDeck=function(e){var t;e.preventDefault(),t="transform"===a.props.layout?a.props.card_faces[0].image_uris.border_crop+", "+a.props.card_faces[1].image_uris.border_crop:a.props.image_uris.normal,console.log(t),P.postNewCard(a.props.name,t,a.props.multiverse_ids[0],a.state.selectedDeck,a.props.type_line).then((function(e){return a.revealConfirmation(e)}))},a.handleDeckChange=function(e){e.preventDefault(),a.setState({selectedDeck:e.target.value,buttonAbility:!1})},a.state={imageModalView:"hidemodal",rulingsModalView:"hidemodal",selectedDeck:0,buttonAbility:!0,rulings:[],added:!1,addedCard:"",addedToDeck:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getCardRulings",value:function(e){var t=this;D.getRulings(e).then((function(e){e.data.length>0?t.setState({rulingsModalView:"showmodal",rulings:e.data}):t.setState({rulingsModalView:"showmodal",rulings:[]})})).catch((function(e){return console.log(e.warnings)}))}},{key:"render",value:function(){var e=this;var t,a=this.props.rulings_uri,n=r.a.createElement("p",{className:"caption"},"There are no rulings for this card at this time.");return this.state.rulings.length>0&&(n=this.state.rulings.map((function(e){return r.a.createElement("p",{className:"caption"},e.published_at,": ",e.comment)}))),r.a.createElement("div",{className:"card"},r.a.createElement("p",{className:"cardName"},this.props.name),r.a.createElement("div",{className:"bottomCard"},r.a.createElement("img",{className:"cardImage",alt:this.props.name,src:(t=this.props,"transform"===t.layout?t.card_faces[0].image_uris.border_crop:t.image_uris.border_crop),onClick:this.closeUp}),r.a.createElement("br",null),r.a.createElement("button",{className:"cardButton",onClick:function(){return e.getCardRulings(a)}},"Rulings"),r.a.createElement("form",{id:this.props.id,onSubmit:this.addCardToDeck},r.a.createElement("select",{className:"pickDeckOption",name:"decklist",id:"decklist",form:"decklist",value:this.state.selectedDeck,onChange:this.handleDeckChange},r.a.createElement("option",{value:"none"},"Pick a deck"),this.context.decks.map((function(e){return r.a.createElement("option",{type:"select",name:"deck",key:e.deck_id,value:e.deck_id},e.deck_name)}))),r.a.createElement("br",null),r.a.createElement("input",{className:"addToDeckButton cardButton",type:"submit",value:"Add to deck",disabled:this.state.buttonAbility}))),r.a.createElement("div",{className:"addedConfirmation"},this.state.added?r.a.createElement("span",null,"Added ",this.state.addedCard," to ",this.state.addedToDeck):r.a.createElement("span",null)),r.a.createElement("div",{id:"rulingsModal",className:this.state.rulingsModalView},r.a.createElement("span",{className:"close",onClick:this.removeRulingsCloseUp},"\u2717"),n,r.a.createElement("div",{id:"legalities",className:"caption"},r.a.createElement("p",null,"Standard: ",this.props.legalities.standard),r.a.createElement("p",null,"Pioneer: ",this.props.legalities.pioneer),r.a.createElement("p",null,"Modern: ",this.props.legalities.modern),r.a.createElement("p",null,"Legacy: ",this.props.legalities.legacy),r.a.createElement("p",null,"Vintage: ",this.props.legalities.vintage),r.a.createElement("p",null,"Brawl: ",this.props.legalities.brawl))),r.a.createElement("div",{id:"imageModal",className:this.state.imageModalView},r.a.createElement("span",{className:"close",onClick:this.removeImageCloseUp},"\u2717"),function(e){return"transform"===e.layout?r.a.createElement("div",null,r.a.createElement("img",{className:"modal-content",alt:e.name,src:e.card_faces[0].image_uris.border_crop}),r.a.createElement("img",{className:"modal-content",alt:e.name,src:e.card_faces[1].image_uris.border_crop})):r.a.createElement("img",{className:"modal-content",alt:e.name,src:e.image_uris.border_crop})}(this.props)))}}]),t}(n.Component);L.contextType=f;var I={supertypes:["Basic","Host","Legendary","Snow","World"],types:["Artifact","Conspiracy","Creature","Enchantment","Hero","Instant","Land","Phenomenon","Plane","Planeswalker","Scheme","Sorcery","Summon","Tribal","Vanguard"],landTypes:["Desert","Forest","Gate","Island","Lair","Locus","Mine","Mountain","Plains","Power-Plant","Swamp","Tower","Urza\u2019s"],enchantmentTypes:["Aura","Cartouche","Curse","Saga","Shrine"],artifactTypes:["Clue","Contraption","Equipment","Food","Fortification","Treasure","Vehicle"],rarity:["Common","Uncommon","Rare","Mythic"],instSorcTypes:["Adventure","Arcane","Trap"],loyaltyTypes:["*","X","2","3","4","5","6","7","20"],powTou:["-1","0","*",".5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","13","14","15","16","20","99"]},A=(a(43),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).executeScroll=function(){console.log("scrollnow"),window.scrollTo({top:800,behavior:"smooth"})},a.scrollUp=function(){window.scrollTo({top:0,behavior:"auto"})},a.handleSubmit=function(e){a.executeScroll(),e.preventDefault(),a.setState({thinking:!0,searched:!0,cards:[]});var t=new FormData(e.target),n="";if(t.get("name")){var r=t.get("name").replace(/ /gi,"+");a.sendNameFetch(r)}else{["types","supertypes","typeOption","additionalType"].map((function(e){return t.get(e)&&(n=n.concat(t.get(e))),n}));if(["power","toughness","combinedPT","loyalty","rarity","cmc"].map((function(e){return"default"===t.get(e)||""===t.get(e)?"return":n=n.concat(t.get(e+"Operator")+t.get(e)+"+")})),t.get("color")){var l="";t.getAll("color").map((function(e){return l=l.concat(e)})),n=n.concat(t.get("colorOperator")+l+"+")}if(0!==a.state.text.length&&a.state.text.map((function(e){return n=n.concat('o:"'+e+'"+')})),t.get("sets")){var c=a.state.setOptions.find((function(e){return JSON.stringify(e.name)===JSON.stringify(t.get("sets"))}));console.log(c),n=t.get("blockSearch")?n.concat("b:"+c.code+"+"):n.concat("s:"+c.code+"+")}a.setState({string:n,nextPage:!1}),a.sendFetch(n)}},a.searchMore=function(){a.setState({thinking:!0}),D.getNextPageResults(a.state.nextPage).then((function(e){e.has_more?a.setState({thinking:!1,nextPage:e.next_page}):a.setState({thinking:!1,nextPage:null}),a.setState({cards:a.state.cards.concat(e.data)})})).catch((function(e){return console.log(e.warnings)}))},a.sendNameFetch=function(e){D.getNameSearchResults(e).then((function(e){if(!e)throw e;var t=[e];a.setState({thinking:!1,nextPage:null,cards:t})})).catch((function(e){a.setState({error:"error"})}))},a.sendFetch=function(e){D.getSearchResults(e).then((function(e){e.has_more?a.setState({thinking:!1,nextPage:e.next_page}):a.setState({thinking:!1,nextPage:null}),a.setState({cards:a.state.cards.concat(e.data)})})).catch((function(e){return console.log(e.warnings)}))},a.expandCollapse=function(){a.state.expanded?a.setState({visible:"hidden",expanded:!1,exp_col:"Expand"}):a.setState({visible:"",expanded:!0,exp_col:"Collapse"})},a.handleAddText=function(){a.setState({text:a.state.text.concat(document.getElementById("text").value)}),document.getElementById("text").value=""},a.clearTextState=function(){a.setState({text:[]})},a.keyPressed=function(e){"Enter"===e.key&&(e.preventDefault(),a.handleAddText())},a.removeItem=function(e){var t=e.target.value,n=a.state.text,r=n.slice(0,t).concat(n.slice(t+1,n.length));a.setState({text:r})},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.state={cards:[],thinking:!1,searched:!1,text:[],validType:!1,Creature:[],Planeswalker:[],setOptions:[],expanded:!1,visible:"hidden",exp_col:"Expand",string:"",nextPage:null,error:"hidden"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderThinking",value:function(){return r.a.createElement("div",{className:"thinkingBox"},r.a.createElement("img",{id:"thinking",src:x.a,alt:"loading..."}))}},{key:"moreButon",value:function(){return null===this.state.nextPage?r.a.createElement("div",null,r.a.createElement("span",{className:"alert"},"No more cards match your criteria"),r.a.createElement("button",{className:"moreoption button"},"New Search")):r.a.createElement("div",null,r.a.createElement("button",{className:"moreoption button",onClick:this.searchMore},"More Results"),r.a.createElement("button",{className:"moreoption button",onClick:this.scrollUp},"New Search"))}},{key:"componentDidMount",value:function(){var e=this;!function(){var t,a,n,r;S.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,S.a.awrap(fetch("https://api.scryfall.com/catalog/creature-types").then((function(e){return e.json()})));case 2:return t=l.sent,l.next=5,S.a.awrap(fetch("https://api.scryfall.com/catalog/planeswalker-types").then((function(e){return e.json()})));case 5:return a=l.sent,l.next=8,S.a.awrap(fetch("https://api.scryfall.com/sets").then((function(e){return e.json()})));case 8:n=l.sent,r=n.data.filter((function(e){return"token"!==e.set_type})),e.setState({Creature:t.data,Planeswalker:a.data,setOptions:r});case 11:case"end":return l.stop()}}))}()}},{key:"uncheckColorless",value:function(){document.getElementById("colorColorless").checked=!1}},{key:"uncheckColors",value:function(){for(var e=0;e<5;e++)document.getElementsByName("color")[e].checked=!1}},{key:"render",value:function(){var e=this;if(!sessionStorage.user_id)return r.a.createElement("div",null,r.a.createElement("h4",null,"Oops you arn't logged in!"),r.a.createElement(s.b,{className:"homeLink",to:"/"},"Home Page"));var t=this.state.cards.map((function(e){return r.a.createElement(L,Object.assign({},e,{key:e.id}))}));0===this.state.cards.length&&this.state.searched&&(t=r.a.createElement("p",null,"No cards were found matching your criteria"));var a=r.a.createElement("p",null,"wrong");!1!==this.state.validType&&(a=r.a.createElement("select",{name:"additionalType",id:"additionaltypes",className:"additionaltypes",defaultValue:"default"},r.a.createElement("option",{hidden:!0,value:"default"},this.state.validType[0]),this.state.validType[1][0].map((function(e){return r.a.createElement("option",{id:"power",key:e,name:"power",value:"t:"+e+"+"},e)}))));return r.a.createElement("div",{className:"outer"},r.a.createElement("section",{className:"section"},r.a.createElement("form",{id:"SearchForm",name:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("legend",null,"Search for cards"),r.a.createElement("input",{className:"formbutton button",type:"reset",value:"Reset Form",onClick:this.clearTextState}),r.a.createElement("fieldset",{className:"fieldsetBox"},r.a.createElement("label",{htmlFor:"cardName",className:"searchLabel"},"Card Name"),r.a.createElement("input",{id:"cardName",type:"text",className:"selectStyle",name:"name",placeholder:"Black Lotus"}),r.a.createElement("br",null),r.a.createElement("span",{className:this.state.error},"Too many cards match ambiguous name")),r.a.createElement("fieldset",{className:"fieldsetBox"},r.a.createElement("label",{className:"searchLabel"},"Color"),r.a.createElement("div",{className:"colorOperator"},r.a.createElement("label",null,"at most",r.a.createElement("input",{type:"radio",name:"colorOperator",defaultChecked:!0,value:"c<="}))),r.a.createElement("div",{className:"colorOperator"},r.a.createElement("label",null,"at least",r.a.createElement("input",{type:"radio",name:"colorOperator",value:"c>="}))),r.a.createElement("div",{className:"colorCheckboxes",onClick:function(){return e.uncheckColorless()}},r.a.createElement("label",{className:"colorLabel"},"White",r.a.createElement("input",{id:"colorWhite",type:"checkbox",name:"color",value:"w"})),r.a.createElement("label",{className:"colorLabel"},"Blue",r.a.createElement("input",{id:"colorBlue",type:"checkbox",name:"color",value:"u"})),r.a.createElement("label",{className:"colorLabel"},"Black",r.a.createElement("input",{id:"colorBlack",type:"checkbox",name:"color",value:"b"})),r.a.createElement("label",{className:"colorLabel"},"Red",r.a.createElement("input",{id:"colorRed",type:"checkbox",name:"color",value:"r"})),r.a.createElement("label",{className:"colorLabel"},"Green",r.a.createElement("input",{id:"colorGreen",type:"checkbox",name:"color",value:"g"}))),r.a.createElement("div",{className:"colorlessBox"},r.a.createElement("label",null,"Colorless",r.a.createElement("input",{onClick:function(){return e.uncheckColors()},id:"colorColorless",type:"radio",name:"color",value:"c"}))),r.a.createElement("div",{className:"cmcCheckboxes"},r.a.createElement("label",{className:"cmc"},"CMC"),r.a.createElement("div",{className:"cmcOperators"},r.a.createElement("label",null,"<=",r.a.createElement("input",{type:"radio",name:"cmcOperator",value:"cmc<="})),r.a.createElement("label",null,"=",r.a.createElement("input",{type:"radio",name:"cmcOperator",value:"cmc="})),r.a.createElement("label",null,">=",r.a.createElement("input",{type:"radio",name:"cmcOperator",value:"cmc>="}))),r.a.createElement("input",{type:"number",className:"center",name:"cmc",min:"0",max:"1000001"}))),r.a.createElement("fieldset",{className:"fieldsetBox"},r.a.createElement("label",{className:"searchLabel"},"Types"),r.a.createElement("select",{name:"supertypes",id:"supertypes",className:"supertype",defaultValue:"default"},r.a.createElement("option",{disabled:!0,hidden:!0,value:"default"},"SuperType"),I.supertypes.map((function(e){return r.a.createElement("option",{id:"supertypes",key:e,name:"types",value:"t:"+e+"+"},e)}))),r.a.createElement("select",{name:"types",id:"types",className:"types",defaultValue:"default",onChange:function(t){return function(t){var a=t.target.value.slice(2,t.target.value.length-1),n=[];"Creature"===a?n.push(e.state.Creature):"Planeswalker"===a?n.push(e.state.Planeswalker):"Land"===a?n.push(I.landTypes):"Enchantment"===a?n.push(I.enchantmentTypes):"Artifact"===a?n.push(I.artifactTypes):"Instant"!==a&&"t:Sorcery+"!==a||n.push(I.instSorcTypes),n.length>0&&e.setState({validType:[a,n]})}(t)}},r.a.createElement("option",{disabled:!0,hidden:!0,value:"default"},"Type"),I.types.map((function(e){return r.a.createElement("option",{id:"types",key:e,name:"types",value:"t:"+e+"+"},e)}))),r.a.createElement("br",null),this.state.validType?a:r.a.createElement("span",null),r.a.createElement("div",{className:"typeRadioBox"},r.a.createElement("label",{className:"radioLabel"},"Modal",r.a.createElement("input",{type:"radio",name:"typeOption",value:"is:modal+"})),r.a.createElement("label",{className:"radioLabel"},"Historic",r.a.createElement("input",{type:"radio",name:"typeOption",value:"is:historic+"})),r.a.createElement("label",{className:"radioLabel"},"Textless Creature",r.a.createElement("input",{type:"radio",name:"typeOption",value:"is:vanilla+"})))),r.a.createElement("fieldset",{className:"fieldsetBox ".concat(this.state.visible)},r.a.createElement("label",{className:"searchLabel"},"Exact text")," ",r.a.createElement("span",{className:"tooltip"},"you can use ~ inplace of card name"),r.a.createElement("input",{id:"text",type:"text",className:"selectStyle showTooltip",name:"text",onKeyPress:this.keyPressed,placeholder:"hexproof"}),r.a.createElement("div",{className:"exactTextButtons"},r.a.createElement("input",{type:"button",className:"button",value:"Clear",onClick:this.clearTextState}),r.a.createElement("input",{type:"button",className:"button",value:"Add",onClick:this.handleAddText})),r.a.createElement("div",null,r.a.createElement("label",null,"Searching for:"),r.a.createElement("ul",{className:"textList"},this.state.text.map((function(t,a){return r.a.createElement("li",{className:"textListItem",onClick:e.removeItem,value:a,id:a,key:a},t," \u2717")}))))),r.a.createElement("fieldset",{className:"fieldsetBox ".concat(this.state.visible)},r.a.createElement("div",null,r.a.createElement("label",{className:"searchLabel"},"Power"),r.a.createElement("select",{name:"power",className:"selectStyle",defaultValue:"default"},r.a.createElement("option",{hidden:!0,value:"default"},"Power"),I.powTou.map((function(e){return r.a.createElement("option",{id:"power",key:e,name:"power",value:e},e)}))),r.a.createElement("div",{className:"typeRadioBox"},r.a.createElement("label",null,">=",r.a.createElement("input",{type:"radio",name:"powerOperator",value:"pow>="})),r.a.createElement("label",null,"=",r.a.createElement("input",{type:"radio",name:"powerOperator",value:"pow="})),r.a.createElement("label",null,"<=",r.a.createElement("input",{type:"radio",name:"powerOperator",value:"pow<="})))),r.a.createElement("div",null,r.a.createElement("label",{className:"searchLabel"},"Toughness"),r.a.createElement("select",{name:"toughness",className:"selectStyle",defaultValue:"default"},r.a.createElement("option",{hidden:!0,value:"default"},"Toughness"),I.powTou.map((function(e){return r.a.createElement("option",{id:"toughness",key:e,name:"toughness",value:e},e)}))),r.a.createElement("div",{className:"typeRadioBox"},r.a.createElement("label",null,">=",r.a.createElement("input",{type:"radio",name:"toughnessOperator",value:"tou>="})),r.a.createElement("label",null,"=",r.a.createElement("input",{type:"radio",name:"toughnessOperator",value:"tou="})),r.a.createElement("label",null,"<=",r.a.createElement("input",{type:"radio",name:"toughnessOperator",value:"tou<="})))),r.a.createElement("div",null,r.a.createElement("label",{className:"searchLabel"},"Combined P and T"),r.a.createElement("input",{type:"number",name:"combinedPT"}),r.a.createElement("br",null),r.a.createElement("div",{className:"typeRadioBox"},r.a.createElement("label",null,">=",r.a.createElement("input",{type:"radio",name:"combinedPTOperator",value:"pt>="})),r.a.createElement("label",null,"=",r.a.createElement("input",{type:"radio",name:"combinedPTOperator",value:"pt="})),r.a.createElement("label",null,"<=",r.a.createElement("input",{type:"radio",name:"combinedPTOperator",value:"pt<="})))),r.a.createElement("div",null,r.a.createElement("label",{className:"searchLabel"},"Loyalty"),r.a.createElement("select",{name:"loyalty",className:"selectStyle",defaultValue:"default"},r.a.createElement("option",{hidden:!0,value:"default"},"Loyalty"),I.loyaltyTypes.map((function(e){return r.a.createElement("option",{id:"loyalty",key:e,name:"loyalty",value:e},e)}))),r.a.createElement("div",{className:"typeRadioBox"},r.a.createElement("label",null,">=",r.a.createElement("input",{type:"radio",name:"loyaltyOperator",value:"loy>="})),r.a.createElement("label",null,"=",r.a.createElement("input",{type:"radio",name:"loyaltyOperator",value:"loy="})),r.a.createElement("label",null,"<=",r.a.createElement("input",{type:"radio",name:"loyaltyOperator",value:"loy<="}))))),r.a.createElement("fieldset",{className:"fieldsetBox ".concat(this.state.visible)},r.a.createElement("label",{htmlFor:"rarity",className:"searchLabel"},"Rarity"),r.a.createElement("select",{name:"rarity",id:"rarity",className:"selectStyle",defaultValue:"default"},r.a.createElement("option",{hidden:!0,value:"default"},"Select"),I.rarity.map((function(e){return r.a.createElement("option",{id:"rarity",key:e,name:"rarity",value:e},e)}))),r.a.createElement("div",{className:"typeRadioBox"},r.a.createElement("label",null,">=",r.a.createElement("input",{type:"radio",name:"rarityOperator",value:"r>="})),r.a.createElement("label",null,"=",r.a.createElement("input",{type:"radio",name:"rarityOperator",value:"r="})),r.a.createElement("label",null,"<=",r.a.createElement("input",{type:"radio",name:"rarityOperator",value:"r<="})))),r.a.createElement("fieldset",{className:"fieldsetBox ".concat(this.state.visible)},r.a.createElement("label",{htmlFor:"sets",className:"searchLabel"},"Set"),r.a.createElement("input",{type:"text",list:"sets",className:"selectStyle",name:"sets"}),r.a.createElement("datalist",{id:"sets"},this.state.setOptions.map((function(e){return r.a.createElement("option",{id:"setoption",key:e.id,name:e.code,value:e.name})}))),r.a.createElement("br",null),r.a.createElement("label",null,"Search Block Containing This Set",r.a.createElement("input",{type:"checkbox",name:"blockSearch",value:"b:"}))),r.a.createElement("div",null,r.a.createElement("input",{className:"collapseButton button",onClick:this.expandCollapse,type:"button",value:this.state.exp_col}),r.a.createElement("input",{className:"formbutton button",type:"reset",value:"Reset Form",onClick:this.clearTextState}),r.a.createElement("input",{className:"formbutton button",type:"submit",value:"Search"})))),r.a.createElement("div",{className:"resultsSection"},this.state.thinking||0!==this.state.cards.length?r.a.createElement("span",null,"Results"):r.a.createElement("span",null)),this.state.thinking&&0===this.state.cards.length?this.renderThinking():r.a.createElement("span",null),r.a.createElement("br",null),r.a.createElement("div",{className:"cardsDisplay"},0!==this.state.cards.length?t:r.a.createElement("span",null)),this.state.thinking?this.renderThinking():r.a.createElement("span",null),0===this.state.cards.length?r.a.createElement("div",null):this.moreButon())}}]),t}(n.Component)),B=(a(44),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).deleteDeck=function(e,t){e.preventDefault(),C.deleteDeck(t);var n=a.context.decks.filter((function(e){return e.deck_id!==t}));a.context.updateDecks(n),a.setState({decks:n})},a.clearDeckName=function(){a.setState({newDeckName:""})},a.setNewDecks=function(e){a.context.addDeck(e),a.setState({decks:a.context.decks}),window.sessionStorage.setItem(p.DECKS,a.context.decks)},a.addNewDeck=function(e){e.preventDefault(),C.postDeck(a.context.user_id,a.state.newDeckName).then((function(e){return a.setNewDecks(e)})),a.clearDeckName()},a.state={decks:[],newDeckName:""},a.clearDeckName=a.clearDeckName.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderDecks",value:function(){var e=this,t=this.context.decks;return(void 0===t?[]:t).map((function(t){return r.a.createElement("div",{className:"deck",key:t.deck_id},r.a.createElement(s.b,{className:"deckLink",to:"/deck/".concat(t.deck_id)},t.deck_name),r.a.createElement("div",{className:"deckButtons"},r.a.createElement(s.b,{to:"/SearchCards"},r.a.createElement("button",{className:"button addcards"},"Add Cards")),r.a.createElement("button",{className:"button deletedeck",onClick:function(a){return e.deleteDeck(a,t.deck_id)}},"Delete deck")))}))}},{key:"render",value:function(){var e=this;return sessionStorage.user_id?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"My Decks"),r.a.createElement("div",{className:"listOfDecks"},this.renderDecks(),r.a.createElement("br",null)),r.a.createElement("form",{onSubmit:this.addNewDeck},r.a.createElement("legend",null,"Start a new deck"),r.a.createElement("label",null,"Deck Name: "),r.a.createElement("input",{type:"text",name:"deck_name",value:this.state.newDeckName,onChange:function(t){e.setState({newDeckName:t.target.value})}}),r.a.createElement("input",{type:"submit",className:"button go",value:"Go"}))):r.a.createElement("div",null,r.a.createElement("h4",null,"Oops you arn't logged in!"),r.a.createElement(s.b,{className:"homeLink",to:"/"},"Home Page"))}}]),t}(n.Component));B.contextType=f;var R=a(26),U=(a(45),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).closeUp=function(){},a.removeImageCloseUp=function(){},a.sortByType=function(){["Creature","Sorcery","Instant","Enchantment","Land","Planeswalker","Artifact"].map((function(e){return a.countType(e),"return"}))},a.listCardView=function(){"Card View"===a.state.listview?a.setState({listview:"List View"}):a.setState({listview:"Card View"})},a.state={deckList:[],deck_id:null,deckName:"",Creature:[],Sorcery:[],Instant:[],Enchantment:[],Land:[],Planeswalker:[],Artifact:[],listview:"Card View",imageModalView:"hidemodal"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"countType",value:function(e){var t={},a=this.state.deckList.filter((function(t){return t.type.search(e)>=0?t:""})),n=[];(a.forEach((function(e){if(n.find((function(t){return t.card_name===e.card_name}))){var t=n.findIndex((function(t){return t.card_name===e.card_name}));n[t].count++}else n.push(Object(R.a)({},e,{count:1}))}),Object.create(null)),0!==a.length)&&(t[e]=n,this.setState(t))}},{key:"componentDidMount",value:function(){var e=this;if(sessionStorage.user_id){var t=this.props.match.params.deckId,a=this.context.decks.find((function(e){return e.deck_id===Number(t)}));this.setState({deck_id:t,deckName:a.deck_name}),P.getDeckList(t).then((function(t){e.setState({deckList:t}),e.sortByType()}))}}},{key:"deleteCard",value:function(e,t){e.preventDefault(),P.deleteCard(t);var a=this.state.deckList.filter((function(e){return e.card_id!==t}));this.setState({deckList:a})}},{key:"totalCards",value:function(e){for(var t=0,a=0;a<e.length;a++)t+=e[a].count;return t}},{key:"render",value:function(){var e=this;if(!sessionStorage.user_id)return r.a.createElement("div",null,r.a.createElement("h4",null,"Oops you arn't logged in!"),r.a.createElement(s.b,{className:"homeLink",to:"/"},"Home Page"));var t,a=[{name:"Creature",state:this.state.Creature},{name:"Sorcery",state:this.state.Sorcery},{name:"Instant",state:this.state.Instant},{name:"Enchantment",state:this.state.Enchantment},{name:"Land",state:this.state.Land},{name:"Planeswalker",state:this.state.Planeswalker},{name:"Artifact",state:this.state.Artifact}];return r.a.createElement("section",null,r.a.createElement("h2",{className:"deckName"},this.state.deckName),r.a.createElement("div",{className:"deckDetails"},r.a.createElement("div",{className:"tally"},"Total: ",this.state.deckList.length," "),r.a.createElement("div",{className:"tally"},"Creatures: ",this.state.Creature.length," "),r.a.createElement("div",{className:"tally"},"Instants: ",this.state.Instant.length," "),r.a.createElement("div",{className:"tally"},"Enchantments: ",this.state.Enchantment.length),r.a.createElement("div",{className:"tally"},"Sorceries: ",this.state.Sorcery.length),r.a.createElement("div",{className:"tally"},"Lands: ",this.state.Land.length),r.a.createElement("div",{className:"tally"},"Planeswalkers: ",this.state.Planeswalker.length)),r.a.createElement("button",{type:"button",className:"listview button",onClick:this.listCardView},this.state.listview),r.a.createElement("br",null),"Card View"===this.state.listview?r.a.createElement("div",{className:"cardsListDisplay"},a.map((function(t){return r.a.createElement("div",{className:"typedisplay",key:t.name},r.a.createElement("h4",null,t.name," X ",e.totalCards(t.state)),t.state.map((function(t){return t.count>1?r.a.createElement("p",{className:"viewCard",onClick:e.closeUp,key:t.card_id},t.card_name," X ",t.count):r.a.createElement("p",{className:"viewCard",onClick:e.closeUp,key:t.card_id},t.card_name)})))}))):r.a.createElement("div",{className:"cardsDisplay"},this.state.deckList.map((function(t){return r.a.createElement("div",{className:"card",key:t.card_id},r.a.createElement("p",{className:"cardName"},t.card_name),r.a.createElement("img",{alt:t.card_name,src:t.image_url}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(a){return e.deleteCard(a,t.card_id)}},"remove"))}))),r.a.createElement("div",{id:"imageModal",className:this.state.imageModalView},r.a.createElement("span",{className:"close",onClick:this.removeImageCloseUp},"\u2717"),(t=this.state,void console.log(t))),r.a.createElement(s.b,{to:"/SearchCards"},r.a.createElement("button",{className:"button"},"Add Cards")))}}]),t}(n.Component));U.contextType=f,U.defaultProps={match:{params:{}}};var M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user_id:window.sessionStorage.user_id,decks:JSON.parse(sessionStorage.getItem("decks")),updateDecks:function(e){var t=JSON.stringify(e);return window.sessionStorage.setItem(p.DECKS,t),a.setState({user_id:window.sessionStorage.user_id,decks:JSON.parse(window.sessionStorage.decks)}),"done"},addDeck:function(e){var t=a.state.decks.push(e),n=JSON.stringify(t);window.sessionStorage.setItem(p.DECKS,n)},clearId:function(){return a.setState({user_id:null})}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component);var V=function(){return r.a.createElement(M,null,r.a.createElement("header",null,r.a.createElement(k,null)),r.a.createElement("main",{className:"App"},r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:b}),r.a.createElement(v.a,{path:"/LoginPage",component:T}),r.a.createElement(v.a,{path:"/RegisterPage",component:_}),r.a.createElement(v.a,{path:"/SearchCards",component:A}),r.a.createElement(v.a,{path:"/MyDecks",component:B}),r.a.createElement(v.a,{path:"/deck/:deckId",component:U}))))};a(46);c.a.render(r.a.createElement(s.a,null,r.a.createElement(V,null)),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.7e105762.chunk.js.map