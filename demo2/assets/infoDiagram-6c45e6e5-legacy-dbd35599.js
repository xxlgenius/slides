System.register(["./index-legacy-052b3898.js"],(function(t,n){"use strict";var i,e,s,r;return{setters:[function(t){i=t.aR,e=t.ay,s=t.as,r=t.ax}],execute:function(){var n=function(){var t=function(t,n,i,e){for(i=i||{},e=t.length;e--;i[t[e]]=n);return i},n=[6,9,10],i={trace:function(){},yy:{},symbols_:{error:2,start:3,info:4,document:5,EOF:6,line:7,statement:8,NL:9,showInfo:10,$accept:0,$end:1},terminals_:{2:"error",4:"info",6:"EOF",9:"NL",10:"showInfo"},productions_:[0,[3,3],[5,0],[5,2],[7,1],[7,1],[8,1]],performAction:function(t,n,i,e,s,r,o){switch(r.length,s){case 1:return e;case 4:break;case 6:e.setInfo(!0)}},table:[{3:1,4:[1,2]},{1:[3]},t(n,[2,2],{5:3}),{6:[1,4],7:5,8:6,9:[1,7],10:[1,8]},{1:[2,1]},t(n,[2,3]),t(n,[2,4]),t(n,[2,5]),t(n,[2,6])],defaultActions:{4:[2,1]},parseError:function(t,n){if(!n.recoverable){var i=new Error(t);throw i.hash=n,i}this.trace(t)},parse:function(t){var n=this,i=[0],e=[],s=[null],r=[],o=this.table,h="",l=0,c=0,a=r.slice.call(arguments,1),y=Object.create(this.lexer),u={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(u.yy[f]=this.yy[f]);y.setInput(t,u.yy),u.yy.lexer=y,u.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var p=y.yylloc;r.push(p);var g=y.options&&y.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var m,_,d,k,x,b,v,w,I,S={};;){if(_=i[i.length-1],this.defaultActions[_]?d=this.defaultActions[_]:(null==m&&(I=void 0,"number"!=typeof(I=e.pop()||y.lex()||1)&&(I instanceof Array&&(I=(e=I).pop()),I=n.symbols_[I]||I),m=I),d=o[_]&&o[_][m]),void 0===d||!d.length||!d[0]){var E="";for(x in w=[],o[_])this.terminals_[x]&&x>2&&w.push("'"+this.terminals_[x]+"'");E=y.showPosition?"Parse error on line "+(l+1)+":\n"+y.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(E,{text:y.match,token:this.terminals_[m]||m,line:y.yylineno,loc:p,expected:w})}if(d[0]instanceof Array&&d.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+m);switch(d[0]){case 1:i.push(m),s.push(y.yytext),r.push(y.yylloc),i.push(d[1]),m=null,c=y.yyleng,h=y.yytext,l=y.yylineno,p=y.yylloc;break;case 2:if(b=this.productions_[d[1]][1],S.$=s[s.length-b],S._$={first_line:r[r.length-(b||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(b||1)].first_column,last_column:r[r.length-1].last_column},g&&(S._$.range=[r[r.length-(b||1)].range[0],r[r.length-1].range[1]]),void 0!==(k=this.performAction.apply(S,[h,c,l,u.yy,d[1],s,r].concat(a))))return k;b&&(i=i.slice(0,-1*b*2),s=s.slice(0,-1*b),r=r.slice(0,-1*b)),i.push(this.productions_[d[1]][0]),s.push(S.$),r.push(S._$),v=o[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}},e={EOF:1,parseError:function(t,n){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,n)},setInput:function(t,n){return this.yy=n||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var n=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var e=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===e.length?this.yylloc.first_column:0)+e[e.length-i.length].length-i[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),n=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+n+"^"},test_match:function(t,n){var i,e,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(e=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,n,i,e;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!n||i[0].length>n[0].length)){if(n=i,e=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(this._backtrack){n=!1;continue}return!1}if(!this.options.flex)break}return n?!1!==(t=this.test_match(n,s[e]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,n,i,e){switch(i){case 0:return 4;case 1:return 9;case 2:return"space";case 3:return 10;case 4:return 6;case 5:return"TXT"}},rules:[/^(?:info\b)/i,/^(?:[\s\n\r]+)/i,/^(?:[\s]+)/i,/^(?:showInfo\b)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5],inclusive:!0}}};function s(){this.yy={}}return i.lexer=e,s.prototype=i,i.Parser=s,new s}();n.parser=n;var o="",h=!1;t("diagram",{parser:n,db:{setMessage:function(t){e.debug("Setting message to: "+t),o=t},getMessage:function(){return o},setInfo:function(t){h=t},getInfo:function(){return h},clear:i},renderer:{draw:function(t,n,i){try{e.debug("Rendering info diagram\n"+t);var o,h=s().securityLevel;"sandbox"===h&&(o=r("#i"+n));var l=r("sandbox"===h?o.nodes()[0].contentDocument.body:"body").select("#"+n);l.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size","32px").style("text-anchor","middle").text("v "+i),l.attr("height",100),l.attr("width",400)}catch(c){e.error("Error while rendering info diagram"),e.error(c.message)}}},styles:function(){return""}})}}}));
