"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var initialState={
user:{},
text:"HELLO WORLD"};


var reducer=function reducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case"CHANGE_TEXT":
return _extends({},
state,{text:"HELLO CLICKER"});

default:
return state;}

};exports.default=

reducer;

//# sourceMappingURL=reducer-compiled.js.map