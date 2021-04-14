goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___37333 = arguments.length;
var i__4772__auto___37334 = (0);
while(true){
if((i__4772__auto___37334 < len__4771__auto___37333)){
args__4777__auto__.push((arguments[i__4772__auto___37334]));

var G__37335 = (i__4772__auto___37334 + (1));
i__4772__auto___37334 = G__37335;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37062){
var G__37063 = cljs.core.first(seq37062);
var seq37062__$1 = cljs.core.next(seq37062);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37063,seq37062__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37064 = cljs.core.seq(sources);
var chunk__37065 = null;
var count__37066 = (0);
var i__37067 = (0);
while(true){
if((i__37067 < count__37066)){
var map__37077 = chunk__37065.cljs$core$IIndexed$_nth$arity$2(null,i__37067);
var map__37077__$1 = cljs.core.__destructure_map(map__37077);
var src = map__37077__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37078){var e_37339 = e37078;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37339);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37339.message)].join('')));
}

var G__37340 = seq__37064;
var G__37341 = chunk__37065;
var G__37342 = count__37066;
var G__37343 = (i__37067 + (1));
seq__37064 = G__37340;
chunk__37065 = G__37341;
count__37066 = G__37342;
i__37067 = G__37343;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37064);
if(temp__5735__auto__){
var seq__37064__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37064__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__37064__$1);
var G__37344 = cljs.core.chunk_rest(seq__37064__$1);
var G__37345 = c__4591__auto__;
var G__37346 = cljs.core.count(c__4591__auto__);
var G__37347 = (0);
seq__37064 = G__37344;
chunk__37065 = G__37345;
count__37066 = G__37346;
i__37067 = G__37347;
continue;
} else {
var map__37080 = cljs.core.first(seq__37064__$1);
var map__37080__$1 = cljs.core.__destructure_map(map__37080);
var src = map__37080__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37080__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37080__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37080__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37080__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37083){var e_37349 = e37083;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37349);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37349.message)].join('')));
}

var G__37350 = cljs.core.next(seq__37064__$1);
var G__37351 = null;
var G__37352 = (0);
var G__37353 = (0);
seq__37064 = G__37350;
chunk__37065 = G__37351;
count__37066 = G__37352;
i__37067 = G__37353;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37098 = cljs.core.seq(js_requires);
var chunk__37099 = null;
var count__37100 = (0);
var i__37101 = (0);
while(true){
if((i__37101 < count__37100)){
var js_ns = chunk__37099.cljs$core$IIndexed$_nth$arity$2(null,i__37101);
var require_str_37354 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37354);


var G__37355 = seq__37098;
var G__37356 = chunk__37099;
var G__37357 = count__37100;
var G__37358 = (i__37101 + (1));
seq__37098 = G__37355;
chunk__37099 = G__37356;
count__37100 = G__37357;
i__37101 = G__37358;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37098);
if(temp__5735__auto__){
var seq__37098__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37098__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__37098__$1);
var G__37359 = cljs.core.chunk_rest(seq__37098__$1);
var G__37360 = c__4591__auto__;
var G__37361 = cljs.core.count(c__4591__auto__);
var G__37362 = (0);
seq__37098 = G__37359;
chunk__37099 = G__37360;
count__37100 = G__37361;
i__37101 = G__37362;
continue;
} else {
var js_ns = cljs.core.first(seq__37098__$1);
var require_str_37363 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37363);


