System.register(["./index-legacy-052b3898.js","./NoteDisplay-legacy-2a4a1522.js"],(function(t,e){"use strict";var n,l,i,o,a,r,s,c,u,d,v,f,m,g,p,h,x,y,b,_,k,j,w;return{setters:[function(t){n=t.d,l=t.i,i=t.a,o=t.u,a=t.b,r=t.c,s=t.e,c=t.f,u=t.g,d=t.t,v=t.h,f=t.F,m=t.r,g=t.n,p=t.j,h=t.o,x=t.k,y=t.l,b=t.m,_=t.p,k=t.q,j=t._},function(t){w=t.N}],execute:function(){var e={class:"m-4"},P={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},N={class:"opacity-50"},D={class:"text-lg"},H={class:"font-bold flex gap-2"},M={class:"opacity-50"},S=u("div",{class:"flex-auto"},null,-1),T={key:0,class:"border-gray-400/50 mb-8"};t("default",j(n({__name:"PresenterPrint",setup:function(t){l(i),o("\n@page {\n  size: A4;\n  margin-top: 1.5cm;\n  margin-bottom: 1cm;\n}\n* {\n  -webkit-print-color-adjust: exact;\n}\nhtml,\nhtml body,\nhtml #app,\nhtml #page-root {\n  height: auto;\n  overflow: auto !important;\n}\n"),a({title:"Notes - ".concat(r.title)});var n=s((function(){return p.map((function(t){var e;return null===(e=t.meta)||void 0===e?void 0:e.slide})).filter((function(t){return void 0!==t&&""!==t.noteHTML}))}));return function(t,l){return h(),c("div",{id:"page-root",style:g(v(k))},[u("div",e,[u("div",P,[u("h1",L,d(v(r).title),1),u("div",N,d((new Date).toLocaleString()),1)]),(h(!0),c(f,null,m(v(n),(function(t,e){return h(),c("div",{key:e,class:"flex flex-col gap-4 break-inside-avoid-page"},[u("div",null,[u("h2",D,[u("div",H,[u("div",M,d(null==t?void 0:t.no)+"/"+d(v(x)),1),y(" "+d(null==t?void 0:t.title)+" ",1),S])]),b(w,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),e<v(n).length-1?(h(),c("hr",T)):_("v-if",!0)])})),128))])],4)}}}),[["__file","C:/gitrep/slidev/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]))}}}));