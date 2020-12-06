var VueSnap=function(t){"use strict";const e=t=>.5*(1-Math.cos(Math.PI*t)),n={_elementScroll:void 0,get elementScroll(){return this._elementScroll||(this._elementScroll=HTMLElement.prototype.scroll||HTMLElement.prototype.scrollTo||function(t,e){this.scrollLeft=t,this.scrollTop=e})},_elementScrollIntoView:void 0,get elementScrollIntoView(){return this._elementScrollIntoView||(this._elementScrollIntoView=HTMLElement.prototype.scrollIntoView)},_windowScroll:void 0,get windowScroll(){return this._windowScroll||(this._windowScroll=window.scroll||window.scrollTo)}},r=()=>{var t,e,n;return null!==(n=null===(e=null===(t=window.performance)||void 0===t?void 0:t.now)||void 0===e?void 0:e.call(t))&&void 0!==n?n:Date.now()},i=t=>{const n=(r()-t.timeStamp)/(t.duration||500);if(n>1)return t.method(t.targetX,t.targetY),void t.callback();const o=(t.timingFunc||e)(n),s=t.startX+(t.targetX-t.startX)*o,l=t.startY+(t.targetY-t.startY)*o;t.method(s,l),t.rafId=requestAnimationFrame(()=>{i(t)})},o=t=>isFinite(t)?Number(t):0,s=t=>{const e=typeof t;return null!==t&&("object"===e||"function"===e)},l=(t,e)=>{const s=o(e.left||0)+t.scrollLeft,l=o(e.top||0)+t.scrollTop;return((t,e)=>{var s,l;const a=n.elementScroll.bind(t);if(void 0===e.left&&void 0===e.top)return;const c=t.scrollLeft,d=t.scrollTop,u=o(null!==(s=e.left)&&void 0!==s?s:c),h=o(null!==(l=e.top)&&void 0!==l?l:d);if("smooth"!==e.behavior)return a(u,h);const f=()=>{window.removeEventListener("wheel",v),window.removeEventListener("touchmove",v)},p={timeStamp:r(),duration:e.duration,startX:c,startY:d,targetX:u,targetY:h,rafId:0,method:a,timingFunc:e.timingFunc,callback:f},v=()=>{cancelAnimationFrame(p.rafId),f()};window.addEventListener("wheel",v,{passive:!0,once:!0}),window.addEventListener("touchmove",v,{passive:!0,once:!0}),i(p)})(t,{...e,left:s,top:l})},a=t=>{var e;"scrollBehavior"in document.documentElement.style||(e=e=>e.scrollBy=function(){if(1===arguments.length){const e=arguments[0];if(!s(e))throw new TypeError("Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.");return l(this,{...e,...t})}const e=Number(arguments[0]),n=Number(arguments[1]);return l(this,{left:e,top:n})},[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach(t=>e(t)))};var c=function(t,e,n){return Math.abs(t-e)<=n},d="undefined"==typeof window,u=!d;d||"scrollBehavior"in document.documentElement.style||a();var h=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p="object"==typeof f&&f&&f.Object===Object&&f,v="object"==typeof self&&self&&self.Object===Object&&self,m=p||v||Function("return this")(),b=function(){return m.Date.now()},w=m.Symbol,g=Object.prototype,_=g.hasOwnProperty,S=g.toString,y=w?w.toStringTag:void 0;var W=function(t){var e=_.call(t,y),n=t[y];try{t[y]=void 0;var r=!0}catch(t){}var i=S.call(t);return r&&(e?t[y]=n:delete t[y]),i},L=Object.prototype.toString;var O=function(t){return L.call(t)},E=w?w.toStringTag:void 0;var T=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?W(t):O(t)};var $=function(t){return null!=t&&"object"==typeof t};var R=function(t){return"symbol"==typeof t||$(t)&&"[object Symbol]"==T(t)},P=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,x=/^0o[0-7]+$/i,j=parseInt;var I=function(t){if("number"==typeof t)return t;if(R(t))return NaN;if(h(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=h(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(P,"");var n=F.test(t);return n||x.test(t)?j(t.slice(2),n?2:8):C.test(t)?NaN:+t},B=Math.max,M=Math.min;var N=function(t,e,n){var r,i,o,s,l,a,c=0,d=!1,u=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,o=i;return r=i=void 0,c=e,s=t.apply(o,n)}function v(t){return c=t,l=setTimeout(w,e),d?p(t):s}function m(t){var n=t-a;return void 0===a||n>=e||n<0||u&&t-c>=o}function w(){var t=b();if(m(t))return g(t);l=setTimeout(w,function(t){var n=e-(t-a);return u?M(n,o-(t-c)):n}(t))}function g(t){return l=void 0,f&&r?p(t):(r=i=void 0,s)}function _(){var t=b(),n=m(t);if(r=arguments,i=this,a=t,n){if(void 0===l)return v(a);if(u)return clearTimeout(l),l=setTimeout(w,e),p(a)}return void 0===l&&(l=setTimeout(w,e)),s}return e=I(e)||0,h(n)&&(d=!!n.leading,o=(u="maxWait"in n)?B(I(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),_.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=a=i=l=void 0},_.flush=function(){return void 0===l?s:g(b())},_};function V(t,e,n,r,i,o,s,l,a,c){"boolean"!=typeof s&&(a=l,l=s,s=!1);const d="function"==typeof n?n.options:n;let u;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),r&&(d._scopeId=r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,a(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=u):e&&(u=s?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,l(t))}),u)if(d.functional){const t=d.render;d.render=function(e,n){return u.call(n),t(e,n)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,u):[u]}return n}const A={props:{hideArrows:{type:Boolean,default:!1},hideArrowsOnBound:{type:Boolean,default:!1},tag:{type:String,default:"ul"},i18n:{type:Object,default:()=>({slideLeft:"Slide left",slideRight:"Slide right"}),validator:t=>["slideLeft","slideRight"].every(e=>e in t)}},data:()=>({boundLeft:!0,boundRight:!1,slidesWidth:[],wrapperScrollWidth:0,wrapperVisibleWidth:0,currentPage:0,currentPos:0,maxPages:0,step:1,observer:null,onResizeFn:null,onScrollFn:null}),watch:{currentPage(t,e){t!==e&&this.$emit("page",{current:t,previous:e})}},mounted(){this.calcOnInit(),u&&(this.onResizeFn=N(this.calcOnInit,410),this.onScrollFn=N(this.calcOnScroll,100),this.attachMutationObserver(),this.$refs.vsWrapper.addEventListener("scroll",this.onScrollFn),window.addEventListener("resize",this.onResizeFn,!1))},beforeDestroy(){u&&(this.observer.disconnect(),this.$refs.vsWrapper.removeEventListener("scroll",this.onScrollFn),window.removeEventListener("resize",this.onResizeFn,!1))},methods:{calcOnInit(){this.$refs.vsWrapper&&(this.calcWrapperWidth(),this.calcSlidesWidth(),this.calcCurrentPosition(),this.calcCurrentPage(),this.calcBounds(),this.calcMaxPages())},calcOnScroll(){this.$refs.vsWrapper&&(this.calcCurrentPosition(),this.calcCurrentPage(),this.calcBounds())},calcBounds(){const t=c(this.currentPos,0,5),e=c(this.wrapperScrollWidth-this.wrapperVisibleWidth,this.currentPos,5);t?(this.$emit("bound-left",!0),this.boundLeft=!0):this.boundLeft=!1,e?(this.$emit("bound-right",!0),this.boundRight=!0):this.boundRight=!1},calcWrapperWidth(){this.wrapperScrollWidth=this.$refs.vsWrapper.scrollWidth,this.wrapperVisibleWidth=this.$refs.vsWrapper.offsetWidth},calcSlidesWidth(){const t=[...this.$refs.vsWrapper.children];this.slidesWidth=t.map(t=>({offsetLeft:t.offsetLeft,width:t.offsetWidth}))},calcCurrentPage(){const t=this.slidesWidth.findIndex(t=>c(t.offsetLeft,this.currentPos,5));-1!==t&&-2!==t&&(this.currentPage=t||0)},calcCurrentPosition(){this.currentPos=this.$refs.vsWrapper.scrollLeft||0},calcMaxPages(){const t=this.wrapperScrollWidth-this.wrapperVisibleWidth;this.maxPages=this.slidesWidth.findIndex(({offsetLeft:e})=>e>t)-1},calcNextWidth(t){const e=t>0?this.currentPage:this.currentPage+t,n=this.slidesWidth[e].width||0;if(n)return n*t},attachMutationObserver(){this.observer=new MutationObserver(()=>{this.calcOnInit()}),this.observer.observe(this.$refs.vsWrapper,{attributes:!0,childList:!0,characterData:!0,subtree:!0})},changeSlide(t){const e=-1===t&&this.boundLeft,n=1===t&&this.boundRight;if(e||n)return;const r=this.calcNextWidth(t);r&&this.scrollTo(r)},scrollTo(t=0){this.$refs.vsWrapper.scrollBy({left:t,behavior:"smooth"})}}};var X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vs-carousel"},[n(t.tag,{ref:"vsWrapper",tag:"component",staticClass:"vs-carousel__wrapper"},[t._t("default")],2),t._v(" "),t.hideArrows?t._e():t._t("arrows",[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.hideArrowsOnBound||!t.boundLeft,expression:"hideArrowsOnBound ? !boundLeft : true"}],staticClass:"\n        vs-carousel__arrows\n        vs-carousel__arrows--left\n      ",attrs:{type:"button","aria-label":t.i18n.slideLeft,disabled:t.boundLeft},on:{click:function(e){return t.changeSlide(-1)}}},[t._v("\n      ←\n    ")]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.hideArrowsOnBound||!t.boundRight,expression:"hideArrowsOnBound ? !boundRight : true"}],staticClass:"\n        vs-carousel__arrows\n        vs-carousel__arrows--right\n      ",attrs:{type:"button","aria-label":t.i18n.slideRight,disabled:t.boundRight},on:{click:function(e){return t.changeSlide(1)}}},[t._v("\n      →\n    ")])],{changeSlide:t.changeSlide,boundLeft:t.boundLeft,boundRight:t.boundRight})],2)};X._withStripped=!0;const z=V({render:X,staticRenderFns:[]},undefined,A,undefined,false,undefined,!1,void 0,void 0,void 0);const Y={props:{tag:{type:String,default:"li"}}};var k=function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{ref:"vsSlide",tag:"component",staticClass:"vs-carousel__slide",attrs:{tabindex:"0"}},[t._t("default")],2)};k._withStripped=!0;const D=V({render:k,staticRenderFns:[]},undefined,Y,undefined,false,undefined,!1,void 0,void 0,void 0);var H={install:function(t){t.component("Carousel",z),t.component("Slide",D)}};return t.Carousel=z,t.Slide=D,t.default=H,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