var G__37364 = cljs.core.next(seq__37098__$1);
var G__37365 = null;
var G__37366 = (0);
var G__37367 = (0);
seq__37098 = G__37364;
chunk__37099 = G__37365;
count__37100 = G__37366;
i__37101 = G__37367;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37104){
var map__37105 = p__37104;
var map__37105__$1 = cljs.core.__destructure_map(map__37105);
var msg = map__37105__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37105__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37105__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107(s__37108){
return (new cljs.core.LazySeq(null,(function (){
var s__37108__$1 = s__37108;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37108__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37115 = cljs.core.first(xs__6292__auto__);
var map__37115__$1 = cljs.core.__destructure_map(map__37115);
var src = map__37115__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37115__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37115__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__37108__$1,map__37115,map__37115__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37105,map__37105__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107_$_iter__37109(s__37110){
return (new cljs.core.LazySeq(null,((function (s__37108__$1,map__37115,map__37115__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37105,map__37105__$1,msg,info,reload_info){
return (function (){
var s__37110__$1 = s__37110;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37110__$1);
if(temp__5735__auto____$1){
var s__37110__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37110__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37110__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37112 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37111 = (0);
while(true){
if((i__37111 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__37111);
cljs.core.chunk_append(b__37112,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37372 = (i__37111 + (1));
i__37111 = G__37372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37112),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107_$_iter__37109(cljs.core.chunk_rest(s__37110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37112),null);
}
} else {
var warning = cljs.core.first(s__37110__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107_$_iter__37109(cljs.core.rest(s__37110__$2)));
}
} else {
return null;
}
break;
}
});})(s__37108__$1,map__37115,map__37115__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37105,map__37105__$1,msg,info,reload_info))
,null,null));
});})(s__37108__$1,map__37115,map__37115__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37105,map__37105__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37107(cljs.core.rest(s__37108__$1)));
} else {
var G__37373 = cljs.core.rest(s__37108__$1);
s__37108__$1 = G__37373;
continue;
}
} else {
var G__37374 = cljs.core.rest(s__37108__$1);
s__37108__$1 = G__37374;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37124_37375 = cljs.core.seq(warnings);
var chunk__37125_37376 = null;
var count__37126_37377 = (0);
var i__37127_37378 = (0);
while(true){
if((i__37127_37378 < count__37126_37377)){
var map__37134_37379 = chunk__37125_37376.cljs$core$IIndexed$_nth$arity$2(null,i__37127_37378);
var map__37134_37380__$1 = cljs.core.__destructure_map(map__37134_37379);
var w_37381 = map__37134_37380__$1;
var msg_37382__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134_37380__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134_37380__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134_37380__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134_37380__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37385)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37383),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37384),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37382__$1)].join(''));


var G__37386 = seq__37124_37375;
var G__37387 = chunk__37125_37376;
var G__37388 = count__37126_37377;
var G__37389 = (i__37127_37378 + (1));
seq__37124_37375 = G__37386;
chunk__37125_37376 = G__37387;
count__37126_37377 = G__37388;
i__37127_37378 = G__37389;
continue;
} else {
var temp__5735__auto___37390 = cljs.core.seq(seq__37124_37375);
if(temp__5735__auto___37390){
var seq__37124_37391__$1 = temp__5735__auto___37390;
if(cljs.core.chunked_seq_QMARK_(seq__37124_37391__$1)){
var c__4591__auto___37392 = cljs.core.chunk_first(seq__37124_37391__$1);
var G__37393 = cljs.core.chunk_rest(seq__37124_37391__$1);
var G__37394 = c__4591__auto___37392;
var G__37395 = cljs.core.count(c__4591__auto___37392);
var G__37396 = (0);
seq__37124_37375 = G__37393;
chunk__37125_37376 = G__37394;
count__37126_37377 = G__37395;
i__37127_37378 = G__37396;
continue;
} else {
var map__37136_37397 = cljs.core.first(seq__37124_37391__$1);
var map__37136_37398__$1 = cljs.core.__destructure_map(map__37136_37397);
var w_37399 = map__37136_37398__$1;
var msg_37400__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37136_37398__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37136_37398__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37136_37398__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37136_37398__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37403)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37401),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37402),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37400__$1)].join(''));


