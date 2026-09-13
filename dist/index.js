"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=u(function(h,f){
var p=require('@stdlib/strided-base-reinterpret-complex128/dist');function O(e,r,i,l){var n,a,t;if(e<=0)return-1;for(n=p(r,0),a=l*2,i*=2,t=0;t<e;t++){if(!n[a]&&!n[a+1])return t;a+=i}return-1}f.exports=O
});var q=u(function(k,o){
var z=require('@stdlib/strided-base-stride2offset/dist'),F=s();function j(e,r,i){return F(e,r,i,z(e,i))}o.exports=j
});var d=u(function(A,y){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=q(),R=s();m(x,"ndarray",R);y.exports=x
});var _=require("path").join,w=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),b=d(),v,c=w(_(__dirname,"./native.js"));E(c)?v=b:v=c;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
