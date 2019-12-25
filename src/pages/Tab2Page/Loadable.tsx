/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'src/common/loadable';
import LoadingIndicator from 'src/widgets/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
