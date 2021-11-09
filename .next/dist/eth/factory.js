'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _DefiWallieFactory = require('./build/contracts/DefiWallieFactory.json');

var _DefiWallieFactory2 = _interopRequireDefault(_DefiWallieFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hi");
//import CampaignFactory from './build/contracts/CampaignFactory.json';

var abi = (0, _stringify2.default)(_DefiWallieFactory2.default.abi);
console.log(abi);
var instance = new _web2.default.eth.Contract(_DefiWallieFactory2.default.abi, '0xab961258F23f1e316A94640E6CFf0B0448FB81b4');

exports.default = instance;

// DefiWallieFactory 0xab961258F23f1e316A94640E6CFf0B0448FB81b4
// CampaignFactory 0x4bC10AdcccDD87c8A7Cea8A002dF1B8C62932813
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC9mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJEZWZpV2FsbGllRmFjdG9yeSIsImNvbnNvbGUiLCJsb2ciLCJhYmkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQU8sQUFBdUI7Ozs7OztBQUU5QixRQUFBLEFBQVEsSUFBUixBQUFZO0FBSFo7O0FBSUEsSUFBSSxNQUFNLHlCQUFlLDRCQUF6QixBQUFVLEFBQWlDO0FBQzNDLFFBQUEsQUFBUSxJQUFSLEFBQVk7QUFDWixJQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzVCLDRCQURlLEFBQ0csS0FEcEIsQUFBaUIsQUFFZixBQUdGOztrQkFBQSxBQUFlOztBQUdmO0FBQ0EiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamNvb3Blci9weS9jcnlwdG8vY29uc2Vuc3lzL2Jsb2NrY2hhaW4tZGV2ZWxvcGVyLWJvb3RjYW1wLWZpbmFsLXByb2plY3QifQ==