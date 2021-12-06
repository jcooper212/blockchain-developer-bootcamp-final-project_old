'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _row_request = require('./row_request');

var _row_request2 = _interopRequireDefault(_row_request);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/requests.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRow',
    value: function renderRow() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_row_request2.default, {
          key: index,
          request: request,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Payment Requests'), _react2.default.createElement(_routes.Link, { route: '/workstreams/' + this.props.address + '/new_request', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'New Payment'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Approved by Lead'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Pay'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.renderRow())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, ' Found ', this.props.requestCount, '  requests '));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, workstream, requestCount, wkOwner, daoOwner, tokenAddr, daotoken, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                workstream = (0, _workstream2.default)(address);
                _context.next = 4;
                return workstream.methods.getRequestLength().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return workstream.methods.getWorkstreamOwner().call();

              case 7:
                wkOwner = _context.sent;
                _context.next = 10;
                return workstream.methods.getDaoOwner().call();

              case 10:
                daoOwner = _context.sent;

                console.log("wk dao ", wkOwner, daoOwner);
                _context.next = 14;
                return _factory2.default.methods.getDaoToken().call();

              case 14:
                tokenAddr = _context.sent;
                daotoken = (0, _daotoken2.default)(tokenAddr);
                _context.next = 18;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return workstream.methods.requests(index).call();
                }));

              case 18:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzdHJlYW1zL3JlcXVlc3RzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiZmFjdG9yeSIsIkRhb3Rva2VuIiwiV29ya3N0cmVhbSIsIndlYjMiLCJSZXF1ZXN0Um93IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIlRhYmxlIiwiTGluayIsIlJvdXRlciIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3ciLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsIndvcmtzdHJlYW0iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdExlbmd0aCIsImNhbGwiLCJnZXRXb3Jrc3RyZWFtT3duZXIiLCJ3a093bmVyIiwiZ2V0RGFvT3duZXIiLCJkYW9Pd25lciIsImNvbnNvbGUiLCJsb2ciLCJnZXREYW9Ub2tlbiIsInRva2VuQWRkciIsImRhb3Rva2VuIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7QUFFdkIsQUFBUyxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUN2QyxBQUFTLEFBQU0sQUFBYzs7Ozs7OztJLEFBR3ZCOzs7Ozs7Ozs7OztnQ0FzQk87bUJBQ1Q7O2tCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDakQ7K0JBQ0UsQUFBQztlQUFELEFBQ1MsQUFDTDttQkFGSixBQUVhLEFBQ1Q7bUJBQVMsT0FBQSxBQUFLLE1BSGxCLEFBR3dCOztzQkFIeEI7d0JBREYsQUFDRSxBQU1IO0FBTkc7QUFDSSxTQURKO0FBRkosQUFBTyxBQVNSLE9BVFE7Ozs7NkJBVUQ7VUFBQSxBQUNDLFNBREQsQUFDa0MsdUJBRGxDLEFBQ0M7VUFERCxBQUNTLE1BRFQsQUFDa0MsdUJBRGxDLEFBQ1M7VUFEVCxBQUNjLGFBRGQsQUFDa0MsdUJBRGxDLEFBQ2M7VUFEZCxBQUMwQixPQUQxQixBQUNrQyx1QkFEbEMsQUFDMEIsQUFDaEM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNFLHFDQUFBLEFBQUMsOEJBQUsseUJBQXVCLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxVQUF4QztvQkFBQTtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFDLGNBQXhDLEFBQXVDLEFBQWM7b0JBQXJEO3NCQUFBO0FBQUE7U0FKSixBQUVFLEFBQ0EsQUFDRSxBQUdGLGtDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsZ0NBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0EscUNBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTkYsQUFNRSxBQUNBLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVROLEFBQ0UsQUFDRSxBQU9FLEFBR0osMEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FuQkosQUFPRSxBQVlFLEFBQ0csQUFBSyxBQUdWLCtCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFhLGdCQUFBLEFBQUssTUFBbEIsQUFBd0IsY0F4QjVCLEFBQ0UsQUF1QkUsQUFHTDs7Ozs7MkcsQUE3RDRCOzs7OzttQkFDbkI7QSwwQkFBWSxNLEFBQU0sTUFDcEIsQSxBQURFO0EsNkJBQ1csMEIsQUFBQSxBQUFXOzt1QkFDSCxXQUFBLEFBQVcsUUFBWCxBQUFtQixtQixBQUFuQixBQUFzQzs7bUJBQTNEO0E7O3VCQUNnQixXQUFBLEFBQVcsUUFBWCxBQUFtQixxQixBQUFuQixBQUF3Qzs7bUJBQXhEO0E7O3VCQUNpQixXQUFBLEFBQVcsUUFBWCxBQUFtQixjLEFBQW5CLEFBQWlDOzttQkFBbEQ7QSxvQ0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksV0FBWixBQUF1QixTQUF2QixBQUFnQzs7dUJBQ1Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGMsQUFBaEIsQUFBOEI7O21CQUFoRDtBLHFDQUNBO0EsMkJBQVcsd0IsQUFBQSxBQUFTOzt5Q0FFSCxBQUFRLFVBQ3ZCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFDQyxPQURELEFBRUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8sV0FBQSxBQUFXLFFBQVgsQUFBbUIsU0FBbkIsQUFBNEIsT0FBbkMsQUFBTyxBQUFtQyxBQUMzQztBLEFBTG9CLEFBQ3JCLGlCQUFBLENBRHFCOzttQkFBakI7QTtpREFRQyxFQUFDLFNBQUQsU0FBVSxVQUFWLFVBQW9CLGMsQUFBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQW5CZ0IsQUFpRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InJlcXVlc3RzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qY29vcGVyL3B5L2NyeXB0by9jb25zZW5zeXMvYmxvY2tjaGFpbi1kZXZlbG9wZXItYm9vdGNhbXAtZmluYWwtcHJvamVjdCJ9