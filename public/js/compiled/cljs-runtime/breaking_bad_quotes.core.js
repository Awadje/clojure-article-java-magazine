goog.provide('breaking_bad_quotes.core');
if((typeof breaking_bad_quotes !== 'undefined') && (typeof breaking_bad_quotes.core !== 'undefined') && (typeof breaking_bad_quotes.core.app_state !== 'undefined')){
} else {
breaking_bad_quotes.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
breaking_bad_quotes.core.hello_world = (function breaking_bad_quotes$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(breaking_bad_quotes.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this and watch it change!"], null)], null);
});
breaking_bad_quotes.core.start = (function breaking_bad_quotes$core$start(){
var G__37633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [breaking_bad_quotes.core.hello_world], null);
var G__37634 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__37633,G__37634) : reagent.core.render_component.call(null,G__37633,G__37634));
});
breaking_bad_quotes.core.init = (function breaking_bad_quotes$core$init(){
return breaking_bad_quotes.core.start();
});
goog.exportSymbol('breaking_bad_quotes.core.init', breaking_bad_quotes.core.init);
breaking_bad_quotes.core.stop = (function breaking_bad_quotes$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=breaking_bad_quotes.core.js.map
