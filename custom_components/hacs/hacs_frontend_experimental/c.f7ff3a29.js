import{_ as e,j as d,e as a,y as i,n as r}from"./main-aeda8d41.js";let t=e([r("ha-selector-duration")],(function(e,d){return{F:class extends d{constructor(...d){super(...d),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"label",value:void 0},{kind:"field",decorators:[a()],key:"helper",value:void 0},{kind:"field",decorators:[a({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[a({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){var e;return i`
      <ha-duration-input
        .label=${this.label}
        .helper=${this.helper}
        .data=${this.value}
        .disabled=${this.disabled}
        .required=${this.required}
        ?enableDay=${null===(e=this.selector.duration)||void 0===e?void 0:e.enable_day}
      ></ha-duration-input>
    `}}]}}),d);export{t as HaTimeDuration};
