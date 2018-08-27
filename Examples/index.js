/*---
title: 'Examples'
description: 'This is a description.'
product: 'maps'
---*/

import React from 'react';
import ExamplesPage from '../../../components/examples-page';

export default class MapsExamplesPage extends React.PureComponent {
  render() {
    return <ExamplesPage frontMatter={this.props.frontMatter} />;
  }
}
