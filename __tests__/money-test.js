jest.dontMock('../src/money.js');
jest.dontMock('accounting');

var currencyPairs = {
  GBP: '£1.00',
  USD: '$1.00',
  AUD: 'AU$1.00',
  EUR: '€1.00',
  NZD: 'NZ$1.00',
  JPY: '¥100',
};

describe('Money', function() {
  var TestUtils = require('react-addons-test-utils');
  var findDOMNode = require('react-dom').findDOMNode;
  var React = require('react');
  var Money;

  beforeEach(function() {
    Money = require('../src/money.js');
  });

  Object.keys(currencyPairs).forEach(function(key) {
    var expectedValue = currencyPairs[key];
    it('Shows the expected ' + key + ' value', function() {
      var rendered = TestUtils.renderIntoDocument(
        <Money cents={100} currency={key} />
      );
      var span = TestUtils.findRenderedDOMComponentWithTag(rendered, 'span');
      expect(findDOMNode(span).textContent).toEqual(expectedValue);
    });
  });
});
