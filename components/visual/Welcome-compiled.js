'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

App=function(_Component){_inherits(App,_Component);
function App(props){_classCallCheck(this,App);var _this=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,
props));
_this.state={
fadeAnim:0,
showWelcome:false};return _this;

}_createClass(App,[{key:'componentDidMount',value:function componentDidMount()

{
this.animate();
}},{key:'animate',value:function animate()

{
var count=0;
var self=this;
while(count<1000){
setTimeout(function(){
self.setState({fadeAnim:self.state.fadeAnim+0.001});
if(self.state.fadeAnim>=0.9){
self.setState({showWelcome:true});
}
},3);
count++;
}
}},{key:'render',value:function render()

{
var welcome=this.state.showWelcome?
_react2.default.createElement(_reactNative.Text,{style:{flex:1}},'HI'):null;

return(
_react2.default.createElement(_reactNative.View,{style:styles.parent},
_react2.default.createElement(_reactNative.Animated.Image,{source:require('../../img/logo.png'),style:{resizeMode:'contain',opacity:this.state.fadeAnim,flex:1}}),
welcome));


}}]);return App;}(_react.Component);exports.default=App;


var styles=_reactNative.StyleSheet.create({
parent:{
backgroundColor:'#FCFCFC',
position:'absolute',
top:0,
left:0,
right:0,
bottom:0,
flexDirection:'column',
alignItems:'center',
justifyContent:'center'},

image:{
resizeMode:'contain'}});

//# sourceMappingURL=Welcome-compiled.js.map