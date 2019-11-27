import React from 'react';
import Dashboard from 'containers/Dashboard/Loadable';
import dashboardRoutes from 'containers/Dashboard/routes';

export default [
  {
    path: '',
    label: 'Dashboard',
    component: Dashboard,
    iconClass: 'fa fa-th-large',
    routes: dashboardRoutes,
  },
  {
    path: '/calendar',
    label: 'Calendar',
    component: () => <div>calendar</div>,
    iconClass: 'fa fa-calendar',
  },
  {
    path: '/inbox',
    label: 'Inbox',
    component: () => <div>inbox</div>,
    iconClass: 'fa fa-inbox',
  },
  {
    path: '/invoicing',
    label: 'Invoicing',
    component: () => <div>invoicing</div>,
    iconClass: 'fa fa-book',
  },
  {
    path: '/lab',
    label: 'Lab / Experimental',
    component: () => <div>lab</div>,
    iconClass: 'fa fa-flask',
  },
];
