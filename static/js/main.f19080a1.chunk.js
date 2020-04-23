(this["webpackJsonpspeech-to-text-demo"]=this["webpackJsonpspeech-to-text-demo"]||[]).push([[0],{39:function(e,t){e.exports={container:{width:"100%"},text:{width:"100%",display:""},play:{hover:{backgroundColor:"Blue"},button:{width:"34",height:"34",cursor:"pointer",pointerEvents:"none",outline:"none",backgroundColor:"Blue",border:"solid 1px rgba(255,255,255,1)",borderRadius:6}},stop:{hover:{backgroundColor:"yellow"},button:{width:"34",height:"34",cursor:"pointer",pointerEvents:"none",outline:"none",backgroundColor:"yellow",border:"solid 1px rgba(255,255,255,1)",borderRadius:6}},pause:{hover:{backgroundColor:"pink"},button:{width:"34",height:"34",cursor:"pointer",pointerEvents:"none",outline:"none",backgroundColor:"pink",border:"solid 1px rgba(255,255,255,1)",borderRadius:6}},resume:{hover:{backgroundColor:"grey"},button:{width:"34",height:"34",cursor:"pointer",pointerEvents:"none",outline:"none",backgroundColor:"grey",border:"solid 1px rgba(255,255,255,1)",borderRadius:6}}}},49:function(e,t,a){e.exports=a(58)},58:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(8),o=a.n(i),l=a(4),r=a(38),c=a.n(r),h=a(39),p=a.n(h);class u{constructor(e){this.utterance=new window.SpeechSynthesisUtterance,this.selected=u.getVoice(e.voice),this.utterance.voice=this.selected,this.utterance.text=e.text.replace(/\n/g,""),this.utterance.lang=e.lang||"en-GB",this.utterance.pitch=parseFloat(e.pitch,10)||.8,this.utterance.rate=parseFloat(e.rate,10)||1,this.utterance.volume=parseFloat(e.volume,10)||1}static supported(e){return window.speechSynthesis}static getVoice(e){const t=window.speechSynthesis.getVoices(),a=t.find(t=>t.name===e);return void 0!==a?a:t[0]}onend(e){this.utterance.onend=e}onerror(e){this.utterance.onerror=e}speak(){window.speechSynthesis.cancel(),window.speechSynthesis.speak(this.utterance)}pause(){window.speechSynthesis.pause()}cancel(){window.speechSynthesis.cancel()}resume(){window.speechSynthesis.resume()}}var g=a(89);class d extends s.Component{constructor(e){super(e),this.state={styles:void 0!==this.props.styles?this.props.styles:p.a},this.play=this.play.bind(this),this.pause=this.pause.bind(this),this.resume=this.resume.bind(this),this.stop=this.stop.bind(this),this.onend=this.onend.bind(this),this.onerror=this.onerror.bind(this)}componentDidMount(){this.setButtonState("all","none","none","none")}setButtonState(e,t,a,s){var n=c()(this.state,{styles:{play:{button:{pointerEvents:{$set:e}}},stop:{button:{pointerEvents:{$set:t}}},pause:{button:{pointerEvents:{$set:a}}},resume:{button:{pointerEvents:{$set:s}}}}});this.setState(n)}setSpeechSynthesis(){this.speechSynthesis=new u(this.props),this.speechSynthesis.onend(this.onend),this.speechSynthesis.onerror(this.onerror)}play(){this.setSpeechSynthesis(),this.speechSynthesis.speak(),this.setButtonState("none","all","all","none")}pause(){this.speechSynthesis.pause(),this.setButtonState("none","all","none","all")}resume(){this.speechSynthesis.resume(),this.setButtonState("none","all","all","none")}stop(){this.speechSynthesis.cancel(),this.setButtonState("all","none","none","none")}onend(){this.stop()}onerror(){this.stop()}render(){return this.props.disabled||!u.supported()?n.a.createElement("span",{className:"rs-container",style:this.state.styles.container},n.a.createElement("span",{className:"rs-text",style:this.state.styles.text},this.props.text)):(e=this.props.textAsButton?n.a.createElement(g.a,{className:"rs-play",styles:this.state.styles.play,onClick:this.play,variant:"outlined",size:"small"},"play"):n.a.createElement(g.a,{className:"rs-play",variant:"outlined",size:"small",styles:this.state.styles.play,onClick:this.play},"play"),this.props.stop&&(t=n.a.createElement(g.a,{className:"rs-stop",color:"secondary",size:"small",variant:"outlined",styles:this.state.styles.stop,onClick:this.stop},"stop")),this.props.pause&&(a=n.a.createElement(g.a,{className:"rs-pause",variant:"outlined",size:"small",color:"primary",styles:this.state.styles.pause,onClick:this.pause},"pause")),this.props.resume&&(s=n.a.createElement(g.a,{className:"rs-resume",variant:"outlined",size:"small",styles:this.state.styles.resume,onClick:this.resume},"resume")),n.a.createElement("span",{className:"rs-container",style:this.state.styles.container},e," ",t," ",a," ",s));var e,t,a,s}}var m=a(59),E=a(93),v=a(94),S=a(95),y=a(106),b=a(104),I=a(107),G=a(96),k=a(97),f=a(98),N=a(99),x=a(100),R=a(101),U=a(102),T=a(103),w=a(105),C=a(41),A=a.n(C),B=[["Afrikaans (Suid-Afrika)","af-ZA"],["\u12a0\u121b\u122d\u129b (\u12a2\u1275\u12ee\u1335\u12eb)","am-ET"],["\u0540\u0561\u0575 (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576)","hy-AM"],["Az\u0259rbaycan (Az\u0259rbaycan)","az-AZ"],["Bahasa Indonesia (Indonesia)","id-ID"],["Bahasa Melayu (Malaysia)","ms-MY"],["\u09ac\u09be\u0982\u09b2\u09be (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)","bn-BD"],["\u09ac\u09be\u0982\u09b2\u09be (\u09ad\u09be\u09b0\u09a4)","bn-IN"],["Catal\xe0 (Espanya)","ca-ES"],["\u010ce\u0161tina (\u010cesk\xe1 republika)","cs-CZ"],["Dansk (Danmark)","da-DK"],["Deutsch (Deutschland)","de-DE"],["English (Australia)","en-AU"],["English (Canada)","en-CA"],["English (Ghana)","en-GH"],["English (Great Britain)","en-GB"],["English (India)","en-IN"],["English (Ireland)","en-IE"],["English (Kenya)","en-KE"],["English (New Zealand)","en-NZ"],["English (Nigeria)","en-NG"],["English (Philippines)","en-PH"],["English (South Africa)","en-ZA"],["English (Tanzania)","en-TZ"],["English (United States)","en-US"],["Espa\xf1ol (Argentina)","es-AR"],["Espa\xf1ol (Bolivia)","es-BO"],["Espa\xf1ol (Chile)","es-CL"],["Espa\xf1ol (Colombia)","es-CO"],["Espa\xf1ol (Costa Rica)","es-CR"],["Espa\xf1ol (Ecuador)","es-EC"],["Espa\xf1ol (El Salvador)","es-SV"],["Espa\xf1ol (Espa\xf1a)","es-ES"],["Espa\xf1ol (Estados Unidos)","es-US"],["Espa\xf1ol (Guatemala)","es-GT"],["Espa\xf1ol (Honduras)","es-HN"],["Espa\xf1ol (M\xe9xico)","es-MX"],["Espa\xf1ol (Nicaragua)","es-NI"],["Espa\xf1ol (Panam\xe1)","es-PA"],["Espa\xf1ol (Paraguay)","es-PY"],["Espa\xf1ol (Per\xfa)","es-PE"],["Espa\xf1ol (Puerto Rico)","es-PR"],["Espa\xf1ol (Rep\xfablica Dominicana)","es-DO"],["Espa\xf1ol (Uruguay)","es-UY"],["Espa\xf1ol (Venezuela)","es-VE"],["Euskara (Espainia)","eu-ES"],["Filipino (Pilipinas)","fil-PH"],["Fran\xe7ais (Canada)","fr-CA"],["Fran\xe7ais (France)","fr-FR"],["Galego (Espa\xf1a)","gl-ES"],["\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd)","ka-GE"],["\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aad\u0abe\u0ab0\u0aa4)","gu-IN"],["Hrvatski (Hrvatska)","hr-HR"],["IsiZulu (Ningizimu Afrika)","zu-ZA"],["\xcdslenska (\xcdsland)","is-IS"],["Italiano (Italia)","it-IT"],["Jawa (Indonesia)","jv-ID"],["\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cad\u0cbe\u0cb0\u0ca4)","kn-IN"],["\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6)","km-KH"],["\u0ea5\u0eb2\u0ea7 (\u0ea5\u0eb2\u0ea7)","lo-LA"],["Latvie\u0161u (latvie\u0161u)","lv-LV"],["Lietuvi\u0173 (Lietuva)","lt-LT"],["Magyar (Magyarorsz\xe1g)","hu-HU"],["\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d07\u0d28\u0d4d\u0d24\u0d4d\u0d2f)","ml-IN"],["\u092e\u0930\u093e\u0920\u0940 (\u092d\u093e\u0930\u0924)","mr-IN"],["Nederlands (Nederland)","nl-NL"],["\u0928\u0947\u092a\u093e\u0932\u0940 (\u0928\u0947\u092a\u093e\u0932)","ne-NP"],["Norsk bokm\xe5l (Norge)","nb-NO"],["Polski (Polska)","pl-PL"],["Portugu\xeas (Brasil)","pt-BR"],["Portugu\xeas (Portugal)","pt-PT"],["Rom\xe2n\u0103 (Rom\xe2nia)","ro-RO"],["\u0dc3\u0dd2\u0d82\u0dc4\u0dbd (\u0dc1\u0dca\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0)","si-LK"],["Sloven\u010dina (Slovensko)","sk-SK"],["Sloven\u0161\u010dina (Slovenija)","sl-SI"],["Urang (Indonesia)","su-ID"],["Swahili (Tanzania)","sw-TZ"],["Swahili (Kenya)","sw-KE"],["Suomi (Suomi)","fi-FI"],["Svenska (Sverige)","sv-SE"],["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe)","ta-IN"],["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd)","ta-SG"],["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8)","ta-LK"],["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0bae\u0bb2\u0bc7\u0b9a\u0bbf\u0baf\u0bbe)","ta-MY"],["\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2d\u0c3e\u0c30\u0c24\u0c26\u0c47\u0c36\u0c02)","te-IN"],["Ti\u1ebfng Vi\u1ec7t (Vi\u1ec7t Nam)","vi-VN"],["T\xfcrk\xe7e (T\xfcrkiye)","tr-TR"],["\u0627\u0631\u062f\u0648 (\u067e\u0627\u06a9\u0633\u062a\u0627\u0646)","ur-PK"],["\u0627\u0631\u062f\u0648 (\u0628\u06be\u0627\u0631\u062a)","ur-IN"],["\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac (\u0395\u03bb\u03bb\u03ac\u03b4\u03b1)","el-GR"],["\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f)","bg-BG"],["\u0420\u0443\u0441\u0441\u043a\u0438\u0439 (\u0420\u043e\u0441\u0441\u0438\u044f)","ru-RU"],["\u0421\u0440\u043f\u0441\u043a\u0438 (\u0421\u0440\u0431\u0438\u0458\u0430)","sr-RS"],["\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430 (\u0423\u043a\u0440\u0430\u0457\u043d\u0430)","uk-UA"],["\u05e2\u05d1\u05e8\u05d9\u05ea (\u05d9\u05e9\u05e8\u05d0\u05dc)","he-IL"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0625\u0633\u0631\u0627\u0626\u064a\u0644)","ar-IL"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0623\u0631\u062f\u0646)","ar-JO"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a)","ar-AE"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0628\u062d\u0631\u064a\u0646)","ar-BH"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u062c\u0632\u0627\u0626\u0631)","ar-DZ"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629)","ar-SA"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0639\u0631\u0627\u0642)","ar-IQ"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0643\u0648\u064a\u062a)","ar-KW"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0645\u063a\u0631\u0628)","ar-MA"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u062a\u0648\u0646\u0633)","ar-TN"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0639\u064f\u0645\u0627\u0646)","ar-OM"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0641\u0644\u0633\u0637\u064a\u0646)","ar-PS"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0642\u0637\u0631)","ar-QA"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0644\u0628\u0646\u0627\u0646)","ar-LB"],["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0645\u0635\u0631)","ar-EG"],["\u0641\u0627\u0631\u0633\u06cc (\u0627\u06cc\u0631\u0627\u0646)","fa-IR"],["\u0939\u093f\u0928\u094d\u0926\u0940 (\u092d\u093e\u0930\u0924)","hi-IN"],["\u0e44\u0e17\u0e22 (\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22)","th-TH"],["\ud55c\uad6d\uc5b4 (\ub300\ud55c\ubbfc\uad6d)","ko-KR"],["\u570b\u8a9e (\u53f0\u7063)","cmn-Hant-TW"],["\u5ee3\u6771\u8a71 (\u9999\u6e2f)","yue-Hant-HK"],["\u65e5\u672c\u8a9e\uff08\u65e5\u672c\uff09","ja-JP"],["\u666e\u901a\u8a71 (\u9999\u6e2f)","cmn-Hans-HK"],["\u666e\u901a\u8bdd (\u4e2d\u56fd\u5927\u9646)","cmn-Hans-CN"]],L=[{voiceURI:"Google Deutsch",name:"Google Deutsch",lang:"de-DE",localService:!1,default:!0},{voiceURI:"Google US English",name:"Google US English",lang:"en-US",localService:!1,default:!1},{voiceURI:"Google UK English Female",name:"Google UK English Female",lang:"en-GB",localService:!1,default:!1},{voiceURI:"Google UK English Male",name:"Google UK English Male",lang:"en-GB",localService:!1,default:!1},{voiceURI:"Google espa\xf1ol",name:"Google espa\xf1ol",lang:"es-ES",localService:!1,default:!1},{voiceURI:"Google espa\xf1ol de Estados Unidos",name:"Google espa\xf1ol de Estados Unidos",lang:"es-US",localService:!1,default:!1},{voiceURI:"Google fran\xe7ais",name:"Google fran\xe7ais",lang:"fr-FR",localService:!1,default:!1},{voiceURI:"Google \u0939\u093f\u0928\u094d\u0926\u0940",name:"Google \u0939\u093f\u0928\u094d\u0926\u0940",lang:"hi-IN",localService:!1,default:!1},{voiceURI:"Google Bahasa Indonesia",name:"Google Bahasa Indonesia",lang:"id-ID",localService:!1,default:!1},{voiceURI:"Google italiano",name:"Google italiano",lang:"it-IT",localService:!1,default:!1},{voiceURI:"Google \u65e5\u672c\u8a9e",name:"Google \u65e5\u672c\u8a9e",lang:"ja-JP",localService:!1,default:!1},{voiceURI:"Google \ud55c\uad6d\uc758",name:"Google \ud55c\uad6d\uc758",lang:"ko-KR",localService:!1,default:!1},{voiceURI:"Google Nederlands",name:"Google Nederlands",lang:"nl-NL",localService:!1,default:!1},{voiceURI:"Google polski",name:"Google polski",lang:"pl-PL",localService:!1,default:!1},{voiceURI:"Google portugu\xeas do Brasil",name:"Google portugu\xeas do Brasil",lang:"pt-BR",localService:!1,default:!1},{voiceURI:"Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439",name:"Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439",lang:"ru-RU",localService:!1,default:!1},{voiceURI:"Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09",name:"Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09",lang:"zh-CN",localService:!1,default:!1},{voiceURI:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09",name:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09",lang:"zh-HK",localService:!1,default:!1},{voiceURI:"Google \u570b\u8a9e\uff08\u81fa\u7063\uff09",name:"Google \u570b\u8a9e\uff08\u81fa\u7063\uff09",lang:"zh-TW",localService:!1,default:!1}];class P extends s.Component{constructor(e){super(e),this.onAnythingSaid=e=>{let t=this.state.interimTextTill+" "+e;this.setState({interimText:t})},this.onEndEvent=()=>{this.state.listening&&this.startListening()},this.onFinalised=e=>{let t=this.state.interimTextTill+" "+e;this.setState({interimTextTill:t})},this.startListening=()=>{try{this.listener=new A.a(this.onFinalised,this.onEndEvent,this.onAnythingSaid,this.state.language),this.listener.startListening(),this.setState({listening:!0})}catch(e){console.log("yoyoy"),console.log(e)}},this.stopListening=()=>{this.listener.stopListening(),this.setState({finalisedText:[this.state.interimTextTill,...this.state.finalisedText],interimText:"",interimTextTill:"",listening:!1})},this.onAnythingSaid=this.onAnythingSaid.bind(this),this.onEndEvent=this.onEndEvent.bind(this),this.onFinalised=this.onFinalised.bind(this),this.startListening=this.startListening.bind(this),this.stopListening=this.stopListening.bind(this),this.state={error:"",interimText:"",interimTextTill:"",finalisedText:[],listening:!1,language:"en-US",languageAudio:"Google US English"}}render(){const e=this.state,t=e.error,a=e.interimText,s=e.finalisedText,i=e.listening,o=e.language,l=this.props.classes;let r;if(t)r=n.a.createElement(m.a,{className:l.paper},n.a.createElement(E.a,{variant:"h6",gutterBottom:!0},t));else{let e;e=i?n.a.createElement(g.a,{color:"primary",onClick:()=>this.stopListening()},"Stop Listening"):n.a.createElement(g.a,{color:"primary",onClick:()=>this.startListening(),variant:"contained"},"Start Listening"),r=n.a.createElement(v.a,{container:!0,spacing:8},n.a.createElement(v.a,{item:!0,xs:12,md:12},n.a.createElement(m.a,{className:this.props.classes.paper},n.a.createElement(v.a,{container:!0,spacing:8},n.a.createElement(v.a,{item:!0,xs:12,lg:6},n.a.createElement(E.a,{variant:"overline",gutterBottom:!0},"Status: ",i?"listening...":"finished listening"),e),n.a.createElement(v.a,{item:!0,xs:12,lg:6},n.a.createElement(S.a,{className:l.formControl},n.a.createElement(y.a,null,"Language"),n.a.createElement(b.a,{value:o,onChange:e=>this.setState({language:e.target.value}),disabled:i},B.map(e=>n.a.createElement(I.a,{key:e[1],value:e[1]},e[0]))),n.a.createElement(G.a,null,"What language are you going to speak in?")))))),n.a.createElement(v.a,{item:!0,xs:12,md:12},n.a.createElement(m.a,{className:this.props.classes.paper},n.a.createElement(E.a,{variant:"overline",gutterBottom:!0},"Current utterances"),n.a.createElement(E.a,{variant:"body1",gutterBottom:!0},a))),n.a.createElement(v.a,{item:!0,xs:12,lg:12},n.a.createElement(m.a,{className:l.paper},n.a.createElement(v.a,{item:!0,xs:12,lg:12,style:{marginTop:"40px"}},n.a.createElement(S.a,{className:l.formControl},n.a.createElement(y.a,null,"Select Voice For Speech"),n.a.createElement(b.a,{value:this.state.languageAudio,onChange:e=>this.setState({languageAudio:e.target.value})},L.map((e,t)=>n.a.createElement(I.a,{key:"supportedLanguagesAudio".concat(t),value:e.name},e.name))),n.a.createElement(G.a,null,"What voice are you going to listen in?"))),n.a.createElement(k.a,{className:l.table},n.a.createElement(f.a,null,n.a.createElement(N.a,null,n.a.createElement(x.a,null,"Finalised Text"))),n.a.createElement(R.a,null,s.map((e,t)=>n.a.createElement(N.a,{key:t},n.a.createElement(x.a,{component:"th",scope:"row"},e,n.a.createElement(m.a,{style:{boxShadow:"none"}},n.a.createElement(d,{stop:!0,pause:!0,resume:!0,text:e,voice:this.state.languageAudio}))))))))))}return n.a.createElement(v.a,{container:!0},n.a.createElement(U.a,{position:"static",style:{backgroundColor:"#3f51b5ab"}},n.a.createElement(T.a,null,n.a.createElement("img",{src:"https://iviewlabs.com/assets/img/landing/logo.jpg",alt:"logo of iview","data-reactid":".0.0"}),n.a.createElement(E.a,{variant:"h6",className:l.grow,color:"inherit",style:{textAlign:"center"}},"Speech-to-text And Text-to-speech"))),n.a.createElement(v.a,{container:!0,justify:"center",className:l.root},n.a.createElement(v.a,{item:!0,xs:12,sm:8},r)))}}var K=Object(w.a)()(Object(l.a)(e=>({root:{paddingTop:65,paddingLeft:11,paddingRight:11},flex:{flex:1},grow:{flexGrow:1},paper:e.mixins.gutters({paddingTop:22,paddingBottom:22})}))(P));o.a.render(n.a.createElement(K,null),document.getElementById("app"))}},[[49,1,2]]]);
//# sourceMappingURL=main.f19080a1.chunk.js.map