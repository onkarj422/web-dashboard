import React from 'react';
import { LayoutContext } from './LayoutProvider';

const withLayout = Component => props => (
  <LayoutContext.Consumer>
    {context => <Component {...props} layout={context} />}
  </LayoutContext.Consumer>
);

export default withLayout;
