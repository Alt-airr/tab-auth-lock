(window.webpackJsonpcityweather=window.webpackJsonpcityweather||[]).push([[0],{10:function(e,t,a){e.exports={card:"weather_card_card__3poAR",button15:"weather_card_button15__3cveX"}},12:function(e,t,a){e.exports={weatherList:"weather_list_weatherList__2nbBH",addCity:"weather_list_addCity__3gaE7",btn:"weather_list_btn__2DWKt",button15:"weather_list_button15__2edGp",cardElements:"weather_list_cardElements__3-sFs"}},16:function(e,t,a){e.exports={header:"header_header__TL5EF",name:"header_name__meME1"}},26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=(a(31),a(32),a(10)),o=a.n(s),l=a(19),u=a(48),d=a(49);function m(){return Math.round(20*Math.random())-10}function h(){var e=50+m(),t=50+m();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var p=Object(u.a)(function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}});function w(){var e=p(),t=r.a.useState(h),a=Object(l.a)(t,1)[0],n=r.a.useState(!1),c=Object(l.a)(n,2),i=c[0],s=c[1],u=function(){s(!1)};return r.a.createElement("div",null,r.a.createElement("button",{className:o.a.button15,type:"button",onClick:function(){s(!0)}},"Details"),r.a.createElement(d.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:i,onClose:u},r.a.createElement("div",{style:a,className:e.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Text in a modal"),r.a.createElement("p",{id:"simple-modal-description"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f..."),r.a.createElement("button",{onClick:u},"Close"))))}var f="ADD_CITY",_="UPDATE_NEW_CITY",b="REFRESH_DATA",y="DELETE_CITY",E=function(e,t){switch(t.type){case f:var a={city:e.newCityName,weather:"weather"};if(e.newCityName.length>3&&!0===/^[a-zA-Z]+$/.test(e.newCityName))return e.citiesData.push(a),e.newCityName="",e;if(!(e.newCityName.length<3||!1===/^[a-zA-Z]+$/.test(e.newCityName)))return e;alert("The name of the city should be 3 to 20 characters long and use only latin letters");case _:return e.newCityName=t.newCity,e;case b:var n=e.citiesData[t.key].city;return function(e){fetch(e).then(function(e){return 200!==e.status&&alert("Looks like there was a problem"),Promise.resolve(e)}).then(function(e){return e.json()}).then(function(e){console.log("Weather in",n,"is :",e)}).catch(function(e){return alert(e)})}("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat("75168a19f5ef56b8e04f22d88d46f08a")),e;case y:return e.citiesData.splice(t.index,1),e;default:return e}},C=function(e){return r.a.createElement("div",{className:o.a.card},r.a.createElement("div",null,"City name: ",e.city),r.a.createElement("div",null,"Weather: ",e.weather),r.a.createElement("button",{className:o.a.button15,onClick:function(){var t;e.dispatch((t=e.index,{type:b,key:t}))}},"Refresh"),r.a.createElement(w,null),r.a.createElement("button",{className:o.a.button15,onClick:function(){var t;e.dispatch((t=e.index,{type:y,index:t}))}},"Delete City"))},v=a(12),N=a.n(v),g=function(e){var t=e.state.citiesData.map(function(t,a){return r.a.createElement(C,{index:a,key:a,city:t.city,weather:t.weather,dispatch:e.dispatch})}),a=r.a.createRef();return r.a.createElement("div",{className:N.a.weatherList},r.a.createElement("div",{className:N.a.addCity},r.a.createElement("div",{className:N.a.addCityForm},r.a.createElement("input",{placeholder:"Enter city...",onChange:function(){var t=a.current.value;e.dispatch(function(e){return{type:_,newCity:e}}(t))},value:e.state.newCityName,ref:a,cols:"30",rows:"1"})),r.a.createElement("button",{className:N.a.btn,onClick:function(){e.dispatch({type:f})}},"Add City")),r.a.createElement("div",{className:N.a.cardElements},t))},k=a(16),D=a.n(k),x=function(e){return r.a.createElement("div",{className:D.a.header},r.a.createElement("img",{src:"https://1.cms.s81c.com/sites/default/files/2019-06-07/cloud-homepage-leadspace-bg-01.jpg"}),r.a.createElement("p",{className:D.a.name},"CityWeather"))},S=a(24),T=function(e){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(x,null),r.a.createElement("div",{className:"app-wrapper__page"},r.a.createElement(S.a,null,r.a.createElement(g,{state:e.state,dispatch:e.dispatch}))))},A={_state:{citiesData:[{city:"London",weather:"weather"},{city:"Berlin",weather:"weather"},{city:"Kiev",weather:"weather"}],newCityName:""},dispatch:function(e){this._state=E(this._state,e),this._callSubscriber(this._state)},_callSubscriber:function(){console.log("State changed")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e}},L=A;window.store=A;var j=function(e){i.a.render(r.a.createElement(T,{state:e,dispatch:L.dispatch.bind(L),store:L}),document.getElementById("root"))};j(L.getState()),L.subscribe(function(){var e=L.getState();j(e)})}},[[26,1,2]]]);
//# sourceMappingURL=main.eea51e07.chunk.js.map