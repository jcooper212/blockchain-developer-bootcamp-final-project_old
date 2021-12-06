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

var _workstream = require('../../eth/workstream');

var _workstream2 = _interopRequireDefault(_workstream);

var _web = require('../../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/new_request.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var workstream, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                workstream = (0, _workstream2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return workstream.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

              case 10:
                _routes.Router.pushRoute('/workstreams/' + _this.props.address + '/requests');
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:
                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_routes.Link, { route: '/workstreams/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, ' Back ')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Enter a payment request'), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Payment Description'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Value in DAOT'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Recipient Address'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, ' New Payment Request ')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzdHJlYW1zL25ld19yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiZmFjdG9yeSIsIldvcmtzdHJlYW0iLCJ3ZWIzIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxpbmsiLCJSb3V0ZXIiLCJSZXF1ZXN0TmV3Iiwic3RhdGUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwicmVjaXBpZW50IiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndvcmtzdHJlYW0iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SSxBQUd2Qjs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0o7YUFBUSxBQUNDLEFBQ1A7bUJBRk0sQUFFTyxBQUNiO2lCQUhNLEFBR0ssQUFDWDtlQUpNLEFBSUcsQUFDVDtvQixBQUxNLEFBS1E7QUFMUixBQUNOLGEsQUFVRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47b0VBQUE7O3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDQTtBQUZHLDZCQUVVLDBCQUFXLE1BQUEsQUFBSyxNQUYxQixBQUVVLEFBQXNCOzhCQUNELE1BSC9CLEFBR29DLE9BSHBDLEFBR0YsMEJBSEUsQUFHRixhQUhFLEFBR1csb0JBSFgsQUFHVyxPQUhYLEFBR2tCLHdCQUhsQixBQUdrQixBQUMzQjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FKckIsQUFJVCxBQUFjLEFBQThCO2dDQUpuQztnQ0FBQTt1QkFNZ0IsY0FBQSxBQUFLLElBTnJCLEFBTWdCLEFBQVM7O21CQUExQjtBQU5DLG9DQUFBO2dDQUFBO3VCQU9ELFdBQUEsQUFBVyxRQUFYLEFBQW1CLGNBQW5CLEFBQWlDLGFBQ3JDLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQURiLEFBQ0osQUFBdUIsVUFEbkIsQUFFSixXQUZJLEFBR0gsS0FBSyxFQUFDLE1BQUssU0FWUCxBQU9ELEFBR0UsQUFBTSxBQUFTOzttQkFDdkI7K0JBQUEsQUFBTyw0QkFBMEIsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLFVBWHJDO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQWFMOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBYnhCLEFBYUwsQUFBYyxBQUFtQjs7bUJBRXJDO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBZk4sQUFlVCxBQUFjLEFBQVM7O21CQWZkO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBaUJIO21CQUNOOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLEFBQUMsOEJBQUsseUJBQXVCLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxVQUF4QztvQkFBQTtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkEsQUFDQSxBQUNBLEFBRUEsNEJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkEsQUFJQSxBQUNBOztvQkFBQTtzQkFMQSxBQUtBLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BQTNDLEFBQVMsQUFBYyxBQUEyQjtBQUY5RDs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBS0Y7QUFMRTtBQUNFLDJCQUlILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLGtDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQXJDLEFBQVMsQUFBYyxBQUFxQjtBQUZ4RDs7b0JBQUE7c0JBVkYsQUFRRSxBQUVBLEFBS0E7QUFMQTtBQUNFLDJCQUlELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLHNDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLFdBQVcsTUFBQSxBQUFNLE9BQXpDLEFBQVMsQUFBYyxBQUF5QjtBQUY1RDs7b0JBQUE7c0JBakJGLEFBZUUsQUFFQSxBQUtBO0FBTEE7QUFDRSwyQkFJRixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBVyxLQUFBLEFBQUssTUFBOUMsQUFBb0Q7b0JBQXBEO3NCQXRCRixBQXNCRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFBQTtBQUFBO1NBOUJKLEFBQ0UsQUFNQSxBQXVCRSxBQUlMOzs7Ozs2RyxBQXhENEI7Ozs7O21CQUNuQjtBLDBCQUFZLE0sQUFBTSxNLEFBQWxCO2tEQUNELEVBQUMsUyxBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFWYyxBQW1FekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3X3JlcXVlc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pjb29wZXIvcHkvY3J5cHRvL2NvbnNlbnN5cy9ibG9ja2NoYWluLWRldmVsb3Blci1ib290Y2FtcC1maW5hbC1wcm9qZWN0In0=