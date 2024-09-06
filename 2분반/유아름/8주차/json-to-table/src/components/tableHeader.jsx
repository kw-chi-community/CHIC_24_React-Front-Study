import React from 'react';

function TableHeader({ onSort, sortConfig }) {
  const getSortArrow = (columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === 'asc' ? ' ↓' : ' ↑';
    }
    return '';
  };

  return (
    <tr>
      <th onClick={() => onSort('Name')}>Name {getSortArrow('Name')}</th>
      <th onClick={() => onSort('Age')}>Age {getSortArrow('Age')}</th>
      <th onClick={() => onSort('City')}>City {getSortArrow('City')}</th>
    </tr>
  );
}

export default TableHeader;
