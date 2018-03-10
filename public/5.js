webpackJsonp([5],{1231:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{options1:[{title:"Read the Docs",icon:"fa-book",url:"https://codeclimate.com/github/sagalbot/vue-select"},{title:"View on GitHub",icon:"fa-github",url:"https://codeclimate.com/github/sagalbot/vue-select"},{title:"View on NPM",icon:"fa-database",url:"https://codeclimate.com/github/sagalbot/vue-select"},{title:"View Codepen Examples",icon:"fa-pencil",url:"https://codeclimate.com/github/sagalbot/vue-select"}],options2:[{countryCode:"AU",countryName:"Australia"},{countryCode:"CA",countryName:"Canada"},{countryCode:"CN",countryName:"China"},{countryCode:"DE",countryName:"Germany"},{countryCode:"JP",countryName:"Japan"},{countryCode:"MX",countryName:"Mexico"},{countryCode:"CH",countryName:"Switzerland"},{countryCode:"US",countryName:"United States"}],options3:[{id:1,label:"foo"},{id:3,label:"bar"},{id:2,label:"baz"}],selectedOptions3:{id:3,label:"bar"},options4:["foo","bar","baz"],selectedOptions4:["foo","bar"],options5:["foo","bar","baz"],selectedOptions5:[],options6:[]}},methods:{selectAll:function(){var t=this.$refs.select;t.options.forEach(function(e){t.select(e)}),t.open=!1},onSearch:function(t,e){e(!0),this.search(e,t,this)},search:_.debounce(function(t,e,s){fetch("https://api.github.com/search/repositories?q="+escape(e)).then(function(e){e.json().then(function(t){return s.options6=t.items}),t(!1)})},350)}}},1232:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("h2",[t._v("1. Vue Select - Custom Option Templating")]),t._v(" "),s("v-select",{staticClass:"mb-4",attrs:{options:t.options1,label:"title"},scopedSlots:t._u([{key:"option",fn:function(e){return[s("span",{staticClass:"fa",class:e.icon}),t._v("\n      "+t._s(e.title)+"\n    ")]}}])}),t._v(" "),s("h2",[t._v("2. Vue Select - Custom Labels")]),t._v(" "),s("v-select",{staticClass:"mb-4",attrs:{label:"countryName",options:t.options2}}),t._v(" "),s("h2",[t._v("3. Vue Select - Using v-model")]),t._v(" "),s("v-select",{staticClass:"mb-4",attrs:{options:t.options3},model:{value:t.selectedOptions3,callback:function(e){t.selectedOptions3=e},expression:"selectedOptions3"}}),t._v(" "),s("h2",[t._v("4. Vue Select - Selecting Multiple Values")]),t._v(" "),s("v-select",{staticClass:"mb-4",attrs:{multiple:"",options:t.options4},model:{value:t.selectedOptions4,callback:function(e){t.selectedOptions4=e},expression:"selectedOptions4"}}),t._v(" "),s("h2",[t._v("5. Vue Select - Select All")]),t._v(" "),s("button",{staticClass:"btn btn-secondary btn-sm mb-2",on:{click:t.selectAll}},[t._v("Select All")]),t._v(" "),s("v-select",{ref:"select",staticClass:"mb-4",attrs:{multiple:"",options:t.options5},model:{value:t.selectedOptions5,callback:function(e){t.selectedOptions5=e},expression:"selectedOptions5"}}),t._v(" "),s("h2",[t._v("6. Vue Select - Ajax")]),t._v(" "),s("v-select",{attrs:{placeholder:"search github..",label:"name",filterable:!1,options:t.options6},on:{search:t.onSearch},scopedSlots:t._u([{key:"option",fn:function(e){return[s("div",{staticClass:"media p-2"},[s("img",{staticClass:"mr-3",attrs:{src:e.owner.avatar_url,width:"72",height:"72",alt:""}}),t._v(" "),s("div",{staticClass:"media-body"},[s("h5",[t._v(t._s(e.full_name))])])])]}},{key:"selected-option",fn:function(e){return[s("div",{staticClass:"media p-2 selected"},[s("img",{staticClass:"mr-3",attrs:{src:e.owner.avatar_url,width:"72",height:"72",alt:""}}),t._v(" "),s("div",{staticClass:"media-body"},[s("h5",[t._v(t._s(e.full_name))])])])]}}])},[s("template",{slot:"no-options"},[t._v("\n      type to search GitHub repositories..\n    ")])],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert alert-info mb-5",attrs:{role:"alert"}},[e("ul",{staticClass:"list-unstyled mb-0"},[e("li",[this._v("Package name: "),e("code",[this._v("vue-select")])]),this._v(" "),e("li",[this._v("Link: "),e("a",{staticClass:"alert-link",attrs:{href:"https://github.com/sagalbot/vue-select",target:"_blank"}},[this._v("GitHub")])])])])}]}},1266:function(t,e,s){var o=s(9)(s(1231),s(1232),!1,null,null,null);t.exports=o.exports}});