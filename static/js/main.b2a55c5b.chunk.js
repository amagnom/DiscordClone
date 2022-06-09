(this["webpackJsonpdiscord-clone"]=this["webpackJsonpdiscord-clone"]||[]).push([[0],{28:function(n,r,e){"use strict";e.r(r);var t=e(0),o=e(1),a=e.n(o),i=e(11),c=e.n(i),s=e(3),d=e(2);function u(){var n=Object(s.a)(["\n  display: grid;\n\n  //Fica em ordem la da declara\xe7\xe3o os  tamanhos das colunas\n  grid-template-columns: 71px 240px auto 240px;\n\n  grid-template-rows: 46px auto 52px;\n\n//Aqui vai a declara\xe7\xe3o dos grid, dividimos em 3 linhas e 4 colunas\n//os grids\n\n  grid-template-areas : \n  'SL SN CI CI'\n  'SL CL CD UL'\n  'SL UI CD UL';\n\n  height: 100vh;\n"]);return u=function(){return n},n}var b=d.b.div(u());function l(){var n=Object(s.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-shrink: 0;\n\nwidth: 48px;\nheight: 48px;\n\nmargin-bottom: 8px;\nborder-radius: 50%;\nbackground-color: ",";\n\nposition: relative;\ncursor: pointer;\n\n> img {\n    width: 24px;\n    height: 24px;\n}\n\n&::before{\nwidth:9px;\nheight:9px;\nposition:absolute;\nleft:--17px;\ntop:calc(50%-4.5px);\nbackground-color: var(--white);\nborder-radius: 50%;\n\ncontent: '';\ndisplay: ","\n}\n\n\n\n&::after{\n    background-color: var(--notification);\n    width: auto;\n    height: 16px;\n    padding: 0 4px;\n    position: absolute;\n    bottom: -4px;\n    right: -4px;\n    border-radius: 12px;\n    border: 4px solid var(--quaternary);\n\n    text-align: right;\n    font-size: 13px;\n    font-weight: bold;\n    color: var(--white);\n\n    content: '","';\n    display: ",";\n}\n\ntransition: border-radius .2s, background-color .2s;\n\n&.active, &:hover{\n    border-radius: 16px;\n    background-color: ","\n}\n\n"]);return l=function(){return n},n}var x=d.b.button(l(),(function(n){return n.isHome?"var(--rocketseat)":"var(--primary)"}),(function(n){return n.hasNotifications?"inline":"none"}),(function(n){return n.mentions&&n.mentions}),(function(n){return n.mentions&&n.mentions>0?"inline":"none"}),(function(n){return n.isHome?"var(--rocketseat)":"var(--discord)"})),p=e.p+"static/media/Logo.f074d17a.svg",j=function(n){var r=n.selected,e=n.isHome,o=n.hasNotifications,a=n.mentions;return Object(t.jsx)(x,{isHome:e,hasNotifications:o,mentions:a,className:r?"active":"",children:e&&Object(t.jsx)("img",{src:p,alt:"Rocketseat"})})};function f(){var n=Object(s.a)(["\n  width: 32px;\n  border-bottom: 2px solid var(--quaternary);\n  margin-bottom: 8px;\n"]);return f=function(){return n},n}function h(){var n=Object(s.a)(["\n  grid-area: SL;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--tertiary);\n  padding: 11px 0;\n  max-height: 100vh;\n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);return h=function(){return n},n}var v=d.b.div(h()),O=d.b.div(f()),g=function(){return Object(t.jsxs)(v,{children:[Object(t.jsx)(j,{isHome:!0}),Object(t.jsx)(O,{}),Object(t.jsx)(j,{}),Object(t.jsx)(j,{hasNotifications:!0}),Object(t.jsx)(j,{mentions:3}),Object(t.jsx)(j,{}),Object(t.jsx)(j,{}),Object(t.jsx)(j,{}),Object(t.jsx)(j,{hasNotifications:!0}),Object(t.jsx)(j,{}),Object(t.jsx)(j,{}),Object(t.jsx)(j,{mentions:72}),Object(t.jsx)(j,{}),Object(t.jsx)(j,{})]})},m=e(29);function y(){var n=Object(s.a)(["\n  width: 28px;\n  height: 28px;\n  color: var(--white);\n  cursor: pointer;\n"]);return y=function(){return n},n}function w(){var n=Object(s.a)(["\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--white);\n"]);return w=function(){return n},n}function k(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 11px 0 16px;\n  background-color: var(--secondary);\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;\n  z-index: 2;\n"]);return k=function(){return n},n}var N=d.b.div(k()),E=d.b.h1(w()),A=Object(d.b)(m.a)(y()),D=function(){return Object(t.jsxs)(N,{children:[Object(t.jsx)(E,{children:"Servidor do Rodz"}),Object(t.jsx)(A,{})]})},C=e(30);function L(){var n=Object(s.a)(["\n  font-size: 15px;\n  color: var(--gray);\n"]);return L=function(){return n},n}function z(){var n=Object(s.a)(["\n  height: 24px;\n  width: 1px;\n  background-color: var(--white);\n  opacity: 0.2;\n  margin: 0 13px;\n"]);return z=function(){return n},n}function S(){var n=Object(s.a)(["\n  margin-left: 9px;\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--white);\n"]);return S=function(){return n},n}function I(){var n=Object(s.a)(["\n  width: 24px;\n  height: 24px;\n  color: var(--symbol);\n"]);return I=function(){return n},n}function q(){var n=Object(s.a)(["\n  grid-area: CI;\n  display: flex;\n  align-items: center;\n  padding: 0 17px;\n  background-color: var(--primary);\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;\n  z-index: 2;\n"]);return q=function(){return n},n}var F=d.b.div(q()),R=Object(d.b)(C.a)(I()),T=d.b.h1(S()),B=d.b.div(z()),U=d.b.span(L()),M=function(){return Object(t.jsxs)(F,{children:[Object(t.jsx)(R,{}),Object(t.jsx)(T,{children:"chat-livre"}),Object(t.jsx)(B,{}),Object(t.jsx)(U,{children:"Canal aberto para conversas"})]})},H=e(31),P=e(32);function V(){var n=Object(s.a)(["\n  width: 16px;\n  height: 16px;\n  margin-left: 4px;\n  color: var(--symbol);\n  cursor: pointer;\n  transition: color 0.2s;\n\n   //Evento de hover vai mudar a cor\n  &:hover {\n    color: var(--white);\n  }\n"]);return V=function(){return n},n}function J(){var n=Object(s.a)(["\n  width: 16px;\n  height: 16px;\n  color: var(--symbol);\n  cursor: pointer;\n  transition: color 0.2s;\n\n  //Evento de hover vai mudar a cor\n  &:hover {\n    color: var(--white);\n  }\n"]);return J=function(){return n},n}function X(){var n=Object(s.a)(["\n  width: 20px;\n  height: 20px;\n  color: var(--symbol);\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  padding: 5px 3px;\n  border-radius: 5px;\n  background-color: transparent;\n  transition: background-color 0.2s;\n \n \n  //TA INDO DENTRO DO CONTAINER L\xc1 DO INDEX, E SELECIONANDO A DIV, ESSE STYLE VAI P ELA\n  > div {\n    display: flex;\n    align-items: center;\n  }\n \n  //TA INDO DENTRO DO CONTAINER L\xc1 DO INDEX, E SELECIONANDO A DIV E ENTAO O SPAN DENTRO DELA E\n  //COLOCANDO O STYLE NELA\n  > div span {\n    margin-left: 5px;\n    color: var(--senary);\n  }\n \n \n //EVENTOS DE HOVER OU CLICAR NO CANAL, MUDA A COR DO FUNDO, E DO SPAN\n  &:hover,&.active {\n    background-color: var(--quinary);\n    > div span {\n      color: var(--white);\n    }\n  }\n  \n"]);return Y=function(){return n},n}var Z=d.b.div(Y()),G=Object(d.b)(C.a)(X()),K=Object(d.b)(H.a)(J()),Q=Object(d.b)(P.a)(V()),W=function(n){var r=n.channelName,e=n.selected;return Object(t.jsxs)(Z,{className:e?"active":"",children:[Object(t.jsxs)("div",{children:[Object(t.jsx)(G,{}),Object(t.jsx)("span",{children:r})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)(K,{}),Object(t.jsx)(Q,{})]})]})},$=e(33);function _(){var n=Object(s.a)(["\n  width: 21px;\n  height: 21px;\n  color: var(--symbol);\n  cursor: pointer;\n"]);return _=function(){return n},n}function nn(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n\n\n  > span {\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 500;\n    color: var(--gray);\n  }\n"]);return nn=function(){return n},n}function rn(){var n=Object(s.a)(["\n  grid-area: CL;\n  display: flex;\n\n\n  //Flex direction define o eixo principal e a dire\xe7\xe3o (coluna ou linha por ex)\n  flex-direction: column;\n  padding: 24px 9.5px 0 16px;\n  background-color: var(--secondary);\n"]);return rn=function(){return n},n}var en=d.b.div(rn()),tn=d.b.div(nn()),on=Object(d.b)($.a)(_()),an=function(){return Object(t.jsxs)(en,{children:[Object(t.jsxs)(tn,{children:[Object(t.jsx)("span",{children:"Canais de texto"}),Object(t.jsx)(on,{})]}),Object(t.jsx)(W,{channelName:"chat-livre"}),Object(t.jsx)(W,{channelName:"trabalho"}),Object(t.jsx)(W,{channelName:"dota"}),Object(t.jsx)(W,{channelName:"csgo"}),Object(t.jsx)(W,{channelName:"reclamar-da-vida"})]})},cn=e(34),sn=e(35);function dn(){var n=Object(s.a)(["\n  width: 20px;\n  height: 20px;\n  color: var(--white);\n  opacity: 0.7;\n  cursor: pointer;\n  transition: opacity 0.2s;\n  &:hover {\n    opacity: 1;\n  }\n"]);return dn=function(){return n},n}function un(){var n=Object(s.a)(["\n  width: 20px;\n  height: 20px;\n  color: var(--white);\n  opacity: 0.7;\n  cursor: pointer;\n  transition: opacity 0.2s;\n  &:hover {\n    opacity: 1;\n  }\n"]);return un=function(){return n},n}function bn(){var n=Object(s.a)(["\n  width: 20px;\n  height: 20px;\n  color: var(--white);\n  opacity: 0.7;\n  cursor: pointer;\n  transition: opacity 0.2s;\n \n //Acao\n  &:hover {\n    opacity: 1;\n  }\n"]);return bn=function(){return n},n}function ln(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  //selecionando os icones exceto o primeiro\n  > svg:not(:first-child) {\n    margin-left: 7px;\n  }\n"]);return ln=function(){return n},n}function xn(){var n=Object(s.a)(["\n  margin-left: 8px;\n  display: flex;\n  flex-direction: column;\n  > strong {\n    color: var(--white);\n    font-size: 13px;\n    display: block;\n  }\n  > span {\n    color: var(--gray);\n    font-size: 13px;\n  }\n"]);return xn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: var(--gray);\n"]);return pn=function(){return n},n}function jn(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return jn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  grid-area: UI;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  background-color: var(--quaternary);\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;\n"]);return fn=function(){return n},n}var hn=d.b.div(fn()),vn=d.b.div(jn()),On=d.b.div(pn()),gn=d.b.div(xn()),mn=d.b.div(ln()),yn=Object(d.b)(cn.a)(bn()),wn=Object(d.b)(sn.a)(un()),kn=Object(d.b)(P.a)(dn()),Nn=function(){return Object(t.jsxs)(hn,{children:[Object(t.jsxs)(vn,{children:[Object(t.jsx)(On,{}),Object(t.jsxs)(gn,{children:[Object(t.jsx)("strong",{children:"Arildo Magno"}),Object(t.jsx)("span",{children:"#2689"})]})]}),Object(t.jsxs)(mn,{children:[Object(t.jsx)(yn,{}),Object(t.jsx)(wn,{}),Object(t.jsx)(kn,{})]})]})};function En(){var n=Object(s.a)(["\n//evitar que o avatar fique zoado\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: var(--primary);\n \n  //Se for bot\n  &.bot {\n    background-color: var(--mention-detail);\n  }\n"]);return En=function(){return n},n}function An(){var n=Object(s.a)(["\n  margin-top: 5px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n  background: transparent;\n  transition: background 0.2s;\n  \n  //Acao\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n\n  //Acessando a tag strong dentro do component User\n  > strong {\n    margin-left: 13px;\n    font-weight: 500;\n    color: var(--white);\n    opacity: 0.7;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n    //Acessando a tag span dentro do component User\n  > span {\n    margin-left: 9px;\n    background-color: var(--discord);\n    color: var(--white);\n    border-radius: 4px;\n    padding: 4px 5px;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 11px;\n  }\n"]);return An=function(){return n},n}function Dn(){var n=Object(s.a)(["\n  margin-top: 20px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--gray);\n"]);return Dn=function(){return n},n}function Cn(){var n=Object(s.a)(["\n //nome da area definida la no layout\n  grid-area: UL;\n  display: flex;\n  flex-direction: column;\n  padding: 3px 6px 0 16px;\n  background-color: var(--secondary);\n\n  //altura max - 46\n  max-height: calc(100vh - 46px);\n  overflow-y: scroll;\n \n \n //Configura\xe7\xf5es dos webkit (Personalizando)\n  ::-webkit-scrollbar {\n    width: 4px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: var(--tertiary);\n    border-radius: 4px;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: var(--secondary);\n  }\n"]);return Cn=function(){return n},n}var Ln=d.b.div(Cn()),zn=d.b.span(Dn()),Sn=d.b.div(An()),In=d.b.div(En()),qn=function(n){var r=n.nickname,e=n.isBot;return Object(t.jsxs)(Sn,{children:[Object(t.jsx)(In,{className:e?"bot":""}),Object(t.jsx)("strong",{children:r}),e&&Object(t.jsx)("span",{children:"Bot"})]})},Fn=function(){return Object(t.jsxs)(Ln,{children:[Object(t.jsx)(zn,{children:"Dispon\xedvel - 3"}),Object(t.jsx)(qn,{nickname:"Arildo Magno"}),Object(t.jsx)(qn,{nickname:"Lulinha"}),Object(t.jsx)(qn,{nickname:"Lelis"}),Object(t.jsx)(zn,{children:"Offline - 14"}),Object(t.jsx)(qn,{nickname:"NikoBot",isBot:!0}),Object(t.jsx)(qn,{nickname:"Dilma"}),Object(t.jsx)(qn,{nickname:"Bonoro"}),Object(t.jsx)(qn,{nickname:"Zeca"}),Object(t.jsx)(qn,{nickname:"Creyson"}),Object(t.jsx)(qn,{nickname:"Brunao"}),Object(t.jsx)(qn,{nickname:"Everthon"}),Object(t.jsx)(qn,{nickname:"Manel"}),Object(t.jsx)(qn,{nickname:"Fulano"}),Object(t.jsx)(qn,{nickname:"Fulano"}),Object(t.jsx)(qn,{nickname:"Fulano"}),Object(t.jsx)(qn,{nickname:"Fulano"}),Object(t.jsx)(qn,{nickname:"Fulano"}),Object(t.jsx)(qn,{nickname:"Fulano"}),Object(t.jsx)(qn,{nickname:"Fulano"}),Object(t.jsx)(qn,{nickname:"Fulano"})]})};function Rn(){var n=Object(s.a)(["\ncolor: var(--link);\ncursor: pointer;\n//Acao de passar o mouse em cima\n&:hover {\n  text-decoration: underline;\n}\n\n"]);return Rn=function(){return n},n}function Tn(){var n=Object(s.a)(["\ntext-align: left;\nfont-size: 16px;\ncolor: var(--white);\n"]);return Tn=function(){return n},n}function Bn(){var n=Object(s.a)(["\ndisplay: flex;\nalign-items: center;\n\n//Configuracao da tag strong dentro de header\n> strong {\n  color: var(--white);\n  font-size: 16px;\n}\n\n//Configuracao da tag span dentro de header\n> span {\n  margin-left: 6px;\n  background-color: var(--discord);\n  color: var(--white);\n  border-radius: 4px;\n  padding: 4px 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 11px;\n}\n\n//Configuracao da time strong dentro de header\n> time {\n  margin-left: 6px;\n  color: var(--gray);\n  font-size: 13px;\n}\n"]);return Bn=function(){return n},n}function Un(){var n=Object(s.a)(["\nmin-height: 40px;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\nmargin-left: 17px;\n"]);return Un=function(){return n},n}function Mn(){var n=Object(s.a)(["\nwidth: 40px;\nheight: 40px;\nbackground-color: var(--secondary);\nborder-radius: 50%;\n\n//Se passou como parametro que \xe9 bot\n&.bot {\n  background-color: var(--mention-detail);\n}\n"]);return Mn=function(){return n},n}function Hn(){var n=Object(s.a)(["\ndisplay: flex;\nalign-items: center;\n//cima direita baixo esquerda\npadding: 4px 16px;\nmargin-right: 4px;\nbackground-color: transparent;\n\n//Se tiver o parametro mention passado\n&.mention {\n  background-color: var(--mention-message);\n  border-left: 2px solid var(--mention-detail);\n  padding-left: 14px;\n}\n\n//Para que exceto a primeira,as divs tenham um espa\xe7amento de 13px\n& + div {\n  margin-top: 13px;\n}\n\n"]);return Hn=function(){return n},n}var Pn=d.b.div(Hn()),Vn=d.b.div(Mn()),Jn=d.b.div(Un()),Xn=d.b.div(Bn()),Yn=d.b.div(Tn()),Zn=d.b.span(Rn()),Gn=function(n){var r=n.author,e=n.date,o=n.content,a=n.hasMention,i=n.isBot;return Object(t.jsxs)(Pn,{className:a?"mention":"",children:[Object(t.jsx)(Vn,{className:i?"bot":""}),Object(t.jsxs)(Jn,{children:[Object(t.jsxs)(Xn,{children:[Object(t.jsx)("strong",{children:r}),i&&Object(t.jsx)("span",{children:"Bot"}),Object(t.jsx)("time",{children:e})]}),Object(t.jsx)(Yn,{children:o})]})]})},Kn=e(36);function Qn(){var n=Object(s.a)(["\n  width: 24px;\n  height: 24px;\n  color: var(--gray);\n"]);return Qn=function(){return n},n}function Wn(){var n=Object(s.a)(["\n  width: 100%;\n  height: 44px;\n  padding: 0 10px 0 57px;\n  border-radius: 7px;\n\n  color: var(--white);\n  background-color: var(--chat-input);\n \n  position: relative;\n\n  //Evento do texto antes de digitar\n  &::placeholder {\n    color: var(--gray);\n  }\n\n\n  ~ svg {\n    position: relative;\n    top: -50%;\n    left: 14px;\n    transition: 180ms ease-in-out;\n  }\n\n  \n"]);return Wn=function(){return n},n}function $n(){var n=Object(s.a)(["\n  width: 100%;\n  padding: 0 16px;\n"]);return $n=function(){return n},n}function _n(){var n=Object(s.a)(["\n  padding: 20px 0;\n  display: flex;\n\n  //porque ficam organizada como coluna\n  flex-direction: column;\n\n //tamanho total da tela -os tamanhos\n  max-height: calc(100vh - 46px - 68px);\n  overflow-y: scroll;\n\n\n  //ajustando itens do webkit como a scrollbar\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: var(--tertiary);\n    border-radius: 4px;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: var(--secondary);\n  }\n\n\n"]);return _n=function(){return n},n}function nr(){var n=Object(s.a)(["\ngrid-area: CD;\n\ndisplay:flex;\n\n//porque ficam organizada como coluna\nflex-direction:column;\n\n//para dar espa\xe7o \njustify-content: space-between;\n\nbackground-color: var(--primary);\n"]);return nr=function(){return n},n}var rr=d.b.div(nr()),er=d.b.div(_n()),tr=d.b.div($n()),or=d.b.input(Wn()),ar=Object(d.b)(Kn.a)(Qn()),ir=function(){var n=Object(o.useRef)();return Object(o.useEffect)((function(){var r=n.current;r&&(r.scrollTop=r.scrollHeight)}),[n]),Object(t.jsxs)(rr,{children:[Object(t.jsxs)(er,{ref:n,children:[Array.from(Array(3).keys()).map((function(n){return Object(t.jsx)(Gn,{author:"Arildo Magno",date:"07/01/2021",content:"Sextou!"},n)})),Object(t.jsx)(Gn,{author:"Niko",date:"07/01/2021",content:Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(Zn,{children:"@Arildo Magno"}),", me carrega no Dota de novo por favor?"]}),hasMention:!0,isBot:!0})]}),Object(t.jsxs)(tr,{children:[Object(t.jsx)(or,{type:"text",placeholder:"Conversarem #chat-livre"}),Object(t.jsx)(ar,{})]})]})},cr=function(){return Object(t.jsx)("div",{children:Object(t.jsxs)(b,{children:[Object(t.jsx)(g,{}),Object(t.jsx)(D,{}),Object(t.jsx)(M,{}),Object(t.jsx)(an,{}),Object(t.jsx)(Nn,{}),Object(t.jsx)(ir,{}),Object(t.jsx)(Fn,{})]})})};function sr(){var n=Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html, body, #root {\n    height: 100%;\n  }\n  *, button, input {\n    border: 0;\n    outline: 0;\n    font-family: 'Roboto', sans-serif;\n  }\n  :root {\n    --primary: #36393f;\n    --secondary: #2f3136;\n    --tertiary: rgb(32,34,37);\n    --quaternary: #292b2f;\n    --quinary: #393d42;\n    --senary: #828386;\n    \n    --white: #fff;\n    --gray: #8a8c90;\n    --chat-input: rgb(64,68,75);\n    --symbol: #74777a;\n    --notification: #f84a4b;\n    --discord: #6e86d6;\n    --mention-detail: #f9a839;\n    --mention-message: #413f3f;\n    --link: #5d80d6;\n    --rocketseat: #6633cc;\n  }\n"]);return sr=function(){return n},n}var dr=Object(d.a)(sr());var ur=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(cr,{}),Object(t.jsx)(dr,{})]})};c.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(ur,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.b2a55c5b.chunk.js.map