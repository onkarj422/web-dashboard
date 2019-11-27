import React from 'react';
import { PropTypes } from 'prop-types';

const ColumnChart = ({ series, metric }) => (
  <div className="container h-full relative">
    <div className="container h-full flex flex-col items-center justify-between z-10">
      <div className="w-full h-px bg-gray-300" />
      <div className="w-full h-px bg-gray-300" />
      <div className="w-full h-px bg-gray-300" />
      <div className="w-full h-px bg-gray-300" />
    </div>
    <div className="container h-full absolute top-0 px-2 z-20">
      <div className="flex w-11/12 -mx-2 h-full justify-between items-end">
        <For each="value" of={series}>
          <div
            style={{ height: `${Math.ceil((value / 9000) * 100)}%` }}
            className="w-3 px-1 bg-blue-500"
          />
        </For>
      </div>
    </div>
  </div>
);

ColumnChart.propTypes = {
  series: PropTypes.array,
  metric: PropTypes.string,
};

export default ColumnChart;
