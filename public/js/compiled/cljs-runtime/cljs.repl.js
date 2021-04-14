goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34890){
var map__34891 = p__34890;
var map__34891__$1 = cljs.core.__destructure_map(map__34891);
var m = map__34891__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34898_35185 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34899_35186 = null;
var count__34900_35187 = (0);
var i__34901_35188 = (0);
while(true){
if((i__34901_35188 < count__34900_35187)){
var f_35189 = chunk__34899_35186.cljs$core$IIndexed$_nth$arity$2(null,i__34901_35188);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35189], 0));


var G__35190 = seq__34898_35185;
var G__35191 = chunk__34899_35186;
var G__35192 = count__34900_35187;
var G__35193 = (i__34901_35188 + (1));
seq__34898_35185 = G__35190;
chunk__34899_35186 = G__35191;
count__34900_35187 = G__35192;
i__34901_35188 = G__35193;
continue;
} else {
var temp__5735__auto___35195 = cljs.core.seq(seq__34898_35185);
if(temp__5735__auto___35195){
var seq__34898_35197__$1 = temp__5735__auto___35195;
if(cljs.core.chunked_seq_QMARK_(seq__34898_35197__$1)){
var c__4591__auto___35198 = cljs.core.chunk_first(seq__34898_35197__$1);
var G__35199 = cljs.core.chunk_rest(seq__34898_35197__$1);
var G__35200 = c__4591__auto___35198;
var G__35201 = cljs.core.count(c__4591__auto___35198);
var G__35202 = (0);
seq__34898_35185 = G__35199;
chunk__34899_35186 = G__35200;
count__34900_35187 = G__35201;
i__34901_35188 = G__35202;
continue;
} else {
var f_35203 = cljs.core.first(seq__34898_35197__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35203], 0));


var G__35204 = cljs.core.next(seq__34898_35197__$1);
var G__35205 = null;
var G__35206 = (0);
var G__35207 = (0);
seq__34898_35185 = G__35204;
chunk__34899_35186 = G__35205;
count__34900_35187 = G__35206;
i__34901_35188 = G__35207;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35213 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35213], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35213)))?cljs.core.second(arglists_35213):arglists_35213)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34913_35218 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34914_35219 = null;
var count__34915_35220 = (0);
var i__34916_35221 = (0);
while(true){
if((i__34916_35221 < count__34915_35220)){
var vec__34937_35222 = chunk__34914_35219.cljs$core$IIndexed$_nth$arity$2(null,i__34916_35221);
var name_35223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937_35222,(0),null);
var map__34940_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937_35222,(1),null);
var map__34940_35225__$1 = cljs.core.__destructure_map(map__34940_35224);
var doc_35226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34940_35225__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34940_35225__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35223], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35227], 0));

if(cljs.core.truth_(doc_35226)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35226], 0));
} else {
}


var G__35234 = seq__34913_35218;
var G__35235 = chunk__34914_35219;
var G__35236 = count__34915_35220;
var G__35237 = (i__34916_35221 + (1));
seq__34913_35218 = G__35234;
chunk__34914_35219 = G__35235;
count__34915_35220 = G__35236;
i__34916_35221 = G__35237;
continue;
} else {
var temp__5735__auto___35239 = cljs.core.seq(seq__34913_35218);
if(temp__5735__auto___35239){
var seq__34913_35243__$1 = temp__5735__auto___35239;
if(cljs.core.chunked_seq_QMARK_(seq__34913_35243__$1)){
var c__4591__auto___35244 = cljs.core.chunk_first(seq__34913_35243__$1);
var G__35245 = cljs.core.chunk_rest(seq__34913_35243__$1);
var G__35246 = c__4591__auto___35244;
var G__35247 = cljs.core.count(c__4591__auto___35244);
var G__35248 = (0);
seq__34913_35218 = G__35245;
chunk__34914_35219 = G__35246;
count__34915_35220 = G__35247;
i__34916_35221 = G__35248;
continue;
} else {
var vec__34949_35249 = cljs.core.first(seq__34913_35243__$1);
var name_35250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34949_35249,(0),null);
var map__34952_35251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34949_35249,(1),null);
var map__34952_35252__$1 = cljs.core.__destructure_map(map__34952_35251);
var doc_35253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952_35252__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952_35252__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35250], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35254], 0));

if(cljs.core.truth_(doc_35253)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35253], 0));
} else {
}


var G__35260 = cljs.core.next(seq__34913_35243__$1);
var G__35261 = null;
var G__35262 = (0);
var G__35263 = (0);
seq__34913_35218 = G__35260;
chunk__34914_35219 = G__35261;
count__34915_35220 = G__35262;
i__34916_35221 = G__35263;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34957 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34958 = null;
var count__34959 = (0);
var i__34960 = (0);
while(true){
if((i__34960 < count__34959)){
var role = chunk__34958.cljs$core$IIndexed$_nth$arity$2(null,i__34960);
var temp__5735__auto___35265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35265__$1)){
var spec_35266 = temp__5735__auto___35265__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35266)], 0));
} else {
}


