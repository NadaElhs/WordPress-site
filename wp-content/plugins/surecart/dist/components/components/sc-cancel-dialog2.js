import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{d as defineCustomElement$i}from"./sc-alert2.js";import{d as defineCustomElement$h}from"./sc-block-ui2.js";import{d as defineCustomElement$g}from"./sc-button2.js";import{d as defineCustomElement$f}from"./sc-cancel-discount2.js";import{d as defineCustomElement$e}from"./sc-cancel-survey2.js";import{d as defineCustomElement$d}from"./sc-choice2.js";import{d as defineCustomElement$c}from"./sc-choices2.js";import{d as defineCustomElement$b}from"./sc-dashboard-module2.js";import{d as defineCustomElement$a}from"./sc-dialog2.js";import{d as defineCustomElement$9}from"./sc-flex2.js";import{d as defineCustomElement$8}from"./sc-form2.js";import{d as defineCustomElement$7}from"./sc-form-control2.js";import{d as defineCustomElement$6}from"./sc-icon2.js";import{d as defineCustomElement$5}from"./sc-skeleton2.js";import{d as defineCustomElement$4}from"./sc-spinner2.js";import{d as defineCustomElement$3}from"./sc-subscription-cancel2.js";import{d as defineCustomElement$2}from"./sc-textarea2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scCancelDialogCss=":host{display:block;font-size:var(--sc-font-size-medium)}.close__button{position:absolute;top:0;right:0;font-size:22px}",ScCancelDialogStyle0=scCancelDialogCss,ScCancelDialog=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scRequestClose=createEvent(this,"scRequestClose",7),this.scRefresh=createEvent(this,"scRefresh",7),this.open=void 0,this.protocol=void 0,this.subscription=void 0,this.reasons=void 0,this.reason=void 0,this.step="cancel",this.comment=void 0}close(){this.reset(),this.trackAttempt(),this.scRequestClose.emit("close-button")}reset(){var e;this.reason=null,this.step=(null===(e=this.protocol)||void 0===e?void 0:e.preservation_enabled)?"survey":"cancel"}async trackAttempt(){var e,s;(null===(e=this.protocol)||void 0===e?void 0:e.preservation_enabled)&&await apiFetch({method:"PATCH",path:`surecart/v1/subscriptions/${null===(s=this.subscription)||void 0===s?void 0:s.id}/preserve`})}componentWillLoad(){this.reset()}render(){return h("sc-dialog",{key:"3de2271f2c7b0bde56b4f741740e037b3ed06504",style:{"--width":"survey"===this.step?"675px":"500px","--body-spacing":"var(--sc-spacing-xxx-large)"},noHeader:!0,open:this.open,onScRequestClose:()=>this.close()},h("div",{key:"e79662fffed4c09b328a745c0159941d800fec91",class:{cancel:!0}},h("sc-button",{key:"46738c75e4938d3de3cf654b2642af3160ea3bb0",class:"close__button",type:"text",circle:!0,onClick:()=>this.close()},h("sc-icon",{key:"65fa63e99b904b0e338b682fee1727f1c45c8b5f",name:"x"})),"cancel"===this.step&&h("sc-subscription-cancel",{key:"30f84bba58ac9dc2080ac1a41ef759251b6a7495",subscription:this.subscription,protocol:this.protocol,reason:this.reason,comment:this.comment,onScAbandon:()=>this.close(),onScCancelled:()=>{this.scRefresh.emit(),this.reset(),this.scRequestClose.emit("close-button")}}),"survey"===this.step&&h("sc-cancel-survey",{key:"ef6b2b395a3e881321915b24f7fe4fbf4a21307e",protocol:this.protocol,onScAbandon:()=>this.close(),onScSubmitReason:e=>{const{comment:s,reason:t}=e.detail;this.reason=t,this.comment=s,this.step=(null==t?void 0:t.coupon_enabled)?"discount":"cancel"}}),"discount"===this.step&&h("sc-cancel-discount",{key:"8c8bde15cc7a78d4b06f1902d1cfb68e92a73000",protocol:this.protocol,subscription:this.subscription,reason:this.reason,comment:this.comment,onScCancel:()=>this.step="cancel",onScPreserved:()=>{this.scRefresh.emit(),this.reset(),this.scRequestClose.emit("close-button")}})))}static get style(){return ScCancelDialogStyle0}},[1,"sc-cancel-dialog",{open:[4],protocol:[16],subscription:[16],reasons:[32],reason:[32],step:[32],comment:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-cancel-dialog","sc-alert","sc-block-ui","sc-button","sc-cancel-discount","sc-cancel-survey","sc-choice","sc-choices","sc-dashboard-module","sc-dialog","sc-flex","sc-form","sc-form-control","sc-icon","sc-skeleton","sc-spinner","sc-subscription-cancel","sc-textarea","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-cancel-dialog":customElements.get(e)||customElements.define(e,ScCancelDialog);break;case"sc-alert":customElements.get(e)||defineCustomElement$i();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$h();break;case"sc-button":customElements.get(e)||defineCustomElement$g();break;case"sc-cancel-discount":customElements.get(e)||defineCustomElement$f();break;case"sc-cancel-survey":customElements.get(e)||defineCustomElement$e();break;case"sc-choice":customElements.get(e)||defineCustomElement$d();break;case"sc-choices":customElements.get(e)||defineCustomElement$c();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$b();break;case"sc-dialog":customElements.get(e)||defineCustomElement$a();break;case"sc-flex":customElements.get(e)||defineCustomElement$9();break;case"sc-form":customElements.get(e)||defineCustomElement$8();break;case"sc-form-control":customElements.get(e)||defineCustomElement$7();break;case"sc-icon":customElements.get(e)||defineCustomElement$6();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$5();break;case"sc-spinner":customElements.get(e)||defineCustomElement$4();break;case"sc-subscription-cancel":customElements.get(e)||defineCustomElement$3();break;case"sc-textarea":customElements.get(e)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$1()}}))}export{ScCancelDialog as S,defineCustomElement as d};