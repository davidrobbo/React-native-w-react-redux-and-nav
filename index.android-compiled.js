'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();





var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');
var _redux=require('redux');
var _reducer=require('./store/reducer');var _reducer2=_interopRequireDefault(_reducer);
var _Welcome=require('./components/container/Welcome');var _Welcome2=_interopRequireDefault(_Welcome);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var store=(0,_redux.createStore)(_reducer2.default);var

tinyTots=function(_Component){_inherits(tinyTots,_Component);function tinyTots(){_classCallCheck(this,tinyTots);return _possibleConstructorReturn(this,(tinyTots.__proto__||Object.getPrototypeOf(tinyTots)).apply(this,arguments));}_createClass(tinyTots,[{key:'renderScene',value:function renderScene(
route,navigator){
switch(route.name){
case'Welcome':
return _react2.default.createElement(_Welcome2.default,{navigator:navigator});
default:
return _react2.default.createElement(_Welcome2.default,{navigator:navigator});}

}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactRedux.Provider,{store:store},
_react2.default.createElement(_reactNative.Navigator,{
style:{flex:1},
initialRoute:{name:'Welcome'},
renderScene:this.renderScene})));



}}]);return tinyTots;}(_react.Component);exports.default=tinyTots;


_reactNative.AppRegistry.registerComponent('tinyTots',function(){return tinyTots;});

//# sourceMappingURL=index.android-compiled.js.map