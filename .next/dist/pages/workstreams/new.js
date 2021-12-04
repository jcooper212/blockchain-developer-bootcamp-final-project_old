'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../eth/factory');

var _factory2 = _interopRequireDefault(_factory);

var _daotoken = require('../../eth/daotoken');

var _daotoken2 = _interopRequireDefault(_daotoken);

var _workstream = require('../../eth/workstream');

var _workstream2 = _interopRequireDefault(_workstream);

var _web = require('../../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

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