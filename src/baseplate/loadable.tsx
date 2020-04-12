import React, { lazy, Suspense } from 'react';

const loadable = (importFunc: () => Promise<{ default: React.ComponentType<any>; }>, { fallback = null }: { fallback : JSX.Element | null } ):React.FC<any> => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};

export default loadable;