var G__37405 = cljs.core.next(seq__37124_37391__$1);
var G__37406 = null;
var G__37407 = (0);
var G__37408 = (0);
seq__37124_37375 = G__37405;
chunk__37125_37376 = G__37406;
count__37126_37377 = G__37407;
i__37127_37378 = G__37408;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37102_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37102_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37146){
var map__37147 = p__37146;
var map__37147__$1 = cljs.core.__destructure_map(map__37147);
var msg = map__37147__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37147__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37149 = cljs.core.seq(updates);
var chunk__37151 = null;
var count__37152 = (0);
var i__37153 = (0);
while(true){
if((i__37153 < count__37152)){
var path = chunk__37151.cljs$core$IIndexed$_nth$arity$2(null,i__37153);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37213_37416 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37217_37417 = null;
var count__37218_37418 = (0);
var i__37219_37419 = (0);
while(true){
if((i__37219_37419 < count__37218_37418)){
var node_37420 = chunk__37217_37417.cljs$core$IIndexed$_nth$arity$2(null,i__37219_37419);
if(cljs.core.not(node_37420.shadow$old)){
var path_match_37421 = shadow.cljs.devtools.client.browser.match_paths(node_37420.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37421)){
var new_link_37422 = (function (){var G__37244 = node_37420.cloneNode(true);
G__37244.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37421),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37244;
})();
(node_37420.shadow$old = true);

(new_link_37422.onload = ((function (seq__37213_37416,chunk__37217_37417,count__37218_37418,i__37219_37419,seq__37149,chunk__37151,count__37152,i__37153,new_link_37422,path_match_37421,node_37420,path,map__37147,map__37147__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37420);
});})(seq__37213_37416,chunk__37217_37417,count__37218_37418,i__37219_37419,seq__37149,chunk__37151,count__37152,i__37153,new_link_37422,path_match_37421,node_37420,path,map__37147,map__37147__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37421], 0));

goog.dom.insertSiblingAfter(new_link_37422,node_37420);


var G__37423 = seq__37213_37416;
var G__37424 = chunk__37217_37417;
var G__37425 = count__37218_37418;
var G__37426 = (i__37219_37419 + (1));
seq__37213_37416 = G__37423;
chunk__37217_37417 = G__37424;
count__37218_37418 = G__37425;
i__37219_37419 = G__37426;
continue;
} else {
var G__37427 = seq__37213_37416;
var G__37428 = chunk__37217_37417;
var G__37429 = count__37218_37418;
var G__37430 = (i__37219_37419 + (1));
seq__37213_37416 = G__37427;
chunk__37217_37417 = G__37428;
count__37218_37418 = G__37429;
i__37219_37419 = G__37430;
continue;
}
} else {
var G__37431 = seq__37213_37416;
var G__37432 = chunk__37217_37417;
var G__37433 = count__37218_37418;
var G__37434 = (i__37219_37419 + (1));
seq__37213_37416 = G__37431;
chunk__37217_37417 = G__37432;
count__37218_37418 = G__37433;
i__37219_37419 = G__37434;
continue;
}
} else {
var temp__5735__auto___37435 = cljs.core.seq(seq__37213_37416);
if(temp__5735__auto___37435){
var seq__37213_37436__$1 = temp__5735__auto___37435;
if(cljs.core.chunked_seq_QMARK_(seq__37213_37436__$1)){
var c__4591__auto___37437 = cljs.core.chunk_first(seq__37213_37436__$1);
var G__37438 = cljs.core.chunk_rest(seq__37213_37436__$1);
var G__37439 = c__4591__auto___37437;
var G__37440 = cljs.core.count(c__4591__auto___37437);
var G__37441 = (0);
seq__37213_37416 = G__37438;
chunk__37217_37417 = G__37439;
count__37218_37418 = G__37440;
i__37219_37419 = G__37441;
continue;
} else {
var node_37442 = cljs.core.first(seq__37213_37436__$1);
if(cljs.core.not(node_37442.shadow$old)){
var path_match_37443 = shadow.cljs.devtools.client.browser.match_paths(node_37442.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37443)){
var new_link_37444 = (function (){var G__37256 = node_37442.cloneNode(true);
G__37256.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37443),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37256;
})();
(node_37442.shadow$old = true);

(new_link_37444.onload = ((function (seq__37213_37416,chunk__37217_37417,count__37218_37418,i__37219_37419,seq__37149,chunk__37151,count__37152,i__37153,new_link_37444,path_match_37443,node_37442,seq__37213_37436__$1,temp__5735__auto___37435,path,map__37147,map__37147__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37442);
});})(seq__37213_37416,chunk__37217_37417,count__37218_37418,i__37219_37419,seq__37149,chunk__37151,count__37152,i__37153,new_link_37444,path_match_37443,node_37442,seq__37213_37436__$1,temp__5735__auto___37435,path,map__37147,map__37147__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37443], 0));

goog.dom.insertSiblingAfter(new_link_37444,node_37442);


var G__37446 = cljs.core.next(seq__37213_37436__$1);
var G__37447 = null;
var G__37448 = (0);
var G__37449 = (0);
seq__37213_37416 = G__37446;
chunk__37217_37417 = G__37447;
count__37218_37418 = G__37448;
i__37219_37419 = G__37449;
continue;
} else {
var G__37450 = cljs.core.next(seq__37213_37436__$1);
var G__37451 = null;
var G__37452 = (0);
var G__37453 = (0);
seq__37213_37416 = G__37450;
chunk__37217_37417 = G__37451;
count__37218_37418 = G__37452;
i__37219_37419 = G__37453;
continue;
}
} else {
var G__37454 = cljs.core.next(seq__37213_37436__$1);
var G__37455 = null;
var G__37456 = (0);
var G__37457 = (0);
seq__37213_37416 = G__37454;
chunk__37217_37417 = G__37455;
count__37218_37418 = G__37456;
i__37219_37419 = G__37457;
continue;
}
}
} else {
}
}
break;
}


