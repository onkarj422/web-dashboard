import React from 'react';
import { PropTypes } from 'prop-types';
import { Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import './styles.scss';

const DataTable = ({ data, columnConfigs }) => {
  // eslint-disable-next-line react/prop-types
  const cellRenderer = ({ columnData, cellData }) => {
    const CellComponent = columnData.cellComponent;
    if (!CellComponent) {
      return <div>{cellData}</div>;
    }
    if (columnData.isNumeric) {
      const specs = columnData.specs || {};
      return <CellComponent cellData={{ ...specs, cellValue: cellData }} />;
    }
    return <CellComponent cellData={cellData} />;
  };

  return (
    <Table
      gridClassName="w-full"
      width={600}
      height={260}
      headerHeight={40}
      rowHeight={64}
      rowCount={data.length}
      rowGetter={({ index }) => data[index]}
    >
      <For each="column" of={Object.keys(columnConfigs)}>
        <Column
          className="mx-6"
          headerClassName="flex items-center ml-6"
          columnData={columnConfigs[column]}
          cellRenderer={cellRenderer}
          flexGrow={1}
          dataKey={column}
          label={columnConfigs[column].label}
          width={columnConfigs[column].width}
        />
      </For>
    </Table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
  columnConfigs: PropTypes.object,
  //   cellRenderer: PropTypes.func,
};

export default DataTable;
