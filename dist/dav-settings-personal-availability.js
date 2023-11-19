/*! For license information please see dav-settings-personal-availability.js.LICENSE.txt */
(()=>{"use strict";var a,e,n,i={36824:(a,e,n)=>{var i=n(20144),o=n(31352),d=n(49683),r=n(79954),l=n(64024),s=n(14596),p=n(4820),A=n(56580),c=n.n(A),u=n(79753),v=n(77958);const m=c()((t=>(p.default.defaults.headers["X-Requested-With"]="XMLHttpRequest",s.lD().patch("request",p.default),s.eI((0,u.generateRemoteUrl)("dav/".concat(t,"/").concat((0,v.ts)().uid)))))),f=(0,n(17499).IY)().setApp("dav").detectUser().build();var C=n(10861),b=n.n(C),y=n(20571),g=n.n(y),x=n(13299),h=n.n(x),w=n(31144),k=n.n(w),B=n(25108);const S={name:"Availability",components:{NcButton:b(),NcCheckboxRadioSwitch:g(),CalendarAvailability:d.Dx,NcSettingsSection:h(),NcTimezonePicker:k()},data(){var t,a,e;return{loading:!0,saving:!1,timezone:null!==(t=null===(a=new Intl.DateTimeFormat)||void 0===a||null===(e=a.resolvedOptions())||void 0===e?void 0:e.timeZone)&&void 0!==t?t:"UTC",slots:{MO:[],TU:[],WE:[],TH:[],FR:[],SA:[],SU:[]},automated:"yes"===(0,r.j)("dav","user_status_automation")}},async mounted(){try{const t=await async function(){var t,a,e;const n=m("calendars"),i=await n.customRequest("inbox",{method:"PROPFIND",data:'<?xml version="1.0"?>\n\t\t\t<x0:propfind xmlns:x0="DAV:">\n\t\t\t  <x0:prop>\n\t\t\t\t<x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav"/>\n\t\t\t  </x0:prop>\n\t\t\t</x0:propfind>'}),o=await(0,s.sw)(i.data);if(!o)return;const r=null==o||null===(t=o.multistatus)||void 0===t||null===(a=t.response[0])||void 0===a||null===(e=a.propstat)||void 0===e?void 0:e.prop["calendar-availability"];return r?(0,d.Xg)(r):void 0}();if(t){const{slots:a,timezoneId:e}=t;this.slots=a,e&&(this.timezone=e),B.info("availability loaded",this.slots,this.timezoneId)}else B.info("no availability is set"),this.slots={MO:[],TU:[],WE:[],TH:[],FR:[],SA:[],SU:[]}}catch(a){B.error("could not load existing availability",a),(0,l.x2)(t("dav","Failed to load availability"))}finally{this.loading=!1}},methods:{async save(){try{this.saving=!0,await async function(t,a){const e=[...Object.keys(t).flatMap((a=>t[a].map((t=>({...t,day:a})))))],n=(0,d.ST)(e,a);f.debug("New availability ical created",{vavailability:n});const i=m("calendars");await i.customRequest("inbox",{method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<x0:propertyupdate xmlns:x0="DAV:">\n\t\t\t  <x0:set>\n\t\t\t\t<x0:prop>\n\t\t\t\t  <x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav">'.concat(n,"</x1:calendar-availability>\n\t\t\t\t</x0:prop>\n\t\t\t  </x0:set>\n\t\t\t</x0:propertyupdate>")})}(this.slots,this.timezone),this.automated?await async function(){return await p.default.post((0,u.generateOcsUrl)("/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"dav",configKey:"user_status_automation"}),{configValue:"yes"})}():await async function(){return await p.default.delete((0,u.generateOcsUrl)("/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"dav",configKey:"user_status_automation"}))}(),(0,l.s$)(t("dav","Saved availability"))}catch(a){B.error("could not save availability",a),(0,l.x2)(t("dav","Failed to save availability"))}finally{this.saving=!1}}}};var E=n(93379),_=n.n(E),T=n(7795),D=n.n(T),O=n(90569),$=n.n(O),z=n(3565),I=n.n(z),N=n(19216),P=n.n(N),j=n(44589),U=n.n(j),R=n(32413),F={};F.styleTagTransform=U(),F.setAttributes=I(),F.insert=$().bind(null,"head"),F.domAPI=D(),F.insertStyleElement=P(),_()(R.Z,F),R.Z&&R.Z.locals&&R.Z.locals;const q=(0,n(51900).Z)(S,(function(){var t=this,a=t._self._c;return a("NcSettingsSection",{attrs:{title:t.$t("dav","Availability"),description:t.$t("dav","If you configure your working hours, other users will see when you are out of office when they book a meeting.")}},[a("div",{staticClass:"time-zone"},[a("strong",[t._v("\n\t\t\t"+t._s(t.$t("dav","Time zone:"))+"\n\t\t")]),t._v(" "),a("span",{staticClass:"time-zone-text"},[a("NcTimezonePicker",{model:{value:t.timezone,callback:function(a){t.timezone=a},expression:"timezone"}})],1)]),t._v(" "),a("CalendarAvailability",{attrs:{slots:t.slots,loading:t.loading,"l10n-to":t.$t("dav","to"),"l10n-delete-slot":t.$t("dav","Delete slot"),"l10n-empty-day":t.$t("dav","No working hours set"),"l10n-add-slot":t.$t("dav","Add slot"),"l10n-monday":t.$t("dav","Monday"),"l10n-tuesday":t.$t("dav","Tuesday"),"l10n-wednesday":t.$t("dav","Wednesday"),"l10n-thursday":t.$t("dav","Thursday"),"l10n-friday":t.$t("dav","Friday"),"l10n-saturday":t.$t("dav","Saturday"),"l10n-sunday":t.$t("dav","Sunday")},on:{"update:slots":function(a){t.slots=a}}}),t._v(" "),a("NcCheckboxRadioSwitch",{attrs:{checked:t.automated},on:{"update:checked":function(a){t.automated=a}}},[t._v("\n\t\t"+t._s(t.$t("dav",'Automatically set user status to "Do not disturb" outside of availability to mute all notifications.'))+"\n\t")]),t._v(" "),a("NcButton",{attrs:{disabled:t.loading||t.saving,type:"primary"},on:{click:t.save}},[t._v("\n\t\t"+t._s(t.$t("dav","Save"))+"\n\t")])],1)}),[],!1,null,"6fabad0d",null).exports;i.default.prototype.$t=o.Iu,new(i.default.extend(q))({}).$mount("#settings-personal-availability")},32413:(t,a,e)=>{e.d(a,{Z:()=>r});var n=e(87537),i=e.n(n),o=e(23645),d=e.n(o)()(i());d.push([t.id,".availability-day[data-v-6fabad0d]{padding:0 10px 0 10px;position:absolute}.availability-slots[data-v-6fabad0d]{display:flex;white-space:nowrap}.availability-slot[data-v-6fabad0d]{display:flex;flex-direction:row;align-items:center}.availability-slot-group[data-v-6fabad0d]{display:flex;flex-direction:column}[data-v-6fabad0d] .mx-input-wrapper{width:85px}[data-v-6fabad0d] .mx-datepicker{width:97px}[data-v-6fabad0d] .multiselect{border:1px solid var(--color-border-dark);width:120px}.time-zone[data-v-6fabad0d]{padding:32px 12px 12px 0}.grid-table[data-v-6fabad0d]{display:grid;margin-bottom:32px;grid-column-gap:24px;grid-row-gap:6px;grid-template-columns:min-content min-content min-content}.button[data-v-6fabad0d]{align-self:flex-end}.label-weekday[data-v-6fabad0d]{position:relative;display:inline-flex;padding-top:4px}.delete-slot[data-v-6fabad0d]{background-color:rgba(0,0,0,0);border:none;padding-bottom:12px;opacity:.5}.delete-slot[data-v-6fabad0d]:hover{opacity:1}.add-another[data-v-6fabad0d]{background-color:rgba(0,0,0,0);border:none;opacity:.5;display:inline-flex;padding:0;margin:0;margin-bottom:3px}.add-another[data-v-6fabad0d]:hover{opacity:1}.to-text[data-v-6fabad0d]{padding-right:12px}.time-zone-text[data-v-6fabad0d]{padding-left:22px}.empty-content[data-v-6fabad0d]{color:var(--color-text-lighter);margin-top:4px}","",{version:3,sources:["webpack://./apps/dav/src/views/Availability.vue"],names:[],mappings:"AACA,mCACC,qBAAA,CACA,iBAAA,CAED,qCACC,YAAA,CACA,kBAAA,CAED,oCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CAED,0CACC,YAAA,CACA,qBAAA,CAED,oCACC,UAAA,CAED,iCACC,UAAA,CAED,+BACC,yCAAA,CACA,WAAA,CAED,4BACC,wBAAA,CAED,6BACC,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,gBAAA,CACA,yDAAA,CAED,yBACC,mBAAA,CAED,gCACC,iBAAA,CACA,mBAAA,CACA,eAAA,CAED,8BACC,8BAAA,CACA,WAAA,CACA,mBAAA,CACA,UAAA,CACA,oCACC,SAAA,CAIF,8BACC,8BAAA,CACA,WAAA,CACA,UAAA,CACA,mBAAA,CACA,SAAA,CACA,QAAA,CACA,iBAAA,CAEA,oCACC,SAAA,CAGF,0BACC,kBAAA,CAED,iCACC,iBAAA,CAED,gCACC,+BAAA,CACA,cAAA",sourcesContent:["\n.availability-day {\n\tpadding: 0 10px 0 10px;\n\tposition: absolute;\n}\n.availability-slots {\n\tdisplay: flex;\n\twhite-space: nowrap;\n}\n.availability-slot {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n}\n.availability-slot-group {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n::v-deep .mx-input-wrapper {\n\twidth: 85px;\n}\n::v-deep .mx-datepicker {\n\twidth: 97px;\n}\n::v-deep .multiselect {\n\tborder: 1px solid var(--color-border-dark);\n\twidth: 120px;\n}\n.time-zone {\n\tpadding: 32px 12px 12px 0;\n}\n.grid-table {\n\tdisplay: grid;\n\tmargin-bottom: 32px;\n\tgrid-column-gap: 24px;\n\tgrid-row-gap: 6px;\n\tgrid-template-columns: min-content min-content min-content;\n}\n.button {\n\talign-self: flex-end;\n}\n.label-weekday {\n\tposition: relative;\n\tdisplay: inline-flex;\n\tpadding-top: 4px;\n}\n.delete-slot {\n\tbackground-color: transparent;\n\tborder: none;\n\tpadding-bottom: 12px;\n\topacity: .5;\n\t&:hover {\n\t\topacity: 1;\n\t}\n}\n\n.add-another {\n\tbackground-color: transparent;\n\tborder: none;\n\topacity: .5;\n\tdisplay: inline-flex;\n\tpadding: 0;\n\tmargin: 0;\n\tmargin-bottom: 3px;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n}\n.to-text {\n\tpadding-right: 12px;\n}\n.time-zone-text{\n\tpadding-left: 22px;\n}\n.empty-content {\n\tcolor: var(--color-text-lighter);\n\tmargin-top: 4px;\n}\n\n"],sourceRoot:""}]);const r=d}},o={};function d(t){var a=o[t];if(void 0!==a)return a.exports;var e=o[t]={id:t,loaded:!1,exports:{}};return i[t].call(e.exports,e,e.exports,d),e.loaded=!0,e.exports}d.m=i,a=[],d.O=(t,e,n,i)=>{if(!e){var o=1/0;for(p=0;p<a.length;p++){e=a[p][0],n=a[p][1],i=a[p][2];for(var r=!0,l=0;l<e.length;l++)(!1&i||o>=i)&&Object.keys(d.O).every((t=>d.O[t](e[l])))?e.splice(l--,1):(r=!1,i<o&&(o=i));if(r){a.splice(p--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var p=a.length;p>0&&a[p-1][2]>i;p--)a[p]=a[p-1];a[p]=[e,n,i]},d.n=t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return d.d(a,{a}),a},d.d=(t,a)=>{for(var e in a)d.o(a,e)&&!d.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})},d.f={},d.e=t=>Promise.all(Object.keys(d.f).reduce(((a,e)=>(d.f[e](t,a),a)),[])),d.u=t=>t+"-"+t+".js?v=00434e4baa0d8e7b79f1",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),d.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),e={},n="nextcloud:",d.l=(t,a,i,o)=>{if(e[t])e[t].push(a);else{var r,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var A=s[p];if(A.getAttribute("src")==t||A.getAttribute("data-webpack")==n+i){r=A;break}}r||(l=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,d.nc&&r.setAttribute("nonce",d.nc),r.setAttribute("data-webpack",n+i),r.src=t),e[t]=[a];var c=(a,n)=>{r.onerror=r.onload=null,clearTimeout(u);var i=e[t];if(delete e[t],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((t=>t(n))),a)return a(n)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=c.bind(null,r.onerror),r.onload=c.bind(null,r.onload),l&&document.head.appendChild(r)}},d.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),d.j=3347,(()=>{var t;d.g.importScripts&&(t=d.g.location+"");var a=d.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var e=a.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=t})(),(()=>{d.b=document.baseURI||self.location.href;var t={3347:0};d.f.j=(a,e)=>{var n=d.o(t,a)?t[a]:void 0;if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(((e,i)=>n=t[a]=[e,i]));e.push(n[2]=i);var o=d.p+d.u(a),r=new Error;d.l(o,(e=>{if(d.o(t,a)&&(0!==(n=t[a])&&(t[a]=void 0),n)){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;r.message="Loading chunk "+a+" failed.\n("+i+": "+o+")",r.name="ChunkLoadError",r.type=i,r.request=o,n[1](r)}}),"chunk-"+a,a)}},d.O.j=a=>0===t[a];var a=(a,e)=>{var n,i,o=e[0],r=e[1],l=e[2],s=0;if(o.some((a=>0!==t[a]))){for(n in r)d.o(r,n)&&(d.m[n]=r[n]);if(l)var p=l(d)}for(a&&a(e);s<o.length;s++)i=o[s],d.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return d.O(p)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))})(),d.nc=void 0;var r=d.O(void 0,[7874],(()=>d(36824)));r=d.O(r)})();
//# sourceMappingURL=dav-settings-personal-availability.js.map?v=abceee5dc0ea2c267461