var G__37458 = seq__37149;
var G__37459 = chunk__37151;
var G__37460 = count__37152;
var G__37461 = (i__37153 + (1));
seq__37149 = G__37458;
chunk__37151 = G__37459;
count__37152 = G__37460;
i__37153 = G__37461;
continue;
} else {
var G__37462 = seq__37149;
var G__37463 = chunk__37151;
var G__37464 = count__37152;
var G__37465 = (i__37153 + (1));
seq__37149 = G__37462;
chunk__37151 = G__37463;
count__37152 = G__37464;
i__37153 = G__37465;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37149);
if(temp__5735__auto__){
var seq__37149__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37149__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__37149__$1);
var G__37466 = cljs.core.chunk_rest(seq__37149__$1);
var G__37467 = c__4591__auto__;
var G__37468 = cljs.core.count(c__4591__auto__);
var G__37469 = (0);
seq__37149 = G__37466;
chunk__37151 = G__37467;
count__37152 = G__37468;
i__37153 = G__37469;
continue;
} else {
var path = cljs.core.first(seq__37149__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37269_37471 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37273_37472 = null;
var count__37274_37473 = (0);
var i__37275_37474 = (0);
while(true){
if((i__37275_37474 < count__37274_37473)){
var node_37475 = chunk__37273_37472.cljs$core$IIndexed$_nth$arity$2(null,i__37275_37474);
if(cljs.core.not(node_37475.shadow$old)){
var path_match_37476 = shadow.cljs.devtools.client.browser.match_paths(node_37475.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37476)){
var new_link_37478 = (function (){var G__37287 = node_37475.cloneNode(true);
G__37287.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37476),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37287;
})();
(node_37475.shadow$old = true);

(new_link_37478.onload = ((function (seq__37269_37471,chunk__37273_37472,count__37274_37473,i__37275_37474,seq__37149,chunk__37151,count__37152,i__37153,new_link_37478,path_match_37476,node_37475,path,seq__37149__$1,temp__5735__auto__,map__37147,map__37147__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37475);
});})(seq__37269_37471,chunk__37273_37472,count__37274_37473,i__37275_37474,seq__37149,chunk__37151,count__37152,i__37153,new_link_37478,path_match_37476,node_37475,path,seq__37149__$1,temp__5735__auto__,map__37147,map__37147__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37476], 0));

goog.dom.insertSiblingAfter(new_link_37478,node_37475);


var G__37481 = seq__37269_37471;
var G__37482 = chunk__37273_37472;
var G__37483 = count__37274_37473;
var G__37484 = (i__37275_37474 + (1));
seq__37269_37471 = G__37481;
chunk__37273_37472 = G__37482;
count__37274_37473 = G__37483;
i__37275_37474 = G__37484;
continue;
} else {
var G__37485 = seq__37269_37471;
var G__37486 = chunk__37273_37472;
var G__37487 = count__37274_37473;
var G__37488 = (i__37275_37474 + (1));
seq__37269_37471 = G__37485;
chunk__37273_37472 = G__37486;
count__37274_37473 = G__37487;
i__37275_37474 = G__37488;
continue;
}
} else {
var G__37489 = seq__37269_37471;
var G__37490 = chunk__37273_37472;
var G__37491 = count__37274_37473;
var G__37492 = (i__37275_37474 + (1));
seq__37269_37471 = G__37489;
chunk__37273_37472 = G__37490;
count__37274_37473 = G__37491;
i__37275_37474 = G__37492;
continue;
}
} else {
var temp__5735__auto___37493__$1 = cljs.core.seq(seq__37269_37471);
if(temp__5735__auto___37493__$1){
var seq__37269_37494__$1 = temp__5735__auto___37493__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37269_37494__$1)){
var c__4591__auto___37495 = cljs.core.chunk_first(seq__37269_37494__$1);
var G__37496 = cljs.core.chunk_rest(seq__37269_37494__$1);
var G__37497 = c__4591__auto___37495;
var G__37498 = cljs.core.count(c__4591__auto___37495);
var G__37499 = (0);
seq__37269_37471 = G__37496;
chunk__37273_37472 = G__37497;
count__37274_37473 = G__37498;
i__37275_37474 = G__37499;
continue;
} else {
var node_37500 = cljs.core.first(seq__37269_37494__$1);
if(cljs.core.not(node_37500.shadow$old)){
var path_match_37501 = shadow.cljs.devtools.client.browser.match_paths(node_37500.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37501)){
var new_link_37502 = (function (){var G__37288 = node_37500.cloneNode(true);
G__37288.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37501),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37288;
})();
(node_37500.shadow$old = true);

(new_link_37502.onload = ((function (seq__37269_37471,chunk__37273_37472,count__37274_37473,i__37275_37474,seq__37149,chunk__37151,count__37152,i__37153,new_link_37502,path_match_37501,node_37500,seq__37269_37494__$1,temp__5735__auto___37493__$1,path,seq__37149__$1,temp__5735__auto__,map__37147,map__37147__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37500);
});})(seq__37269_37471,chunk__37273_37472,count__37274_37473,i__37275_37474,seq__37149,chunk__37151,count__37152,i__37153,new_link_37502,path_match_37501,node_37500,seq__37269_37494__$1,temp__5735__auto___37493__$1,path,seq__37149__$1,temp__5735__auto__,map__37147,map__37147__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37501], 0));

