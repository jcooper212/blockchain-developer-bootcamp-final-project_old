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
        var accounts, wkAddr;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });

                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;

                console.log("here are the accts ", accounts);

                _context.next = 8;
                return _factory2.default.methods.createDaoWorkstream(_this.state.workstreamName, _this.state.workstreamOwner).send({ from: accounts[0] });

              case 8:
                wkAddr = _context.sent;

                _routes.Router.pushRoute('/');
                //  } catch(err){

                _this.setState({ errorMessage: err.message });
                //  }
                _this.setState({ loading: false });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
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
          lineNumber: 42
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'New Workstream'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
          lineNumber: 47
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
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
          lineNumber: 56
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
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
          lineNumber: 65
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops ', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Create')));
    }
  }]);

  return WorkstreamNew;
}(_react.Component);

exports.default = WorkstreamNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzdHJlYW1zL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsImZhY3RvcnkiLCJEYW90b2tlbiIsIldvcmtzdHJlYW0iLCJ3ZWIzIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxpbmsiLCJSb3V0ZXIiLCJXb3Jrc3RyZWFtTmV3Iiwic3RhdGUiLCJ3b3Jrc3RyZWFtTmFtZSIsImVycm9yTWVzc2FnZSIsImFsbG93YW5jZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNyZWF0ZURhb1dvcmtzdHJlYW0iLCJ3b3Jrc3RyZWFtT3duZXIiLCJzZW5kIiwiZnJvbSIsIndrQWRkciIsInB1c2hSb3V0ZSIsImVyciIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7QUFHdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0ksQUFHdkI7Ozs7Ozs7Ozs7Ozs7OzswTixBQUNKO3NCQUFRLEFBQ1UsQUFDaEI7b0JBRk0sQUFFUSxBQUNkO2lCQUhNLEFBR0ssQUFDWDtlLEFBSk0sQUFJRztBQUpILEFBQ04sYSxBQUtGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FGckIsQUFFVCxBQUFjLEFBQTZCOztnQ0FGbEM7dUJBSWMsY0FBQSxBQUFLLElBSm5CLEFBSWMsQUFBUzs7bUJBQTFCO0FBSkcsb0NBS1Q7O3dCQUFBLEFBQVEsSUFBUixBQUFZLHVCQUxILEFBS1QsQUFBb0M7O2dDQUwzQjt1QkFPWSxrQkFBQSxBQUFRLFFBQVIsQUFDcEIsb0JBQW9CLE1BQUEsQUFBSyxNQURMLEFBQ1csZ0JBQWdCLE1BQUEsQUFBSyxNQURoQyxBQUNzQyxpQkFEdEMsQUFFcEIsS0FBSyxFQUFDLE1BQU0sU0FUSixBQU9ZLEFBRWYsQUFBTyxBQUFTOzttQkFGaEI7QUFQRyxrQ0FZVDs7K0JBQUEsQUFBTyxVQUFQLEFBQWlCLEFBQ3JCO0FBRU07O3NCQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsSUFBN0IsQUFBYyxBQUFtQixBQUN2QztBQUNFO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBakJKLEFBaUJYLEFBQWMsQUFBVTs7bUJBakJiO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0E7Ozs7Ozs7Ozs7NkJBb0JGO21CQUNQOzs2QkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDQSxvQ0FBQSxBQUFDO2VBQUQsQUFDTSxBQUNOO3VCQUZBLEFBRWMsQUFDZDtlQUFTLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ3BCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsZ0JBQWdCLE1BQUEsQUFBTSxPQUE5QyxBQUFTLEFBQWMsQUFBOEI7QUFKL0Q7O29CQUFBO3NCQUhGLEFBQ0UsQUFFQSxBQU9BO0FBUEE7QUFDQSwyQkFNQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDQSxxQ0FBQSxBQUFDO2VBQUQsQUFDTSxBQUNOO3VCQUZBLEFBRWMsQUFDZDtlQUFTLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ3BCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsaUJBQWlCLE1BQUEsQUFBTSxPQUEvQyxBQUFTLEFBQWMsQUFBK0I7QUFKaEU7O29CQUFBO3NCQVpGLEFBVUUsQUFFQSxBQU9BO0FBUEE7QUFDQSwyQkFNQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDQSx5Q0FBQSxBQUFDO2VBQUQsQUFDTSxBQUNOO3VCQUZBLEFBRWMsQUFDZDtlQUFTLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ3BCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsV0FBVyxNQUFBLEFBQU0sT0FBekMsQUFBUyxBQUFjLEFBQXlCO0FBSjFEOztvQkFBQTtzQkFyQkYsQUFtQkUsQUFFQSxBQVFBO0FBUkE7QUFDQSwyQkFPQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQTdCRixBQTZCRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO29CQUFBO3NCQUFBO0FBQUE7U0FqQ0osQUFDQSxBQUVFLEFBOEJFLEFBS0w7Ozs7O0EsQUFsRXlCLEFBcUU1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pjb29wZXIvcHkvY3J5cHRvL2NvbnNlbnN5cy9ibG9ja2NoYWluLWRldmVsb3Blci1ib290Y2FtcC1maW5hbC1wcm9qZWN0In0=