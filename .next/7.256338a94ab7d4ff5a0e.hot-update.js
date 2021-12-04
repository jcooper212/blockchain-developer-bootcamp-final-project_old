webpackHotUpdate(7,{

/***/ 1381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(580);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(722);

var _factory2 = _interopRequireDefault(_factory);

var _daotoken = __webpack_require__(1374);

var _daotoken2 = _interopRequireDefault(_daotoken);

var _workstream = __webpack_require__(847);

var _workstream2 = _interopRequireDefault(_workstream);

var _web = __webpack_require__(446);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(457);

var _routes = __webpack_require__(536);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/new.js?entry';


var WorkstreamNew = function (_Component) {
  (0, _inherits3.default)(WorkstreamNew, _Component);

  function WorkstreamNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WorkstreamNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WorkstreamNew.__proto__ || (0, _getPrototypeOf2.default)(WorkstreamNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      workstreamName: '',
      errorMessage: '',
      allowance: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, wkAddr, tokenAddr, daotoken, bal;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;

                console.log(accounts);

                _context.next = 9;
                return _factory2.default.methods.createDaoWorkstream(_this.state.workstreamName, _this.state.workstreamOwner).send({ from: accounts[0] });

              case 9:
                wkAddr = _context.sent;
                _context.next = 12;
                return _factory2.default.methods.getDaoToken().call();

              case 12:
                tokenAddr = _context.sent;
                daotoken = (0, _daotoken2.default)(tokenAddr);
                _context.next = 16;
                return daotoken.methods.approve(_this.state.workstreamOwner, _web2.default.utils.toWei('10000000')).send({ from: accounts[0] });

              case 16:
                _context.next = 18;
                return daotoken.methods.transferFrom(accounts[0], _this.state.workstreamOwner, _web2.default.utils.toWei('500')).send({ from: accounts[0] });

              case 18:
                bal = _context.sent;

                /***
                    await daotoken.methods.approve(wkAddr, 10).send({from: accounts[0]});
                    var aw = await daotoken.methods.allowance(accounts[0], wkAddr).call();
                    var bal = await daotoken.methods.balanceOf(wkAddr).call();
                    console.log("allowance bal ", aw, bal);
                    var bal = await daotoken.methods.transferFrom(accounts[0], wkAddr,2).send({from: accounts[0]});
                    var bal = await daotoken.methods.balanceOf(wkAddr).call();
                    console.log("trf - allowance bal ", aw, bal);
                **/

                _routes.Router.pushRoute('/');
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 25:
                _this.setState({ loading: false });

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 22]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WorkstreamNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'New Workstream'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Workstream Name'), _react2.default.createElement(_semanticUiReact.Input, {
        label: '   ',
        labelPosition: 'right',
        value: this.state.workstreamName,
        onChange: function onChange(event) {
          return _this3.setState({ workstreamName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Workstream Owner'), _react2.default.createElement(_semanticUiReact.Input, {
        label: '   ',
        labelPosition: 'right',
        value: this.state.workstreamOwner,
        onChange: function onChange(event) {
          return _this3.setState({ workstreamOwner: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Workstream Allowance'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'DAOT',
        labelPosition: 'right',
        value: this.state.allowance,
        onChange: function onChange(event) {
          return _this3.setState({ allowance: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops ', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Create')));
    }
  }]);

  return WorkstreamNew;
}(_react.Component);

exports.default = WorkstreamNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzdHJlYW1zL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsImZhY3RvcnkiLCJEYW90b2tlbiIsIldvcmtzdHJlYW0iLCJ3ZWIzIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxpbmsiLCJSb3V0ZXIiLCJXb3Jrc3RyZWFtTmV3Iiwic3RhdGUiLCJ3b3Jrc3RyZWFtTmFtZSIsImVycm9yTWVzc2FnZSIsImFsbG93YW5jZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNyZWF0ZURhb1dvcmtzdHJlYW0iLCJ3b3Jrc3RyZWFtT3duZXIiLCJzZW5kIiwiZnJvbSIsIndrQWRkciIsImdldERhb1Rva2VuIiwiY2FsbCIsInRva2VuQWRkciIsImRhb3Rva2VuIiwiYXBwcm92ZSIsInV0aWxzIiwidG9XZWkiLCJ0cmFuc2ZlckZyb20iLCJiYWwiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7O0FBR3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFTLEFBQU0sQUFBYzs7Ozs7OztJLEFBR3ZCOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDSjtzQkFBUSxBQUNVLEFBQ2hCO29CQUZNLEFBRVEsQUFDZDtpQkFITSxBQUdLLEFBQ1g7ZSxBQUpNLEFBSUc7QUFKSCxBQUNOLGEsQUFLRjsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7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O29CQUFBO3NCQVpGLEFBVUUsQUFFQSxBQU9BO0FBUEE7QUFDQSwyQkFNQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDQSx5Q0FBQSxBQUFDO2VBQUQsQUFDTSxBQUNOO3VCQUZBLEFBRWMsQUFDZDtlQUFTLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ3BCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsV0FBVyxNQUFBLEFBQU0sT0FBekMsQUFBUyxBQUFjLEFBQXlCO0FBSjFEOztvQkFBQTtzQkFyQkYsQUFtQkUsQUFFQSxBQVFBO0FBUkE7QUFDQSwyQkFPQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQTdCRixBQTZCRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO29CQUFBO3NCQUFBO0FBQUE7U0FqQ0osQUFDQSxBQUVFLEFBOEJFLEFBS0w7Ozs7O0FBR0gsQSxBQWpGNEI7O2tCQWlGNUIsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pjb29wZXIvcHkvY3J5cHRvL2NvbnNlbnN5cy9ibG9ja2NoYWluLWRldmVsb3Blci1ib290Y2FtcC1maW5hbC1wcm9qZWN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/workstreams/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4yNTYzMzhhOTRhYjdkNGZmNWEwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvd29ya3N0cmVhbXMvbmV3LmpzPzU2NTVhYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGgvZmFjdG9yeSc7XG5pbXBvcnQgRGFvdG9rZW4gZnJvbSAnLi4vLi4vZXRoL2Rhb3Rva2VuJztcbmltcG9ydCBXb3Jrc3RyZWFtIGZyb20gJy4uLy4uL2V0aC93b3Jrc3RyZWFtJztcblxuXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGgvd2ViMyc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuXG5jbGFzcyBXb3Jrc3RyZWFtTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgd29ya3N0cmVhbU5hbWU6ICcnLFxuICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgYWxsb3dhbmNlOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOicnfSk7XG4gICAgdHJ5IHtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgY29uc29sZS5sb2coYWNjb3VudHMpO1xuXG4gICAgY29uc3Qgd2tBZGRyID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzXG4gICAgLmNyZWF0ZURhb1dvcmtzdHJlYW0odGhpcy5zdGF0ZS53b3Jrc3RyZWFtTmFtZSwgdGhpcy5zdGF0ZS53b3Jrc3RyZWFtT3duZXIpXG4gICAgLnNlbmQoe2Zyb206IGFjY291bnRzWzBdfSk7XG5cbiAgICBjb25zdCB0b2tlbkFkZHIgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGFvVG9rZW4oKS5jYWxsKCk7XG4gICAgY29uc3QgZGFvdG9rZW4gPSBEYW90b2tlbih0b2tlbkFkZHIpO1xuICAgIGF3YWl0IGRhb3Rva2VuLm1ldGhvZHMuYXBwcm92ZSh0aGlzLnN0YXRlLndvcmtzdHJlYW1Pd25lciwgd2ViMy51dGlscy50b1dlaSgnMTAwMDAwMDAnKSkuc2VuZCh7ZnJvbTogYWNjb3VudHNbMF19KTtcbiAgICB2YXIgYmFsID0gYXdhaXQgZGFvdG9rZW4ubWV0aG9kcy50cmFuc2ZlckZyb20oYWNjb3VudHNbMF0sIHRoaXMuc3RhdGUud29ya3N0cmVhbU93bmVyLHdlYjMudXRpbHMudG9XZWkoJzUwMCcpKS5zZW5kKHtmcm9tOiBhY2NvdW50c1swXX0pO1xuLyoqKlxuICAgIGF3YWl0IGRhb3Rva2VuLm1ldGhvZHMuYXBwcm92ZSh3a0FkZHIsIDEwKS5zZW5kKHtmcm9tOiBhY2NvdW50c1swXX0pO1xuICAgIHZhciBhdyA9IGF3YWl0IGRhb3Rva2VuLm1ldGhvZHMuYWxsb3dhbmNlKGFjY291bnRzWzBdLCB3a0FkZHIpLmNhbGwoKTtcbiAgICB2YXIgYmFsID0gYXdhaXQgZGFvdG9rZW4ubWV0aG9kcy5iYWxhbmNlT2Yod2tBZGRyKS5jYWxsKCk7XG4gICAgY29uc29sZS5sb2coXCJhbGxvd2FuY2UgYmFsIFwiLCBhdywgYmFsKTtcbiAgICB2YXIgYmFsID0gYXdhaXQgZGFvdG9rZW4ubWV0aG9kcy50cmFuc2ZlckZyb20oYWNjb3VudHNbMF0sIHdrQWRkciwyKS5zZW5kKHtmcm9tOiBhY2NvdW50c1swXX0pO1xuICAgIHZhciBiYWwgPSBhd2FpdCBkYW90b2tlbi5tZXRob2RzLmJhbGFuY2VPZih3a0FkZHIpLmNhbGwoKTtcbiAgICBjb25zb2xlLmxvZyhcInRyZiAtIGFsbG93YW5jZSBiYWwgXCIsIGF3LCBiYWwpO1xuKiovXG5cbiAgICBSb3V0ZXIucHVzaFJvdXRlKCcvJyk7XG4gIH0gY2F0Y2goZXJyKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcbiAgfVxuICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDM+TmV3IFdvcmtzdHJlYW08L2gzPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgIDxsYWJlbD5Xb3Jrc3RyZWFtIE5hbWU8L2xhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgbGFiZWw9XCIgICBcIlxuICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICB2YWx1ZSA9IHt0aGlzLnN0YXRlLndvcmtzdHJlYW1OYW1lfVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7d29ya3N0cmVhbU5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgPGxhYmVsPldvcmtzdHJlYW0gT3duZXI8L2xhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgbGFiZWw9XCIgICBcIlxuICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICB2YWx1ZSA9IHt0aGlzLnN0YXRlLndvcmtzdHJlYW1Pd25lcn1cbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3dvcmtzdHJlYW1Pd25lcjogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICA8bGFiZWw+V29ya3N0cmVhbSBBbGxvd2FuY2U8L2xhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgbGFiZWw9XCJEQU9UXCJcbiAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS5hbGxvd2FuY2V9XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHthbGxvd2FuY2U6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMgXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBwcmltYXJ5PkNyZWF0ZTwvQnV0dG9uPlxuXG4gICAgICA8L0Zvcm0+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya3N0cmVhbU5ldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3dvcmtzdHJlYW1zL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUNBO0FBSUE7QUFDQTtBQU5BO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFBQTtBQVdBO0FBQ0E7QUFEQTtBQVhBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFkQTtBQUFBO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFDQTtBQXdCQTs7Ozs7Ozs7OztBQUFBO0FBekJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUEyQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE5QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSkE7O0FBQUE7QUFPQTtBQVBBO0FBQ0E7O0FBTUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSkE7O0FBQUE7QUFPQTtBQVBBO0FBQ0E7O0FBTUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSkE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==