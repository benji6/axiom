import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, PROP_TYPES_TEXT, mergeDefaultClassName } from '../../defaults';

export default class Underline extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    ...PROP_TYPES_TEXT,
    children: PropTypes.node,
  };

  render() {
    const {children} = this.props;
    const className = mergeDefaultClassName(this.props);

    return (
      <u {...this.props} className={className}>
        {children}
      </u>
    );
  }
}