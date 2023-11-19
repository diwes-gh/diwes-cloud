(()=>{"use strict";var t,e={77806:(t,e,n)=>{var a=n(20144),s=n(79954),r=n(31352),i=n(4820),d=n(79753),o=n(13299),l=n.n(o),c=n(20571),v=n.n(c);const p=(0,s.j)("dav","userSyncCalendarsDocUrl","#"),h={name:"CalDavSettings",components:{NcCheckboxRadioSwitch:v(),NcSettingsSection:l()},data:()=>({userSyncCalendarsDocUrl:p}),computed:{hint(){return this.$t("dav","Also install the {calendarappstoreopen}Calendar app{linkclose}, or {calendardocopen}connect your desktop & mobile for syncing ↗{linkclose}.").replace("{calendarappstoreopen}",'<a target="_blank" href="../apps/office/calendar">').replace("{calendardocopen}",'<a target="_blank" href="'.concat(p,'" rel="noreferrer noopener">')).replace(/\{linkclose\}/g,"</a>")},sendInvitationsHelpText(){return this.$t("dav","Please make sure to properly set up {emailopen}the email server{linkclose}.").replace("{emailopen}",'<a href="../admin#mail_general_settings">').replace("{linkclose}","</a>")},sendEventRemindersHelpText(){return this.$t("dav","Please make sure to properly set up {emailopen}the email server{linkclose}.").replace("{emailopen}",'<a href="../admin#mail_general_settings">').replace("{linkclose}","</a>")}},watch:{generateBirthdayCalendar(t){const e=t?"/apps/dav/enableBirthdayCalendar":"/apps/dav/disableBirthdayCalendar";i.default.post((0,d.generateUrl)(e))},sendInvitations(t){OCP.AppConfig.setValue("dav","sendInvitations",t?"yes":"no")},sendEventReminders(t){OCP.AppConfig.setValue("dav","sendEventReminders",t?"yes":"no")},sendEventRemindersToSharedUsers(t){OCP.AppConfig.setValue("dav","sendEventRemindersToSharedUsers",t?"yes":"no")},sendEventRemindersPush(t){OCP.AppConfig.setValue("dav","sendEventRemindersPush",t?"yes":"no")}}};var m=n(93379),u=n.n(m),f=n(7795),b=n.n(f),g=n(90569),C=n.n(g),y=n(3565),S=n.n(y),k=n(19216),x=n.n(k),R=n(44589),A=n.n(R),w=n(84992),_={};_.styleTagTransform=A(),_.setAttributes=S(),_.insert=C().bind(null,"head"),_.domAPI=b(),_.insertStyleElement=x(),u()(w.Z,_),w.Z&&w.Z.locals&&w.Z.locals;const E=(0,n(51900).Z)(h,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{title:t.$t("dav","Calendar server"),"doc-url":t.userSyncCalendarsDocUrl}},[e("p",{staticClass:"settings-hint",domProps:{innerHTML:t._s(t.hint)}}),t._v(" "),e("p",[e("NcCheckboxRadioSwitch",{attrs:{id:"caldavSendInvitations",checked:t.sendInvitations,type:"switch"},on:{"update:checked":function(e){t.sendInvitations=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Send invitations to attendees"))+"\n\t\t")]),t._v(" "),e("em",{domProps:{innerHTML:t._s(t.sendInvitationsHelpText)}})],1),t._v(" "),e("p",[e("NcCheckboxRadioSwitch",{staticClass:"checkbox",attrs:{id:"caldavGenerateBirthdayCalendar",checked:t.generateBirthdayCalendar,type:"switch"},on:{"update:checked":function(e){t.generateBirthdayCalendar=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Automatically generate a birthday calendar"))+"\n\t\t")]),t._v(" "),e("em",[t._v("\n\t\t\t"+t._s(t.$t("dav","Birthday calendars will be generated by a background job."))+"\n\t\t")]),t._v(" "),e("br"),t._v(" "),e("em",[t._v("\n\t\t\t"+t._s(t.$t("dav","Hence they will not be available immediately after enabling but will show up after some time."))+"\n\t\t")])],1),t._v(" "),e("p",[e("NcCheckboxRadioSwitch",{attrs:{id:"caldavSendEventReminders",checked:t.sendEventReminders,type:"switch"},on:{"update:checked":function(e){t.sendEventReminders=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Send notifications for events"))+"\n\t\t")]),t._v(" "),e("em",{domProps:{innerHTML:t._s(t.sendEventRemindersHelpText)}}),t._v(" "),e("br"),t._v(" "),e("em",[t._v("\n\t\t\t"+t._s(t.$t("dav","Notifications are sent via background jobs, so these must occur often enough."))+"\n\t\t")])],1),t._v(" "),e("p",{staticClass:"indented"},[e("NcCheckboxRadioSwitch",{attrs:{id:"caldavSendEventRemindersToSharedGroupMembers",checked:t.sendEventRemindersToSharedUsers,type:"switch",disabled:!t.sendEventReminders},on:{"update:checked":function(e){t.sendEventRemindersToSharedUsers=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Send reminder notifications to calendar sharees as well"))+"\n\t\t")]),t._v(" "),e("em",[t._v("\n\t\t\t"+t._s(t.$t("dav","Reminders are always sent to organizers and attendees."))+"\n\t\t")])],1),t._v(" "),e("p",{staticClass:"indented"},[e("NcCheckboxRadioSwitch",{attrs:{id:"caldavSendEventRemindersPush",checked:t.sendEventRemindersPush,type:"switch",disabled:!t.sendEventReminders},on:{"update:checked":function(e){t.sendEventRemindersPush=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Enable notifications for events via push"))+"\n\t\t")])],1)])}),[],!1,null,"f51ab7e4",null).exports;a.default.prototype.$t=r.Iu,new(a.default.extend(E))({name:"CalDavSettingsView",data:()=>({sendInvitations:(0,s.j)("dav","sendInvitations"),generateBirthdayCalendar:(0,s.j)("dav","generateBirthdayCalendar"),sendEventReminders:(0,s.j)("dav","sendEventReminders"),sendEventRemindersToSharedUsers:(0,s.j)("dav","sendEventRemindersToSharedUsers"),sendEventRemindersPush:(0,s.j)("dav","sendEventRemindersPush")})}).$mount("#settings-admin-caldav")},84992:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(87537),s=n.n(a),r=n(23645),i=n.n(r)()(s());i.push([t.id,"\n.indented[data-v-f51ab7e4] {\n\tpadding-left: 28px;\n}\n/** Use deep selector to affect v-html */\n*[data-v-f51ab7e4] a {\n\ttext-decoration: underline;\n}\n.settings-hint[data-v-f51ab7e4] {\n\tmargin-top: -.2em;\n\tmargin-bottom: 1em;\n\topacity: .7;\n}\n","",{version:3,sources:["webpack://./apps/dav/src/views/CalDavSettings.vue"],names:[],mappings:";AAiKA;CACA,kBAAA;AACA;AACA,wCAAA;AACA;CACA,0BAAA;AACA;AACA;CACA,iBAAA;CACA,kBAAA;CACA,WAAA;AACA",sourcesContent:["<template>\n\t<NcSettingsSection :title=\"$t('dav', 'Calendar server')\"\n\t\t:doc-url=\"userSyncCalendarsDocUrl\">\n\t\t\x3c!-- Can use v-html as:\n\t\t\t- $t passes the translated string through DOMPurify.sanitize,\n\t\t\t- replacement strings are not user-controlled. --\x3e\n\t\t\x3c!-- eslint-disable-next-line vue/no-v-html --\x3e\n\t\t<p class=\"settings-hint\" v-html=\"hint\" />\n\t\t<p>\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavSendInvitations\"\n\t\t\t\t:checked.sync=\"sendInvitations\"\n\t\t\t\ttype=\"switch\">\n\t\t\t\t{{ $t('dav', 'Send invitations to attendees') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t\t\x3c!-- Can use v-html as:\n\t\t\t\t- $t passes the translated string through DOMPurify.sanitize,\n\t\t\t\t- replacement strings are not user-controlled. --\x3e\n\t\t\t\x3c!-- eslint-disable-next-line vue/no-v-html --\x3e\n\t\t\t<em v-html=\"sendInvitationsHelpText\" />\n\t\t</p>\n\t\t<p>\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavGenerateBirthdayCalendar\"\n\t\t\t\t:checked.sync=\"generateBirthdayCalendar\"\n\t\t\t\ttype=\"switch\"\n\t\t\t\tclass=\"checkbox\">\n\t\t\t\t{{ $t('dav', 'Automatically generate a birthday calendar') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t\t<em>\n\t\t\t\t{{ $t('dav', 'Birthday calendars will be generated by a background job.') }}\n\t\t\t</em>\n\t\t\t<br>\n\t\t\t<em>\n\t\t\t\t{{ $t('dav', 'Hence they will not be available immediately after enabling but will show up after some time.') }}\n\t\t\t</em>\n\t\t</p>\n\t\t<p>\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavSendEventReminders\"\n\t\t\t\t:checked.sync=\"sendEventReminders\"\n\t\t\t\ttype=\"switch\">\n\t\t\t\t{{ $t('dav', 'Send notifications for events') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t\t\x3c!-- Can use v-html as:\n\t\t\t\t- $t passes the translated string through DOMPurify.sanitize,\n\t\t\t\t- replacement strings are not user-controlled. --\x3e\n\t\t\t\x3c!-- eslint-disable-next-line vue/no-v-html --\x3e\n\t\t\t<em v-html=\"sendEventRemindersHelpText\" />\n\t\t\t<br>\n\t\t\t<em>\n\t\t\t\t{{ $t('dav', 'Notifications are sent via background jobs, so these must occur often enough.') }}\n\t\t\t</em>\n\t\t</p>\n\t\t<p class=\"indented\">\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavSendEventRemindersToSharedGroupMembers\"\n\t\t\t\t:checked.sync=\"sendEventRemindersToSharedUsers\"\n\t\t\t\ttype=\"switch\"\n\t\t\t\t:disabled=\"!sendEventReminders\">\n\t\t\t\t{{ $t('dav', 'Send reminder notifications to calendar sharees as well' ) }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t\t<em>\n\t\t\t\t{{ $t('dav', 'Reminders are always sent to organizers and attendees.' ) }}\n\t\t\t</em>\n\t\t</p>\n\t\t<p class=\"indented\">\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavSendEventRemindersPush\"\n\t\t\t\t:checked.sync=\"sendEventRemindersPush\"\n\t\t\t\ttype=\"switch\"\n\t\t\t\t:disabled=\"!sendEventReminders\">\n\t\t\t\t{{ $t('dav', 'Enable notifications for events via push') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t</p>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport axios from '@nextcloud/axios'\nimport { generateUrl } from '@nextcloud/router'\nimport { loadState } from '@nextcloud/initial-state'\nimport NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'\nimport NcCheckboxRadioSwitch from '@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js'\n\nconst userSyncCalendarsDocUrl = loadState('dav', 'userSyncCalendarsDocUrl', '#')\n\nexport default {\n\tname: 'CalDavSettings',\n\tcomponents: {\n\t\tNcCheckboxRadioSwitch,\n\t\tNcSettingsSection,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tuserSyncCalendarsDocUrl,\n\t\t}\n\t},\n\tcomputed: {\n\t\thint() {\n\t\t\tconst translated = this.$t(\n\t\t\t\t'dav',\n\t\t\t\t'Also install the {calendarappstoreopen}Calendar app{linkclose}, or {calendardocopen}connect your desktop & mobile for syncing ↗{linkclose}.',\n\t\t\t)\n\t\t\treturn translated\n\t\t\t\t.replace('{calendarappstoreopen}', '<a target=\"_blank\" href=\"../apps/office/calendar\">')\n\t\t\t\t.replace('{calendardocopen}', `<a target=\"_blank\" href=\"${userSyncCalendarsDocUrl}\" rel=\"noreferrer noopener\">`)\n\t\t\t\t.replace(/\\{linkclose\\}/g, '</a>')\n\t\t},\n\t\tsendInvitationsHelpText() {\n\t\t\tconst translated = this.$t('dav', 'Please make sure to properly set up {emailopen}the email server{linkclose}.')\n\t\t\treturn translated\n\t\t\t\t.replace('{emailopen}', '<a href=\"../admin#mail_general_settings\">')\n\t\t\t\t.replace('{linkclose}', '</a>')\n\t\t},\n\t\tsendEventRemindersHelpText() {\n\t\t\tconst translated = this.$t('dav', 'Please make sure to properly set up {emailopen}the email server{linkclose}.')\n\t\t\treturn translated\n\t\t\t\t.replace('{emailopen}', '<a href=\"../admin#mail_general_settings\">')\n\t\t\t\t.replace('{linkclose}', '</a>')\n\t\t},\n\t},\n\twatch: {\n\t\tgenerateBirthdayCalendar(value) {\n\t\t\tconst baseUrl = value ? '/apps/dav/enableBirthdayCalendar' : '/apps/dav/disableBirthdayCalendar'\n\t\t\taxios.post(generateUrl(baseUrl))\n\t\t},\n\t\tsendInvitations(value) {\n\t\t\tOCP.AppConfig.setValue(\n\t\t\t\t'dav',\n\t\t\t\t'sendInvitations',\n\t\t\t\tvalue ? 'yes' : 'no'\n\t\t\t)\n\t\t},\n\t\tsendEventReminders(value) {\n\t\t\tOCP.AppConfig.setValue('dav', 'sendEventReminders', value ? 'yes' : 'no')\n\t\t},\n\t\tsendEventRemindersToSharedUsers(value) {\n\t\t\tOCP.AppConfig.setValue(\n\t\t\t\t'dav',\n\t\t\t\t'sendEventRemindersToSharedUsers',\n\t\t\t\tvalue ? 'yes' : 'no'\n\t\t\t)\n\t\t},\n\t\tsendEventRemindersPush(value) {\n\t\t\tOCP.AppConfig.setValue('dav', 'sendEventRemindersPush', value ? 'yes' : 'no')\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.indented {\n\t\tpadding-left: 28px;\n\t}\n\t/** Use deep selector to affect v-html */\n\t* >>> a {\n\t\ttext-decoration: underline;\n\t}\n\t.settings-hint {\n\t\tmargin-top: -.2em;\n\t\tmargin-bottom: 1em;\n\t\topacity: .7;\n\t}\n</style>\n"],sourceRoot:""}]);const d=i}},n={};function a(t){var s=n[t];if(void 0!==s)return s.exports;var r=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,t=[],a.O=(e,n,s,r)=>{if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],r=t[c][2];for(var d=!0,o=0;o<n.length;o++)(!1&r||i>=r)&&Object.keys(a.O).every((t=>a.O[t](n[o])))?n.splice(o--,1):(d=!1,r<i&&(i=r));if(d){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,s,r]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.e=()=>Promise.resolve(),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),a.j=2231,(()=>{a.b=document.baseURI||self.location.href;var t={2231:0};a.O.j=e=>0===t[e];var e=(e,n)=>{var s,r,i=n[0],d=n[1],o=n[2],l=0;if(i.some((e=>0!==t[e]))){for(s in d)a.o(d,s)&&(a.m[s]=d[s]);if(o)var c=o(a)}for(e&&e(n);l<i.length;l++)r=i[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),a.nc=void 0;var s=a.O(void 0,[7874],(()=>a(77806)));s=a.O(s)})();
//# sourceMappingURL=dav-settings-admin-caldav.js.map?v=e67e17383c4bd1217d4d