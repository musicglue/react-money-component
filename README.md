# react-money-component

[![Build Status](https://travis-ci.org/musicglue/react-money-component.svg?branch=master)](https://travis-ci.org/musicglue/react-money-component) [![Coverage Status](https://coveralls.io/repos/musicglue/react-money-component/badge.svg?branch=master&service=github)](https://coveralls.io/github/musicglue/react-money-component?branch=master)

Money handling component for React.js


##### Installation:

```
npm install --save money-component
```

##### Usage:

```
import React from 'react';
import Money from 'money-component';

export default class MyProduct extends React.Component {
  render() {
    return (
      <Money cents={999} currency="GBP" />
    )
  }
}
```

The component returns a `<span/>` containing the formatted value of the currency.
