"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new _web2.default(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC93ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLGFBQTJCLEFBQWhFLGFBQTZFLEFBQzNFO0FBQ0E7U0FBTyxBQUFQLFNBQWdCLEFBQWhCLFFBQXdCLEVBQUUsUUFBUSxBQUFWLEFBQXhCLEFBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFoQixBQUFQLEFBQ0Q7QUFKRCxPQUlPLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBakIsQUFHQTtTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDRDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pjb29wZXIvcHkvY3J5cHRvL2NvbnNlbnN5cy9ibG9ja2NoYWluLWRldmVsb3Blci1ib290Y2FtcC1maW5hbC1wcm9qZWN0In0=