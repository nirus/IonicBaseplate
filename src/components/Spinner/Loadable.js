/**
 * Asynchronously loading the spinner component
 */

import React from 'react';
import loadable from 'src/baseplate/loadable';

export default loadable(() => import('./index'),{
    fallback: <div>Loading..</div>,
  });
