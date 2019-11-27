import NumericCell from 'components/Table/components/NumericCell';
import PageNameCell from './widgets/WidgetTable/components/PageNameCell';

export const siteInfo = [
  {
    title: 'Realtime Users',
    count: {
      value: 56,
    },
    difference: 9.8,
    isPositive: true,
  },
  {
    title: 'Total Visits',
    count: {
      value: 54598,
    },
    difference: 11.9,
    isPositive: false,
  },
  {
    title: 'Bounce Rate',
    count: {
      value: 56,
      isPercentage: true,
    },
    difference: 12.2,
    isPositive: true,
  },
  {
    title: 'Visit Duration',
    count: {
      value: 64,
      isSeconds: true,
    },
    difference: 19.6,
    isPositive: true,
  },
];

export const mostVisitedPages = [
  {
    pageName: '/store/',
    visitors: 4890,
    uniquePageVisits: 3985,
    bounceRate: 81.56,
  },
  {
    pageName: '/store/symbols-styleguides',
    visitors: 3785,
    uniquePageVisits: 3182,
    bounceRate: 62.56,
  },
  {
    pageName: '/store/dashboard-ui-kit',
    visitors: 2985,
    uniquePageVisits: 2115,
    bounceRate: 58.76,
  },
  {
    pageName: '/store/webflow-cards.html',
    visitors: 2440,
    uniquePageVisits: 1789,
    bounceRate: 39.59,
  },
];

export const socialMediaTraffic = [
  {
    network: 'Instagram',
    visitors: 3550,
  },
  {
    network: 'Facebook',
    visitors: 2236,
  },
  {
    network: 'Twitter',
    visitors: 1795,
  },
  {
    network: 'LinkedIn',
    visitors: 62,
  },
];

export const MOST_VISITED_PAGES = {
  pageName: {
    label: 'Page Name',
    width: 108,
    cellComponent: PageNameCell,
  },
  visitors: {
    label: 'Visitors',
    isNumeric: true,
    specs: {},
    width: 108,
    cellComponent: NumericCell,
  },
  uniquePageVisits: {
    label: 'Unique Page Visits',
    isNumeric: true,
    specs: {},
    width: 108,
    cellComponent: NumericCell,
  },
  bounceRate: {
    label: 'Bounce Rate',
    isNumeric: true,
    specs: { isPercentage: true },
    width: 108,
    cellComponent: NumericCell,
  },
};

export const SOCIAL_MEDIA_TRAFFIC = {
  network: {
    label: 'Network',
    width: 108,
  },
  visitors: {
    label: 'Visitors',
    isNumeric: true,
    specs: {},
    width: 108,
    cellComponent: NumericCell,
  },
};
