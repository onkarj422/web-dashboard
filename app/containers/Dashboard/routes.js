import React from 'react';
import PageVisitors from './containers/PageVisitors';

export default [
  {
    path: '/page-visitors',
    component: PageVisitors,
    label: 'Page Visitors',
  },
  {
    path: '/post-performance',
    component: () => <div>post performance</div>,
    label: 'Post Performance',
  },
  {
    path: '/team-overall',
    component: () => <div>team overall</div>,
    label: 'Team Overall',
  },
];
