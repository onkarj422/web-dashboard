import React, { useState } from 'react';
import Card from 'components/Card';
import Header from 'components/Header';
import Select, { components } from 'components/Select';
import ColumnChart from './ColumnChart';
import { months, years } from './constants';
import { visitorsBreakdown } from './visitors';

// eslint-disable-next-line react/prop-types
const Control = ({ children, ...props }) => (
  <components.Control
    className="w-32 border border-gray-300 rounded shadow interactive ripple"
    {...props}
  >
    {children}
  </components.Control>
);

const DailyVisitors = () => {
  const [month, onChangeMonth] = useState(months[0]);
  const [year, onChangeYear] = useState(years[49]);

  const monthSelector = (
    <Select
      components={{ Control }}
      options={months}
      value={month}
      onChange={onChangeMonth}
    />
  );

  const yearSelector = (
    <Select
      components={{ Control }}
      options={years}
      value={year}
      onChange={onChangeYear}
    />
  );

  return (
    <Card padding="p-0" height="h-full">
      <Header
        title={
          <span className="font-semibold text-gray-700">Daily Visitors</span>
        }
        actionRight={[monthSelector, yearSelector]}
      />
      <div className="h-full p-6">
        <div className="w-full h-56 overflow-scroll">
          <ColumnChart series={visitorsBreakdown} metric="Visitors" />
        </div>
      </div>
    </Card>
  );
};

export default DailyVisitors;
