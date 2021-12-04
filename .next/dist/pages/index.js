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

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../eth/factory');

var _factory2 = _interopRequireDefault(_factory);

var _workstream = require('../eth/workstream');

var _workstream2 = _interopRequireDefault(_workstream);

var _web = require('../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _daotoken = require('../eth/daotoken');

var _daotoken2 = _interopRequireDefault(_daotoken);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/index.js?entry';


var WorkstreamIndex = function (_Component) {
  (0, _inherits3.default)(WorkstreamIndex, _Component);

  function WorkstreamIndex() {
    (0, _classCallCheck3.default)(this, WorkstreamIndex);

    return (0, _possibleConstructorReturn3.default)(this, (WorkstreamIndex.__proto__ || (0, _getPrototypeOf2.default)(WorkstreamIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkstreamIndex, [{
    key: 'renderWorktreams',
    value: function renderWorktreams() {
      var items = this.props.workstreams.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/workstreams/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }, 'View Workstream')),
          fluid: true
        };
      });
      var itemNames = this.props.workstreamNames;
      console.log(itemNames);
      items.forEach(function (item, index) {
        item['header'] = itemNames[index];
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, ' DAO Balance is ', this.props.daoBal, ' '), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Current Workstreams'), _react2.default.createElement(_routes.Link, { route: '/workstreams/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Create Workstream', icon: 'add circle', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }))), this.renderWorktreams()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var workstreams, workstreamNames, res, dtokenAddr, daoBal, accounts, dtoken, dOwner, bal, allow;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDaoWorkstreams().call();

              case 2:
                workstreams = _context.sent;
                _context.next = 5;
                return _factory2.default.methods.getDaoWorkstreamNames().call();

              case 5:
                workstreamNames = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.getDaoTokenOwnerBalance().call();

              case 8:
                res = _context.sent;
                dtokenAddr = res[0];
                daoBal = res[1];
                _context.next = 13;
                return _web2.default.eth.getAccounts();

              case 13:
                accounts = _context.sent;
                dtoken = (0, _daotoken2.default)(dtokenAddr);
                _context.next = 17;
                return _factory2.default.methods.owner().call();

              case 17:
                dOwner = _context.sent;
                _context.next = 20;
                return dtoken.methods.balanceOf(dOwner).call();

              case 20:
                bal = _context.sent;
                _context.next = 23;
                return dtoken.methods.allowance(dOwner, workstreams[0]).call();

              case 23:
                allow = _context.sent;

                console.log("daoowner daobal ", workstreams[0], daoBal, dOwner, allow);

                return _context.abrupt('return', { workstreams: workstreams,
                  workstreamNames: workstreamNames,
                  dtokenAddr: dtokenAddr,
                  daoBal: daoBal });

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return WorkstreamIndex;
}(_react.Component);

exports.default = WorkstreamIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJXb3Jrc3RyZWFtIiwid2ViMyIsIkRhb3Rva2VuIiwiTGF5b3V0IiwiTGluayIsIldvcmtzdHJlYW1JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJ3b3Jrc3RyZWFtcyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiaXRlbU5hbWVzIiwid29ya3N0cmVhbU5hbWVzIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJkYW9CYWwiLCJyZW5kZXJXb3JrdHJlYW1zIiwibWV0aG9kcyIsImdldERhb1dvcmtzdHJlYW1zIiwiY2FsbCIsImdldERhb1dvcmtzdHJlYW1OYW1lcyIsImdldERhb1Rva2VuT3duZXJCYWxhbmNlIiwicmVzIiwiZHRva2VuQWRkciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJkdG9rZW4iLCJvd25lciIsImRPd25lciIsImJhbGFuY2VPZiIsImJhbCIsImFsbG93YW5jZSIsImFsbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNOztBQUNkLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3VDQXdCYyxBQUNoQjtVQUFJLGFBQVEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixJQUFJLG1CQUFXLEFBQ2hEOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyx5QkFBTixBQUE4Qjt3QkFBOUI7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7aUJBUEYsQUFBTyxBQU9FLEFBRVY7QUFUUSxBQUNMO0FBRkosQUFBWSxBQVdaLE9BWFk7VUFXUixZQUFZLEtBQUEsQUFBSyxNQUFyQixBQUEyQixBQUMzQjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7WUFBQSxBQUFNLFFBQVEsVUFBQSxBQUFVLE1BQVYsQUFBZ0IsT0FBTyxBQUNuQzthQUFBLEFBQUssWUFBWSxVQUFqQixBQUFpQixBQUFVLEFBQzVCO0FBRkQsQUFHQTsyQ0FBTyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBcUIseUJBQUEsQUFBSyxNQUExQixBQUFnQyxRQURoQyxBQUNBLEFBQ0E7O29CQUFBO3NCQUZBLEFBRUEsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEEsQUFHQSxBQUNBLHdDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QixBQUFnQyxxQkFBb0IsTUFBcEQsQUFBeUQsY0FBYSxTQUF0RTtvQkFBQTtzQkFORixBQUlBLEFBQ0EsQUFDRSxBQUdIO0FBSEc7aUJBUkosQUFDRSxBQUNBLEFBU0QsQUFBSyxBQUlQOzs7Ozs7Ozs7Ozs7dUJBeEQyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isb0IsQUFBaEIsQUFBb0M7O21CQUF4RDtBOzt1QkFDd0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHdCLEFBQWhCLEFBQXdDOzttQkFBaEU7QTs7dUJBRVksa0JBQUEsQUFBUSxRQUFSLEFBQWdCLDBCLEFBQWhCLEFBQTBDOzttQkFBdEQ7QSwrQkFDQTtBLDZCQUFhLEksQUFBQSxBQUFJLEFBQ2pCO0EseUJBQVMsSSxBQUFBLEFBQUk7O3VCQUNJLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0Esb0NBQ0E7QSx5QkFBUyx3QixBQUFBLEFBQVM7O3VCQUNILGtCQUFBLEFBQVEsUUFBUixBQUFnQixRLEFBQWhCLEFBQXdCOzttQkFBdkM7QTs7dUJBQ1UsT0FBQSxBQUFPLFFBQVAsQUFBZSxVQUFmLEFBQXlCLFEsQUFBekIsQUFBaUM7O21CQUE3QztBOzt1QkFFZ0IsT0FBQSxBQUFPLFFBQVAsQUFBZSxVQUFmLEFBQXlCLFFBQVEsWUFBakMsQUFBaUMsQUFBWSxJLEFBQTdDLEFBQWlEOzttQkFBL0Q7QSxpQ0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksb0JBQW9CLFlBQWhDLEFBQWdDLEFBQVksSUFBNUMsQUFBZ0QsUUFBaEQsQUFBd0QsUUFBeEQsQUFBZ0U7O21EQUV4RCxhQUFELEFBQWMsQUFDYjttQ0FERCxBQUNrQixBQUNqQjs4QkFGRCxBQUVhLEFBQ1o7MEIsQUFIRCxBQUdTLE1BSFQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q1gsQSxBQTlEOEI7O2tCQThEOUIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamNvb3Blci9weS9jcnlwdG8vY29uc2Vuc3lzL2Jsb2NrY2hhaW4tZGV2ZWxvcGVyLWJvb3RjYW1wLWZpbmFsLXByb2plY3QifQ==