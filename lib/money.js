'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Money;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _currency = require('js-money/lib/currency');

var _currency2 = _interopRequireDefault(_currency);

var _accounting = require('accounting');

var _accounting2 = _interopRequireDefault(_accounting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formattedAmount(cents, currency) {
  var _Currency$currency = _currency2.default[currency];
  var symbol = _Currency$currency.symbol;
  var precision = _Currency$currency.decimal_digits;

  var amount = cents / Math.pow(10, precision);

  return _accounting2.default.formatMoney(amount, { symbol: symbol, precision: precision });
}

function Money(_ref) {
  var cents = _ref.cents;
  var currency = _ref.currency;

  return _react2.default.createElement(
    'span',
    null,
    formattedAmount(cents, currency)
  );
}

Money.propTypes = {
  cents: _react2.default.PropTypes.number.isRequired,
  currency: _react2.default.PropTypes.string.isRequired
};