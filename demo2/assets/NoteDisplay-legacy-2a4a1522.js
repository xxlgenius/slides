System.register(["./index-legacy-052b3898.js"],(function(e,t){"use strict";var n,i,o,l,r,s,c,u,a;return{setters:[function(e){n=e.d,i=e.i,o=e.a,l=e.f,r=e.E,s=e.g,c=e.t,u=e.o,a=e._}],execute:function(){var t=["innerHTML"],p=["textContent"],d=["textContent"];e("N",a(n({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup:function(e){var n=e;return i(o),function(e,i){return e.noteHtml?(u(),l("div",{key:0,class:r(["prose overflow-auto outline-none",n.class]),onClick:i[0]||(i[0]=function(t){return e.$emit("click")}),innerHTML:e.noteHtml},null,10,t)):e.note?(u(),l("div",{key:1,class:r(["prose overflow-auto outline-none",n.class]),onClick:i[1]||(i[1]=function(t){return e.$emit("click")})},[s("p",{textContent:c(e.note)},null,8,p)],2)):(u(),l("div",{key:2,class:r(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:i[2]||(i[2]=function(t){return e.$emit("click")})},[s("p",{textContent:c(n.placeholder||"No notes.")},null,8,d)],2))}}}),[["__file","C:/gitrep/slidev/slidev/node_modules/@slidev/client/internals/NoteDisplay.vue"]]))}}}));