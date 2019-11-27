import React from 'react';
import { PropTypes } from 'prop-types';
import Card from 'components/Card';
import Header from 'components/Header';
import Table from 'components/Table';

const WidgetTable = ({ data, columnConfigs, title }) => (
  <Card padding="p-0" height="h-auto">
    <Header
      title={<span className="font-semibold text-gray-700">{title}</span>}
    />
    <div className="container">
      <Table data={data} columnConfigs={columnConfigs} />
    </div>
  </Card>
);

WidgetTable.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  columnConfigs: PropTypes.object,
};

export default WidgetTable;
