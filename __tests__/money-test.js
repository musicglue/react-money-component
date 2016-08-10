import TestUtils from 'react-addons-test-utils';
import React from 'react';
import Money from '../src/money.js';

jest.unmock('../src/money.js');
jest.unmock('accounting');

const currencyPairs = {
  GBP: '£1.00',
  USD: '$1.00',
  AUD: 'AU$1.00',
  EUR: '€1.00',
  NZD: 'NZ$1.00',
  JPY: '¥100',
};

const shallowRenderer = TestUtils.createRenderer();

describe('Money', () => {
  Object.keys(currencyPairs).forEach(key => {
    const expectedValue = currencyPairs[key];
    it(`Shows the expected ${key} value`, () => {
      shallowRenderer.render(<Money cents={100} currency={key} />);
      const output = shallowRenderer.getRenderOutput();
      expect(output.type).toBe('span');
      expect(output.props.children).toEqual(expectedValue);
    });
  });
});
