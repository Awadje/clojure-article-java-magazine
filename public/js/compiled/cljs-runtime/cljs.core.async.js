goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32125 = arguments.length;
switch (G__32125) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32126 = (function (f,blockable,meta32127){
this.f = f;
this.blockable = blockable;
this.meta32127 = meta32127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32128,meta32127__$1){
var self__ = this;
var _32128__$1 = this;
return (new cljs.core.async.t_cljs$core$async32126(self__.f,self__.blockable,meta32127__$1));
}));

(cljs.core.async.t_cljs$core$async32126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32128){
var self__ = this;
var _32128__$1 = this;
return self__.meta32127;
}));

(cljs.core.async.t_cljs$core$async32126.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32126.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32127","meta32127",-1245861379,null)], null);
}));

(cljs.core.async.t_cljs$core$async32126.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32126");

(cljs.core.async.t_cljs$core$async32126.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async32126");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32126.
 */
cljs.core.async.__GT_t_cljs$core$async32126 = (function cljs$core$async$__GT_t_cljs$core$async32126(f__$1,blockable__$1,meta32127){
return (new cljs.core.async.t_cljs$core$async32126(f__$1,blockable__$1,meta32127));
});

}

return (new cljs.core.async.t_cljs$core$async32126(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32135 = arguments.length;
switch (G__32135) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32144 = arguments.length;
switch (G__32144) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32156 = arguments.length;
switch (G__32156) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34436 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34436) : fn1.call(null,val_34436));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34436) : fn1.call(null,val_34436));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32195 = arguments.length;
switch (G__32195) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___34443 = n;
var x_34444 = (0);
while(true){
if((x_34444 < n__4648__auto___34443)){
(a[x_34444] = x_34444);

var G__34445 = (x_34444 + (1));
x_34444 = G__34445;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32207 = (function (flag,meta32208){
this.flag = flag;
this.meta32208 = meta32208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32209,meta32208__$1){
var self__ = this;
var _32209__$1 = this;
return (new cljs.core.async.t_cljs$core$async32207(self__.flag,meta32208__$1));
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32209){
var self__ = this;
var _32209__$1 = this;
return self__.meta32208;
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32208","meta32208",1044250196,null)], null);
}));

(cljs.core.async.t_cljs$core$async32207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32207");

(cljs.core.async.t_cljs$core$async32207.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async32207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32207.
 */
cljs.core.async.__GT_t_cljs$core$async32207 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32207(flag__$1,meta32208){
return (new cljs.core.async.t_cljs$core$async32207(flag__$1,meta32208));
});

}

return (new cljs.core.async.t_cljs$core$async32207(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32237 = (function (flag,cb,meta32238){
this.flag = flag;
this.cb = cb;
this.meta32238 = meta32238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32239,meta32238__$1){
var self__ = this;
var _32239__$1 = this;
return (new cljs.core.async.t_cljs$core$async32237(self__.flag,self__.cb,meta32238__$1));
}));

(cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32239){
var self__ = this;
var _32239__$1 = this;
return self__.meta32238;
}));

(cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32238","meta32238",-1131352719,null)], null);
}));

(cljs.core.async.t_cljs$core$async32237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32237");

(cljs.core.async.t_cljs$core$async32237.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async32237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32237.
 */
cljs.core.async.__GT_t_cljs$core$async32237 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32237(flag__$1,cb__$1,meta32238){
return (new cljs.core.async.t_cljs$core$async32237(flag__$1,cb__$1,meta32238));
});

}

