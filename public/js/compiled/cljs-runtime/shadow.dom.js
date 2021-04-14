goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35518 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35518(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35522 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35522(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34454 = coll;
var G__34455 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34454,G__34455) : shadow.dom.lazy_native_coll_seq.call(null,G__34454,G__34455));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4160__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34468 = arguments.length;
switch (G__34468) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34476 = arguments.length;
switch (G__34476) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34490 = arguments.length;
switch (G__34490) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34505 = arguments.length;
switch (G__34505) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34517 = arguments.length;
switch (G__34517) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34530 = arguments.length;
switch (G__34530) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34544){if((e34544 instanceof Object)){
var e = e34544;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34544;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34553 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34554 = null;
var count__34555 = (0);
var i__34556 = (0);
while(true){
if((i__34556 < count__34555)){
var el = chunk__34554.cljs$core$IIndexed$_nth$arity$2(null,i__34556);
var handler_35568__$1 = ((function (seq__34553,chunk__34554,count__34555,i__34556,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34553,chunk__34554,count__34555,i__34556,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35568__$1);


var G__35572 = seq__34553;
var G__35573 = chunk__34554;
var G__35574 = count__34555;
var G__35575 = (i__34556 + (1));
seq__34553 = G__35572;
chunk__34554 = G__35573;
count__34555 = G__35574;
i__34556 = G__35575;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34553);
if(temp__5735__auto__){
var seq__34553__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34553__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34553__$1);
var G__35577 = cljs.core.chunk_rest(seq__34553__$1);
var G__35578 = c__4591__auto__;
var G__35579 = cljs.core.count(c__4591__auto__);
var G__35580 = (0);
seq__34553 = G__35577;
chunk__34554 = G__35578;
count__34555 = G__35579;
i__34556 = G__35580;
continue;
} else {
var el = cljs.core.first(seq__34553__$1);
var handler_35582__$1 = ((function (seq__34553,chunk__34554,count__34555,i__34556,el,seq__34553__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34553,chunk__34554,count__34555,i__34556,el,seq__34553__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35582__$1);


var G__35583 = cljs.core.next(seq__34553__$1);
var G__35584 = null;
var G__35585 = (0);
var G__35586 = (0);
seq__34553 = G__35583;
chunk__34554 = G__35584;
count__34555 = G__35585;
i__34556 = G__35586;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34575 = arguments.length;
switch (G__34575) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34590 = cljs.core.seq(events);
var chunk__34591 = null;
var count__34592 = (0);
var i__34593 = (0);
while(true){
if((i__34593 < count__34592)){
var vec__34614 = chunk__34591.cljs$core$IIndexed$_nth$arity$2(null,i__34593);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34614,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34614,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35605 = seq__34590;
var G__35606 = chunk__34591;
var G__35607 = count__34592;
var G__35608 = (i__34593 + (1));
seq__34590 = G__35605;
chunk__34591 = G__35606;
count__34592 = G__35607;
i__34593 = G__35608;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34590);
if(temp__5735__auto__){
var seq__34590__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34590__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34590__$1);
var G__35610 = cljs.core.chunk_rest(seq__34590__$1);
var G__35611 = c__4591__auto__;
var G__35612 = cljs.core.count(c__4591__auto__);
var G__35613 = (0);
seq__34590 = G__35610;
chunk__34591 = G__35611;
count__34592 = G__35612;
i__34593 = G__35613;
continue;
} else {
var vec__34619 = cljs.core.first(seq__34590__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34619,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34619,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35614 = cljs.core.next(seq__34590__$1);
var G__35615 = null;
var G__35616 = (0);
var G__35617 = (0);
seq__34590 = G__35614;
chunk__34591 = G__35615;
count__34592 = G__35616;
i__34593 = G__35617;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34627 = cljs.core.seq(styles);
var chunk__34628 = null;
var count__34629 = (0);
var i__34630 = (0);
while(true){
if((i__34630 < count__34629)){
var vec__34641 = chunk__34628.cljs$core$IIndexed$_nth$arity$2(null,i__34630);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34641,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34641,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35622 = seq__34627;
var G__35623 = chunk__34628;
var G__35624 = count__34629;
var G__35625 = (i__34630 + (1));
seq__34627 = G__35622;
chunk__34628 = G__35623;
count__34629 = G__35624;
i__34630 = G__35625;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34627);
if(temp__5735__auto__){
var seq__34627__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34627__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34627__$1);
var G__35628 = cljs.core.chunk_rest(seq__34627__$1);
var G__35629 = c__4591__auto__;
var G__35630 = cljs.core.count(c__4591__auto__);
var G__35631 = (0);
seq__34627 = G__35628;
chunk__34628 = G__35629;
count__34629 = G__35630;
i__34630 = G__35631;
continue;
} else {
var vec__34647 = cljs.core.first(seq__34627__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34647,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35635 = cljs.core.next(seq__34627__$1);
var G__35636 = null;
var G__35637 = (0);
var G__35638 = (0);
seq__34627 = G__35635;
chunk__34628 = G__35636;
count__34629 = G__35637;
i__34630 = G__35638;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34653_35639 = key;
var G__34653_35640__$1 = (((G__34653_35639 instanceof cljs.core.Keyword))?G__34653_35639.fqn:null);
switch (G__34653_35640__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35649 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_35649,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_35649,"aria-");
}
})())){
el.setAttribute(ks_35649,value);
} else {
(el[ks_35649] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34674){
var map__34675 = p__34674;
var map__34675__$1 = cljs.core.__destructure_map(map__34675);
var props = map__34675__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34675__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34676 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34676,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34676,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34676,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34683 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34683,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34683;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34686 = arguments.length;
switch (G__34686) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34695){
var vec__34696 = p__34695;
var seq__34697 = cljs.core.seq(vec__34696);
var first__34698 = cljs.core.first(seq__34697);
var seq__34697__$1 = cljs.core.next(seq__34697);
var nn = first__34698;
var first__34698__$1 = cljs.core.first(seq__34697__$1);
var seq__34697__$2 = cljs.core.next(seq__34697__$1);
var np = first__34698__$1;
var nc = seq__34697__$2;
var node = vec__34696;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34703 = nn;
var G__34704 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34703,G__34704) : create_fn.call(null,G__34703,G__34704));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34706 = nn;
var G__34707 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34706,G__34707) : create_fn.call(null,G__34706,G__34707));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34710 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34710,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34710,(1),null);
var seq__34715_35719 = cljs.core.seq(node_children);
var chunk__34716_35720 = null;
var count__34717_35721 = (0);
var i__34718_35722 = (0);
while(true){
if((i__34718_35722 < count__34717_35721)){
var child_struct_35728 = chunk__34716_35720.cljs$core$IIndexed$_nth$arity$2(null,i__34718_35722);
var children_35730 = shadow.dom.dom_node(child_struct_35728);
if(cljs.core.seq_QMARK_(children_35730)){
var seq__34755_35732 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35730));
var chunk__34757_35733 = null;
var count__34758_35734 = (0);
var i__34759_35735 = (0);
while(true){
if((i__34759_35735 < count__34758_35734)){
var child_35740 = chunk__34757_35733.cljs$core$IIndexed$_nth$arity$2(null,i__34759_35735);
if(cljs.core.truth_(child_35740)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35740);


var G__35743 = seq__34755_35732;
var G__35744 = chunk__34757_35733;
var G__35745 = count__34758_35734;
var G__35746 = (i__34759_35735 + (1));
seq__34755_35732 = G__35743;
chunk__34757_35733 = G__35744;
count__34758_35734 = G__35745;
i__34759_35735 = G__35746;
continue;
} else {
var G__35748 = seq__34755_35732;
var G__35749 = chunk__34757_35733;
var G__35750 = count__34758_35734;
var G__35751 = (i__34759_35735 + (1));
seq__34755_35732 = G__35748;
chunk__34757_35733 = G__35749;
count__34758_35734 = G__35750;
i__34759_35735 = G__35751;
continue;
}
} else {
var temp__5735__auto___35756 = cljs.core.seq(seq__34755_35732);
if(temp__5735__auto___35756){
var seq__34755_35758__$1 = temp__5735__auto___35756;
if(cljs.core.chunked_seq_QMARK_(seq__34755_35758__$1)){
var c__4591__auto___35759 = cljs.core.chunk_first(seq__34755_35758__$1);
var G__35760 = cljs.core.chunk_rest(seq__34755_35758__$1);
var G__35761 = c__4591__auto___35759;
var G__35762 = cljs.core.count(c__4591__auto___35759);
var G__35763 = (0);
seq__34755_35732 = G__35760;
chunk__34757_35733 = G__35761;
count__34758_35734 = G__35762;
i__34759_35735 = G__35763;
continue;
} else {
var child_35764 = cljs.core.first(seq__34755_35758__$1);
if(cljs.core.truth_(child_35764)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35764);


var G__35767 = cljs.core.next(seq__34755_35758__$1);
var G__35768 = null;
var G__35769 = (0);
var G__35770 = (0);
seq__34755_35732 = G__35767;
chunk__34757_35733 = G__35768;
count__34758_35734 = G__35769;
i__34759_35735 = G__35770;
continue;
} else {
var G__35772 = cljs.core.next(seq__34755_35758__$1);
var G__35773 = null;
var G__35774 = (0);
var G__35775 = (0);
seq__34755_35732 = G__35772;
chunk__34757_35733 = G__35773;
count__34758_35734 = G__35774;
i__34759_35735 = G__35775;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35730);
}


var G__35786 = seq__34715_35719;
var G__35787 = chunk__34716_35720;
var G__35788 = count__34717_35721;
var G__35789 = (i__34718_35722 + (1));
seq__34715_35719 = G__35786;
chunk__34716_35720 = G__35787;
count__34717_35721 = G__35788;
i__34718_35722 = G__35789;
continue;
} else {
var temp__5735__auto___35791 = cljs.core.seq(seq__34715_35719);
if(temp__5735__auto___35791){
var seq__34715_35792__$1 = temp__5735__auto___35791;
if(cljs.core.chunked_seq_QMARK_(seq__34715_35792__$1)){
var c__4591__auto___35793 = cljs.core.chunk_first(seq__34715_35792__$1);
var G__35794 = cljs.core.chunk_rest(seq__34715_35792__$1);
var G__35795 = c__4591__auto___35793;
var G__35796 = cljs.core.count(c__4591__auto___35793);
var G__35797 = (0);
seq__34715_35719 = G__35794;
chunk__34716_35720 = G__35795;
count__34717_35721 = G__35796;
i__34718_35722 = G__35797;
continue;
} else {
var child_struct_35799 = cljs.core.first(seq__34715_35792__$1);
var children_35800 = shadow.dom.dom_node(child_struct_35799);
if(cljs.core.seq_QMARK_(children_35800)){
var seq__34771_35803 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35800));
var chunk__34773_35804 = null;
var count__34774_35805 = (0);
var i__34775_35806 = (0);
while(true){
if((i__34775_35806 < count__34774_35805)){
var child_35807 = chunk__34773_35804.cljs$core$IIndexed$_nth$arity$2(null,i__34775_35806);
if(cljs.core.truth_(child_35807)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35807);


var G__35812 = seq__34771_35803;
var G__35813 = chunk__34773_35804;
var G__35814 = count__34774_35805;
var G__35815 = (i__34775_35806 + (1));
seq__34771_35803 = G__35812;
chunk__34773_35804 = G__35813;
count__34774_35805 = G__35814;
i__34775_35806 = G__35815;
continue;
} else {
var G__35816 = seq__34771_35803;
var G__35817 = chunk__34773_35804;
var G__35818 = count__34774_35805;
var G__35819 = (i__34775_35806 + (1));
seq__34771_35803 = G__35816;
chunk__34773_35804 = G__35817;
count__34774_35805 = G__35818;
i__34775_35806 = G__35819;
continue;
}
} else {
var temp__5735__auto___35821__$1 = cljs.core.seq(seq__34771_35803);
if(temp__5735__auto___35821__$1){
var seq__34771_35822__$1 = temp__5735__auto___35821__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34771_35822__$1)){
var c__4591__auto___35823 = cljs.core.chunk_first(seq__34771_35822__$1);
var G__35824 = cljs.core.chunk_rest(seq__34771_35822__$1);
var G__35825 = c__4591__auto___35823;
var G__35826 = cljs.core.count(c__4591__auto___35823);
var G__35827 = (0);
seq__34771_35803 = G__35824;
chunk__34773_35804 = G__35825;
count__34774_35805 = G__35826;
i__34775_35806 = G__35827;
continue;
} else {
var child_35832 = cljs.core.first(seq__34771_35822__$1);
if(cljs.core.truth_(child_35832)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35832);


var G__35833 = cljs.core.next(seq__34771_35822__$1);
var G__35834 = null;
var G__35835 = (0);
var G__35836 = (0);
seq__34771_35803 = G__35833;
chunk__34773_35804 = G__35834;
count__34774_35805 = G__35835;
i__34775_35806 = G__35836;
continue;
} else {
var G__35837 = cljs.core.next(seq__34771_35822__$1);
var G__35838 = null;
var G__35839 = (0);
var G__35840 = (0);
seq__34771_35803 = G__35837;
chunk__34773_35804 = G__35838;
count__34774_35805 = G__35839;
i__34775_35806 = G__35840;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35800);
}


var G__35842 = cljs.core.next(seq__34715_35792__$1);
var G__35843 = null;
var G__35844 = (0);
var G__35845 = (0);
seq__34715_35719 = G__35842;
chunk__34716_35720 = G__35843;
count__34717_35721 = G__35844;
i__34718_35722 = G__35845;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34799 = cljs.core.seq(node);
var chunk__34800 = null;
var count__34801 = (0);
var i__34802 = (0);
while(true){
if((i__34802 < count__34801)){
var n = chunk__34800.cljs$core$IIndexed$_nth$arity$2(null,i__34802);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35850 = seq__34799;
var G__35851 = chunk__34800;
var G__35852 = count__34801;
var G__35853 = (i__34802 + (1));
seq__34799 = G__35850;
chunk__34800 = G__35851;
count__34801 = G__35852;
i__34802 = G__35853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34799);
if(temp__5735__auto__){
var seq__34799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34799__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34799__$1);
var G__35858 = cljs.core.chunk_rest(seq__34799__$1);
var G__35859 = c__4591__auto__;
var G__35860 = cljs.core.count(c__4591__auto__);
var G__35861 = (0);
seq__34799 = G__35858;
chunk__34800 = G__35859;
count__34801 = G__35860;
i__34802 = G__35861;
continue;
} else {
var n = cljs.core.first(seq__34799__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35862 = cljs.core.next(seq__34799__$1);
var G__35863 = null;
var G__35864 = (0);
var G__35865 = (0);
seq__34799 = G__35862;
chunk__34800 = G__35863;
count__34801 = G__35864;
i__34802 = G__35865;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34810 = arguments.length;
switch (G__34810) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34812 = arguments.length;
switch (G__34812) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34824 = arguments.length;
switch (G__34824) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4160__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35892 = arguments.length;
var i__4772__auto___35893 = (0);
while(true){
if((i__4772__auto___35893 < len__4771__auto___35892)){
args__4777__auto__.push((arguments[i__4772__auto___35893]));

var G__35894 = (i__4772__auto___35893 + (1));
i__4772__auto___35893 = G__35894;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34839_35899 = cljs.core.seq(nodes);
var chunk__34840_35900 = null;
var count__34841_35901 = (0);
var i__34842_35902 = (0);
while(true){
if((i__34842_35902 < count__34841_35901)){
var node_35903 = chunk__34840_35900.cljs$core$IIndexed$_nth$arity$2(null,i__34842_35902);
fragment.appendChild(shadow.dom._to_dom(node_35903));


var G__35904 = seq__34839_35899;
var G__35905 = chunk__34840_35900;
var G__35906 = count__34841_35901;
var G__35907 = (i__34842_35902 + (1));
seq__34839_35899 = G__35904;
chunk__34840_35900 = G__35905;
count__34841_35901 = G__35906;
i__34842_35902 = G__35907;
continue;
} else {
var temp__5735__auto___35909 = cljs.core.seq(seq__34839_35899);
if(temp__5735__auto___35909){
var seq__34839_35910__$1 = temp__5735__auto___35909;
if(cljs.core.chunked_seq_QMARK_(seq__34839_35910__$1)){
var c__4591__auto___35911 = cljs.core.chunk_first(seq__34839_35910__$1);
var G__35912 = cljs.core.chunk_rest(seq__34839_35910__$1);
var G__35913 = c__4591__auto___35911;
var G__35914 = cljs.core.count(c__4591__auto___35911);
var G__35915 = (0);
seq__34839_35899 = G__35912;
chunk__34840_35900 = G__35913;
count__34841_35901 = G__35914;
i__34842_35902 = G__35915;
continue;
} else {
var node_35917 = cljs.core.first(seq__34839_35910__$1);
fragment.appendChild(shadow.dom._to_dom(node_35917));


var G__35918 = cljs.core.next(seq__34839_35910__$1);
var G__35919 = null;
var G__35920 = (0);
var G__35921 = (0);
seq__34839_35899 = G__35918;
chunk__34840_35900 = G__35919;
count__34841_35901 = G__35920;
i__34842_35902 = G__35921;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34835){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34835));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34857_35925 = cljs.core.seq(scripts);
var chunk__34858_35926 = null;
var count__34859_35927 = (0);
var i__34860_35928 = (0);
while(true){
if((i__34860_35928 < count__34859_35927)){
var vec__34873_35932 = chunk__34858_35926.cljs$core$IIndexed$_nth$arity$2(null,i__34860_35928);
var script_tag_35933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34873_35932,(0),null);
var script_body_35934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34873_35932,(1),null);
eval(script_body_35934);


var G__35937 = seq__34857_35925;
var G__35938 = chunk__34858_35926;
var G__35939 = count__34859_35927;
var G__35940 = (i__34860_35928 + (1));
seq__34857_35925 = G__35937;
chunk__34858_35926 = G__35938;
count__34859_35927 = G__35939;
i__34860_35928 = G__35940;
continue;
} else {
var temp__5735__auto___35942 = cljs.core.seq(seq__34857_35925);
if(temp__5735__auto___35942){
var seq__34857_35944__$1 = temp__5735__auto___35942;
if(cljs.core.chunked_seq_QMARK_(seq__34857_35944__$1)){
var c__4591__auto___35945 = cljs.core.chunk_first(seq__34857_35944__$1);
var G__35948 = cljs.core.chunk_rest(seq__34857_35944__$1);
var G__35949 = c__4591__auto___35945;
var G__35950 = cljs.core.count(c__4591__auto___35945);
var G__35951 = (0);
seq__34857_35925 = G__35948;
chunk__34858_35926 = G__35949;
count__34859_35927 = G__35950;
i__34860_35928 = G__35951;
continue;
} else {
var vec__34877_35952 = cljs.core.first(seq__34857_35944__$1);
var script_tag_35953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34877_35952,(0),null);
var script_body_35954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34877_35952,(1),null);
eval(script_body_35954);


var G__35956 = cljs.core.next(seq__34857_35944__$1);
var G__35957 = null;
var G__35958 = (0);
var G__35959 = (0);
seq__34857_35925 = G__35956;
chunk__34858_35926 = G__35957;
count__34859_35927 = G__35958;
i__34860_35928 = G__35959;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34881){
var vec__34883 = p__34881;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34883,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34883,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34895 = arguments.length;
switch (G__34895) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34922 = cljs.core.seq(style_keys);
var chunk__34923 = null;
var count__34924 = (0);
var i__34925 = (0);
while(true){
if((i__34925 < count__34924)){
var it = chunk__34923.cljs$core$IIndexed$_nth$arity$2(null,i__34925);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35976 = seq__34922;
var G__35977 = chunk__34923;
var G__35978 = count__34924;
var G__35979 = (i__34925 + (1));
seq__34922 = G__35976;
chunk__34923 = G__35977;
count__34924 = G__35978;
i__34925 = G__35979;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34922);
if(temp__5735__auto__){
var seq__34922__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34922__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34922__$1);
var G__35983 = cljs.core.chunk_rest(seq__34922__$1);
var G__35984 = c__4591__auto__;
var G__35985 = cljs.core.count(c__4591__auto__);
var G__35986 = (0);
seq__34922 = G__35983;
chunk__34923 = G__35984;
count__34924 = G__35985;
i__34925 = G__35986;
continue;
} else {
var it = cljs.core.first(seq__34922__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35988 = cljs.core.next(seq__34922__$1);
var G__35989 = null;
var G__35990 = (0);
var G__35991 = (0);
seq__34922 = G__35988;
chunk__34923 = G__35989;
count__34924 = G__35990;
i__34925 = G__35991;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k34942,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__34956 = k34942;
var G__34956__$1 = (((G__34956 instanceof cljs.core.Keyword))?G__34956.fqn:null);
switch (G__34956__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34942,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__34962){
var vec__34963 = p__34962;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34963,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34963,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34941){
var self__ = this;
var G__34941__$1 = this;
return (new cljs.core.RecordIter((0),G__34941__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34943,other34944){
var self__ = this;
var this34943__$1 = this;
return (((!((other34944 == null)))) && ((this34943__$1.constructor === other34944.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34943__$1.x,other34944.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34943__$1.y,other34944.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34943__$1.__extmap,other34944.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__34941){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__34976 = cljs.core.keyword_identical_QMARK_;
var expr__34977 = k__4423__auto__;
if(cljs.core.truth_((pred__34976.cljs$core$IFn$_invoke$arity$2 ? pred__34976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34977) : pred__34976.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34977)))){
return (new shadow.dom.Coordinate(G__34941,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34976.cljs$core$IFn$_invoke$arity$2 ? pred__34976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34977) : pred__34976.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34977)))){
return (new shadow.dom.Coordinate(self__.x,G__34941,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__34941),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__34941){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34941,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34945){
var extmap__4454__auto__ = (function (){var G__34992 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34945,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34945)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34992);
} else {
return G__34992;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34945),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34945),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k35019,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__35043 = k35019;
var G__35043__$1 = (((G__35043 instanceof cljs.core.Keyword))?G__35043.fqn:null);
switch (G__35043__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35019,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__35067){
var vec__35071 = p__35067;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Size{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35018){
var self__ = this;
var G__35018__$1 = this;
return (new cljs.core.RecordIter((0),G__35018__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35020,other35021){
var self__ = this;
var this35020__$1 = this;
return (((!((other35021 == null)))) && ((this35020__$1.constructor === other35021.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35020__$1.w,other35021.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35020__$1.h,other35021.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35020__$1.__extmap,other35021.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__35018){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__35150 = cljs.core.keyword_identical_QMARK_;
var expr__35151 = k__4423__auto__;
if(cljs.core.truth_((pred__35150.cljs$core$IFn$_invoke$arity$2 ? pred__35150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35151) : pred__35150.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35151)))){
return (new shadow.dom.Size(G__35018,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35150.cljs$core$IFn$_invoke$arity$2 ? pred__35150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35151) : pred__35150.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35151)))){
return (new shadow.dom.Size(self__.w,G__35018,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__35018),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__35018){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35018,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35027){
var extmap__4454__auto__ = (function (){var G__35184 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35027,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35027)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35184);
} else {
return G__35184;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35027),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35027),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4645__auto__ = opts;
var l__4646__auto__ = a__4645__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4646__auto__)){
var G__36103 = (i + (1));
var G__36104 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36103;
ret = G__36104;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35255){
var vec__35257 = p__35255;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35257,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35257,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35267 = arguments.length;
switch (G__35267) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36135 = ps;
var G__36136 = (i + (1));
el__$1 = G__36135;
i = G__36136;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35316 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35319_36148 = cljs.core.seq(props);
var chunk__35320_36149 = null;
var count__35321_36150 = (0);
var i__35322_36151 = (0);
while(true){
if((i__35322_36151 < count__35321_36150)){
var vec__35335_36157 = chunk__35320_36149.cljs$core$IIndexed$_nth$arity$2(null,i__35322_36151);
var k_36158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35335_36157,(0),null);
var v_36159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35335_36157,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36158);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36158),v_36159);


var G__36169 = seq__35319_36148;
var G__36170 = chunk__35320_36149;
var G__36171 = count__35321_36150;
var G__36172 = (i__35322_36151 + (1));
seq__35319_36148 = G__36169;
chunk__35320_36149 = G__36170;
count__35321_36150 = G__36171;
i__35322_36151 = G__36172;
continue;
} else {
var temp__5735__auto___36173 = cljs.core.seq(seq__35319_36148);
if(temp__5735__auto___36173){
var seq__35319_36174__$1 = temp__5735__auto___36173;
if(cljs.core.chunked_seq_QMARK_(seq__35319_36174__$1)){
var c__4591__auto___36175 = cljs.core.chunk_first(seq__35319_36174__$1);
var G__36176 = cljs.core.chunk_rest(seq__35319_36174__$1);
var G__36177 = c__4591__auto___36175;
var G__36178 = cljs.core.count(c__4591__auto___36175);
var G__36179 = (0);
seq__35319_36148 = G__36176;
chunk__35320_36149 = G__36177;
count__35321_36150 = G__36178;
i__35322_36151 = G__36179;
continue;
} else {
var vec__35342_36181 = cljs.core.first(seq__35319_36174__$1);
var k_36182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35342_36181,(0),null);
var v_36183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35342_36181,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36182);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36182),v_36183);


var G__36184 = cljs.core.next(seq__35319_36174__$1);
var G__36185 = null;
var G__36186 = (0);
var G__36187 = (0);
seq__35319_36148 = G__36184;
chunk__35320_36149 = G__36185;
count__35321_36150 = G__36186;
i__35322_36151 = G__36187;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35359 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35359,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35359,(1),null);
var seq__35363_36191 = cljs.core.seq(node_children);
var chunk__35366_36192 = null;
var count__35367_36193 = (0);
var i__35368_36194 = (0);
while(true){
if((i__35368_36194 < count__35367_36193)){
var child_struct_36195 = chunk__35366_36192.cljs$core$IIndexed$_nth$arity$2(null,i__35368_36194);
if((!((child_struct_36195 == null)))){
if(typeof child_struct_36195 === 'string'){
var text_36203 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36203),child_struct_36195].join(''));
} else {
var children_36205 = shadow.dom.svg_node(child_struct_36195);
if(cljs.core.seq_QMARK_(children_36205)){
var seq__35421_36206 = cljs.core.seq(children_36205);
var chunk__35423_36207 = null;
var count__35424_36208 = (0);
var i__35425_36209 = (0);
while(true){
if((i__35425_36209 < count__35424_36208)){
var child_36211 = chunk__35423_36207.cljs$core$IIndexed$_nth$arity$2(null,i__35425_36209);
if(cljs.core.truth_(child_36211)){
node.appendChild(child_36211);


var G__36216 = seq__35421_36206;
var G__36217 = chunk__35423_36207;
var G__36218 = count__35424_36208;
var G__36219 = (i__35425_36209 + (1));
seq__35421_36206 = G__36216;
chunk__35423_36207 = G__36217;
count__35424_36208 = G__36218;
i__35425_36209 = G__36219;
continue;
} else {
var G__36220 = seq__35421_36206;
var G__36221 = chunk__35423_36207;
var G__36222 = count__35424_36208;
var G__36223 = (i__35425_36209 + (1));
seq__35421_36206 = G__36220;
chunk__35423_36207 = G__36221;
count__35424_36208 = G__36222;
i__35425_36209 = G__36223;
continue;
}
} else {
var temp__5735__auto___36224 = cljs.core.seq(seq__35421_36206);
if(temp__5735__auto___36224){
var seq__35421_36225__$1 = temp__5735__auto___36224;
if(cljs.core.chunked_seq_QMARK_(seq__35421_36225__$1)){
var c__4591__auto___36226 = cljs.core.chunk_first(seq__35421_36225__$1);
var G__36227 = cljs.core.chunk_rest(seq__35421_36225__$1);
var G__36228 = c__4591__auto___36226;
var G__36229 = cljs.core.count(c__4591__auto___36226);
var G__36230 = (0);
seq__35421_36206 = G__36227;
chunk__35423_36207 = G__36228;
count__35424_36208 = G__36229;
i__35425_36209 = G__36230;
continue;
} else {
var child_36232 = cljs.core.first(seq__35421_36225__$1);
if(cljs.core.truth_(child_36232)){
node.appendChild(child_36232);


var G__36234 = cljs.core.next(seq__35421_36225__$1);
var G__36235 = null;
var G__36236 = (0);
var G__36237 = (0);
seq__35421_36206 = G__36234;
chunk__35423_36207 = G__36235;
count__35424_36208 = G__36236;
i__35425_36209 = G__36237;
continue;
} else {
var G__36238 = cljs.core.next(seq__35421_36225__$1);
var G__36239 = null;
var G__36240 = (0);
var G__36241 = (0);
seq__35421_36206 = G__36238;
chunk__35423_36207 = G__36239;
count__35424_36208 = G__36240;
i__35425_36209 = G__36241;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36205);
}
}


var G__36243 = seq__35363_36191;
var G__36244 = chunk__35366_36192;
var G__36245 = count__35367_36193;
var G__36246 = (i__35368_36194 + (1));
seq__35363_36191 = G__36243;
chunk__35366_36192 = G__36244;
count__35367_36193 = G__36245;
i__35368_36194 = G__36246;
continue;
} else {
var G__36248 = seq__35363_36191;
var G__36249 = chunk__35366_36192;
var G__36250 = count__35367_36193;
var G__36251 = (i__35368_36194 + (1));
seq__35363_36191 = G__36248;
chunk__35366_36192 = G__36249;
count__35367_36193 = G__36250;
i__35368_36194 = G__36251;
continue;
}
} else {
var temp__5735__auto___36252 = cljs.core.seq(seq__35363_36191);
if(temp__5735__auto___36252){
var seq__35363_36253__$1 = temp__5735__auto___36252;
if(cljs.core.chunked_seq_QMARK_(seq__35363_36253__$1)){
var c__4591__auto___36254 = cljs.core.chunk_first(seq__35363_36253__$1);
var G__36255 = cljs.core.chunk_rest(seq__35363_36253__$1);
var G__36256 = c__4591__auto___36254;
var G__36257 = cljs.core.count(c__4591__auto___36254);
var G__36258 = (0);
seq__35363_36191 = G__36255;
chunk__35366_36192 = G__36256;
count__35367_36193 = G__36257;
i__35368_36194 = G__36258;
continue;
} else {
var child_struct_36259 = cljs.core.first(seq__35363_36253__$1);
if((!((child_struct_36259 == null)))){
if(typeof child_struct_36259 === 'string'){
var text_36263 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36263),child_struct_36259].join(''));
} else {
var children_36264 = shadow.dom.svg_node(child_struct_36259);
if(cljs.core.seq_QMARK_(children_36264)){
var seq__35437_36265 = cljs.core.seq(children_36264);
var chunk__35439_36266 = null;
var count__35440_36267 = (0);
var i__35441_36268 = (0);
while(true){
if((i__35441_36268 < count__35440_36267)){
var child_36269 = chunk__35439_36266.cljs$core$IIndexed$_nth$arity$2(null,i__35441_36268);
if(cljs.core.truth_(child_36269)){
node.appendChild(child_36269);


var G__36270 = seq__35437_36265;
var G__36271 = chunk__35439_36266;
var G__36272 = count__35440_36267;
var G__36273 = (i__35441_36268 + (1));
seq__35437_36265 = G__36270;
chunk__35439_36266 = G__36271;
count__35440_36267 = G__36272;
i__35441_36268 = G__36273;
continue;
} else {
var G__36275 = seq__35437_36265;
var G__36276 = chunk__35439_36266;
var G__36277 = count__35440_36267;
var G__36278 = (i__35441_36268 + (1));
seq__35437_36265 = G__36275;
chunk__35439_36266 = G__36276;
count__35440_36267 = G__36277;
i__35441_36268 = G__36278;
continue;
}
} else {
var temp__5735__auto___36280__$1 = cljs.core.seq(seq__35437_36265);
if(temp__5735__auto___36280__$1){
var seq__35437_36282__$1 = temp__5735__auto___36280__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35437_36282__$1)){
var c__4591__auto___36283 = cljs.core.chunk_first(seq__35437_36282__$1);
var G__36284 = cljs.core.chunk_rest(seq__35437_36282__$1);
var G__36285 = c__4591__auto___36283;
var G__36286 = cljs.core.count(c__4591__auto___36283);
var G__36287 = (0);
seq__35437_36265 = G__36284;
chunk__35439_36266 = G__36285;
count__35440_36267 = G__36286;
i__35441_36268 = G__36287;
continue;
} else {
var child_36289 = cljs.core.first(seq__35437_36282__$1);
if(cljs.core.truth_(child_36289)){
node.appendChild(child_36289);


var G__36291 = cljs.core.next(seq__35437_36282__$1);
var G__36292 = null;
var G__36293 = (0);
var G__36294 = (0);
seq__35437_36265 = G__36291;
chunk__35439_36266 = G__36292;
count__35440_36267 = G__36293;
i__35441_36268 = G__36294;
continue;
} else {
var G__36296 = cljs.core.next(seq__35437_36282__$1);
var G__36297 = null;
var G__36298 = (0);
var G__36299 = (0);
seq__35437_36265 = G__36296;
chunk__35439_36266 = G__36297;
count__35440_36267 = G__36298;
i__35441_36268 = G__36299;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36264);
}
}


var G__36300 = cljs.core.next(seq__35363_36253__$1);
var G__36301 = null;
var G__36302 = (0);
var G__36303 = (0);
seq__35363_36191 = G__36300;
chunk__35366_36192 = G__36301;
count__35367_36193 = G__36302;
i__35368_36194 = G__36303;
continue;
} else {
var G__36304 = cljs.core.next(seq__35363_36253__$1);
var G__36305 = null;
var G__36306 = (0);
var G__36307 = (0);
seq__35363_36191 = G__36304;
chunk__35366_36192 = G__36305;
count__35367_36193 = G__36306;
i__35368_36194 = G__36307;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36309 = arguments.length;
var i__4772__auto___36311 = (0);
while(true){
if((i__4772__auto___36311 < len__4771__auto___36309)){
args__4777__auto__.push((arguments[i__4772__auto___36311]));

var G__36313 = (i__4772__auto___36311 + (1));
i__4772__auto___36311 = G__36313;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35468){
var G__35469 = cljs.core.first(seq35468);
var seq35468__$1 = cljs.core.next(seq35468);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35469,seq35468__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35479 = arguments.length;
switch (G__35479) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4149__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4149__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4149__auto__;
}
})())){
var c__32028__auto___36327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_35487){
var state_val_35488 = (state_35487[(1)]);
if((state_val_35488 === (1))){
var state_35487__$1 = state_35487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35487__$1,(2),once_or_cleanup);
} else {
if((state_val_35488 === (2))){
var inst_35484 = (state_35487[(2)]);
var inst_35485 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35487__$1 = (function (){var statearr_35491 = state_35487;
(statearr_35491[(7)] = inst_35484);

return statearr_35491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35487__$1,inst_35485);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31574__auto__ = null;
var shadow$dom$state_machine__31574__auto____0 = (function (){
var statearr_35493 = [null,null,null,null,null,null,null,null];
(statearr_35493[(0)] = shadow$dom$state_machine__31574__auto__);

(statearr_35493[(1)] = (1));

return statearr_35493;
});
var shadow$dom$state_machine__31574__auto____1 = (function (state_35487){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_35487);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e35494){var ex__31577__auto__ = e35494;
var statearr_35496_36335 = state_35487;
(statearr_35496_36335[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_35487[(4)]))){
var statearr_35497_36336 = state_35487;
(statearr_35497_36336[(1)] = cljs.core.first((state_35487[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36337 = state_35487;
state_35487 = G__36337;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
shadow$dom$state_machine__31574__auto__ = function(state_35487){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31574__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31574__auto____1.call(this,state_35487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31574__auto____0;
shadow$dom$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31574__auto____1;
return shadow$dom$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_35499 = f__32029__auto__();
(statearr_35499[(6)] = c__32028__auto___36327);

return statearr_35499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
