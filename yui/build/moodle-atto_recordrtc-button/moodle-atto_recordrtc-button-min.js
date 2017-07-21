YUI.add("moodle-atto_recordrtc-button",function(e,t){var n="atto_recordrtc",r='<div class="container-fluid"><div class="{{bs_row}} hide"><div class="{{bs_col}}12"><div id="alert-warning" class="alert {{bs_al_warn}}"><strong>{{browseralert_title}}</strong> {{browseralert}}</div></div></div><div class="{{bs_row}} hide"><div class="{{bs_col}}12"><div id="alert-danger" class="alert {{bs_al_dang}}"></div></div></div><div class="{{bs_row}} hide">{{#if audio}}<div class="{{bs_col}}1"></div><div class="{{bs_col}}10"><audio id="player"></audio></div><div class="{{bs_col}}1"></div>{{else}}<div class="{{bs_col}}12"><video id="player"></video></div>{{/if}}</div><div class="{{bs_row}}"><div class="{{bs_col}}1"></div><div class="{{bs_col}}10"><button id="start-stop" class="{{bs_ss_btn}}">{{startrecording}}</button></div><div class="{{bs_col}}1"></div></div><div class="{{bs_row}} hide"><div class="{{bs_col}}3"></div><div class="{{bs_col}}6"><button id="upload" class="{{bl_ul_btn}}">{{attachrecording}}</button></div><div class="{{bs_col}}3"></div></div></div>';e.namespace("M.atto_recordrtc").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_lang:"en",_content:null,initializer:function(){M.atto_recordrtc=M.atto_recordrtc||{},M.atto_recordrtc.params={};var e=["contextid","sesskey","recordrtcroot","audiobitrate","videobitrate","timelimit","oldermoodle","maxrecsize"];for(var t in e)M.atto_recordrtc.params[e[t]]=this.get(e[t]);var n=this.get("allowedtypes");(n==="both"||n==="audio")&&this._addButton("audio",this._audio),(n==="both"||n==="video")&&this._addButton("video",this._video)},_addButton:function(e,t){this.addButton({buttonName:e,icon:this.get(e+"rtcicon"),iconComponent:n,callback:t,title:e+"rtc",tags:e+"rtc",tagMatchRequiresAll:!1})},_audio:function(){var t=this.getDialogue({height:500,width:1e3,headerContent:M.util.get_string("audiortc","atto_recordrtc"),focusAfterHide:!0},!0),n=this.get("oldermoodle")?"row-fluid":"row",i=this.get("oldermoodle")?"span":"col-xs-",s=this.get("oldermoodle")?"":"alert-warning",o=this.get("oldermoodle")?"alert-error":"alert-danger",u=this.get("oldermoodle")?"btn btn-large btn-danger btn-block":"btn btn-lg btn-outline-danger btn-block",a=e.Handlebars.compile(r)({audio:!0,bs_row:n,bs_col:i,bs_al_warn:s,bs_al_dang:o,bs_ss_btn:u,bs_ul_btn:"btn btn-primary btn-block",browseralert_title:M.util.get_string("browseralert_title","atto_recordrtc"),browseralert:M.util.get_string("browseralert","atto_recordrtc"),startrecording:M.util.get_string("startrecording","atto_recordrtc"),attachrecording:M.util.get_string("attachrecording","atto_recordrtc")});t.set("bodyContent",a),t.show()},_video:function(){var t=this.getDialogue({height:500,width:1e3,headerContent:M.util.get_string("videortc","atto_recordrtc"),focusAfterHide:!0},!0),n=this.get("oldermoodle")?"row-fluid":"row",i=this.get("oldermoodle")?"span":"col-xs-",s=this.get("oldermoodle")?"":"alert-warning",o=this.get("oldermoodle")?"alert-error":"alert-danger",u=this.get("oldermoodle")?"btn btn-large btn-danger btn-block":"btn btn-lg btn-outline-danger btn-block",a=e.Handlebars.compile(r)({audio:!1,bs_row:n,bs_col:i,bs_al_warn:s,bs_al_dang:o,bs_ss_btn:u,bs_ul_btn:"btn btn-primary btn-block",browseralert_title:M.util.get_string("browseralert_title","atto_recordrtc"),browseralert:M.util.get_string("browseralert","atto_recordrtc"),startrecording:M.util.get_string("startrecording","atto_recordrtc"),attachrecording:M.util.get_string("attachrecording","atto_recordrtc")});t.set("bodyContent",a),t.show()}},{ATTRS:{contextid:{value:null},sesskey:{value:null},recordrtcroot:{value:null},allowedtypes:{value:null},audiobitrate:{value:null},videobitrate:{value:null},timelimit:{value:null},audiortcicon:{value:null},videortcicon:{value:null},oldermoodle:{value:null},maxrecsize:{value:null}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","moodle-atto_recordrtc-recording"]});
