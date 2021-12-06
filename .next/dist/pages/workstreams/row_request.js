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

var _jsxFileName = '/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/row_request.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loadingPay: false,
      errorMessagePay: '',
      loadingApprove: false,
      errorMessageApprove: ''
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var workstream, accounts, wko;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              console.log('onapprove');
              workstream = (0, _workstream2.default)(_this.props.address);

              _this.setState({ loadingApprove: true, errorMessageApprove: '' });
              _context.prev = 4;
              _context.next = 7;
              return _web2.default.eth.getAccounts();

            case 7:
              accounts = _context.sent;
              _context.next = 10;
              return workstream.methods.getWorkstreamOwner();

            case 10:
              wko = _context.sent;
              _context.next = 13;
              return workstream.methods.approveRequest(_this.props.request.id).send({ from: accounts[0] });

            case 13:
              console.log("approve ", _this.props.address, "acct ", accounts[0]);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](4);

              _this.setState({ errorMessageApprove: _context.t0.message });

            case 19:
              _this.setState({ loadingApprove: false });
              _routes.Router.pushRoute('/workstreams/' + _this.props.address + '/requests');

            case 21:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[4, 16]]);
    })), _this.onPay = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var workstream, accounts, wko;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              console.log('onpay');
              workstream = (0, _workstream2.default)(_this.props.address);

              _this.setState({ loadingPay: true, errorMessagePay: '' });
              _context2.prev = 4;
              _context2.next = 7;
              return _web2.default.eth.getAccounts();

            case 7:
              accounts = _context2.sent;
              _context2.next = 10;
              return workstream.methods.getWorkstreamOwner();

            case 10:
              wko = _context2.sent;
              _context2.next = 13;
              return workstream.methods.payRequest(_this.props.request.id).send({ from: accounts[0] });

            case 13:
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2['catch'](4);

              _this.setState({ errorMessagePay: _context2.t0.message });

            case 18:
              _this.setState({ loadingPay: false });
              _routes.Router.pushRoute('/workstreams/' + _this.props.address + '/requests');

            case 20:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[4, 15]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      return _react2.default.createElement(Row, { disabled: this.props.request.paid, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, this.props.request.id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.props.request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _web2.default.utils.fromWei(this.props.request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, this.props.request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, String(this.props.request.approved)), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, this.props.request.approved ? false : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'red', loading: this.state.loadingApprove, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, this.props.request.paid ? false : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', loading: this.state.loadingPay, onClick: this.onPay, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, ' Pay ')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzdHJlYW1zL3Jvd19yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiZmFjdG9yeSIsIldvcmtzdHJlYW0iLCJ3ZWIzIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiVGFibGUiLCJNZXNzYWdlIiwiTGluayIsIlJvdXRlciIsIlJlcXVlc3RSb3ciLCJzdGF0ZSIsImxvYWRpbmdQYXkiLCJlcnJvck1lc3NhZ2VQYXkiLCJsb2FkaW5nQXBwcm92ZSIsImVycm9yTWVzc2FnZUFwcHJvdmUiLCJvbkFwcHJvdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIndvcmtzdHJlYW0iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0V29ya3N0cmVhbU93bmVyIiwid2tvIiwiYXBwcm92ZVJlcXVlc3QiLCJyZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJwdXNoUm91dGUiLCJvblBheSIsInBheVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicGFpZCIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJTdHJpbmciLCJhcHByb3ZlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQVEsQUFBTyxBQUFPOztBQUNyQyxBQUFTLEFBQU0sQUFBYzs7Ozs7OztJLEFBR3ZCOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSjtrQkFBUSxBQUNNLEFBQ1o7dUJBRk0sQUFFVyxBQUNqQjtzQkFITSxBQUdVLEFBQ2hC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QUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQTlCLEFBQXNDLE9BSC9DLEFBR0UsQUFBTyxBQUE2QyxBQUNwRCwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLFFBSnBCLEFBSUUsQUFBMEIsQUFDMUIsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsZ0JBQWMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUwzQixBQUtFLEFBQU8sQUFBMEIsQUFDakMsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLHdCQUMvQixBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9CLE9BQU0sU0FBUyxLQUFBLEFBQUssTUFBeEMsQUFBOEMsZ0JBQWdCLFNBQVMsS0FBdkUsQUFBNEU7b0JBQTVFO3NCQUFBO0FBQUE7T0FBQSxFQVJKLEFBTUUsQUFFRSxBQUtGLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixPQUFuQixBQUEwQix3QkFDM0IsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTFDLEFBQWdELFlBQVksU0FBUyxLQUFyRSxBQUEwRTtvQkFBMUU7c0JBQUE7QUFBQTtPQUFBLEVBaEJOLEFBQ0UsQUFhRSxBQUVFLEFBS1A7Ozs7O0FBR0gsQSxBQW5GeUI7O2tCQW1GekIsQUFBZSIsImZpbGUiOiJyb3dfcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamNvb3Blci9weS9jcnlwdG8vY29uc2Vuc3lzL2Jsb2NrY2hhaW4tZGV2ZWxvcGVyLWJvb3RjYW1wLWZpbmFsLXByb2plY3QifQ==