var G__35268 = seq__34957;
var G__35269 = chunk__34958;
var G__35270 = count__34959;
var G__35271 = (i__34960 + (1));
seq__34957 = G__35268;
chunk__34958 = G__35269;
count__34959 = G__35270;
i__34960 = G__35271;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34957);
if(temp__5735__auto____$1){
var seq__34957__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34957__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34957__$1);
var G__35272 = cljs.core.chunk_rest(seq__34957__$1);
var G__35273 = c__4591__auto__;
var G__35274 = cljs.core.count(c__4591__auto__);
var G__35275 = (0);
seq__34957 = G__35272;
chunk__34958 = G__35273;
count__34959 = G__35274;
i__34960 = G__35275;
continue;
} else {
var role = cljs.core.first(seq__34957__$1);
var temp__5735__auto___35276__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35276__$2)){
var spec_35277 = temp__5735__auto___35276__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35277)], 0));
} else {
}


var G__35278 = cljs.core.next(seq__34957__$1);
var G__35279 = null;
var G__35280 = (0);
var G__35281 = (0);
seq__34957 = G__35278;
chunk__34958 = G__35279;
count__34959 = G__35280;
i__34960 = G__35281;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35282 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35283 = cljs.core.ex_cause(t);
via = G__35282;
t = G__35283;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34984 = datafied_throwable;
var map__34984__$1 = cljs.core.__destructure_map(map__34984);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34984__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34984__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34984__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34985 = cljs.core.last(via);
var map__34985__$1 = cljs.core.__destructure_map(map__34985);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34985__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34985__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34985__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34986 = data;
var map__34986__$1 = cljs.core.__destructure_map(map__34986);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34987 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34987__$1 = cljs.core.__destructure_map(map__34987);
var top_data = map__34987__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34987__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35006 = phase;
var G__35006__$1 = (((G__35006 instanceof cljs.core.Keyword))?G__35006.fqn:null);
switch (G__35006__$1) {
case "read-source":
var map__35007 = data;
var map__35007__$1 = cljs.core.__destructure_map(map__35007);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35007__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35007__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35008 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35008__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35008,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35008);
var G__35008__$2 = (cljs.core.truth_((function (){var fexpr__35016 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35016.cljs$core$IFn$_invoke$arity$1 ? fexpr__35016.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35016.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35008__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35008__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35008__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35008__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35017 = top_data;
var G__35017__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35017,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35017);
var G__35017__$2 = (cljs.core.truth_((function (){var fexpr__35022 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35022.cljs$core$IFn$_invoke$arity$1 ? fexpr__35022.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35022.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35017__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35017__$1);
var G__35017__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35017__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35017__$2);
var G__35017__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35017__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35017__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35017__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35017__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35038 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35038,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35038,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35038,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35038,(3),null);
var G__35042 = top_data;
var G__35042__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35042,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35042);
var G__35042__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35042__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35042__$1);
var G__35042__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35042__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35042__$2);
var G__35042__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35042__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35042__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35042__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35042__$4;
}

break;
case "execution":
var vec__35074 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34983_SHARP_){
var or__4160__auto__ = (p1__34983_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
var fexpr__35079 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35079.cljs$core$IFn$_invoke$arity$1 ? fexpr__35079.cljs$core$IFn$_invoke$arity$1(p1__34983_SHARP_) : fexpr__35079.call(null,p1__34983_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__35089 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35089__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35089,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35089);
var G__35089__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35089__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35089__$1);
var G__35089__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35089__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35089__$2);
var G__35089__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35089__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35089__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35089__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35089__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35006__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35121){
var map__35122 = p__35121;
var map__35122__$1 = cljs.core.__destructure_map(map__35122);
var triage_data = map__35122__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35122__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35131 = phase;
var G__35131__$1 = (((G__35131 instanceof cljs.core.Keyword))?G__35131.fqn:null);
switch (G__35131__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35132 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35133 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35134 = loc;
var G__35135 = (cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35138_35346 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35139_35347 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35140_35348 = true;
var _STAR_print_fn_STAR__temp_val__35141_35349 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35140_35348);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35141_35349);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35111_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35111_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35139_35347);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35138_35346);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35132,G__35133,G__35134,G__35135) : format.call(null,G__35132,G__35133,G__35134,G__35135));

break;
case "macroexpansion":
var G__35145 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35146 = cause_type;
var G__35147 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35148 = loc;
var G__35149 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35145,G__35146,G__35147,G__35148,G__35149) : format.call(null,G__35145,G__35146,G__35147,G__35148,G__35149));

break;
case "compile-syntax-check":
var G__35154 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35155 = cause_type;
var G__35156 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35157 = loc;
var G__35158 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35154,G__35155,G__35156,G__35157,G__35158) : format.call(null,G__35154,G__35155,G__35156,G__35157,G__35158));

break;
case "compilation":
var G__35160 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35161 = cause_type;
var G__35162 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35163 = loc;
var G__35164 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35160,G__35161,G__35162,G__35163,G__35164) : format.call(null,G__35160,G__35161,G__35162,G__35163,G__35164));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35166 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35167 = symbol;
var G__35168 = loc;
var G__35169 = (function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35170_35370 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35171_35371 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35172_35372 = true;
var _STAR_print_fn_STAR__temp_val__35173_35373 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35172_35372);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35173_35373);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35112_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35112_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35171_35371);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35170_35370);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35166,G__35167,G__35168,G__35169) : format.call(null,G__35166,G__35167,G__35168,G__35169));
} else {
var G__35176 = "Execution error%s at %s(%s).\n%s\n";
var G__35177 = cause_type;
var G__35178 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35179 = loc;
var G__35180 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35176,G__35177,G__35178,G__35179,G__35180) : format.call(null,G__35176,G__35177,G__35178,G__35179,G__35180));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35131__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
