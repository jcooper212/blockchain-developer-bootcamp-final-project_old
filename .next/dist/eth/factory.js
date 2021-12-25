'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _DaoPayTreasury = require('../eth.hardhat/artifacts/contracts/DaoPayTreasury.sol/DaoPayTreasury.json');

var _DaoPayTreasury2 = _interopRequireDefault(_DaoPayTreasury);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(_DaoPayTreasury2.default.abi, '0xd5eac85106BA395dE63B3b005f4dd9bEB9e02ee7');
//  '0x54e889149FD3FAdA59d1136576c0338365B50D21');
//  '0x0E570d2E9c9fFECC7B03aCDCc007Aeb38283935A');
//  '0xD5f834b6AB48dE8b8D695D2fFD6f0380B9F97cB5');
//  '0x12684f987d66cBf25A8Eb8edfCA3a63AAA117011'); //v4
//  '0xe77187e518500d43FC9C628938d9529A3F873D32');
//  '0x077EfF2928905fb1D312A4fF32da84D06B42A5d4'); //v3
//  '0xfe52dC541255CCF56F009628d237c0184C2f8B76'); //v2
//  '0xE625BeFEA3D0e949E3D5c7A795872c73BDfA4c02'); //v1
//console.log("instance is ", instance);

//import DaoPayTreasury from './build/contracts/DaoPayTreasury.json';
exports.default = instance;

// DefiWallieFactory 0xab961258F23f1e316A94640E6CFf0B0448FB81b4
// CampaignFactory 0x4bC10AdcccDD87c8A7Cea8A002dF1B8C62932813
// DaoPayTreasury 0xE625BeFEA3D0e949E3D5c7A795872c73BDfA4c02
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC9mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJEYW9QYXlUcmVhc3VyeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQW9COzs7Ozs7QUFHM0IsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUM1Qix5QkFEZSxBQUNBLEtBRGpCLEFBQWlCLEFBRWY7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0YsQUFDQTs7QUFoQkE7a0JBZ0JBLEFBQWU7O0FBR2Y7QUFDQTtBQUNBIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pjb29wZXIvcHkvY3J5cHRvL2NvbnNlbnN5cy9ibG9ja2NoYWluLWRldmVsb3Blci1ib290Y2FtcC1maW5hbC1wcm9qZWN0In0=