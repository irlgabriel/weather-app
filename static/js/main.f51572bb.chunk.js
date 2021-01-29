(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{240:function(e,t,a){e.exports=a(397)},245:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(20),c=a.n(o),i=a(28),l=(a(245),a(115)),s=a(24),m=a(432),u=a(446),d=a(447),p=a(453),f=a(217),E=Object(f.a)({palette:{primary:{main:"#DEB787"},secondary:{main:"#00796b"}}}),g=Object(f.a)({palette:{primary:{main:"#080A2B"},secondary:{main:"#491E7D"},type:"dark"}}),b=a(434),h=a(448),y=a(436),x=a(437),v=a(201),O=a(111),k=a.n(O),j=Object(m.a)({root:{},input:{width:"90%",color:"#fff",marginBottom:".5rem"},grid:{alignItems:"center","& > button":{marginBottom:".5rem"},justifyContent:"center"}});function F(e){var t=e.setLocation,a=e.setMessage,r=e.setLoading,o=j();return n.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(e.target.country.value)}(e)},className:o.root},n.a.createElement(b.a,{className:o.grid,wrap:"nowrap",direction:"column",container:!0},n.a.createElement(h.a,{name:"country",size:"medium",className:o.input,color:"secondary",variant:"outlined",label:"City"}),n.a.createElement(y.a,{type:"submit",variant:"contained",color:"secondary"},"Search"),n.a.createElement(x.a,{onClick:function(){return r(!0),void(navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var n=e.coords.latitude,o=e.coords.longitude,c={method:"GET",url:"https://trueway-geocoding.p.rapidapi.com/ReverseGeocode",params:{location:"".concat(n,",").concat(o),language:"en"},headers:{"x-rapidapi-key":"d89eb58edamsh10814d1e692895ep158751jsn8a8b4c01281a","x-rapidapi-host":"trueway-geocoding.p.rapidapi.com"}};k.a.request(c).then((function(e){t("".concat(e.data.results[0].locality,", ").concat(e.data.results[0].country)),r(!1)})).catch((function(e){a(e.response.data.message),r(!1)}))}),(function(){t("Unable to retrieve your location")}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}):t("Geolocation is not supported by your browser"))},color:"secondary"},n.a.createElement(v.a,{size:"24px"}))))}var w=a(438),N=a(449),D=Object(m.a)({root:{position:"absolute",inset:"0",display:"grid",placeItems:"center",background:"#fafafa",zIndex:"10",opacity:".6"}}),C=function(){var e=D();return n.a.createElement(N.a,{className:e.root},n.a.createElement(w.a,{color:"secondary"}))},S=Object(m.a)({root:{},light:{background:"linear-gradient(116.51deg, rgba(124, 212, 222, 0.8) 0%, rgba(118, 250, 226, 0.3) 100%)",position:"fixed",inset:"0"},dark:{background:"linear-gradient(99.86deg, #1F5985 0%, #1C859C 100%), #FFFFFF",position:"fixed",inset:"0"}}),A=function(e){var t=e.theme,a=S();return n.a.createElement(N.a,{className:"".concat("light"===t?a.light:a.dark)})},I=a(439),z=a(440),T=a(454),G=a(441),B=a(203),L=a(202),U=Object(m.a)({root:{marginBottom:"1rem"},right:{marginLeft:"auto"}}),q=function(e){var t=e.theme,a=e.setTheme,r=U();return n.a.createElement(I.a,{className:r.root,color:"secondary",position:"sticky"},n.a.createElement(z.a,null,n.a.createElement(l.b,{to:"/"},n.a.createElement(L.a,{color:"#fff",size:"32px"})),n.a.createElement(G.a,{className:r.right,onChange:function(){return a("light"===t?"dark":"light")},checked:"dark"===t,label:n.a.createElement(B.a,{color:"orange",size:"32px"}),control:n.a.createElement(T.a,{color:"primary"})})))},K=a(401),M=a(442),P=a(143),R=a(452),H=a(450),J=a(94),_=a(214),W=a(215),Q=a(121),V=a(219),X=Object(m.a)((function(e){return{root:{border:"dark"===e.palette.type?"1px solid white":"1px solid rgba(0,0,0,.7)",borderRadius:"5px",backdropFilter:"blur(100px)"},divider:{margin:".5rem 0"}}})),Y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Z=function(e){var t=e.weatherObj,a=e.theme,r=e.location,o=e.data,c=e.units,i=e.setUnits,l=X();return n.a.createElement(p.a,{appear:!0,in:o[0],timeout:250,classNames:"fade",unmountOnExit:!0},n.a.createElement(N.a,{className:l.root,m:2,p:1},n.a.createElement(K.a,{variant:"h3"},r,", ",Y[(new Date).getDay()]),n.a.createElement(K.a,{variant:"subtitle2"},t&&t.list[0].weather[0].description),n.a.createElement(M.a,{className:l.divider}),n.a.createElement(K.a,{variant:"h4"},"metric"===c?n.a.createElement(P.a,null):n.a.createElement(P.b,null)," "),n.a.createElement(G.a,{onChange:function(){return i("metric"===c?"imperial":"metric")},checked:"metric"===c,control:n.a.createElement(T.a,{color:"primary"})}),n.a.createElement(R.a,{width:"100%",height:300},n.a.createElement(H.a,{margin:{top:10,right:30,left:0,bottom:0},data:o},n.a.createElement("defs",null,n.a.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},n.a.createElement("stop",{offset:"5%",stopColor:"dark"===a?"#21D2DE":"#F85F0F",stopOpacity:.8}),n.a.createElement("stop",{offset:"95%",stopColor:"dark"===a?"#21D2DE":"#F85F0F",stopOpacity:0})),n.a.createElement("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1"},n.a.createElement("stop",{offset:"5%",stopColor:"dark"===a?"#DE7A2A":"#9607F8",stopOpacity:.8}),n.a.createElement("stop",{offset:"95%",stopColor:"dark"===a?"#DE7A2A":"#9607F8",stopOpacity:0}))),n.a.createElement(J.a,null),n.a.createElement(_.a,{stroke:"dark"===a?"#fff":"rgba(0,0,0,7)",dataKey:"date"}),n.a.createElement(W.a,{stroke:"dark"===a?"#fff":"rgba(0,0,0,7)"}),n.a.createElement(Q.a,null),n.a.createElement(V.a,{type:"montoone",dataKey:"temp",stroke:"dark"===a?"#21D2DE":"#F85F0F",fillOpacity:1,fill:"url(#colorUv)"}),n.a.createElement(V.a,{type:"monotone",dataKey:"feels",stroke:"dark"===a?"#DE7A2A":"#9607F8",fillOpacity:1,fill:"url(#colorPv)"})))))},$=a(216),ee=a(148),te=Object(m.a)((function(e){return{root:{marginTop:"auto"},flex:{display:"flex",alignItems:"center",textDecoration:"none",color:"#fafafa"},toolbar:Object($.a)({display:"flex",justifyContent:"center"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center"})}})),ae=function(){var e=te();return n.a.createElement(I.a,{position:"relative",className:e.root,color:"secondary"},n.a.createElement(z.a,{className:e.toolbar},n.a.createElement("a",{className:e.flex,href:"https://github.com/irlgabriel"},n.a.createElement(ee.a,{color:"#fafafa",size:"48px"}),n.a.createElement(K.a,{variant:"h4"},"Github")),n.a.createElement("a",{className:e.flex,href:"https://www.linkedin.com/in/gabriel-radu-5023021b9/"},n.a.createElement(ee.b,{color:"lightblue",size:"48px"}),n.a.createElement(K.a,{variant:"h4"},"LinkedIn"))))},re=Object(m.a)((function(e){return{root:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column"},flash:{position:"absolute",top:"50px",padding:".5rem",width:"300px",left:"calc(50% - 150px)",zIndex:"112115",borderRadius:"6px",display:"grid",placeItems:"center",background:"linear-gradient(99.86deg, #697E83 0%, #1C859C 100%), #FFFFFF;",color:"white"}}}));var ne=function(){var e=re(),t=Object(r.useState)("dark"),a=Object(i.a)(t,2),o=a[0],c=a[1],m=Object(r.useState)(""),f=Object(i.a)(m,2),b=f[0],h=f[1],y=Object(r.useState)(""),x=Object(i.a)(y,2),v=x[0],O=x[1],j=Object(r.useState)(""),w=Object(i.a)(j,2),D=w[0],S=w[1],I=Object(r.useState)(!1),z=Object(i.a)(I,2),T=z[0],G=z[1],B=Object(r.useState)({}),L=Object(i.a)(B,2),U=L[0],K=L[1],M=Object(r.useState)("metric"),P=Object(i.a)(M,2),R=P[0],H=P[1];return Object(r.useEffect)((function(){""!==D&&setTimeout((function(){S("")}),3e3)}),[D]),Object(r.useEffect)((function(){if(v){G(!0);var e={method:"GET",url:"https://api.openweathermap.org/data/2.5/forecast",params:{q:v.split(",")[0],units:R,appid:"c3fc89948932320041534da5615559ec",cnt:"9"}};k.a.request(e).then((function(e){h(e.data);var t=e.data.list.map((function(e){return{date:e.dt_txt.split(" ")[1].split(":")[0]+":00",temp:e.main.temp,feels:e.main.feels_like}}));K(t),G(!1)})).catch((function(e){G(!1),console.log(e),console.log(e.response),S(e.response.data.error.message)}))}}),[v,R]),n.a.createElement(l.a,null,n.a.createElement(u.a,{theme:"light"===o?E:g},n.a.createElement(A,{theme:o}),n.a.createElement(d.a,null),n.a.createElement(s.a,{to:"/"},n.a.createElement(N.a,{className:e.root},n.a.createElement(q,{theme:o,setTheme:c}),n.a.createElement(F,{setLocation:O,setMessage:S,setLoading:G}),n.a.createElement(Z,{weatherObj:b,theme:o,location:v,data:U,units:R,setUnits:H}),n.a.createElement(ae,null),n.a.createElement(p.a,{appear:!0,in:T,classNames:"fade",timeout:250,unmountOnExit:!0},n.a.createElement(C,null)),n.a.createElement(p.a,{in:""!==D,classNames:"fade",timeout:250,unmountOnExit:!0},n.a.createElement("div",{className:e.flash},D))))))};c.a.render(n.a.createElement(ne,null),document.getElementById("root"))}},[[240,1,2]]]);
//# sourceMappingURL=main.f51572bb.chunk.js.map