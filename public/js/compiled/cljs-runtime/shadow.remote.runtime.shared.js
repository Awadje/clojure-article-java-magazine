goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32138,res){
var map__32139 = p__32138;
var map__32139__$1 = cljs.core.__destructure_map(map__32139);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32139__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32139__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32140 = res;
var G__32140__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32140,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32140);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32140__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32140__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32146 = arguments.length;
switch (G__32146) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32148,msg,handlers,timeout_after_ms){
var map__32149 = p__32148;
var map__32149__$1 = cljs.core.__destructure_map(map__32149);
var runtime = map__32149__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32149__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___32344 = arguments.length;
var i__4772__auto___32347 = (0);
while(true){
if((i__4772__auto___32347 < len__4771__auto___32344)){
args__4777__auto__.push((arguments[i__4772__auto___32347]));

var G__32348 = (i__4772__auto___32347 + (1));
i__4772__auto___32347 = G__32348;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32158,ev,args){
var map__32159 = p__32158;
var map__32159__$1 = cljs.core.__destructure_map(map__32159);
var runtime = map__32159__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32159__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32160 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32163 = null;
var count__32164 = (0);
var i__32165 = (0);
while(true){
if((i__32165 < count__32164)){
var ext = chunk__32163.cljs$core$IIndexed$_nth$arity$2(null,i__32165);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32370 = seq__32160;
var G__32371 = chunk__32163;
var G__32372 = count__32164;
var G__32373 = (i__32165 + (1));
seq__32160 = G__32370;
chunk__32163 = G__32371;
count__32164 = G__32372;
i__32165 = G__32373;
continue;
} else {
var G__32376 = seq__32160;
var G__32377 = chunk__32163;
var G__32378 = count__32164;
var G__32379 = (i__32165 + (1));
seq__32160 = G__32376;
chunk__32163 = G__32377;
count__32164 = G__32378;
i__32165 = G__32379;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32160);
if(temp__5735__auto__){
var seq__32160__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32160__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32160__$1);
var G__32380 = cljs.core.chunk_rest(seq__32160__$1);
var G__32381 = c__4591__auto__;
var G__32382 = cljs.core.count(c__4591__auto__);
var G__32383 = (0);
seq__32160 = G__32380;
chunk__32163 = G__32381;
count__32164 = G__32382;
i__32165 = G__32383;
continue;
} else {
var ext = cljs.core.first(seq__32160__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32384 = cljs.core.next(seq__32160__$1);
var G__32385 = null;
var G__32386 = (0);
var G__32387 = (0);
seq__32160 = G__32384;
chunk__32163 = G__32385;
count__32164 = G__32386;
i__32165 = G__32387;
continue;
} else {
var G__32388 = cljs.core.next(seq__32160__$1);
var G__32389 = null;
var G__32390 = (0);
var G__32391 = (0);
seq__32160 = G__32388;
chunk__32163 = G__32389;
count__32164 = G__32390;
i__32165 = G__32391;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32152){
var G__32153 = cljs.core.first(seq32152);
var seq32152__$1 = cljs.core.next(seq32152);
var G__32154 = cljs.core.first(seq32152__$1);
var seq32152__$2 = cljs.core.next(seq32152__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32153,G__32154,seq32152__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32197,p__32198){
var map__32199 = p__32197;
var map__32199__$1 = cljs.core.__destructure_map(map__32199);
var runtime = map__32199__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32199__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32200 = p__32198;
var map__32200__$1 = cljs.core.__destructure_map(map__32200);
var msg = map__32200__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32200__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32202 = cljs.core.deref(state_ref);
var map__32202__$1 = cljs.core.__destructure_map(map__32202);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32202__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32202__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32205){
var map__32206 = p__32205;
var map__32206__$1 = cljs.core.__destructure_map(map__32206);
var runtime = map__32206__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32206__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4160__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32211,msg){
var map__32213 = p__32211;
var map__32213__$1 = cljs.core.__destructure_map(map__32213);
var runtime = map__32213__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32213__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32225,key,p__32226){
var map__32228 = p__32225;
var map__32228__$1 = cljs.core.__destructure_map(map__32228);
var state = map__32228__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32228__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32229 = p__32226;
var map__32229__$1 = cljs.core.__destructure_map(map__32229);
var spec = map__32229__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32229__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32245,key,spec){
var map__32246 = p__32245;
var map__32246__$1 = cljs.core.__destructure_map(map__32246);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32246__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32247_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32247_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32248_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32248_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32249_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32249_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32250_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32250_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32251_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32251_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32276,key){
var map__32277 = p__32276;
var map__32277__$1 = cljs.core.__destructure_map(map__32277);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32277__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32293,msg){
var map__32298 = p__32293;
var map__32298__$1 = cljs.core.__destructure_map(map__32298);
var runtime = map__32298__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32298__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32304,p__32305){
var map__32306 = p__32304;
var map__32306__$1 = cljs.core.__destructure_map(map__32306);
var runtime = map__32306__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32306__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32307 = p__32305;
var map__32307__$1 = cljs.core.__destructure_map(map__32307);
var msg = map__32307__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32307__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32307__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32313 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32315 = null;
var count__32316 = (0);
var i__32317 = (0);
while(true){
if((i__32317 < count__32316)){
var map__32323 = chunk__32315.cljs$core$IIndexed$_nth$arity$2(null,i__32317);
var map__32323__$1 = cljs.core.__destructure_map(map__32323);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32323__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32417 = seq__32313;
var G__32418 = chunk__32315;
var G__32419 = count__32316;
var G__32420 = (i__32317 + (1));
seq__32313 = G__32417;
chunk__32315 = G__32418;
count__32316 = G__32419;
i__32317 = G__32420;
continue;
} else {
var G__32421 = seq__32313;
var G__32422 = chunk__32315;
var G__32423 = count__32316;
var G__32424 = (i__32317 + (1));
seq__32313 = G__32421;
chunk__32315 = G__32422;
count__32316 = G__32423;
i__32317 = G__32424;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32313);
if(temp__5735__auto__){
var seq__32313__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32313__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32313__$1);
var G__32425 = cljs.core.chunk_rest(seq__32313__$1);
var G__32426 = c__4591__auto__;
var G__32427 = cljs.core.count(c__4591__auto__);
var G__32428 = (0);
seq__32313 = G__32425;
chunk__32315 = G__32426;
count__32316 = G__32427;
i__32317 = G__32428;
continue;
} else {
var map__32324 = cljs.core.first(seq__32313__$1);
var map__32324__$1 = cljs.core.__destructure_map(map__32324);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32324__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32429 = cljs.core.next(seq__32313__$1);
var G__32430 = null;
var G__32431 = (0);
var G__32432 = (0);
seq__32313 = G__32429;
chunk__32315 = G__32430;
count__32316 = G__32431;
i__32317 = G__32432;
continue;
} else {
var G__32433 = cljs.core.next(seq__32313__$1);
var G__32434 = null;
var G__32435 = (0);
var G__32436 = (0);
seq__32313 = G__32433;
chunk__32315 = G__32434;
count__32316 = G__32435;
i__32317 = G__32436;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
