var t={37:t=>{t.exports=class{constructor(t,e){this.name=t,this.value=e}get stringify(){return` ${this.name}="${this.value}"`}}},225:t=>{t.exports={bindOnclick:function(t,e){e.addEventListener("click",t)}}},138:(t,e,n)=>{var r=n(908),i=n(37),s=n(569);t.exports.Vp=r,t.exports.ah=i,t.exports.zs=s},569:(t,e,n)=>{const r=n(225);function i(t){var e=document.createElement(t.tag);for(let i=0;i<t.atribs.length;i++){var n=void 0;let s=t.atribs[i];"onclick"==s.name&&"string"!=typeof s.value?r.bindOnclick(s.value,e):(n=document.createAttribute(t.atribs[i].name)).value=t.atribs[i].value,null!=n&&e.setAttributeNode(n)}if("string"==typeof t.content||t.content instanceof String)e.innerHTML=t.content;else{if(!Array.isArray(t.content))throw new Error("Tag content must be string or array");for(let n=0;n<t.content.length;n++)"string"==typeof t.content[n]||t.content[n]instanceof String?e.innerHTML+=t.content[n]:e.appendChild(i(t.content[n]))}return e}t.exports={bindHTML:function t(e,n){if(Array.isArray(e)){var r=[];for(let s=0;s<e.length;s++)if(Array.isArray(e[s]))if(Array.isArray(n)){if(n.length!=e.length)throw new Error("The the amount of targets must match the amount of injections!");t(e[s],n[s])}else t(e[s],n);else r.push(i(e[s]));if(Array.isArray(n)){if(n.length!=e.length)throw new Error("The the amount of targets must match the amount of injections!");for(let t=0;t<n.length;t++)document.getElementById(n[t]).appendChild(r[t])}else for(let t=0;t<r.length;t++)document.getElementById(n).appendChild(r[t])}else{var s=i(e);document.getElementById(n).appendChild(s)}}}},908:t=>{t.exports=class{constructor(t,e,n){this.tag=t,this.atribs=n??[],this.content=e}get stringify(){let t="";if(this.atribs)for(let e=0;e<this.atribs.length;e++)t+=this.atribs[e].stringify;let e="";if(Array.isArray(this.content))for(let t=0;t<this.content.length;t++)"string"==typeof this.content[t]||e instanceof String?e+=this.content[t]:e+=this.content[t].stringify;else e=this.content;return`<${this.tag}${t}>`+e+`</${this.tag}>`}}}},e={},n=function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}(138),r=n.ah,i=n.zs,s=n.Vp;export{r as Attribute,i as Injector,s as Tag};