return (new cljs.core.async.t_cljs$core$async32237(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32269_SHARP_){
var G__32288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32269_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32288) : fret.call(null,G__32288));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32270_SHARP_){
var G__32291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32270_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32291) : fret.call(null,G__32291));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34462 = (i + (1));
i = G__34462;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___34463 = arguments.length;
var i__4772__auto___34465 = (0);
while(true){
if((i__4772__auto___34465 < len__4771__auto___34463)){
args__4777__auto__.push((arguments[i__4772__auto___34465]));

var G__34466 = (i__4772__auto___34465 + (1));
i__4772__auto___34465 = G__34466;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32312){
var map__32319 = p__32312;
var map__32319__$1 = cljs.core.__destructure_map(map__32319);
var opts = map__32319__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32309){
var G__32310 = cljs.core.first(seq32309);
var seq32309__$1 = cljs.core.next(seq32309);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32310,seq32309__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32334 = arguments.length;
switch (G__32334) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32028__auto___34475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_32374){
var state_val_32375 = (state_32374[(1)]);
if((state_val_32375 === (7))){
var inst_32366 = (state_32374[(2)]);
var state_32374__$1 = state_32374;
var statearr_32393_34477 = state_32374__$1;
(statearr_32393_34477[(2)] = inst_32366);

(statearr_32393_34477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (1))){
var state_32374__$1 = state_32374;
var statearr_32394_34479 = state_32374__$1;
(statearr_32394_34479[(2)] = null);

(statearr_32394_34479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (4))){
var inst_32346 = (state_32374[(7)]);
var inst_32346__$1 = (state_32374[(2)]);
var inst_32349 = (inst_32346__$1 == null);
var state_32374__$1 = (function (){var statearr_32396 = state_32374;
(statearr_32396[(7)] = inst_32346__$1);

return statearr_32396;
})();
if(cljs.core.truth_(inst_32349)){
var statearr_32397_34480 = state_32374__$1;
(statearr_32397_34480[(1)] = (5));

} else {
var statearr_32398_34481 = state_32374__$1;
(statearr_32398_34481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (13))){
var state_32374__$1 = state_32374;
var statearr_32399_34482 = state_32374__$1;
(statearr_32399_34482[(2)] = null);

(statearr_32399_34482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (6))){
var inst_32346 = (state_32374[(7)]);
var state_32374__$1 = state_32374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32374__$1,(11),to,inst_32346);
} else {
if((state_val_32375 === (3))){
var inst_32368 = (state_32374[(2)]);
var state_32374__$1 = state_32374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32374__$1,inst_32368);
} else {
if((state_val_32375 === (12))){
var state_32374__$1 = state_32374;
var statearr_32401_34491 = state_32374__$1;
(statearr_32401_34491[(2)] = null);

(statearr_32401_34491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (2))){
var state_32374__$1 = state_32374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32374__$1,(4),from);
} else {
if((state_val_32375 === (11))){
var inst_32358 = (state_32374[(2)]);
var state_32374__$1 = state_32374;
if(cljs.core.truth_(inst_32358)){
var statearr_32402_34495 = state_32374__$1;
(statearr_32402_34495[(1)] = (12));

} else {
var statearr_32403_34496 = state_32374__$1;
(statearr_32403_34496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (9))){
var state_32374__$1 = state_32374;
var statearr_32404_34497 = state_32374__$1;
(statearr_32404_34497[(2)] = null);

(statearr_32404_34497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (5))){
var state_32374__$1 = state_32374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32406_34499 = state_32374__$1;
(statearr_32406_34499[(1)] = (8));

} else {
var statearr_32407_34504 = state_32374__$1;
(statearr_32407_34504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (14))){
var inst_32364 = (state_32374[(2)]);
var state_32374__$1 = state_32374;
var statearr_32408_34506 = state_32374__$1;
(statearr_32408_34506[(2)] = inst_32364);

(statearr_32408_34506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (10))){
var inst_32355 = (state_32374[(2)]);
var state_32374__$1 = state_32374;
var statearr_32409_34507 = state_32374__$1;
(statearr_32409_34507[(2)] = inst_32355);

(statearr_32409_34507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (8))){
var inst_32352 = cljs.core.async.close_BANG_(to);
var state_32374__$1 = state_32374;
var statearr_32410_34508 = state_32374__$1;
(statearr_32410_34508[(2)] = inst_32352);

(statearr_32410_34508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_32411 = [null,null,null,null,null,null,null,null];
(statearr_32411[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_32411[(1)] = (1));

return statearr_32411;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_32374){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32374);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32412){var ex__31577__auto__ = e32412;
var statearr_32413_34516 = state_32374;
(statearr_32413_34516[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32374[(4)]))){
var statearr_32414_34524 = state_32374;
(statearr_32414_34524[(1)] = cljs.core.first((state_32374[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34525 = state_32374;
state_32374 = G__34525;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_32374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_32374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_32416 = f__32029__auto__();
(statearr_32416[(6)] = c__32028__auto___34475);

return statearr_32416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32438){
var vec__32439 = p__32438;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32439,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32439,(1),null);
var job = vec__32439;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32028__auto___34527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_32446){
var state_val_32447 = (state_32446[(1)]);
if((state_val_32447 === (1))){
var state_32446__$1 = state_32446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32446__$1,(2),res,v);
} else {
if((state_val_32447 === (2))){
var inst_32443 = (state_32446[(2)]);
var inst_32444 = cljs.core.async.close_BANG_(res);
var state_32446__$1 = (function (){var statearr_32448 = state_32446;
(statearr_32448[(7)] = inst_32443);

return statearr_32448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32446__$1,inst_32444);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_32450 = [null,null,null,null,null,null,null,null];
(statearr_32450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_32450[(1)] = (1));

return statearr_32450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_32446){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32446);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32451){var ex__31577__auto__ = e32451;
var statearr_32452_34531 = state_32446;
(statearr_32452_34531[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32446[(4)]))){
var statearr_32453_34537 = state_32446;
(statearr_32453_34537[(1)] = cljs.core.first((state_32446[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34538 = state_32446;
state_32446 = G__34538;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_32446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_32446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_32454 = f__32029__auto__();
(statearr_32454[(6)] = c__32028__auto___34527);

return statearr_32454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32456){
var vec__32457 = p__32456;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32457,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32457,(1),null);
var job = vec__32457;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4648__auto___34545 = n;
var __34546 = (0);
while(true){
if((__34546 < n__4648__auto___34545)){
var G__32460_34547 = type;
var G__32460_34548__$1 = (((G__32460_34547 instanceof cljs.core.Keyword))?G__32460_34547.fqn:null);
switch (G__32460_34548__$1) {
case "compute":
var c__32028__auto___34550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34546,c__32028__auto___34550,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async){
return (function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = ((function (__34546,c__32028__auto___34550,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async){
return (function (state_32473){
var state_val_32474 = (state_32473[(1)]);
if((state_val_32474 === (1))){
var state_32473__$1 = state_32473;
var statearr_32476_34551 = state_32473__$1;
(statearr_32476_34551[(2)] = null);

(statearr_32476_34551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (2))){
var state_32473__$1 = state_32473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32473__$1,(4),jobs);
} else {
if((state_val_32474 === (3))){
var inst_32471 = (state_32473[(2)]);
var state_32473__$1 = state_32473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32473__$1,inst_32471);
} else {
if((state_val_32474 === (4))){
var inst_32463 = (state_32473[(2)]);
var inst_32464 = process(inst_32463);
var state_32473__$1 = state_32473;
if(cljs.core.truth_(inst_32464)){
var statearr_32477_34557 = state_32473__$1;
(statearr_32477_34557[(1)] = (5));

} else {
var statearr_32478_34558 = state_32473__$1;
(statearr_32478_34558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (5))){
var state_32473__$1 = state_32473;
var statearr_32480_34559 = state_32473__$1;
(statearr_32480_34559[(2)] = null);

(statearr_32480_34559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (6))){
var state_32473__$1 = state_32473;
var statearr_32481_34561 = state_32473__$1;
(statearr_32481_34561[(2)] = null);

(statearr_32481_34561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (7))){
var inst_32469 = (state_32473[(2)]);
var state_32473__$1 = state_32473;
var statearr_32482_34562 = state_32473__$1;
(statearr_32482_34562[(2)] = inst_32469);

(statearr_32482_34562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34546,c__32028__auto___34550,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async))
;
return ((function (__34546,switch__31573__auto__,c__32028__auto___34550,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_32484 = [null,null,null,null,null,null,null];
(statearr_32484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_32484[(1)] = (1));

return statearr_32484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_32473){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32473);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32485){var ex__31577__auto__ = e32485;
var statearr_32486_34564 = state_32473;
(statearr_32486_34564[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32473[(4)]))){
var statearr_32487_34570 = state_32473;
(statearr_32487_34570[(1)] = cljs.core.first((state_32473[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34571 = state_32473;
state_32473 = G__34571;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_32473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_32473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
;})(__34546,switch__31573__auto__,c__32028__auto___34550,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async))
})();
var state__32030__auto__ = (function (){var statearr_32488 = f__32029__auto__();
(statearr_32488[(6)] = c__32028__auto___34550);

return statearr_32488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
});})(__34546,c__32028__auto___34550,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async))
);


break;
case "async":
var c__32028__auto___34572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34546,c__32028__auto___34572,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async){
return (function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = ((function (__34546,c__32028__auto___34572,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async){
return (function (state_32501){
var state_val_32502 = (state_32501[(1)]);
if((state_val_32502 === (1))){
var state_32501__$1 = state_32501;
var statearr_32504_34573 = state_32501__$1;
(statearr_32504_34573[(2)] = null);

(statearr_32504_34573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (2))){
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32501__$1,(4),jobs);
} else {
if((state_val_32502 === (3))){
var inst_32499 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32501__$1,inst_32499);
} else {
if((state_val_32502 === (4))){
var inst_32491 = (state_32501[(2)]);
var inst_32492 = async(inst_32491);
var state_32501__$1 = state_32501;
if(cljs.core.truth_(inst_32492)){
var statearr_32506_34576 = state_32501__$1;
(statearr_32506_34576[(1)] = (5));

} else {
var statearr_32507_34577 = state_32501__$1;
(statearr_32507_34577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (5))){
var state_32501__$1 = state_32501;
var statearr_32508_34578 = state_32501__$1;
(statearr_32508_34578[(2)] = null);

(statearr_32508_34578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (6))){
var state_32501__$1 = state_32501;
var statearr_32509_34579 = state_32501__$1;
(statearr_32509_34579[(2)] = null);

(statearr_32509_34579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (7))){
var inst_32497 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32510_34580 = state_32501__$1;
(statearr_32510_34580[(2)] = inst_32497);

(statearr_32510_34580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34546,c__32028__auto___34572,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async))
;
return ((function (__34546,switch__31573__auto__,c__32028__auto___34572,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_32512 = [null,null,null,null,null,null,null];
(statearr_32512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_32512[(1)] = (1));

return statearr_32512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_32501){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32501);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32513){var ex__31577__auto__ = e32513;
var statearr_32514_34585 = state_32501;
(statearr_32514_34585[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32501[(4)]))){
var statearr_32515_34586 = state_32501;
(statearr_32515_34586[(1)] = cljs.core.first((state_32501[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34587 = state_32501;
state_32501 = G__34587;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_32501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_32501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
;})(__34546,switch__31573__auto__,c__32028__auto___34572,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async))
})();
var state__32030__auto__ = (function (){var statearr_32518 = f__32029__auto__();
(statearr_32518[(6)] = c__32028__auto___34572);

return statearr_32518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
});})(__34546,c__32028__auto___34572,G__32460_34547,G__32460_34548__$1,n__4648__auto___34545,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32460_34548__$1)].join('')));

}

var G__34588 = (__34546 + (1));
__34546 = G__34588;
continue;
} else {
}
break;
}

var c__32028__auto___34589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_32545){
var state_val_32546 = (state_32545[(1)]);
if((state_val_32546 === (7))){
var inst_32541 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32550_34601 = state_32545__$1;
(statearr_32550_34601[(2)] = inst_32541);

(statearr_32550_34601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (1))){
var state_32545__$1 = state_32545;
var statearr_32551_34605 = state_32545__$1;
(statearr_32551_34605[(2)] = null);

(statearr_32551_34605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (4))){
var inst_32525 = (state_32545[(7)]);
var inst_32525__$1 = (state_32545[(2)]);
var inst_32527 = (inst_32525__$1 == null);
var state_32545__$1 = (function (){var statearr_32552 = state_32545;
(statearr_32552[(7)] = inst_32525__$1);

return statearr_32552;
})();
if(cljs.core.truth_(inst_32527)){
var statearr_32553_34609 = state_32545__$1;
(statearr_32553_34609[(1)] = (5));

} else {
var statearr_32554_34610 = state_32545__$1;
(statearr_32554_34610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (6))){
var inst_32531 = (state_32545[(8)]);
var inst_32525 = (state_32545[(7)]);
var inst_32531__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32533 = [inst_32525,inst_32531__$1];
var inst_32534 = (new cljs.core.PersistentVector(null,2,(5),inst_32532,inst_32533,null));
var state_32545__$1 = (function (){var statearr_32561 = state_32545;
(statearr_32561[(8)] = inst_32531__$1);

return statearr_32561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32545__$1,(8),jobs,inst_32534);
} else {
if((state_val_32546 === (3))){
var inst_32543 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32545__$1,inst_32543);
} else {
if((state_val_32546 === (2))){
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32545__$1,(4),from);
} else {
if((state_val_32546 === (9))){
var inst_32538 = (state_32545[(2)]);
var state_32545__$1 = (function (){var statearr_32571 = state_32545;
(statearr_32571[(9)] = inst_32538);

return statearr_32571;
})();
var statearr_32572_34617 = state_32545__$1;
(statearr_32572_34617[(2)] = null);

(statearr_32572_34617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (5))){
var inst_32529 = cljs.core.async.close_BANG_(jobs);
var state_32545__$1 = state_32545;
var statearr_32574_34618 = state_32545__$1;
(statearr_32574_34618[(2)] = inst_32529);

(statearr_32574_34618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (8))){
var inst_32531 = (state_32545[(8)]);
var inst_32536 = (state_32545[(2)]);
var state_32545__$1 = (function (){var statearr_32575 = state_32545;
(statearr_32575[(10)] = inst_32536);

return statearr_32575;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32545__$1,(9),results,inst_32531);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_32576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_32576[(1)] = (1));

return statearr_32576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_32545){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32545);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32577){var ex__31577__auto__ = e32577;
var statearr_32578_34625 = state_32545;
(statearr_32578_34625[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32545[(4)]))){
var statearr_32579_34626 = state_32545;
(statearr_32579_34626[(1)] = cljs.core.first((state_32545[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34631 = state_32545;
state_32545 = G__34631;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_32545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_32545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_32581 = f__32029__auto__();
(statearr_32581[(6)] = c__32028__auto___34589);

return statearr_32581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


var c__32028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_32622){
var state_val_32623 = (state_32622[(1)]);
if((state_val_32623 === (7))){
var inst_32618 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32626_34635 = state_32622__$1;
(statearr_32626_34635[(2)] = inst_32618);

(statearr_32626_34635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (20))){
var state_32622__$1 = state_32622;
var statearr_32627_34636 = state_32622__$1;
(statearr_32627_34636[(2)] = null);

(statearr_32627_34636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (1))){
var state_32622__$1 = state_32622;
var statearr_32628_34640 = state_32622__$1;
(statearr_32628_34640[(2)] = null);

(statearr_32628_34640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (4))){
var inst_32587 = (state_32622[(7)]);
var inst_32587__$1 = (state_32622[(2)]);
var inst_32588 = (inst_32587__$1 == null);
var state_32622__$1 = (function (){var statearr_32629 = state_32622;
(statearr_32629[(7)] = inst_32587__$1);

return statearr_32629;
})();
if(cljs.core.truth_(inst_32588)){
var statearr_32630_34644 = state_32622__$1;
(statearr_32630_34644[(1)] = (5));

} else {
var statearr_32631_34645 = state_32622__$1;
(statearr_32631_34645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (15))){
var inst_32600 = (state_32622[(8)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32622__$1,(18),to,inst_32600);
} else {
if((state_val_32623 === (21))){
var inst_32613 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32633_34646 = state_32622__$1;
(statearr_32633_34646[(2)] = inst_32613);

(statearr_32633_34646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (13))){
var inst_32615 = (state_32622[(2)]);
var state_32622__$1 = (function (){var statearr_32634 = state_32622;
(statearr_32634[(9)] = inst_32615);

return statearr_32634;
})();
var statearr_32635_34650 = state_32622__$1;
(statearr_32635_34650[(2)] = null);

(statearr_32635_34650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (6))){
var inst_32587 = (state_32622[(7)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32622__$1,(11),inst_32587);
} else {
if((state_val_32623 === (17))){
var inst_32608 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
if(cljs.core.truth_(inst_32608)){
var statearr_32636_34651 = state_32622__$1;
(statearr_32636_34651[(1)] = (19));

} else {
var statearr_32637_34652 = state_32622__$1;
(statearr_32637_34652[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (3))){
var inst_32620 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32622__$1,inst_32620);
} else {
if((state_val_32623 === (12))){
var inst_32597 = (state_32622[(10)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32622__$1,(14),inst_32597);
} else {
if((state_val_32623 === (2))){
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32622__$1,(4),results);
} else {
if((state_val_32623 === (19))){
var state_32622__$1 = state_32622;
var statearr_32638_34654 = state_32622__$1;
(statearr_32638_34654[(2)] = null);

(statearr_32638_34654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (11))){
var inst_32597 = (state_32622[(2)]);
var state_32622__$1 = (function (){var statearr_32640 = state_32622;
(statearr_32640[(10)] = inst_32597);

return statearr_32640;
})();
var statearr_32641_34655 = state_32622__$1;
(statearr_32641_34655[(2)] = null);

(statearr_32641_34655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (9))){
var state_32622__$1 = state_32622;
var statearr_32642_34656 = state_32622__$1;
(statearr_32642_34656[(2)] = null);

(statearr_32642_34656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (5))){
var state_32622__$1 = state_32622;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32643_34657 = state_32622__$1;
(statearr_32643_34657[(1)] = (8));

} else {
var statearr_32644_34658 = state_32622__$1;
(statearr_32644_34658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (14))){
var inst_32600 = (state_32622[(8)]);
var inst_32600__$1 = (state_32622[(2)]);
var inst_32601 = (inst_32600__$1 == null);
var inst_32602 = cljs.core.not(inst_32601);
var state_32622__$1 = (function (){var statearr_32645 = state_32622;
(statearr_32645[(8)] = inst_32600__$1);

return statearr_32645;
})();
if(inst_32602){
var statearr_32646_34659 = state_32622__$1;
(statearr_32646_34659[(1)] = (15));

} else {
var statearr_32647_34660 = state_32622__$1;
(statearr_32647_34660[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (16))){
var state_32622__$1 = state_32622;
var statearr_32648_34661 = state_32622__$1;
(statearr_32648_34661[(2)] = false);

(statearr_32648_34661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (10))){
var inst_32594 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32650_34662 = state_32622__$1;
(statearr_32650_34662[(2)] = inst_32594);

(statearr_32650_34662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (18))){
var inst_32605 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32651_34663 = state_32622__$1;
(statearr_32651_34663[(2)] = inst_32605);

(statearr_32651_34663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (8))){
var inst_32591 = cljs.core.async.close_BANG_(to);
var state_32622__$1 = state_32622;
var statearr_32652_34664 = state_32622__$1;
(statearr_32652_34664[(2)] = inst_32591);

(statearr_32652_34664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_32653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_32653[(1)] = (1));

return statearr_32653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_32622){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32622);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32654){var ex__31577__auto__ = e32654;
var statearr_32655_34665 = state_32622;
(statearr_32655_34665[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32622[(4)]))){
var statearr_32656_34666 = state_32622;
(statearr_32656_34666[(1)] = cljs.core.first((state_32622[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34667 = state_32622;
state_32622 = G__34667;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_32622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_32622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_32658 = f__32029__auto__();
(statearr_32658[(6)] = c__32028__auto__);

return statearr_32658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));

return c__32028__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32660 = arguments.length;
switch (G__32660) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32663 = arguments.length;
switch (G__32663) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32666 = arguments.length;
switch (G__32666) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32028__auto___34684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_32693){
var state_val_32694 = (state_32693[(1)]);
if((state_val_32694 === (7))){
var inst_32689 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
var statearr_32695_34687 = state_32693__$1;
(statearr_32695_34687[(2)] = inst_32689);

(statearr_32695_34687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (1))){
var state_32693__$1 = state_32693;
var statearr_32697_34688 = state_32693__$1;
(statearr_32697_34688[(2)] = null);

(statearr_32697_34688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (4))){
var inst_32670 = (state_32693[(7)]);
var inst_32670__$1 = (state_32693[(2)]);
var inst_32671 = (inst_32670__$1 == null);
var state_32693__$1 = (function (){var statearr_32698 = state_32693;
(statearr_32698[(7)] = inst_32670__$1);

return statearr_32698;
})();
if(cljs.core.truth_(inst_32671)){
var statearr_32699_34689 = state_32693__$1;
(statearr_32699_34689[(1)] = (5));

} else {
var statearr_32700_34690 = state_32693__$1;
(statearr_32700_34690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (13))){
var state_32693__$1 = state_32693;
var statearr_32701_34691 = state_32693__$1;
(statearr_32701_34691[(2)] = null);

(statearr_32701_34691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (6))){
var inst_32670 = (state_32693[(7)]);
var inst_32676 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32670) : p.call(null,inst_32670));
var state_32693__$1 = state_32693;
if(cljs.core.truth_(inst_32676)){
var statearr_32702_34692 = state_32693__$1;
(statearr_32702_34692[(1)] = (9));

} else {
var statearr_32703_34693 = state_32693__$1;
(statearr_32703_34693[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (3))){
var inst_32691 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32693__$1,inst_32691);
} else {
if((state_val_32694 === (12))){
var state_32693__$1 = state_32693;
var statearr_32704_34694 = state_32693__$1;
(statearr_32704_34694[(2)] = null);

(statearr_32704_34694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (2))){
var state_32693__$1 = state_32693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32693__$1,(4),ch);
} else {
if((state_val_32694 === (11))){
var inst_32670 = (state_32693[(7)]);
var inst_32680 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32693__$1,(8),inst_32680,inst_32670);
} else {
if((state_val_32694 === (9))){
var state_32693__$1 = state_32693;
var statearr_32706_34699 = state_32693__$1;
(statearr_32706_34699[(2)] = tc);

(statearr_32706_34699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (5))){
var inst_32673 = cljs.core.async.close_BANG_(tc);
var inst_32674 = cljs.core.async.close_BANG_(fc);
var state_32693__$1 = (function (){var statearr_32707 = state_32693;
(statearr_32707[(8)] = inst_32673);

return statearr_32707;
})();
var statearr_32708_34700 = state_32693__$1;
(statearr_32708_34700[(2)] = inst_32674);

(statearr_32708_34700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (14))){
var inst_32687 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
var statearr_32709_34702 = state_32693__$1;
(statearr_32709_34702[(2)] = inst_32687);

(statearr_32709_34702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (10))){
var state_32693__$1 = state_32693;
var statearr_32710_34705 = state_32693__$1;
(statearr_32710_34705[(2)] = fc);

(statearr_32710_34705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (8))){
var inst_32682 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
if(cljs.core.truth_(inst_32682)){
var statearr_32711_34708 = state_32693__$1;
(statearr_32711_34708[(1)] = (12));

} else {
var statearr_32712_34709 = state_32693__$1;
(statearr_32712_34709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_32714 = [null,null,null,null,null,null,null,null,null];
(statearr_32714[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_32714[(1)] = (1));

return statearr_32714;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_32693){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32693);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32715){var ex__31577__auto__ = e32715;
var statearr_32716_34713 = state_32693;
(statearr_32716_34713[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32693[(4)]))){
var statearr_32717_34714 = state_32693;
(statearr_32717_34714[(1)] = cljs.core.first((state_32693[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34719 = state_32693;
state_32693 = G__34719;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_32693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_32693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_32718 = f__32029__auto__();
(statearr_32718[(6)] = c__32028__auto___34684);

return statearr_32718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_32741){
var state_val_32742 = (state_32741[(1)]);
if((state_val_32742 === (7))){
var inst_32737 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32743_34734 = state_32741__$1;
(statearr_32743_34734[(2)] = inst_32737);

(statearr_32743_34734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (1))){
var inst_32720 = init;
var inst_32721 = inst_32720;
var state_32741__$1 = (function (){var statearr_32745 = state_32741;
(statearr_32745[(7)] = inst_32721);

return statearr_32745;
})();
var statearr_32746_34735 = state_32741__$1;
(statearr_32746_34735[(2)] = null);

(statearr_32746_34735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (4))){
var inst_32724 = (state_32741[(8)]);
var inst_32724__$1 = (state_32741[(2)]);
var inst_32725 = (inst_32724__$1 == null);
var state_32741__$1 = (function (){var statearr_32747 = state_32741;
(statearr_32747[(8)] = inst_32724__$1);

return statearr_32747;
})();
if(cljs.core.truth_(inst_32725)){
var statearr_32748_34736 = state_32741__$1;
(statearr_32748_34736[(1)] = (5));

} else {
var statearr_32749_34737 = state_32741__$1;
(statearr_32749_34737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (6))){
var inst_32724 = (state_32741[(8)]);
var inst_32728 = (state_32741[(9)]);
var inst_32721 = (state_32741[(7)]);
var inst_32728__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32721,inst_32724) : f.call(null,inst_32721,inst_32724));
var inst_32729 = cljs.core.reduced_QMARK_(inst_32728__$1);
var state_32741__$1 = (function (){var statearr_32750 = state_32741;
(statearr_32750[(9)] = inst_32728__$1);

return statearr_32750;
})();
if(inst_32729){
var statearr_32751_34738 = state_32741__$1;
(statearr_32751_34738[(1)] = (8));

} else {
var statearr_32752_34739 = state_32741__$1;
(statearr_32752_34739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (3))){
var inst_32739 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32741__$1,inst_32739);
} else {
if((state_val_32742 === (2))){
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32741__$1,(4),ch);
} else {
if((state_val_32742 === (9))){
var inst_32728 = (state_32741[(9)]);
var inst_32721 = inst_32728;
var state_32741__$1 = (function (){var statearr_32754 = state_32741;
(statearr_32754[(7)] = inst_32721);

return statearr_32754;
})();
var statearr_32755_34740 = state_32741__$1;
(statearr_32755_34740[(2)] = null);

(statearr_32755_34740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (5))){
var inst_32721 = (state_32741[(7)]);
var state_32741__$1 = state_32741;
var statearr_32756_34741 = state_32741__$1;
(statearr_32756_34741[(2)] = inst_32721);

(statearr_32756_34741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (10))){
var inst_32735 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32757_34748 = state_32741__$1;
(statearr_32757_34748[(2)] = inst_32735);

(statearr_32757_34748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (8))){
var inst_32728 = (state_32741[(9)]);
var inst_32731 = cljs.core.deref(inst_32728);
var state_32741__$1 = state_32741;
var statearr_32758_34751 = state_32741__$1;
(statearr_32758_34751[(2)] = inst_32731);

(statearr_32758_34751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31574__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31574__auto____0 = (function (){
var statearr_32759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32759[(0)] = cljs$core$async$reduce_$_state_machine__31574__auto__);

(statearr_32759[(1)] = (1));

return statearr_32759;
});
var cljs$core$async$reduce_$_state_machine__31574__auto____1 = (function (state_32741){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32741);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32761){var ex__31577__auto__ = e32761;
var statearr_32762_34752 = state_32741;
(statearr_32762_34752[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32741[(4)]))){
var statearr_32763_34753 = state_32741;
(statearr_32763_34753[(1)] = cljs.core.first((state_32741[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34754 = state_32741;
state_32741 = G__34754;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31574__auto__ = function(state_32741){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31574__auto____1.call(this,state_32741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31574__auto____0;
cljs$core$async$reduce_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31574__auto____1;
return cljs$core$async$reduce_$_state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_32764 = f__32029__auto__();
(statearr_32764[(6)] = c__32028__auto__);

return statearr_32764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));

return c__32028__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_32771){
var state_val_32772 = (state_32771[(1)]);
if((state_val_32772 === (1))){
var inst_32765 = cljs.core.async.reduce(f__$1,init,ch);
var state_32771__$1 = state_32771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32771__$1,(2),inst_32765);
} else {
if((state_val_32772 === (2))){
var inst_32767 = (state_32771[(2)]);
var inst_32768 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32767) : f__$1.call(null,inst_32767));
var state_32771__$1 = state_32771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32771__$1,inst_32768);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31574__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31574__auto____0 = (function (){
var statearr_32773 = [null,null,null,null,null,null,null];
(statearr_32773[(0)] = cljs$core$async$transduce_$_state_machine__31574__auto__);

(statearr_32773[(1)] = (1));

return statearr_32773;
});
var cljs$core$async$transduce_$_state_machine__31574__auto____1 = (function (state_32771){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32771);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32775){var ex__31577__auto__ = e32775;
var statearr_32777_34761 = state_32771;
(statearr_32777_34761[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32771[(4)]))){
var statearr_32778_34762 = state_32771;
(statearr_32778_34762[(1)] = cljs.core.first((state_32771[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34763 = state_32771;
state_32771 = G__34763;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31574__auto__ = function(state_32771){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31574__auto____1.call(this,state_32771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31574__auto____0;
cljs$core$async$transduce_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31574__auto____1;
return cljs$core$async$transduce_$_state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_32779 = f__32029__auto__();
(statearr_32779[(6)] = c__32028__auto__);

return statearr_32779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));

return c__32028__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32781 = arguments.length;
switch (G__32781) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_32808){
var state_val_32809 = (state_32808[(1)]);
if((state_val_32809 === (7))){
var inst_32790 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
var statearr_32810_34765 = state_32808__$1;
(statearr_32810_34765[(2)] = inst_32790);

(statearr_32810_34765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (1))){
var inst_32784 = cljs.core.seq(coll);
var inst_32785 = inst_32784;
var state_32808__$1 = (function (){var statearr_32811 = state_32808;
(statearr_32811[(7)] = inst_32785);

return statearr_32811;
})();
var statearr_32812_34770 = state_32808__$1;
(statearr_32812_34770[(2)] = null);

(statearr_32812_34770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (4))){
var inst_32785 = (state_32808[(7)]);
var inst_32788 = cljs.core.first(inst_32785);
var state_32808__$1 = state_32808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32808__$1,(7),ch,inst_32788);
} else {
if((state_val_32809 === (13))){
var inst_32802 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
var statearr_32813_34777 = state_32808__$1;
(statearr_32813_34777[(2)] = inst_32802);

(statearr_32813_34777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (6))){
var inst_32793 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
if(cljs.core.truth_(inst_32793)){
var statearr_32814_34778 = state_32808__$1;
(statearr_32814_34778[(1)] = (8));

} else {
var statearr_32815_34782 = state_32808__$1;
(statearr_32815_34782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (3))){
var inst_32806 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32808__$1,inst_32806);
} else {
if((state_val_32809 === (12))){
var state_32808__$1 = state_32808;
var statearr_32816_34783 = state_32808__$1;
(statearr_32816_34783[(2)] = null);

(statearr_32816_34783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (2))){
var inst_32785 = (state_32808[(7)]);
var state_32808__$1 = state_32808;
if(cljs.core.truth_(inst_32785)){
var statearr_32819_34784 = state_32808__$1;
(statearr_32819_34784[(1)] = (4));

} else {
var statearr_32820_34785 = state_32808__$1;
(statearr_32820_34785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (11))){
var inst_32799 = cljs.core.async.close_BANG_(ch);
var state_32808__$1 = state_32808;
var statearr_32821_34786 = state_32808__$1;
(statearr_32821_34786[(2)] = inst_32799);

(statearr_32821_34786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (9))){
var state_32808__$1 = state_32808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32822_34787 = state_32808__$1;
(statearr_32822_34787[(1)] = (11));

} else {
var statearr_32823_34788 = state_32808__$1;
(statearr_32823_34788[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (5))){
var inst_32785 = (state_32808[(7)]);
var state_32808__$1 = state_32808;
var statearr_32824_34789 = state_32808__$1;
(statearr_32824_34789[(2)] = inst_32785);

(statearr_32824_34789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (10))){
var inst_32804 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
var statearr_32825_34790 = state_32808__$1;
(statearr_32825_34790[(2)] = inst_32804);

(statearr_32825_34790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (8))){
var inst_32785 = (state_32808[(7)]);
var inst_32795 = cljs.core.next(inst_32785);
var inst_32785__$1 = inst_32795;
var state_32808__$1 = (function (){var statearr_32826 = state_32808;
(statearr_32826[(7)] = inst_32785__$1);

return statearr_32826;
})();
var statearr_32827_34791 = state_32808__$1;
(statearr_32827_34791[(2)] = null);

(statearr_32827_34791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_32828 = [null,null,null,null,null,null,null,null];
(statearr_32828[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_32828[(1)] = (1));

return statearr_32828;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_32808){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_32808);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e32831){var ex__31577__auto__ = e32831;
var statearr_32832_34792 = state_32808;
(statearr_32832_34792[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_32808[(4)]))){
var statearr_32834_34793 = state_32808;
(statearr_32834_34793[(1)] = cljs.core.first((state_32808[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34794 = state_32808;
state_32808 = G__34794;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_32808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_32808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_32835 = f__32029__auto__();
(statearr_32835[(6)] = c__32028__auto__);

return statearr_32835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));

return c__32028__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32843 = arguments.length;
switch (G__32843) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34797 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34797(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34803 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34803(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34807 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34807(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34808 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34808(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32872 = (function (ch,cs,meta32873){
this.ch = ch;
this.cs = cs;
this.meta32873 = meta32873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32874,meta32873__$1){
var self__ = this;
var _32874__$1 = this;
return (new cljs.core.async.t_cljs$core$async32872(self__.ch,self__.cs,meta32873__$1));
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32874){
var self__ = this;
var _32874__$1 = this;
return self__.meta32873;
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32873","meta32873",-390423625,null)], null);
}));

(cljs.core.async.t_cljs$core$async32872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32872");

(cljs.core.async.t_cljs$core$async32872.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async32872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32872.
 */
cljs.core.async.__GT_t_cljs$core$async32872 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32872(ch__$1,cs__$1,meta32873){
return (new cljs.core.async.t_cljs$core$async32872(ch__$1,cs__$1,meta32873));
});

}

return (new cljs.core.async.t_cljs$core$async32872(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32028__auto___34813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_33039){
var state_val_33040 = (state_33039[(1)]);
if((state_val_33040 === (7))){
var inst_33034 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
var statearr_33046_34814 = state_33039__$1;
(statearr_33046_34814[(2)] = inst_33034);

(statearr_33046_34814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (20))){
var inst_32927 = (state_33039[(7)]);
var inst_32942 = cljs.core.first(inst_32927);
var inst_32943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32942,(0),null);
var inst_32944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32942,(1),null);
var state_33039__$1 = (function (){var statearr_33050 = state_33039;
(statearr_33050[(8)] = inst_32943);

return statearr_33050;
})();
if(cljs.core.truth_(inst_32944)){
var statearr_33051_34815 = state_33039__$1;
(statearr_33051_34815[(1)] = (22));

} else {
var statearr_33052_34816 = state_33039__$1;
(statearr_33052_34816[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (27))){
var inst_32976 = (state_33039[(9)]);
var inst_32984 = (state_33039[(10)]);
var inst_32974 = (state_33039[(11)]);
var inst_32891 = (state_33039[(12)]);
var inst_32984__$1 = cljs.core._nth(inst_32974,inst_32976);
var inst_32985 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32984__$1,inst_32891,done);
var state_33039__$1 = (function (){var statearr_33057 = state_33039;
(statearr_33057[(10)] = inst_32984__$1);

return statearr_33057;
})();
if(cljs.core.truth_(inst_32985)){
var statearr_33059_34817 = state_33039__$1;
(statearr_33059_34817[(1)] = (30));

} else {
var statearr_33061_34818 = state_33039__$1;
(statearr_33061_34818[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (1))){
var state_33039__$1 = state_33039;
var statearr_33063_34820 = state_33039__$1;
(statearr_33063_34820[(2)] = null);

(statearr_33063_34820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (24))){
var inst_32927 = (state_33039[(7)]);
var inst_32949 = (state_33039[(2)]);
var inst_32950 = cljs.core.next(inst_32927);
var inst_32900 = inst_32950;
var inst_32901 = null;
var inst_32902 = (0);
var inst_32903 = (0);
var state_33039__$1 = (function (){var statearr_33065 = state_33039;
(statearr_33065[(13)] = inst_32949);

(statearr_33065[(14)] = inst_32902);

(statearr_33065[(15)] = inst_32901);

(statearr_33065[(16)] = inst_32900);

(statearr_33065[(17)] = inst_32903);

return statearr_33065;
})();
var statearr_33066_34825 = state_33039__$1;
(statearr_33066_34825[(2)] = null);

(statearr_33066_34825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (39))){
var state_33039__$1 = state_33039;
var statearr_33073_34826 = state_33039__$1;
(statearr_33073_34826[(2)] = null);

(statearr_33073_34826[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (4))){
var inst_32891 = (state_33039[(12)]);
var inst_32891__$1 = (state_33039[(2)]);
var inst_32892 = (inst_32891__$1 == null);
var state_33039__$1 = (function (){var statearr_33076 = state_33039;
(statearr_33076[(12)] = inst_32891__$1);

return statearr_33076;
})();
if(cljs.core.truth_(inst_32892)){
var statearr_33078_34827 = state_33039__$1;
(statearr_33078_34827[(1)] = (5));

} else {
var statearr_33079_34828 = state_33039__$1;
(statearr_33079_34828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (15))){
var inst_32902 = (state_33039[(14)]);
var inst_32901 = (state_33039[(15)]);
var inst_32900 = (state_33039[(16)]);
var inst_32903 = (state_33039[(17)]);
var inst_32921 = (state_33039[(2)]);
var inst_32922 = (inst_32903 + (1));
var tmp33070 = inst_32902;
var tmp33071 = inst_32901;
var tmp33072 = inst_32900;
var inst_32900__$1 = tmp33072;
var inst_32901__$1 = tmp33071;
var inst_32902__$1 = tmp33070;
var inst_32903__$1 = inst_32922;
var state_33039__$1 = (function (){var statearr_33083 = state_33039;
(statearr_33083[(18)] = inst_32921);

(statearr_33083[(14)] = inst_32902__$1);

(statearr_33083[(15)] = inst_32901__$1);

(statearr_33083[(16)] = inst_32900__$1);

(statearr_33083[(17)] = inst_32903__$1);

return statearr_33083;
})();
var statearr_33084_34829 = state_33039__$1;
(statearr_33084_34829[(2)] = null);

(statearr_33084_34829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (21))){
var inst_32953 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
var statearr_33089_34830 = state_33039__$1;
(statearr_33089_34830[(2)] = inst_32953);

(statearr_33089_34830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (31))){
var inst_32984 = (state_33039[(10)]);
var inst_32988 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32984);
var state_33039__$1 = state_33039;
var statearr_33092_34831 = state_33039__$1;
(statearr_33092_34831[(2)] = inst_32988);

(statearr_33092_34831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (32))){
var inst_32976 = (state_33039[(9)]);
var inst_32973 = (state_33039[(19)]);
var inst_32975 = (state_33039[(20)]);
var inst_32974 = (state_33039[(11)]);
var inst_32990 = (state_33039[(2)]);
var inst_32991 = (inst_32976 + (1));
var tmp33086 = inst_32973;
var tmp33087 = inst_32975;
var tmp33088 = inst_32974;
var inst_32973__$1 = tmp33086;
var inst_32974__$1 = tmp33088;
var inst_32975__$1 = tmp33087;
var inst_32976__$1 = inst_32991;
var state_33039__$1 = (function (){var statearr_33095 = state_33039;
(statearr_33095[(9)] = inst_32976__$1);

(statearr_33095[(19)] = inst_32973__$1);

(statearr_33095[(20)] = inst_32975__$1);

(statearr_33095[(11)] = inst_32974__$1);

(statearr_33095[(21)] = inst_32990);

return statearr_33095;
})();
var statearr_33096_34832 = state_33039__$1;
(statearr_33096_34832[(2)] = null);

(statearr_33096_34832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (40))){
var inst_33004 = (state_33039[(22)]);
var inst_33010 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33004);
var state_33039__$1 = state_33039;
var statearr_33100_34833 = state_33039__$1;
(statearr_33100_34833[(2)] = inst_33010);

(statearr_33100_34833[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (33))){
var inst_32994 = (state_33039[(23)]);
var inst_32997 = cljs.core.chunked_seq_QMARK_(inst_32994);
var state_33039__$1 = state_33039;
if(inst_32997){
var statearr_33101_34834 = state_33039__$1;
(statearr_33101_34834[(1)] = (36));

} else {
var statearr_33103_34836 = state_33039__$1;
(statearr_33103_34836[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (13))){
var inst_32915 = (state_33039[(24)]);
var inst_32918 = cljs.core.async.close_BANG_(inst_32915);
var state_33039__$1 = state_33039;
var statearr_33105_34837 = state_33039__$1;
(statearr_33105_34837[(2)] = inst_32918);

(statearr_33105_34837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (22))){
var inst_32943 = (state_33039[(8)]);
var inst_32946 = cljs.core.async.close_BANG_(inst_32943);
var state_33039__$1 = state_33039;
var statearr_33108_34838 = state_33039__$1;
(statearr_33108_34838[(2)] = inst_32946);

(statearr_33108_34838[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (36))){
var inst_32994 = (state_33039[(23)]);
var inst_32999 = cljs.core.chunk_first(inst_32994);
var inst_33000 = cljs.core.chunk_rest(inst_32994);
var inst_33001 = cljs.core.count(inst_32999);
var inst_32973 = inst_33000;
var inst_32974 = inst_32999;
var inst_32975 = inst_33001;
var inst_32976 = (0);
var state_33039__$1 = (function (){var statearr_33110 = state_33039;
(statearr_33110[(9)] = inst_32976);

(statearr_33110[(19)] = inst_32973);

(statearr_33110[(20)] = inst_32975);

(statearr_33110[(11)] = inst_32974);

return statearr_33110;
})();
var statearr_33112_34843 = state_33039__$1;
(statearr_33112_34843[(2)] = null);

(statearr_33112_34843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (41))){
var inst_32994 = (state_33039[(23)]);
var inst_33012 = (state_33039[(2)]);
var inst_33014 = cljs.core.next(inst_32994);
var inst_32973 = inst_33014;
var inst_32974 = null;
var inst_32975 = (0);
var inst_32976 = (0);
var state_33039__$1 = (function (){var statearr_33115 = state_33039;
(statearr_33115[(9)] = inst_32976);

(statearr_33115[(19)] = inst_32973);

(statearr_33115[(20)] = inst_32975);

(statearr_33115[(11)] = inst_32974);

(statearr_33115[(25)] = inst_33012);

return statearr_33115;
})();
var statearr_33117_34848 = state_33039__$1;
(statearr_33117_34848[(2)] = null);

(statearr_33117_34848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (43))){
var state_33039__$1 = state_33039;
var statearr_33118_34849 = state_33039__$1;
(statearr_33118_34849[(2)] = null);

(statearr_33118_34849[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (29))){
var inst_33022 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
var statearr_33123_34854 = state_33039__$1;
(statearr_33123_34854[(2)] = inst_33022);

(statearr_33123_34854[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (44))){
var inst_33031 = (state_33039[(2)]);
var state_33039__$1 = (function (){var statearr_33126 = state_33039;
(statearr_33126[(26)] = inst_33031);

return statearr_33126;
})();
var statearr_33127_34855 = state_33039__$1;
(statearr_33127_34855[(2)] = null);

(statearr_33127_34855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (6))){
var inst_32965 = (state_33039[(27)]);
var inst_32964 = cljs.core.deref(cs);
var inst_32965__$1 = cljs.core.keys(inst_32964);
var inst_32966 = cljs.core.count(inst_32965__$1);
var inst_32967 = cljs.core.reset_BANG_(dctr,inst_32966);
var inst_32972 = cljs.core.seq(inst_32965__$1);
var inst_32973 = inst_32972;
var inst_32974 = null;
var inst_32975 = (0);
var inst_32976 = (0);
var state_33039__$1 = (function (){var statearr_33131 = state_33039;
(statearr_33131[(9)] = inst_32976);

(statearr_33131[(19)] = inst_32973);

(statearr_33131[(28)] = inst_32967);

(statearr_33131[(20)] = inst_32975);

(statearr_33131[(27)] = inst_32965__$1);

(statearr_33131[(11)] = inst_32974);

return statearr_33131;
})();
var statearr_33132_34856 = state_33039__$1;
(statearr_33132_34856[(2)] = null);

(statearr_33132_34856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (28))){
var inst_32973 = (state_33039[(19)]);
var inst_32994 = (state_33039[(23)]);
var inst_32994__$1 = cljs.core.seq(inst_32973);
var state_33039__$1 = (function (){var statearr_33134 = state_33039;
(statearr_33134[(23)] = inst_32994__$1);

return statearr_33134;
})();
if(inst_32994__$1){
var statearr_33135_34864 = state_33039__$1;
(statearr_33135_34864[(1)] = (33));

} else {
var statearr_33138_34865 = state_33039__$1;
(statearr_33138_34865[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (25))){
var inst_32976 = (state_33039[(9)]);
var inst_32975 = (state_33039[(20)]);
var inst_32978 = (inst_32976 < inst_32975);
var inst_32979 = inst_32978;
var state_33039__$1 = state_33039;
if(cljs.core.truth_(inst_32979)){
var statearr_33140_34866 = state_33039__$1;
(statearr_33140_34866[(1)] = (27));

} else {
var statearr_33141_34867 = state_33039__$1;
(statearr_33141_34867[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (34))){
var state_33039__$1 = state_33039;
var statearr_33143_34871 = state_33039__$1;
(statearr_33143_34871[(2)] = null);

(statearr_33143_34871[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (17))){
var state_33039__$1 = state_33039;
var statearr_33144_34872 = state_33039__$1;
(statearr_33144_34872[(2)] = null);

(statearr_33144_34872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (3))){
var inst_33036 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33039__$1,inst_33036);
} else {
if((state_val_33040 === (12))){
var inst_32958 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
var statearr_33148_34876 = state_33039__$1;
(statearr_33148_34876[(2)] = inst_32958);

(statearr_33148_34876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (2))){
var state_33039__$1 = state_33039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33039__$1,(4),ch);
} else {
if((state_val_33040 === (23))){
var state_33039__$1 = state_33039;
var statearr_33150_34880 = state_33039__$1;
(statearr_33150_34880[(2)] = null);

(statearr_33150_34880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (35))){
var inst_33020 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
var statearr_33154_34882 = state_33039__$1;
(statearr_33154_34882[(2)] = inst_33020);

(statearr_33154_34882[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (19))){
var inst_32927 = (state_33039[(7)]);
var inst_32931 = cljs.core.chunk_first(inst_32927);
var inst_32932 = cljs.core.chunk_rest(inst_32927);
var inst_32934 = cljs.core.count(inst_32931);
var inst_32900 = inst_32932;
var inst_32901 = inst_32931;
var inst_32902 = inst_32934;
var inst_32903 = (0);
var state_33039__$1 = (function (){var statearr_33156 = state_33039;
(statearr_33156[(14)] = inst_32902);

(statearr_33156[(15)] = inst_32901);

(statearr_33156[(16)] = inst_32900);

(statearr_33156[(17)] = inst_32903);

return statearr_33156;
})();
var statearr_33157_34886 = state_33039__$1;
(statearr_33157_34886[(2)] = null);

(statearr_33157_34886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (11))){
var inst_32927 = (state_33039[(7)]);
var inst_32900 = (state_33039[(16)]);
var inst_32927__$1 = cljs.core.seq(inst_32900);
var state_33039__$1 = (function (){var statearr_33161 = state_33039;
(statearr_33161[(7)] = inst_32927__$1);

return statearr_33161;
})();
if(inst_32927__$1){
var statearr_33162_34888 = state_33039__$1;
(statearr_33162_34888[(1)] = (16));

} else {
var statearr_33163_34889 = state_33039__$1;
(statearr_33163_34889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (9))){
var inst_32960 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
var statearr_33165_34892 = state_33039__$1;
(statearr_33165_34892[(2)] = inst_32960);

(statearr_33165_34892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (5))){
var inst_32898 = cljs.core.deref(cs);
var inst_32899 = cljs.core.seq(inst_32898);
var inst_32900 = inst_32899;
var inst_32901 = null;
var inst_32902 = (0);
var inst_32903 = (0);
var state_33039__$1 = (function (){var statearr_33166 = state_33039;
(statearr_33166[(14)] = inst_32902);

(statearr_33166[(15)] = inst_32901);

(statearr_33166[(16)] = inst_32900);

(statearr_33166[(17)] = inst_32903);

return statearr_33166;
})();
var statearr_33170_34896 = state_33039__$1;
(statearr_33170_34896[(2)] = null);

(statearr_33170_34896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (14))){
var state_33039__$1 = state_33039;
var statearr_33171_34902 = state_33039__$1;
(statearr_33171_34902[(2)] = null);

(statearr_33171_34902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (45))){
var inst_33028 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
var statearr_33173_34903 = state_33039__$1;
(statearr_33173_34903[(2)] = inst_33028);

(statearr_33173_34903[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (26))){
var inst_32965 = (state_33039[(27)]);
var inst_33024 = (state_33039[(2)]);
var inst_33025 = cljs.core.seq(inst_32965);
var state_33039__$1 = (function (){var statearr_33174 = state_33039;
(statearr_33174[(29)] = inst_33024);

return statearr_33174;
})();
if(inst_33025){
var statearr_33177_34905 = state_33039__$1;
(statearr_33177_34905[(1)] = (42));

} else {
var statearr_33179_34906 = state_33039__$1;
(statearr_33179_34906[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (16))){
var inst_32927 = (state_33039[(7)]);
var inst_32929 = cljs.core.chunked_seq_QMARK_(inst_32927);
var state_33039__$1 = state_33039;
if(inst_32929){
var statearr_33180_34907 = state_33039__$1;
(statearr_33180_34907[(1)] = (19));

} else {
var statearr_33181_34908 = state_33039__$1;
(statearr_33181_34908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (38))){
var inst_33017 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
var statearr_33183_34910 = state_33039__$1;
(statearr_33183_34910[(2)] = inst_33017);

(statearr_33183_34910[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (30))){
var state_33039__$1 = state_33039;
var statearr_33185_34911 = state_33039__$1;
(statearr_33185_34911[(2)] = null);

(statearr_33185_34911[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (10))){
var inst_32901 = (state_33039[(15)]);
var inst_32903 = (state_33039[(17)]);
var inst_32914 = cljs.core._nth(inst_32901,inst_32903);
var inst_32915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32914,(0),null);
var inst_32916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32914,(1),null);
var state_33039__$1 = (function (){var statearr_33190 = state_33039;
(statearr_33190[(24)] = inst_32915);

return statearr_33190;
})();
if(cljs.core.truth_(inst_32916)){
var statearr_33191_34917 = state_33039__$1;
(statearr_33191_34917[(1)] = (13));

} else {
var statearr_33193_34926 = state_33039__$1;
(statearr_33193_34926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (18))){
var inst_32956 = (state_33039[(2)]);
var state_33039__$1 = state_33039;
var statearr_33194_34928 = state_33039__$1;
(statearr_33194_34928[(2)] = inst_32956);

(statearr_33194_34928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (42))){
var state_33039__$1 = state_33039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33039__$1,(45),dchan);
} else {
if((state_val_33040 === (37))){
var inst_33004 = (state_33039[(22)]);
var inst_32994 = (state_33039[(23)]);
var inst_32891 = (state_33039[(12)]);
var inst_33004__$1 = cljs.core.first(inst_32994);
var inst_33007 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33004__$1,inst_32891,done);
var state_33039__$1 = (function (){var statearr_33202 = state_33039;
(statearr_33202[(22)] = inst_33004__$1);

return statearr_33202;
})();
if(cljs.core.truth_(inst_33007)){
var statearr_33203_34933 = state_33039__$1;
(statearr_33203_34933[(1)] = (39));

} else {
var statearr_33205_34934 = state_33039__$1;
(statearr_33205_34934[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33040 === (8))){
var inst_32902 = (state_33039[(14)]);
var inst_32903 = (state_33039[(17)]);
var inst_32905 = (inst_32903 < inst_32902);
var inst_32906 = inst_32905;
var state_33039__$1 = state_33039;
if(cljs.core.truth_(inst_32906)){
var statearr_33211_34935 = state_33039__$1;
(statearr_33211_34935[(1)] = (10));

} else {
var statearr_33214_34936 = state_33039__$1;
(statearr_33214_34936[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31574__auto__ = null;
var cljs$core$async$mult_$_state_machine__31574__auto____0 = (function (){
var statearr_33217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33217[(0)] = cljs$core$async$mult_$_state_machine__31574__auto__);

(statearr_33217[(1)] = (1));

return statearr_33217;
});
var cljs$core$async$mult_$_state_machine__31574__auto____1 = (function (state_33039){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_33039);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33218){var ex__31577__auto__ = e33218;
var statearr_33219_34946 = state_33039;
(statearr_33219_34946[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_33039[(4)]))){
var statearr_33226_34947 = state_33039;
(statearr_33226_34947[(1)] = cljs.core.first((state_33039[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34948 = state_33039;
state_33039 = G__34948;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31574__auto__ = function(state_33039){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31574__auto____1.call(this,state_33039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31574__auto____0;
cljs$core$async$mult_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31574__auto____1;
return cljs$core$async$mult_$_state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_33232 = f__32029__auto__();
(statearr_33232[(6)] = c__32028__auto___34813);

return statearr_33232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33241 = arguments.length;
switch (G__33241) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34961 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34961(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34967 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34967(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34968 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34968(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34969 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34969(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34971 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34971(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___34973 = arguments.length;
var i__4772__auto___34974 = (0);
while(true){
if((i__4772__auto___34974 < len__4771__auto___34973)){
args__4777__auto__.push((arguments[i__4772__auto___34974]));

var G__34975 = (i__4772__auto___34974 + (1));
i__4772__auto___34974 = G__34975;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33308){
var map__33309 = p__33308;
var map__33309__$1 = cljs.core.__destructure_map(map__33309);
var opts = map__33309__$1;
var statearr_33310_34979 = state;
(statearr_33310_34979[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33314_34980 = state;
(statearr_33314_34980[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33316_34981 = state;
(statearr_33316_34981[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33296){
var G__33297 = cljs.core.first(seq33296);
var seq33296__$1 = cljs.core.next(seq33296);
var G__33298 = cljs.core.first(seq33296__$1);
var seq33296__$2 = cljs.core.next(seq33296__$1);
var G__33299 = cljs.core.first(seq33296__$2);
var seq33296__$3 = cljs.core.next(seq33296__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33297,G__33298,G__33299,seq33296__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33326 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33327){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33327 = meta33327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33328,meta33327__$1){
var self__ = this;
var _33328__$1 = this;
return (new cljs.core.async.t_cljs$core$async33326(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33327__$1));
}));

(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33328){
var self__ = this;
var _33328__$1 = this;
return self__.meta33327;
}));

(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33327","meta33327",-86876308,null)], null);
}));

(cljs.core.async.t_cljs$core$async33326.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33326");

(cljs.core.async.t_cljs$core$async33326.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33326");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33326.
 */
cljs.core.async.__GT_t_cljs$core$async33326 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33326(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33327){
return (new cljs.core.async.t_cljs$core$async33326(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33327));
});

}

return (new cljs.core.async.t_cljs$core$async33326(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32028__auto___35041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_33414){
var state_val_33415 = (state_33414[(1)]);
if((state_val_33415 === (7))){
var inst_33406 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33417_35048 = state_33414__$1;
(statearr_33417_35048[(2)] = inst_33406);

(statearr_33417_35048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (20))){
var inst_33400 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33418_35054 = state_33414__$1;
(statearr_33418_35054[(2)] = inst_33400);

(statearr_33418_35054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (1))){
var inst_33352 = calc_state();
var inst_33353 = cljs.core.__destructure_map(inst_33352);
var inst_33354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33353,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33353,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33353,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33357 = inst_33352;
var state_33414__$1 = (function (){var statearr_33419 = state_33414;
(statearr_33419[(7)] = inst_33356);

(statearr_33419[(8)] = inst_33354);

(statearr_33419[(9)] = inst_33357);

(statearr_33419[(10)] = inst_33355);

return statearr_33419;
})();
var statearr_33420_35077 = state_33414__$1;
(statearr_33420_35077[(2)] = null);

(statearr_33420_35077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (4))){
var inst_33370 = (state_33414[(11)]);
var inst_33369 = (state_33414[(12)]);
var inst_33368 = (state_33414[(2)]);
var inst_33369__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33368,(0),null);
var inst_33370__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33368,(1),null);
var inst_33371 = (inst_33369__$1 == null);
var inst_33372 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33370__$1,change);
var inst_33373 = ((inst_33371) || (inst_33372));
var state_33414__$1 = (function (){var statearr_33421 = state_33414;
(statearr_33421[(11)] = inst_33370__$1);

(statearr_33421[(12)] = inst_33369__$1);

return statearr_33421;
})();
if(cljs.core.truth_(inst_33373)){
var statearr_33422_35080 = state_33414__$1;
(statearr_33422_35080[(1)] = (5));

} else {
var statearr_33423_35085 = state_33414__$1;
(statearr_33423_35085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (15))){
var inst_33360 = (state_33414[(13)]);
var inst_33357 = inst_33360;
var state_33414__$1 = (function (){var statearr_33424 = state_33414;
(statearr_33424[(9)] = inst_33357);

return statearr_33424;
})();
var statearr_33425_35090 = state_33414__$1;
(statearr_33425_35090[(2)] = null);

(statearr_33425_35090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (13))){
var inst_33392 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
if(cljs.core.truth_(inst_33392)){
var statearr_33426_35091 = state_33414__$1;
(statearr_33426_35091[(1)] = (14));

} else {
var statearr_33427_35092 = state_33414__$1;
(statearr_33427_35092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (6))){
var inst_33384 = (state_33414[(14)]);
var inst_33361 = (state_33414[(15)]);
var inst_33370 = (state_33414[(11)]);
var inst_33384__$1 = (inst_33361.cljs$core$IFn$_invoke$arity$1 ? inst_33361.cljs$core$IFn$_invoke$arity$1(inst_33370) : inst_33361.call(null,inst_33370));
var state_33414__$1 = (function (){var statearr_33428 = state_33414;
(statearr_33428[(14)] = inst_33384__$1);

return statearr_33428;
})();
if(cljs.core.truth_(inst_33384__$1)){
var statearr_33430_35100 = state_33414__$1;
(statearr_33430_35100[(1)] = (11));

} else {
var statearr_33431_35105 = state_33414__$1;
(statearr_33431_35105[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (17))){
var inst_33395 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
if(cljs.core.truth_(inst_33395)){
var statearr_33433_35109 = state_33414__$1;
(statearr_33433_35109[(1)] = (18));

} else {
var statearr_33434_35110 = state_33414__$1;
(statearr_33434_35110[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (3))){
var inst_33412 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33414__$1,inst_33412);
} else {
if((state_val_33415 === (12))){
var inst_33362 = (state_33414[(16)]);
var inst_33361 = (state_33414[(15)]);
var inst_33370 = (state_33414[(11)]);
var inst_33387 = cljs.core.empty_QMARK_(inst_33361);
var inst_33388 = (inst_33362.cljs$core$IFn$_invoke$arity$1 ? inst_33362.cljs$core$IFn$_invoke$arity$1(inst_33370) : inst_33362.call(null,inst_33370));
var inst_33389 = cljs.core.not(inst_33388);
var inst_33390 = ((inst_33387) && (inst_33389));
var state_33414__$1 = state_33414;
var statearr_33435_35123 = state_33414__$1;
(statearr_33435_35123[(2)] = inst_33390);

(statearr_33435_35123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (2))){
var inst_33360 = (state_33414[(13)]);
var inst_33357 = (state_33414[(9)]);
var inst_33360__$1 = cljs.core.__destructure_map(inst_33357);
var inst_33361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33360__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33360__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33360__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33414__$1 = (function (){var statearr_33436 = state_33414;
(statearr_33436[(13)] = inst_33360__$1);

(statearr_33436[(16)] = inst_33362);

(statearr_33436[(15)] = inst_33361);

return statearr_33436;
})();
return cljs.core.async.ioc_alts_BANG_(state_33414__$1,(4),inst_33363);
} else {
if((state_val_33415 === (19))){
var state_33414__$1 = state_33414;
var statearr_33437_35128 = state_33414__$1;
(statearr_33437_35128[(2)] = null);

(statearr_33437_35128[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (11))){
var inst_33384 = (state_33414[(14)]);
var state_33414__$1 = state_33414;
var statearr_33438_35129 = state_33414__$1;
(statearr_33438_35129[(2)] = inst_33384);

(statearr_33438_35129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (9))){
var state_33414__$1 = state_33414;
var statearr_33439_35130 = state_33414__$1;
(statearr_33439_35130[(2)] = null);

(statearr_33439_35130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (5))){
var inst_33369 = (state_33414[(12)]);
var inst_33375 = (inst_33369 == null);
var state_33414__$1 = state_33414;
if(cljs.core.truth_(inst_33375)){
var statearr_33440_35136 = state_33414__$1;
(statearr_33440_35136[(1)] = (8));

} else {
var statearr_33441_35137 = state_33414__$1;
(statearr_33441_35137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (14))){
var inst_33369 = (state_33414[(12)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33414__$1,(17),out,inst_33369);
} else {
if((state_val_33415 === (16))){
var inst_33404 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33442_35143 = state_33414__$1;
(statearr_33442_35143[(2)] = inst_33404);

(statearr_33442_35143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (10))){
var inst_33380 = (state_33414[(2)]);
var inst_33381 = calc_state();
var inst_33357 = inst_33381;
var state_33414__$1 = (function (){var statearr_33443 = state_33414;
(statearr_33443[(9)] = inst_33357);

(statearr_33443[(17)] = inst_33380);

return statearr_33443;
})();
var statearr_33444_35144 = state_33414__$1;
(statearr_33444_35144[(2)] = null);

(statearr_33444_35144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (18))){
var inst_33360 = (state_33414[(13)]);
var inst_33357 = inst_33360;
var state_33414__$1 = (function (){var statearr_33445 = state_33414;
(statearr_33445[(9)] = inst_33357);

return statearr_33445;
})();
var statearr_33446_35153 = state_33414__$1;
(statearr_33446_35153[(2)] = null);

(statearr_33446_35153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (8))){
var inst_33370 = (state_33414[(11)]);
var inst_33377 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33370);
var state_33414__$1 = state_33414;
var statearr_33447_35165 = state_33414__$1;
(statearr_33447_35165[(2)] = inst_33377);

(statearr_33447_35165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31574__auto__ = null;
var cljs$core$async$mix_$_state_machine__31574__auto____0 = (function (){
var statearr_33448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33448[(0)] = cljs$core$async$mix_$_state_machine__31574__auto__);

(statearr_33448[(1)] = (1));

return statearr_33448;
});
var cljs$core$async$mix_$_state_machine__31574__auto____1 = (function (state_33414){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_33414);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33449){var ex__31577__auto__ = e33449;
var statearr_33450_35174 = state_33414;
(statearr_33450_35174[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_33414[(4)]))){
var statearr_33451_35175 = state_33414;
(statearr_33451_35175[(1)] = cljs.core.first((state_33414[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35181 = state_33414;
state_33414 = G__35181;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31574__auto__ = function(state_33414){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31574__auto____1.call(this,state_33414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31574__auto____0;
cljs$core$async$mix_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31574__auto____1;
return cljs$core$async$mix_$_state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_33452 = f__32029__auto__();
(statearr_33452[(6)] = c__32028__auto___35041);

return statearr_33452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35183 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35183(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35194 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35194(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35215 = (function() {
var G__35216 = null;
var G__35216__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35216__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35216 = function(p,v){
switch(arguments.length){
case 1:
return G__35216__1.call(this,p);
case 2:
return G__35216__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35216.cljs$core$IFn$_invoke$arity$1 = G__35216__1;
G__35216.cljs$core$IFn$_invoke$arity$2 = G__35216__2;
return G__35216;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33460 = arguments.length;
switch (G__33460) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35215(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35215(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33465 = arguments.length;
switch (G__33465) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33461_SHARP_){
if(cljs.core.truth_((p1__33461_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33461_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33461_SHARP_.call(null,topic)))){
return p1__33461_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33461_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33470 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33471){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33471 = meta33471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33472,meta33471__$1){
var self__ = this;
var _33472__$1 = this;
return (new cljs.core.async.t_cljs$core$async33470(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33471__$1));
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33472){
var self__ = this;
var _33472__$1 = this;
return self__.meta33471;
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33471","meta33471",1741452903,null)], null);
}));

(cljs.core.async.t_cljs$core$async33470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33470");

(cljs.core.async.t_cljs$core$async33470.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33470.
 */
cljs.core.async.__GT_t_cljs$core$async33470 = (function cljs$core$async$__GT_t_cljs$core$async33470(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33471){
return (new cljs.core.async.t_cljs$core$async33470(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33471));
});

}

return (new cljs.core.async.t_cljs$core$async33470(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32028__auto___35284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_33571){
var state_val_33572 = (state_33571[(1)]);
if((state_val_33572 === (7))){
var inst_33567 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
var statearr_33577_35285 = state_33571__$1;
(statearr_33577_35285[(2)] = inst_33567);

(statearr_33577_35285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (20))){
var state_33571__$1 = state_33571;
var statearr_33581_35288 = state_33571__$1;
(statearr_33581_35288[(2)] = null);

(statearr_33581_35288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (1))){
var state_33571__$1 = state_33571;
var statearr_33585_35292 = state_33571__$1;
(statearr_33585_35292[(2)] = null);

(statearr_33585_35292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (24))){
var inst_33550 = (state_33571[(7)]);
var inst_33559 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33550);
var state_33571__$1 = state_33571;
var statearr_33586_35295 = state_33571__$1;
(statearr_33586_35295[(2)] = inst_33559);

(statearr_33586_35295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (4))){
var inst_33483 = (state_33571[(8)]);
var inst_33483__$1 = (state_33571[(2)]);
var inst_33484 = (inst_33483__$1 == null);
var state_33571__$1 = (function (){var statearr_33590 = state_33571;
(statearr_33590[(8)] = inst_33483__$1);

return statearr_33590;
})();
if(cljs.core.truth_(inst_33484)){
var statearr_33591_35296 = state_33571__$1;
(statearr_33591_35296[(1)] = (5));

} else {
var statearr_33592_35299 = state_33571__$1;
(statearr_33592_35299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (15))){
var inst_33544 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
var statearr_33593_35302 = state_33571__$1;
(statearr_33593_35302[(2)] = inst_33544);

(statearr_33593_35302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (21))){
var inst_33564 = (state_33571[(2)]);
var state_33571__$1 = (function (){var statearr_33594 = state_33571;
(statearr_33594[(9)] = inst_33564);

return statearr_33594;
})();
var statearr_33595_35304 = state_33571__$1;
(statearr_33595_35304[(2)] = null);

(statearr_33595_35304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (13))){
var inst_33520 = (state_33571[(10)]);
var inst_33522 = cljs.core.chunked_seq_QMARK_(inst_33520);
var state_33571__$1 = state_33571;
if(inst_33522){
var statearr_33596_35305 = state_33571__$1;
(statearr_33596_35305[(1)] = (16));

} else {
var statearr_33597_35306 = state_33571__$1;
(statearr_33597_35306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (22))){
var inst_33556 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
if(cljs.core.truth_(inst_33556)){
var statearr_33598_35307 = state_33571__$1;
(statearr_33598_35307[(1)] = (23));

} else {
var statearr_33599_35308 = state_33571__$1;
(statearr_33599_35308[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (6))){
var inst_33552 = (state_33571[(11)]);
var inst_33550 = (state_33571[(7)]);
var inst_33483 = (state_33571[(8)]);
var inst_33550__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33483) : topic_fn.call(null,inst_33483));
var inst_33551 = cljs.core.deref(mults);
var inst_33552__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33551,inst_33550__$1);
var state_33571__$1 = (function (){var statearr_33604 = state_33571;
(statearr_33604[(11)] = inst_33552__$1);

(statearr_33604[(7)] = inst_33550__$1);

return statearr_33604;
})();
if(cljs.core.truth_(inst_33552__$1)){
var statearr_33605_35309 = state_33571__$1;
(statearr_33605_35309[(1)] = (19));

} else {
var statearr_33606_35310 = state_33571__$1;
(statearr_33606_35310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (25))){
var inst_33561 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
var statearr_33607_35311 = state_33571__$1;
(statearr_33607_35311[(2)] = inst_33561);

(statearr_33607_35311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (17))){
var inst_33520 = (state_33571[(10)]);
var inst_33535 = cljs.core.first(inst_33520);
var inst_33536 = cljs.core.async.muxch_STAR_(inst_33535);
var inst_33537 = cljs.core.async.close_BANG_(inst_33536);
var inst_33538 = cljs.core.next(inst_33520);
var inst_33493 = inst_33538;
var inst_33494 = null;
var inst_33495 = (0);
var inst_33496 = (0);
var state_33571__$1 = (function (){var statearr_33608 = state_33571;
(statearr_33608[(12)] = inst_33495);

(statearr_33608[(13)] = inst_33537);

(statearr_33608[(14)] = inst_33496);

(statearr_33608[(15)] = inst_33494);

(statearr_33608[(16)] = inst_33493);

return statearr_33608;
})();
var statearr_33609_35313 = state_33571__$1;
(statearr_33609_35313[(2)] = null);

(statearr_33609_35313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (3))){
var inst_33569 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33571__$1,inst_33569);
} else {
if((state_val_33572 === (12))){
var inst_33546 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
var statearr_33610_35314 = state_33571__$1;
(statearr_33610_35314[(2)] = inst_33546);

(statearr_33610_35314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (2))){
var state_33571__$1 = state_33571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33571__$1,(4),ch);
} else {
if((state_val_33572 === (23))){
var state_33571__$1 = state_33571;
var statearr_33611_35315 = state_33571__$1;
(statearr_33611_35315[(2)] = null);

(statearr_33611_35315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (19))){
var inst_33552 = (state_33571[(11)]);
var inst_33483 = (state_33571[(8)]);
var inst_33554 = cljs.core.async.muxch_STAR_(inst_33552);
var state_33571__$1 = state_33571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33571__$1,(22),inst_33554,inst_33483);
} else {
if((state_val_33572 === (11))){
var inst_33520 = (state_33571[(10)]);
var inst_33493 = (state_33571[(16)]);
var inst_33520__$1 = cljs.core.seq(inst_33493);
var state_33571__$1 = (function (){var statearr_33616 = state_33571;
(statearr_33616[(10)] = inst_33520__$1);

return statearr_33616;
})();
if(inst_33520__$1){
var statearr_33617_35323 = state_33571__$1;
(statearr_33617_35323[(1)] = (13));

} else {
var statearr_33618_35324 = state_33571__$1;
(statearr_33618_35324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (9))){
var inst_33548 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
var statearr_33619_35328 = state_33571__$1;
(statearr_33619_35328[(2)] = inst_33548);

(statearr_33619_35328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (5))){
var inst_33490 = cljs.core.deref(mults);
var inst_33491 = cljs.core.vals(inst_33490);
var inst_33492 = cljs.core.seq(inst_33491);
var inst_33493 = inst_33492;
var inst_33494 = null;
var inst_33495 = (0);
var inst_33496 = (0);
var state_33571__$1 = (function (){var statearr_33622 = state_33571;
(statearr_33622[(12)] = inst_33495);

(statearr_33622[(14)] = inst_33496);

(statearr_33622[(15)] = inst_33494);

(statearr_33622[(16)] = inst_33493);

return statearr_33622;
})();
var statearr_33623_35329 = state_33571__$1;
(statearr_33623_35329[(2)] = null);

(statearr_33623_35329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (14))){
var state_33571__$1 = state_33571;
var statearr_33628_35333 = state_33571__$1;
(statearr_33628_35333[(2)] = null);

(statearr_33628_35333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (16))){
var inst_33520 = (state_33571[(10)]);
var inst_33524 = cljs.core.chunk_first(inst_33520);
var inst_33525 = cljs.core.chunk_rest(inst_33520);
var inst_33532 = cljs.core.count(inst_33524);
var inst_33493 = inst_33525;
var inst_33494 = inst_33524;
var inst_33495 = inst_33532;
var inst_33496 = (0);
var state_33571__$1 = (function (){var statearr_33630 = state_33571;
(statearr_33630[(12)] = inst_33495);

(statearr_33630[(14)] = inst_33496);

(statearr_33630[(15)] = inst_33494);

(statearr_33630[(16)] = inst_33493);

return statearr_33630;
})();
var statearr_33631_35340 = state_33571__$1;
(statearr_33631_35340[(2)] = null);

(statearr_33631_35340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (10))){
var inst_33495 = (state_33571[(12)]);
var inst_33496 = (state_33571[(14)]);
var inst_33494 = (state_33571[(15)]);
var inst_33493 = (state_33571[(16)]);
var inst_33508 = cljs.core._nth(inst_33494,inst_33496);
var inst_33509 = cljs.core.async.muxch_STAR_(inst_33508);
var inst_33510 = cljs.core.async.close_BANG_(inst_33509);
var inst_33517 = (inst_33496 + (1));
var tmp33624 = inst_33495;
var tmp33625 = inst_33494;
var tmp33626 = inst_33493;
var inst_33493__$1 = tmp33626;
var inst_33494__$1 = tmp33625;
var inst_33495__$1 = tmp33624;
var inst_33496__$1 = inst_33517;
var state_33571__$1 = (function (){var statearr_33632 = state_33571;
(statearr_33632[(12)] = inst_33495__$1);

(statearr_33632[(17)] = inst_33510);

(statearr_33632[(14)] = inst_33496__$1);

(statearr_33632[(15)] = inst_33494__$1);

(statearr_33632[(16)] = inst_33493__$1);

return statearr_33632;
})();
var statearr_33633_35354 = state_33571__$1;
(statearr_33633_35354[(2)] = null);

(statearr_33633_35354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (18))){
var inst_33541 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
var statearr_33634_35356 = state_33571__$1;
(statearr_33634_35356[(2)] = inst_33541);

(statearr_33634_35356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (8))){
var inst_33495 = (state_33571[(12)]);
var inst_33496 = (state_33571[(14)]);
var inst_33498 = (inst_33496 < inst_33495);
var inst_33499 = inst_33498;
var state_33571__$1 = state_33571;
if(cljs.core.truth_(inst_33499)){
var statearr_33635_35362 = state_33571__$1;
(statearr_33635_35362[(1)] = (10));

} else {
var statearr_33636_35365 = state_33571__$1;
(statearr_33636_35365[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_33637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33637[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_33637[(1)] = (1));

return statearr_33637;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_33571){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_33571);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33638){var ex__31577__auto__ = e33638;
var statearr_33639_35374 = state_33571;
(statearr_33639_35374[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_33571[(4)]))){
var statearr_33641_35375 = state_33571;
(statearr_33641_35375[(1)] = cljs.core.first((state_33571[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35382 = state_33571;
state_33571 = G__35382;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_33571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_33571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_33643 = f__32029__auto__();
(statearr_33643[(6)] = c__32028__auto___35284);

return statearr_33643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33646 = arguments.length;
switch (G__33646) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33652 = arguments.length;
switch (G__33652) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33654 = arguments.length;
switch (G__33654) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32028__auto___35393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_33704){
var state_val_33705 = (state_33704[(1)]);
if((state_val_33705 === (7))){
var state_33704__$1 = state_33704;
var statearr_33708_35397 = state_33704__$1;
(statearr_33708_35397[(2)] = null);

(statearr_33708_35397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (1))){
var state_33704__$1 = state_33704;
var statearr_33710_35404 = state_33704__$1;
(statearr_33710_35404[(2)] = null);

(statearr_33710_35404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (4))){
var inst_33661 = (state_33704[(7)]);
var inst_33662 = (state_33704[(8)]);
var inst_33664 = (inst_33662 < inst_33661);
var state_33704__$1 = state_33704;
if(cljs.core.truth_(inst_33664)){
var statearr_33712_35406 = state_33704__$1;
(statearr_33712_35406[(1)] = (6));

} else {
var statearr_33713_35408 = state_33704__$1;
(statearr_33713_35408[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (15))){
var inst_33690 = (state_33704[(9)]);
var inst_33695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33690);
var state_33704__$1 = state_33704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33704__$1,(17),out,inst_33695);
} else {
if((state_val_33705 === (13))){
var inst_33690 = (state_33704[(9)]);
var inst_33690__$1 = (state_33704[(2)]);
var inst_33691 = cljs.core.some(cljs.core.nil_QMARK_,inst_33690__$1);
var state_33704__$1 = (function (){var statearr_33717 = state_33704;
(statearr_33717[(9)] = inst_33690__$1);

return statearr_33717;
})();
if(cljs.core.truth_(inst_33691)){
var statearr_33718_35411 = state_33704__$1;
(statearr_33718_35411[(1)] = (14));

} else {
var statearr_33719_35412 = state_33704__$1;
(statearr_33719_35412[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (6))){
var state_33704__$1 = state_33704;
var statearr_33720_35414 = state_33704__$1;
(statearr_33720_35414[(2)] = null);

(statearr_33720_35414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (17))){
var inst_33697 = (state_33704[(2)]);
var state_33704__$1 = (function (){var statearr_33722 = state_33704;
(statearr_33722[(10)] = inst_33697);

return statearr_33722;
})();
var statearr_33723_35416 = state_33704__$1;
(statearr_33723_35416[(2)] = null);

(statearr_33723_35416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (3))){
var inst_33702 = (state_33704[(2)]);
var state_33704__$1 = state_33704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33704__$1,inst_33702);
} else {
if((state_val_33705 === (12))){
var _ = (function (){var statearr_33724 = state_33704;
(statearr_33724[(4)] = cljs.core.rest((state_33704[(4)])));

return statearr_33724;
})();
var state_33704__$1 = state_33704;
var ex33721 = (state_33704__$1[(2)]);
var statearr_33725_35417 = state_33704__$1;
(statearr_33725_35417[(5)] = ex33721);


if((ex33721 instanceof Object)){
var statearr_33726_35418 = state_33704__$1;
(statearr_33726_35418[(1)] = (11));

(statearr_33726_35418[(5)] = null);

} else {
throw ex33721;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (2))){
var inst_33657 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33661 = cnt;
var inst_33662 = (0);
var state_33704__$1 = (function (){var statearr_33731 = state_33704;
(statearr_33731[(7)] = inst_33661);

(statearr_33731[(8)] = inst_33662);

(statearr_33731[(11)] = inst_33657);

return statearr_33731;
})();
var statearr_33732_35419 = state_33704__$1;
(statearr_33732_35419[(2)] = null);

(statearr_33732_35419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (11))){
var inst_33669 = (state_33704[(2)]);
var inst_33670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33704__$1 = (function (){var statearr_33733 = state_33704;
(statearr_33733[(12)] = inst_33669);

return statearr_33733;
})();
var statearr_33734_35428 = state_33704__$1;
(statearr_33734_35428[(2)] = inst_33670);

(statearr_33734_35428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (9))){
var inst_33662 = (state_33704[(8)]);
var _ = (function (){var statearr_33739 = state_33704;
(statearr_33739[(4)] = cljs.core.cons((12),(state_33704[(4)])));

return statearr_33739;
})();
var inst_33676 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33662) : chs__$1.call(null,inst_33662));
var inst_33677 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33662) : done.call(null,inst_33662));
var inst_33678 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33676,inst_33677);
var ___$1 = (function (){var statearr_33740 = state_33704;
(statearr_33740[(4)] = cljs.core.rest((state_33704[(4)])));

return statearr_33740;
})();
var state_33704__$1 = state_33704;
var statearr_33741_35433 = state_33704__$1;
(statearr_33741_35433[(2)] = inst_33678);

(statearr_33741_35433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (5))){
var inst_33688 = (state_33704[(2)]);
var state_33704__$1 = (function (){var statearr_33742 = state_33704;
(statearr_33742[(13)] = inst_33688);

return statearr_33742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33704__$1,(13),dchan);
} else {
if((state_val_33705 === (14))){
var inst_33693 = cljs.core.async.close_BANG_(out);
var state_33704__$1 = state_33704;
var statearr_33743_35434 = state_33704__$1;
(statearr_33743_35434[(2)] = inst_33693);

(statearr_33743_35434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (16))){
var inst_33700 = (state_33704[(2)]);
var state_33704__$1 = state_33704;
var statearr_33744_35435 = state_33704__$1;
(statearr_33744_35435[(2)] = inst_33700);

(statearr_33744_35435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (10))){
var inst_33662 = (state_33704[(8)]);
var inst_33681 = (state_33704[(2)]);
var inst_33682 = (inst_33662 + (1));
var inst_33662__$1 = inst_33682;
var state_33704__$1 = (function (){var statearr_33745 = state_33704;
(statearr_33745[(14)] = inst_33681);

(statearr_33745[(8)] = inst_33662__$1);

return statearr_33745;
})();
var statearr_33746_35443 = state_33704__$1;
(statearr_33746_35443[(2)] = null);

(statearr_33746_35443[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33705 === (8))){
var inst_33686 = (state_33704[(2)]);
var state_33704__$1 = state_33704;
var statearr_33747_35446 = state_33704__$1;
(statearr_33747_35446[(2)] = inst_33686);

(statearr_33747_35446[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_33748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33748[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_33748[(1)] = (1));

return statearr_33748;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_33704){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_33704);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33749){var ex__31577__auto__ = e33749;
var statearr_33750_35449 = state_33704;
(statearr_33750_35449[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_33704[(4)]))){
var statearr_33751_35450 = state_33704;
(statearr_33751_35450[(1)] = cljs.core.first((state_33704[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35453 = state_33704;
state_33704 = G__35453;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_33704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_33704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_33754 = f__32029__auto__();
(statearr_33754[(6)] = c__32028__auto___35393);

return statearr_33754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33757 = arguments.length;
switch (G__33757) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32028__auto___35459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_33792){
var state_val_33793 = (state_33792[(1)]);
if((state_val_33793 === (7))){
var inst_33772 = (state_33792[(7)]);
var inst_33771 = (state_33792[(8)]);
var inst_33771__$1 = (state_33792[(2)]);
var inst_33772__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33771__$1,(0),null);
var inst_33773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33771__$1,(1),null);
var inst_33774 = (inst_33772__$1 == null);
var state_33792__$1 = (function (){var statearr_33794 = state_33792;
(statearr_33794[(9)] = inst_33773);

(statearr_33794[(7)] = inst_33772__$1);

(statearr_33794[(8)] = inst_33771__$1);

return statearr_33794;
})();
if(cljs.core.truth_(inst_33774)){
var statearr_33795_35462 = state_33792__$1;
(statearr_33795_35462[(1)] = (8));

} else {
var statearr_33796_35463 = state_33792__$1;
(statearr_33796_35463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33793 === (1))){
var inst_33761 = cljs.core.vec(chs);
var inst_33762 = inst_33761;
var state_33792__$1 = (function (){var statearr_33797 = state_33792;
(statearr_33797[(10)] = inst_33762);

return statearr_33797;
})();
var statearr_33798_35466 = state_33792__$1;
(statearr_33798_35466[(2)] = null);

(statearr_33798_35466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33793 === (4))){
var inst_33762 = (state_33792[(10)]);
var state_33792__$1 = state_33792;
return cljs.core.async.ioc_alts_BANG_(state_33792__$1,(7),inst_33762);
} else {
if((state_val_33793 === (6))){
var inst_33788 = (state_33792[(2)]);
var state_33792__$1 = state_33792;
var statearr_33799_35467 = state_33792__$1;
(statearr_33799_35467[(2)] = inst_33788);

(statearr_33799_35467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33793 === (3))){
var inst_33790 = (state_33792[(2)]);
var state_33792__$1 = state_33792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33792__$1,inst_33790);
} else {
if((state_val_33793 === (2))){
var inst_33762 = (state_33792[(10)]);
var inst_33764 = cljs.core.count(inst_33762);
var inst_33765 = (inst_33764 > (0));
var state_33792__$1 = state_33792;
if(cljs.core.truth_(inst_33765)){
var statearr_33801_35470 = state_33792__$1;
(statearr_33801_35470[(1)] = (4));

} else {
var statearr_33802_35471 = state_33792__$1;
(statearr_33802_35471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33793 === (11))){
var inst_33762 = (state_33792[(10)]);
var inst_33781 = (state_33792[(2)]);
var tmp33800 = inst_33762;
var inst_33762__$1 = tmp33800;
var state_33792__$1 = (function (){var statearr_33803 = state_33792;
(statearr_33803[(10)] = inst_33762__$1);

(statearr_33803[(11)] = inst_33781);

return statearr_33803;
})();
var statearr_33804_35472 = state_33792__$1;
(statearr_33804_35472[(2)] = null);

(statearr_33804_35472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33793 === (9))){
var inst_33772 = (state_33792[(7)]);
var state_33792__$1 = state_33792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33792__$1,(11),out,inst_33772);
} else {
if((state_val_33793 === (5))){
var inst_33786 = cljs.core.async.close_BANG_(out);
var state_33792__$1 = state_33792;
var statearr_33805_35475 = state_33792__$1;
(statearr_33805_35475[(2)] = inst_33786);

(statearr_33805_35475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33793 === (10))){
var inst_33784 = (state_33792[(2)]);
var state_33792__$1 = state_33792;
var statearr_33806_35477 = state_33792__$1;
(statearr_33806_35477[(2)] = inst_33784);

(statearr_33806_35477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33793 === (8))){
var inst_33773 = (state_33792[(9)]);
var inst_33762 = (state_33792[(10)]);
var inst_33772 = (state_33792[(7)]);
var inst_33771 = (state_33792[(8)]);
var inst_33776 = (function (){var cs = inst_33762;
var vec__33767 = inst_33771;
var v = inst_33772;
var c = inst_33773;
return (function (p1__33755_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33755_SHARP_);
});
})();
var inst_33777 = cljs.core.filterv(inst_33776,inst_33762);
var inst_33762__$1 = inst_33777;
var state_33792__$1 = (function (){var statearr_33807 = state_33792;
(statearr_33807[(10)] = inst_33762__$1);

return statearr_33807;
})();
var statearr_33808_35480 = state_33792__$1;
(statearr_33808_35480[(2)] = null);

(statearr_33808_35480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_33809 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33809[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_33809[(1)] = (1));

return statearr_33809;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_33792){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_33792);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33810){var ex__31577__auto__ = e33810;
var statearr_33811_35481 = state_33792;
(statearr_33811_35481[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_33792[(4)]))){
var statearr_33812_35482 = state_33792;
(statearr_33812_35482[(1)] = cljs.core.first((state_33792[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35489 = state_33792;
state_33792 = G__35489;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_33792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_33792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_33813 = f__32029__auto__();
(statearr_33813[(6)] = c__32028__auto___35459);

return statearr_33813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33815 = arguments.length;
switch (G__33815) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32028__auto___35495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_33840){
var state_val_33841 = (state_33840[(1)]);
if((state_val_33841 === (7))){
var inst_33822 = (state_33840[(7)]);
var inst_33822__$1 = (state_33840[(2)]);
var inst_33823 = (inst_33822__$1 == null);
var inst_33824 = cljs.core.not(inst_33823);
var state_33840__$1 = (function (){var statearr_33842 = state_33840;
(statearr_33842[(7)] = inst_33822__$1);

return statearr_33842;
})();
if(inst_33824){
var statearr_33843_35498 = state_33840__$1;
(statearr_33843_35498[(1)] = (8));

} else {
var statearr_33844_35501 = state_33840__$1;
(statearr_33844_35501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (1))){
var inst_33817 = (0);
var state_33840__$1 = (function (){var statearr_33848 = state_33840;
(statearr_33848[(8)] = inst_33817);

return statearr_33848;
})();
var statearr_33849_35504 = state_33840__$1;
(statearr_33849_35504[(2)] = null);

(statearr_33849_35504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (4))){
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33840__$1,(7),ch);
} else {
if((state_val_33841 === (6))){
var inst_33835 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33850_35507 = state_33840__$1;
(statearr_33850_35507[(2)] = inst_33835);

(statearr_33850_35507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (3))){
var inst_33837 = (state_33840[(2)]);
var inst_33838 = cljs.core.async.close_BANG_(out);
var state_33840__$1 = (function (){var statearr_33851 = state_33840;
(statearr_33851[(9)] = inst_33837);

return statearr_33851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33840__$1,inst_33838);
} else {
if((state_val_33841 === (2))){
var inst_33817 = (state_33840[(8)]);
var inst_33819 = (inst_33817 < n);
var state_33840__$1 = state_33840;
if(cljs.core.truth_(inst_33819)){
var statearr_33852_35511 = state_33840__$1;
(statearr_33852_35511[(1)] = (4));

} else {
var statearr_33853_35512 = state_33840__$1;
(statearr_33853_35512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (11))){
var inst_33817 = (state_33840[(8)]);
var inst_33827 = (state_33840[(2)]);
var inst_33828 = (inst_33817 + (1));
var inst_33817__$1 = inst_33828;
var state_33840__$1 = (function (){var statearr_33854 = state_33840;
(statearr_33854[(10)] = inst_33827);

(statearr_33854[(8)] = inst_33817__$1);

return statearr_33854;
})();
var statearr_33855_35514 = state_33840__$1;
(statearr_33855_35514[(2)] = null);

(statearr_33855_35514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (9))){
var state_33840__$1 = state_33840;
var statearr_33857_35515 = state_33840__$1;
(statearr_33857_35515[(2)] = null);

(statearr_33857_35515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (5))){
var state_33840__$1 = state_33840;
var statearr_33861_35516 = state_33840__$1;
(statearr_33861_35516[(2)] = null);

(statearr_33861_35516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (10))){
var inst_33832 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33862_35517 = state_33840__$1;
(statearr_33862_35517[(2)] = inst_33832);

(statearr_33862_35517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (8))){
var inst_33822 = (state_33840[(7)]);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33840__$1,(11),out,inst_33822);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_33863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33863[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_33863[(1)] = (1));

return statearr_33863;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_33840){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_33840);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33864){var ex__31577__auto__ = e33864;
var statearr_33865_35519 = state_33840;
(statearr_33865_35519[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_33840[(4)]))){
var statearr_33866_35520 = state_33840;
(statearr_33866_35520[(1)] = cljs.core.first((state_33840[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35521 = state_33840;
state_33840 = G__35521;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_33840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_33840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_33867 = f__32029__auto__();
(statearr_33867[(6)] = c__32028__auto___35495);

return statearr_33867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33869 = (function (f,ch,meta33870){
this.f = f;
this.ch = ch;
this.meta33870 = meta33870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33871,meta33870__$1){
var self__ = this;
var _33871__$1 = this;
return (new cljs.core.async.t_cljs$core$async33869(self__.f,self__.ch,meta33870__$1));
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33871){
var self__ = this;
var _33871__$1 = this;
return self__.meta33870;
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33872 = (function (f,ch,meta33870,_,fn1,meta33873){
this.f = f;
this.ch = ch;
this.meta33870 = meta33870;
this._ = _;
this.fn1 = fn1;
this.meta33873 = meta33873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33874,meta33873__$1){
var self__ = this;
var _33874__$1 = this;
return (new cljs.core.async.t_cljs$core$async33872(self__.f,self__.ch,self__.meta33870,self__._,self__.fn1,meta33873__$1));
}));

(cljs.core.async.t_cljs$core$async33872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33874){
var self__ = this;
var _33874__$1 = this;
return self__.meta33873;
}));

(cljs.core.async.t_cljs$core$async33872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33868_SHARP_){
var G__33895 = (((p1__33868_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33868_SHARP_) : self__.f.call(null,p1__33868_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33895) : f1.call(null,G__33895));
});
}));

(cljs.core.async.t_cljs$core$async33872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33870","meta33870",2023852550,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33869","cljs.core.async/t_cljs$core$async33869",2130628962,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33873","meta33873",988024629,null)], null);
}));

(cljs.core.async.t_cljs$core$async33872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33872");

(cljs.core.async.t_cljs$core$async33872.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33872.
 */
cljs.core.async.__GT_t_cljs$core$async33872 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33872(f__$1,ch__$1,meta33870__$1,___$2,fn1__$1,meta33873){
return (new cljs.core.async.t_cljs$core$async33872(f__$1,ch__$1,meta33870__$1,___$2,fn1__$1,meta33873));
});

}

return (new cljs.core.async.t_cljs$core$async33872(self__.f,self__.ch,self__.meta33870,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33916 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33916) : self__.f.call(null,G__33916));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33870","meta33870",2023852550,null)], null);
}));

(cljs.core.async.t_cljs$core$async33869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33869");

(cljs.core.async.t_cljs$core$async33869.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33869.
 */
cljs.core.async.__GT_t_cljs$core$async33869 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33869(f__$1,ch__$1,meta33870){
return (new cljs.core.async.t_cljs$core$async33869(f__$1,ch__$1,meta33870));
});

}

return (new cljs.core.async.t_cljs$core$async33869(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33920 = (function (f,ch,meta33921){
this.f = f;
this.ch = ch;
this.meta33921 = meta33921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33922,meta33921__$1){
var self__ = this;
var _33922__$1 = this;
return (new cljs.core.async.t_cljs$core$async33920(self__.f,self__.ch,meta33921__$1));
}));

(cljs.core.async.t_cljs$core$async33920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33922){
var self__ = this;
var _33922__$1 = this;
return self__.meta33921;
}));

(cljs.core.async.t_cljs$core$async33920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33921","meta33921",-2036444537,null)], null);
}));

(cljs.core.async.t_cljs$core$async33920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33920");

(cljs.core.async.t_cljs$core$async33920.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33920.
 */
cljs.core.async.__GT_t_cljs$core$async33920 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33920(f__$1,ch__$1,meta33921){
return (new cljs.core.async.t_cljs$core$async33920(f__$1,ch__$1,meta33921));
});

}

return (new cljs.core.async.t_cljs$core$async33920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33926 = (function (p,ch,meta33927){
this.p = p;
this.ch = ch;
this.meta33927 = meta33927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33928,meta33927__$1){
var self__ = this;
var _33928__$1 = this;
return (new cljs.core.async.t_cljs$core$async33926(self__.p,self__.ch,meta33927__$1));
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33928){
var self__ = this;
var _33928__$1 = this;
return self__.meta33927;
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33927","meta33927",-354453741,null)], null);
}));

(cljs.core.async.t_cljs$core$async33926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33926");

(cljs.core.async.t_cljs$core$async33926.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33926.
 */
cljs.core.async.__GT_t_cljs$core$async33926 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33926(p__$1,ch__$1,meta33927){
return (new cljs.core.async.t_cljs$core$async33926(p__$1,ch__$1,meta33927));
});

}

return (new cljs.core.async.t_cljs$core$async33926(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33930 = arguments.length;
switch (G__33930) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32028__auto___35569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_33951){
var state_val_33952 = (state_33951[(1)]);
if((state_val_33952 === (7))){
var inst_33947 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33953_35576 = state_33951__$1;
(statearr_33953_35576[(2)] = inst_33947);

(statearr_33953_35576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (1))){
var state_33951__$1 = state_33951;
var statearr_33954_35581 = state_33951__$1;
(statearr_33954_35581[(2)] = null);

(statearr_33954_35581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (4))){
var inst_33933 = (state_33951[(7)]);
var inst_33933__$1 = (state_33951[(2)]);
var inst_33934 = (inst_33933__$1 == null);
var state_33951__$1 = (function (){var statearr_33955 = state_33951;
(statearr_33955[(7)] = inst_33933__$1);

return statearr_33955;
})();
if(cljs.core.truth_(inst_33934)){
var statearr_33956_35587 = state_33951__$1;
(statearr_33956_35587[(1)] = (5));

} else {
var statearr_33957_35588 = state_33951__$1;
(statearr_33957_35588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (6))){
var inst_33933 = (state_33951[(7)]);
var inst_33938 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33933) : p.call(null,inst_33933));
var state_33951__$1 = state_33951;
if(cljs.core.truth_(inst_33938)){
var statearr_33960_35595 = state_33951__$1;
(statearr_33960_35595[(1)] = (8));

} else {
var statearr_33963_35596 = state_33951__$1;
(statearr_33963_35596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (3))){
var inst_33949 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33951__$1,inst_33949);
} else {
if((state_val_33952 === (2))){
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33951__$1,(4),ch);
} else {
if((state_val_33952 === (11))){
var inst_33941 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33971_35598 = state_33951__$1;
(statearr_33971_35598[(2)] = inst_33941);

(statearr_33971_35598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (9))){
var state_33951__$1 = state_33951;
var statearr_33972_35600 = state_33951__$1;
(statearr_33972_35600[(2)] = null);

(statearr_33972_35600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (5))){
var inst_33936 = cljs.core.async.close_BANG_(out);
var state_33951__$1 = state_33951;
var statearr_33973_35602 = state_33951__$1;
(statearr_33973_35602[(2)] = inst_33936);

(statearr_33973_35602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (10))){
var inst_33944 = (state_33951[(2)]);
var state_33951__$1 = (function (){var statearr_33974 = state_33951;
(statearr_33974[(8)] = inst_33944);

return statearr_33974;
})();
var statearr_33975_35609 = state_33951__$1;
(statearr_33975_35609[(2)] = null);

(statearr_33975_35609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (8))){
var inst_33933 = (state_33951[(7)]);
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33951__$1,(11),out,inst_33933);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_33976 = [null,null,null,null,null,null,null,null,null];
(statearr_33976[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_33976[(1)] = (1));

return statearr_33976;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_33951){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_33951);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33977){var ex__31577__auto__ = e33977;
var statearr_33978_35618 = state_33951;
(statearr_33978_35618[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_33951[(4)]))){
var statearr_33979_35619 = state_33951;
(statearr_33979_35619[(1)] = cljs.core.first((state_33951[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35626 = state_33951;
state_33951 = G__35626;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_33951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_33951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_33980 = f__32029__auto__();
(statearr_33980[(6)] = c__32028__auto___35569);

return statearr_33980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33982 = arguments.length;
switch (G__33982) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_34046){
var state_val_34047 = (state_34046[(1)]);
if((state_val_34047 === (7))){
var inst_34042 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
var statearr_34051_35644 = state_34046__$1;
(statearr_34051_35644[(2)] = inst_34042);

(statearr_34051_35644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (20))){
var inst_34010 = (state_34046[(7)]);
var inst_34022 = (state_34046[(2)]);
var inst_34023 = cljs.core.next(inst_34010);
var inst_33996 = inst_34023;
var inst_33997 = null;
var inst_33998 = (0);
var inst_33999 = (0);
var state_34046__$1 = (function (){var statearr_34053 = state_34046;
(statearr_34053[(8)] = inst_33999);

(statearr_34053[(9)] = inst_33998);

(statearr_34053[(10)] = inst_33996);

(statearr_34053[(11)] = inst_34022);

(statearr_34053[(12)] = inst_33997);

return statearr_34053;
})();
var statearr_34054_35648 = state_34046__$1;
(statearr_34054_35648[(2)] = null);

(statearr_34054_35648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (1))){
var state_34046__$1 = state_34046;
var statearr_34055_35650 = state_34046__$1;
(statearr_34055_35650[(2)] = null);

(statearr_34055_35650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (4))){
var inst_33985 = (state_34046[(13)]);
var inst_33985__$1 = (state_34046[(2)]);
var inst_33986 = (inst_33985__$1 == null);
var state_34046__$1 = (function (){var statearr_34058 = state_34046;
(statearr_34058[(13)] = inst_33985__$1);

return statearr_34058;
})();
if(cljs.core.truth_(inst_33986)){
var statearr_34059_35653 = state_34046__$1;
(statearr_34059_35653[(1)] = (5));

} else {
var statearr_34060_35654 = state_34046__$1;
(statearr_34060_35654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (15))){
var state_34046__$1 = state_34046;
var statearr_34064_35655 = state_34046__$1;
(statearr_34064_35655[(2)] = null);

(statearr_34064_35655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (21))){
var state_34046__$1 = state_34046;
var statearr_34065_35657 = state_34046__$1;
(statearr_34065_35657[(2)] = null);

(statearr_34065_35657[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (13))){
var inst_33999 = (state_34046[(8)]);
var inst_33998 = (state_34046[(9)]);
var inst_33996 = (state_34046[(10)]);
var inst_33997 = (state_34046[(12)]);
var inst_34006 = (state_34046[(2)]);
var inst_34007 = (inst_33999 + (1));
var tmp34061 = inst_33998;
var tmp34062 = inst_33996;
var tmp34063 = inst_33997;
var inst_33996__$1 = tmp34062;
var inst_33997__$1 = tmp34063;
var inst_33998__$1 = tmp34061;
var inst_33999__$1 = inst_34007;
var state_34046__$1 = (function (){var statearr_34066 = state_34046;
(statearr_34066[(8)] = inst_33999__$1);

(statearr_34066[(9)] = inst_33998__$1);

(statearr_34066[(10)] = inst_33996__$1);

(statearr_34066[(14)] = inst_34006);

(statearr_34066[(12)] = inst_33997__$1);

return statearr_34066;
})();
var statearr_34067_35664 = state_34046__$1;
(statearr_34067_35664[(2)] = null);

(statearr_34067_35664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (22))){
var state_34046__$1 = state_34046;
var statearr_34068_35665 = state_34046__$1;
(statearr_34068_35665[(2)] = null);

(statearr_34068_35665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (6))){
var inst_33985 = (state_34046[(13)]);
var inst_33994 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33985) : f.call(null,inst_33985));
var inst_33995 = cljs.core.seq(inst_33994);
var inst_33996 = inst_33995;
var inst_33997 = null;
var inst_33998 = (0);
var inst_33999 = (0);
var state_34046__$1 = (function (){var statearr_34069 = state_34046;
(statearr_34069[(8)] = inst_33999);

(statearr_34069[(9)] = inst_33998);

(statearr_34069[(10)] = inst_33996);

(statearr_34069[(12)] = inst_33997);

return statearr_34069;
})();
var statearr_34070_35670 = state_34046__$1;
(statearr_34070_35670[(2)] = null);

(statearr_34070_35670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (17))){
var inst_34010 = (state_34046[(7)]);
var inst_34014 = cljs.core.chunk_first(inst_34010);
var inst_34015 = cljs.core.chunk_rest(inst_34010);
var inst_34016 = cljs.core.count(inst_34014);
var inst_33996 = inst_34015;
var inst_33997 = inst_34014;
var inst_33998 = inst_34016;
var inst_33999 = (0);
var state_34046__$1 = (function (){var statearr_34071 = state_34046;
(statearr_34071[(8)] = inst_33999);

(statearr_34071[(9)] = inst_33998);

(statearr_34071[(10)] = inst_33996);

(statearr_34071[(12)] = inst_33997);

return statearr_34071;
})();
var statearr_34072_35680 = state_34046__$1;
(statearr_34072_35680[(2)] = null);

(statearr_34072_35680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (3))){
var inst_34044 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34046__$1,inst_34044);
} else {
if((state_val_34047 === (12))){
var inst_34032 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
var statearr_34073_35686 = state_34046__$1;
(statearr_34073_35686[(2)] = inst_34032);

(statearr_34073_35686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (2))){
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34046__$1,(4),in$);
} else {
if((state_val_34047 === (23))){
var inst_34040 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
var statearr_34074_35691 = state_34046__$1;
(statearr_34074_35691[(2)] = inst_34040);

(statearr_34074_35691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (19))){
var inst_34026 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
var statearr_34075_35694 = state_34046__$1;
(statearr_34075_35694[(2)] = inst_34026);

(statearr_34075_35694[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (11))){
var inst_34010 = (state_34046[(7)]);
var inst_33996 = (state_34046[(10)]);
var inst_34010__$1 = cljs.core.seq(inst_33996);
var state_34046__$1 = (function (){var statearr_34076 = state_34046;
(statearr_34076[(7)] = inst_34010__$1);

return statearr_34076;
})();
if(inst_34010__$1){
var statearr_34077_35700 = state_34046__$1;
(statearr_34077_35700[(1)] = (14));

} else {
var statearr_34078_35705 = state_34046__$1;
(statearr_34078_35705[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (9))){
var inst_34034 = (state_34046[(2)]);
var inst_34035 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34046__$1 = (function (){var statearr_34082 = state_34046;
(statearr_34082[(15)] = inst_34034);

return statearr_34082;
})();
if(cljs.core.truth_(inst_34035)){
var statearr_34083_35712 = state_34046__$1;
(statearr_34083_35712[(1)] = (21));

} else {
var statearr_34084_35716 = state_34046__$1;
(statearr_34084_35716[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (5))){
var inst_33988 = cljs.core.async.close_BANG_(out);
var state_34046__$1 = state_34046;
var statearr_34085_35726 = state_34046__$1;
(statearr_34085_35726[(2)] = inst_33988);

(statearr_34085_35726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (14))){
var inst_34010 = (state_34046[(7)]);
var inst_34012 = cljs.core.chunked_seq_QMARK_(inst_34010);
var state_34046__$1 = state_34046;
if(inst_34012){
var statearr_34086_35729 = state_34046__$1;
(statearr_34086_35729[(1)] = (17));

} else {
var statearr_34087_35731 = state_34046__$1;
(statearr_34087_35731[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (16))){
var inst_34030 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
var statearr_34088_35736 = state_34046__$1;
(statearr_34088_35736[(2)] = inst_34030);

(statearr_34088_35736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (10))){
var inst_33999 = (state_34046[(8)]);
var inst_33997 = (state_34046[(12)]);
var inst_34004 = cljs.core._nth(inst_33997,inst_33999);
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34046__$1,(13),out,inst_34004);
} else {
if((state_val_34047 === (18))){
var inst_34010 = (state_34046[(7)]);
var inst_34020 = cljs.core.first(inst_34010);
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34046__$1,(20),out,inst_34020);
} else {
if((state_val_34047 === (8))){
var inst_33999 = (state_34046[(8)]);
var inst_33998 = (state_34046[(9)]);
var inst_34001 = (inst_33999 < inst_33998);
var inst_34002 = inst_34001;
var state_34046__$1 = state_34046;
if(cljs.core.truth_(inst_34002)){
var statearr_34092_35755 = state_34046__$1;
(statearr_34092_35755[(1)] = (10));

} else {
var statearr_34096_35757 = state_34046__$1;
(statearr_34096_35757[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_34104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34104[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__);

(statearr_34104[(1)] = (1));

return statearr_34104;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____1 = (function (state_34046){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_34046);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34105){var ex__31577__auto__ = e34105;
var statearr_34106_35771 = state_34046;
(statearr_34106_35771[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_34046[(4)]))){
var statearr_34107_35779 = state_34046;
(statearr_34107_35779[(1)] = cljs.core.first((state_34046[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35790 = state_34046;
state_34046 = G__35790;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__ = function(state_34046){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____1.call(this,state_34046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_34108 = f__32029__auto__();
(statearr_34108[(6)] = c__32028__auto__);

return statearr_34108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));

return c__32028__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34120 = arguments.length;
switch (G__34120) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34139 = arguments.length;
switch (G__34139) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34143 = arguments.length;
switch (G__34143) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32028__auto___35841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_34167){
var state_val_34168 = (state_34167[(1)]);
if((state_val_34168 === (7))){
var inst_34162 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34169_35846 = state_34167__$1;
(statearr_34169_35846[(2)] = inst_34162);

(statearr_34169_35846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (1))){
var inst_34144 = null;
var state_34167__$1 = (function (){var statearr_34170 = state_34167;
(statearr_34170[(7)] = inst_34144);

return statearr_34170;
})();
var statearr_34171_35847 = state_34167__$1;
(statearr_34171_35847[(2)] = null);

(statearr_34171_35847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (4))){
var inst_34147 = (state_34167[(8)]);
var inst_34147__$1 = (state_34167[(2)]);
var inst_34148 = (inst_34147__$1 == null);
var inst_34149 = cljs.core.not(inst_34148);
var state_34167__$1 = (function (){var statearr_34172 = state_34167;
(statearr_34172[(8)] = inst_34147__$1);

return statearr_34172;
})();
if(inst_34149){
var statearr_34173_35848 = state_34167__$1;
(statearr_34173_35848[(1)] = (5));

} else {
var statearr_34174_35849 = state_34167__$1;
(statearr_34174_35849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (6))){
var state_34167__$1 = state_34167;
var statearr_34175_35857 = state_34167__$1;
(statearr_34175_35857[(2)] = null);

(statearr_34175_35857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (3))){
var inst_34164 = (state_34167[(2)]);
var inst_34165 = cljs.core.async.close_BANG_(out);
var state_34167__$1 = (function (){var statearr_34176 = state_34167;
(statearr_34176[(9)] = inst_34164);

return statearr_34176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34167__$1,inst_34165);
} else {
if((state_val_34168 === (2))){
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34167__$1,(4),ch);
} else {
if((state_val_34168 === (11))){
var inst_34147 = (state_34167[(8)]);
var inst_34156 = (state_34167[(2)]);
var inst_34144 = inst_34147;
var state_34167__$1 = (function (){var statearr_34177 = state_34167;
(statearr_34177[(10)] = inst_34156);

(statearr_34177[(7)] = inst_34144);

return statearr_34177;
})();
var statearr_34178_35867 = state_34167__$1;
(statearr_34178_35867[(2)] = null);

(statearr_34178_35867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (9))){
var inst_34147 = (state_34167[(8)]);
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34167__$1,(11),out,inst_34147);
} else {
if((state_val_34168 === (5))){
var inst_34147 = (state_34167[(8)]);
var inst_34144 = (state_34167[(7)]);
var inst_34151 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34147,inst_34144);
var state_34167__$1 = state_34167;
if(inst_34151){
var statearr_34180_35877 = state_34167__$1;
(statearr_34180_35877[(1)] = (8));

} else {
var statearr_34181_35878 = state_34167__$1;
(statearr_34181_35878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (10))){
var inst_34159 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34182_35882 = state_34167__$1;
(statearr_34182_35882[(2)] = inst_34159);

(statearr_34182_35882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (8))){
var inst_34144 = (state_34167[(7)]);
var tmp34179 = inst_34144;
var inst_34144__$1 = tmp34179;
var state_34167__$1 = (function (){var statearr_34183 = state_34167;
(statearr_34183[(7)] = inst_34144__$1);

return statearr_34183;
})();
var statearr_34184_35888 = state_34167__$1;
(statearr_34184_35888[(2)] = null);

(statearr_34184_35888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_34185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34185[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_34185[(1)] = (1));

return statearr_34185;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_34167){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_34167);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34186){var ex__31577__auto__ = e34186;
var statearr_34188_35889 = state_34167;
(statearr_34188_35889[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_34167[(4)]))){
var statearr_34190_35890 = state_34167;
(statearr_34190_35890[(1)] = cljs.core.first((state_34167[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35891 = state_34167;
state_34167 = G__35891;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_34167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_34167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_34191 = f__32029__auto__();
(statearr_34191[(6)] = c__32028__auto___35841);

return statearr_34191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34194 = arguments.length;
switch (G__34194) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32028__auto___35908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_34244){
var state_val_34245 = (state_34244[(1)]);
if((state_val_34245 === (7))){
var inst_34239 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34246_35916 = state_34244__$1;
(statearr_34246_35916[(2)] = inst_34239);

(statearr_34246_35916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (1))){
var inst_34205 = (new Array(n));
var inst_34206 = inst_34205;
var inst_34207 = (0);
var state_34244__$1 = (function (){var statearr_34247 = state_34244;
(statearr_34247[(7)] = inst_34207);

(statearr_34247[(8)] = inst_34206);

return statearr_34247;
})();
var statearr_34248_35922 = state_34244__$1;
(statearr_34248_35922[(2)] = null);

(statearr_34248_35922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (4))){
var inst_34211 = (state_34244[(9)]);
var inst_34211__$1 = (state_34244[(2)]);
var inst_34212 = (inst_34211__$1 == null);
var inst_34213 = cljs.core.not(inst_34212);
var state_34244__$1 = (function (){var statearr_34249 = state_34244;
(statearr_34249[(9)] = inst_34211__$1);

return statearr_34249;
})();
if(inst_34213){
var statearr_34250_35935 = state_34244__$1;
(statearr_34250_35935[(1)] = (5));

} else {
var statearr_34251_35936 = state_34244__$1;
(statearr_34251_35936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (15))){
var inst_34233 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34252_35941 = state_34244__$1;
(statearr_34252_35941[(2)] = inst_34233);

(statearr_34252_35941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (13))){
var state_34244__$1 = state_34244;
var statearr_34253_35947 = state_34244__$1;
(statearr_34253_35947[(2)] = null);

(statearr_34253_35947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (6))){
var inst_34207 = (state_34244[(7)]);
var inst_34229 = (inst_34207 > (0));
var state_34244__$1 = state_34244;
if(cljs.core.truth_(inst_34229)){
var statearr_34254_35955 = state_34244__$1;
(statearr_34254_35955[(1)] = (12));

} else {
var statearr_34255_35960 = state_34244__$1;
(statearr_34255_35960[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (3))){
var inst_34241 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34244__$1,inst_34241);
} else {
if((state_val_34245 === (12))){
var inst_34206 = (state_34244[(8)]);
var inst_34231 = cljs.core.vec(inst_34206);
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34244__$1,(15),out,inst_34231);
} else {
if((state_val_34245 === (2))){
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34244__$1,(4),ch);
} else {
if((state_val_34245 === (11))){
var inst_34223 = (state_34244[(2)]);
var inst_34224 = (new Array(n));
var inst_34206 = inst_34224;
var inst_34207 = (0);
var state_34244__$1 = (function (){var statearr_34256 = state_34244;
(statearr_34256[(10)] = inst_34223);

(statearr_34256[(7)] = inst_34207);

(statearr_34256[(8)] = inst_34206);

return statearr_34256;
})();
var statearr_34257_35966 = state_34244__$1;
(statearr_34257_35966[(2)] = null);

(statearr_34257_35966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (9))){
var inst_34206 = (state_34244[(8)]);
var inst_34221 = cljs.core.vec(inst_34206);
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34244__$1,(11),out,inst_34221);
} else {
if((state_val_34245 === (5))){
var inst_34211 = (state_34244[(9)]);
var inst_34216 = (state_34244[(11)]);
var inst_34207 = (state_34244[(7)]);
var inst_34206 = (state_34244[(8)]);
var inst_34215 = (inst_34206[inst_34207] = inst_34211);
var inst_34216__$1 = (inst_34207 + (1));
var inst_34217 = (inst_34216__$1 < n);
var state_34244__$1 = (function (){var statearr_34258 = state_34244;
(statearr_34258[(11)] = inst_34216__$1);

(statearr_34258[(12)] = inst_34215);

return statearr_34258;
})();
if(cljs.core.truth_(inst_34217)){
var statearr_34259_35970 = state_34244__$1;
(statearr_34259_35970[(1)] = (8));

} else {
var statearr_34260_35971 = state_34244__$1;
(statearr_34260_35971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (14))){
var inst_34236 = (state_34244[(2)]);
var inst_34237 = cljs.core.async.close_BANG_(out);
var state_34244__$1 = (function (){var statearr_34262 = state_34244;
(statearr_34262[(13)] = inst_34236);

return statearr_34262;
})();
var statearr_34265_35972 = state_34244__$1;
(statearr_34265_35972[(2)] = inst_34237);

(statearr_34265_35972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (10))){
var inst_34227 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34266_35975 = state_34244__$1;
(statearr_34266_35975[(2)] = inst_34227);

(statearr_34266_35975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (8))){
var inst_34216 = (state_34244[(11)]);
var inst_34206 = (state_34244[(8)]);
var tmp34261 = inst_34206;
var inst_34206__$1 = tmp34261;
var inst_34207 = inst_34216;
var state_34244__$1 = (function (){var statearr_34267 = state_34244;
(statearr_34267[(7)] = inst_34207);

(statearr_34267[(8)] = inst_34206__$1);

return statearr_34267;
})();
var statearr_34269_35987 = state_34244__$1;
(statearr_34269_35987[(2)] = null);

(statearr_34269_35987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_34270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34270[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_34270[(1)] = (1));

return statearr_34270;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_34244){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_34244);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34271){var ex__31577__auto__ = e34271;
var statearr_34272_35994 = state_34244;
(statearr_34272_35994[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_34244[(4)]))){
var statearr_34273_35995 = state_34244;
(statearr_34273_35995[(1)] = cljs.core.first((state_34244[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36002 = state_34244;
state_34244 = G__36002;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_34244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_34244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_34274 = f__32029__auto__();
(statearr_34274[(6)] = c__32028__auto___35908);

return statearr_34274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34285 = arguments.length;
switch (G__34285) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32028__auto___36006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32029__auto__ = (function (){var switch__31573__auto__ = (function (state_34328){
var state_val_34329 = (state_34328[(1)]);
if((state_val_34329 === (7))){
var inst_34324 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34330_36008 = state_34328__$1;
(statearr_34330_36008[(2)] = inst_34324);

(statearr_34330_36008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (1))){
var inst_34287 = [];
var inst_34288 = inst_34287;
var inst_34289 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34328__$1 = (function (){var statearr_34331 = state_34328;
(statearr_34331[(7)] = inst_34289);

(statearr_34331[(8)] = inst_34288);

return statearr_34331;
})();
var statearr_34332_36009 = state_34328__$1;
(statearr_34332_36009[(2)] = null);

(statearr_34332_36009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (4))){
var inst_34292 = (state_34328[(9)]);
var inst_34292__$1 = (state_34328[(2)]);
var inst_34293 = (inst_34292__$1 == null);
var inst_34294 = cljs.core.not(inst_34293);
var state_34328__$1 = (function (){var statearr_34333 = state_34328;
(statearr_34333[(9)] = inst_34292__$1);

return statearr_34333;
})();
if(inst_34294){
var statearr_34334_36013 = state_34328__$1;
(statearr_34334_36013[(1)] = (5));

} else {
var statearr_34335_36014 = state_34328__$1;
(statearr_34335_36014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (15))){
var inst_34318 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34336_36015 = state_34328__$1;
(statearr_34336_36015[(2)] = inst_34318);

(statearr_34336_36015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (13))){
var state_34328__$1 = state_34328;
var statearr_34337_36016 = state_34328__$1;
(statearr_34337_36016[(2)] = null);

(statearr_34337_36016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (6))){
var inst_34288 = (state_34328[(8)]);
var inst_34313 = inst_34288.length;
var inst_34314 = (inst_34313 > (0));
var state_34328__$1 = state_34328;
if(cljs.core.truth_(inst_34314)){
var statearr_34340_36017 = state_34328__$1;
(statearr_34340_36017[(1)] = (12));

} else {
var statearr_34343_36018 = state_34328__$1;
(statearr_34343_36018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (3))){
var inst_34326 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34328__$1,inst_34326);
} else {
if((state_val_34329 === (12))){
var inst_34288 = (state_34328[(8)]);
var inst_34316 = cljs.core.vec(inst_34288);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34328__$1,(15),out,inst_34316);
} else {
if((state_val_34329 === (2))){
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34328__$1,(4),ch);
} else {
if((state_val_34329 === (11))){
var inst_34292 = (state_34328[(9)]);
var inst_34296 = (state_34328[(10)]);
var inst_34306 = (state_34328[(2)]);
var inst_34307 = [];
var inst_34308 = inst_34307.push(inst_34292);
var inst_34288 = inst_34307;
var inst_34289 = inst_34296;
var state_34328__$1 = (function (){var statearr_34352 = state_34328;
(statearr_34352[(11)] = inst_34308);

(statearr_34352[(12)] = inst_34306);

(statearr_34352[(7)] = inst_34289);

(statearr_34352[(8)] = inst_34288);

return statearr_34352;
})();
var statearr_34355_36024 = state_34328__$1;
(statearr_34355_36024[(2)] = null);

(statearr_34355_36024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (9))){
var inst_34288 = (state_34328[(8)]);
var inst_34304 = cljs.core.vec(inst_34288);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34328__$1,(11),out,inst_34304);
} else {
if((state_val_34329 === (5))){
var inst_34292 = (state_34328[(9)]);
var inst_34296 = (state_34328[(10)]);
var inst_34289 = (state_34328[(7)]);
var inst_34296__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34292) : f.call(null,inst_34292));
var inst_34297 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34296__$1,inst_34289);
var inst_34298 = cljs.core.keyword_identical_QMARK_(inst_34289,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34299 = ((inst_34297) || (inst_34298));
var state_34328__$1 = (function (){var statearr_34360 = state_34328;
(statearr_34360[(10)] = inst_34296__$1);

return statearr_34360;
})();
if(cljs.core.truth_(inst_34299)){
var statearr_34361_36025 = state_34328__$1;
(statearr_34361_36025[(1)] = (8));

} else {
var statearr_34362_36026 = state_34328__$1;
(statearr_34362_36026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (14))){
var inst_34321 = (state_34328[(2)]);
var inst_34322 = cljs.core.async.close_BANG_(out);
var state_34328__$1 = (function (){var statearr_34365 = state_34328;
(statearr_34365[(13)] = inst_34321);

return statearr_34365;
})();
var statearr_34366_36027 = state_34328__$1;
(statearr_34366_36027[(2)] = inst_34322);

(statearr_34366_36027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (10))){
var inst_34311 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34368_36030 = state_34328__$1;
(statearr_34368_36030[(2)] = inst_34311);

(statearr_34368_36030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (8))){
var inst_34292 = (state_34328[(9)]);
var inst_34296 = (state_34328[(10)]);
var inst_34288 = (state_34328[(8)]);
var inst_34301 = inst_34288.push(inst_34292);
var tmp34363 = inst_34288;
var inst_34288__$1 = tmp34363;
var inst_34289 = inst_34296;
var state_34328__$1 = (function (){var statearr_34369 = state_34328;
(statearr_34369[(14)] = inst_34301);

(statearr_34369[(7)] = inst_34289);

(statearr_34369[(8)] = inst_34288__$1);

return statearr_34369;
})();
var statearr_34370_36032 = state_34328__$1;
(statearr_34370_36032[(2)] = null);

(statearr_34370_36032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_34371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34371[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_34371[(1)] = (1));

return statearr_34371;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_34328){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__(state_34328);
if(cljs.core.keyword_identical_QMARK_(result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34372){var ex__31577__auto__ = e34372;
var statearr_34373_36042 = state_34328;
(statearr_34373_36042[(2)] = ex__31577__auto__);


if(cljs.core.seq((state_34328[(4)]))){
var statearr_34374_36044 = state_34328;
(statearr_34374_36044[(1)] = cljs.core.first((state_34328[(4)])));

} else {
throw ex__31577__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36045 = state_34328;
state_34328 = G__36045;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_34328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_34328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
})();
var state__32030__auto__ = (function (){var statearr_34375 = f__32029__auto__();
(statearr_34375[(6)] = c__32028__auto___36006);

return statearr_34375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32030__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
