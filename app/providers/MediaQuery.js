import React, { createContext, useContext, useMemo } from 'react';
import useMedia from 'use-media';

const MEDIA_QUERY = {
  xs: '(max-width: 767px)',
  md: '(min-width: 768px )',
  lg: '(min-width 992px)',
  prefersReducedMotion: '(prefers-reduced-motion: reduce)',
};

export const MediaQueryContext = createContext(null);

export default function MediaQueryProvider({ children }) {
  const md = useMedia(MEDIA_QUERY.md);
  const lg = useMedia(MEDIA_QUERY.lg);
  const xs = useMedia(MEDIA_QUERY.xs);
  const prefersReducedMotion = useMedia(MEDIA_QUERY.prefersReducedMotion);
  const value = useMemo(() => ({ md, lg, xs, prefersReducedMotion }), [
    md,
    lg,
    xs,
    prefersReducedMotion,
  ]);

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
}

MediaQueryProvider.propTypes = {
  children: React.ReactNode,
};

export function useMediaQueryContext() {
  return useContext(MediaQueryContext);
}
