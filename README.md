# react-money-component
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
