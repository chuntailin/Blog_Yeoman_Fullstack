/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import <%= component.className %> from '<%= component.webpackPath %>';

describe('<%= component.className %>', () => {
    let component;

    beforeEach(() => {
      component = createComponent(<%= component.className %>);
    });

    it('should exist', () => {
      expect(component).to.not.be.undfinded;
      expect(component).to.not.be.null;
      expect(component).to.be.ok;
    });
});
