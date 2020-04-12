/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'src/baseplate/loadable';
import LoadingIndicator from 'src/components/Spinner/Loadable';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
