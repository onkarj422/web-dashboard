export const routes = [
  {
    path: 'dashboard',
    label: 'Dashboard',
    iconClass: 'fa fa-th-large',
    childRoutes: [
      {
        path: '/page-visitors',
        label: 'Page Visitors',
      },
      {
        path: '/post-performance',
        label: 'Post Performance',
      },
      {
        path: '/team-overall',
        label: 'Team Overall',
      },
    ],
  },
  {
    path: 'calendar',
    label: 'Calendar',
    iconClass: 'fa fa-calendar',
  },
  {
    path: 'inbox',
    label: 'Inbox',
    iconClass: 'fa fa-inbox',
  },
  {
    path: 'invoicing',
    label: 'Invoicing',
    iconClass: 'fa fa-book',
  },
  {
    path: 'lab',
    label: 'Lab / Experimental',
    iconClass: 'fa fa-flask',
  },
];
