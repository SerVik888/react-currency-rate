(this["webpackJsonpreact-currency-rate"]=this["webpackJsonpreact-currency-rate"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){e.exports={itemList:"currencyRate_itemList__2lGQl",listTenDays:"currencyRate_listTenDays__3PV5p"}},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(13),s=n.n(c),o=(n(20),n(11)),u=n.n(o),i=n(4),l=n(3),j=n(15),b=n(7),p=n.n(b),O=n(0),d=["children","text"],f=function(e){var t=e.children,n=e.text,r=Object(j.a)(e,d),c=Object(a.useState)(!1),s=Object(i.a)(c,2),o=s[0],u=s[1],b=Object(a.useState)({left:0,top:0}),f=Object(i.a)(b,2),h=f[0],x=f[1];return Object(O.jsxs)("div",{className:p.a.tooltip_container,onMouseMove:function(e){return function(e){x({left:e.pageX,top:e.pageY})}(e)},children:[Object(O.jsxs)("div",{className:o?"".concat(p.a.tooltip_box," ").concat(p.a.visible):p.a.tooltip_box,style:{left:h.left-10,top:h.top+25},children:[n,Object(O.jsx)("span",{className:p.a.tooltip_arrow})]}),Object(O.jsx)("div",Object(l.a)(Object(l.a)({onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}},r),{},{children:t}))]})},h=n(12),x=n.n(h),v=function(e){var t=e.rates,n=e.setData,r=e.setDataOneRate,c=e.dataOneRate,s=Object(a.useState)(!1),o=Object(i.a)(s,2),u=o[0],l=o[1];if(Object(a.useEffect)((function(){n()}),[n]),!t)return Object(O.jsx)("h1",{children:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u0438\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430...."});return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{children:Object.values(t).map((function(e){return Object(O.jsx)(f,{text:e.Name,onChange:function(e){return console.log(e)},children:Object(O.jsxs)("li",{className:x.a.itemList,onClick:function(){return function(e){l(!0),r(e)}(e.CharCode)},children:[Object(O.jsxs)("span",{className:"charCode",children:[e.CharCode," "]}),Object(O.jsxs)("span",{className:"value",children:[e.Value," "]}),Object(O.jsxs)("span",{className:"courseDifference",children:["% ",(t=e.Value,n=e.Previous,((t-n)/n*100).toFixed(3))," "]})]})},e.ID);var t,n}))}),u&&Object(O.jsxs)("div",{className:x.a.listTenDays,children:[Object(O.jsx)("span",{children:"\u041a\u0443\u0440\u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0432\u0430\u043b\u044e\u0442\u044b \u0437\u0430 \u0434\u0435\u0441\u044f\u0442\u044c \u0434\u043d\u0435\u0439"}),c.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:Object(O.jsxs)("span",{children:[e.currency.CharCode," "]})}),Object(O.jsxs)("span",{children:[e.date," "]}),Object(O.jsx)("b",{children:Object(O.jsx)("span",{children:e.currency.Value})})]},t)}))]})]})},y=r.a.createContext();var _,D=function(){var e=Object(a.useContext)(y),t=e.setData,n=e.setDataOneRate,r=e.rates,c=e.dataOneRate;return Object(O.jsxs)("div",{className:u.a.app,children:[Object(O.jsx)("h1",{children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"}),Object(O.jsx)(v,{rates:r,setData:t,setDataOneRate:n,dataOneRate:c})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},R=n(2),T=n.n(R),w=n(6),g={getRates:function(){var e=Object(w.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.cbr-xml-daily.ru/daily_json.js");case 3:return t=e.sent,e.abrupt("return",t.json());case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),getRatesForTenDays:function(){var e=Object(w.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},C="GET_DATA",F="GET_DATA_FOR_TEN_DAYS",k="GET_DATA_ONE_RATE",N=n(5),E=n(14),A=(_={},Object(N.a)(_,C,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{rates:t.data.Valute})})),Object(N.a)(_,F,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{currencyRatesForTenDays:[].concat(Object(E.a)(e.currencyRatesForTenDays),[t.dataPreviousDay])})})),Object(N.a)(_,k,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{dataOneRate:e.currencyRatesForTenDays.map((function(e){return{date:e.Date.substring(0,10),currency:e.Valute[t.rate]}})).reverse()})})),Object(N.a)(_,"DEFAULT",(function(e){return e})),_),L=function(e,t){return(A[t.type]||A.DEFAULT)(e,t)},P=function(e){var t=e.children,n=Object(a.useReducer)(L,{rates:null,dataOneRate:null,currencyRatesForTenDays:[]}),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useCallback)(Object(w.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getRates();case 2:return t=e.sent,s({type:C,data:t}),e.next=6,u(t.PreviousURL);case 6:case"end":return e.stop()}}),e)}))),[]),u=function(){var e=Object(w.a)(T.a.mark((function e(t){var n,a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t,a=0;case 2:if(!(a<10)){e.next=11;break}return e.next=5,g.getRatesForTenDays(n);case 5:r=e.sent,s({type:F,dataPreviousDay:r}),n=r.PreviousURL;case 8:a++,e.next=2;break;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(w.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s({type:k,rate:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(y.Provider,{value:{rates:c.rates,dataOneRate:c.dataOneRate,setData:o,setDataOneRate:l},children:t})};s.a.render(Object(O.jsx)(P,{children:Object(O.jsx)(D,{})}),document.getElementById("root")),m()},7:function(e,t,n){e.exports={tooltip_box:"tooltip_tooltip_box__2y65k",visible:"tooltip_visible__3ud--",tooltip_arrow:"tooltip_tooltip_arrow__Vsrsm"}}},[[23,1,2]]]);
//# sourceMappingURL=main.af3f6bf6.chunk.js.map