'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=require('react-redux');
var _Welcome=require('../visual/Welcome');var _Welcome2=_interopRequireDefault(_Welcome);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var mapStateToProps=function mapStateToProps(state){
return{
text:state.text};

};

var mapDispatchToProps=function mapDispatchToProps(dispatch){
return{
changeText:function changeText(){
dispatch({type:"CHANGE_TEXT"});
}};

};

var Welcome=(0,_reactRedux.connect)(
mapStateToProps,
mapDispatchToProps)(_Welcome2.default);exports.default=


Welcome;

//# sourceMappingURL=Welcome-compiled.js.map