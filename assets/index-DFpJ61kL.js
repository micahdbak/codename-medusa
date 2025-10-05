(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="180",$m=0,uh=1,Zm=2,xd=1,Jm=2,gi=3,Xi=0,an=1,ti=2,ki=0,Xr=1,hh=2,fh=3,dh=4,Qm=5,ur=100,eg=101,tg=102,ng=103,ig=104,rg=200,sg=201,ag=202,og=203,Pc=204,Lc=205,cg=206,lg=207,ug=208,hg=209,fg=210,dg=211,pg=212,mg=213,gg=214,Dc=0,Ic=1,Uc=2,Zr=3,Fc=4,Nc=5,Oc=6,Bc=7,zl=0,_g=1,vg=2,zi=0,xg=1,Mg=2,Sg=3,Eg=4,yg=5,Tg=6,Ag=7,Md=300,Jr=301,Qr=302,kc=303,zc=304,ao=306,Hs=1e3,dr=1001,Gc=1002,Un=1003,bg=1004,fa=1005,Dn=1006,Go=1007,pr=1008,si=1009,Sd=1010,Ed=1011,Ws=1012,Gl=1013,vr=1014,xi=1015,na=1016,Vl=1017,Hl=1018,Xs=1020,yd=35902,Td=35899,Ad=1021,bd=1022,Hn=1023,qs=1026,Ys=1027,wd=1028,Wl=1029,Rd=1030,Xl=1031,ql=1033,ka=33776,za=33777,Ga=33778,Va=33779,Vc=35840,Hc=35841,Wc=35842,Xc=35843,qc=36196,Yc=37492,jc=37496,Kc=37808,$c=37809,Zc=37810,Jc=37811,Qc=37812,el=37813,tl=37814,nl=37815,il=37816,rl=37817,sl=37818,al=37819,ol=37820,cl=37821,ll=36492,ul=36494,hl=36495,fl=36283,dl=36284,pl=36285,ml=36286,wg=3200,Rg=3201,Cd=0,Cg=1,Ni="",Cn="srgb",es="srgb-linear",Ka="linear",ot="srgb",Ar=7680,ph=519,Pg=512,Lg=513,Dg=514,Pd=515,Ig=516,Ug=517,Fg=518,Ng=519,mh=35044,gh="300 es",ii=2e3,$a=2001;class ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const Bs=Math.PI/180,js=180/Math.PI;function gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function Yl(t,e){return(t%e+e)%e}function Og(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Bg(t,e,n){return t!==e?(n-t)/(e-t):0}function ks(t,e,n){return(1-n)*t+n*e}function kg(t,e,n,i){return ks(t,e,1-Math.exp(-n*i))}function zg(t,e=1){return e-Math.abs(Yl(t,e*2)-e)}function Gg(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Vg(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Hg(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Wg(t,e){return t+Math.random()*(e-t)}function Xg(t){return t*(.5-Math.random())}function qg(t){t!==void 0&&(_h=t);let e=_h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yg(t){return t*Bs}function jg(t){return t*js}function Kg(t){return(t&t-1)===0&&t!==0}function $g(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Zg(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Jg(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),l=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*u,c*f,c*d,o*l);break;case"YZY":t.set(c*d,o*u,c*f,o*l);break;case"ZXZ":t.set(c*f,c*d,o*u,o*l);break;case"XZX":t.set(o*u,c*v,c*m,o*l);break;case"YXY":t.set(c*m,o*u,c*v,o*l);break;case"ZYZ":t.set(c*v,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const vh={DEG2RAD:Bs,RAD2DEG:js,generateUUID:gs,clamp:qe,euclideanModulo:Yl,mapLinear:Og,inverseLerp:Bg,lerp:ks,damp:kg,pingpong:zg,smoothstep:Gg,smootherstep:Vg,randInt:Hg,randFloat:Wg,randFloatSpread:Xg,seededRandom:qg,degToRad:Yg,radToDeg:jg,isPowerOfTwo:Kg,ceilPowerOfTwo:$g,floorPowerOfTwo:Zg,setQuaternionFromProperEuler:Jg,normalize:$t,denormalize:Gr};class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],M=s[a+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=M;return}if(f!==M||c!==d||l!==m||u!==v){let p=1-o;const h=c*d+l*m+u*v+f*M,b=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const P=Math.sqrt(T),w=Math.atan2(P,h*b);p=Math.sin(p*w)/P,o=Math.sin(o*w)/P}const E=o*b;if(c=c*p+d*E,l=l*p+m*E,u=u*p+v*E,f=f*p+M*E,p===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=P,l*=P,u*=P,f*=P}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+u*f+c*m-l*d,e[n+1]=c*v+u*d+l*f-o*m,e[n+2]=l*v+u*m+o*d-c*f,e[n+3]=u*v-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f+d*m*v;break;case"YZX":this._x=d*u*f+l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f-d*m*v;break;case"XZY":this._x=d*u*f-l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-n)*u)/l,d=Math.sin(n*u)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new N,xh=new ia;class ze{constructor(e,n,i,r,s,a,o,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],m=i[5],v=i[8],M=r[0],p=r[3],h=r[6],b=r[1],T=r[4],E=r[7],P=r[2],w=r[5],R=r[8];return s[0]=a*M+o*b+c*P,s[3]=a*p+o*T+c*w,s[6]=a*h+o*E+c*R,s[1]=l*M+u*b+f*P,s[4]=l*p+u*T+f*w,s[7]=l*h+u*E+f*R,s[2]=d*M+m*b+v*P,s[5]=d*p+m*T+v*w,s[8]=d*h+m*E+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,m=l*s-a*c,v=n*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(r*l-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(u*n-r*c)*M,e[5]=(r*s-o*n)*M,e[6]=m*M,e[7]=(i*c-l*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ho.makeScale(e,n)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ho.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new ze;function Ld(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Za(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Qg(){const t=Za("canvas");return t.style.display="block",t}const Mh={};function Ks(t){t in Mh||(Mh[t]=!0,console.warn(t))}function e0(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Sh=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){const t={enabled:!0,workingColorSpace:es,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?Ka:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[es]:{primaries:e,whitePoint:i,transfer:Ka,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const et=t0();function Si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class n0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=Za("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Za("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Si(n[i]/255)*255):n[i]=Si(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i0=0;class jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wo(r[a].image)):s.push(Wo(r[a]))}else s=Wo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Wo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?n0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r0=0;const Xo=new N;class Jt extends ms{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=dr,r=dr,s=Dn,a=pr,o=Hn,c=si,l=Jt.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=gs(),this.name="",this.source=new jl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xo).x}get height(){return this.source.getSize(Xo).y}get depth(){return this.source.getSize(Xo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Md;Jt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],v=c[9],M=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,E=(m+1)/2,P=(h+1)/2,w=(u+d)/4,R=(f+M)/4,U=(v+p)/4;return T>E&&T>P?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=R/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=U/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=U/s),this.set(i,r,s,n),this}let b=Math.sqrt((p-v)*(p-v)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(f-M)/b,this.z=(d-u)/b,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s0 extends ms{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Jt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new jl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends s0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Dd extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a0 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),pa.subVectors(this.max,Rs),wr.subVectors(e.a,Rs),Rr.subVectors(e.b,Rs),Cr.subVectors(e.c,Rs),Ci.subVectors(Rr,wr),Pi.subVectors(Cr,Rr),er.subVectors(wr,Cr);let n=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-er.z,er.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,er.z,0,-er.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-er.y,er.x,0];return!qo(n,wr,Rr,Cr,pa)||(n=[1,0,0,0,1,0,0,0,1],!qo(n,wr,Rr,Cr,pa))?!1:(ma.crossVectors(Ci,Pi),n=[ma.x,ma.y,ma.z],qo(n,wr,Rr,Cr,pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new N,new N,new N,new N,new N,new N,new N,new N],Bn=new N,da=new ra,wr=new N,Rr=new N,Cr=new N,Ci=new N,Pi=new N,er=new N,Rs=new N,pa=new N,ma=new N,tr=new N;function qo(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){tr.fromArray(t,s);const o=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),c=e.dot(tr),l=n.dot(tr),u=i.dot(tr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const o0=new ra,Cs=new N,Yo=new N;class Kl{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):o0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const n=Cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(Yo)),this.expandByPoint(Cs.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new N,jo=new N,ga=new N,Li=new N,Ko=new N,_a=new N,$o=new N;class c0{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){jo.copy(e).add(n).multiplyScalar(.5),ga.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(jo);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ga),o=Li.dot(this.direction),c=-Li.dot(ga),l=Li.lengthSq(),u=Math.abs(1-a*a);let f,d,m,v;if(u>0)if(f=a*c-o,d=a*o-c,v=s*u,f>=0)if(d>=-v)if(d<=v){const M=1/u;f*=M,d*=M,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(jo).addScaledVector(ga,d),m}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){Ko.subVectors(n,e),_a.subVectors(i,e),$o.crossVectors(Ko,_a);let a=this.direction.dot($o),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const c=o*this.direction.dot(_a.crossVectors(Li,_a));if(c<0)return null;const l=o*this.direction.dot(Ko.cross(Li));if(l<0||c+l>a)return null;const u=-o*Li.dot($o);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,n,i,r,s,a,o,c,l,u,f,d,m,v,M,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,f,d,m,v,M,p)}set(e,n,i,r,s,a,o,c,l,u,f,d,m,v,M,p){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,v=o*u,M=o*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=m+v*l,n[5]=d-M*l,n[9]=-o*c,n[2]=M-d*l,n[6]=v+m*l,n[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,v=l*u,M=l*f;n[0]=d+M*o,n[4]=v*o-m,n[8]=a*l,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=m*o-v,n[6]=M+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,v=l*u,M=l*f;n[0]=d-M*o,n[4]=-a*f,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*u,n[9]=M-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*f,v=o*u,M=o*f;n[0]=c*u,n[4]=v*l-m,n[8]=d*l+M,n[1]=c*f,n[5]=M*l+d,n[9]=m*l-v,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,v=o*c,M=o*l;n[0]=c*u,n[4]=M-d*f,n[8]=v*f+m,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=m*f+v,n[10]=d-M*f}else if(e.order==="XZY"){const d=a*c,m=a*l,v=o*c,M=o*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=d*f+M,n[5]=a*u,n[9]=m*f-v,n[2]=v*f-m,n[6]=o*u,n[10]=M*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,u0)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Di.crossVectors(i,fn),Di.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Di.crossVectors(i,fn)),Di.normalize(),va.crossVectors(fn,Di),r[0]=Di.x,r[4]=va.x,r[8]=fn.x,r[1]=Di.y,r[5]=va.y,r[9]=fn.y,r[2]=Di.z,r[6]=va.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],m=i[13],v=i[2],M=i[6],p=i[10],h=i[14],b=i[3],T=i[7],E=i[11],P=i[15],w=r[0],R=r[4],U=r[8],S=r[12],x=r[1],L=r[5],k=r[9],V=r[13],q=r[2],X=r[6],Y=r[10],$=r[14],z=r[3],se=r[7],ne=r[11],ue=r[15];return s[0]=a*w+o*x+c*q+l*z,s[4]=a*R+o*L+c*X+l*se,s[8]=a*U+o*k+c*Y+l*ne,s[12]=a*S+o*V+c*$+l*ue,s[1]=u*w+f*x+d*q+m*z,s[5]=u*R+f*L+d*X+m*se,s[9]=u*U+f*k+d*Y+m*ne,s[13]=u*S+f*V+d*$+m*ue,s[2]=v*w+M*x+p*q+h*z,s[6]=v*R+M*L+p*X+h*se,s[10]=v*U+M*k+p*Y+h*ne,s[14]=v*S+M*V+p*$+h*ue,s[3]=b*w+T*x+E*q+P*z,s[7]=b*R+T*L+E*X+P*se,s[11]=b*U+T*k+E*Y+P*ne,s[15]=b*S+T*V+E*$+P*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],M=e[7],p=e[11],h=e[15];return v*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*m-i*c*m)+M*(+n*c*m-n*l*d+s*a*d-r*a*m+r*l*u-s*c*u)+p*(+n*l*f-n*o*m-s*a*f+i*a*m+s*o*u-i*l*u)+h*(-r*o*u-n*c*f+n*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],M=e[13],p=e[14],h=e[15],b=f*p*l-M*d*l+M*c*m-o*p*m-f*c*h+o*d*h,T=v*d*l-u*p*l-v*c*m+a*p*m+u*c*h-a*d*h,E=u*M*l-v*f*l+v*o*m-a*M*m-u*o*h+a*f*h,P=v*f*c-u*M*c-v*o*d+a*M*d+u*o*p-a*f*p,w=n*b+i*T+r*E+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=b*R,e[1]=(M*d*s-f*p*s-M*r*m+i*p*m+f*r*h-i*d*h)*R,e[2]=(o*p*s-M*c*s+M*r*l-i*p*l-o*r*h+i*c*h)*R,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*m-i*c*m)*R,e[4]=T*R,e[5]=(u*p*s-v*d*s+v*r*m-n*p*m-u*r*h+n*d*h)*R,e[6]=(v*c*s-a*p*s-v*r*l+n*p*l+a*r*h-n*c*h)*R,e[7]=(a*d*s-u*c*s+u*r*l-n*d*l-a*r*m+n*c*m)*R,e[8]=E*R,e[9]=(v*f*s-u*M*s-v*i*m+n*M*m+u*i*h-n*f*h)*R,e[10]=(a*M*s-v*o*s+v*i*l-n*M*l-a*i*h+n*o*h)*R,e[11]=(u*o*s-a*f*s-u*i*l+n*f*l+a*i*m-n*o*m)*R,e[12]=P*R,e[13]=(u*M*r-v*f*r+v*i*d-n*M*d-u*i*p+n*f*p)*R,e[14]=(v*o*r-a*M*r-v*i*c+n*M*c+a*i*p-n*o*p)*R,e[15]=(a*f*r-u*o*r+u*i*c-n*f*c-a*i*d+n*o*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,f=o+o,d=s*l,m=s*u,v=s*f,M=a*u,p=a*f,h=o*f,b=c*l,T=c*u,E=c*f,P=i.x,w=i.y,R=i.z;return r[0]=(1-(M+h))*P,r[1]=(m+E)*P,r[2]=(v-T)*P,r[3]=0,r[4]=(m-E)*w,r[5]=(1-(d+h))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(v+T)*R,r[9]=(p-b)*R,r[10]=(1-(d+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const a=Pr.set(r[4],r[5],r[6]).length(),o=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const l=1/s,u=1/a,f=1/o;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ii,c=!1){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let v,M;if(c)v=s/(a-s),M=a*s/(a-s);else if(o===ii)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===$a)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ii,c=!1){const l=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,M;if(c)v=1/(a-s),M=a/(a-s);else if(o===ii)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===$a)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new N,kn=new Pt,l0=new N(0,0,0),u0=new N(1,1,1),Di=new N,va=new N,fn=new N,yh=new Pt,Th=new ia;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h0=0;const Ah=new N,Lr=new ia,di=new Pt,xa=new N,Ps=new N,f0=new N,d0=new ia,bh=new N(1,0,0),wh=new N(0,1,0),Rh=new N(0,0,1),Ch={type:"added"},p0={type:"removed"},Dr={type:"childadded",child:null},Zo={type:"childremoved",child:null};class jt extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new N,n=new ai,i=new ia,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new ze}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(wh,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,n){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(wh,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xa.copy(e):xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ps,xa,this.up):di.lookAt(xa,Ps,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(di),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(p0),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,f0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new N(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new N,pi=new N,Jo=new N,mi=new N,Ir=new N,Ur=new N,Ph=new N,Qo=new N,ec=new N,tc=new N,nc=new bt,ic=new bt,rc=new bt;class Gn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),pi.subVectors(i,n),Jo.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(pi),c=zn.dot(Jo),l=pi.dot(pi),u=pi.dot(Jo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*u)*d,v=(a*u-o*c)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return nc.setScalar(0),ic.setScalar(0),rc.setScalar(0),nc.fromBufferAttribute(e,n),ic.fromBufferAttribute(e,i),rc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nc,s.x),a.addScaledVector(ic,s.y),a.addScaledVector(rc,s.z),a}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),pi.subVectors(e,n),zn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ir.subVectors(r,i),Ur.subVectors(s,i),Qo.subVectors(e,i);const c=Ir.dot(Qo),l=Ur.dot(Qo);if(c<=0&&l<=0)return n.copy(i);ec.subVectors(e,r);const u=Ir.dot(ec),f=Ur.dot(ec);if(u>=0&&f<=u)return n.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Ir,a);tc.subVectors(e,s);const m=Ir.dot(tc),v=Ur.dot(tc);if(v>=0&&m<=v)return n.copy(s);const M=m*l-c*v;if(M<=0&&l>=0&&v<=0)return o=l/(l-v),n.copy(i).addScaledVector(Ur,o);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return Ph.subVectors(s,r),o=(f-u)/(f-u+(m-v)),n.copy(r).addScaledVector(Ph,o);const h=1/(p+M+d);return a=M*h,o=d*h,n.copy(i).addScaledVector(Ir,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function sc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Yl(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=sc(a,s,e+1/3),this.g=sc(a,s,e),this.b=sc(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=Ud[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return et.workingToColorSpace(qt.copy(this),e),Math.round(qe(qt.r*255,0,255))*65536+Math.round(qe(qt.g*255,0,255))*256+Math.round(qe(qt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Cn){et.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Ma);const i=ks(Ii.h,Ma.h,n),r=ks(Ii.s,Ma.s,n),s=ks(Ii.l,Ma.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ze;Ze.NAMES=Ud;let m0=0;class sa extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Xr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Lc,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pc&&(i.blendSrc=this.blendSrc),this.blendDst!==Lc&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hr extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new N,Sa=new nt;let g0=0;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mh,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sa.fromBufferAttribute(this,n),Sa.applyMatrix3(e),this.setXY(n,Sa.x,Sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gr(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gr(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gr(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mh&&(e.usage=this.usage),e}}class Fd extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Nd extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ri extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _0=0;const An=new Pt,ac=new jt,Fr=new N,dn=new ra,Ls=new ra,Gt=new N;class wi extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Nd:Fd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(dn.min,Ls.min),dn.expandByPoint(Gt),Gt.addVectors(dn.max,Ls.max),dn.expandByPoint(Gt)):(dn.expandByPoint(Ls.min),dn.expandByPoint(Ls.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Gt.fromBufferAttribute(o,l),c&&(Fr.fromBufferAttribute(e,l),Gt.add(Fr)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new N,c[U]=new N;const l=new N,u=new N,f=new N,d=new nt,m=new nt,v=new nt,M=new N,p=new N;function h(U,S,x){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,S),v.fromBufferAttribute(s,x),u.sub(l),f.sub(l),m.sub(d),v.sub(d);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(L),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(L),o[U].add(M),o[S].add(M),o[x].add(M),c[U].add(p),c[S].add(p),c[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,S=b.length;U<S;++U){const x=b[U],L=x.start,k=x.count;for(let V=L,q=L+k;V<q;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new N,E=new N,P=new N,w=new N;function R(U){P.fromBufferAttribute(r,U),w.copy(P);const S=o[U];T.copy(S),T.sub(P.multiplyScalar(P.dot(S))).normalize(),E.crossVectors(w,S);const L=E.dot(c[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,L)}for(let U=0,S=b.length;U<S;++U){const x=b[U],L=x.start,k=x.count;for(let V=L,q=L+k;V<q;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,v=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*u;for(let h=0;h<u;h++)d[v++]=l[m++]}return new Wn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Pt,nr=new c0,Ea=new Kl,Dh=new N,ya=new N,Ta=new N,Aa=new N,oc=new N,ba=new N,Ih=new N,wa=new N;class It extends jt{constructor(e=new wi,n=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ba.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(oc.fromBufferAttribute(f,e),a?ba.addScaledVector(oc,u):ba.addScaledVector(oc.sub(n),u))}n.add(ba)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(Ea.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Ea,Dh)===null||nr.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Lh.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Lh),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],h=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,P=T;E<P;E+=3){const w=o.getX(E),R=o.getX(E+1),U=o.getX(E+2);r=Ra(this,h,e,i,l,u,f,w,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=v,h=M;p<h;p+=3){const b=o.getX(p),T=o.getX(p+1),E=o.getX(p+2);r=Ra(this,a,e,i,l,u,f,b,T,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],h=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,P=T;E<P;E+=3){const w=E,R=E+1,U=E+2;r=Ra(this,h,e,i,l,u,f,w,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=v,h=M;p<h;p+=3){const b=p,T=p+1,E=p+2;r=Ra(this,a,e,i,l,u,f,b,T,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function v0(t,e,n,i,r,s,a,o){let c;if(e.side===an?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Xi,o),c===null)return null;wa.copy(o),wa.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(wa);return l<n.near||l>n.far?null:{distance:l,point:wa.clone(),object:t}}function Ra(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,ya),t.getVertexPosition(c,Ta),t.getVertexPosition(l,Aa);const u=v0(t,e,n,i,ya,Ta,Aa,Ih);if(u){const f=new N;Gn.getBarycoord(Ih,ya,Ta,Aa,f),r&&(u.uv=Gn.getInterpolatedAttribute(r,o,c,l,f,new nt)),s&&(u.uv1=Gn.getInterpolatedAttribute(s,o,c,l,f,new nt)),a&&(u.normal=Gn.getInterpolatedAttribute(a,o,c,l,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};Gn.getNormal(ya,Ta,Aa,d.normal),u.face=d,u.barycoord=f}return u}class aa extends wi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function v(M,p,h,b,T,E,P,w,R,U,S){const x=E/R,L=P/U,k=E/2,V=P/2,q=w/2,X=R+1,Y=U+1;let $=0,z=0;const se=new N;for(let ne=0;ne<Y;ne++){const ue=ne*L-V;for(let Ne=0;Ne<X;Ne++){const We=Ne*x-k;se[M]=We*b,se[p]=ue*T,se[h]=q,l.push(se.x,se.y,se.z),se[M]=0,se[p]=0,se[h]=w>0?1:-1,u.push(se.x,se.y,se.z),f.push(Ne/R),f.push(1-ne/U),$+=1}}for(let ne=0;ne<U;ne++)for(let ue=0;ue<R;ue++){const Ne=d+ue+X*ne,We=d+ue+X*(ne+1),Ke=d+(ue+1)+X*(ne+1),He=d+(ue+1)+X*ne;c.push(Ne,We,He),c.push(We,Ke,He),z+=6}o.addGroup(m,z,S),m+=z,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=ts(t[n]);for(const r in i)e[r]=i[r]}return e}function x0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Od(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const M0={clone:ts,merge:Zt};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=x0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Bd extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new N,Uh=new nt,Fh=new nt;class Pn extends Bd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,Uh,Fh),n.subVectors(Fh,Uh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Nr=-90,Or=1;class y0 extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Nr,Or,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Nr,Or,e,n);s.layers=this.layers,this.add(s);const a=new Pn(Nr,Or,e,n);a.layers=this.layers,this.add(a);const o=new Pn(Nr,Or,e,n);o.layers=this.layers,this.add(o);const c=new Pn(Nr,Or,e,n);c.layers=this.layers,this.add(c);const l=new Pn(Nr,Or,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class kd extends Jt{constructor(e=[],n=Jr,i,r,s,a,o,c,l,u){super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T0 extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kd(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new aa(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ki});s.uniforms.tEquirect.value=n;const a=new It(r,s),o=n.minFilter;return n.minFilter===pr&&(n.minFilter=Dn),new y0(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Us extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A0={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const p=n.getJointPose(M,i),h=this._getHandJoint(l,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class $l{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=n,this.far=i}clone(){return new $l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class b0 extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const lc=new N,w0=new N,R0=new ze;class or{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lc.subVectors(i,n).cross(w0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||R0.getNormalMatrix(e),r=this.coplanarPoint(lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Kl,C0=new nt(.5,.5),Ca=new N;class Zl{constructor(e=new or,n=new or,i=new or,r=new or,s=new or,a=new or){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],m=s[7],v=s[8],M=s[9],p=s[10],h=s[11],b=s[12],T=s[13],E=s[14],P=s[15];if(r[0].setComponents(l-a,m-u,h-v,P-b).normalize(),r[1].setComponents(l+a,m+u,h+v,P+b).normalize(),r[2].setComponents(l+o,m+f,h+M,P+T).normalize(),r[3].setComponents(l-o,m-f,h-M,P-T).normalize(),i)r[4].setComponents(c,d,p,E).normalize(),r[5].setComponents(l-c,m-d,h-p,P-E).normalize();else if(r[4].setComponents(l-c,m-d,h-p,P-E).normalize(),n===ii)r[5].setComponents(l+c,m+d,h+p,P+E).normalize();else if(n===$a)r[5].setComponents(c,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);const n=C0.distanceTo(e.center);return ir.radius=.7071067811865476+n,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class P0 extends Jt{constructor(e,n,i,r,s=Dn,a=Dn,o,c,l){super(e,n,i,r,s,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function f(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class zd extends Jt{constructor(e,n,i=vr,r,s,a,o=Un,c=Un,l,u=qs,f=1){if(u!==qs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Gd extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ns extends wi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=n/c,m=[],v=[],M=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let T=0;T<l;T++){const E=T*f-s;v.push(E,-b,0),M.push(0,0,1),p.push(T/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<o;b++){const T=b+l*h,E=b+l*(h+1),P=b+1+l*(h+1),w=b+1+l*h;m.push(T,E,w),m.push(E,P,w)}this.setIndex(m),this.setAttribute("position",new ri(v,3)),this.setAttribute("normal",new ri(M,3)),this.setAttribute("uv",new ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}class is extends wi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new N,d=new N,m=[],v=[],M=[],p=[];for(let h=0;h<=i;h++){const b=[],T=h/i;let E=0;h===0&&a===0?E=.5/n:h===i&&c===Math.PI&&(E=-.5/n);for(let P=0;P<=n;P++){const w=P/n;f.x=-e*Math.cos(r+w*s)*Math.sin(a+T*o),f.y=e*Math.cos(a+T*o),f.z=e*Math.sin(r+w*s)*Math.sin(a+T*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),p.push(w+E,1-T),b.push(l++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<n;b++){const T=u[h][b+1],E=u[h][b],P=u[h+1][b],w=u[h+1][b+1];(h!==0||a>0)&&m.push(T,E,w),(h!==i-1||c<Math.PI)&&m.push(E,P,w)}this.setIndex(m),this.setAttribute("position",new ri(v,3)),this.setAttribute("normal",new ri(M,3)),this.setAttribute("uv",new ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ja extends sa{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class L0 extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D0 extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vd extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const uc=new Pt,Nh=new N,Oh=new N;class I0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nh),Oh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Oh),n.updateMatrixWorld(),uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hd extends Bd{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class U0 extends I0{constructor(){super(new Hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F0 extends Vd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new U0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class N0 extends Vd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class O0 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Bh(t,e,n,i){const r=B0(i);switch(n){case Ad:return t*e;case wd:return t*e/r.components*r.byteLength;case Wl:return t*e/r.components*r.byteLength;case Rd:return t*e*2/r.components*r.byteLength;case Xl:return t*e*2/r.components*r.byteLength;case bd:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case ql:return t*e*4/r.components*r.byteLength;case ka:case za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hc:case Xc:return Math.max(t,16)*Math.max(e,8)/4;case Vc:case Wc:return Math.max(t,8)*Math.max(e,8)/2;case qc:case Yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ll:case ul:case hl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fl:case dl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function B0(t){switch(t){case si:case Sd:return{byteLength:1,components:1};case Ws:case Ed:case na:return{byteLength:2,components:1};case Vl:case Hl:return{byteLength:2,components:4};case vr:case Gl:case xi:return{byteLength:4,components:1};case yd:case Td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wd(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function k0(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=t.SHORT;else if(l instanceof Uint32Array)m=t.UNSIGNED_INT;else if(l instanceof Int32Array)m=t.INT;else if(l instanceof Int8Array)m=t.BYTE;else if(l instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(t.bindBuffer(l,o),f.length===0)t.bufferSubData(l,0,u);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],M=f[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,f[d]=M)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const M=f[m];t.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,l_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",__=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,k_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:z0,alphahash_pars_fragment:G0,alphamap_fragment:V0,alphamap_pars_fragment:H0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:q0,aomap_pars_fragment:Y0,batching_pars_vertex:j0,batching_vertex:K0,begin_vertex:$0,beginnormal_vertex:Z0,bsdfs:J0,iridescence_fragment:Q0,bumpmap_pars_fragment:e_,clipping_planes_fragment:t_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:r_,color_fragment:s_,color_pars_fragment:a_,color_pars_vertex:o_,color_vertex:c_,common:l_,cube_uv_reflection_fragment:u_,defaultnormal_vertex:h_,displacementmap_pars_vertex:f_,displacementmap_vertex:d_,emissivemap_fragment:p_,emissivemap_pars_fragment:m_,colorspace_fragment:g_,colorspace_pars_fragment:__,envmap_fragment:v_,envmap_common_pars_fragment:x_,envmap_pars_fragment:M_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:D_,envmap_vertex:E_,fog_vertex:y_,fog_pars_vertex:T_,fog_fragment:A_,fog_pars_fragment:b_,gradientmap_pars_fragment:w_,lightmap_pars_fragment:R_,lights_lambert_fragment:C_,lights_lambert_pars_fragment:P_,lights_pars_begin:L_,lights_toon_fragment:I_,lights_toon_pars_fragment:U_,lights_phong_fragment:F_,lights_phong_pars_fragment:N_,lights_physical_fragment:O_,lights_physical_pars_fragment:B_,lights_fragment_begin:k_,lights_fragment_maps:z_,lights_fragment_end:G_,logdepthbuf_fragment:V_,logdepthbuf_pars_fragment:H_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:X_,map_fragment:q_,map_pars_fragment:Y_,map_particle_fragment:j_,map_particle_pars_fragment:K_,metalnessmap_fragment:$_,metalnessmap_pars_fragment:Z_,morphinstance_vertex:J_,morphcolor_vertex:Q_,morphnormal_vertex:e1,morphtarget_pars_vertex:t1,morphtarget_vertex:n1,normal_fragment_begin:i1,normal_fragment_maps:r1,normal_pars_fragment:s1,normal_pars_vertex:a1,normal_vertex:o1,normalmap_pars_fragment:c1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:u1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:f1,opaque_fragment:d1,packing:p1,premultiplied_alpha_fragment:m1,project_vertex:g1,dithering_fragment:_1,dithering_pars_fragment:v1,roughnessmap_fragment:x1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:S1,shadowmap_pars_vertex:E1,shadowmap_vertex:y1,shadowmask_pars_fragment:T1,skinbase_vertex:A1,skinning_pars_vertex:b1,skinning_vertex:w1,skinnormal_vertex:R1,specularmap_fragment:C1,specularmap_pars_fragment:P1,tonemapping_fragment:L1,tonemapping_pars_fragment:D1,transmission_fragment:I1,transmission_pars_fragment:U1,uv_pars_fragment:F1,uv_pars_vertex:N1,uv_vertex:O1,worldpos_vertex:B1,background_vert:k1,background_frag:z1,backgroundCube_vert:G1,backgroundCube_frag:V1,cube_vert:H1,cube_frag:W1,depth_vert:X1,depth_frag:q1,distanceRGBA_vert:Y1,distanceRGBA_frag:j1,equirect_vert:K1,equirect_frag:$1,linedashed_vert:Z1,linedashed_frag:J1,meshbasic_vert:Q1,meshbasic_frag:e2,meshlambert_vert:t2,meshlambert_frag:n2,meshmatcap_vert:i2,meshmatcap_frag:r2,meshnormal_vert:s2,meshnormal_frag:a2,meshphong_vert:o2,meshphong_frag:c2,meshphysical_vert:l2,meshphysical_frag:u2,meshtoon_vert:h2,meshtoon_frag:f2,points_vert:d2,points_frag:p2,shadow_vert:m2,shadow_frag:g2,sprite_vert:_2,sprite_frag:v2},ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Qn={basic:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Zt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Zt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Zt([ae.points,ae.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Zt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Zt([ae.common,ae.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Zt([ae.sprite,ae.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Zt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Zt([ae.lights,ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Qn.physical={uniforms:Zt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Pa={r:0,b:0,g:0},rr=new ai,x2=new Pt;function M2(t,e,n,i,r,s,a){const o=new Ze(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?n:e).get(E)),E}function M(T){let E=!1;const P=v(T);P===null?h(o,c):P&&P.isColor&&(h(P,1),E=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(T,E){const P=v(E);P&&(P.isCubeTexture||P.mapping===ao)?(u===void 0&&(u=new It(new aa(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:ts(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),rr.copy(E.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(x2.makeRotationFromEuler(rr)),u.material.toneMapped=et.getTransfer(P.colorSpace)!==ot,(f!==P||d!==P.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,m=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new It(new ns(2,2),new qi({name:"BackgroundMaterial",uniforms:ts(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=et.getTransfer(P.colorSpace)!==ot,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||m!==t.toneMapping)&&(l.material.needsUpdate=!0,f=P,d=P.version,m=t.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,E){T.getRGB(Pa,Od(t)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,E,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(o,c)},render:M,addToRenderList:p,dispose:b}}function S2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,L,k,V,q){let X=!1;const Y=f(V,k,L);s!==Y&&(s=Y,l(s.object)),X=m(x,V,k,q),X&&v(x,V,k,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(x,L,k,V),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return t.createVertexArray()}function l(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,L,k){const V=k.wireframe===!0;let q=i[x.id];q===void 0&&(q={},i[x.id]=q);let X=q[L.id];X===void 0&&(X={},q[L.id]=X);let Y=X[V];return Y===void 0&&(Y=d(c()),X[V]=Y),Y}function d(x){const L=[],k=[],V=[];for(let q=0;q<n;q++)L[q]=0,k[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:V,object:x,attributes:{},index:null}}function m(x,L,k,V){const q=s.attributes,X=L.attributes;let Y=0;const $=k.getAttributes();for(const z in $)if($[z].location>=0){const ne=q[z];let ue=X[z];if(ue===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;Y++}return s.attributesNum!==Y||s.index!==V}function v(x,L,k,V){const q={},X=L.attributes;let Y=0;const $=k.getAttributes();for(const z in $)if($[z].location>=0){let ne=X[z];ne===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),q[z]=ue,Y++}s.attributes=q,s.attributesNum=Y,s.index=V}function M(){const x=s.newAttributes;for(let L=0,k=x.length;L<k;L++)x[L]=0}function p(x){h(x,0)}function h(x,L){const k=s.newAttributes,V=s.enabledAttributes,q=s.attributeDivisors;k[x]=1,V[x]===0&&(t.enableVertexAttribArray(x),V[x]=1),q[x]!==L&&(t.vertexAttribDivisor(x,L),q[x]=L)}function b(){const x=s.newAttributes,L=s.enabledAttributes;for(let k=0,V=L.length;k<V;k++)L[k]!==x[k]&&(t.disableVertexAttribArray(k),L[k]=0)}function T(x,L,k,V,q,X,Y){Y===!0?t.vertexAttribIPointer(x,L,k,q,X):t.vertexAttribPointer(x,L,k,V,q,X)}function E(x,L,k,V){M();const q=V.attributes,X=k.getAttributes(),Y=L.defaultAttributeValues;for(const $ in X){const z=X[$];if(z.location>=0){let se=q[$];if(se===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){const ne=se.normalized,ue=se.itemSize,Ne=e.get(se);if(Ne===void 0)continue;const We=Ne.buffer,Ke=Ne.type,He=Ne.bytesPerElement,H=Ke===t.INT||Ke===t.UNSIGNED_INT||se.gpuType===Gl;if(se.isInterleavedBufferAttribute){const K=se.data,pe=K.stride,Fe=se.offset;if(K.isInstancedInterleavedBuffer){for(let we=0;we<z.locationSize;we++)h(z.location+we,K.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let we=0;we<z.locationSize;we++)p(z.location+we);t.bindBuffer(t.ARRAY_BUFFER,We);for(let we=0;we<z.locationSize;we++)T(z.location+we,ue/z.locationSize,Ke,ne,pe*He,(Fe+ue/z.locationSize*we)*He,H)}else{if(se.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)h(z.location+K,se.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let K=0;K<z.locationSize;K++)p(z.location+K);t.bindBuffer(t.ARRAY_BUFFER,We);for(let K=0;K<z.locationSize;K++)T(z.location+K,ue/z.locationSize,Ke,ne,ue*He,ue/z.locationSize*K*He,H)}}else if(Y!==void 0){const ne=Y[$];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(z.location,ne);break;case 3:t.vertexAttrib3fv(z.location,ne);break;case 4:t.vertexAttrib4fv(z.location,ne);break;default:t.vertexAttrib1fv(z.location,ne)}}}}b()}function P(){U();for(const x in i){const L=i[x];for(const k in L){const V=L[k];for(const q in V)u(V[q].object),delete V[q];delete L[k]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const L=i[x.id];for(const k in L){const V=L[k];for(const q in V)u(V[q].object),delete V[q];delete L[k]}delete i[x.id]}function R(x){for(const L in i){const k=i[L];if(k[x.id]===void 0)continue;const V=k[x.id];for(const q in V)u(V[q].object),delete V[q];delete k[x.id]}}function U(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function E2(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];n.update(m,i,1)}function c(l,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let v=0;for(let M=0;M<f;M++)v+=u[M]*d[M];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function y2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Hn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==si&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xi&&!U)}function c(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:P,maxSamples:w}}function T2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new or,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):l();else{const b=s?0:i,T=b*4;let E=h.clippingState||null;c.value=E,E=u(v,d,T,m);for(let P=0;P!==T;++P)E[P]=n[P];h.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,v){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,v!==!0||p===null){const h=m+M*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,E=m;T!==M;++T,E+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function A2(t){let e=new WeakMap;function n(a,o){return o===kc?a.mapping=Jr:o===zc&&(a.mapping=Qr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===kc||o===zc)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new T0(c.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Vr=4,kh=[.125,.215,.35,.446,.526,.582],fr=20,hc=new Hd,zh=new Ze;let fc=null,dc=0,pc=0,mc=!1;const cr=(1+Math.sqrt(5))/2,Br=1/cr,Gh=[new N(-cr,Br,0),new N(cr,Br,0),new N(-Br,0,cr),new N(Br,0,cr),new N(0,cr,-Br),new N(0,cr,Br),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],b2=new N;class Vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=b2}=s;fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,dc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:na,format:Hn,colorSpace:es,depthBuffer:!1},r=Hh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w2(s)),this._blurMaterial=R2(s,e,n)}return r}_compileMaterial(e){const n=new It(this._lodPlanes[0],e);this._renderer.compile(n,hc)}_sceneToCubeUV(e,n,i,r,s){const c=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(zh),f.toneMapping=zi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const M=new hr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),p=new It(new aa,M);let h=!1;const b=e.background;b?b.isColor&&(M.color.copy(b),e.background=null,h=!0):(M.color.copy(zh),h=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const P=this._cubeSize;La(r,E*P,T>2?P:0,P,P),f.setRenderTarget(r),h&&f.render(p,c),f.render(e,c)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;La(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,hc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gh[(r-s-1)%Gh.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new It(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),M=s/v,p=isFinite(s)?1+Math.floor(u*M):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const h=[];let b=0;for(let R=0;R<fr;++R){const U=R/M,S=Math.exp(-U*U/2);h.push(S),R===0?b+=S:R<p&&(b+=2*S)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=v,d.mipInt.value=T-i;const E=this._sizeLods[r],P=3*E*(r>T-Vr?r-T+Vr:0),w=4*(this._cubeSize-E);La(n,P,w,3*E,2*E),c.setRenderTarget(n),c.render(f,hc)}}function w2(t){const e=[],n=[],i=[];let r=t;const s=t-Vr+1+kh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-Vr?c=kh[a-t+Vr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,M=3,p=2,h=1,b=new Float32Array(M*v*m),T=new Float32Array(p*v*m),E=new Float32Array(h*v*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,U=w>2?0:-1,S=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];b.set(S,M*v*w),T.set(d,p*v*w);const x=[w,w,w,w,w,w];E.set(x,h*v*w)}const P=new wi;P.setAttribute("position",new Wn(b,M)),P.setAttribute("uv",new Wn(T,p)),P.setAttribute("faceIndex",new Wn(E,h)),e.push(P),r>Vr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hh(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function R2(t,e,n){const i=new Float32Array(fr),r=new N(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Wh(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Xh(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===kc||c===zc,u=c===Jr||c===Qr;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Vh(t)),f=l?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Vh(t)),f=l?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function P2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ks("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L2(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,v=f.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let T=0,E=b.length;T<E;T+=3){const P=b[T+0],w=b[T+1],R=b[T+2];d.push(P,w,w,R,R,P)}}else if(v!==void 0){const b=v.array;M=v.version;for(let T=0,E=b.length/3-1;T<E;T+=3){const P=T+0,w=T+1,R=T+2;d.push(P,w,w,R,R,P)}}else return;const p=new(Ld(d)?Nd:Fd)(d,1);p.version=M;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function D2(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){t.drawElements(i,m,s,d*a),n.update(m,i,1)}function l(d,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,d*a,v),n.update(m,i,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];n.update(p,i,1)}function f(d,m,v,M){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/a,m[h],M[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,M,0,v);let h=0;for(let b=0;b<v;b++)h+=m[b]*M[b];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function I2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function U2(t,e,n){const i=new WeakMap,r=new bt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let x=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),M===!0&&(E=2),p===!0&&(E=3);let P=o.attributes.position.count*E,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*w*4*f),U=new Dd(R,P,w,f);U.type=xi,U.needsUpdate=!0;const S=E*4;for(let L=0;L<f;L++){const k=h[L],V=b[L],q=T[L],X=P*w*4*L;for(let Y=0;Y<k.count;Y++){const $=Y*S;v===!0&&(r.fromBufferAttribute(k,Y),R[X+$+0]=r.x,R[X+$+1]=r.y,R[X+$+2]=r.z,R[X+$+3]=0),M===!0&&(r.fromBufferAttribute(V,Y),R[X+$+4]=r.x,R[X+$+5]=r.y,R[X+$+6]=r.z,R[X+$+7]=0),p===!0&&(r.fromBufferAttribute(q,Y),R[X+$+8]=r.x,R[X+$+9]=r.y,R[X+$+10]=r.z,R[X+$+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new nt(P,w)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const M=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",M),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function F2(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}const Xd=new Jt,qh=new zd(1,1),qd=new Dd,Yd=new a0,jd=new kd,Yh=[],jh=[],Kh=new Float32Array(16),$h=new Float32Array(9),Zh=new Float32Array(4);function _s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Yh[r];if(s===void 0&&(s=new Float32Array(r),Yh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oo(t,e){let n=jh[e];n===void 0&&(n=new Int32Array(e),jh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function N2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function z2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Zh.set(i),t.uniformMatrix2fv(this.addr,!1,Zh),kt(n,i)}}function G2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;$h.set(i),t.uniformMatrix3fv(this.addr,!1,$h),kt(n,i)}}function V2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Kh.set(i),t.uniformMatrix4fv(this.addr,!1,Kh),kt(n,i)}}function H2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function Y2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function K2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Z2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qh.compareFunction=Pd,s=qh):s=Xd,n.setTexture2D(e||s,r)}function J2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Yd,r)}function Q2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jd,r)}function ev(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||qd,r)}function tv(t){switch(t){case 5126:return N2;case 35664:return O2;case 35665:return B2;case 35666:return k2;case 35674:return z2;case 35675:return G2;case 35676:return V2;case 5124:case 35670:return H2;case 35667:case 35671:return W2;case 35668:case 35672:return X2;case 35669:case 35673:return q2;case 5125:return Y2;case 36294:return j2;case 36295:return K2;case 36296:return $2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return J2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return ev}}function nv(t,e){t.uniform1fv(this.addr,e)}function iv(t,e){const n=_s(e,this.size,2);t.uniform2fv(this.addr,n)}function rv(t,e){const n=_s(e,this.size,3);t.uniform3fv(this.addr,n)}function sv(t,e){const n=_s(e,this.size,4);t.uniform4fv(this.addr,n)}function av(t,e){const n=_s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ov(t,e){const n=_s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cv(t,e){const n=_s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lv(t,e){t.uniform1iv(this.addr,e)}function uv(t,e){t.uniform2iv(this.addr,e)}function hv(t,e){t.uniform3iv(this.addr,e)}function fv(t,e){t.uniform4iv(this.addr,e)}function dv(t,e){t.uniform1uiv(this.addr,e)}function pv(t,e){t.uniform2uiv(this.addr,e)}function mv(t,e){t.uniform3uiv(this.addr,e)}function gv(t,e){t.uniform4uiv(this.addr,e)}function _v(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Xd,s[a])}function vv(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Yd,s[a])}function xv(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||jd,s[a])}function Mv(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||qd,s[a])}function Sv(t){switch(t){case 5126:return nv;case 35664:return iv;case 35665:return rv;case 35666:return sv;case 35674:return av;case 35675:return ov;case 35676:return cv;case 5124:case 35670:return lv;case 35667:case 35671:return uv;case 35668:case 35672:return hv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return Mv}}class Ev{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tv(n.type)}}class yv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Sv(n.type)}}class Tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function Jh(t,e){t.seq.push(e),t.map[e.id]=e}function Av(t,e,n){const i=t.name,r=i.length;for(gc.lastIndex=0;;){const s=gc.exec(i),a=gc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Jh(n,l===void 0?new Ev(o,t,e):new yv(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Tv(o),Jh(n,f)),n=f}}}class Ha{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Av(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Qh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bv=37297;let wv=0;function Rv(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const ef=new ze;function Cv(t){et._getMatrix(ef,et.workingColorSpace,t);const e=`mat3( ${ef.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Ka:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function tf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Rv(t.getShaderSource(e),o)}else return s}function Pv(t,e){const n=Cv(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Lv(t,e){let n;switch(e){case xg:n="Linear";break;case Mg:n="Reinhard";break;case Sg:n="Cineon";break;case Eg:n="ACESFilmic";break;case Tg:n="AgX";break;case Ag:n="Neutral";break;case yg:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Da=new N;function Dv(){et.getLuminanceCoefficients(Da);const t=Da.x.toFixed(4),e=Da.y.toFixed(4),n=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Uv(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Fv(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Fs(t){return t!==""}function nf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(t){return t.replace(Nv,Bv)}const Ov=new Map;function Bv(t,e){let n=Ve[e];if(n===void 0){const i=Ov.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gl(n)}const kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(t){return t.replace(kv,zv)}function zv(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function af(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gv(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Vv(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hv(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function Wv(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zl:e="ENVMAP_BLENDING_MULTIPLY";break;case _g:e="ENVMAP_BLENDING_MIX";break;case vg:e="ENVMAP_BLENDING_ADD";break}return e}function Xv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function qv(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Gv(n),l=Vv(n),u=Hv(n),f=Wv(n),d=Xv(n),m=Iv(n),v=Uv(s),M=r.createProgram();let p,h,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fs).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fs).join(`
`),h.length>0&&(h+=`
`)):(p=[af(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),h=[af(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==zi?Lv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Pv("linearToOutputTexel",n.outputColorSpace),Dv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fs).join(`
`)),a=gl(a),a=nf(a,n),a=rf(a,n),o=gl(o),o=nf(o,n),o=rf(o,n),a=sf(a),o=sf(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",n.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=b+p+a,E=b+h+o,P=Qh(r,r.VERTEX_SHADER,T),w=Qh(r,r.FRAGMENT_SHADER,E);r.attachShader(M,P),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(L){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",V=r.getShaderInfoLog(P)||"",q=r.getShaderInfoLog(w)||"",X=k.trim(),Y=V.trim(),$=q.trim();let z=!0,se=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,P,w);else{const ne=tf(r,P,"vertex"),ue=tf(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ne+`
`+ue)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||$==="")&&(se=!1);se&&(L.diagnostics={runnable:z,programLog:X,vertexShader:{log:Y,prefix:p},fragmentShader:{log:$,prefix:h}})}r.deleteShader(P),r.deleteShader(w),U=new Ha(r,M),S=Fv(r,M)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,bv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=w,this}let Yv=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Kv(e),n.set(e,i)),i}}class Kv{constructor(e){this.id=Yv++,this.code=e,this.usedTimes=0}}function $v(t,e,n,i,r,s,a){const o=new Id,c=new jv,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,x,L,k,V){const q=k.fog,X=V.geometry,Y=S.isMeshStandardMaterial?k.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),z=$&&$.mapping===ao?$.image.height:null,se=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=ne!==void 0?ne.length:0;let Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let We,Ke,He,H;if(se){const it=Qn[se];We=it.vertexShader,Ke=it.fragmentShader}else We=S.vertexShader,Ke=S.fragmentShader,c.update(S),He=c.getVertexShaderID(S),H=c.getFragmentShaderID(S);const K=t.getRenderTarget(),pe=t.state.buffers.depth.getReversed(),Fe=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,$e=!!S.map,Wt=!!S.matcap,A=!!$,gt=!!S.aoMap,Be=!!S.lightMap,Ie=!!S.bumpMap,ve=!!S.normalMap,_t=!!S.displacementMap,xe=!!S.emissiveMap,Ge=!!S.metalnessMap,zt=!!S.roughnessMap,Rt=S.anisotropy>0,y=S.clearcoat>0,g=S.dispersion>0,F=S.iridescence>0,W=S.sheen>0,Z=S.transmission>0,G=Rt&&!!S.anisotropyMap,be=y&&!!S.clearcoatMap,ie=y&&!!S.clearcoatNormalMap,Se=y&&!!S.clearcoatRoughnessMap,Ee=F&&!!S.iridescenceMap,ee=F&&!!S.iridescenceThicknessMap,le=W&&!!S.sheenColorMap,De=W&&!!S.sheenRoughnessMap,ye=!!S.specularMap,oe=!!S.specularColorMap,ke=!!S.specularIntensityMap,C=Z&&!!S.transmissionMap,te=Z&&!!S.thicknessMap,re=!!S.gradientMap,de=!!S.alphaMap,J=S.alphaTest>0,j=!!S.alphaHash,_e=!!S.extensions;let Oe=zi;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Oe=t.toneMapping);const ut={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:Ke,defines:S.defines,customVertexShaderID:He,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&V.instanceColor!==null,instancingMorph:Fe&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:es,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:Wt,envMap:A,envMapMode:A&&$.mapping,envMapCubeUVHeight:z,aoMap:gt,lightMap:Be,bumpMap:Ie,normalMap:ve,displacementMap:d&&_t,emissiveMap:xe,normalMapObjectSpace:ve&&S.normalMapType===Cg,normalMapTangentSpace:ve&&S.normalMapType===Cd,metalnessMap:Ge,roughnessMap:zt,anisotropy:Rt,anisotropyMap:G,clearcoat:y,clearcoatMap:be,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,dispersion:g,iridescence:F,iridescenceMap:Ee,iridescenceThicknessMap:ee,sheen:W,sheenColorMap:le,sheenRoughnessMap:De,specularMap:ye,specularColorMap:oe,specularIntensityMap:ke,transmission:Z,transmissionMap:C,thicknessMap:te,gradientMap:re,opaque:S.transparent===!1&&S.blending===Xr&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:j,combine:S.combine,mapUv:$e&&M(S.map.channel),aoMapUv:gt&&M(S.aoMap.channel),lightMapUv:Be&&M(S.lightMap.channel),bumpMapUv:Ie&&M(S.bumpMap.channel),normalMapUv:ve&&M(S.normalMap.channel),displacementMapUv:_t&&M(S.displacementMap.channel),emissiveMapUv:xe&&M(S.emissiveMap.channel),metalnessMapUv:Ge&&M(S.metalnessMap.channel),roughnessMapUv:zt&&M(S.roughnessMap.channel),anisotropyMapUv:G&&M(S.anisotropyMap.channel),clearcoatMapUv:be&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&M(S.sheenRoughnessMap.channel),specularMapUv:ye&&M(S.specularMap.channel),specularColorMapUv:oe&&M(S.specularColorMap.channel),specularIntensityMapUv:ke&&M(S.specularIntensityMap.channel),transmissionMapUv:C&&M(S.transmissionMap.channel),thicknessMapUv:te&&M(S.thicknessMap.channel),alphaMapUv:de&&M(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ve||Rt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&($e||de),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Oe,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:xe&&S.emissiveMap.isVideoTexture===!0&&et.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ti,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:_e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&S.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function h(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)x.push(L),x.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(b(x,S),T(x,S),x.push(t.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function b(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const x=v[S.type];let L;if(x){const k=Qn[x];L=M0.clone(k.uniforms)}else L=S.uniforms;return L}function P(S,x){let L;for(let k=0,V=u.length;k<V;k++){const q=u[k];if(q.cacheKey===x){L=q,++L.usedTimes;break}}return L===void 0&&(L=new qv(t,x,S,s),u.push(L)),L}function w(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function R(S){c.remove(S)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:P,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:U}}function Zv(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Jv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function of(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,m,v,M,p){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:M,group:p},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=M,h.group=p),e++,h}function o(f,d,m,v,M,p){const h=a(f,d,m,v,M,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function c(f,d,m,v,M,p){const h=a(f,d,m,v,M,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function l(f,d){n.length>1&&n.sort(f||Jv),i.length>1&&i.sort(d||of),r.length>1&&r.sort(d||of)}function u(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Qv(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new cf,t.set(i,[a])):r>=s.length?(a=new cf,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ex(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Ze};break;case"SpotLight":n={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function tx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nx=0;function ix(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rx(t){const e=new ex,n=tx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new Pt,a=new Pt;function o(l){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,v=0,M=0,p=0,h=0,b=0,T=0,E=0,P=0,w=0,R=0;l.sort(ix);for(let S=0,x=l.length;S<x;S++){const L=l[S],k=L.color,V=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*V,f+=k.g*V,d+=k.b*V;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],V);R++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,z=n.get(L);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=L.shadow.matrix,b++}i.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(k).multiplyScalar(V),Y.distance=q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[M]=Y;const $=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,$.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[M]=$.matrix,L.castShadow){const z=n.get(L);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=X,E++}M++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(k).multiplyScalar(V),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=Y,p++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const $=L.shadow,z=n.get(L);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,z.shadowCameraNear=$.camera.near,z.shadowCameraFar=$.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=X,i.pointShadowMatrix[v]=L.shadow.matrix,T++}i.point[v]=Y,v++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(V),Y.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[h]=Y,h++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==m||U.pointLength!==v||U.spotLength!==M||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==E||U.numSpotMaps!==P||U.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,U.directionalLength=m,U.pointLength=v,U.spotLength=M,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=E,U.numSpotMaps=P,U.numLightProbes=R,i.version=nx++)}function c(l,u){let f=0,d=0,m=0,v=0,M=0;const p=u.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){const T=l[h];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(T.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),M++}}}return{setup:o,setupView:c,state:i}}function lf(t){const e=new rx(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function sx(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new lf(t),e.set(r,[o])):s>=a.length?(o=new lf(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cx(t,e,n){let i=new Zl;const r=new nt,s=new nt,a=new bt,o=new L0({depthPacking:Rg}),c=new D0,l={},u=n.maxTextureSize,f={[Xi]:an,[an]:Xi,[ti]:ti},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:ax,fragmentShader:ox}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new wi;v.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new It(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let h=this.type;this.render=function(w,R,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=t.getRenderTarget(),x=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),k=t.state;k.setBlending(ki),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=h!==gi&&this.type===gi,q=h===gi&&this.type!==gi;for(let X=0,Y=w.length;X<Y;X++){const $=w[X],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const se=z.getFrameExtents();if(r.multiply(se),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||V===!0||q===!0){const ue=this.type!==gi?{minFilter:Un,magFilter:Un}:{};z.map!==null&&z.map.dispose(),z.map=new xr(r.x,r.y,ue),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ne=z.getViewportCount();for(let ue=0;ue<ne;ue++){const Ne=z.getViewport(ue);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),k.viewport(a),z.updateMatrices($,ue),i=z.getFrustum(),E(R,U,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===gi&&b(z,U),z.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(S,x,L)};function b(w,R){const U=e.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xr(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,U,d,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,U,m,M,null)}function T(w,R,U,S){let x=null;const L=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=U.isPointLight===!0?c:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=x.uuid,V=R.uuid;let q=l[k];q===void 0&&(q={},l[k]=q);let X=q[V];X===void 0&&(X=x.clone(),q[V]=X,R.addEventListener("dispose",P)),x=X}if(x.visible=R.visible,x.wireframe=R.wireframe,S===gi?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=t.properties.get(x);k.light=U}return x}function E(w,R,U,S,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===gi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const V=e.update(w),q=w.material;if(Array.isArray(q)){const X=V.groups;for(let Y=0,$=X.length;Y<$;Y++){const z=X[Y],se=q[z.materialIndex];if(se&&se.visible){const ne=T(w,se,S,x);w.onBeforeShadow(t,w,R,U,V,ne,z),t.renderBufferDirect(U,null,V,ne,w,z),w.onAfterShadow(t,w,R,U,V,ne,z)}}}else if(q.visible){const X=T(w,q,S,x);w.onBeforeShadow(t,w,R,U,V,X,null),t.renderBufferDirect(U,null,V,X,w,null),w.onAfterShadow(t,w,R,U,V,X,null)}}const k=w.children;for(let V=0,q=k.length;V<q;V++)E(k[V],R,U,S,x)}function P(w){w.target.removeEventListener("dispose",P);for(const U in l){const S=l[U],x=w.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const lx={[Dc]:Ic,[Uc]:Oc,[Fc]:Bc,[Zr]:Nc,[Ic]:Dc,[Oc]:Uc,[Bc]:Fc,[Nc]:Zr};function ux(t,e){function n(){let C=!1;const te=new bt;let re=null;const de=new bt(0,0,0,0);return{setMask:function(J){re!==J&&!C&&(t.colorMask(J,J,J,J),re=J)},setLocked:function(J){C=J},setClear:function(J,j,_e,Oe,ut){ut===!0&&(J*=Oe,j*=Oe,_e*=Oe),te.set(J,j,_e,Oe),de.equals(te)===!1&&(t.clearColor(J,j,_e,Oe),de.copy(te))},reset:function(){C=!1,re=null,de.set(-1,0,0,0)}}}function i(){let C=!1,te=!1,re=null,de=null,J=null;return{setReversed:function(j){if(te!==j){const _e=e.get("EXT_clip_control");j?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),te=j;const Oe=J;J=null,this.setClear(Oe)}},getReversed:function(){return te},setTest:function(j){j?K(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(j){re!==j&&!C&&(t.depthMask(j),re=j)},setFunc:function(j){if(te&&(j=lx[j]),de!==j){switch(j){case Dc:t.depthFunc(t.NEVER);break;case Ic:t.depthFunc(t.ALWAYS);break;case Uc:t.depthFunc(t.LESS);break;case Zr:t.depthFunc(t.LEQUAL);break;case Fc:t.depthFunc(t.EQUAL);break;case Nc:t.depthFunc(t.GEQUAL);break;case Oc:t.depthFunc(t.GREATER);break;case Bc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=j}},setLocked:function(j){C=j},setClear:function(j){J!==j&&(te&&(j=1-j),t.clearDepth(j),J=j)},reset:function(){C=!1,re=null,de=null,J=null,te=!1}}}function r(){let C=!1,te=null,re=null,de=null,J=null,j=null,_e=null,Oe=null,ut=null;return{setTest:function(it){C||(it?K(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(it){te!==it&&!C&&(t.stencilMask(it),te=it)},setFunc:function(it,ui,Kn){(re!==it||de!==ui||J!==Kn)&&(t.stencilFunc(it,ui,Kn),re=it,de=ui,J=Kn)},setOp:function(it,ui,Kn){(j!==it||_e!==ui||Oe!==Kn)&&(t.stencilOp(it,ui,Kn),j=it,_e=ui,Oe=Kn)},setLocked:function(it){C=it},setClear:function(it){ut!==it&&(t.clearStencil(it),ut=it)},reset:function(){C=!1,te=null,re=null,de=null,J=null,j=null,_e=null,Oe=null,ut=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,m=[],v=null,M=!1,p=null,h=null,b=null,T=null,E=null,P=null,w=null,R=new Ze(0,0,0),U=0,S=!1,x=null,L=null,k=null,V=null,q=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=$>=2);let se=null,ne={};const ue=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),We=new bt().fromArray(ue),Ke=new bt().fromArray(Ne);function He(C,te,re,de){const J=new Uint8Array(4),j=t.createTexture();t.bindTexture(C,j),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<re;_e++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,J):t.texImage2D(te+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,J);return j}const H={};H[t.TEXTURE_2D]=He(t.TEXTURE_2D,t.TEXTURE_2D,1),H[t.TEXTURE_CUBE_MAP]=He(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[t.TEXTURE_2D_ARRAY]=He(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),H[t.TEXTURE_3D]=He(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(t.DEPTH_TEST),a.setFunc(Zr),Ie(!1),ve(uh),K(t.CULL_FACE),gt(ki);function K(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function pe(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function Fe(C,te){return f[C]!==te?(t.bindFramebuffer(C,te),f[C]=te,C===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=te),C===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=te),!0):!1}function we(C,te){let re=m,de=!1;if(C){re=d.get(te),re===void 0&&(re=[],d.set(te,re));const J=C.textures;if(re.length!==J.length||re[0]!==t.COLOR_ATTACHMENT0){for(let j=0,_e=J.length;j<_e;j++)re[j]=t.COLOR_ATTACHMENT0+j;re.length=J.length,de=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,de=!0);de&&t.drawBuffers(re)}function $e(C){return v!==C?(t.useProgram(C),v=C,!0):!1}const Wt={[ur]:t.FUNC_ADD,[eg]:t.FUNC_SUBTRACT,[tg]:t.FUNC_REVERSE_SUBTRACT};Wt[ng]=t.MIN,Wt[ig]=t.MAX;const A={[rg]:t.ZERO,[sg]:t.ONE,[ag]:t.SRC_COLOR,[Pc]:t.SRC_ALPHA,[fg]:t.SRC_ALPHA_SATURATE,[ug]:t.DST_COLOR,[cg]:t.DST_ALPHA,[og]:t.ONE_MINUS_SRC_COLOR,[Lc]:t.ONE_MINUS_SRC_ALPHA,[hg]:t.ONE_MINUS_DST_COLOR,[lg]:t.ONE_MINUS_DST_ALPHA,[dg]:t.CONSTANT_COLOR,[pg]:t.ONE_MINUS_CONSTANT_COLOR,[mg]:t.CONSTANT_ALPHA,[gg]:t.ONE_MINUS_CONSTANT_ALPHA};function gt(C,te,re,de,J,j,_e,Oe,ut,it){if(C===ki){M===!0&&(pe(t.BLEND),M=!1);return}if(M===!1&&(K(t.BLEND),M=!0),C!==Qm){if(C!==p||it!==S){if((h!==ur||E!==ur)&&(t.blendEquation(t.FUNC_ADD),h=ur,E=ur),it)switch(C){case Xr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hh:t.blendFunc(t.ONE,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Xr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case fh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,T=null,P=null,w=null,R.set(0,0,0),U=0,p=C,S=it}return}J=J||te,j=j||re,_e=_e||de,(te!==h||J!==E)&&(t.blendEquationSeparate(Wt[te],Wt[J]),h=te,E=J),(re!==b||de!==T||j!==P||_e!==w)&&(t.blendFuncSeparate(A[re],A[de],A[j],A[_e]),b=re,T=de,P=j,w=_e),(Oe.equals(R)===!1||ut!==U)&&(t.blendColor(Oe.r,Oe.g,Oe.b,ut),R.copy(Oe),U=ut),p=C,S=!1}function Be(C,te){C.side===ti?pe(t.CULL_FACE):K(t.CULL_FACE);let re=C.side===an;te&&(re=!re),Ie(re),C.blending===Xr&&C.transparent===!1?gt(ki):gt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const de=C.stencilWrite;o.setTest(de),de&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),xe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){x!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),x=C)}function ve(C){C!==$m?(K(t.CULL_FACE),C!==L&&(C===uh?t.cullFace(t.BACK):C===Zm?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),L=C}function _t(C){C!==k&&(Y&&t.lineWidth(C),k=C)}function xe(C,te,re){C?(K(t.POLYGON_OFFSET_FILL),(V!==te||q!==re)&&(t.polygonOffset(te,re),V=te,q=re)):pe(t.POLYGON_OFFSET_FILL)}function Ge(C){C?K(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function zt(C){C===void 0&&(C=t.TEXTURE0+X-1),se!==C&&(t.activeTexture(C),se=C)}function Rt(C,te,re){re===void 0&&(se===null?re=t.TEXTURE0+X-1:re=se);let de=ne[re];de===void 0&&(de={type:void 0,texture:void 0},ne[re]=de),(de.type!==C||de.texture!==te)&&(se!==re&&(t.activeTexture(re),se=re),t.bindTexture(C,te||H[C]),de.type=C,de.texture=te)}function y(){const C=ne[se];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function W(){try{t.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{t.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{t.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{t.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{t.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{t.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{t.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(C){We.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),We.copy(C))}function De(C){Ke.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),Ke.copy(C))}function ye(C,te){let re=l.get(te);re===void 0&&(re=new WeakMap,l.set(te,re));let de=re.get(C);de===void 0&&(de=t.getUniformBlockIndex(te,C.name),re.set(C,de))}function oe(C,te){const de=l.get(te).get(C);c.get(te)!==de&&(t.uniformBlockBinding(te,de,C.__bindingPointIndex),c.set(te,de))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},se=null,ne={},f={},d=new WeakMap,m=[],v=null,M=!1,p=null,h=null,b=null,T=null,E=null,P=null,w=null,R=new Ze(0,0,0),U=0,S=!1,x=null,L=null,k=null,V=null,q=null,We.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:pe,bindFramebuffer:Fe,drawBuffers:we,useProgram:$e,setBlending:gt,setMaterial:Be,setFlipSided:Ie,setCullFace:ve,setLineWidth:_t,setPolygonOffset:xe,setScissorTest:Ge,activeTexture:zt,bindTexture:Rt,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:Ee,texImage3D:ee,updateUBOMapping:ye,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:Se,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:be,scissor:le,viewport:De,reset:ke}}function hx(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return m?new OffscreenCanvas(y,g):Za("canvas")}function M(y,g,F){let W=1;const Z=Rt(y);if((Z.width>F||Z.height>F)&&(W=F/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const G=Math.floor(W*Z.width),be=Math.floor(W*Z.height);f===void 0&&(f=v(G,be));const ie=g?v(G,be):f;return ie.width=G,ie.height=be,ie.getContext("2d").drawImage(y,0,0,G,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+be+")."),ie}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){t.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(y,g,F,W,Z=!1){if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let G=g;if(g===t.RED&&(F===t.FLOAT&&(G=t.R32F),F===t.HALF_FLOAT&&(G=t.R16F),F===t.UNSIGNED_BYTE&&(G=t.R8)),g===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(G=t.R8UI),F===t.UNSIGNED_SHORT&&(G=t.R16UI),F===t.UNSIGNED_INT&&(G=t.R32UI),F===t.BYTE&&(G=t.R8I),F===t.SHORT&&(G=t.R16I),F===t.INT&&(G=t.R32I)),g===t.RG&&(F===t.FLOAT&&(G=t.RG32F),F===t.HALF_FLOAT&&(G=t.RG16F),F===t.UNSIGNED_BYTE&&(G=t.RG8)),g===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(G=t.RG8UI),F===t.UNSIGNED_SHORT&&(G=t.RG16UI),F===t.UNSIGNED_INT&&(G=t.RG32UI),F===t.BYTE&&(G=t.RG8I),F===t.SHORT&&(G=t.RG16I),F===t.INT&&(G=t.RG32I)),g===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(G=t.RGB8UI),F===t.UNSIGNED_SHORT&&(G=t.RGB16UI),F===t.UNSIGNED_INT&&(G=t.RGB32UI),F===t.BYTE&&(G=t.RGB8I),F===t.SHORT&&(G=t.RGB16I),F===t.INT&&(G=t.RGB32I)),g===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),F===t.UNSIGNED_INT&&(G=t.RGBA32UI),F===t.BYTE&&(G=t.RGBA8I),F===t.SHORT&&(G=t.RGBA16I),F===t.INT&&(G=t.RGBA32I)),g===t.RGB&&(F===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(G=t.R11F_G11F_B10F)),g===t.RGBA){const be=Z?Ka:et.getTransfer(W);F===t.FLOAT&&(G=t.RGBA32F),F===t.HALF_FLOAT&&(G=t.RGBA16F),F===t.UNSIGNED_BYTE&&(G=be===ot?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(y,g){let F;return y?g===null||g===vr||g===Xs?F=t.DEPTH24_STENCIL8:g===xi?F=t.DEPTH32F_STENCIL8:g===Ws&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===vr||g===Xs?F=t.DEPTH_COMPONENT24:g===xi?F=t.DEPTH_COMPONENT32F:g===Ws&&(F=t.DEPTH_COMPONENT16),F}function P(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Un&&y.minFilter!==Dn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function w(y){const g=y.target;g.removeEventListener("dispose",w),U(g),g.isVideoTexture&&u.delete(g)}function R(y){const g=y.target;g.removeEventListener("dispose",R),x(g)}function U(y){const g=i.get(y);if(g.__webglInit===void 0)return;const F=y.source,W=d.get(F);if(W){const Z=W[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(y),Object.keys(W).length===0&&d.delete(F)}i.remove(y)}function S(y){const g=i.get(y);t.deleteTexture(g.__webglTexture);const F=y.source,W=d.get(F);delete W[g.__cacheKey],a.memory.textures--}function x(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Z=0;Z<g.__webglFramebuffer[W].length;Z++)t.deleteFramebuffer(g.__webglFramebuffer[W][Z]);else t.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)t.deleteFramebuffer(g.__webglFramebuffer[W]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let W=0,Z=F.length;W<Z;W++){const G=i.get(F[W]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(F[W])}i.remove(y)}let L=0;function k(){L=0}function V(){const y=L;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),L+=1,y}function q(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function X(y,g){const F=i.get(y);if(y.isVideoTexture&&Ge(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const W=y.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(F,y,g);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+g)}function Y(y,g){const F=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){H(F,y,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+g)}function $(y,g){const F=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){H(F,y,g);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+g)}function z(y,g){const F=i.get(y);if(y.version>0&&F.__version!==y.version){K(F,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+g)}const se={[Hs]:t.REPEAT,[dr]:t.CLAMP_TO_EDGE,[Gc]:t.MIRRORED_REPEAT},ne={[Un]:t.NEAREST,[bg]:t.NEAREST_MIPMAP_NEAREST,[fa]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[Go]:t.LINEAR_MIPMAP_NEAREST,[pr]:t.LINEAR_MIPMAP_LINEAR},ue={[Pg]:t.NEVER,[Ng]:t.ALWAYS,[Lg]:t.LESS,[Pd]:t.LEQUAL,[Dg]:t.EQUAL,[Fg]:t.GEQUAL,[Ig]:t.GREATER,[Ug]:t.NOTEQUAL};function Ne(y,g){if(g.type===xi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Dn||g.magFilter===Go||g.magFilter===fa||g.magFilter===pr||g.minFilter===Dn||g.minFilter===Go||g.minFilter===fa||g.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,se[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,se[g.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,se[g.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,ne[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,ue[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Un||g.minFilter!==fa&&g.minFilter!==pr||g.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function We(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",w));const W=g.source;let Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));const G=q(g);if(G!==y.__cacheKey){Z[G]===void 0&&(Z[G]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[G].usedTimes++;const be=Z[y.__cacheKey];be!==void 0&&(Z[y.__cacheKey].usedTimes--,be.usedTimes===0&&S(g)),y.__cacheKey=G,y.__webglTexture=Z[G].texture}return F}function Ke(y,g,F){return Math.floor(Math.floor(y/F)/g)}function He(y,g,F,W){const G=y.updateRanges;if(G.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,F,W,g.data);else{G.sort((ee,le)=>ee.start-le.start);let be=0;for(let ee=1;ee<G.length;ee++){const le=G[be],De=G[ee],ye=le.start+le.count,oe=Ke(De.start,g.width,4),ke=Ke(le.start,g.width,4);De.start<=ye+1&&oe===ke&&Ke(De.start+De.count-1,g.width,4)===oe?le.count=Math.max(le.count,De.start+De.count-le.start):(++be,G[be]=De)}G.length=be+1;const ie=t.getParameter(t.UNPACK_ROW_LENGTH),Se=t.getParameter(t.UNPACK_SKIP_PIXELS),Ee=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ee=0,le=G.length;ee<le;ee++){const De=G[ee],ye=Math.floor(De.start/4),oe=Math.ceil(De.count/4),ke=ye%g.width,C=Math.floor(ye/g.width),te=oe,re=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,C),n.texSubImage2D(t.TEXTURE_2D,0,ke,C,te,re,F,W,g.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ie),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ee)}}function H(y,g,F){let W=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=t.TEXTURE_3D);const Z=We(y,g),G=g.source;n.bindTexture(W,y.__webglTexture,t.TEXTURE0+F);const be=i.get(G);if(G.version!==be.__version||Z===!0){n.activeTexture(t.TEXTURE0+F);const ie=et.getPrimaries(et.workingColorSpace),Se=g.colorSpace===Ni?null:et.getPrimaries(g.colorSpace),Ee=g.colorSpace===Ni||ie===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ee=M(g.image,!1,r.maxTextureSize);ee=zt(g,ee);const le=s.convert(g.format,g.colorSpace),De=s.convert(g.type);let ye=T(g.internalFormat,le,De,g.colorSpace,g.isVideoTexture);Ne(W,g);let oe;const ke=g.mipmaps,C=g.isVideoTexture!==!0,te=be.__version===void 0||Z===!0,re=G.dataReady,de=P(g,ee);if(g.isDepthTexture)ye=E(g.format===Ys,g.type),te&&(C?n.texStorage2D(t.TEXTURE_2D,1,ye,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ye,ee.width,ee.height,0,le,De,null));else if(g.isDataTexture)if(ke.length>0){C&&te&&n.texStorage2D(t.TEXTURE_2D,de,ye,ke[0].width,ke[0].height);for(let J=0,j=ke.length;J<j;J++)oe=ke[J],C?re&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,oe.width,oe.height,le,De,oe.data):n.texImage2D(t.TEXTURE_2D,J,ye,oe.width,oe.height,0,le,De,oe.data);g.generateMipmaps=!1}else C?(te&&n.texStorage2D(t.TEXTURE_2D,de,ye,ee.width,ee.height),re&&He(g,ee,le,De)):n.texImage2D(t.TEXTURE_2D,0,ye,ee.width,ee.height,0,le,De,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){C&&te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ye,ke[0].width,ke[0].height,ee.depth);for(let J=0,j=ke.length;J<j;J++)if(oe=ke[J],g.format!==Hn)if(le!==null)if(C){if(re)if(g.layerUpdates.size>0){const _e=Bh(oe.width,oe.height,g.format,g.type);for(const Oe of g.layerUpdates){const ut=oe.data.subarray(Oe*_e/oe.data.BYTES_PER_ELEMENT,(Oe+1)*_e/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,Oe,oe.width,oe.height,1,le,ut)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,le,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?re&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,le,De,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,le,De,oe.data)}else{C&&te&&n.texStorage2D(t.TEXTURE_2D,de,ye,ke[0].width,ke[0].height);for(let J=0,j=ke.length;J<j;J++)oe=ke[J],g.format!==Hn?le!==null?C?re&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,oe.width,oe.height,le,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,ye,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?re&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,oe.width,oe.height,le,De,oe.data):n.texImage2D(t.TEXTURE_2D,J,ye,oe.width,oe.height,0,le,De,oe.data)}else if(g.isDataArrayTexture)if(C){if(te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ye,ee.width,ee.height,ee.depth),re)if(g.layerUpdates.size>0){const J=Bh(ee.width,ee.height,g.format,g.type);for(const j of g.layerUpdates){const _e=ee.data.subarray(j*J/ee.data.BYTES_PER_ELEMENT,(j+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,le,De,_e)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,De,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,le,De,ee.data);else if(g.isData3DTexture)C?(te&&n.texStorage3D(t.TEXTURE_3D,de,ye,ee.width,ee.height,ee.depth),re&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,De,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,le,De,ee.data);else if(g.isFramebufferTexture){if(te)if(C)n.texStorage2D(t.TEXTURE_2D,de,ye,ee.width,ee.height);else{let J=ee.width,j=ee.height;for(let _e=0;_e<de;_e++)n.texImage2D(t.TEXTURE_2D,_e,ye,J,j,0,le,De,null),J>>=1,j>>=1}}else if(ke.length>0){if(C&&te){const J=Rt(ke[0]);n.texStorage2D(t.TEXTURE_2D,de,ye,J.width,J.height)}for(let J=0,j=ke.length;J<j;J++)oe=ke[J],C?re&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,le,De,oe):n.texImage2D(t.TEXTURE_2D,J,ye,le,De,oe);g.generateMipmaps=!1}else if(C){if(te){const J=Rt(ee);n.texStorage2D(t.TEXTURE_2D,de,ye,J.width,J.height)}re&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,De,ee)}else n.texImage2D(t.TEXTURE_2D,0,ye,le,De,ee);p(g)&&h(W),be.__version=G.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function K(y,g,F){if(g.image.length!==6)return;const W=We(y,g),Z=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+F);const G=i.get(Z);if(Z.version!==G.__version||W===!0){n.activeTexture(t.TEXTURE0+F);const be=et.getPrimaries(et.workingColorSpace),ie=g.colorSpace===Ni?null:et.getPrimaries(g.colorSpace),Se=g.colorSpace===Ni||be===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!Ee&&!ee?le[j]=M(g.image[j],!0,r.maxCubemapSize):le[j]=ee?g.image[j].image:g.image[j],le[j]=zt(g,le[j]);const De=le[0],ye=s.convert(g.format,g.colorSpace),oe=s.convert(g.type),ke=T(g.internalFormat,ye,oe,g.colorSpace),C=g.isVideoTexture!==!0,te=G.__version===void 0||W===!0,re=Z.dataReady;let de=P(g,De);Ne(t.TEXTURE_CUBE_MAP,g);let J;if(Ee){C&&te&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,ke,De.width,De.height);for(let j=0;j<6;j++){J=le[j].mipmaps;for(let _e=0;_e<J.length;_e++){const Oe=J[_e];g.format!==Hn?ye!==null?C?re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,Oe.width,Oe.height,ye,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,Oe.width,Oe.height,ye,oe,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,ke,Oe.width,Oe.height,0,ye,oe,Oe.data)}}}else{if(J=g.mipmaps,C&&te){J.length>0&&de++;const j=Rt(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,ke,j.width,j.height)}for(let j=0;j<6;j++)if(ee){C?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,ye,oe,le[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,le[j].width,le[j].height,0,ye,oe,le[j].data);for(let _e=0;_e<J.length;_e++){const ut=J[_e].image[j].image;C?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,ut.width,ut.height,ye,oe,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,ke,ut.width,ut.height,0,ye,oe,ut.data)}}else{C?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye,oe,le[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,ye,oe,le[j]);for(let _e=0;_e<J.length;_e++){const Oe=J[_e];C?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,ye,oe,Oe.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,ke,ye,oe,Oe.image[j])}}}p(g)&&h(t.TEXTURE_CUBE_MAP),G.__version=Z.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function pe(y,g,F,W,Z,G){const be=s.convert(F.format,F.colorSpace),ie=s.convert(F.type),Se=T(F.internalFormat,be,ie,F.colorSpace),Ee=i.get(g),ee=i.get(F);if(ee.__renderTarget=g,!Ee.__hasExternalTextures){const le=Math.max(1,g.width>>G),De=Math.max(1,g.height>>G);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,G,Se,le,De,g.depth,0,be,ie,null):n.texImage2D(Z,G,Se,le,De,0,be,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),xe(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Z,ee.__webglTexture,0,_t(g)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Z,ee.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(y,g,F){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){const W=g.depthTexture,Z=W&&W.isDepthTexture?W.type:null,G=E(g.stencilBuffer,Z),be=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=_t(g);xe(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,G,g.width,g.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,G,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,G,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,y)}else{const W=g.textures;for(let Z=0;Z<W.length;Z++){const G=W[Z],be=s.convert(G.format,G.colorSpace),ie=s.convert(G.type),Se=T(G.internalFormat,be,ie,G.colorSpace),Ee=_t(g);F&&xe(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Se,g.width,g.height):xe(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,Se,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Se,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(g.depthTexture);W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);const Z=W.__webglTexture,G=_t(g);if(g.depthTexture.format===qs)xe(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Ys)xe(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function $e(y){const g=i.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const W=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=W}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=y.texture.mipmaps;W&&W.length>0?we(g.__webglFramebuffer[0],y):we(g.__webglFramebuffer,y)}else if(F){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=t.createRenderbuffer(),Fe(g.__webglDepthbuffer[W],y,!1);else{const Z=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,G)}}else{const W=y.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Fe(g.__webglDepthbuffer,y,!1);else{const Z=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Wt(y,g,F){const W=i.get(y);g!==void 0&&pe(W.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&$e(y)}function A(y){const g=y.texture,F=i.get(y),W=i.get(g);y.addEventListener("dispose",R);const Z=y.textures,G=y.isWebGLCubeRenderTarget===!0,be=Z.length>1;if(be||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=g.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let Se=0;Se<g.mipmaps.length;Se++)F.__webglFramebuffer[ie][Se]=t.createFramebuffer()}else F.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)F.__webglFramebuffer[ie]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(be)for(let ie=0,Se=Z.length;ie<Se;ie++){const Ee=i.get(Z[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&xe(y)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const Se=Z[ie];F.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);const Ee=s.convert(Se.format,Se.colorSpace),ee=s.convert(Se.type),le=T(Se.internalFormat,Ee,ee,Se.colorSpace,y.isXRRenderTarget===!0),De=_t(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,le,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,g);for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)pe(F.__webglFramebuffer[ie][Se],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se);else pe(F.__webglFramebuffer[ie],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let ie=0,Se=Z.length;ie<Se;ie++){const Ee=Z[ie],ee=i.get(Ee);let le=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(le=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,ee.__webglTexture),Ne(le,Ee),pe(F.__webglFramebuffer,y,Ee,t.COLOR_ATTACHMENT0+ie,le,0),p(Ee)&&h(le)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ie=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,W.__webglTexture),Ne(ie,g),g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)pe(F.__webglFramebuffer[Se],y,g,t.COLOR_ATTACHMENT0,ie,Se);else pe(F.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,ie,0);p(g)&&h(ie),n.unbindTexture()}y.depthBuffer&&$e(y)}function gt(y){const g=y.textures;for(let F=0,W=g.length;F<W;F++){const Z=g[F];if(p(Z)){const G=b(y),be=i.get(Z).__webglTexture;n.bindTexture(G,be),h(G),n.unbindTexture()}}}const Be=[],Ie=[];function ve(y){if(y.samples>0){if(xe(y)===!1){const g=y.textures,F=y.width,W=y.height;let Z=t.COLOR_BUFFER_BIT;const G=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(y),ie=g.length>1;if(ie)for(let Ee=0;Ee<g.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Se=y.texture.mipmaps;Se&&Se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ee=0;Ee<g.length;Ee++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const ee=i.get(g[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,F,W,0,0,F,W,Z,t.NEAREST),c===!0&&(Be.length=0,Ie.length=0,Be.push(t.COLOR_ATTACHMENT0+Ee),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Be.push(G),Ie.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<g.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const ee=i.get(g[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function _t(y){return Math.min(r.maxSamples,y.samples)}function xe(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ge(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function zt(y,g){const F=y.colorSpace,W=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==es&&F!==Ni&&(et.getTransfer(F)===ot?(W!==Hn||Z!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function Rt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=Wt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=xe}function fx(t,e){function n(i,r=Ni){let s;const a=et.getTransfer(r);if(i===si)return t.UNSIGNED_BYTE;if(i===Vl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Td)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sd)return t.BYTE;if(i===Ed)return t.SHORT;if(i===Ws)return t.UNSIGNED_SHORT;if(i===Gl)return t.INT;if(i===vr)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===na)return t.HALF_FLOAT;if(i===Ad)return t.ALPHA;if(i===bd)return t.RGB;if(i===Hn)return t.RGBA;if(i===qs)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===wd)return t.RED;if(i===Wl)return t.RED_INTEGER;if(i===Rd)return t.RG;if(i===Xl)return t.RG_INTEGER;if(i===ql)return t.RGBA_INTEGER;if(i===ka||i===za||i===Ga||i===Va)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vc||i===Hc||i===Wc||i===Xc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qc||i===Yc||i===jc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qc||i===Yc)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kc||i===$c||i===Zc||i===Jc||i===Qc||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===cl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$c)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===ul||i===hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ll)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fl||i===dl||i===pl||i===ml)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Gd(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:dx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new It(new ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gx extends ms{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,v=null;const M=typeof XRWebGLBinding<"u",p=new mx,h={},b=n.getContextAttributes();let T=null,E=null;const P=[],w=[],R=new nt;let U=null;const S=new Pn;S.viewport=new bt;const x=new Pn;x.viewport=new bt;const L=[S,x],k=new O0;let V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=P[H];return K===void 0&&(K=new cc,P[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=P[H];return K===void 0&&(K=new cc,P[H]=K),K.getGripSpace()},this.getHand=function(H){let K=P[H];return K===void 0&&(K=new cc,P[H]=K),K.getHandSpace()};function X(H){const K=w.indexOf(H.inputSource);if(K===-1)return;const pe=P[K];pe!==void 0&&(pe.update(H.inputSource,H.frame,l||a),pe.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let H=0;H<P.length;H++){const K=w[H];K!==null&&(w[H]=null,P[H].disconnect(K))}V=null,q=null,p.reset();for(const H in h)delete h[H];e.setRenderTarget(T),m=null,d=null,f=null,r=null,E=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,we=null;b.depth&&(we=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=b.stencil?Ys:qs,Fe=b.stencil?Xs:vr);const $e={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new xr(d.textureWidth,d.textureHeight,{format:Hn,type:si,depthTexture:new zd(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new xr(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(H){for(let K=0;K<H.removed.length;K++){const pe=H.removed[K],Fe=w.indexOf(pe);Fe>=0&&(w[Fe]=null,P[Fe].disconnect(pe))}for(let K=0;K<H.added.length;K++){const pe=H.added[K];let Fe=w.indexOf(pe);if(Fe===-1){for(let $e=0;$e<P.length;$e++)if($e>=w.length){w.push(pe),Fe=$e;break}else if(w[$e]===null){w[$e]=pe,Fe=$e;break}if(Fe===-1)break}const we=P[Fe];we&&we.connect(pe)}}const z=new N,se=new N;function ne(H,K,pe){z.setFromMatrixPosition(K.matrixWorld),se.setFromMatrixPosition(pe.matrixWorld);const Fe=z.distanceTo(se),we=K.projectionMatrix.elements,$e=pe.projectionMatrix.elements,Wt=we[14]/(we[10]-1),A=we[14]/(we[10]+1),gt=(we[9]+1)/we[5],Be=(we[9]-1)/we[5],Ie=(we[8]-1)/we[0],ve=($e[8]+1)/$e[0],_t=Wt*Ie,xe=Wt*ve,Ge=Fe/(-Ie+ve),zt=Ge*-Ie;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(zt),H.translateZ(Ge),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),we[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Rt=Wt+Ge,y=A+Ge,g=_t-zt,F=xe+(Fe-zt),W=gt*A/y*Rt,Z=Be*A/y*Rt;H.projectionMatrix.makePerspective(g,F,W,Z,Rt,y),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ue(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let K=H.near,pe=H.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),k.near=x.near=S.near=K,k.far=x.far=S.far=pe,(V!==k.near||q!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,q=k.far),k.layers.mask=H.layers.mask|6,S.layers.mask=k.layers.mask&3,x.layers.mask=k.layers.mask&5;const Fe=H.parent,we=k.cameras;ue(k,Fe);for(let $e=0;$e<we.length;$e++)ue(we[$e],Fe);we.length===2?ne(k,S,x):k.projectionMatrix.copy(S.projectionMatrix),Ne(H,k,Fe)};function Ne(H,K,pe){pe===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(pe.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=js*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(H){return h[H]};let We=null;function Ke(H,K){if(u=K.getViewerPose(l||a),v=K,u!==null){const pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Fe=!1;pe.length!==k.cameras.length&&(k.cameras.length=0,Fe=!0);for(let A=0;A<pe.length;A++){const gt=pe[A];let Be=null;if(m!==null)Be=m.getViewport(gt);else{const ve=f.getViewSubImage(d,gt);Be=ve.viewport,A===0&&(e.setRenderTargetTextures(E,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(E))}let Ie=L[A];Ie===void 0&&(Ie=new Pn,Ie.layers.enable(A),Ie.viewport=new bt,L[A]=Ie),Ie.matrix.fromArray(gt.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(gt.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Be.x,Be.y,Be.width,Be.height),A===0&&(k.matrix.copy(Ie.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Fe===!0&&k.cameras.push(Ie)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const A=f.getDepthInformation(pe[0]);A&&A.isValid&&A.texture&&p.init(A,r.renderState)}if(we&&we.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let A=0;A<pe.length;A++){const gt=pe[A].camera;if(gt){let Be=h[gt];Be||(Be=new Gd,h[gt]=Be);const Ie=f.getCameraImage(gt);Be.sourceTexture=Ie}}}}for(let pe=0;pe<P.length;pe++){const Fe=w[pe],we=P[pe];Fe!==null&&we!==void 0&&we.update(Fe,K,l||a)}We&&We(H,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const He=new Wd;He.setAnimationLoop(Ke),this.setAnimationLoop=function(H){We=H},this.dispose=function(){}}}const sr=new ai,_x=new Pt;function vx(t,e){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Od(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,T,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),M(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,b,T):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===an&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===an&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h),T=b.envMap,E=b.envMapRotation;T&&(p.envMap.value=T,sr.copy(E),sr.x*=-1,sr.y*=-1,sr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),p.envMapRotation.value.setFromMatrix4(_x.makeRotationFromEuler(sr)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,b,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=T*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xx(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const E=T.program;i.uniformBlockBinding(b,E)}function l(b,T){let E=r[b.id];E===void 0&&(v(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",p));const P=T.program;i.updateUBOMapping(b,P);const w=e.render.frame;s[b.id]!==w&&(d(b),s[b.id]=w)}function u(b){const T=f();b.__bindingPointIndex=T;const E=t.createBuffer(),P=b.__size,w=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,E),E}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=r[b.id],E=b.uniforms,P=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let w=0,R=E.length;w<R;w++){const U=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,x=U.length;S<x;S++){const L=U[S];if(m(L,w,S,P)===!0){const k=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let X=0;X<V.length;X++){const Y=V[X],$=M(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,k+q,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,T,E,P){const w=b.value,R=T+"_"+E;if(P[R]===void 0)return typeof w=="number"||typeof w=="boolean"?P[R]=w:P[R]=w.clone(),!0;{const U=P[R];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return P[R]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function v(b){const T=b.uniforms;let E=0;const P=16;for(let R=0,U=T.length;R<U;R++){const S=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,L=S.length;x<L;x++){const k=S[x],V=Array.isArray(k.value)?k.value:[k.value];for(let q=0,X=V.length;q<X;q++){const Y=V[q],$=M(Y),z=E%P,se=z%$.boundary,ne=z+se;E+=se,ne!==0&&P-ne<$.storage&&(E+=P-ne),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=$.storage}}}const w=E%P;return w>0&&(E+=P-w),b.__size=E,b.__cache={},this}function M(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Mx{constructor(e={}){const{canvas:n=Qg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),M=new Int32Array(4);let p=null,h=null;const b=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=Cn;let w=0,R=0,U=null,S=-1,x=null;const L=new bt,k=new bt;let V=null;const q=new Ze(0);let X=0,Y=n.width,$=n.height,z=1,se=null,ne=null;const ue=new bt(0,0,Y,$),Ne=new bt(0,0,Y,$);let We=!1;const Ke=new Zl;let He=!1,H=!1;const K=new Pt,pe=new N,Fe=new bt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Wt(){return U===null?z:1}let A=i;function gt(_,D){return n.getContext(_,D)}try{const _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kl}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",J,!1),A===null){const D="webgl2";if(A=gt(D,_),A===null)throw gt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Be,Ie,ve,_t,xe,Ge,zt,Rt,y,g,F,W,Z,G,be,ie,Se,Ee,ee,le,De,ye,oe,ke;function C(){Be=new P2(A),Be.init(),ye=new fx(A,Be),Ie=new y2(A,Be,e,ye),ve=new ux(A,Be),Ie.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),_t=new I2(A),xe=new Zv,Ge=new hx(A,Be,ve,xe,Ie,ye,_t),zt=new A2(E),Rt=new C2(E),y=new k0(A),oe=new S2(A,y),g=new L2(A,y,_t,oe),F=new F2(A,g,y,_t),ee=new U2(A,Ie,Ge),ie=new T2(xe),W=new $v(E,zt,Rt,Be,Ie,oe,ie),Z=new vx(E,xe),G=new Qv,be=new sx(Be),Ee=new M2(E,zt,Rt,ve,F,m,c),Se=new cx(E,F,Ie),ke=new xx(A,_t,Ie,ve),le=new E2(A,Be,_t),De=new D2(A,Be,_t),_t.programs=W.programs,E.capabilities=Ie,E.extensions=Be,E.properties=xe,E.renderLists=G,E.shadowMap=Se,E.state=ve,E.info=_t}C();const te=new gx(E,A);this.xr=te,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const _=Be.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Be.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(Y,$,!1))},this.getSize=function(_){return _.set(Y,$)},this.setSize=function(_,D,O=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=_,$=D,n.width=Math.floor(_*z),n.height=Math.floor(D*z),O===!0&&(n.style.width=_+"px",n.style.height=D+"px"),this.setViewport(0,0,_,D)},this.getDrawingBufferSize=function(_){return _.set(Y*z,$*z).floor()},this.setDrawingBufferSize=function(_,D,O){Y=_,$=D,z=O,n.width=Math.floor(_*O),n.height=Math.floor(D*O),this.setViewport(0,0,_,D)},this.getCurrentViewport=function(_){return _.copy(L)},this.getViewport=function(_){return _.copy(ue)},this.setViewport=function(_,D,O,B){_.isVector4?ue.set(_.x,_.y,_.z,_.w):ue.set(_,D,O,B),ve.viewport(L.copy(ue).multiplyScalar(z).round())},this.getScissor=function(_){return _.copy(Ne)},this.setScissor=function(_,D,O,B){_.isVector4?Ne.set(_.x,_.y,_.z,_.w):Ne.set(_,D,O,B),ve.scissor(k.copy(Ne).multiplyScalar(z).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(_){ve.setScissorTest(We=_)},this.setOpaqueSort=function(_){se=_},this.setTransparentSort=function(_){ne=_},this.getClearColor=function(_){return _.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(_=!0,D=!0,O=!0){let B=0;if(_){let I=!1;if(U!==null){const Q=U.texture.format;I=Q===ql||Q===Xl||Q===Wl}if(I){const Q=U.texture.type,ce=Q===si||Q===vr||Q===Ws||Q===Xs||Q===Vl||Q===Hl,me=Ee.getClearColor(),fe=Ee.getClearAlpha(),Le=me.r,Ue=me.g,Ce=me.b;ce?(v[0]=Le,v[1]=Ue,v[2]=Ce,v[3]=fe,A.clearBufferuiv(A.COLOR,0,v)):(M[0]=Le,M[1]=Ue,M[2]=Ce,M[3]=fe,A.clearBufferiv(A.COLOR,0,M))}else B|=A.COLOR_BUFFER_BIT}D&&(B|=A.DEPTH_BUFFER_BIT),O&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",J,!1),Ee.dispose(),G.dispose(),be.dispose(),xe.dispose(),zt.dispose(),Rt.dispose(),F.dispose(),oe.dispose(),ke.dispose(),W.dispose(),te.dispose(),te.removeEventListener("sessionstart",Kn),te.removeEventListener("sessionend",rh),Ji.stop()};function re(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const _=_t.autoReset,D=Se.enabled,O=Se.autoUpdate,B=Se.needsUpdate,I=Se.type;C(),_t.autoReset=_,Se.enabled=D,Se.autoUpdate=O,Se.needsUpdate=B,Se.type=I}function J(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function j(_){const D=_.target;D.removeEventListener("dispose",j),_e(D)}function _e(_){Oe(_),xe.remove(_)}function Oe(_){const D=xe.get(_).programs;D!==void 0&&(D.forEach(function(O){W.releaseProgram(O)}),_.isShaderMaterial&&W.releaseShaderCache(_))}this.renderBufferDirect=function(_,D,O,B,I,Q){D===null&&(D=we);const ce=I.isMesh&&I.matrixWorld.determinant()<0,me=Wm(_,D,O,B,I);ve.setMaterial(B,ce);let fe=O.index,Le=1;if(B.wireframe===!0){if(fe=g.getWireframeAttribute(O),fe===void 0)return;Le=2}const Ue=O.drawRange,Ce=O.attributes.position;let Xe=Ue.start*Le,at=(Ue.start+Ue.count)*Le;Q!==null&&(Xe=Math.max(Xe,Q.start*Le),at=Math.min(at,(Q.start+Q.count)*Le)),fe!==null?(Xe=Math.max(Xe,0),at=Math.min(at,fe.count)):Ce!=null&&(Xe=Math.max(Xe,0),at=Math.min(at,Ce.count));const Tt=at-Xe;if(Tt<0||Tt===1/0)return;oe.setup(I,B,me,O,fe);let pt,ct=le;if(fe!==null&&(pt=y.get(fe),ct=De,ct.setIndex(pt)),I.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*Wt()),ct.setMode(A.LINES)):ct.setMode(A.TRIANGLES);else if(I.isLine){let Pe=B.linewidth;Pe===void 0&&(Pe=1),ve.setLineWidth(Pe*Wt()),I.isLineSegments?ct.setMode(A.LINES):I.isLineLoop?ct.setMode(A.LINE_LOOP):ct.setMode(A.LINE_STRIP)}else I.isPoints?ct.setMode(A.POINTS):I.isSprite&&ct.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ct.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Pe=I._multiDrawStarts,St=I._multiDrawCounts,Qe=I._multiDrawCount,un=fe?y.get(fe).bytesPerElement:1,Tr=xe.get(B).currentProgram.getUniforms();for(let hn=0;hn<Qe;hn++)Tr.setValue(A,"_gl_DrawID",hn),ct.render(Pe[hn]/un,St[hn])}else if(I.isInstancedMesh)ct.renderInstances(Xe,Tt,I.count);else if(O.isInstancedBufferGeometry){const Pe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,St=Math.min(O.instanceCount,Pe);ct.renderInstances(Xe,Tt,St)}else ct.render(Xe,Tt)};function ut(_,D,O){_.transparent===!0&&_.side===ti&&_.forceSinglePass===!1?(_.side=an,_.needsUpdate=!0,ha(_,D,O),_.side=Xi,_.needsUpdate=!0,ha(_,D,O),_.side=ti):ha(_,D,O)}this.compile=function(_,D,O=null){O===null&&(O=_),h=be.get(O),h.init(D),T.push(h),O.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),_!==O&&_.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const B=new Set;return _.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){const me=Q[ce];ut(me,O,I),B.add(me)}else ut(Q,O,I),B.add(Q)}),h=T.pop(),B},this.compileAsync=function(_,D,O=null){const B=this.compile(_,D,O);return new Promise(I=>{function Q(){if(B.forEach(function(ce){xe.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){I(_);return}setTimeout(Q,10)}Be.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let it=null;function ui(_){it&&it(_)}function Kn(){Ji.stop()}function rh(){Ji.start()}const Ji=new Wd;Ji.setAnimationLoop(ui),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(_){it=_,te.setAnimationLoop(_),_===null?Ji.stop():Ji.start()},te.addEventListener("sessionstart",Kn),te.addEventListener("sessionend",rh),this.render=function(_,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(D),D=te.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,D,U),h=be.get(_,T.length),h.init(D),T.push(h),K.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ke.setFromProjectionMatrix(K,ii,D.reversedDepth),H=this.localClippingEnabled,He=ie.init(this.clippingPlanes,H),p=G.get(_,b.length),p.init(),b.push(p),te.enabled===!0&&te.isPresenting===!0){const Q=E.xr.getDepthSensingMesh();Q!==null&&ko(Q,D,-1/0,E.sortObjects)}ko(_,D,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(se,ne),$e=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,$e&&Ee.addToRenderList(p,_),this.info.render.frame++,He===!0&&ie.beginShadows();const O=h.state.shadowsArray;Se.render(O,_,D),He===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,I=p.transmissive;if(h.setupLights(),D.isArrayCamera){const Q=D.cameras;if(I.length>0)for(let ce=0,me=Q.length;ce<me;ce++){const fe=Q[ce];ah(B,I,_,fe)}$e&&Ee.render(_);for(let ce=0,me=Q.length;ce<me;ce++){const fe=Q[ce];sh(p,_,fe,fe.viewport)}}else I.length>0&&ah(B,I,_,D),$e&&Ee.render(_),sh(p,_,D);U!==null&&R===0&&(Ge.updateMultisampleRenderTarget(U),Ge.updateRenderTargetMipmap(U)),_.isScene===!0&&_.onAfterRender(E,_,D),oe.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],He===!0&&ie.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function ko(_,D,O,B){if(_.visible===!1)return;if(_.layers.test(D.layers)){if(_.isGroup)O=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(D);else if(_.isLight)h.pushLight(_),_.castShadow&&h.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Ke.intersectsSprite(_)){B&&Fe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(K);const ce=F.update(_),me=_.material;me.visible&&p.push(_,ce,me,O,Fe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Ke.intersectsObject(_))){const ce=F.update(_),me=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Fe.copy(_.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Fe.copy(ce.boundingSphere.center)),Fe.applyMatrix4(_.matrixWorld).applyMatrix4(K)),Array.isArray(me)){const fe=ce.groups;for(let Le=0,Ue=fe.length;Le<Ue;Le++){const Ce=fe[Le],Xe=me[Ce.materialIndex];Xe&&Xe.visible&&p.push(_,ce,Xe,O,Fe.z,Ce)}}else me.visible&&p.push(_,ce,me,O,Fe.z,null)}}const Q=_.children;for(let ce=0,me=Q.length;ce<me;ce++)ko(Q[ce],D,O,B)}function sh(_,D,O,B){const I=_.opaque,Q=_.transmissive,ce=_.transparent;h.setupLightsView(O),He===!0&&ie.setGlobalState(E.clippingPlanes,O),B&&ve.viewport(L.copy(B)),I.length>0&&ua(I,D,O),Q.length>0&&ua(Q,D,O),ce.length>0&&ua(ce,D,O),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function ah(_,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new xr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?na:si,minFilter:pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const Q=h.state.transmissionRenderTarget[B.id],ce=B.viewport||L;Q.setSize(ce.z*E.transmissionResolutionScale,ce.w*E.transmissionResolutionScale);const me=E.getRenderTarget(),fe=E.getActiveCubeFace(),Le=E.getActiveMipmapLevel();E.setRenderTarget(Q),E.getClearColor(q),X=E.getClearAlpha(),X<1&&E.setClearColor(16777215,.5),E.clear(),$e&&Ee.render(O);const Ue=E.toneMapping;E.toneMapping=zi;const Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),He===!0&&ie.setGlobalState(E.clippingPlanes,B),ua(_,O,B),Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let at=0,Tt=D.length;at<Tt;at++){const pt=D[at],ct=pt.object,Pe=pt.geometry,St=pt.material,Qe=pt.group;if(St.side===ti&&ct.layers.test(B.layers)){const un=St.side;St.side=an,St.needsUpdate=!0,oh(ct,O,B,Pe,St,Qe),St.side=un,St.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q))}E.setRenderTarget(me,fe,Le),E.setClearColor(q,X),Ce!==void 0&&(B.viewport=Ce),E.toneMapping=Ue}function ua(_,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let I=0,Q=_.length;I<Q;I++){const ce=_[I],me=ce.object,fe=ce.geometry,Le=ce.group;let Ue=ce.material;Ue.allowOverride===!0&&B!==null&&(Ue=B),me.layers.test(O.layers)&&oh(me,D,O,fe,Ue,Le)}}function oh(_,D,O,B,I,Q){_.onBeforeRender(E,D,O,B,I,Q),_.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),I.onBeforeRender(E,D,O,B,_,Q),I.transparent===!0&&I.side===ti&&I.forceSinglePass===!1?(I.side=an,I.needsUpdate=!0,E.renderBufferDirect(O,D,B,I,_,Q),I.side=Xi,I.needsUpdate=!0,E.renderBufferDirect(O,D,B,I,_,Q),I.side=ti):E.renderBufferDirect(O,D,B,I,_,Q),_.onAfterRender(E,D,O,B,I,Q)}function ha(_,D,O){D.isScene!==!0&&(D=we);const B=xe.get(_),I=h.state.lights,Q=h.state.shadowsArray,ce=I.state.version,me=W.getParameters(_,I.state,Q,D,O),fe=W.getProgramCacheKey(me);let Le=B.programs;B.environment=_.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(_.isMeshStandardMaterial?Rt:zt).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?D.environmentRotation:_.envMapRotation,Le===void 0&&(_.addEventListener("dispose",j),Le=new Map,B.programs=Le);let Ue=Le.get(fe);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===ce)return lh(_,me),Ue}else me.uniforms=W.getUniforms(_),_.onBeforeCompile(me,E),Ue=W.acquireProgram(me,fe),Le.set(fe,Ue),B.uniforms=me.uniforms;const Ce=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ce.clippingPlanes=ie.uniform),lh(_,me),B.needsLights=qm(_),B.lightsStateVersion=ce,B.needsLights&&(Ce.ambientLightColor.value=I.state.ambient,Ce.lightProbe.value=I.state.probe,Ce.directionalLights.value=I.state.directional,Ce.directionalLightShadows.value=I.state.directionalShadow,Ce.spotLights.value=I.state.spot,Ce.spotLightShadows.value=I.state.spotShadow,Ce.rectAreaLights.value=I.state.rectArea,Ce.ltc_1.value=I.state.rectAreaLTC1,Ce.ltc_2.value=I.state.rectAreaLTC2,Ce.pointLights.value=I.state.point,Ce.pointLightShadows.value=I.state.pointShadow,Ce.hemisphereLights.value=I.state.hemi,Ce.directionalShadowMap.value=I.state.directionalShadowMap,Ce.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ce.spotShadowMap.value=I.state.spotShadowMap,Ce.spotLightMatrix.value=I.state.spotLightMatrix,Ce.spotLightMap.value=I.state.spotLightMap,Ce.pointShadowMap.value=I.state.pointShadowMap,Ce.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function ch(_){if(_.uniformsList===null){const D=_.currentProgram.getUniforms();_.uniformsList=Ha.seqWithValue(D.seq,_.uniforms)}return _.uniformsList}function lh(_,D){const O=xe.get(_);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Wm(_,D,O,B,I){D.isScene!==!0&&(D=we),Ge.resetTextureUnits();const Q=D.fog,ce=B.isMeshStandardMaterial?D.environment:null,me=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:es,fe=(B.isMeshStandardMaterial?Rt:zt).get(B.envMap||ce),Le=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!O.morphAttributes.position,Xe=!!O.morphAttributes.normal,at=!!O.morphAttributes.color;let Tt=zi;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Tt=E.toneMapping);const pt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ct=pt!==void 0?pt.length:0,Pe=xe.get(B),St=h.state.lights;if(He===!0&&(H===!0||_!==x)){const Kt=_===x&&B.id===S;ie.setState(B,_,Kt)}let Qe=!1;B.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==St.state.version||Pe.outputColorSpace!==me||I.isBatchedMesh&&Pe.batching===!1||!I.isBatchedMesh&&Pe.batching===!0||I.isBatchedMesh&&Pe.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Pe.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Pe.instancing===!1||!I.isInstancedMesh&&Pe.instancing===!0||I.isSkinnedMesh&&Pe.skinning===!1||!I.isSkinnedMesh&&Pe.skinning===!0||I.isInstancedMesh&&Pe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Pe.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Pe.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Pe.instancingMorph===!1&&I.morphTexture!==null||Pe.envMap!==fe||B.fog===!0&&Pe.fog!==Q||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ue||Pe.morphTargets!==Ce||Pe.morphNormals!==Xe||Pe.morphColors!==at||Pe.toneMapping!==Tt||Pe.morphTargetsCount!==ct)&&(Qe=!0):(Qe=!0,Pe.__version=B.version);let un=Pe.currentProgram;Qe===!0&&(un=ha(B,D,I));let Tr=!1,hn=!1,ws=!1;const Et=un.getUniforms(),yn=Pe.uniforms;if(ve.useProgram(un.program)&&(Tr=!0,hn=!0,ws=!0),B.id!==S&&(S=B.id,hn=!0),Tr||x!==_){ve.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Et.setValue(A,"projectionMatrix",_.projectionMatrix),Et.setValue(A,"viewMatrix",_.matrixWorldInverse);const nn=Et.map.cameraPosition;nn!==void 0&&nn.setValue(A,pe.setFromMatrixPosition(_.matrixWorld)),Ie.logarithmicDepthBuffer&&Et.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,hn=!0,ws=!0)}if(I.isSkinnedMesh){Et.setOptional(A,I,"bindMatrix"),Et.setOptional(A,I,"bindMatrixInverse");const Kt=I.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Et.setValue(A,"boneTexture",Kt.boneTexture,Ge))}I.isBatchedMesh&&(Et.setOptional(A,I,"batchingTexture"),Et.setValue(A,"batchingTexture",I._matricesTexture,Ge),Et.setOptional(A,I,"batchingIdTexture"),Et.setValue(A,"batchingIdTexture",I._indirectTexture,Ge),Et.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&Et.setValue(A,"batchingColorTexture",I._colorsTexture,Ge));const Tn=O.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&ee.update(I,O,un),(hn||Pe.receiveShadow!==I.receiveShadow)&&(Pe.receiveShadow=I.receiveShadow,Et.setValue(A,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(yn.envMap.value=fe,yn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),hn&&(Et.setValue(A,"toneMappingExposure",E.toneMappingExposure),Pe.needsLights&&Xm(yn,ws),Q&&B.fog===!0&&Z.refreshFogUniforms(yn,Q),Z.refreshMaterialUniforms(yn,B,z,$,h.state.transmissionRenderTarget[_.id]),Ha.upload(A,ch(Pe),yn,Ge)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ha.upload(A,ch(Pe),yn,Ge),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(A,"center",I.center),Et.setValue(A,"modelViewMatrix",I.modelViewMatrix),Et.setValue(A,"normalMatrix",I.normalMatrix),Et.setValue(A,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Kt=B.uniformsGroups;for(let nn=0,zo=Kt.length;nn<zo;nn++){const Qi=Kt[nn];ke.update(Qi,un),ke.bind(Qi,un)}}return un}function Xm(_,D){_.ambientLightColor.needsUpdate=D,_.lightProbe.needsUpdate=D,_.directionalLights.needsUpdate=D,_.directionalLightShadows.needsUpdate=D,_.pointLights.needsUpdate=D,_.pointLightShadows.needsUpdate=D,_.spotLights.needsUpdate=D,_.spotLightShadows.needsUpdate=D,_.rectAreaLights.needsUpdate=D,_.hemisphereLights.needsUpdate=D}function qm(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(_,D,O){const B=xe.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),xe.get(_.texture).__webglTexture=D,xe.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,D){const O=xe.get(_);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const Ym=A.createFramebuffer();this.setRenderTarget=function(_,D=0,O=0){U=_,w=D,R=O;let B=!0,I=null,Q=!1,ce=!1;if(_){const fe=xe.get(_);if(fe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(fe.__webglFramebuffer===void 0)Ge.setupRenderTarget(_);else if(fe.__hasExternalTextures)Ge.rebindTextures(_,xe.get(_.texture).__webglTexture,xe.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Ce=_.depthTexture;if(fe.__boundDepthTexture!==Ce){if(Ce!==null&&xe.has(Ce)&&(_.width!==Ce.image.width||_.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(_)}}const Le=_.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ce=!0);const Ue=xe.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ue[D])?I=Ue[D][O]:I=Ue[D],Q=!0):_.samples>0&&Ge.useMultisampledRTT(_)===!1?I=xe.get(_).__webglMultisampledFramebuffer:Array.isArray(Ue)?I=Ue[O]:I=Ue,L.copy(_.viewport),k.copy(_.scissor),V=_.scissorTest}else L.copy(ue).multiplyScalar(z).floor(),k.copy(Ne).multiplyScalar(z).floor(),V=We;if(O!==0&&(I=Ym),ve.bindFramebuffer(A.FRAMEBUFFER,I)&&B&&ve.drawBuffers(_,I),ve.viewport(L),ve.scissor(k),ve.setScissorTest(V),Q){const fe=xe.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,O)}else if(ce){const fe=D;for(let Le=0;Le<_.textures.length;Le++){const Ue=xe.get(_.textures[Le]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,O,fe)}}else if(_!==null&&O!==0){const fe=xe.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,fe.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(_,D,O,B,I,Q,ce,me=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=xe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){ve.bindFramebuffer(A.FRAMEBUFFER,fe);try{const Le=_.textures[me],Ue=Le.format,Ce=Le.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=_.width-B&&O>=0&&O<=_.height-I&&(_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+me),A.readPixels(D,O,B,I,ye.convert(Ue),ye.convert(Ce),Q))}finally{const Le=U!==null?xe.get(U).__webglFramebuffer:null;ve.bindFramebuffer(A.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(_,D,O,B,I,Q,ce,me=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=xe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe)if(D>=0&&D<=_.width-B&&O>=0&&O<=_.height-I){ve.bindFramebuffer(A.FRAMEBUFFER,fe);const Le=_.textures[me],Ue=Le.format,Ce=Le.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+me),A.readPixels(D,O,B,I,ye.convert(Ue),ye.convert(Ce),0);const at=U!==null?xe.get(U).__webglFramebuffer:null;ve.bindFramebuffer(A.FRAMEBUFFER,at);const Tt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await e0(A,Tt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(Xe),A.deleteSync(Tt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,D=null,O=0){const B=Math.pow(2,-O),I=Math.floor(_.image.width*B),Q=Math.floor(_.image.height*B),ce=D!==null?D.x:0,me=D!==null?D.y:0;Ge.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,ce,me,I,Q),ve.unbindTexture()};const jm=A.createFramebuffer(),Km=A.createFramebuffer();this.copyTextureToTexture=function(_,D,O=null,B=null,I=0,Q=null){Q===null&&(I!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=I,I=0):Q=0);let ce,me,fe,Le,Ue,Ce,Xe,at,Tt;const pt=_.isCompressedTexture?_.mipmaps[Q]:_.image;if(O!==null)ce=O.max.x-O.min.x,me=O.max.y-O.min.y,fe=O.isBox3?O.max.z-O.min.z:1,Le=O.min.x,Ue=O.min.y,Ce=O.isBox3?O.min.z:0;else{const Tn=Math.pow(2,-I);ce=Math.floor(pt.width*Tn),me=Math.floor(pt.height*Tn),_.isDataArrayTexture?fe=pt.depth:_.isData3DTexture?fe=Math.floor(pt.depth*Tn):fe=1,Le=0,Ue=0,Ce=0}B!==null?(Xe=B.x,at=B.y,Tt=B.z):(Xe=0,at=0,Tt=0);const ct=ye.convert(D.format),Pe=ye.convert(D.type);let St;D.isData3DTexture?(Ge.setTexture3D(D,0),St=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ge.setTexture2DArray(D,0),St=A.TEXTURE_2D_ARRAY):(Ge.setTexture2D(D,0),St=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);const Qe=A.getParameter(A.UNPACK_ROW_LENGTH),un=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Tr=A.getParameter(A.UNPACK_SKIP_PIXELS),hn=A.getParameter(A.UNPACK_SKIP_ROWS),ws=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,pt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,pt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Le),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ce);const Et=_.isDataArrayTexture||_.isData3DTexture,yn=D.isDataArrayTexture||D.isData3DTexture;if(_.isDepthTexture){const Tn=xe.get(_),Kt=xe.get(D),nn=xe.get(Tn.__renderTarget),zo=xe.get(Kt.__renderTarget);ve.bindFramebuffer(A.READ_FRAMEBUFFER,nn.__webglFramebuffer),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,zo.__webglFramebuffer);for(let Qi=0;Qi<fe;Qi++)Et&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xe.get(_).__webglTexture,I,Ce+Qi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xe.get(D).__webglTexture,Q,Tt+Qi)),A.blitFramebuffer(Le,Ue,ce,me,Xe,at,ce,me,A.DEPTH_BUFFER_BIT,A.NEAREST);ve.bindFramebuffer(A.READ_FRAMEBUFFER,null),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(I!==0||_.isRenderTargetTexture||xe.has(_)){const Tn=xe.get(_),Kt=xe.get(D);ve.bindFramebuffer(A.READ_FRAMEBUFFER,jm),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,Km);for(let nn=0;nn<fe;nn++)Et?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Tn.__webglTexture,I,Ce+nn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Tn.__webglTexture,I),yn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Kt.__webglTexture,Q,Tt+nn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Kt.__webglTexture,Q),I!==0?A.blitFramebuffer(Le,Ue,ce,me,Xe,at,ce,me,A.COLOR_BUFFER_BIT,A.NEAREST):yn?A.copyTexSubImage3D(St,Q,Xe,at,Tt+nn,Le,Ue,ce,me):A.copyTexSubImage2D(St,Q,Xe,at,Le,Ue,ce,me);ve.bindFramebuffer(A.READ_FRAMEBUFFER,null),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else yn?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(St,Q,Xe,at,Tt,ce,me,fe,ct,Pe,pt.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(St,Q,Xe,at,Tt,ce,me,fe,ct,pt.data):A.texSubImage3D(St,Q,Xe,at,Tt,ce,me,fe,ct,Pe,pt):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Q,Xe,at,ce,me,ct,Pe,pt.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Q,Xe,at,pt.width,pt.height,ct,pt.data):A.texSubImage2D(A.TEXTURE_2D,Q,Xe,at,ce,me,ct,Pe,pt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Qe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,un),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Tr),A.pixelStorei(A.UNPACK_SKIP_ROWS,hn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ws),Q===0&&D.generateMipmaps&&A.generateMipmap(St),ve.unbindTexture()},this.initRenderTarget=function(_){xe.get(_).__webglFramebuffer===void 0&&Ge.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Ge.setTextureCube(_,0):_.isData3DTexture?Ge.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Ge.setTexture2DArray(_,0):Ge.setTexture2D(_,0),ve.unbindTexture()},this.resetState=function(){w=0,R=0,U=null,ve.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}var rs=typeof self<"u"?self:{};function ar(){throw Error("Invalid UTF8")}function uf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Ia,_c;const Sx=typeof TextDecoder<"u";let Ex;const yx=typeof TextEncoder<"u";function Kd(t){if(yx)t=(Ex||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var Ql,Qa;e:{for(var hf=["CLOSURE_FLAGS"],vc=rs,xc=0;xc<hf.length;xc++)if((vc=vc[hf[xc]])==null){Qa=null;break e}Qa=vc}var $s,ff=Qa&&Qa[610401301];Ql=ff!=null&&ff;const df=rs.navigator;function _l(t){return!!Ql&&!!$s&&$s.brands.some((({brand:e})=>e&&e.indexOf(t)!=-1))}function Ln(t){var e;return(e=rs.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Oi(){return!!Ql&&!!$s&&$s.brands.length>0}function Mc(){return Oi()?_l("Chromium"):(Ln("Chrome")||Ln("CriOS"))&&!(!Oi()&&Ln("Edge"))||Ln("Silk")}function co(t){return co[" "](t),t}$s=df&&df.userAgentData||null,co[" "]=function(){};var Tx=!Oi()&&(Ln("Trident")||Ln("MSIE"));!Ln("Android")||Mc(),Mc(),Ln("Safari")&&(Mc()||!Oi()&&Ln("Coast")||!Oi()&&Ln("Opera")||!Oi()&&Ln("Edge")||(Oi()?_l("Microsoft Edge"):Ln("Edg/"))||Oi()&&_l("Opera"));var $d={},Ns=null;function Ax(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(l){for(;c<s.length;){const u=s.charAt(c++),f=Ns[u];if(f!=null)return f;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return l}Zd();let c=0;for(;;){const l=o(-1),u=o(0),f=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|u>>4),f!=64&&(a(u<<4&240|f>>2),d!=64&&a(f<<6&192|d))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function Zd(){if(!Ns){Ns={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));$d[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Ns[s]===void 0&&(Ns[s]=r)}}}}var Jd=typeof Uint8Array<"u",Qd=!Tx&&typeof btoa=="function";function pf(t){if(!Qd){var e;e===void 0&&(e=0),Zd(),e=$d[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let c=0,l=0;for(;c<t.length-2;c+=3){var r=t[c],s=t[c+1],a=t[c+2],o=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|a>>6],a=e[63&a],n[l++]=o+r+s+a}switch(o=0,a=i,t.length-c){case 2:a=e[(15&(o=t[c+1]))<<2]||i;case 1:t=t[c],n[l]=e[t>>2]+e[(3&t)<<4|o>>4]+a+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const mf=/[-_.]/g,bx={"-":"+",_:"/",".":"="};function wx(t){return bx[t]||""}function ep(t){if(!Qd)return Ax(t);mf.test(t)&&(t=t.replace(mf,wx)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Mr(t){return Jd&&t!=null&&t instanceof Uint8Array}var ss={};function Sr(){return Rx||=new Ei(null,ss)}function eu(t){tp(ss);var e=t.g;return(e=e==null||Mr(e)?e:typeof e=="string"?ep(e):null)==null?e:t.g=e}var Ei=class{h(){return new Uint8Array(eu(this)||0)}constructor(t,e){if(tp(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Rx,Cx;function tp(t){if(t!==ss)throw Error("illegal external caller")}function np(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function vl(t){return np(t=Error(t),"warning"),t}function tu(t){if(t!=null){var e=Cx??={},n=e[t]||0;n>=5||(e[t]=n+1,np(t=Error(),"incident"),(function(i){rs.setTimeout((()=>{throw i}),0)})(t))}}var lo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function vs(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Px=vs("jas",void 0,!0),gf=vs(void 0,"0di"),Ds=vs(void 0,"1oa"),as=vs(void 0,Symbol()),Lx=vs(void 0,"0actk"),ip=vs(void 0,"8utk");const Ae=lo?Px:"Ea",rp={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},sp=Object.defineProperties;function uo(t,e){lo||Ae in t||sp(t,rp),t[Ae]|=e}function Ut(t,e){lo||Ae in t||sp(t,rp),t[Ae]=e}function xs(t){return uo(t,34),t}function Dx(t,e){Ut(e,-15615&(0|t))}function xl(t,e){Ut(e,-15581&(34|t))}function ho(){return typeof BigInt=="function"}function on(t){return Array.prototype.slice.call(t)}var nu,oa={};function fo(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function iu(t,e){if(t!=null){if(typeof t=="string")t=t?new Ei(t,ss):Sr();else if(t.constructor!==Ei)if(Mr(t))t=t.length?new Ei(new Uint8Array(t),ss):Sr();else{if(!e)throw Error();t=void 0}}return t}const _f=[];function Ki(t){if(2&t)throw Error()}Ut(_f,55),nu=Object.freeze(_f);class vf{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}function ru(t){return as?t[as]:void 0}var Ix=Object.freeze({});function po(t){return t.Na=!0,t}var Ux=po((t=>typeof t=="number")),xf=po((t=>typeof t=="string")),Fx=po((t=>typeof t=="boolean")),mo=typeof rs.BigInt=="function"&&typeof rs.BigInt(0)=="bigint";function Gi(t){var e=t;if(xf(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Ux(e)&&!Number.isSafeInteger(e))throw Error(String(e));return mo?BigInt(t):t=Fx(t)?t?"1":"0":xf(t)?t.trim()||"0":String(t)}var Ml=po((t=>mo?t>=Ox&&t<=kx:t[0]==="-"?Mf(t,Nx):Mf(t,Bx)));const Nx=Number.MIN_SAFE_INTEGER.toString(),Ox=mo?BigInt(Number.MIN_SAFE_INTEGER):void 0,Bx=Number.MAX_SAFE_INTEGER.toString(),kx=mo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Mf(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const zx=typeof Uint8Array.prototype.slice=="function";let ap,lt=0,At=0;function Sf(t){const e=t>>>0;lt=e,At=(t-e)/4294967296>>>0}function Er(t){if(t<0){Sf(-t);const[e,n]=cu(lt,At);lt=e>>>0,At=n>>>0}else Sf(t)}function su(t){const e=ap||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),At=0,lt=e.getUint32(0,!0)}function au(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Zs(t,e)}function ou(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),typeof(t=au(t,e))=="number"?n?-t:t:n?"-"+t:t}function Zs(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else ho()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Ef(n)+Ef(t));return n}function Ef(t){return t=String(t),"0000000".slice(t.length)+t}function op(){var t=lt,e=At;if(2147483648&e)if(ho())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=cu(t,e);t="-"+Zs(n,i)}else t=Zs(t,e);return t}function go(t){if(t.length<16)Er(Number(t));else if(ho())t=BigInt(t),lt=Number(t&BigInt(4294967295))>>>0,At=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");At=lt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));At*=1e6,lt=1e6*lt+s,lt>=4294967296&&(At+=Math.trunc(lt/4294967296),At>>>=0,lt>>>=0)}if(e){const[i,r]=cu(lt,At);lt=i,At=r}}}function cu(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}const Js=typeof BigInt=="function"?BigInt.asIntN:void 0,Gx=typeof BigInt=="function"?BigInt.asUintN:void 0,Vi=Number.isSafeInteger,_o=Number.isFinite,os=Math.trunc,Vx=Gi(0);function $i(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function cp(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const Hx=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Qs(t){switch(typeof t){case"bigint":return!0;case"number":return _o(t);case"string":return Hx.test(t);default:return!1}}function Ms(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return _o(t)?0|t:void 0}function lp(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return _o(t)?t>>>0:void 0}function yf(t){if(t[0]==="-")return!1;const e=t.length;return e<20||e===20&&Number(t.substring(0,6))<184467}function up(t){const e=t.length;return t[0]==="-"?e<20||e===20&&Number(t.substring(0,7))>-922337:e<19||e===19&&Number(t.substring(0,6))<922337}function hp(t){return up(t)?t:(go(t),op())}function lu(t){return t=os(t),Vi(t)||(Er(t),t=ou(lt,At)),t}function fp(t){var e=os(Number(t));return Vi(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),hp(t))}function Tf(t){var e=os(Number(t));return Vi(e)?Gi(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),ho()?Gi(Js(64,BigInt(t))):Gi(hp(t)))}function Af(t){if(Vi(t))t=Gi(lu(t));else{if(t=os(t),Vi(t))t=String(t);else{const e=String(t);up(e)?t=e:(Er(t),t=op())}t=Gi(t)}return t}function Sl(t){return t==null?t:typeof t=="bigint"?(Ml(t)?t=Number(t):(t=Js(64,t),t=Ml(t)?Number(t):String(t)),t):Qs(t)?typeof t=="number"?lu(t):fp(t):void 0}function Wx(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(Gx(64,t));if(Qs(t)){if(e==="string")return e=os(Number(t)),Vi(e)&&e>=0?t=String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),yf(t)||(go(t),t=Zs(lt,At))),t;if(e==="number")return(t=os(t))>=0&&Vi(t)?t:(function(n){if(n<0){Er(n);var i=Zs(lt,At);return n=Number(i),Vi(n)?n:i}return yf(i=String(n))?i:(Er(n),au(lt,At))})(t)}}function dp(t){if(typeof t!="string")throw Error();return t}function Ss(t){if(t!=null&&typeof t!="string")throw Error();return t}function cs(t){return t==null||typeof t=="string"?t:void 0}function uu(t,e,n,i){if(t!=null&&typeof t=="object"&&t.W===oa)return t;if(!Array.isArray(t))return n?2&i?((t=e[gf])||(xs((t=new e).u),t=e[gf]=t),e=t):e=new e:e=void 0,e;let r=n=0|t[Ae];return r===0&&(r|=32&i),r|=2&i,r!==n&&Ut(t,r),new e(t)}function Xx(t,e,n){if(e)e:{if(!Qs(e=t))throw vl("int64");switch(typeof e){case"string":e=Tf(e);break e;case"bigint":e=Gi(Js(64,e));break e;default:e=Af(e)}}else t=typeof(e=t),e=e==null?e:t==="bigint"?Gi(Js(64,e)):Qs(e)?t==="string"?Tf(e):Af(e):void 0;return(t=e)==null?n?Vx:void 0:t}function qx(t){return t}const Yx={};let jx=(function(){try{return co(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Sc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const Kx=jx?(Object.setPrototypeOf(Sc.prototype,Map.prototype),Object.defineProperties(Sc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Sc):class extends Map{constructor(){super()}};function bf(t){return t}function Ec(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var oi=class extends Kx{constructor(t,e,n=bf,i=bf){super();let r=0|t[Ae];r|=64,Ut(t,r),this.M=r,this.I=e,this.S=n,this.X=this.I?$x:i;for(let s=0;s<t.length;s++){const a=t[s],o=n(a[0],!1,!0);let c=a[1];e?c===void 0&&(c=null):c=i(a[1],!1,!0,void 0,void 0,r),super.set(o,c)}}La(){var t=t3;if(this.size!==0)return Array.from(super.entries(),(e=>(e[0]=t(e[0]),e[1]=t(e[1]),e)))}da(t=Zx){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){Ec(this),super.clear()}delete(t){return Ec(this),super.delete(this.S(t,!0,!1))}entries(){if(this.I){var t=super.keys();t=new vf(t,Jx,this)}else t=super.entries();return t}values(){if(this.I){var t=super.keys();t=new vf(t,oi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.I?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return Ec(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.X(e,!0,!0,this.I,!1,this.M))}Ja(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.I?t===void 0?null:t:this.X(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.I;return n?((n=this.X(e,!1,!0,n,this.pa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function $x(t,e,n,i,r,s){return t=uu(t,i,n,s),r&&(t=Mo(t)),t}function Zx(t){return t}function Jx(t){return[t,this.get(t)]}let Qx,pp,mp,e3;function wf(){return Qx||=new oi(xs([]),void 0,void 0,void 0,Yx)}function El(t,e,n,i,r){if(t!=null){if(Array.isArray(t)){const s=0|t[Ae];return t.length===0&&1&s?void 0:r&&2&s?t:vo(t,e,n,i!==void 0,r)}return e(t,i)}}function vo(t,e,n,i,r){const s=i||n?0|t[Ae]:0,a=i?!!(32&s):void 0;let o=0;const c=(i=on(t)).length;for(let v=0;v<c;v++){var l=i[v];if(v===c-1&&fo(l)){var u=e,f=n,d=a,m=r;let M;for(let p in l){const h=El(l[p],u,f,d,m);h!=null&&((M??={})[p]=h)}l=M}else l=El(i[v],e,n,a,r);i[v]=l,l!=null&&(o=v+1)}return o<c&&(i.length=o),n&&((t=ru(t))&&(i[as]=on(t)),n(s,i)),i}function t3(t){return El(t,hu,void 0,void 0,!1)}function hu(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Ml(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Mr(t))return Mr(t)&&tu(ip),pf(t);if(t.W===oa)return gp(t);if(t instanceof Ei){const e=t.g;return e==null?"":typeof e=="string"?e:t.g=pf(e)}return t instanceof oi?t.La():void 0}return t}function gp(t){var e=t.u;t=vo(e,hu,void 0,void 0,!1);var n=0|e[Ae];if((e=t.length)&&!(512&n)){var i=t[e-1],r=!1;fo(i)?(e--,r=!0):i=void 0;var s=e-(n=512&n?0:-1),a=(pp??qx)(s,n,t,i);if(i&&(t[e]=void 0),s<a&&i){for(var o in s=!0,i){const c=+o;c<=a?(t[r=c+n]=i[o],e=Math.max(r+1,e),r=!1,delete i[o]):s=!1}s&&(i=void 0)}for(s=e-1;e>0;s=e-1)if((o=t[s])==null)e--,r=!0;else{if(!((s-=n)>=a))break;(i??={})[s]=o,e--,r=!0}r&&(t.length=e),i&&t.push(i)}return t}function Hi(t,e,n){return t=_p(t,e[0],e[1],n?1:2),e!==mp&&n&&uo(t,8192),t}function _p(t,e,n,i){if(t==null){var r=96;n?(t=[n],r|=512):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(8192&(r=0|t[Ae])||!(64&r)||2&r||tu(Lx),1024&r)throw Error("farr");if(64&r)return t;if(i===1||i===2||(r|=64),n&&(r|=512,n!==t[0]))throw Error("mid");e:{var s=(n=t).length;if(s){var a=s-1;if(fo(i=n[a])){if((a-=e=512&(r|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var o in i)(s=+o)<a&&(n[s+e]=i[o],delete i[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(512&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Ut(t,r),t}function yl(t,e,n=xl){if(t!=null){if(Jd&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=0|t[Ae];return 2&i?t:(e&&=i===0||!!(32&i)&&!(64&i||!(16&i)),e?(Ut(t,34|i),4&i&&Object.freeze(t),t):vo(t,yl,4&i?xl:n,!0,!0))}return t.W===oa?t=2&(i=0|(n=t.u)[Ae])?t:new t.constructor(xo(n,i,!0)):t instanceof oi&&!(2&t.M)&&(n=xs(t.da(yl)),t=new oi(n,t.I,t.S,t.X)),t}}function xo(t,e,n){const i=n||2&e?xl:Dx,r=!!(32&e);return t=(function(s,a,o){const c=on(s);var l=c.length;const u=256&a?c[l-1]:void 0;for(l+=u?-1:0,a=512&a?1:0;a<l;a++)c[a]=o(c[a]);if(u){a=c[a]={};for(const f in u)a[f]=o(u[f])}return(s=ru(s))&&(c[as]=on(s)),c})(t,e,(s=>yl(s,r,i))),uo(t,32|(n?2:0)),t}function Mo(t){const e=t.u,n=0|e[Ae];return 2&n?new t.constructor(xo(e,n,!1)):t}function ls(t,e){return Ri(t=t.u,0|t[Ae],e)}function Ri(t,e,n){if(n===-1)return null;const i=n+(512&e?0:-1),r=t.length-1;return i>=r&&256&e?t[r][n]:i<=r?t[i]:void 0}function ft(t,e,n){const i=t.u;let r=0|i[Ae];return Ki(r),yt(i,r,e,n),t}function yt(t,e,n,i){const r=512&e?0:-1,s=n+r;var a=t.length-1;return s>=a&&256&e?(t[a][n]=i,e):s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=e>>14&1023||536870912)?i!=null&&(t[a+r]={[n]:i},Ut(t,e|=256)):t[s]=i),e)}function Wa(t,e){let n=0|(t=t.u)[Ae];const i=Ri(t,n,e),r=$i(i);return r!=null&&r!==i&&yt(t,n,e,r),r}function vp(t){let e=0|(t=t.u)[Ae];const n=Ri(t,e,1),i=iu(n,!0);return i!=null&&i!==n&&yt(t,e,1,i),i}function mr(){return Ix===void 0?2:4}function gr(t,e,n,i,r){const s=t.u,a=2&(t=0|s[Ae])?1:i;r=!!r;let o=0|(i=fu(s,t,e))[Ae];if(!(4&o)){4&o&&(i=on(i),o=yi(o,t),t=yt(s,t,e,i));let c=0,l=0;for(;c<i.length;c++){const u=n(i[c]);u!=null&&(i[l++]=u)}l<c&&(i.length=l),o=du(o,t),n=-2049&(20|o),o=n&=-4097,Ut(i,o),2&o&&Object.freeze(i)}return a===1||a===4&&32&o?Mi(o)||(r=o,o|=2,o!==r&&Ut(i,o),Object.freeze(i)):(a===2&&Mi(o)&&(i=on(i),o=yi(o,t),o=Wi(o,t,r),Ut(i,o),t=yt(s,t,e,i)),Mi(o)||(e=o,o=Wi(o,t,r),o!==e&&Ut(i,o))),i}function fu(t,e,n){return t=Ri(t,e,n),Array.isArray(t)?t:nu}function du(t,e){return t===0&&(t=yi(t,e)),1|t}function Mi(t){return!!(2&t)&&!!(4&t)||!!(1024&t)}function xp(t){t=on(t);for(let e=0;e<t.length;e++){const n=t[e]=on(t[e]);Array.isArray(n[1])&&(n[1]=xs(n[1]))}return t}function Tl(t,e,n,i){let r=0|(t=t.u)[Ae];Ki(r),yt(t,r,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Es(t,e,n,i){Ki(e);let r=fu(t,e,n);const s=r!==nu;if(64&e||!(8192&e)||!s){const a=s?0|r[Ae]:0;let o=a;(!s||2&o||Mi(o)||4&o&&!(32&o))&&(r=on(r),o=yi(o,e),e=yt(t,e,n,r)),o=-13&du(o,e),o=Wi(i?-17&o:16|o,e,!0),o!==a&&Ut(r,o)}return r}function yc(t,e){var n=om;return mu(pu(t=t.u),t,0|t[Ae],n)===e?e:-1}function pu(t){if(lo)return t[Ds]??(t[Ds]=new Map);if(Ds in t)return t[Ds];const e=new Map;return Object.defineProperty(t,Ds,{value:e}),e}function Mp(t,e,n,i){const r=pu(t),s=mu(r,t,e,n);return s!==i&&(s&&(e=yt(t,e,s)),r.set(n,i)),e}function mu(t,e,n,i){let r=t.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const a=i[s];Ri(e,n,a)!=null&&(r!==0&&(n=yt(e,n,r)),r=a)}return t.set(i,r),r}function gu(t,e,n){let i=0|t[Ae];const r=Ri(t,i,n);let s;if(r!=null&&r.W===oa)return(e=Mo(r))!==r&&yt(t,i,n,e),e.u;if(Array.isArray(r)){const a=0|r[Ae];s=2&a?Hi(xo(r,a,!1),e,!0):64&a?r:Hi(s,e,!0)}else s=Hi(void 0,e,!0);return s!==r&&yt(t,i,n,s),s}function Sp(t,e,n){let i=0|(t=t.u)[Ae];const r=Ri(t,i,n);return(e=uu(r,e,!1,i))!==r&&e!=null&&yt(t,i,n,e),e}function Je(t,e,n){if((e=Sp(t,e,n))==null)return e;let i=0|(t=t.u)[Ae];if(!(2&i)){const r=Mo(e);r!==e&&yt(t,i,n,e=r)}return e}function Ep(t,e,n,i,r,s,a){t=t.u;var o=!!(2&e);const c=o?1:r;s=!!s,a&&=!o;var l=0|(r=fu(t,e,i))[Ae];if(!(o=!!(4&l))){var u=r,f=e;const d=!!(2&(l=du(l,e)));d&&(f|=2);let m=!d,v=!0,M=0,p=0;for(;M<u.length;M++){const h=uu(u[M],n,!1,f);if(h instanceof n){if(!d){const b=!!(2&(0|h.u[Ae]));m&&=!b,v&&=b}u[p++]=h}}p<M&&(u.length=p),l|=4,l=v?16|l:-17&l,Ut(u,l=m?8|l:-9&l),d&&Object.freeze(u)}if(a&&!(8&l||!r.length&&(c===1||c===4&&32&l))){for(Mi(l)&&(r=on(r),l=yi(l,e),e=yt(t,e,i,r)),n=r,a=l,u=0;u<n.length;u++)(l=n[u])!==(f=Mo(l))&&(n[u]=f);a|=8,Ut(n,a=n.length?-17&a:16|a),l=a}return c===1||c===4&&32&l?Mi(l)||(e=l,(l|=!r.length||16&l&&(!o||32&l)?2:1024)!==e&&Ut(r,l),Object.freeze(r)):(c===2&&Mi(l)&&(Ut(r=on(r),l=Wi(l=yi(l,e),e,s)),e=yt(t,e,i,r)),Mi(l)||(i=l,(l=Wi(l,e,s))!==i&&Ut(r,l))),r}function Ai(t,e,n){const i=0|t.u[Ae];return Ep(t,i,e,n,mr(),!1,!(2&i))}function Re(t,e,n,i){return i==null&&(i=void 0),ft(t,n,i)}function zs(t,e,n,i){i==null&&(i=void 0);e:{let r=0|(t=t.u)[Ae];if(Ki(r),i==null){const s=pu(t);if(mu(s,t,r,n)!==e)break e;s.set(n,0)}else r=Mp(t,r,n,e);yt(t,r,e,i)}}function yi(t,e){return-1025&(t=32|(2&e?2|t:-3&t))}function Wi(t,e,n){return 32&e&&n||(t&=-33),t}function So(t,e,n){Ki(0|t.u[Ae]),gr(t,e,cs,2,!0).push(dp(n))}function eo(t,e,n,i){const r=0|t.u[Ae];Ki(r),t=Ep(t,r,n,e,2,!0),i=i??new n,t.push(i),t[Ae]=2&(0|i.u[Ae])?-9&t[Ae]:-17&t[Ae]}function In(t,e){return Ms(ls(t,e))}function Fn(t,e){return cs(ls(t,e))}function Ct(t,e){return Wa(t,e)??0}function ea(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);ft(t,e,n)}function ci(t,e,n){if(n!=null){if(typeof n!="number"||!_o(n))throw vl("int32");n|=0}ft(t,e,n)}function Me(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);ft(t,e,n)}function to(t,e,n){{const a=t.u;let o=0|a[Ae];if(Ki(o),n==null)yt(a,o,e);else{var i=t=0|n[Ae],r=Mi(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=on(n),i=0,t=Wi(t=yi(t,o),o,!0),s=!1),t|=21,r=0;r<n.length;r++){const c=n[r],l=dp(c);Object.is(c,l)||(s&&(n=on(n),i=0,t=Wi(t=yi(t,o),o,!0),s=!1),n[r]=l)}t!==i&&(s&&(n=on(n),t=Wi(t=yi(t,o),o,!0)),Ut(n,t)),yt(a,o,e,n)}}}function yp(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function _u(){return Error("Failed to read varint, encoding is invalid.")}function Tp(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function vu(t){if(typeof t=="string")return{buffer:ep(t),O:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Uint8Array)return{buffer:t,O:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Ei)return{buffer:eu(t)||new Uint8Array(0),O:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function xu(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);for(s>32&&(r|=(127&n)>>4),s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(_r(t,o),n<128)return e(i>>>0,r>>>0);throw _u()}function Mu(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return _r(t,n),!!(127&e)}throw _u()}function Yi(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw _u();return _r(t,n),r}function bi(t){return Yi(t)>>>0}function Al(t){var e=t.h;const n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],_r(t,t.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function bl(t){var e=Al(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function n3(t){return Yi(t)}function Tc(t,e,{aa:n=!1}={}){t.aa=n,e&&(e=vu(e),t.h=e.buffer,t.m=e.O,t.j=0,t.l=t.h.length,t.g=t.j)}function _r(t,e){if(t.g=e,e>t.l)throw Tp(t.l,e)}function Ap(t,e){if(e<0)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw Tp(e,t.l-n);return t.g=i,n}function bp(t,e){if(e==0)return Sr();var n=Ap(t,e);return t.aa&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):zx?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Sr():new Ei(n,ss)}oi.prototype.toJSON=void 0;var Rf=[];function wp(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=bi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5))throw yp(n,t.l);if(e<1)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Xa(t){switch(t.h){case 0:t.h!=0?Xa(t):Mu(t.g);break;case 1:_r(t=t.g,t.g+8);break;case 2:if(t.h!=2)Xa(t);else{var e=bi(t.g);_r(t=t.g,t.g+e)}break;case 5:_r(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!wp(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Xa(t)}break;default:throw yp(t.h,t.l)}}function ca(t,e,n){const i=t.g.l,r=bi(t.g),s=t.g.g+r;let a=s-i;if(a<=0&&(t.g.l=s,n(e,t,void 0,void 0,void 0),a=s-t.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=i,e}function Su(t){var e=bi(t.g),n=Ap(t=t.g,e);if(t=t.h,Sx){var i,r=t;(i=_c)||(i=_c=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(Ia===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ia=!0}catch{Ia=!1}}throw!Ia&&(_c=void 0),o}}else{e=(s=n)+e,n=[];let o,c=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?ar():(o=t[s++],a<194||(192&o)!=128?(s--,ar()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?ar():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,ar()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?ar():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,ar()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):ar(),n.length>=8192&&(c=uf(c,n),n.length=0)}s=uf(c,n)}return s}function Rp(t){const e=bi(t.g);return bp(t.g,e)}function Eo(t,e,n){var i=bi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Ua=[];function Xn(t,e,n){e.g?e.m(t,e.g,e.h,n):e.m(t,e.h,n)}var ge=class{constructor(t,e){this.u=_p(t,e)}toJSON(){try{var t=gp(this)}finally{pp=void 0}return t}l(){var t=B3;return t.g?t.l(this,t.g,t.h):t.l(this,t.h,t.defaultValue)}clone(){const t=this.u;return new this.constructor(xo(t,0|t[Ae],!1))}O(){return!!(2&(0|this.u[Ae]))}};function Cf(t){return t?/^\d+$/.test(t)?(go(t),new wl(lt,At)):null:i3||=new wl(0,0)}ge.prototype.W=oa,ge.prototype.toString=function(){return this.u.toString()};var wl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let i3;function Pf(t){return t?/^-?\d+$/.test(t)?(go(t),new Rl(lt,At)):null:r3||=new Rl(0,0)}var Rl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let r3;function Yr(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function ys(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function yo(t,e){if(e>=0)ys(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function ta(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function us(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Mn(t,e,n){ys(t.g,8*e+n)}function Eu(t,e){return Mn(t,e,2),e=t.g.end(),us(t,e),e.push(t.h),e}function yu(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function To(t,e,n){Mn(t,e,2),ys(t.g,n.length),us(t,t.g.end()),us(t,n)}function no(t,e,n,i){n!=null&&(e=Eu(t,e),i(n,t),yu(t,e))}function qn(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Tu=qn(),Cp=qn(),Au=qn(),bu=qn(),Pp=qn(),Lp=qn(),wu=qn(),Dp=qn(),Ip=qn(),Ts=class{constructor(t,e,n){this.g=t,this.h=e,t=Tu,this.l=!!t&&n===t||!1}};function Ao(t,e){return new Ts(t,e,Tu)}function Up(t,e,n,i,r){no(t,n,Bp(e,i),r)}const s3=Ao((function(t,e,n,i,r){return t.h===2&&(ca(t,gu(e,i,n),r),!0)}),Up),a3=Ao((function(t,e,n,i,r){return t.h===2&&(ca(t,gu(e,i,n),r),!0)}),Up);var bo=Symbol(),Ru=Symbol(),Lf=Symbol(),Df=Symbol();let Fp,Np;function yr(t,e,n,i){var r=i[t];if(r)return r;(r={}).Ma=i,r.T=(function(f){switch(typeof f){case"boolean":return mp||=[0,void 0,!0];case"number":return f>0?void 0:f===0?e3||=[0,void 0]:[-f,void 0];case"string":return[0,f];case"object":return f}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ga=s,typeof(s=i[++a])=="function"&&(r.la=!0,Fp??=s,Np??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)o[s[c]]=s;s=i[++a]}for(c=1;s!==void 0;){let f;typeof s=="number"&&(c+=s,s=i[++a]);var l=void 0;if(s instanceof Ts?f=s:(f=s3,a--),f?.l){s=i[++a],l=i;var u=a;typeof s=="function"&&(s=s(),l[u]=s),l=s}for(u=c+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);c<u;c++){const d=o[c];l?n(r,c,f,l,d):e(r,c,f,d)}}return i[t]=r}function Op(t){return Array.isArray(t)?t[0]instanceof Ts?t:[a3,t]:[t,void 0]}function Bp(t,e){return t instanceof ge?t.u:Array.isArray(t)?Hi(t,e,!1):void 0}function Cu(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function Pu(t,e,n,i,r){const s=n.g;let a,o;t[e]=(c,l,u)=>s(c,l,u,o||=yr(Ru,Cu,Pu,i).T,a||=Lu(i),r)}function Lu(t){let e=t[Lf];if(e!=null)return e;const n=yr(Ru,Cu,Pu,t);return e=n.la?(i,r)=>Fp(i,r,n):(i,r)=>{const s=0|i[Ae];for(;wp(r)&&r.h!=4;){var a=r.m,o=n[a];if(o==null){var c=n.ga;c&&(c=c[a])&&(c=o3(c))!=null&&(o=n[a]=c)}o!=null&&o(r,i,a)||(a=(o=r).l,Xa(o),o.fa?o=void 0:(c=o.g.g-a,o.g.g=a,o=bp(o.g,c)),a=i,o&&((c=a[as])?c.push(o):a[as]=[o]))}return 8192&s&&xs(i),!0},t[Lf]=e}function o3(t){const e=(t=Op(t))[0].g;if(t=t[1]){const n=Lu(t),i=yr(Ru,Cu,Pu,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function wo(t,e,n){t[e]=n.h}function Ro(t,e,n,i){let r,s;const a=n.h;t[e]=(o,c,l)=>a(o,c,l,s||=yr(bo,wo,Ro,i).T,r||=kp(i))}function kp(t){let e=t[Df];if(!e){const n=yr(bo,wo,Ro,t);e=(i,r)=>zp(i,r,n),t[Df]=e}return e}function zp(t,e,n){(function(i,r,s){const a=512&r?0:-1,o=i.length,c=o+((r=64&r?256&r:!!o&&fo(i[o-1]))?-1:0);for(let l=0;l<c;l++)s(l-a,i[l]);if(r){i=i[o-1];for(const l in i)!isNaN(l)&&s(+l,i[l])}})(t,0|t[Ae]|(n.T[1]?512:0),((i,r)=>{if(r!=null){var s=(function(a,o){var c=a[o];if(c)return c;if((c=a.ga)&&(c=c[o])){var l=(c=Op(c))[0].h;if(c=c[1]){const u=kp(c),f=yr(bo,wo,Ro,c).T;c=a.la?Np(f,u):(d,m,v)=>l(d,m,v,f,u)}else c=l;return a[o]=c}})(n,i);s&&s(e,r,i)}})),(t=ru(t))&&(function(i,r){us(i,i.g.end());for(let s=0;s<r.length;s++)us(i,eu(r[s])||new Uint8Array(0))})(e,t)}function As(t,e){if(Array.isArray(e)){var n=0|e[Ae];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),Ut(e,-6145&(5|n)),2&n&&Object.freeze(e),e}}function en(t,e,n){return new Ts(t,e,n)}function bs(t,e,n){return new Ts(t,e,n)}function tn(t,e,n){yt(t,0|t[Ae],e,n)}var c3=Ao((function(t,e,n,i,r){return t.h===2&&(t=ca(t,Hi([void 0,void 0],i,!0),r),Ki(i=0|e[Ae]),(r=Ri(e,i,n))instanceof oi?(2&r.M)!=0?((r=r.da()).push(t),yt(e,i,n,r)):r.Ja(t):Array.isArray(r)?(2&(0|r[Ae])&&yt(e,i,n,r=xp(r)),r.push(t)):yt(e,i,n,[t]),!0)}),(function(t,e,n,i,r){if(e instanceof oi)e.forEach(((s,a)=>{no(t,n,Hi([a,s],i,!1),r)}));else if(Array.isArray(e))for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&no(t,n,Hi(a,i,!1),r)}}));function Gp(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(Js(64,i));if(Qs(i)){if(r==="string")return fp(i);if(r==="number")return lu(i)}})(e),e!=null&&(typeof e=="string"&&Pf(e),e!=null))switch(Mn(t,n,0),typeof e){case"number":t=t.g,Er(e),Yr(t,lt,At);break;case"bigint":n=BigInt.asUintN(64,e),n=new Rl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Yr(t.g,n.h,n.g);break;default:n=Pf(e),Yr(t.g,n.h,n.g)}}function Vp(t,e,n){(e=Ms(e))!=null&&e!=null&&(Mn(t,n,0),yo(t.g,e))}function Hp(t,e,n){(e=cp(e))!=null&&(Mn(t,n,0),t.g.g.push(e?1:0))}function Wp(t,e,n){(e=cs(e))!=null&&To(t,n,Kd(e))}function Xp(t,e,n,i,r){no(t,n,Bp(e,i),r)}function qp(t,e,n){e==null||typeof e=="string"||e instanceof Ei||(Mr(e)?Mr(e)&&tu(ip):e=void 0),e!=null&&To(t,n,vu(e).buffer)}function Yp(t,e,n){return(t.h===5||t.h===2)&&(e=Es(e,0|e[Ae],n,!1),t.h==2?Eo(t,bl,e):e.push(bl(t.g)),!0)}var _i=en((function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=Al(i);const r=Al(i);i=2*(r>>31)+1;const s=r>>>20&2047;return t=4294967296*(1048575&r)+t,tn(e,n,s==2047?t?NaN:i*(1/0):s==0?5e-324*i*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0}),(function(t,e,n){(e=$i(e))!=null&&(Mn(t,n,1),t=t.g,(n=ap||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),lt=n.getUint32(0,!0),At=n.getUint32(4,!0),ta(t,lt),ta(t,At))}),qn()),Ft=en((function(t,e,n){return t.h===5&&(tn(e,n,bl(t.g)),!0)}),(function(t,e,n){(e=$i(e))!=null&&(Mn(t,n,5),t=t.g,su(e),ta(t,lt))}),wu),l3=bs(Yp,(function(t,e,n){if((e=As($i,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Mn(i,r,5),i=i.g,su(s),ta(i,lt))}}),wu),Du=bs(Yp,(function(t,e,n){if((e=As($i,e))!=null&&e.length){Mn(t,n,2),ys(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,su(e[i]),ta(n,lt)}}),wu),ji=en((function(t,e,n){return t.h===0&&(tn(e,n,xu(t.g,ou)),!0)}),Gp,Lp),Ac=en((function(t,e,n){return t.h===0&&(tn(e,n,(t=xu(t.g,ou))===0?void 0:t),!0)}),Gp,Lp),u3=en((function(t,e,n){return t.h===0&&(tn(e,n,xu(t.g,au)),!0)}),(function(t,e,n){if((e=Wx(e))!=null&&(typeof e=="string"&&Cf(e),e!=null))switch(Mn(t,n,0),typeof e){case"number":t=t.g,Er(e),Yr(t,lt,At);break;case"bigint":n=BigInt.asUintN(64,e),n=new wl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Yr(t.g,n.h,n.g);break;default:n=Cf(e),Yr(t.g,n.h,n.g)}}),qn()),wt=en((function(t,e,n){return t.h===0&&(tn(e,n,Yi(t.g)),!0)}),Vp,bu),Co=bs((function(t,e,n){return(t.h===0||t.h===2)&&(e=Es(e,0|e[Ae],n,!1),t.h==2?Eo(t,Yi,e):e.push(Yi(t.g)),!0)}),(function(t,e,n){if((e=As(Ms,e))!=null&&e.length){n=Eu(t,n);for(let i=0;i<e.length;i++)yo(t.g,e[i]);yu(t,n)}}),bu),Hr=en((function(t,e,n){return t.h===0&&(tn(e,n,(t=Yi(t.g))===0?void 0:t),!0)}),Vp,bu),xt=en((function(t,e,n){return t.h===0&&(tn(e,n,Mu(t.g)),!0)}),Hp,Cp),jr=en((function(t,e,n){return t.h===0&&(tn(e,n,(t=Mu(t.g))===!1?void 0:t),!0)}),Hp,Cp),Yt=bs((function(t,e,n){return t.h===2&&(t=Su(t),Es(e,0|e[Ae],n,!1).push(t),!0)}),(function(t,e,n){if((e=As(cs,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&To(i,r,Kd(s))}}),Au),Bi=en((function(t,e,n){return t.h===2&&(tn(e,n,(t=Su(t))===""?void 0:t),!0)}),Wp,Au),st=en((function(t,e,n){return t.h===2&&(tn(e,n,Su(t)),!0)}),Wp,Au),Ot=(function(t,e,n=Tu){return new Ts(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=Hi(void 0,i,!0),Es(e,0|e[Ae],n,!0).push(i),ca(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)Xp(t,e[s],n,i,r)})),rt=Ao((function(t,e,n,i,r,s){return t.h===2&&(Mp(e,0|e[Ae],s,n),ca(t,e=gu(e,i,n),r),!0)}),Xp),jp=en((function(t,e,n){return t.h===2&&(tn(e,n,Rp(t)),!0)}),qp,Dp),h3=bs((function(t,e,n){return(t.h===0||t.h===2)&&(e=Es(e,0|e[Ae],n,!1),t.h==2?Eo(t,bi,e):e.push(bi(t.g)),!0)}),(function(t,e,n){if((e=As(lp,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Mn(i,r,0),ys(i.g,s))}}),Pp),f3=en((function(t,e,n){return t.h===0&&(tn(e,n,(t=bi(t.g))===0?void 0:t),!0)}),(function(t,e,n){(e=lp(e))!=null&&e!=null&&(Mn(t,n,0),ys(t.g,e))}),Pp),vn=en((function(t,e,n){return t.h===0&&(tn(e,n,Yi(t.g)),!0)}),(function(t,e,n){(e=Ms(e))!=null&&(e=parseInt(e,10),Mn(t,n,0),yo(t.g,e))}),Ip);class d3{constructor(e,n){this.h=e,this.g=n,this.l=Je,this.m=Re,this.defaultValue=void 0}register(){co(this)}}function Yn(t,e){return new d3(t,e)}function Zi(t,e){return(n,i)=>{if(Ua.length){const s=Ua.pop();s.o(i),Tc(s.g,n,i),n=s}else n=new class{constructor(s,a){if(Rf.length){const o=Rf.pop();Tc(o,s,a),s=o}else s=new class{constructor(o,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,Tc(this,o,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({fa:s=!1}={}){this.fa=s}}(n,i);try{const s=new t,a=s.u;Lu(e)(a,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,Ua.length<100&&Ua.push(n)}return r}}function Po(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};zp(this.u,e,yr(bo,wo,Ro,t)),us(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var If=class extends ge{constructor(t){super(t)}},Uf=[0,Bi,en((function(t,e,n){return t.h===2&&(tn(e,n,(t=Rp(t))===Sr()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof ge){const i=e.Oa;return void(i&&(e=i(e),e!=null&&To(t,n,vu(e).buffer)))}if(Array.isArray(e))return}qp(t,e,n)}),Dp)];let bc,Ff=globalThis.trustedTypes;function Nf(t){bc===void 0&&(bc=(function(){let n=null;if(!Ff)return n;try{const i=r=>r;n=Ff.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var e=bc;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(e?e.createScriptURL(t):t)}function p3(t,...e){if(e.length===0)return Nf(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return Nf(n)}var Kp=[0,wt,vn,xt,-1,Co,vn,-1],m3=class extends ge{constructor(t){super(t)}},$p=[0,xt,st,xt,vn,-1,bs((function(t,e,n){return(t.h===0||t.h===2)&&(e=Es(e,0|e[Ae],n,!1),t.h==2?Eo(t,n3,e):e.push(Yi(t.g)),!0)}),(function(t,e,n){if((e=As(Ms,e))!=null&&e.length){n=Eu(t,n);for(let i=0;i<e.length;i++)yo(t.g,e[i]);yu(t,n)}}),Ip),st,-1,[0,xt,-1],vn,xt,-1],Zp=[0,st,-2],Of=class extends ge{constructor(t){super(t)}},Jp=[0],Qp=[0,wt,xt,1,xt,-3],xn=class extends ge{constructor(t){super(t,2)}},Nt={};Nt[336783863]=[0,st,xt,-1,wt,[0,[1,2,3,4,5,6,7,8,9],rt,Jp,rt,$p,rt,Zp,rt,Qp,rt,Kp,rt,[0,st,-2],rt,[0,st,vn],rt,[0,vn,st,-1],rt,[0,vn,-1]],[0,st],xt,[0,[1,3],[2,4],rt,[0,Co],-1,rt,[0,Yt],-1,Ot,[0,st,-1]],st];var Bf=[0,Ac,-1,jr,-3,Ac,Co,Bi,Hr,Ac,-1,jr,Hr,jr,-2,Bi];function Sn(t,e){Tl(t,2,Ss(e),"")}function dt(t,e){So(t,3,e)}function je(t,e){So(t,4,e)}var Qt=class extends ge{constructor(t){super(t,500)}o(t){return Re(this,0,7,t)}},Gs=[-1,{}],kf=[0,st,1,Gs],zf=[0,st,Yt,Gs];function En(t,e){eo(t,1,Qt,e)}function mt(t,e){So(t,10,e)}function tt(t,e){So(t,15,e)}var ln=class extends ge{constructor(t){super(t,500)}o(t){return Re(this,0,1001,t)}},em=[-500,Ot,[-500,Bi,-1,Yt,-3,[-2,Nt,xt],Ot,Uf,Hr,-1,kf,zf,Ot,[0,Bi,jr],Bi,Bf,Hr,Yt,987,Yt],4,Ot,[-500,st,-1,[-1,{}],998,st],Ot,[-500,st,Yt,-1,[-2,{},xt],997,Yt,-1],Hr,Ot,[-500,st,Yt,Gs,998,Yt],Yt,Hr,kf,zf,Ot,[0,Bi,-1,Gs],Yt,-2,Bf,Bi,-1,jr,[0,jr,f3],978,Gs,Ot,Uf];ln.prototype.g=Po(em);var g3=Zi(ln,em),_3=class extends ge{constructor(t){super(t)}},tm=class extends ge{constructor(t){super(t)}g(){return Ai(this,_3,1)}},nm=[0,Ot,[0,wt,Ft,st,-1]],Lo=Zi(tm,nm),v3=class extends ge{constructor(t){super(t)}},x3=class extends ge{constructor(t){super(t)}},wc=class extends ge{constructor(t){super(t)}h(){return Je(this,v3,2)}g(){return Ai(this,x3,5)}},im=Zi(class extends ge{constructor(t){super(t)}},[0,Yt,Co,Du,[0,vn,[0,wt,-3],[0,Ft,-3],[0,wt,-1,[0,Ot,[0,wt,-2]]],Ot,[0,Ft,-1,st,Ft]],st,-1,ji,Ot,[0,wt,Ft],Yt,ji]),rm=class extends ge{constructor(t){super(t)}},Kr=Zi(class extends ge{constructor(t){super(t)}},[0,Ot,[0,Ft,-4]]),sm=class extends ge{constructor(t){super(t)}},la=Zi(class extends ge{constructor(t){super(t)}},[0,Ot,[0,Ft,-4]]),M3=class extends ge{constructor(t){super(t)}},S3=[0,wt,-1,Du,vn],am=class extends ge{constructor(t){super(t)}};am.prototype.g=Po([0,Ft,-4,ji]);var E3=class extends ge{constructor(t){super(t)}},y3=Zi(class extends ge{constructor(t){super(t)}},[0,Ot,[0,1,wt,st,nm],ji]),Gf=class extends ge{constructor(t){super(t)}},T3=class extends ge{constructor(t){super(t)}ma(){const t=vp(this);return t??Sr()}},A3=class extends ge{constructor(t){super(t)}},om=[1,2],b3=Zi(class extends ge{constructor(t){super(t)}},[0,Ot,[0,om,rt,[0,Du],rt,[0,jp],wt,st],ji]),Iu=class extends ge{constructor(t){super(t)}},cm=[0,st,wt,Ft,Yt,-1],Vf=class extends ge{constructor(t){super(t)}},w3=[0,xt,-1],Hf=class extends ge{constructor(t){super(t)}},qa=[1,2,3,4,5],io=class extends ge{constructor(t){super(t)}g(){return vp(this)!=null}h(){return Fn(this,2)!=null}},Mt=class extends ge{constructor(t){super(t)}g(){return cp(ls(this,2))??!1}},lm=[0,jp,st,[0,wt,ji,-1],[0,u3,ji]],Lt=[0,lm,xt,[0,qa,rt,Qp,rt,$p,rt,Kp,rt,Jp,rt,Zp],vn],Do=class extends ge{constructor(t){super(t)}},Uu=[0,Lt,Ft,-1,wt],R3=Yn(502141897,Do);Nt[502141897]=Uu;var C3=Zi(class extends ge{constructor(t){super(t)}},[0,[0,vn,-1,l3,h3],S3]),um=class extends ge{constructor(t){super(t)}},hm=class extends ge{constructor(t){super(t)}},Fu=[0,Lt,Ft,[0,Lt],xt],fm=[0,Lt,Uu,Fu,Ft,[0,[0,lm]]],P3=Yn(508968150,hm);Nt[508968150]=fm,Nt[508968149]=Fu;var dm=class extends ge{constructor(t){super(t)}},L3=Yn(513916220,dm);Nt[513916220]=[0,Lt,fm,wt];var kr=class extends ge{constructor(t){super(t)}h(){return Je(this,Iu,2)}g(){ft(this,2)}},pm=[0,Lt,cm];Nt[478825465]=pm;var D3=class extends ge{constructor(t){super(t)}},mm=class extends ge{constructor(t){super(t)}},Nu=class extends ge{constructor(t){super(t)}},Ou=class extends ge{constructor(t){super(t)}},gm=class extends ge{constructor(t){super(t)}},Wf=[0,Lt,[0,Lt],pm,-1],_m=[0,Lt,Ft,wt],Bu=[0,Lt,Ft],vm=[0,Lt,_m,Bu,Ft],I3=Yn(479097054,gm);Nt[479097054]=[0,Lt,vm,Wf],Nt[463370452]=Wf,Nt[464864288]=_m;var U3=Yn(462713202,Ou);Nt[462713202]=vm,Nt[474472470]=Bu;var F3=class extends ge{constructor(t){super(t)}},xm=class extends ge{constructor(t){super(t)}},Mm=class extends ge{constructor(t){super(t)}},Sm=class extends ge{constructor(t){super(t)}},ku=[0,Lt,Ft,-1,wt],Cl=[0,Lt,Ft,xt];Sm.prototype.g=Po([0,Lt,Bu,[0,Lt],Uu,Fu,ku,Cl]);var Em=class extends ge{constructor(t){super(t)}},N3=Yn(456383383,Em);Nt[456383383]=[0,Lt,cm];var ym=class extends ge{constructor(t){super(t)}},O3=Yn(476348187,ym);Nt[476348187]=[0,Lt,w3];var Tm=class extends ge{constructor(t){super(t)}},Xf=class extends ge{constructor(t){super(t)}},Am=[0,vn,-1],B3=Yn(458105876,class extends ge{constructor(t){super(t)}g(){var t=this.u;const e=0|t[Ae],n=2&e;return t=(function(i,r,s){var a=Xf;const o=2&r;let c=!1;if(s==null){if(o)return wf();s=[]}else if(s.constructor===oi){if((2&s.M)==0||o)return s;s=s.da()}else Array.isArray(s)?c=!!(2&(0|s[Ae])):s=[];if(o){if(!s.length)return wf();c||(c=!0,xs(s))}else c&&(c=!1,s=xp(s));return c||(64&(0|s[Ae])?s[Ae]&=-33:32&r&&uo(s,32)),yt(i,r,2,a=new oi(s,a,Xx,void 0)),a})(t,e,Ri(t,e,2)),!n&&Xf&&(t.pa=!0),t}});Nt[458105876]=[0,Am,c3,[!0,ji,[0,st,-1,Yt]]];var zu=class extends ge{constructor(t){super(t)}},bm=Yn(458105758,zu);Nt[458105758]=[0,Lt,st,Am];var wm=class extends ge{constructor(t){super(t)}},k3=Yn(443442058,wm);Nt[443442058]=[0,Lt,st,wt,Ft,Yt,-1,xt,Ft],Nt[514774813]=ku;var Rm=class extends ge{constructor(t){super(t)}},z3=Yn(516587230,Rm);function Pl(t,e){return e=e?e.clone():new Iu,t.displayNamesLocale!==void 0?ft(e,1,Ss(t.displayNamesLocale)):t.displayNamesLocale===void 0&&ft(e,1),t.maxResults!==void 0?ci(e,2,t.maxResults):"maxResults"in t&&ft(e,2),t.scoreThreshold!==void 0?Me(e,3,t.scoreThreshold):"scoreThreshold"in t&&ft(e,3),t.categoryAllowlist!==void 0?to(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&ft(e,4),t.categoryDenylist!==void 0?to(e,5,t.categoryDenylist):"categoryDenylist"in t&&ft(e,5),e}function Gu(t,e=-1,n=""){return{categories:t.map((i=>({index:In(i,1)??0??-1,score:Ct(i,2)??0,categoryName:Fn(i,3)??""??"",displayName:Fn(i,4)??""??""}))),headIndex:e,headName:n}}function Cm(t){var e=gr(t,3,$i,mr()),n=gr(t,2,Ms,mr()),i=gr(t,1,cs,mr()),r=gr(t,9,cs,mr());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=Je(t,wc,4)?.h())&&(s.boundingBox={originX:In(e,1)??0,originY:In(e,2)??0,width:In(e,3)??0,height:In(e,4)??0,angle:0}),Je(t,wc,4)?.g().length)for(const a of Je(t,wc,4).g())s.keypoints.push({x:Wa(a,1)??0,y:Wa(a,2)??0,score:Wa(a,4)??0,label:Fn(a,3)??""});return s}function Io(t){const e=[];for(const n of Ai(t,sm,1))e.push({x:Ct(n,1)??0,y:Ct(n,2)??0,z:Ct(n,3)??0,visibility:Ct(n,4)??0});return e}function Vs(t){const e=[];for(const n of Ai(t,rm,1))e.push({x:Ct(n,1)??0,y:Ct(n,2)??0,z:Ct(n,3)??0,visibility:Ct(n,4)??0});return e}function qf(t){return Array.from(t,(e=>e>127?e-256:e))}function Yf(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Fa;Nt[516587230]=[0,Lt,ku,Cl,Ft],Nt[518928384]=Cl;const G3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Pm(){if(Fa===void 0)try{await WebAssembly.instantiate(G3),Fa=!0}catch{Fa=!1}return Fa}async function Is(t,e=p3``){const n=await Pm()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var lr=class{};function Lm(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function jf(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}importScripts(t.toString())}function Dm(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Te(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Kf(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=Dm(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function $f(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function $n(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Fi(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}lr.forVisionTasks=function(t){return Is("vision",t)},lr.forTextTasks=function(t){return Is("text",t)},lr.forGenAiExperimentalTasks=function(t){return Is("genai_experimental",t)},lr.forGenAiTasks=function(t){return Is("genai",t)},lr.forAudioTasks=function(t){return Is("audio",t)},lr.isSimdSupported=function(){return Pm()};async function V3(t,e,n,i){return t=await(async(r,s,a,o,c)=>{if(s&&await jf(s),!self.ModuleFactory||a&&(await jf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function Rc(t,e){const n=Je(t.baseOptions,io,1)||new io;typeof e=="string"?(ft(n,2,Ss(e)),ft(n,1)):e instanceof Uint8Array&&(ft(n,1,iu(e,!1)),ft(n,2)),Re(t.baseOptions,0,1,n)}function Zf(t){try{const e=t.G.length;if(e===1)throw Error(t.G[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.G.map((n=>n.message)).join(", "))}finally{t.G=[]}}function he(t,e){t.B=Math.max(t.B,e)}function Uo(t,e){t.A=new Qt,Sn(t.A,"PassThroughCalculator"),dt(t.A,"free_memory"),je(t.A,"free_memory_unused_out"),mt(e,"free_memory"),En(e,t.A)}function hs(t,e){dt(t.A,e),je(t.A,e+"_unused_out")}function Fo(t){t.g.addBoolToStream(!0,"free_memory",t.B)}var Ll=class{constructor(t){this.g=t,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Je(this.baseOptions,io,1)?.g()||Je(this.baseOptions,io,1)?.h()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=Je(i.baseOptions,Hf,3);if(!s){var a=s=new Hf,o=new Of;zs(a,4,qa,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new m3,zs(r,2,qa,a)):(r=s,a=new Of,zs(r,4,qa,a))),Re(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Rc(this,"/model.dat"),this.m(),this.J()}));if(n.modelAssetBuffer instanceof Uint8Array)Rc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{Rc(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let t;if(this.g.ca((e=>{t=g3(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.G.push(Error(i))})),this.g.Ha(),this.g.setGraph(t,e),this.A=void 0,Zf(this)}finishProcessing(){this.g.finishProcessing(),Zf(this)}close(){this.A=void 0,this.g.closeGraph()}};function Ti(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Ll.prototype.close=Ll.prototype.close;class H3{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Jf(t,e,n){const i=t.g;if(n=Ti(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Qf(t,e){const n=t.g,i=Ti(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Ti(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.P),n.vertexAttribPointer(t.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Ti(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new H3(n,i,r,s)}function Vu(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Hu(t,e,n,i){return Vu(t,e),t.h||(t.m(),t.C()),n?(t.s||(t.s=Qf(t,!0)),n=t.s):(t.v||(t.v=Qf(t,!1)),n=t.v),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function No(t,e,n){return Vu(t,e),t=Ti(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Oo(t,e,n){Vu(t,e),t.A||(t.A=Ti(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.A),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Wu(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Xu=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Ti(t.createProgram(),"Failed to create WebGL program"),this.Z=Jf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Y=Jf(this,this.G(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.P=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.Z),t.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function vi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Dl(t){var e=vi(t,1);if(!e){if(e=vi(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=fs(t);var n=qu(t);if(Oo(n,i,Im(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function Im(t){let e=vi(t,2);if(!e){const n=fs(t);e=Fm(t);const i=Dl(t),r=Um(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Il(t)}return e}function fs(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Ti(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Um(t){if(t=fs(t),!Na)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Na=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Na=t.R16F}return Na}function qu(t){return t.l||(t.l=new Xu),t.l}function Fm(t){const e=fs(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=vi(t,2);return n||(n=No(qu(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Il(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Na,Vt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--ed===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!vi(this,0)}ja(){return!!vi(this,1)}R(){return!!vi(this,2)}ia(){return(e=vi(t=this,0))||(e=Dl(t),e=new Uint8Array(e.map((n=>255*n))),t.g.push(e)),e;var t,e}ha(){return Dl(this)}N(){return Im(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=fs(this),r=qu(this);i.activeTexture(i.TEXTURE1),n=No(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=Um(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Oo(r,i,n),Hu(r,i,!1,(()=>{Fm(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Il(this)})),Wu(r),Il(this)}}t.push(n)}return new Vt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&fs(this).deleteTexture(vi(this,2)),ed=-1}};Vt.prototype.close=Vt.prototype.close,Vt.prototype.clone=Vt.prototype.clone,Vt.prototype.getAsWebGLTexture=Vt.prototype.N,Vt.prototype.getAsFloat32Array=Vt.prototype.ha,Vt.prototype.getAsUint8Array=Vt.prototype.ia,Vt.prototype.hasWebGLTexture=Vt.prototype.R,Vt.prototype.hasFloat32Array=Vt.prototype.ja,Vt.prototype.hasUint8Array=Vt.prototype.Da;var ed=250;function ei(t,e){switch(e){case 0:return t.g.find((n=>n instanceof ImageData));case 1:return t.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Nm(t){var e=ei(t,0);if(!e){e=ds(t);const n=Bo(t),i=new Uint8Array(t.width*t.height*4);Oo(n,e,Ya(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Wu(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function Ya(t){let e=ei(t,2);if(!e){const n=ds(t);e=ja(t);const i=ei(t,1)||Nm(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Os(t)}return e}function ds(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Ti(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Bo(t){return t.l||(t.l=new Xu),t.l}function ja(t){const e=ds(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=ei(t,2);return n||(n=No(Bo(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Os(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function td(t){const e=ds(t);return Hu(Bo(t),e,!0,(()=>(function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,a=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=a,n})(t,(()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))))}var Ht=class{constructor(t,e,n,i,r,s,a){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--nd===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!ei(this,0)}ka(){return!!ei(this,1)}R(){return!!ei(this,2)}Aa(){return Nm(this)}za(){var t=ei(this,1);return t||(Ya(this),ja(this),t=td(this),Os(this),this.g.push(t),this.j=!0),t}N(){return Ya(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=ds(this),r=Bo(this);i.activeTexture(i.TEXTURE1),n=No(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Oo(r,i,n),Hu(r,i,!1,(()=>{ja(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Os(this)})),Wu(r),Os(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Ya(this),ja(this),n=td(this),Os(this)}t.push(n)}return new Ht(t,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ei(this,1).close(),this.m&&ds(this).deleteTexture(ei(this,2)),nd=-1}};Ht.prototype.close=Ht.prototype.close,Ht.prototype.clone=Ht.prototype.clone,Ht.prototype.getAsWebGLTexture=Ht.prototype.N,Ht.prototype.getAsImageBitmap=Ht.prototype.za,Ht.prototype.getAsImageData=Ht.prototype.Aa,Ht.prototype.hasWebGLTexture=Ht.prototype.R,Ht.prototype.hasImageBitmap=Ht.prototype.ka,Ht.prototype.hasImageData=Ht.prototype.Ca;var nd=250;function jn(...t){return t.map((([e,n])=>({start:e,end:n})))}const W3=(function(t){return class extends t{Ha(){this.i._registerModelResourcesGraphService()}}})((id=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Lm()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Te(this,i||"input_audio",(s=>{Te(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){$n(this,"__graph_config__",(e=>{t(e)})),Te(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Te(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){Te(this,e,(i=>{const[r,s]=Kf(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Te(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Te(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Te(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Te(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Te(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Te(this,e,(i=>{Te(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Te(this,e,(i=>{$f(this,Object.keys(t),(r=>{$f(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Te(this,n,(r=>{Te(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){Te(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Te(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Te(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Te(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Te(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Te(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Te(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Te(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Te(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Te(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Te(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Te(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Te(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Te(this,e,(n=>{Te(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Te(this,n,(i=>{Te(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Te(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Te(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Te(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Te(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Te(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Te(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Te(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){$n(this,t,e),Te(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){Fi(this,t,e),Te(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){$n(this,t,e),Te(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){Fi(this,t,e),Te(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){$n(this,t,e),Te(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){Fi(this,t,e),Te(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){$n(this,t,e),Te(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){Fi(this,t,e),Te(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){$n(this,t,e),Te(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){Fi(this,t,e),Te(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){$n(this,t,e),Te(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){Fi(this,t,e),Te(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){$n(this,t,e),Te(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){Fi(this,t,e),Te(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),$n(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Te(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends id{get ea(){return this.i}oa(t,e,n){Te(this,e,(i=>{const[r,s]=Kf(this,t,i);this.ea._addBoundTextureAsImageToStream(i,r,s,n)}))}V(t,e){$n(this,t,e),Te(this,t,(n=>{this.ea._attachImageListener(n)}))}ba(t,e){Fi(this,t,e),Te(this,t,(n=>{this.ea._attachImageVectorListener(n)}))}}));var id,Nn=class extends W3{};async function Ye(t,e,n){return(async function(i,r,s,a){return V3(i,r,s,a)})(t,n.canvas??(Lm()?void 0:document.createElement("canvas")),e,n)}function Om(t,e,n,i){if(t.U){const s=new am;if(n?.regionOfInterest){if(!t.na)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Me(s,1,(r.left+r.right)/2),Me(s,2,(r.top+r.bottom)/2),Me(s,4,r.right-r.left),Me(s,3,r.bottom-r.top)}else Me(s,1,.5),Me(s,2,.5),Me(s,4,1),Me(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Me(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=Dm(e);n=Ct(s,3)*o/a,r=Ct(s,4)*a/o,Me(s,4,n),Me(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.oa(e,t.Z,i??performance.now()),t.finishProcessing()}function On(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Om(t,e,n,t.B+1)}function li(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Om(t,e,n,i)}function ps(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Vt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var cn=class extends Ll{constructor(t,e,n,i){super(t),this.g=t,this.Z=e,this.U=n,this.na=i,this.P=new Xu}l(t,e=!0){if("runningMode"in t&&ea(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};cn.prototype.close=cn.prototype.close;var bn=class extends cn{constructor(t,e){super(new Nn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Re(t=this.h=new Do,0,1,e=new Mt),Me(this.h,2,.5),Me(this.h,3,.3)}get baseOptions(){return Je(this.h,Mt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Me(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Me(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}D(t,e){return this.j={detections:[]},On(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},li(this,t,n,e),this.j}m(){var t=new ln;mt(t,"image_in"),mt(t,"norm_rect_in"),tt(t,"detections");const e=new xn;Xn(e,R3,this.h);const n=new Qt;Sn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),dt(n,"IMAGE:image_in"),dt(n,"NORM_RECT:norm_rect_in"),je(n,"DETECTIONS:detections"),n.o(e),En(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=im(s),this.j.detections.push(Cm(i));he(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};bn.prototype.detectForVideo=bn.prototype.F,bn.prototype.detect=bn.prototype.D,bn.prototype.setOptions=bn.prototype.o,bn.createFromModelPath=async function(t,e){return Ye(bn,t,{baseOptions:{modelAssetPath:e}})},bn.createFromModelBuffer=function(t,e){return Ye(bn,t,{baseOptions:{modelAssetBuffer:e}})},bn.createFromOptions=function(t,e){return Ye(bn,t,e)};var Yu=jn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),ju=jn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Ku=jn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Bm=jn([474,475],[475,476],[476,477],[477,474]),$u=jn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Zu=jn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),km=jn([469,470],[470,471],[471,472],[472,469]),Ju=jn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),zm=[...Yu,...ju,...Ku,...$u,...Zu,...Ju],Gm=jn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function rd(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var ht=class extends cn{constructor(t,e){super(new Nn(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Re(t=this.h=new hm,0,1,e=new Mt),this.v=new um,Re(this.h,0,3,this.v),this.s=new Do,Re(this.h,0,2,this.s),ci(this.s,4,1),Me(this.s,2,.5),Me(this.v,2,.5),Me(this.h,4,.5)}get baseOptions(){return Je(this.h,Mt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numFaces"in t&&ci(this.s,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Me(this.s,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Me(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}D(t,e){return rd(this),On(this,t,e),this.j}F(t,e,n){return rd(this),li(this,t,n,e),this.j}m(){var t=new ln;mt(t,"image_in"),mt(t,"norm_rect"),tt(t,"face_landmarks");const e=new xn;Xn(e,P3,this.h);const n=new Qt;Sn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),dt(n,"IMAGE:image_in"),dt(n,"NORM_RECT:norm_rect"),je(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),En(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=la(s),this.j.faceLandmarks.push(Io(i));he(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{he(this,i)})),this.outputFaceBlendshapes&&(tt(t,"blendshapes"),je(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Lo(s),this.j.faceBlendshapes.push(Gu(i.g()??[]));he(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{he(this,i)}))),this.outputFacialTransformationMatrixes&&(tt(t,"face_geometry"),je(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Je(C3(s),M3,2))&&this.j.facialTransformationMatrixes.push({rows:In(i,1)??0??0,columns:In(i,2)??0??0,data:gr(i,3,$i,mr()).slice()??[]});he(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{he(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ht.prototype.detectForVideo=ht.prototype.F,ht.prototype.detect=ht.prototype.D,ht.prototype.setOptions=ht.prototype.o,ht.createFromModelPath=function(t,e){return Ye(ht,t,{baseOptions:{modelAssetPath:e}})},ht.createFromModelBuffer=function(t,e){return Ye(ht,t,{baseOptions:{modelAssetBuffer:e}})},ht.createFromOptions=function(t,e){return Ye(ht,t,e)},ht.FACE_LANDMARKS_LIPS=Yu,ht.FACE_LANDMARKS_LEFT_EYE=ju,ht.FACE_LANDMARKS_LEFT_EYEBROW=Ku,ht.FACE_LANDMARKS_LEFT_IRIS=Bm,ht.FACE_LANDMARKS_RIGHT_EYE=$u,ht.FACE_LANDMARKS_RIGHT_EYEBROW=Zu,ht.FACE_LANDMARKS_RIGHT_IRIS=km,ht.FACE_LANDMARKS_FACE_OVAL=Ju,ht.FACE_LANDMARKS_CONTOURS=zm,ht.FACE_LANDMARKS_TESSELATION=Gm;var Zn=class extends cn{constructor(t,e){super(new Nn(t,e),"image_in","norm_rect",!0),Re(t=this.j=new dm,0,1,e=new Mt)}get baseOptions(){return Je(this.j,Mt,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){return super.l(t)}Ka(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,On(this,t,i??{}),!this.h)return this.s}m(){var t=new ln;mt(t,"image_in"),mt(t,"norm_rect"),tt(t,"stylized_image");const e=new xn;Xn(e,L3,this.j);const n=new Qt;Sn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),dt(n,"IMAGE:image_in"),dt(n,"NORM_RECT:norm_rect"),je(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),En(t,n),this.g.V("stylized_image",((i,r)=>{var s=!this.h,a=i.data,o=i.width;const c=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*c){const l=new Uint8ClampedArray(4*c);for(let u=0;u<c;++u)l[4*u]=a[3*u],l[4*u+1]=a[3*u+1],l[4*u+2]=a[3*u+2],l[4*u+3]=255;a=new ImageData(l,o,i)}else{if(a.length!==4*c)throw Error("Unsupported channel count: "+a.length/c);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new Ht([a],!1,!1,this.g.i.canvas,this.P,o,i),this.s=s=s?o.clone():o,this.h&&this.h(s),he(this,r)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Zn.prototype.stylize=Zn.prototype.Ka,Zn.prototype.setOptions=Zn.prototype.o,Zn.createFromModelPath=function(t,e){return Ye(Zn,t,{baseOptions:{modelAssetPath:e}})},Zn.createFromModelBuffer=function(t,e){return Ye(Zn,t,{baseOptions:{modelAssetBuffer:e}})},Zn.createFromOptions=function(t,e){return Ye(Zn,t,e)};var Qu=jn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function sd(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function ad(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function od(t,e=!0){const n=[];for(const r of t){var i=Lo(r);t=[];for(const s of i.g())i=e&&In(s,1)!=null?In(s,1)??0:-1,t.push({score:Ct(s,2)??0,index:i,categoryName:Fn(s,3)??""??"",displayName:Fn(s,4)??""??""});n.push(t)}return n}var pn=class extends cn{constructor(t,e){super(new Nn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(t=this.j=new gm,0,1,e=new Mt),this.s=new Ou,Re(this.j,0,2,this.s),this.C=new Nu,Re(this.s,0,3,this.C),this.v=new mm,Re(this.s,0,2,this.v),this.h=new D3,Re(this.j,0,3,this.h),Me(this.v,2,.5),Me(this.s,4,.5),Me(this.C,2,.5)}get baseOptions(){return Je(this.j,Mt,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){if(ci(this.v,3,t.numHands??1),"minHandDetectionConfidence"in t&&Me(this.v,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.s,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Me(this.C,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new kr,n=e,i=Pl(t.cannedGesturesClassifierOptions,Je(this.h,kr,3)?.h());Re(n,0,2,i),Re(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&Je(this.h,kr,3)?.g();return t.customGesturesClassifierOptions?(Re(n=e=new kr,0,2,i=Pl(t.customGesturesClassifierOptions,Je(this.h,kr,4)?.h())),Re(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&Je(this.h,kr,4)?.g(),this.l(t)}Fa(t,e){return sd(this),On(this,t,e),ad(this)}Ga(t,e,n){return sd(this),li(this,t,n,e),ad(this)}m(){var t=new ln;mt(t,"image_in"),mt(t,"norm_rect"),tt(t,"hand_gestures"),tt(t,"hand_landmarks"),tt(t,"world_hand_landmarks"),tt(t,"handedness");const e=new xn;Xn(e,I3,this.j);const n=new Qt;Sn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),dt(n,"IMAGE:image_in"),dt(n,"NORM_RECT:norm_rect"),je(n,"HAND_GESTURES:hand_gestures"),je(n,"LANDMARKS:hand_landmarks"),je(n,"WORLD_LANDMARKS:world_hand_landmarks"),je(n,"HANDEDNESS:handedness"),n.o(e),En(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=la(s);const a=[];for(const o of Ai(i,sm,1))a.push({x:Ct(o,1)??0,y:Ct(o,2)??0,z:Ct(o,3)??0,visibility:Ct(o,4)??0});this.landmarks.push(a)}he(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{he(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=Kr(s);const a=[];for(const o of Ai(i,rm,1))a.push({x:Ct(o,1)??0,y:Ct(o,2)??0,z:Ct(o,3)??0,visibility:Ct(o,4)??0});this.worldLandmarks.push(a)}he(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{he(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...od(i,!1)),he(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{he(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...od(i)),he(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function cd(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}pn.prototype.recognizeForVideo=pn.prototype.Ga,pn.prototype.recognize=pn.prototype.Fa,pn.prototype.setOptions=pn.prototype.o,pn.createFromModelPath=function(t,e){return Ye(pn,t,{baseOptions:{modelAssetPath:e}})},pn.createFromModelBuffer=function(t,e){return Ye(pn,t,{baseOptions:{modelAssetBuffer:e}})},pn.createFromOptions=function(t,e){return Ye(pn,t,e)},pn.HAND_CONNECTIONS=Qu;var mn=class extends cn{constructor(t,e){super(new Nn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(t=this.h=new Ou,0,1,e=new Mt),this.s=new Nu,Re(this.h,0,3,this.s),this.j=new mm,Re(this.h,0,2,this.j),ci(this.j,3,1),Me(this.j,2,.5),Me(this.s,2,.5),Me(this.h,4,.5)}get baseOptions(){return Je(this.h,Mt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numHands"in t&&ci(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Me(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Me(this.s,2,t.minHandPresenceConfidence??.5),this.l(t)}D(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],On(this,t,e),cd(this)}F(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],li(this,t,n,e),cd(this)}m(){var t=new ln;mt(t,"image_in"),mt(t,"norm_rect"),tt(t,"hand_landmarks"),tt(t,"world_hand_landmarks"),tt(t,"handedness");const e=new xn;Xn(e,U3,this.h);const n=new Qt;Sn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),dt(n,"IMAGE:image_in"),dt(n,"NORM_RECT:norm_rect"),je(n,"LANDMARKS:hand_landmarks"),je(n,"WORLD_LANDMARKS:world_hand_landmarks"),je(n,"HANDEDNESS:handedness"),n.o(e),En(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=la(s),this.landmarks.push(Io(i));he(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{he(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=Kr(s),this.worldLandmarks.push(Vs(i));he(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{he(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=Lo(c);const l=[];for(const u of i.g())l.push({score:Ct(u,2)??0,index:In(u,1)??0??-1,categoryName:Fn(u,3)??""??"",displayName:Fn(u,4)??""??""});o.push(l)}a.call(s,...o),he(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};mn.prototype.detectForVideo=mn.prototype.F,mn.prototype.detect=mn.prototype.D,mn.prototype.setOptions=mn.prototype.o,mn.createFromModelPath=function(t,e){return Ye(mn,t,{baseOptions:{modelAssetPath:e}})},mn.createFromModelBuffer=function(t,e){return Ye(mn,t,{baseOptions:{modelAssetBuffer:e}})},mn.createFromOptions=function(t,e){return Ye(mn,t,e)},mn.HAND_CONNECTIONS=Qu;var Vm=jn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function ld(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function ud(t){try{if(!t.C)return t.h;t.C(t.h)}finally{Fo(t)}}function Oa(t,e){t=la(t),e.push(Io(t))}var vt=class extends cn{constructor(t,e){super(new Nn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Re(t=this.j=new Sm,0,1,e=new Mt),this.K=new Nu,Re(this.j,0,2,this.K),this.Y=new F3,Re(this.j,0,3,this.Y),this.s=new Do,Re(this.j,0,4,this.s),this.H=new um,Re(this.j,0,5,this.H),this.v=new xm,Re(this.j,0,6,this.v),this.L=new Mm,Re(this.j,0,7,this.L),Me(this.s,2,.5),Me(this.s,3,.3),Me(this.H,2,.5),Me(this.v,2,.5),Me(this.v,3,.3),Me(this.L,2,.5),Me(this.K,2,.5)}get baseOptions(){return Je(this.j,Mt,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Me(this.s,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Me(this.s,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Me(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Me(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Me(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Me(this.L,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Me(this.K,2,t.minHandLandmarksConfidence??.5),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:n,ld(this),On(this,t,i),ud(this)}F(t,e,n,i){const r=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,ld(this),li(this,t,r,e),ud(this)}m(){var t=new ln;mt(t,"input_frames_image"),tt(t,"pose_landmarks"),tt(t,"pose_world_landmarks"),tt(t,"face_landmarks"),tt(t,"left_hand_landmarks"),tt(t,"left_hand_world_landmarks"),tt(t,"right_hand_landmarks"),tt(t,"right_hand_world_landmarks");const e=new xn,n=new If;Tl(n,1,Ss("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(r,s){if(s!=null)if(Array.isArray(s))ft(r,2,vo(s,hu,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof Ei||Mr(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Tl(r,2,iu(s,!1),Sr())}})(n,this.j.g());const i=new Qt;Sn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),eo(i,8,If,n),dt(i,"IMAGE:input_frames_image"),je(i,"POSE_LANDMARKS:pose_landmarks"),je(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),je(i,"FACE_LANDMARKS:face_landmarks"),je(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),je(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),je(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),je(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),En(t,i),Uo(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{Oa(r,this.h.poseLandmarks),he(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{he(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=Kr(r),a.push(Vs(r)),he(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{he(this,r)})),this.outputPoseSegmentationMasks&&(je(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),hs(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[ps(this,r,!0,!this.C)],he(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],he(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{Oa(r,this.h.faceLandmarks),he(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{he(this,r)})),this.outputFaceBlendshapes&&(tt(t,"extra_blendshapes"),je(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Lo(r),a.push(Gu(r.g()??[]))),he(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{he(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{Oa(r,this.h.leftHandLandmarks),he(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{he(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Kr(r),a.push(Vs(r)),he(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{he(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{Oa(r,this.h.rightHandLandmarks),he(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{he(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Kr(r),a.push(Vs(r)),he(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{he(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};vt.prototype.detectForVideo=vt.prototype.F,vt.prototype.detect=vt.prototype.D,vt.prototype.setOptions=vt.prototype.o,vt.createFromModelPath=function(t,e){return Ye(vt,t,{baseOptions:{modelAssetPath:e}})},vt.createFromModelBuffer=function(t,e){return Ye(vt,t,{baseOptions:{modelAssetBuffer:e}})},vt.createFromOptions=function(t,e){return Ye(vt,t,e)},vt.HAND_CONNECTIONS=Qu,vt.POSE_CONNECTIONS=Vm,vt.FACE_LANDMARKS_LIPS=Yu,vt.FACE_LANDMARKS_LEFT_EYE=ju,vt.FACE_LANDMARKS_LEFT_EYEBROW=Ku,vt.FACE_LANDMARKS_LEFT_IRIS=Bm,vt.FACE_LANDMARKS_RIGHT_EYE=$u,vt.FACE_LANDMARKS_RIGHT_EYEBROW=Zu,vt.FACE_LANDMARKS_RIGHT_IRIS=km,vt.FACE_LANDMARKS_FACE_OVAL=Ju,vt.FACE_LANDMARKS_CONTOURS=zm,vt.FACE_LANDMARKS_TESSELATION=Gm;var wn=class extends cn{constructor(t,e){super(new Nn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Re(t=this.h=new Em,0,1,e=new Mt)}get baseOptions(){return Je(this.h,Mt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return Re(this.h,0,2,Pl(t,Je(this.h,Iu,2))),this.l(t)}qa(t,e){return this.j={classifications:[]},On(this,t,e),this.j}ra(t,e,n){return this.j={classifications:[]},li(this,t,n,e),this.j}m(){var t=new ln;mt(t,"input_image"),mt(t,"norm_rect"),tt(t,"classifications");const e=new xn;Xn(e,N3,this.h);const n=new Qt;Sn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),dt(n,"IMAGE:input_image"),dt(n,"NORM_RECT:norm_rect"),je(n,"CLASSIFICATIONS:classifications"),n.o(e),En(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=(function(s){const a={classifications:Ai(s,E3,1).map((o=>Gu(Je(o,tm,4)?.g()??[],In(o,2)??0,Fn(o,3)??"")))};return Sl(ls(s,2))!=null&&(a.timestampMs=Sl(ls(s,2))??0),a})(y3(i)),he(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};wn.prototype.classifyForVideo=wn.prototype.ra,wn.prototype.classify=wn.prototype.qa,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=function(t,e){return Ye(wn,t,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(t,e){return Ye(wn,t,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(t,e){return Ye(wn,t,e)};var gn=class extends cn{constructor(t,e){super(new Nn(t,e),"image_in","norm_rect",!0),this.h=new ym,this.embeddings={embeddings:[]},Re(t=this.h,0,1,e=new Mt)}get baseOptions(){return Je(this.h,Mt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){var e=this.h,n=Je(this.h,Vf,2);return n=n?n.clone():new Vf,t.l2Normalize!==void 0?ea(n,1,t.l2Normalize):"l2Normalize"in t&&ft(n,1),t.quantize!==void 0?ea(n,2,t.quantize):"quantize"in t&&ft(n,2),Re(e,0,2,n),this.l(t)}xa(t,e){return On(this,t,e),this.embeddings}ya(t,e,n){return li(this,t,n,e),this.embeddings}m(){var t=new ln;mt(t,"image_in"),mt(t,"norm_rect"),tt(t,"embeddings_out");const e=new xn;Xn(e,O3,this.h);const n=new Qt;Sn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),dt(n,"IMAGE:image_in"),dt(n,"NORM_RECT:norm_rect"),je(n,"EMBEDDINGS:embeddings_out"),n.o(e),En(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=b3(i),this.embeddings=(function(s){return{embeddings:Ai(s,A3,1).map((a=>{const o={headIndex:In(a,3)??0??-1,headName:Fn(a,4)??""??""};if(Sp(a,Gf,yc(a,1))!==void 0)a=gr(a=Je(a,Gf,yc(a,1)),1,$i,mr()),o.floatEmbedding=a.slice();else{const c=new Uint8Array(0);o.quantizedEmbedding=Je(a,T3,yc(a,2))?.ma()?.h()??c}return o})),timestampMs:Sl(ls(s,2))??0}})(i),he(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};gn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Yf(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Yf(qf(t.quantizedEmbedding),qf(e.quantizedEmbedding))}return t},gn.prototype.embedForVideo=gn.prototype.ya,gn.prototype.embed=gn.prototype.xa,gn.prototype.setOptions=gn.prototype.o,gn.createFromModelPath=function(t,e){return Ye(gn,t,{baseOptions:{modelAssetPath:e}})},gn.createFromModelBuffer=function(t,e){return Ye(gn,t,{baseOptions:{modelAssetBuffer:e}})},gn.createFromOptions=function(t,e){return Ye(gn,t,e)};var Ul=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function hd(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function fd(t){try{const e=new Ul(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Fo(t)}}Ul.prototype.close=Ul.prototype.close;var rn=class extends cn{constructor(t,e){super(new Nn(t,e),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new zu,this.v=new Tm,Re(this.h,0,3,this.v),Re(t=this.h,0,1,e=new Mt)}get baseOptions(){return Je(this.h,Mt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ft(this.h,2,Ss(t.displayNamesLocale)):"displayNamesLocale"in t&&ft(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}J(){(function(t){const e=Ai(t.ca(),Qt,1).filter((n=>(Fn(n,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.s=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(Je(e[0],xn,7)?.l()?.g()??new Map).forEach(((n,i)=>{t.s[Number(i)]=Fn(n,1)??""}))})(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,hd(this),On(this,t,i),fd(this)}Ia(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,hd(this),li(this,t,r,e),fd(this)}Ba(){return this.s}m(){var t=new ln;mt(t,"image_in"),mt(t,"norm_rect");const e=new xn;Xn(e,bm,this.h);const n=new Qt;Sn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),dt(n,"IMAGE:image_in"),dt(n,"NORM_RECT:norm_rect"),n.o(e),En(t,n),Uo(this,t),this.outputConfidenceMasks&&(tt(t,"confidence_masks"),je(n,"CONFIDENCE_MASKS:confidence_masks"),hs(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>ps(this,s,!0,!this.j))),he(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],he(this,i)}))),this.outputCategoryMask&&(tt(t,"category_mask"),je(n,"CATEGORY_MASK:category_mask"),hs(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=ps(this,i,!1,!this.j),he(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,he(this,i)}))),tt(t,"quality_scores"),je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,he(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};rn.prototype.getLabels=rn.prototype.Ba,rn.prototype.segmentForVideo=rn.prototype.Ia,rn.prototype.segment=rn.prototype.segment,rn.prototype.setOptions=rn.prototype.o,rn.createFromModelPath=function(t,e){return Ye(rn,t,{baseOptions:{modelAssetPath:e}})},rn.createFromModelBuffer=function(t,e){return Ye(rn,t,{baseOptions:{modelAssetBuffer:e}})},rn.createFromOptions=function(t,e){return Ye(rn,t,e)};var Fl=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Fl.prototype.close=Fl.prototype.close;var X3=class extends ge{constructor(t){super(t)}},zr=[0,wt,-2],ro=[0,_i,-3,xt,_i,-1],dd=[0,ro],pd=[0,ro,wt,-1],Cc=class extends ge{constructor(t){super(t)}},md=[0,_i,-1,xt],q3=class extends ge{constructor(t){super(t)}},gd=class extends ge{constructor(t){super(t)}},Nl=[1,2,3,4,5,6,7,8,9,10,14,15],Hm=class extends ge{constructor(t){super(t)}};Hm.prototype.g=Po([0,Ot,[0,Nl,rt,ro,rt,[0,ro,zr],rt,dd,rt,[0,dd,zr],rt,md,rt,[0,_i,-3,xt,vn],rt,[0,_i,-3,xt],rt,[0,st,_i,-2,xt,wt,xt,-1,2,_i,zr],rt,pd,rt,[0,pd,zr],_i,zr,st,rt,[0,_i,-3,xt,zr,-1],rt,[0,Ot,md]],st,[0,st,wt,-1,xt]]);var Jn=class extends cn{constructor(t,e){super(new Nn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new zu,this.s=new Tm,Re(this.h,0,3,this.s),Re(t=this.h,0,1,e=new Mt)}get baseOptions(){return Je(this.h,Mt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new Hm;const s=new gd;var a=new X3;if(ci(a,1,255),Re(s,0,12,a),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var o=new Cc;ea(o,3,!0),Me(o,1,e.keypoint.x),Me(o,2,e.keypoint.y),zs(s,5,Nl,o)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new q3,e.scribble))ea(e=new Cc,3,!0),Me(e,1,o.x),Me(e,2,o.y),eo(a,1,Cc,e);zs(s,15,Nl,a)}eo(i,1,gd,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),On(this,t,r);e:{try{const l=new Fl(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{Fo(this)}c=void 0}return c}m(){var t=new ln;mt(t,"image_in"),mt(t,"roi_in"),mt(t,"norm_rect_in");const e=new xn;Xn(e,bm,this.h);const n=new Qt;Sn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),dt(n,"IMAGE:image_in"),dt(n,"ROI:roi_in"),dt(n,"NORM_RECT:norm_rect_in"),n.o(e),En(t,n),Uo(this,t),this.outputConfidenceMasks&&(tt(t,"confidence_masks"),je(n,"CONFIDENCE_MASKS:confidence_masks"),hs(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>ps(this,s,!0,!this.j))),he(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],he(this,i)}))),this.outputCategoryMask&&(tt(t,"category_mask"),je(n,"CATEGORY_MASK:category_mask"),hs(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=ps(this,i,!1,!this.j),he(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,he(this,i)}))),tt(t,"quality_scores"),je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,he(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Jn.prototype.segment=Jn.prototype.segment,Jn.prototype.setOptions=Jn.prototype.o,Jn.createFromModelPath=function(t,e){return Ye(Jn,t,{baseOptions:{modelAssetPath:e}})},Jn.createFromModelBuffer=function(t,e){return Ye(Jn,t,{baseOptions:{modelAssetBuffer:e}})},Jn.createFromOptions=function(t,e){return Ye(Jn,t,e)};var Rn=class extends cn{constructor(t,e){super(new Nn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Re(t=this.h=new wm,0,1,e=new Mt)}get baseOptions(){return Je(this.h,Mt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ft(this.h,2,Ss(t.displayNamesLocale)):"displayNamesLocale"in t&&ft(this.h,2),t.maxResults!==void 0?ci(this.h,3,t.maxResults):"maxResults"in t&&ft(this.h,3),t.scoreThreshold!==void 0?Me(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&ft(this.h,4),t.categoryAllowlist!==void 0?to(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&ft(this.h,5),t.categoryDenylist!==void 0?to(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&ft(this.h,6),this.l(t)}D(t,e){return this.j={detections:[]},On(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},li(this,t,n,e),this.j}m(){var t=new ln;mt(t,"input_frame_gpu"),mt(t,"norm_rect"),tt(t,"detections");const e=new xn;Xn(e,k3,this.h);const n=new Qt;Sn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),dt(n,"IMAGE:input_frame_gpu"),dt(n,"NORM_RECT:norm_rect"),je(n,"DETECTIONS:detections"),n.o(e),En(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=im(s),this.j.detections.push(Cm(i));he(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rn.prototype.detectForVideo=Rn.prototype.F,Rn.prototype.detect=Rn.prototype.D,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=async function(t,e){return Ye(Rn,t,{baseOptions:{modelAssetPath:e}})},Rn.createFromModelBuffer=function(t,e){return Ye(Rn,t,{baseOptions:{modelAssetBuffer:e}})},Rn.createFromOptions=function(t,e){return Ye(Rn,t,e)};var Ol=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function _d(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function vd(t){try{const e=new Ol(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.s)return e;t.s(e)}finally{Fo(t)}}Ol.prototype.close=Ol.prototype.close;var _n=class extends cn{constructor(t,e){super(new Nn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Re(t=this.h=new Rm,0,1,e=new Mt),this.v=new Mm,Re(this.h,0,3,this.v),this.j=new xm,Re(this.h,0,2,this.j),ci(this.j,4,1),Me(this.j,2,.5),Me(this.v,2,.5),Me(this.h,4,.5)}get baseOptions(){return Je(this.h,Mt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numPoses"in t&&ci(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Me(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Me(this.v,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:n,_d(this),On(this,t,i),vd(this)}F(t,e,n,i){const r=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,_d(this),li(this,t,r,e),vd(this)}m(){var t=new ln;mt(t,"image_in"),mt(t,"norm_rect"),tt(t,"normalized_landmarks"),tt(t,"world_landmarks"),tt(t,"segmentation_masks");const e=new xn;Xn(e,z3,this.h);const n=new Qt;Sn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),dt(n,"IMAGE:image_in"),dt(n,"NORM_RECT:norm_rect"),je(n,"NORM_LANDMARKS:normalized_landmarks"),je(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),En(t,n),Uo(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=la(s),this.landmarks.push(Io(i));he(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],he(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=Kr(s),this.worldLandmarks.push(Vs(i));he(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],he(this,i)})),this.outputSegmentationMasks&&(je(n,"SEGMENTATION_MASK:segmentation_masks"),hs(this,"segmentation_masks"),this.g.ba("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>ps(this,s,!0,!this.s))),he(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],he(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_n.prototype.detectForVideo=_n.prototype.F,_n.prototype.detect=_n.prototype.D,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(t,e){return Ye(_n,t,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(t,e){return Ye(_n,t,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(t,e){return Ye(_n,t,e)},_n.POSE_CONNECTIONS=Vm;let ni=[],Vn,Bl;function Y3(){if(Bl&&Vn.readyState>=2){const t=Bl.detectForVideo(Vn,performance.now());t.faceLandmarks&&t.faceLandmarks.length>0&&(ni=t.faceLandmarks[0])}}async function j3(){Vn=document.createElement("video"),Vn.autoplay=!0,Vn.playsInline=!0;const t=await lr.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");Bl=await ht.createFromOptions(t,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",delegate:"GPU"},outputFaceBlendshapes:!0,runningMode:"VIDEO",numFaces:1});const e=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});return Vn.srcObject=e,new Promise(n=>{Vn.addEventListener("loadeddata",n)})}const sn={x:0,y:0,z:0},$r={x:0,y:0,z:0};let Ba=-1;function K3(){if(!ni||ni.length===0)return;const t=ni[33],e=ni[263],n=ni[168];if(!t||!e||!n)return;const i=(t.x+e.x)/2,r=(t.y+e.y)/2,s=e.x-t.x,a=e.y-t.y,o=Math.sqrt(s*s+a*a);$r.x=i*2-1,$r.y=-(r*2-1),Ba<0&&o>0&&(Ba=o),Ba>0&&($r.z=o/Ba-1)}function $3(){sn.x+=($r.x-sn.x)*.1,sn.y+=($r.y-sn.y)*.1,sn.z+=($r.z-sn.z)*.1}function Z3(t){t&&(t.innerHTML=`
        Head Pose:<br>
        x: ${sn.x.toFixed(3)}<br>
        y: ${sn.y.toFixed(3)}<br>
        z: ${sn.z.toFixed(3)}
    `)}function J3(){K3(),$3()}let Wr,eh,th,nh,ih,so;const Q3=ht.FACE_LANDMARKS_LEFT_EYE,eM=[...new Set(Q3.flatMap(t=>[t.start,t.end]))],tM=ht.FACE_LANDMARKS_RIGHT_EYE,nM=[...new Set(tM.flatMap(t=>[t.start,t.end]))],iM=[13,14,78,191,80,81,82,312,311,310,415,308];function rM(){const t=new is(.07,16,16),e=new Ja({color:16777215});eh=new It(t,e),th=new It(t,e);const n=new is(.058,16,16),i=new Ja({color:0});nh=new It(n,i),ih=new It(n,i)}function sM(){const t=new is(.08,16,16),e=new Ja({color:11160132});so=new It(t,e)}function aM(){const t=new wi,e=new Float32Array(478*3);t.setAttribute("position",new Wn(e,3));const n=[],i=ht.FACE_LANDMARKS_TESSELATION;for(let s=0;s<i.length;s+=3){const a=i[s],o=i[s+1],c=i[s+2];a&&o&&c&&n.push(a.start,o.start,c.start)}t.setIndex(n);const r=new Ja({color:16699552,specular:16752768,shininess:100,side:ti,flatShading:!1,transparent:!1,opacity:1});Wr=new It(t,r)}function oM(){if(!Wr||!ni||ni.length===0||!Vn||!Vn.videoWidth)return;const t=Wr.geometry.attributes.position.array,e=Vn.videoWidth/Vn.videoHeight,n=new N,i=new N,r=new N;let s=0,a=0,o=0;for(let c=0;c<ni.length;c++){const l=ni[c],u=-(l.x-.5)*2*e,f=-(l.y-.5)*2,d=-l.z*3;t[c*3]=u,t[c*3+1]=f,t[c*3+2]=d,eM.includes(c)&&(n.add(new N(u,f,d)),s++),nM.includes(c)&&(i.add(new N(u,f,d)),a++),iM.includes(c)&&(r.add(new N(u,f,d)),o++)}Wr.geometry.attributes.position.needsUpdate=!0,Wr.geometry.computeVertexNormals(),s>0&&(n.divideScalar(s),eh.position.copy(n),nh.position.copy(n).setZ(n.z+.02)),a>0&&(i.divideScalar(a),th.position.copy(i),ih.position.copy(i).setZ(i.z+.02)),o>0&&(r.divideScalar(o),so.position.copy(r),so.scale.set(1,.5,.8))}async function cM(){await j3();const t=new b0;t.background=new Ze(0),t.fog=new $l(0,1,100);const e=new Pn(75,window.innerWidth/window.innerHeight,.1,1e3),n=new Mx({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);const i=new N0(16777215,.5);t.add(i);const r=new F0(16777215,1);r.position.set(0,0,0),r.castShadow=!0,t.add(r),t.add(r.target);const s=document.createElement("video");s.src="/walls4.mp4",s.loop=!0,s.muted=!0,s.play();const a=new P0(s);a.wrapS=Hs,a.wrapT=Hs,a.magFilter=Un;const o=20,c=200,l=new ns(o,c),u=new ns(c,o),f=a.clone();f.needsUpdate=!0,f.repeat.set(4,20);const d=new hr({color:4210752,map:f}),m=new It(l,d);m.rotation.x=-Math.PI/2,m.position.y=-o/2,t.add(m);const v=a.clone();v.needsUpdate=!0,v.repeat.set(4,20);const M=new hr({color:4210752,map:v}),p=new It(l,M);p.rotation.x=Math.PI/2,p.position.y=o/2,t.add(p);const h=a.clone();h.needsUpdate=!0,h.repeat.set(20,4);const b=new hr({color:4210752,map:h}),T=new It(u,b);T.rotation.y=Math.PI/2,T.position.x=-o/2,t.add(T);const E=a.clone();E.needsUpdate=!0,E.repeat.set(20,4);const P=new hr({color:4210752,map:E}),w=new It(u,P);w.rotation.y=-Math.PI/2,w.position.x=o/2,t.add(w),aM(),rM(),sM();const R=new Us;R.add(Wr,eh,th,nh,ih,so),t.add(R);const U=[];function S(ne,ue,Ne){const We=new is(2,32,16),Ke=new hr({color:8421504}),He=new It(We,Ke);He.position.set(ne,ue,Ne),t.add(He),U.push(He)}S(5,5,-30),S(-2,2,-40),S(7,5,-50);const x={w:!1,a:!1,s:!1,d:!1};window.addEventListener("keydown",ne=>{ne.key.toLowerCase()in x&&(x[ne.key.toLowerCase()]=!0)}),window.addEventListener("keyup",ne=>{ne.key.toLowerCase()in x&&(x[ne.key.toLowerCase()]=!1)}),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}),document.getElementById("fullscreen-button").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});const k=document.getElementById("head-pose-container"),V=document.getElementById("game-over-overlay"),q=new N(0,0,0),X=.3;let Y=!1;function $(ne,ue){const Ne=ne.x-ue.x,We=ne.y-ue.y,Ke=ne.z-ue.z;return Math.sqrt(Ne*Ne+We*We+Ke*Ke)}function z(){V.style.display="none",q.set(0,0,0);let ne=30;for(const ue of U)ue.position.x=Math.random()*10-5,ue.position.y=Math.random()*10-5,ue.position.z=-ne,ne+=10;Y=!1,n.setAnimationLoop(se)}function se(){if(Y3(),J3(),oM(),Z3(k),q.z-=X,x.s&&(q.z+=X),x.a&&(q.x-=X),x.d&&(q.x+=X),q.z<-50){q.z=0;let H=30;for(const K of U)K.position.x=Math.random()*10-5,K.position.y=Math.random()*10-5,K.position.z=-H,H+=10}const ne=sn.z*-10,ue=sn.x*-10,Ne=sn.y*10,We=o/2,Ke=1;e.position.x=vh.clamp(q.x+ue,-We+Ke,We-Ke),e.position.y=vh.clamp(q.y+Ne,-We+Ke,We-Ke),e.position.z=q.z+ne,e.rotation.y=sn.x*-.5,e.rotation.x=sn.y*-.5;for(const H of U)if($({x:e.position.x,y:e.position.y,z:e.position.z-2},{x:H.position.x,y:H.position.y,z:H.position.z})<3){Y||(Y=!0,V.style.display="flex",n.setAnimationLoop(null),setTimeout(z,2e3));return}R.position.set(e.position.x,e.position.y,e.position.z-2),R.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),r.position.copy(e.position);const He=new N;e.getWorldDirection(He),He.add(e.position),r.target.position.copy(He),r.target.updateMatrixWorld(),n.render(t,e)}n.setAnimationLoop(se)}cM();