goog.dom.insertSiblingAfter(new_link_37502,node_37500);


var G__37503 = cljs.core.next(seq__37269_37494__$1);
var G__37504 = null;
var G__37505 = (0);
var G__37506 = (0);
seq__37269_37471 = G__37503;
chunk__37273_37472 = G__37504;
count__37274_37473 = G__37505;
i__37275_37474 = G__37506;
continue;
} else {
var G__37507 = cljs.core.next(seq__37269_37494__$1);
var G__37508 = null;
var G__37509 = (0);
var G__37510 = (0);
seq__37269_37471 = G__37507;
chunk__37273_37472 = G__37508;
count__37274_37473 = G__37509;
i__37275_37474 = G__37510;
continue;
}
} else {
var G__37511 = cljs.core.next(seq__37269_37494__$1);
var G__37512 = null;
var G__37513 = (0);
var G__37514 = (0);
seq__37269_37471 = G__37511;
chunk__37273_37472 = G__37512;
count__37274_37473 = G__37513;
i__37275_37474 = G__37514;
continue;
}
}
} else {
}
}
break;
}


var G__37515 = cljs.core.next(seq__37149__$1);
var G__37516 = null;
var G__37517 = (0);
var G__37518 = (0);
seq__37149 = G__37515;
chunk__37151 = G__37516;
count__37152 = G__37517;
i__37153 = G__37518;
continue;
} else {
var G__37519 = cljs.core.next(seq__37149__$1);
var G__37520 = null;
var G__37521 = (0);
var G__37522 = (0);
seq__37149 = G__37519;
chunk__37151 = G__37520;
count__37152 = G__37521;
i__37153 = G__37522;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37297){
var map__37298 = p__37297;
var map__37298__$1 = cljs.core.__destructure_map(map__37298);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37298__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37302){
var map__37303 = p__37302;
var map__37303__$1 = cljs.core.__destructure_map(map__37303);
var _ = map__37303__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37303__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37305,done,error){
var map__37306 = p__37305;
var map__37306__$1 = cljs.core.__destructure_map(map__37306);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37306__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37307,done,error){
var map__37309 = p__37307;
var map__37309__$1 = cljs.core.__destructure_map(map__37309);
var msg = map__37309__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37309__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37309__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37309__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37311){
var map__37312 = p__37311;
var map__37312__$1 = cljs.core.__destructure_map(map__37312);
var src = map__37312__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37312__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37315 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37315) : done.call(null,G__37315));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37316){
var map__37317 = p__37316;
var map__37317__$1 = cljs.core.__destructure_map(map__37317);
var msg__$1 = map__37317__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37317__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37318){var ex = e37318;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37320){
var map__37321 = p__37320;
var map__37321__$1 = cljs.core.__destructure_map(map__37321);
var env = map__37321__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37321__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37324){
var map__37325 = p__37324;
var map__37325__$1 = cljs.core.__destructure_map(map__37325);
var msg = map__37325__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37325__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37326){
var map__37327 = p__37326;
var map__37327__$1 = cljs.core.__destructure_map(map__37327);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37327__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37327__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37328){
var map__37329 = p__37328;
var map__37329__$1 = cljs.core.__destructure_map(map__37329);
var svc = map__37329__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
