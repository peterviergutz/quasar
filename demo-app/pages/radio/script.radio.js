module.exports=function(n){function i(e){if(o[e])return o[e].exports;var l=o[e]={exports:{},id:e,loaded:!1};return n[e].call(l.exports,l,l.exports,i),l.loaded=!0,l.exports}var o={};return i.m=n,i.c=o,i.p="",i(0)}({0:function(n,i,o){n.exports=o(82)},82:function(n,i,o){"use strict";var e=o(83);n.exports={template:e,data:{option:"opt1"}}},83:function(n,i){n.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Radio</div>\n\n<h5>Model: <em>{{option}}</em></h5>\n\n<h5>Standalone</h5>\n<div class="column">\n  <label>\n    <radio :model.sync="option" value="opt1"></radio>\n    Option 1\n  </label>\n  <label>\n    <radio :model.sync="option" value="opt2"></radio>\n    Option 2\n  </label>\n  <label>\n    <radio :model.sync="option" value="opt3"></radio>\n    Option 3\n  </label>\n</div>\n\n<h5>Inside of a List</h5>\n<div class="list bordered inner-delimiter">\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Option 1</div>\n      <radio :model.sync="option" value="opt1"></radio>\n    </div>\n  </label>\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Option 2</div>\n      <radio :model.sync="option" value="opt2"></radio>\n    </div>\n  </label>\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Option 3</div>\n      <radio :model.sync="option" value="opt3"></radio>\n    </div>\n  </label>\n</div>\n<br>\n<div class="list bordered inner-delimiter">\n  <label class="item">\n    <radio :model.sync="option" value="opt1"></radio>\n    <div class="item-content">\n        Option 1\n    </div>\n  </label>\n  <label class="item">\n    <radio :model.sync="option" value="opt2"></radio>\n    <div class="item-content">\n        Option 2\n    </div>\n  </label>\n  <label class="item">\n    <radio :model.sync="option" value="opt3"></radio>\n    <div class="item-content">\n        Option 3\n    </div>\n  </label>\n</div>\n'}});